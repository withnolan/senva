import * as THREE from './assets/vendor/three/three.module.min.js';
import { GLTFLoader } from './assets/vendor/three/GLTFLoader.js';
import { MeshoptDecoder } from './assets/vendor/three/meshopt_decoder.module.js';
import { RoomEnvironment } from './assets/vendor/three/RoomEnvironment.js';

const radians = THREE.MathUtils.degToRad;
const clamp = value => Number.isFinite(value) ? Math.min(1, Math.max(0, value)) : 0;
const ease = value => value * value * (3 - 2 * value);
// Fictional everyday captions: a visual illustration of the concept only.
// Line positions are fixed per phrase so a word never jumps while being typed.
const subtitlePhrases = {
  en: [
    ['So good to', 'see you.'],
    ['Tell me', 'your idea.'],
    ['Shall we', 'sit here?'],
    ["I'd love to know", 'your story.']
  ],
  es: [
    ['Qué alegría', 'verte.'],
    ['Cuéntame', 'tu idea.'],
    ['¿Nos sentamos', 'aquí?'],
    ['Quiero conocer', 'tu historia.']
  ]
};
const characterTime = 155;
const captionHold = 2350;
const captionFade = 600;
const captionGap = 160;
const idleFrameInterval = 1000 / 24;
const reflectionInterval = 1000 / 16;

function captionAt(language, elapsed) {
  const phrases = subtitlePhrases[language];
  const lengths = phrases.map(lines => lines.join(' ').length);
  const durations = lengths.map(length => length * characterTime + captionHold + captionFade + captionGap);
  const totalDuration = durations.reduce((sum, duration) => sum + duration, 0);
  let time = Math.max(0, elapsed) % totalDuration;
  let index = 0;
  while (time >= durations[index]) time -= durations[index++];
  const typingEnd = lengths[index] * characterTime;
  const fadeStart = typingEnd + captionHold;
  const opacity = time <= fadeStart ? 1 : 1 - ease(clamp((time - fadeStart) / captionFade));
  return {
    lines: phrases[index], index,
    count: Math.min(lengths[index], Math.floor(time / characterTime) + 1),
    opacity
  };
}

// A continuous yaw discovers the back, then returns to a readable front view.
// The last 17% is a still pose, rather than another turn or an automatic loop.
const poses = [
  { at: 0, x: -8, y: -38, z: -8 },
  { at: .2, x: -12, y: -65, z: -4 },
  { at: .64, x: 12, y: -235, z: 7 },
  { at: .83, x: -6, y: -338, z: -2 }
];

function poseAt(progress) {
  const end = poses.findIndex(pose => pose.at >= progress);
  if (end < 0) return poses.at(-1);
  if (end === 0) return poses[0];
  const from = poses[end - 1];
  const to = poses[end];
  const amount = ease((progress - from.at) / (to.at - from.at));
  return {
    x: THREE.MathUtils.lerp(from.x, to.x, amount),
    y: THREE.MathUtils.lerp(from.y, to.y, amount),
    z: THREE.MathUtils.lerp(from.z, to.z, amount)
  };
}

function disposeObject(object) {
  const geometries = new Set();
  const materials = new Set();
  const textures = new Set();
  object?.traverse(node => {
    if (node.geometry) geometries.add(node.geometry);
    const nodeMaterials = Array.isArray(node.material) ? node.material : [node.material];
    for (const material of nodeMaterials) {
      if (!material) continue;
      materials.add(material);
      for (const value of Object.values(material)) {
        if (value?.isTexture) textures.add(value);
      }
    }
  });
  textures.forEach(texture => texture.dispose());
  materials.forEach(material => material.dispose());
  geometries.forEach(geometry => geometry.dispose());
}

