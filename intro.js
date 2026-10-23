(() => {
  const root = document.documentElement;
  if (matchMedia('(prefers-reduced-motion: reduce)').matches || location.hash || performance.getEntriesByType('navigation')[0]?.type === 'back_forward') return;
  root.classList.add('booting');
  let complete = false;
  const finish = () => {
    if (complete) return;
    complete = true;
    root.classList.remove('booting');
    if (scrollY < 80) root.classList.add('enter');
  };
  // A failed image, module or font can never leave a cover over the document.
  setTimeout(finish, 1600);
  addEventListener('DOMContentLoaded', () => {
    const image = document.querySelector('.conversation-art');
    const assets = [document.fonts?.ready, image?.decode?.()].filter(Boolean);
    Promise.race([Promise.allSettled(assets), new Promise(resolve => setTimeout(resolve, 900))])
      .then(() => requestAnimationFrame(finish));
  }, {once: true});
  ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach(type => addEventListener(type, finish, {once: true, passive: true}));
})();
