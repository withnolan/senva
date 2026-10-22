# SENVA — Guía técnica

La [presentación del proyecto](../README.md) explica misión, personas y estado. La web es HTML/CSS/JS estático, sin compilación, framework o backend. Dirección vigente: [visual-reset-brief.md](visual-reset-brief.md). Organización del equipo: [AGENTS.md](../AGENTS.md). Las comprobaciones realizadas y sus límites están en [redesign-progress.md](redesign-progress.md).

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
| `script.js` | 114 claves EN/ES, metadatos, menú, capítulos y progreso decorativo. |
| `assets/illustrations/conversation-editorial.webp` | Ilustración 2D de dos adultos, 1200×800, alfa, aproximadamente 122 KB. |
| `assets/graphics/glasses.svg`, `glove.svg` | Dispositivos planos compartidos por visión y práctica. |
| `assets/fonts/*latin.woff2` | Bricolage Grotesque e Instrument Sans, unos 107 KB en conjunto. Licencias OFL adjuntas. |
| `assets/*.jpg` | Retratos facilitados, originales de 800×800, carga diferida y dimensiones reservadas. |
| `assets/favicon.svg`, `senva-logo.svg` | Identidad conservada; símbolo y palabra de marca también en HTML. |
| `assets/social-card.svg`, `.png` | Fuente editable y exportación social de 1200×630. |
| `.nojekyll` | Entrega directa desde el repositorio. |

La página solicita recursos del propio sitio. No ejecuta modelos, WebGL, bibliotecas, analítica o servicios externos. La generación/optimización de la ilustración y Sharp fueron herramientas de autoría; no son dependencias del visitante. Recursos anteriores no utilizados se conservan como archivo, incluido `assets/graphics/conversation.svg` y Manrope. No reactivar controladores o estilos históricos.

## Movimiento

El documento usa **scroll nativo**. No hay captura de rueda, inercia de página, saltos obligatorios ni pantallas de carga. La entrada de portada es finita y escalonada. Un hilo conceptual acompaña la conversación; propósito y práctica tienen trazados breves.

La visión reserva una columna para las dos lecturas y otra para la composición de dispositivos. A partir de **1100×700**, con JS, observador disponible y sin preferencia reducida, la figura usa `position:sticky` a 150 px bajo cabecera y capítulos. Voz/gafas/subtítulos y guante/contexto/salida pendiente se mueven como grupos dentro de esa columna, sin atravesar el texto. Los artículos no heredan alturas prolongadas. El sticky termina dentro de la sección.

En tamaños inferiores, las rutas y las explicaciones permanecen en flujo, sin pin. La ilustración y los trazados conservan movimiento corto. Ningún control interactivo vive dentro de un grupo que se desvanece.

`measureMotion` cachea posiciones y dimensiones tras cambio de ventana, idioma, tamaño de contenido o carga de fuentes. `updateMotion` lee el scroll y escribe variables para `transform`, `opacity` y trazados predefinidos. Se retiraron las guardas condicionales de colisión y la reconstrucción de paths por frame. Un asentamiento exponencial de 70 ms suaviza **solo poses decorativas**; el texto y el scroll no se retrasan. RAF termina al alcanzar el objetivo y se cancela al ocultar la pestaña. Otro observador actualiza `aria-current` en capítulos.

No confundir esta descripción con una medición de FPS. Modificar una trayectoria exige observar comienzo, estados intermedios y regreso en ambos idiomas.

## Idiomas y acceso

El selector actualiza `lang`, título, descripción, Open Graph, alternativas y etiquetas accesibles con texto/atributos, sin insertar HTML. Al traducir se conserva aproximadamente el bloque de lectura más cercano. La preferencia en almacenamiento es opcional, protegida con `try/catch`.

Sin JS se sirve inglés completo, navegación visible y diagramas en flujo; se ocultan controles de idioma dependientes de script. Sin observador se mantiene la lectura normal. `prefers-reduced-motion` elimina entrada, interpolación, sticky prolongado, trazados progresivos y scroll suave; todos los grupos se muestran completos.

Hasta 760 px, el menú cerrado usa `inert` y `aria-hidden`. Abrir enfoca su primer enlace; Escape devuelve foco. Las transiciones de apertura y cierre se activan tras el primer uso, evitando el fundido inicial de un menú que ya debería estar cerrado. Anclas nativas con foco en su destino; detalles técnicos usan `<details>` / `<summary>`. Enlaces externos conservan avisos accesibles y `noopener noreferrer`.

## Mantener y publicar

Después de cambiar CSS/JS, actualizar `?v=` con los primeros ocho caracteres de SHA-256:

```sh
shasum -a 256 styles.css script.js
```

Comprobar sintaxis, traducciones, HTML, IDs/anclas, recursos, movimiento de ida/vuelta, idiomas durante la lectura, 320 px y ventanas bajas, teclado y alternativas. Repetir las comprobaciones afectadas por correcciones; no sustituir la crítica visual por ausencia de errores técnicos.

GitHub Pages publica `withnolan/senva`, `main`, raíz `/`, modo `legacy`. No requiere configuración nueva. Guardar y pushear cambios autorizados sin force push; confirmar build del SHA y recursos de [la web pública](https://withnolan.github.io/senva/). Un push y una publicación verificada son estados distintos.