// The overlays use each real lens mesh as their reference. Nothing is attached
// to the screen, and the caption planes have a front face only, so the wording
// disappears naturally as the frame turns away. These are fictional captions
// illustrating the labelled concept, not live recognition or a working display.
function createLensArtwork() {
  const reflectionCanvas = document.createElement('canvas');
  reflectionCanvas.width = 512;
  reflectionCanvas.height = 256;
  const reflectionContext = reflectionCanvas.getContext('2d');
  const subtitleCanvas = document.createElement('canvas');
  subtitleCanvas.width = 1024;
  subtitleCanvas.height = 448;
  const subtitleContext = subtitleCanvas.getContext('2d');
  if (!reflectionContext || !subtitleContext) throw new Error('The lens artwork could not be prepared.');

  const reflectionTexture = new THREE.CanvasTexture(reflectionCanvas);
  reflectionTexture.colorSpace = THREE.SRGBColorSpace;
  const subtitleTexture = new THREE.CanvasTexture(subtitleCanvas);
  subtitleTexture.colorSpace = THREE.SRGBColorSpace;
  reflectionTexture.generateMipmaps = false;
  subtitleTexture.generateMipmaps = false;
  reflectionTexture.minFilter = THREE.LinearFilter;
  subtitleTexture.minFilter = THREE.LinearFilter;
  const reflectionMaterial = new THREE.MeshBasicMaterial({
    map: reflectionTexture, transparent: true, opacity: .52,
    depthWrite: false, toneMapped: false, side: THREE.FrontSide,
    polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -1
  });
  const subtitleMaterial = new THREE.MeshBasicMaterial({
    map: subtitleTexture, transparent: true, opacity: .94,
    depthWrite: false, toneMapped: false, side: THREE.FrontSide
  });
  let currentLanguage = 'en';
  let textClock = subtitlePhrases.en[0].join(' ').length * characterTime;
  let reflectionClock = 0;
  let previousReflectionTime = -Infinity;
  let previousTextKey = '';
  let previousPose = -1;

  // Only soft pools of light, clipped by the actual lens mesh. Radial gradients
  // have no hard edge or straight stripe; their centers drift over ~20 seconds.
  // Scroll changes their position too, so the glass responds while travelling.
  function paintReflection(progress = 0, force = false) {
    if (!force && reflectionClock - previousReflectionTime < reflectionInterval && Math.abs(progress - previousPose) < .006) return false;
    previousReflectionTime = reflectionClock;
    previousPose = progress;
    const phase = reflectionClock / 1000;
    const drift = Math.sin(phase * .27);
    reflectionContext.clearRect(0, 0, 512, 256);
    function pool(x, y, radius, stretch, bright, mint) {
      reflectionContext.save();
      reflectionContext.translate(x, y);
      reflectionContext.scale(1, stretch);
      const light = reflectionContext.createRadialGradient(0, 0, 0, 0, 0, radius);
      light.addColorStop(0, `rgba(248, 255, 255, ${bright})`);
      light.addColorStop(.28, `rgba(235, 255, 251, ${bright * .62})`);
      light.addColorStop(.64, `rgba(141, 224, 212, ${mint})`);
      light.addColorStop(1, 'rgba(221, 251, 249, 0)');
      reflectionContext.fillStyle = light;
      reflectionContext.beginPath();
      reflectionContext.arc(0, 0, radius, 0, Math.PI * 2);
      reflectionContext.fill();
      reflectionContext.restore();
    }
    pool(102 + progress * 260 + drift * 54, 20 + Math.cos(phase * .19) * 27,
      184, .66, .72, .14);
    pool(410 - progress * 155 + Math.cos(phase * .23) * 37, 242 + drift * 19,
      176, .72, .34, .09);
    reflectionTexture.needsUpdate = true;
    return true;
  }

  function paintCaption(force = false) {
    const caption = captionAt(currentLanguage, textClock);
    const key = `${currentLanguage}:${caption.index}:${caption.count}`;
    let changed = false;
    if (force || key !== previousTextKey) {
      previousTextKey = key;
      subtitleContext.clearRect(0, 0, 1024, 448);
      subtitleContext.textAlign = 'center';
      subtitleContext.textBaseline = 'middle';
      subtitleContext.font = '600 108px "Instrument Sans", Arial, sans-serif';
      subtitleContext.fontKerning = 'normal';
      const fullWidth = Math.max(...caption.lines.map(line => subtitleContext.measureText(line).width));
      // The longest phrase uses a slightly smaller font, with no compressed text.
      const fontSize = Math.min(108, 108 * 904 / Math.max(fullWidth, 1));
      subtitleContext.font = `600 ${fontSize}px "Instrument Sans", Arial, sans-serif`;
      subtitleContext.shadowColor = 'rgba(255, 255, 255, .85)';
      subtitleContext.shadowBlur = 12;
      subtitleContext.fillStyle = '#082f3a';
      subtitleContext.lineJoin = 'round';
      let offset = 0;
      caption.lines.forEach((line, index) => {
        const visible = line.slice(0, Math.max(0, caption.count - offset));
        // Position the partial text within its final line width, rather than
        // moving the entire line each time another character is revealed.
        const full = subtitleContext.measureText(line).width;
        subtitleContext.textAlign = 'left';
        const left = (1024 - full) / 2;
        const baseline = 144 + index * 131;
        // Dark lettering with a pale halo reads on both the light lens and the
        // dark frame edge; it is not a panel behind the captions.
        subtitleContext.strokeStyle = 'rgba(255, 255, 255, .8)';
        subtitleContext.lineWidth = 7;
        subtitleContext.strokeText(visible, left, baseline);
        subtitleContext.fillText(visible, left, baseline);
        offset += line.length + 1;
      });
      subtitleContext.shadowBlur = 0;
      subtitleTexture.needsUpdate = true;
      changed = true;
    }
    const opacity = .94 * caption.opacity;
    if (Math.abs(subtitleMaterial.opacity - opacity) > .001) {
      subtitleMaterial.opacity = opacity;
      changed = true;
    }
    return changed;
  }

  function setLanguage(language) {
    const next = language === 'es' ? 'es' : 'en';
    if (next === currentLanguage && previousTextKey) return false;
    currentLanguage = next;
    textClock = subtitlePhrases[next][0].join(' ').length * characterTime;
    return paintCaption(true);
  }

  function advance(milliseconds, progress, force = false) {
    const delta = Math.max(0, Math.min(250, Number.isFinite(milliseconds) ? milliseconds : 0));
    textClock += delta;
    reflectionClock += delta;
    // No short-circuit: both textures can change during the same frame.
    const captionChanged = paintCaption(force);
    const reflectionChanged = paintReflection(progress, force);
    return captionChanged || reflectionChanged;
  }

  paintCaption(true);
  paintReflection(0, true);
  return { reflectionMaterial, subtitleMaterial, setLanguage, advance,
    refreshFont() { return paintCaption(true); } };
}

