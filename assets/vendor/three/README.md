# Three.js r169 (0.169.0)

Copia local mínima, licencia MIT adjunta. Solo la mejora opcional de gafas carga estos módulos, desde el propio sitio. Sin CDN, controles orbitales, Draco ni KTX2.

Origen: [paquete oficial npm](https://registry.npmjs.org/three/0.169.0), [fuente r169](https://github.com/mrdoob/three.js/tree/r169). El tarball se verificó contra `dist.integrity` (SHA-512) antes de extraer los seis archivos explícitos.

Se preservan los archivos originales excepto las rutas de importación: `three` apunta a `./three.module.min.js` en GLTFLoader, BufferGeometryUtils y RoomEnvironment; GLTFLoader apunta a `./BufferGeometryUtils.js`. Meshopt incluye su decodificador WASM en el propio módulo y no solicita otro recurso.

SHA-256 de las copias servidas:

```text
b9ea77ef3aacbf82d386c33311067e6ea4a3aac4190b32e001bdd11d063fb6ae  BufferGeometryUtils.js
fc8d3a207d3120c98c99a29ca29043df5561bfecea94817c6c8ea92ede14eae9  GLTFLoader.js
4c40a1ef62450b857c3b2aaf294936304cd552d965fbcd9d32d4c5bcf4ba4454  LICENSE
625d0d8ac8690a73799ea0e2c577d6260162e0da97698c4fe9b03715909ac214  RoomEnvironment.js
01f48524f4bac6141eaba07e94cc36e7ee56f311796fa6117c159842941b0468  meshopt_decoder.module.js
f7cee3c7533449a1505cc12cb5128b89e3d4fd3d7ea62b05f9f5464a217472ee  three.module.min.js
```
