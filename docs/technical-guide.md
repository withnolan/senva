# SENVA — Guía técnica

La [presentación del proyecto](../README.md) explica misión, personas y estado. La web es HTML/CSS/JS estático, sin compilación, framework o backend. Base visual: [visual-reset-brief.md](visual-reset-brief.md). Dirección vigente de dispositivos y coreografía: [device-motion-direction.md](device-motion-direction.md). La petición posterior de mayor recorrido e inercia real modifica únicamente navegación y transiciones, como se describe abajo; prevalece sobre la antigua prohibición de suavizar la rueda. Organización del equipo: [AGENTS.md](../AGENTS.md). Las comprobaciones realizadas y sus límites están en [redesign-progress.md](redesign-progress.md).

## Ejecutar localmente

Desde la raíz, con Python 3:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Abrir [http://127.0.0.1:8000](http://127.0.0.1:8000); detener con `Ctrl+C`. Para revisar el prefijo de Pages:

```sh
senva_preview_dir="$(mktemp -d)"
ln -s "$PWD" "$senva_preview_dir/senva"
python3 -m http.server 8000 --bind 127.0.0.1 --directory "$senva_preview_dir"
```

Abrir [http://127.0.0.1:8000/senva/](http://127.0.0.1:8000/senva/). No subir arneses o capturas de revisión a los recursos de producción.

## Recursos

| Archivo | Responsabilidad |
| --- | --- |
| `index.html` | Inglés completo de respaldo, contenido, ilustraciones, preguntas, equipo y enlaces. |
| `styles.css` | Un sistema de composición y tipografía; responsive, foco, entrada y alternativa reducida. |
| `script.js` | 114 claves EN/ES, metadatos, menú, sección activa, Lenis, progreso decorativo y carga opcional del modelo. |
| `glasses-3d.js` | Escena opcional de gafas, encuadre, materiales, giro con el progreso existente y limpieza de GPU. |
| `assets/vendor/three/*` | Three.js r169, GLTFLoader, Meshopt, utilidades y entorno; copia local mínima MIT, unos 859 KB sin comprimir, cargada cerca de visión. |
| `assets/vendor/lenis/*` | Lenis vanilla 1.3.27: JS minificado de 18 815 bytes, CSS recomendado, licencia MIT y registro de procedencia/integridad. |
| `assets/illustrations/conversation-editorial.webp` | Ilustración 2D de dos adultos, 1200×800, alfa, aproximadamente 122 KB. |
| `assets/graphics/glove.svg` | Guante editorial 2D en visión y práctica; versión en su URL. |
| `assets/models/gafas/*` | GLB mate web (1,7 MB) y vistas WebP de respaldo; maestro y brillo conservados sin cargarlos. |
| `assets/fonts/*latin.woff2` | Bricolage Grotesque e Instrument Sans, unos 107 KB en conjunto. Licencias OFL adjuntas. |
| `assets/*.jpg` | Retratos facilitados, originales de 800×800, carga diferida y dimensiones reservadas. |
| `assets/favicon.svg`, `senva-logo.svg` | Identidad conservada; símbolo y palabra de marca también en HTML. |
| `assets/social-card.svg`, `.png` | Fuente editable y exportación social de 1200×630. |
| `.nojekyll` | Entrega directa desde el repositorio. |

La página solicita recursos del propio sitio, sin analítica ni servicios externos. Lenis conserva su [registro de versión y hashes](../assets/vendor/lenis/README.md). La petición expresa posterior autoriza WebGL para las gafas: Three.js r169 y Meshopt también se sirven localmente, con [procedencia y hashes](../assets/vendor/three/README.md), sin framework. La generación/optimización de la ilustración y Sharp fueron herramientas de autoría; no son dependencias del visitante. Manrope vuelve a utilizarse exclusivamente en equipo y contacto, restaurados desde `4269030`. Recursos anteriores no utilizados se conservan como archivo, incluido `assets/graphics/conversation.svg`. No reactivar controladores o estilos históricos.

## Navegación, recorrido y movimiento

La barra derecha del documento se oculta con `scrollbar-width:none` y `html::-webkit-scrollbar`; no se aplica `overflow:hidden` al documento ni se oculta la barra del menú móvil. Scroll, teclado, tacto y anclas mantienen su funcionamiento.

La cabecera contiene **una sola navegación con seis destinos**: propósito, visión, primera hipótesis, preguntas, equipo y Xiji. Se retiró la barra de capítulos separada que se superponía al contenido. `aria-current="location"` señala la sección activa dentro de esa misma navegación. El menú se adapta hasta **1050 px**, incluida la anchura de tablet.

La petición vigente solicita inercia real de página. **Lenis 1.3.27** se carga desde `assets/vendor/lenis/`; no necesita instalación ni CDN. Se inicializa únicamente con una ventana de al menos 1051 px, `hover:hover`, `pointer:fine` y sin preferencia reducida. Usa `autoRaf:true`, `lerp:0.1`, `smoothWheel:true`, `syncTouch:false`, `respectReducedMotion:true` y `anchors:false`. El RAF automático de Lenis actualiza el desplazamiento del documento; no se mueve un contenedor con transformaciones ni se imponen saltos por sección. La clase `.lenis` desactiva el smooth CSS para evitar doble interpolación.

Móvil y entrada táctil conservan su desplazamiento nativo. Al reducir la ventana o activar `prefers-reduced-motion`, se destruye la instancia; al recuperar las condiciones se crea desde la posición actual. Si el archivo de Lenis falta o no expone su constructor, la web sigue con scroll nativo y suavizado CSS para anclas cuando la preferencia lo permite. No se usa `stop()` como alternativa accesible, porque bloquearía el desplazamiento. Este comportamiento no acredita por sí mismo pruebas en dispositivos físicos.

El recorrido se amplía sobre los apartados existentes. A partir de **1100×700**, con JS, observador disponible y sin preferencia reducida, la visión usa `position:sticky` desde **la altura real de cabecera más 28 px**. Sus dos lecturas reservan al menos **125svh cada una**, con texto sticky dentro de su propio artículo y altura adicional si el contenido lo necesita. La figura queda en la columna contigua, dentro de la sección; voz/gafas/subtítulos y guante/contexto/salida pendiente se relevan como grupos completos sin atravesar el texto. A reposa al principio y sale hasta 240 px hacia arriba; B entra hasta 160 px desde abajo y domina antes de la mitad final. La primera composición desaparece completamente. Concepto y pie permanecen fijos; las máscaras se limitan al campo decorativo, nunca a los párrafos principales. En tamaños inferiores se muestran en flujo, sin pin.

Los fondos ocupan todo el ancho mediante secciones reales y contenido en `.wrap`. La base conserva azul noche, blanco cálido y turquesa. Se añaden azul profundo `#174a69`, hielo `#ddebf5` y lavanda `#c8d3f4`: el experimento pasa de azul a noche; visión de hielo a mint; validación de lavanda a papel. Investigación usa hielo y Xiji lavanda. Sobre hielo/lavanda, etiquetas y acentos pequeños usan navy para conservar contraste. Equipo/contacto mantienen su composición y Manrope; biografías pasan a14 px.

Tres `.cinema-track` contienen el contenido real del apartado: encabezado de visión con cintas y gafas; texto/hoja de práctica con planos laterales; decisiones con tres superficies que se abren. No se duplican encabezados ni se añaden datos. `.cinema-stage` es el escenario interior. A partir de1100×700, solo si su altura natural cabe bajo cabecera, `.is-fixed` activa `position:sticky` y tracks de210/225/205svh. Si el texto no cabe, se mantiene en flujo y se evita un recorrido vacío. El contenido determina su altura de forma independiente en EN/ES. Las ventanas de700–800 px de alto tienen composición compacta específica.

El progreso de un escenario fijo recorre `(scrollY - (top - headerHeight)) / (trackHeight - stageHeight)`. Se divide en entrada0–0,22, cruce0,20–0,64 y reposo0,62–0,88; las poses corresponden a la posición nativa, sin otro motor. El campo gráfico puede cambiar ampliamente de escala y desplazarse mientras la lectura principal conserva opacidad. Las capas decorativas son `aria-hidden`; no contienen controles. El panel de práctica rota hasta8° en2D, entra lateralmente y termina completo. Los planos de color laterales no enmascaran los párrafos. Cuatro umbrales breves conservan los enlaces entre los apartados restantes.

La cabecera usa el tono de entrada del track hasta el cruce y el de salida después; texto/fondo cambian juntos sin pasar por tonos de contraste pobre. Al cambiar idioma se mide de nuevo y se conserva la fracción si el escenario inicial o final usa fijación. Cuando ambos permanecen en flujo se conserva el bloque de lectura. No se fuerzan saltos ni se igualan líneas; los cuatro textos anteriores ya no contienen saltos editoriales. El grupo de dos fragmentos de contacto conserva su estructura restaurada.

Móvil mantiene escenarios en flujo, sin mínimos de dos pantallas, sin desplazamiento lateral del panel y con la imagen de gafas limitada a76vw y cruce de30 px. Sin JS, sin observador o con movimiento reducido se ocultan las capas decorativas y umbrales; los tres escenarios conservan su contenido real, sin alturas prolongadas, fijación o texto invisible. La señal de foco en el título del destino conserva navegación por teclado.

`measureMotion` cachea posiciones y dimensiones tras cambio de ventana, idioma, tamaño de contenido o carga de fuentes, incluida la altura real de cabecera. Los nuevos grupos se controlan con variables de transform/opacidad; su configuración CSS inicial evita superponer ambas composiciones antes de la primera medición. `updateMotion` deriva del scroll las variables para `transform`, `opacity` y trazados predefinidos de portada, propósito, visión, práctica e interludios. Con Lenis activo, las poses siguen el progreso ya interpolado sin un segundo retardo; en modo nativo mantienen el asentamiento decorativo de 70 ms. El RAF decorativo termina al alcanzar el objetivo y se cancela al ocultar la pestaña. La navegación activa se calcula con esas cajas cacheadas y una línea de lectura al 32 % de la altura de ventana, respetando el espacio de cabecera. No depende de márgenes porcentuales de un observador. Los eventos `toggle` de las preguntas vuelven a medir las posiciones posteriores.

No confundir esta descripción de implementación con mediciones de FPS o verificaciones visuales. Los estados efectivamente revisados, el build y sus límites deben registrarse en [redesign-progress.md](redesign-progress.md). Modificar una trayectoria exige observar comienzo, estados intermedios y regreso en ambos idiomas.

## Gafas: modelo opcional y respaldo

La petición del 23 de octubre sustituye la restricción histórica de no usar 3D exclusivamente para las gafas. `IntersectionObserver` aproxima la carga a600 px del track de visión. Solo se importa `glasses-3d.js` si hay puntero fino/hover, ventana de al menos1100×700 y no hay movimiento reducido. No se descarga en móvil. Las rutas son relativas al sitio y funcionan bajo `/senva/`.

El renderer usa GLTFLoader con Meshopt, centra la caja real de la montura y conserva materiales. Cámara ortográfica fija, fondo transparente, iluminación suave y DPR máximo1,5. El yaw va de−38° a−338°, con pitch/roll moderados; desde0,83 permanece quieto. La misma fracción `cinemaProgress` del escenario controla el giro, que se revierte al subir. No añade listeners de rueda, RAF continuo ni otro motor de scroll. Solo se dibuja al cambiar pose o tamaño y no se actualiza fuera del track visible.

La imagen tres cuartos permanece en HTML y se oculta solo tras un primer render válido. El diagrama A/B usa una vista frontal estática del mismo modelo, disponible sin JS y con movimiento reducido aunque se oculten las capas decorativas. Errores de importación/GLB/WebGL o pérdida de contexto recuperan la imagen. Al pasar a móvil/reducido se liberan canvas, geometrías, materiales, entorno y contexto. Un token de generación descarta cargas pendientes obsoletas; se serializan para no mezclar dos instancias al redimensionar. No hay controles enfocables en el gráfico decorativo.

El GLB tiene470508 triángulos. La decodificación y envolvente de101 poses se verifican con Node; eso no acredita rendimiento GPU, apariencia del canvas ni FPS. Consultar el registro de revisión antes de afirmar pruebas visuales. No se cargan el maestro de11 MB, la variante brillo ni texturas externas.

## Idiomas y acceso

El selector actualiza `lang`, título, descripción, Open Graph, alternativas y etiquetas accesibles con texto/atributos, sin insertar HTML. Al traducir se conserva la fracción del escenario cuando interviene una fijación; fuera de ellos se conserva aproximadamente el bloque de lectura más cercano. Si Lenis está activo, primero se cancela una animación pendiente con `stop()` y `start()` consecutivos en la misma tarea; después `resize()` y `scrollTo(position, {immediate:true})` ajustan la lectura. `resize()` o un destino inmediato coincidente no garantizan por sí solos la cancelación en esta versión de Lenis. Nunca se deja la instancia detenida. La preferencia en almacenamiento es opcional, protegida con `try/catch`.

Sin JS se sirve inglés completo, navegación visible y diagramas en flujo; se ocultan controles de idioma dependientes de script y las capas decorativas. Sin observador se mantiene la lectura normal. `prefers-reduced-motion` elimina entrada, interpolación, sticky prolongado, pasos decorativos, trazados progresivos e inercia/suavizado de scroll; todos los grupos de información se muestran completos.

Hasta 1050 px, el menú cerrado usa `inert` y `aria-hidden`. Abrir enfoca su primer enlace; Escape devuelve foco. Las transiciones de apertura y cierre se activan tras el primer uso, evitando el fundido inicial de un menú que ya debería estar cerrado. Las anclas conservan destinos reales. Con Lenis, un controlador propio actualiza el hash y enfoca el destino al terminar; `anchors:false` evita duplicar el controlador de la biblioteca. `scrollTo(element)` respeta el margen/padding de scroll CSS, sin descontar dos veces la cabecera. Atrás/Adelante, cambios de hash, un nuevo destino, cambios de layout y las teclas de desplazamiento/Tab cancelan la animación pendiente. Las teclas conservan su acción nativa; campos editables y controles que usan Espacio mantienen sus acciones. Esto evita que el destino o callback anterior recupere el scroll/foco. En modo nativo se conserva la navegación del navegador con foco en el destino; detalles técnicos usan `<details>` / `<summary>`. Enlaces externos conservan avisos accesibles y `noopener noreferrer`.

## Mantener y publicar

Después de cambiar CSS/JS, actualizar `?v=` con los primeros ocho caracteres de SHA-256. Primero versionar `glasses-3d.js` en el import de `script.js`, después actualizar CSS/JS en `index.html`:

```sh
shasum -a 256 styles.css script.js glasses-3d.js
```

Comprobar sintaxis, traducciones, HTML, IDs/anclas, recursos, movimiento de ida/vuelta, idiomas durante la lectura, 320 px y ventanas bajas, teclado y alternativas. Repetir las comprobaciones afectadas por correcciones; no sustituir la crítica visual por ausencia de errores técnicos.

GitHub Pages publica `withnolan/senva`, `main`, raíz `/`, modo `legacy`. No requiere configuración nueva. Guardar y pushear cambios autorizados sin force push; confirmar build del SHA y recursos de [la web pública](https://withnolan.github.io/senva/). Un push y una publicación verificada son estados distintos.