function enhanceLens(lens, artwork) {
  lens.geometry.computeBoundingBox();
  const bounds = lens.geometry.boundingBox;
  const size = bounds.getSize(new THREE.Vector3());
  const center = bounds.getCenter(new THREE.Vector3());
  if (size.x <= 0 || size.y <= 0) return;

  // Modest alpha and clearcoat make the surface visible while retaining a clear
  // view through it. The original frame materials and source GLB stay intact.
  const previousMaterial = lens.material;
  lens.material = new THREE.MeshPhysicalMaterial({
    name: 'senva-concept-clear-lens', color: 0xc9efec,
    roughness: .075, metalness: 0, transparent: true, opacity: .14,
    clearcoat: 1, clearcoatRoughness: .065, ior: 1.46,
    specularIntensity: .7, envMapIntensity: .88,
    depthWrite: false, side: THREE.FrontSide
  });
  lens.renderOrder = 2;

  // Project a soft reflection onto a copy of the real lens surface, rather than
  // a rectangular panel. Its UVs derive from the unscaled local geometry.
  const reflectionGeometry = lens.geometry.clone();
  const position = reflectionGeometry.getAttribute('position');
  const uvs = new Float32Array(position.count * 2);
  for (let i = 0; i < position.count; i++) {
    uvs[i * 2] = (position.getX(i) - bounds.min.x) / size.x;
    uvs[i * 2 + 1] = (position.getY(i) - bounds.min.y) / size.y;
  }
  reflectionGeometry.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
  const reflection = new THREE.Mesh(reflectionGeometry, artwork.reflectionMaterial);
  reflection.name = 'senva-lens-reflection';
  reflection.renderOrder = 3;
  lens.add(reflection);

  // Keep the optical center clear: the entire caption plane lives in the lower
  // half of each real lens. Its narrower safe area follows the rounded rim;
  // larger texture lettering preserves the previous apparent glyph size.
  // A ~0.3 mm front offset prevents intersections and mirrored reverse text.
  const captionWidth = size.x * .82;
  const caption = new THREE.Mesh(
    new THREE.PlaneGeometry(captionWidth, captionWidth * 224 / 512),
    artwork.subtitleMaterial
  );
  caption.name = 'senva-concept-caption';
  caption.position.set(center.x, center.y - size.y * .20, bounds.max.z + size.x * .006);
  caption.renderOrder = 4;
  lens.add(caption);
  return previousMaterial;
}

/**
 * Scroll renders immediately; a visible, explicitly activated scene may also
 * animate its fictional captions and soft reflection at a limited frame rate.
 * A render-on-change enhancement. The host's image is always left in the DOM;
 * CSS may hide it only while .is-ready confirms a successfully drawn canvas.
 * The caller owns visibility, scroll scheduling, reduced motion and disposal.
 */
