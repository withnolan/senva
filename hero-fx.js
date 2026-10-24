// Option C: while the hero is pinned (desktop), scroll drives --st (0..1): the lens zooms on one person, then pans to the other.
(() => {
  const hero = document.querySelector('.hero');
  const pinned = matchMedia('(min-width: 1100px) and (min-height: 700px) and (prefers-reduced-motion: no-preference)');
  if (!hero) return;
  let frame = 0;
  const write = () => {
    frame = 0;
    if (!pinned.matches) { hero.style.removeProperty('--st'); return; }
    const r = hero.getBoundingClientRect();
    const head = document.querySelector('.site-header')?.offsetHeight || 80;
    const travel = Math.max(1, r.height - (innerHeight - head));
    hero.style.setProperty('--st', Math.min(1, Math.max(0, (head - r.top) / travel)).toFixed(4));
  };
  const queue = () => { frame ||= requestAnimationFrame(write); };
  addEventListener('scroll', queue, {passive: true});
  addEventListener('resize', queue);
  pinned.addEventListener('change', queue);
  queue();
})();
