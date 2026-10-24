// Option B: the glass highlight on the hero lens follows the pointer (--mx/--my, 0..100%).
(() => {
  const hero = document.querySelector('.hero');
  if (!hero || matchMedia('(prefers-reduced-motion: reduce)').matches || !matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  let frame = 0, mx = 70, my = 40;
  const write = () => { frame = 0; hero.style.setProperty('--mx', mx.toFixed(1) + '%'); hero.style.setProperty('--my', my.toFixed(1) + '%'); };
  hero.addEventListener('pointermove', event => {
    const r = hero.getBoundingClientRect();
    mx = (event.clientX - r.left) / r.width * 100;
    my = (event.clientY - r.top) / r.height * 100;
    frame ||= requestAnimationFrame(write);
  }, {passive: true});
})();
