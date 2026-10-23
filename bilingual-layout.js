/* Reserve the larger natural EN/ES height without prescribing line breaks. */
(() => {
  'use strict';

  const cache = new WeakMap();
  const typography = [
    'font-family', 'font-size', 'font-weight', 'font-style', 'font-stretch',
    'font-variation-settings', 'font-feature-settings', 'font-optical-sizing',
    'font-kerning', 'line-height', 'letter-spacing', 'word-spacing',
    'white-space', 'text-wrap', 'text-wrap-mode', 'text-wrap-style',
    'overflow-wrap', 'word-break', 'hyphens', 'text-indent', 'text-transform',
    'writing-mode', 'text-orientation', 'direction'
  ];
  const layout = [
    'display', 'position', 'box-sizing', 'width', 'min-width', 'max-width',
    'inline-size', 'min-inline-size', 'max-inline-size',
    'padding-top', 'padding-right', 'padding-bottom', 'padding-left',
    'margin-top', 'margin-right', 'margin-bottom', 'margin-left',
    'border-top-width', 'border-right-width', 'border-bottom-width', 'border-left-width',
    'column-gap', 'row-gap', 'grid-template-columns', 'grid-auto-flow',
    'flex-direction', 'flex-wrap', 'flex-grow', 'flex-shrink', 'flex-basis',
    'align-items', 'align-content', 'justify-content', 'aspect-ratio'
  ];
  const measuredProperties = [...typography, ...layout];
  const referenceAttributes = [
    'id', 'for', 'headers', 'form', 'list', 'autofocus',
    'aria-labelledby', 'aria-describedby', 'aria-controls', 'aria-owns',
    'aria-activedescendant', 'aria-details', 'aria-errormessage',
    'data-bilingual-space'
  ];

  function elements(blocks) {
    if (!blocks) return [];
    return blocks.nodeType === 1 ? [blocks] : Array.from(blocks).filter(block => block?.nodeType === 1);
  }

  function hiddenInClosedDetails(source) {
    let ancestor = source.parentElement;
    while (ancestor) {
      if (ancestor.tagName === 'DETAILS' && !ancestor.open) {
        const summary = Array.from(ancestor.children).find(child => child.tagName === 'SUMMARY');
        if (!summary?.contains(source)) return true;
      }
      ancestor = ancestor.parentElement;
    }
    return false;
  }

  function signature(source, width, translations) {
    const nodes = [source, ...source.querySelectorAll('*')];
    const values = [width];
    for (const node of nodes) {
      const style = getComputedStyle(node);
      values.push(node.tagName, ...measuredProperties.map(property => style.getPropertyValue(property)));
      if (node.tagName === 'DETAILS') values.push(node.open);
      if (node.matches('img, svg, video, canvas')) {
        // Replaced elements can settle after loading while the block's width stays unchanged.
        values.push(style.height, node.getAttribute('width'), node.getAttribute('height'),
          node.getAttribute('src'), node.naturalWidth, node.naturalHeight);
      }
      const key = node.getAttribute('data-i18n');
      if (key) values.push(key, translations.en[key], translations.es[key]);
    }
    // Exclude block heights, min-height, transforms and the reservation itself:
    // writing a reservation must not invalidate the next ResizeObserver pass.
    return JSON.stringify(values);
  }

  function prepareClone(source, width) {
    const clone = source.cloneNode(true);
    for (const node of [clone, ...clone.querySelectorAll('*')]) {
      referenceAttributes.forEach(attribute => node.removeAttribute(attribute));
      node.style.setProperty('animation', 'none', 'important');
      node.style.setProperty('transition', 'none', 'important');
    }
    clone.setAttribute('aria-hidden', 'true');
    clone.setAttribute('inert', '');
    const overrides = {
      position: 'fixed', left: '-200vw', top: '0', right: 'auto', bottom: 'auto',
      visibility: 'hidden', 'pointer-events': 'none', transform: 'none',
      'box-sizing': 'border-box', width: `${width}px`, 'inline-size': `${width}px`,
      'min-width': '0', 'max-width': 'none', 'min-inline-size': '0', 'max-inline-size': 'none',
      height: 'auto', 'block-size': 'auto', 'min-height': '0', 'min-block-size': '0',
      'max-height': 'none', 'max-block-size': 'none', 'content-visibility': 'visible'
    };
    for (const [property, value] of Object.entries(overrides)) clone.style.setProperty(property, value, 'important');
    clone.style.removeProperty('--bilingual-space');
    return clone;
  }

  function translate(clone, language, copy) {
    clone.lang = language;
    const nodes = clone.matches('[data-i18n]')
      ? [clone, ...clone.querySelectorAll('[data-i18n]')]
      : [...clone.querySelectorAll('[data-i18n]')];
    for (const node of nodes) {
      const key = node.getAttribute('data-i18n');
      if (Object.prototype.hasOwnProperty.call(copy, key)) node.textContent = copy[key];
    }
  }

  function reserve(blocks, translations, {force = false} = {}) {
    const result = {changed: 0, measured: 0, skipped: 0};
    if (!translations?.en || !translations?.es) return result;
    for (const source of elements(blocks)) {
      const width = source.offsetWidth;
      if (!source.isConnected || !source.parentElement || width < 1 ||
          source.getClientRects().length === 0 || hiddenInClosedDetails(source)) {
        result.skipped++;
        continue;
      }
      const key = signature(source, width, translations);
      const previous = cache.get(source);
      if (!force && previous?.key === key) {
        // Restore a reservation if another caller explicitly removed its inline value.
        const value = `${previous.height}px`;
        if (source.style.getPropertyValue('--bilingual-space') !== value) {
          source.style.setProperty('--bilingual-space', value);
          result.changed++;
        }
        continue;
      }
      let clone;
      try {
        clone = prepareClone(source, width);
        // Keep #team / #vision and other ancestor selectors identical to the source.
        source.parentElement.appendChild(clone);
        let height = 0;
        for (const language of ['en', 'es']) {
          translate(clone, language, translations[language]);
          height = Math.max(height, clone.getBoundingClientRect().height);
        }
        if (!Number.isFinite(height) || height <= 0) {
          result.skipped++;
          continue;
        }
        height = Math.ceil(height);
        const value = `${height}px`;
        if (source.style.getPropertyValue('--bilingual-space') !== value) {
          source.style.setProperty('--bilingual-space', value);
          result.changed++;
        }
        cache.set(source, {key, height});
        result.measured++;
      } finally {
        clone?.remove();
      }
    }
    return result;
  }

  function reset(blocks) {
    for (const source of elements(blocks)) {
      source.style.removeProperty('--bilingual-space');
      cache.delete(source);
    }
  }

  window.SenvaBilingualLayout = Object.freeze({reserve, reset});
})();