export async function createGlassesScene(host, { modelUrl, initialProgress = 0, language = 'en' } = {}) {
  if (!host || !modelUrl) throw new TypeError('A host and a local glasses model URL are required.');

  let renderer;
  let environment;
  let loadedModel;
  let disposed = false;
  let lastProgress = -1;
  let lastPoseKey = '';
  let handoff = 0;
  let active = false;
  let paused = false;
  let animationFrame = 0;
  let lastAnimationTime = null;
  let lastArtworkTime = null;
  let lensArtwork;
  let width = 0;
  let height = 0;
  let halfWidth = 0;
  let halfHeight = 0;
  const scene = new THREE.Scene();
  const pivot = new THREE.Group();
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, .001, 10);
  const canvas = document.createElement('canvas');
  canvas.setAttribute('aria-hidden', 'true');
  canvas.tabIndex = -1;
  canvas.style.cssText = 'display:block;width:100%;height:100%;pointer-events:none;';
  host.classList.remove('is-ready');

  function dispose() {
    if (disposed) return;
    disposed = true;
    stopAnimation();
    host.classList.remove('is-ready');
    canvas.removeEventListener('webglcontextlost', onContextLost);
    canvas.remove();
    scene.environment = null;
    disposeObject(loadedModel);
    environment?.dispose();
    renderer?.renderLists.dispose();
    renderer?.dispose();
    renderer?.forceContextLoss();
    scene.clear();
  }

  function onContextLost(event) {
    event.preventDefault();
    dispose();
  }

  function draw() {
    if (disposed || !loadedModel || width < 1 || height < 1) return false;
    try {
      if (renderer.getContext().isContextLost()) {
        dispose();
        return false;
      }
      renderer.render(scene, camera);
      if (disposed || renderer.getContext().isContextLost()) {
        dispose();
        return false;
      }
      host.classList.add('is-ready');
      return true;
    } catch {
      dispose();
      return false;
    }
  }

  function resize() {
    if (disposed) return;
    // Client dimensions are unaffected by the outer scroll transform.
    width = host.clientWidth;
    height = host.clientHeight;
    if (width < 1 || height < 1) return;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.setSize(width, height, false);
    const aspect = width / height;
    const vertical = Math.max(halfHeight, halfWidth / aspect);
    camera.left = -vertical * aspect;
    camera.right = vertical * aspect;
    camera.top = vertical;
    camera.bottom = -vertical;
    camera.updateProjectionMatrix();
    draw();
  }

  function applyPose() {
    const pose = poseAt(Math.max(0, lastProgress));
    const amount = ease(handoff);
    // -360 keeps the approved continuous yaw; normalizing to zero here would
    // make the transition spin backwards through almost an entire revolution.
    const x = THREE.MathUtils.lerp(pose.x, -2, amount);
    const y = THREE.MathUtils.lerp(pose.y, -360, amount);
    const z = THREE.MathUtils.lerp(pose.z, 0, amount);
    const poseKey = `${x}:${y}:${z}`;
    if (poseKey === lastPoseKey) return false;
    lastPoseKey = poseKey;
    pivot.rotation.set(radians(x), radians(y), radians(z), 'YXZ');
    return true;
  }

  function update(progress) {
    if (disposed) return;
    const next = clamp(progress);
    if (Math.abs(next - lastProgress) < .00001) return;
    lastProgress = next;
    const poseChanged = applyPose();
    const artworkChanged = lensArtwork?.advance(0, next);
    if (poseChanged || artworkChanged) draw();
  }

  function setHandoff(amount) {
    if (disposed) return;
    const next = clamp(amount);
    if (Math.abs(next - handoff) < .00001) return;
    handoff = next;
    if (applyPose()) draw();
  }

  function setLanguage(nextLanguage) {
    if (disposed || !lensArtwork || !lensArtwork.setLanguage(nextLanguage)) return;
    draw();
  }

  function stopAnimation() {
    if (animationFrame) cancelAnimationFrame(animationFrame);
    animationFrame = 0;
    lastAnimationTime = null;
    lastArtworkTime = null;
  }

  function animate(timestamp) {
    animationFrame = 0;
    if (disposed || !active || paused) { lastAnimationTime = null; lastArtworkTime = null; return; }
    if (lastAnimationTime === null) lastAnimationTime = lastArtworkTime = timestamp;
    const delta = timestamp - lastAnimationTime;
    if (delta >= idleFrameInterval) {
      // Preserve the fractional remainder so 60 Hz displays average 24 updates,
      // rather than accidentally dropping to one update every three frames.
      lastAnimationTime = timestamp - delta % idleFrameInterval;
      const artworkDelta = timestamp - lastArtworkTime;
      lastArtworkTime = timestamp;
      if (lensArtwork?.advance(artworkDelta, Math.max(0, lastProgress))) draw();
    }
    if (!disposed && active && !paused) animationFrame = requestAnimationFrame(animate);
  }

  function syncAnimation() {
    if (disposed || !active || paused) { stopAnimation(); return; }
    if (!animationFrame) animationFrame = requestAnimationFrame(animate);
  }

  function setActive(value) {
    if (disposed) return;
    active = Boolean(value);
    syncAnimation();
  }

  function setPaused(value) {
    if (disposed) return;
    paused = Boolean(value);
    syncAnimation();
  }

  try {
    renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: 'low-power' });
    canvas.addEventListener('webglcontextlost', onContextLost);
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.AgXToneMapping;
    renderer.toneMappingExposure = 1.1;
    renderer.shadowMap.enabled = false;
    camera.position.set(0, 0, .6);
    camera.lookAt(0, 0, 0);
    scene.add(pivot);

    const pmrem = new THREE.PMREMGenerator(renderer);
    const room = new RoomEnvironment();
    try {
      environment = pmrem.fromScene(room, .04);
      scene.environment = environment.texture;
      scene.environmentIntensity = .8;
    } finally {
      room.dispose();
      pmrem.dispose();
    }
    scene.add(new THREE.HemisphereLight(0xffffff, 0x8de0d4, .8));
    const key = new THREE.DirectionalLight(0xffffff, 2.4);
    key.position.set(-.2, .3, .4);
    scene.add(key);
    const rim = new THREE.DirectionalLight(0xffffff, 1.6);
    rim.position.set(.2, .15, -.3);
    scene.add(rim);

    await MeshoptDecoder.ready;
    if (disposed) throw new Error('Glasses renderer was disposed during initialization.');
    const loader = new GLTFLoader().setMeshoptDecoder(MeshoptDecoder);
    const gltf = await loader.loadAsync(modelUrl);
    if (disposed) {
      disposeObject(gltf.scene);
      throw new Error('Glasses renderer was disposed while the model loaded.');
    }
    loadedModel = gltf.scene;
    const box = new THREE.Box3().setFromObject(loadedModel);
    const size = box.getSize(new THREE.Vector3());
    if (box.isEmpty() || ![size.x, size.y, size.z].every(value => Number.isFinite(value) && value > 0)) {
      throw new Error('The glasses model has no usable bounds.');
    }
    loadedModel.position.sub(box.getCenter(new THREE.Vector3()));
    const lenses = [];
    loadedModel.traverse(node => {
      if (!node.isMesh) return;
      if (node.name === 'lente-derecha' || node.name === 'lente-izquierda') lenses.push(node);
      node.castShadow = false;
      node.receiveShadow = false;
      const materials = Array.isArray(node.material) ? node.material : [node.material];
      for (const material of materials) {
        if (material?.transparent) {
          material.depthWrite = false;
          node.renderOrder = 2;
        }
      }
    });
    if (lenses.length) {
      lensArtwork = createLensArtwork();
      const previousMaterials = new Set(lenses.map(lens => enhanceLens(lens, lensArtwork)));
      previousMaterials.forEach(material => material?.dispose());
      lensArtwork.setLanguage(language);
      // Font loading is not a prerequisite for reading or seeing the model.
      // Refresh only the current caption if the local UI font arrives later.
      document.fonts?.ready.then(() => {
        if (!disposed && lensArtwork?.refreshFont()) draw();
      }).catch(() => {});
    }
    pivot.add(loadedModel);

    // A stable envelope of the real XZ diagonal accommodates every yaw, pitch
    // and roll. Resizing fits this envelope; scroll never changes the camera.
    const horizontalRadius = Math.hypot(size.x, size.z) / 2;
    const pitchRoll = Math.acos(Math.cos(radians(12)) * Math.cos(radians(8)));
    halfWidth = (horizontalRadius + size.y / 2 * Math.sin(radians(8))) * 1.08;
    halfHeight = (size.y / 2 + horizontalRadius * Math.sin(pitchRoll)) * 1.08;
    host.append(canvas);
    update(initialProgress);
    resize();
    if (disposed) throw new Error('The glasses model could not be drawn.');
    return { update, resize, setLanguage, setActive, setPaused, setHandoff, dispose, hasAnimation: Boolean(lensArtwork) };
  } catch (error) {
    dispose();
    throw error;
  }
}
