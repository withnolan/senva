# SENVA — Guía técnica

La [presentación del proyecto](../README.md) explica misión, personas y estado. La web es HTML/CSS/JS estático, sin compilación, framework o backend. Base visual: [visual-reset-brief.md](visual-reset-brief.md). La petición posterior de mayor recorrido e inercia real modifica únicamente navegación y transiciones, como se describe abajo; prevalece sobre la antigua prohibición de suavizar la rueda. Organización del equipo: [AGENTS.md](../AGENTS.md). Las comprobaciones realizadas y sus límites están en [redesign-progress.md](redesign-progress.md).

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
| `script.js` | 114 claves EN/ES, metadatos, menú, sección activa, Lenis y progreso decorativo. |
| `assets/vendor/lenis/*` | Lenis vanilla 1.3.27: JS minificado de 18 815 bytes, CSS recomendado, licencia MIT y registro de procedencia/integridad. |
| `assets/illustrations/conversation-editorial.webp` | Ilustración 2D de dos adultos, 1200×800, alfa, aproximadamente 122 KB. |
| `assets/graphics/glasses.svg`, `glove.svg` | Dispositivos planos compartidos por visión y práctica. |
| `assets/fonts/*latin.woff2` | Bricolage Grotesque e Instrument Sans, unos 107 KB en conjunto. Licencias OFL adjuntas. |
| `assets/*.jpg` | Retratos facilitados, originales de 800×800, carga diferida y dimensiones reservadas. |
| `assets/favicon.svg`, `senva-logo.svg` | Identidad conservada; símbolo y palabra de marca también en HTML. |
| `assets/social-card.svg`, `.png` | Fuente editable y exportación social de 1200×630. |
| `.nojekyll` | Entrega directa desde el repositorio. |

La página solicita recursos del propio sitio. No ejecuta modelos, WebGL, analítica ni servicios externos. La única biblioteca del visitante es Lenis, servida localmente y sin framework; su [registro de versión y hashes](../assets/vendor/lenis/README.md) permite comprobar la copia. La generación/optimización de la ilustración y Sharp fueron herramientas de autoría; no son dependencias del visitante. Manrope vuelve a utilizarse exclusivamente en equipo y contacto, restaurados desde `4269030`. Recursos anteriores no utilizados se conservan como archivo, incluido `assets/graphics/conversation.svg`. No reactivar controladores o estilos históricos.

## Navegación, recorrido y movimiento

La cabecera contiene **una sola navegación con seis destinos**: propósito, visión, primera hipótesis, preguntas, equipo y Xiji. Se retiró la barra de capítulos separada que se superponía al contenido. `aria-current="location"` señala la sección activa dentro de esa misma navegación. El menú se adapta hasta **1050 px**, incluida la anchura de tablet.

La petición vigente solicita inercia real de página. **Lenis 1.3.27** se carga desde `assets/vendor/lenis/`; no necesita instalación ni CDN. Se inicializa únicamente con una ventana de al menos 1051 px, `hover:hover`, `pointer:fine` y sin preferencia reducida. Usa `autoRaf:true`, `lerp:0.1`, `smoothWheel:true`, `syncTouch:false`, `respectReducedMotion:true` y `anchors:false`. El RAF automático de Lenis actualiza el desplazamiento del documento; no se mueve un contenedor con transformaciones ni se imponen saltos por sección. La clase `.lenis` desactiva el smooth CSS para evitar doble interpolación.

Móvil y entrada táctil conservan su desplazamiento nativo. Al reducir la ventana o activar `prefers-reduced-motion`, se destruye la instancia; al recuperar las condiciones se crea desde la posición actual. Si el archivo de Lenis falta o no expone su constructor, la web sigue con scroll nativo y suavizado CSS para anclas cuando la preferencia lo permite. No se usa `stop()` como alternativa accesible, porque bloquearía el desplazamiento. Este comportamiento no acredita por sí mismo pruebas en dispositivos físicos.

El recorrido se amplía sobre los apartados existentes. A partir de **1100×700**, con JS, observador disponible y sin preferencia reducida, la visión usa `position:sticky` desde **la altura real de cabecera más 28 px**. Sus dos lecturas reservan al menos **110svh cada una**, con texto sticky dentro de su propio artículo y altura adicional si el contenido lo necesita. La figura queda en la columna contigua, dentro de la sección; voz/gafas/subtítulos y guante/contexto/salida pendiente evolucionan como grupos sin atravesar el texto. En tamaños inferiores se muestran en flujo, sin pin.

