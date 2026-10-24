// Option A: scroll + pointer parallax for the hero lens. Sets --fx-p (0..1 scrolled past), --fx-x/--fx-y (-.5..5 pointer).
(() => {
  const hero = document.querySelector('.hero');
  if (!hero || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;
  let frame = 0, px = 0, py = 0;
  const write = () => {
    frame = 0;
    const r = hero.getBoundingClientRect();
    if (r.bottom < -50) return;
    hero.style.setProperty('--fx-p', Math.min(1, Math.max(0, -r.top / Math.max(1, r.height))).toFixed(4));
    hero.style.setProperty('--fx-x', px.toFixed(3));
    hero.style.setProperty('--fx-y', py.toFixed(3));
  };
  const queue = () => { frame ||= requestAnimationFrame(write); };
  addEventListener('scroll', queue, {passive: true});
  addEventListener('resize', queue);
  if (fine) hero.addEventListener('pointermove', event => {
    const r = hero.getBoundingClientRect();
    px = (event.clientX - r.left) / r.width - .5;
    py = (event.clientY - r.top) / r.height - .5;
    queue();
  }, {passive: true});
  queue();
})();
