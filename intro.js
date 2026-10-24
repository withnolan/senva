(() => {
  const root = document.documentElement;
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  if (reducedMotion.matches || location.hash || performance.getEntriesByType('navigation')[0]?.type === 'back_forward') return;
  root.classList.add('booting');
  let complete = false;
  let minimumElapsed = false;
  let assetsReady = false;
  let minimumTimer;
  let safetyTimer;
  let assetTimer;
  const interactions = ['pointerdown', 'keydown', 'wheel', 'touchstart'];
  const finish = () => {
    if (complete) return;
    complete = true;
    clearTimeout(minimumTimer);
    clearTimeout(safetyTimer);
    clearTimeout(assetTimer);
    interactions.forEach(type => removeEventListener(type, skip));
    reducedMotion.removeEventListener('change', onMotionChange);
    removeEventListener('pageshow', onPageShow);
    root.classList.remove('booting');
    if (scrollY < 80) root.classList.add('enter');
  };
  const releaseWhenReady = () => {
    if (!complete && minimumElapsed && assetsReady) requestAnimationFrame(finish);
  };
  const skip = () => {
    if (complete) return;
    root.classList.add('intro-skipped');
    finish();
  };
  const onMotionChange = event => { if (event.matches) skip(); };
  const onPageShow = event => { if (event.persisted) skip(); };
  // The requested two-second opening remains skippable; failed assets cannot trap it.
  minimumTimer = setTimeout(() => {
    minimumElapsed = true;
    releaseWhenReady();
  }, 2000);
  safetyTimer = setTimeout(finish, 2800);
  const prepare = () => {
    if (complete) return;
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
  reducedMotion.addEventListener('change', onMotionChange);
  addEventListener('pageshow', onPageShow);
})();
