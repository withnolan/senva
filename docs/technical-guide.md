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
| `intro.js` | Cubierta inicial opcional, espera de recursos críticos con límite, salida por interacción y entrada posterior; no espera el GLB. |
| `bilingual-layout.js` | Reserva natural máxima EN/ES por grupo, clones inertes y caché de medición. |
| `legal.html`, `legal.css` | Términos, privacidad y almacenamiento, ambas lenguas en HTML nativo, sin JS ni rastreo. |
| `script.js` | 122 claves EN/ES, metadatos, menú, sección activa, Lenis, progreso decorativo y carga opcional del modelo. |
| `glasses-3d.js` | Escena opcional de gafas, encuadre, materiales, giro con el progreso existente y limpieza de GPU. |
| `assets/vendor/three/*` | Three.js r169, GLTFLoader, Meshopt, utilidades y entorno; copia local mínima MIT, unos 859 KB sin comprimir, cargada cerca de visión. |
| `assets/vendor/lenis/*` | Lenis vanilla 1.3.27: JS minificado de 18 815 bytes, CSS recomendado, licencia MIT y registro de procedencia/integridad. |
| `assets/illustrations/conversation-devices.webp` | Ilustración2D de adultos con dispositivo conceptual,1200×800, alfa, aproximadamente129 KB. |
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

El recorrido se amplía sobre los apartados existentes. A partir de **1100×700**, con JS, observador disponible y sin preferencia reducida, la visión usa `position:sticky` desde **la altura real de cabecera más 28 px**. Sus dos lecturas reservan al menos **125svh cada una**, con texto sticky dentro de su propio artículo y altura adicional si el contenido lo necesita. La figura queda en la columna contigua, dentro de la sección; voz/gafas/subtítulos y guante/contexto/salida pendiente se relevan como grupos completos sin atravesar el texto. A reposa al principio; la salida y entrada recíprocas usan42–45 px, escala de0,94–1 y fundidos de0,30/0,32 del progreso, frente a los0,10/0,14 anteriores. El relevo se desarrolla entre0,24 y0,78 y deja reposo final. La primera composición desaparece completamente. Concepto y pie permanecen fijos; las máscaras se limitan al campo decorativo, nunca a los párrafos principales. En tamaños inferiores se muestran en flujo, sin pin.

Los fondos ocupan todo el ancho mediante secciones reales y contenido en `.wrap`. La base conserva azul noche, blanco cálido y turquesa. Se añaden azul profundo `#174a69`, hielo `#ddebf5` y lavanda `#c8d3f4`: el experimento pasa de azul a noche; visión de hielo a mint; validación de lavanda a papel. Investigación usa hielo y Xiji lavanda. Sobre hielo/lavanda, etiquetas y acentos pequeños usan navy para conservar contraste. Equipo/contacto mantienen su composición y Manrope; biografías pasan a14 px.

Tres `.cinema-track` contienen el contenido real: encabezado de visión con cintas y gafas, texto/hoja de práctica y decisiones. Práctica/validación usan planos de luz radial suaves y fondos continuos, sin aperturas sólidas gigantes. No se duplican encabezados ni se añaden datos. `.cinema-stage` es el escenario interior. A partir de1100×700, solo si su altura natural cabe bajo cabecera, `.is-fixed` activa `position:sticky` y tracks de210/225/205svh. Si no cabe, permanece en flujo. La reserva bilingüe toma el máximo EN/ES para decidir altura y modo común, sin igualar líneas. Las ventanas de700–800px de alto tienen composición compacta.

El progreso fijo es `(scrollY - (top - headerHeight)) / (trackHeight - stageHeight)`. Entrada0–0,60, cruce0,05–0,95 y asentamiento0,36–0,96; el recorrido amplio ocupa0–1. Las poses siguen el documento sin otro motor. Práctica aproxima la hoja0,78→1 con pan máximo3vw/40px y giro−4°→0 durante todo el recorrido. Validación aproxima su contenido0,9→1 con pan de3vw. Las capas decorativas son `aria-hidden`; los párrafos principales no se funden. Propósito/equipo usan curvas; Xiji conserva su puente90/70px. Xiji→contacto elimina la elipse recortada y disuelve lavanda→noche con extremos idénticos a las superficies adyacentes. El título real de contacto aproxima0,80→1 con pan de4vw/65px en1,3viewport; móvil reduce el desplazamiento y escala. Equipo/Xiji usan1,2viewport. El clip de portada contiene su zoom de entrada sin bloquear el documento.

