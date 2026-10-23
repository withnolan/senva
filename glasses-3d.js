import * as THREE from './assets/vendor/three/three.module.min.js';
import { GLTFLoader } from './assets/vendor/three/GLTFLoader.js';
import { MeshoptDecoder } from './assets/vendor/three/meshopt_decoder.module.js';
import { RoomEnvironment } from './assets/vendor/three/RoomEnvironment.js';

const radians = THREE.MathUtils.degToRad;
const clamp = value => Number.isFinite(value) ? Math.min(1, Math.max(0, value)) : 0;
const ease = value => value * value * (3 - 2 * value);
const subtitleLines = {
  en: ['Shall we meet', 'here tomorrow?'],
  es: ['¿Nos vemos', 'aquí mañana?']
};

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
  subtitleCanvas.width = 512;
  subtitleCanvas.height = 224;
  const subtitleContext = subtitleCanvas.getContext('2d');
  if (!reflectionContext || !subtitleContext) throw new Error('The lens artwork could not be prepared.');

  // A broad, quiet reflection follows the actual silhouette of the curved lens.
  // No transmission render target or extra scene render is required.
  reflectionContext.save();
  reflectionContext.translate(256, 128);
  reflectionContext.rotate(-.37);
  const reflection = reflectionContext.createLinearGradient(-156, 0, 46, 0);
  reflection.addColorStop(0, 'rgba(248, 255, 255, 0)');
  reflection.addColorStop(.38, 'rgba(221, 251, 249, .17)');
  reflection.addColorStop(.48, 'rgba(248, 255, 255, .82)');
  reflection.addColorStop(.65, 'rgba(141, 224, 212, .14)');
  reflection.addColorStop(1, 'rgba(248, 255, 255, 0)');
  reflectionContext.fillStyle = reflection;
  reflectionContext.fillRect(-180, -240, 230, 480);
  reflectionContext.fillStyle = 'rgba(248, 255, 255, .28)';
  reflectionContext.fillRect(64, -240, 3, 480);
  reflectionContext.restore();

  const reflectionTexture = new THREE.CanvasTexture(reflectionCanvas);
  reflectionTexture.colorSpace = THREE.SRGBColorSpace;
  const subtitleTexture = new THREE.CanvasTexture(subtitleCanvas);
  subtitleTexture.colorSpace = THREE.SRGBColorSpace;
  const reflectionMaterial = new THREE.MeshBasicMaterial({
    map: reflectionTexture, transparent: true, opacity: .38,
    depthWrite: false, toneMapped: false, side: THREE.FrontSide,
    polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -1
  });
  const subtitleMaterial = new THREE.MeshBasicMaterial({
    map: subtitleTexture, transparent: true, opacity: .96,
    depthWrite: false, toneMapped: false, side: THREE.FrontSide
  });
  let currentLanguage;

  function setLanguage(language) {
    const next = language === 'es' ? 'es' : 'en';
    if (next === currentLanguage) return false;
    currentLanguage = next;
    subtitleContext.clearRect(0, 0, 512, 224);
    subtitleContext.textAlign = 'center';
    subtitleContext.textBaseline = 'middle';
    subtitleContext.font = '500 41px Arial, sans-serif';
    subtitleContext.shadowColor = 'rgba(141, 224, 212, .95)';
    subtitleContext.shadowBlur = 10;
    subtitleContext.fillStyle = '#f4ffff';
    subtitleLines[next].forEach((line, index) => {
      subtitleContext.fillText(line, 256, 76 + index * 61, 456);
    });
    subtitleContext.shadowBlur = 0;
    const underline = subtitleContext.createLinearGradient(155, 0, 357, 0);
    underline.addColorStop(0, 'rgba(141, 224, 212, 0)');
    underline.addColorStop(.3, 'rgba(141, 224, 212, .9)');
    underline.addColorStop(.7, 'rgba(141, 224, 212, .9)');
    underline.addColorStop(1, 'rgba(141, 224, 212, 0)');
    subtitleContext.fillStyle = underline;
    subtitleContext.fillRect(155, 188, 202, 2);
    subtitleTexture.needsUpdate = true;
    return true;
  }

  return { reflectionMaterial, subtitleMaterial, setLanguage };
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
    roughness: .065, metalness: 0, transparent: true, opacity: .22,
    clearcoat: 1, clearcoatRoughness: .045, ior: 1.45,
    specularIntensity: .85, envMapIntensity: 1.15,
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

  // The caption sits inside the central safe area of each real lens. Offset by
  // ~0.3 mm from the front, it never intersects the frame or appears backwards.
  const captionWidth = size.x * .72;
  const caption = new THREE.Mesh(
    new THREE.PlaneGeometry(captionWidth, captionWidth * 224 / 512),
    artwork.subtitleMaterial
  );
  caption.name = 'senva-concept-caption';
  caption.position.set(center.x, center.y - size.y * .055, bounds.max.z + size.x * .006);
  caption.renderOrder = 4;
  lens.add(caption);
  return previousMaterial;
}

/**
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

  function update(progress) {
    if (disposed) return;
    const next = clamp(progress);
    if (Math.abs(next - lastProgress) < .00001) return;
    lastProgress = next;
    const pose = poseAt(next);
    const poseKey = `${pose.x}:${pose.y}:${pose.z}`;
    if (poseKey === lastPoseKey) return;
    lastPoseKey = poseKey;
    pivot.rotation.set(radians(pose.x), radians(pose.y), radians(pose.z), 'YXZ');
    draw();
  }

  function setLanguage(nextLanguage) {
    if (disposed || !lensArtwork || !lensArtwork.setLanguage(nextLanguage)) return;
    draw();
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
    return { update, resize, setLanguage, dispose };
  } catch (error) {
    dispose();
    throw error;
  }
}