Dos **interludios SVG decorativos** entre los apartados dan continuidad mediante un campo plano y el revelado de un hilo. No incorporan texto, datos ni nuevas secciones de contenido. El espacio entre apartados también crece; se acorta en pantallas pequeñas. Sin JS, sin observador o con movimiento reducido, los interludios no se muestran y desaparecen las fijaciones prolongadas. Equipo y contacto conservan la composición restaurada.

`measureMotion` cachea posiciones y dimensiones tras cambio de ventana, idioma, tamaño de contenido o carga de fuentes, incluida la altura real de cabecera. `updateMotion` deriva del scroll las variables para `transform`, `opacity` y trazados predefinidos de portada, propósito, visión, práctica e interludios. Con Lenis activo, las poses siguen el progreso ya interpolado sin un segundo retardo; en modo nativo mantienen el asentamiento decorativo de 70 ms. El RAF decorativo termina al alcanzar el objetivo y se cancela al ocultar la pestaña. La navegación activa se calcula con esas cajas cacheadas y una línea de lectura al 32 % de la altura de ventana, respetando el espacio de cabecera. No depende de márgenes porcentuales de un observador. Los eventos `toggle` de las preguntas vuelven a medir las posiciones posteriores.

No confundir esta descripción de implementación con mediciones de FPS o verificaciones visuales. Los estados efectivamente revisados, el build y sus límites deben registrarse en [redesign-progress.md](redesign-progress.md). Modificar una trayectoria exige observar comienzo, estados intermedios y regreso en ambos idiomas.

## Idiomas y acceso

El selector actualiza `lang`, título, descripción, Open Graph, alternativas y etiquetas accesibles con texto/atributos, sin insertar HTML. Al traducir se conserva aproximadamente el bloque de lectura más cercano. Si Lenis está activo, primero se cancela una animación pendiente con `stop()` y `start()` consecutivos en la misma tarea; después `resize()` y `scrollTo(position, {immediate:true})` ajustan la lectura. `resize()` o un destino inmediato coincidente no garantizan por sí solos la cancelación en esta versión de Lenis. Nunca se deja la instancia detenida. La preferencia en almacenamiento es opcional, protegida con `try/catch`.

Sin JS se sirve inglés completo, navegación visible y diagramas en flujo; se ocultan controles de idioma dependientes de script y ambos interludios. Sin observador se mantiene la lectura normal. `prefers-reduced-motion` elimina entrada, interpolación, sticky prolongado, interludios, trazados progresivos e inercia/suavizado de scroll; todos los grupos de información se muestran completos.

Hasta 1050 px, el menú cerrado usa `inert` y `aria-hidden`. Abrir enfoca su primer enlace; Escape devuelve foco. Las transiciones de apertura y cierre se activan tras el primer uso, evitando el fundido inicial de un menú que ya debería estar cerrado. Las anclas conservan destinos reales. Con Lenis, un controlador propio actualiza el hash y enfoca el destino al terminar; `anchors:false` evita duplicar el controlador de la biblioteca. `scrollTo(element)` respeta el margen/padding de scroll CSS, sin descontar dos veces la cabecera. Atrás/Adelante, cambios de hash, un nuevo destino, cambios de layout y las teclas de desplazamiento/Tab cancelan la animación pendiente. Las teclas conservan su acción nativa; campos editables y controles que usan Espacio mantienen sus acciones. Esto evita que el destino o callback anterior recupere el scroll/foco. En modo nativo se conserva la navegación del navegador con foco en el destino; detalles técnicos usan `<details>` / `<summary>`. Enlaces externos conservan avisos accesibles y `noopener noreferrer`.

## Mantener y publicar

Después de cambiar CSS/JS, actualizar `?v=` con los primeros ocho caracteres de SHA-256:

```sh
shasum -a 256 styles.css script.js
```

Comprobar sintaxis, traducciones, HTML, IDs/anclas, recursos, movimiento de ida/vuelta, idiomas durante la lectura, 320 px y ventanas bajas, teclado y alternativas. Repetir las comprobaciones afectadas por correcciones; no sustituir la crítica visual por ausencia de errores técnicos.

GitHub Pages publica `withnolan/senva`, `main`, raíz `/`, modo `legacy`. No requiere configuración nueva. Guardar y pushear cambios autorizados sin force push; confirmar build del SHA y recursos de [la web pública](https://withnolan.github.io/senva/). Un push y una publicación verificada son estados distintos.