El principio existente tiene un escenario propio de mínimo85svh con altura natural ilimitada, dos jerarquías y glow radial detrás. `cameraPass` calcula el paso por `(viewport + altura del escenario)`: aproxima entre0,02–0,56 (aproximadamente1viewport en el escenario85svh), reposa hasta0,78 y mueve solo la luz al salir. Grupo0,82→1/52px, sin ocultar palabras. El atributo de reserva bilingüe vive en el propio grupo transformado para medir su clon sin escala; no en el párrafo hijo. Móvil/reducido eliminan el mínimo y usan padding. La etiqueta de concepto se concentra en el diagrama; portada conserva estado de idea y límites, y las lentes conservan ficción/pausa. [Dirección y revisión](camera-motion-direction.md).

La cabecera usa el tono de entrada del track hasta el cruce y el de salida después; texto/fondo cambian juntos sin pasar por tonos de contraste pobre. Al cambiar idioma se mide de nuevo y se conserva la fracción si el escenario inicial o final usa fijación. Cuando ambos permanecen en flujo se conserva el bloque de lectura. No se fuerzan saltos ni se igualan líneas; los cuatro textos anteriores ya no contienen saltos editoriales. El grupo de dos fragmentos de contacto conserva su estructura restaurada.

Móvil mantiene escenarios en flujo, sin mínimos de dos pantallas, sin desplazamiento lateral del panel y con la imagen de gafas limitada a76vw y cruce de30 px. Sin JS, sin observador o con movimiento reducido se ocultan las capas decorativas y umbrales; los tres escenarios conservan su contenido real, sin alturas prolongadas, fijación o texto invisible. La señal de foco en el título del destino conserva navegación por teclado.

`measureMotion` cachea posiciones y dimensiones tras cambio de ventana, idioma, tamaño de contenido o carga de fuentes, incluida la altura real de cabecera. Los nuevos grupos se controlan con variables de transform/opacidad; su configuración CSS inicial evita superponer ambas composiciones antes de la primera medición. `updateMotion` deriva del scroll las variables para `transform`, `opacity` y trazados predefinidos de portada, propósito, visión, práctica e interludios. Con Lenis activo, las poses siguen el progreso ya interpolado sin un segundo retardo; en modo nativo mantienen el asentamiento decorativo de 70 ms. El RAF decorativo termina al alcanzar el objetivo y se cancela al ocultar la pestaña. La navegación activa se calcula con esas cajas cacheadas y una línea de lectura al 32 % de la altura de ventana, respetando el espacio de cabecera. No depende de márgenes porcentuales de un observador. Los eventos `toggle` de las preguntas vuelven a medir las posiciones posteriores.

No confundir esta descripción de implementación con mediciones de FPS o verificaciones visuales. Los estados efectivamente revisados, el build y sus límites deben registrarse en [redesign-progress.md](redesign-progress.md). Modificar una trayectoria exige observar comienzo, estados intermedios y regreso en ambos idiomas.

## Carga, entrada y alturas bilingües

`intro.js` se ejecuta en cabecera. La petición actual autoriza una apertura deliberada de2000ms más el siguiente fotograma, independiente de la carga del GLB. Fuentes/imagen crítica esperan hasta900ms; la salida de seguridad independiente de2800ms evita una cubierta persistente aunque el DOM o los recursos fallen. Tecla, rueda, puntero, tacto, cambio a reducido o retorno desde bfcache la omiten inmediatamente con `.intro-skipped`. Anclas, atrás/adelante y reducido inicial no activan cubierta. Temporizadores/listeners se retiran al terminar. Marca y luz se aproximan; al finalizar `.enter` amplía/disuelve la marca durante0,9s y encadena marca → titular → texto → acciones con zoom de la ilustración1,16→1 durante1,7s. La cubierta no bloquea overflow, foco ni puntero. Sin script es invisible; reducido desactiva animaciones. Los2s y la disolución posterior son una decisión visual solicitada, no un indicador del tiempo real de carga.

