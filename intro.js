(() => {
  const root = document.documentElement;
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  if (reducedMotion.matches || location.hash || performance.getEntriesByType('navigation')[0]?.type === 'back_forward') return;

  root.classList.add('booting');
  let released = false;
  let settled = false;
  let minimumElapsed = false;
  let assetsReady = false;
  let minimumTimer;
  let safetyTimer;
  let assetTimer;
  let flightTimer;
  let flight = null;
  let languageObserver;
  const interactions = ['pointerdown', 'keydown', 'wheel', 'touchstart', 'focusin'];
  const viewportEvents = ['resize', 'orientationchange', 'scroll', 'hashchange'];

  const clearLoadTimers = () => {
    clearTimeout(minimumTimer);
    clearTimeout(safetyTimer);
    clearTimeout(assetTimer);
  };
  const restoreAttribute = (element, name, value) => {
    if (value === null) element.removeAttribute(name);
    else element.setAttribute(name, value);
  };
  const settle = () => {
    if (settled) return;
    settled = true;
    clearLoadTimers();
    clearTimeout(flightTimer);
    languageObserver?.disconnect();
    // Reveal the real, usable wordmark in the same frame that its visual copy leaves.
    root.classList.remove('intro-brand-flight');
    const current = flight;
    flight = null;
    if (current) {
      current.animation?.cancel();
      current.dotAnimation?.cancel();
      restoreAttribute(current.name, 'style', current.style);
      restoreAttribute(current.name, 'class', current.className);
      restoreAttribute(current.name, 'aria-hidden', current.ariaHidden);
      if (current.placeholder.parentNode) current.placeholder.replaceWith(current.name);
      else current.parent.appendChild(current.name);
    }
    interactions.forEach(type => removeEventListener(type, skip));
    viewportEvents.forEach(type => removeEventListener(type, skip));
    reducedMotion.removeEventListener('change', onMotionChange);
    removeEventListener('pageshow', onPageShow);
    document.removeEventListener('visibilitychange', onVisibilityChange);
  };

  const beginBrandFlight = () => {
    const name = document.querySelector('.loader-name');
    const target = document.querySelector('.site-header .brand > span');
    if (!name || !target || typeof name.animate !== 'function' || scrollY >= 80 || document.hidden) return false;
    const start = name.getBoundingClientRect();
    const end = target.getBoundingClientRect();
    if (![start.left, start.top, start.width, start.height, end.left, end.top, end.width, end.height].every(Number.isFinite)
      || Math.min(start.width, start.height, end.width, end.height) <= 0) return false;

    const computed = getComputedStyle(name);
    const type = Object.fromEntries(['fontFamily', 'fontSize', 'fontWeight', 'fontStyle', 'letterSpacing', 'lineHeight', 'color']
      .map(property => [property, computed[property]]));
    const targetColor = getComputedStyle(target).color;
    const dot = name.querySelector('span');
    const targetDot = target.querySelector('span');
    const dotColor = dot ? getComputedStyle(dot).color : null;
    const targetDotColor = targetDot ? getComputedStyle(targetDot).color : null;
    const placeholder = document.createElement('span');
    placeholder.setAttribute('aria-hidden', 'true');
    Object.assign(placeholder.style, {
      display: 'block', width: `${start.width}px`, height: `${start.height}px`, flex: 'none'
    });
    const parent = name.parentNode;
    flight = {
      name, parent, placeholder, style: name.getAttribute('style'),
      className: name.getAttribute('class'), ariaHidden: name.getAttribute('aria-hidden')
    };
    parent.insertBefore(placeholder, name);
    name.setAttribute('aria-hidden', 'true');
    name.classList.add('brand-flight');
    Object.assign(name.style, {
      position: 'fixed', left: `${start.left}px`, top: `${start.top}px`,
      width: `${start.width}px`, height: `${start.height}px`, margin: '0',
      display: 'block', boxSizing: 'border-box', whiteSpace: 'nowrap',
      fontFamily: type.fontFamily, fontSize: type.fontSize, fontWeight: type.fontWeight,
      fontStyle: type.fontStyle, letterSpacing: type.letterSpacing, lineHeight: type.lineHeight,
      color: type.color, opacity: '1', visibility: 'visible', pointerEvents: 'none',
      transform: 'none', transformOrigin: '0 0', zIndex: '1002'
    });
    document.body.appendChild(name);
    try {
      const timing = {duration: 1350, easing: 'cubic-bezier(.65,0,.2,1)', fill: 'forwards'};
      flight.animation = name.animate([
        {transform: 'translate(0px, 0px) scale(1, 1)', color: type.color},
        {transform: `translate(${end.left - start.left}px, ${end.top - start.top}px) scale(${end.width / start.width}, ${end.height / start.height})`, color: targetColor}
      ], timing);
      flight.animation.finished.then(settle, settle);
      if (dot && targetDot && typeof dot.animate === 'function') {
        flight.dotAnimation = dot.animate([
          {color: dotColor}, {color: targetDotColor}
        ], timing);
        flight.dotAnimation.finished?.catch(() => {});
      }
      root.classList.add('intro-brand-flight');
      // Also restore the header if an animation implementation never settles its promise.
      flightTimer = setTimeout(settle, 1500);
      if (typeof MutationObserver === 'function') {
        languageObserver = new MutationObserver(skip);
        languageObserver.observe(root, {attributes: true, attributeFilter: ['lang']});
      }
      return true;
    } catch {
      return false;
    }
  };

  const release = (withFlight = true) => {
    if (released || settled) return;
    released = true;
    clearLoadTimers();
    let flying = false;
    try { flying = withFlight && beginBrandFlight(); } catch { /* Restore any partially prepared flight below. */ }
    root.classList.remove('booting');
    if (scrollY < 80) root.classList.add('enter');
    if (!flying) {
      root.classList.add('intro-skipped');
      settle();
    }
  };
  const releaseWhenReady = () => {
    if (!released && !settled && minimumElapsed && assetsReady) requestAnimationFrame(() => release());
  };
  const skip = () => {
    if (settled) return;
    root.classList.add('intro-skipped');
    if (!released) release(false);
    else settle();
  };
  const onMotionChange = event => { if (event.matches) skip(); };
  const onPageShow = event => { if (event.persisted) skip(); };
  const onVisibilityChange = () => { if (document.hidden) skip(); };

  // An intentional opening, independent of the optional 3D scene and always skippable.
  minimumTimer = setTimeout(() => {
    minimumElapsed = true;
    releaseWhenReady();
  }, 2600);
  safetyTimer = setTimeout(() => release(), 3600);
  const prepare = () => {
    if (released || settled) return;
    const image = document.querySelector('.conversation-art');
    const assets = [document.fonts?.ready];
    if (image?.decode) assets.push(Promise.resolve().then(() => image.decode()));
    Promise.race([
      Promise.allSettled(assets.filter(Boolean)),
      new Promise(resolve => { assetTimer = setTimeout(resolve, 900); })
    ]).then(() => {
      clearTimeout(assetTimer);
      assetsReady = true;
      releaseWhenReady();
    });
  };
  if (document.readyState === 'loading') addEventListener('DOMContentLoaded', prepare, {once: true});
  else prepare();
  interactions.forEach(type => addEventListener(type, skip, {once: true, passive: true}));
  viewportEvents.forEach(type => addEventListener(type, skip, {passive: true}));
  reducedMotion.addEventListener('change', onMotionChange);
  addEventListener('pageshow', onPageShow);
  document.addEventListener('visibilitychange', onVisibilityChange);
})();