`bilingual-layout.js` expone `SenvaBilingualLayout.reserve`. Los grupos `[data-bilingual-space]` no se anidan. Cada uno mide clones de ancho de layout idéntico, en el mismo padre para conservar selectores de ancestro, traducidos a EN y ES. Son inertes, ocultos, sin IDs/referencias y se retiran con finally. Se reserva el mayor alto natural mediante `min-block-size`, nunca un alto máximo ni líneas truncadas. La caché excluye altura/reserva/transform; cambia con ancho, tipografía, contenido y estado de details. Fuentes listas fuerzan una nueva medida; resize/orientación/idioma y details vuelven a comprobar. El máximo común de los grupos del escenario determina también si cabe sticky en ambos idiomas. Si el módulo no carga o no hay JS, el texto conserva sus alturas naturales y lectura completa.

Esta técnica se ha probado con un DOM simulado. Igualdad de alturas y fluidez reales en navegador siguen pendientes del acceso, según el registro; no se presentan como verificadas por los mocks.

## Gafas: modelo opcional y respaldo

La petición del 23 de octubre sustituye la restricción histórica de no usar 3D exclusivamente para las gafas. `IntersectionObserver` aproxima la carga a600 px del track de visión. Solo se importa `glasses-3d.js` si hay puntero fino/hover, ventana de al menos1100×700 y no hay movimiento reducido. No se descarga en móvil. Las rutas son relativas al sitio y funcionan bajo `/senva/`.

El renderer usa GLTFLoader con Meshopt, centra la caja real de la montura y conserva materiales. Cámara ortográfica fija, fondo transparente, iluminación suave y DPR máximo1,5. El yaw va de−38° a−338°, con pitch/roll moderados; desde0,83 permanece quieto. La traslación recorre el ancho disponible del escenario, desde el lateral izquierdo al derecho, según ancho de viewport y silueta reservada, en vez de32vw. El material de lente es físico, frío y transparente (alfa0,14), sin el pase extra de transmission. Reflejos radiales suaves siguen copias de la superficie real; no hay barras rectas. Dos planos con CanvasTexture local muestran frases cotidianas ficticias EN/ES completamente en la mitad inferior de cada lente: ancho60%, centro20% de la altura por debajo del centro óptico. Fuente92px con medida del texto compensa el plano más estrecho sin deformar glifos. Usan FrontSide para no leerlas por detrás. Cuatro frases por idioma se escriben a155 ms/carácter, reposan2350 ms y funden600 ms. Instrument Sans y halo leve, sin cursor parpadeante ni aria-live por letra. Se añaden10000 triángulos de reflejo/texto y dos texturas pequeñas. `setLanguage` cambia ambas sin recargar el GLB. `setActive`/`setPaused` controlan el reloj; `setHandoff` interpola a frontal sin una vuelta adicional. No se modifican archivos de modelo. La misma fracción `cinemaProgress` del escenario controla el giro, que se revierte al subir. No añade listeners de rueda, RAF continuo ni otro motor de scroll. El giro y la trayectoria responden al scroll. La petición posterior autoriza además escritura/reflejo continuo solo en las lentes visibles: un único RAF limitado a24 fps, texturas a16 fps y texto solo al cambiar carácter; se cancela con pausa, fuera de pantalla, al ocultar pestaña o disponer recursos.

La imagen tres cuartos permanece en HTML y se oculta solo tras un primer render válido. Mientras la mejora está lista, un único host/canvas pasa a una capa absoluta dentro de visión y la imagen frontal A/B se oculta conservando un hueco estable. No se cambia de renderer o GLB al pasar entre escenas. La trayectoria empieza con todo el canvas fuera por la izquierda, llega a la derecha con32 px de margen y desciende al hueco real; convierte coordenadas viewport/documento y compensa el sticky. Se limita su arco vertical en alturas pequeñas. El ancla del diagrama no transforma con el relevo A/B: etiquetas/voz llevan ese movimiento, evitando un desfase al detenerse. La vista frontal estática permanece disponible sin JS, con movimiento reducido o si la escena no cabe. Controles de pausa en los dos momentos actúan sobre el mismo reloj; la altura de su fila se reserva antes de cargar para no alternar fits y disponer la escena en bucle. Errores de importación/GLB/WebGL o pérdida de contexto recuperan la imagen. Al pasar a móvil/reducido se liberan canvas, geometrías, materiales, entorno y contexto. Un token de generación descarta cargas pendientes obsoletas; se serializan para no mezclar dos instancias al redimensionar. El host vuelve a su lugar de respaldo al desactivar la mejora, y una observación de estado recupera los fallbacks ante pérdida de contexto. No hay controles enfocables en el gráfico decorativo.

El GLB tiene470508 triángulos. La decodificación y envolvente de101 poses se verifican con Node; eso no acredita rendimiento GPU, apariencia del canvas ni FPS. Consultar el registro de revisión antes de afirmar pruebas visuales. No se cargan el maestro de11 MB, la variante brillo ni texturas externas.

## Idiomas y acceso

El selector actualiza `lang`, título, descripción, Open Graph, alternativas y etiquetas accesibles con texto/atributos, sin insertar HTML. Al traducir se conserva la fracción del escenario cuando interviene una fijación; fuera de ellos se conserva aproximadamente el bloque de lectura más cercano. Si Lenis está activo, primero se cancela una animación pendiente con `stop()` y `start()` consecutivos en la misma tarea; después `resize()` y `scrollTo(position, {immediate:true})` ajustan la lectura. `resize()` o un destino inmediato coincidente no garantizan por sí solos la cancelación en esta versión de Lenis. Nunca se deja la instancia detenida. La preferencia en almacenamiento es opcional, protegida con `try/catch`, y solo se escribe al elegir EN/ES. Los enlaces legales actualizan su ancla de idioma. [Alcance y fuentes legales](legal-notes.md).

Sin JS se sirve inglés completo, navegación visible y diagramas en flujo; se ocultan controles de idioma dependientes de script y las capas decorativas. Sin observador se mantiene la lectura normal. `prefers-reduced-motion` elimina entrada, interpolación, sticky prolongado, pasos decorativos, trazados progresivos e inercia/suavizado de scroll; todos los grupos de información se muestran completos.

Hasta 1050 px, el menú cerrado usa `inert` y `aria-hidden`. Abrir enfoca su primer enlace; Escape devuelve foco. Las transiciones de apertura y cierre se activan tras el primer uso, evitando el fundido inicial de un menú que ya debería estar cerrado. Las anclas conservan destinos reales. Con Lenis, un controlador propio actualiza el hash y enfoca el destino al terminar; `anchors:false` evita duplicar el controlador de la biblioteca. `scrollTo(element)` respeta el margen/padding de scroll CSS, sin descontar dos veces la cabecera. Atrás/Adelante, cambios de hash, un nuevo destino, cambios de layout y las teclas de desplazamiento/Tab cancelan la animación pendiente. Las teclas conservan su acción nativa; campos editables y controles que usan Espacio mantienen sus acciones. Esto evita que el destino o callback anterior recupere el scroll/foco. En modo nativo se conserva la navegación del navegador con foco en el destino; detalles técnicos usan `<details>` / `<summary>`. Enlaces externos conservan avisos accesibles y `noopener noreferrer`.

## Mantener y publicar

Después de cambiar CSS/JS, actualizar `?v=` con los primeros ocho caracteres de SHA-256. Primero versionar `glasses-3d.js` en el import de `script.js`, después `intro.js`, `bilingual-layout.js`, CSS/JS en `index.html` y CSS legal en `legal.html`:

```sh
shasum -a 256 styles.css script.js glasses-3d.js intro.js bilingual-layout.js legal.css
```

Comprobar sintaxis, traducciones, HTML, IDs/anclas, recursos, movimiento de ida/vuelta, idiomas durante la lectura, 320 px y ventanas bajas, teclado y alternativas. Repetir las comprobaciones afectadas por correcciones; no sustituir la crítica visual por ausencia de errores técnicos.

GitHub Pages publica `withnolan/senva`, `main`, raíz `/`, modo `legacy`. No requiere configuración nueva. Guardar y pushear cambios autorizados sin force push; confirmar build del SHA y recursos de [la web pública](https://withnolan.github.io/senva/). Un push y una publicación verificada son estados distintos.
