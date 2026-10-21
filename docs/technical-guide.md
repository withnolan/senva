# SENVA — Guía técnica

La [presentación del proyecto](../README.md) explica misión, equipo y estado. La implementación actual es **Una conversación en movimiento**, con cinco escenas más amplias, objetos SVG compartidos, alternancia lateral, scroll vertical nativo y texto HTML EN/ES.

## Ejecución

Sin instalación, framework, compilación, backend o dependencias externas. Desde la raíz, con Python 3:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Abrir [http://127.0.0.1:8000](http://127.0.0.1:8000); detener con `Ctrl+C`. HTTP permite comprobar recursos y almacenamiento de forma consistente.

Para comprobar el prefijo real de Pages sin mover el repositorio:

```sh
senva_preview_dir="$(mktemp -d)"
ln -s "$PWD" "$senva_preview_dir/senva"
python3 -m http.server 8000 --bind 127.0.0.1 --directory "$senva_preview_dir"
```

Abrir [http://127.0.0.1:8000/senva/](http://127.0.0.1:8000/senva/). El enlace simbólico y los arneses de revisión quedan fuera del repositorio. Cambiar puerto si está ocupado.

CSS y JS llevan `?v=` con los primeros ocho caracteres de su SHA-256. Al modificarlos, actualizar `index.html` con el resultado de `shasum -a 256 styles.css script.js`. Esto evita reutilizar versiones anteriores desde caché; no es un sistema de compilación.

## Archivos y recursos

- `index.html`: inglés completo de respaldo, definiciones SVG, cinco capítulos semánticos, controles, detalles nativos, plan, equipo, Xiji y contacto.
- `styles.css`: composición central y alternancia lateral, escenario y lecturas sticky, alturas variables, alternativa móvil/estática, controles, entrada finita y movimiento reducido. Sustituye la distribución uniforme anterior.
- `script.js`: 116 claves EN/ES, menú, metadatos, preferencia opcional y un único controlador de composición.
- `assets/graphics/glasses.svg`, `glove.svg`: fuentes vectoriales propias de los objetos; sus mismos trazados están en las definiciones de `index.html`. [Edición y procedencia](visual-assets.md).
- Señal de voz, conexiones, campo azul noche y clip elíptico SVG dentro de `index.html`; subtítulos e interfaz de práctica en HTML real dentro de sus capítulos. No hay una imagen de la interfaz.
- `assets/favicon.svg` y `senva-logo.svg`: identidad original conservada. Los retratos originales de 800 × 800 permanecen iguales y con el mismo tratamiento.
- `assets/social-card.svg` / `.png`: fuente enteramente vectorial y exportación real 1200 × 630, con avisos EN/ES. El PNG solo se usa como vista previa social.
- `assets/illustrations/`: recursos de la iteración anterior, conservados sin cargarse en la web actual. La pareja y las imágenes WebP ya no forman parte de la presentación.
- `.nojekyll`: entrega directa. No hay `dist`, workflow propio o dependencias de ejecución nuevas.

La página solo carga su CSS, JS y los dos retratos locales (carga diferida con dimensiones reservadas). Los dibujos del recorrido están en el propio documento, por lo que no esperan descargas de imágenes. No se cargan fuentes remotas, bibliotecas, WebGL, GLB/GLTF, analítica ni servicios externos. Los enlaces externos son GitHub y los LinkedIn facilitados, con `noopener noreferrer` y aviso accesible de nueva pestaña.

## Composición y scroll

Cinco capítulos semánticos, todos legibles en el documento:

| Destino | Contenido y composición de escritorio |
| --- | --- |
| `#home` | Presentación central; titular arriba, objetos en el centro y apoyo breve alrededor. |
| `#vision` | Gafas a la izquierda; mensaje y subtítulo ficticio a la derecha. |
| `#reciprocity` | Guante a la derecha e información manual explicada a la izquierda. |
| `#expression` | Composición amplia: información manual, rostro, cuerpo y espacio; texto centrado en la parte superior. |
| `#concept` | Guante a la izquierda, mensaje e interfaz HTML de práctica a la derecha. |

Tras el recorrido quedan validación, preguntas técnicas (`#research`), equipo, candidatura y contacto. Los antiguos destinos `#opportunity` y `#questions` se conservan en etiquetas visibles de portada y validación. No se han alterado datos del proyecto o biografías para crear estos capítulos.

### Escenario y tiempo de lectura

La base muestra las figuras SVG y las anotaciones HTML en su flujo. JavaScript añade `.js` después de preparar idiomas y navegación; `.is-enhanced` requiere `IntersectionObserver`, al menos **1000 × 680 px** y movimiento permitido. Las ventanas bajas, móvil, tablet, ausencia de observador y movimiento reducido conservan la lectura completa sin el escenario fijo.

En modo mejorado, escenario y capítulos comparten una celda de cuadrícula. El escenario exterior es `position: sticky`, bajo la cabecera de 84 px, con altura `100svh - 84px`. Cada `.step-inner` también puede fijarse dentro de su propio capítulo para dar tiempo a leer. Su contenido conserva el flujo y puede crecer al abrir detalles. El artboard SVG 1200 × 720 mantiene proporción 5:3 y se adapta al ancho y altura disponibles.

Los capítulos tienen `min-height`, no una altura que recorte contenido. Sus duraciones iniciales son 1,65 / 1,85 / 1,65 / 1,8 / 1,8 alturas útiles, definidas por `--span`. Ese espacio sostiene primero la lectura y después el tránsito de objetos; no se añaden párrafos para alargar la página. El plan y el equipo no reciben estas duraciones. Las cifras deben ajustarse según lo observado, especialmente con textos traducidos y detalles abiertos.

### Controlador de la coreografía

Un `IntersectionObserver` activa un listener pasivo de scroll mientras el recorrido está visible. Una única cola `requestAnimationFrame` mide los capítulos reales, la altura de cabecera y el artboard. El índice identifica el capítulo situado bajo la cabecera. El tramo extra `altura del capítulo − altura útil` mantiene la pose de lectura; después, una altura útil permite pasar a la siguiente composición. Se publican `data-phase="reading|transit"`, `data-progress` 0–4 y el capítulo activo.

`poses` guarda posición, escala y opacidad de gafas y guante, además de centro, radios y presencia del campo azul noche. `crossings` define puntos de control para curvas Bézier cuadráticas: los intercambios laterales describen una trayectoria, no un cambio de columnas al llegar al capítulo. La interpolación de posición empieza al 12 % del tramo de tránsito y termina al 88 %. En las poses de lectura los objetos secundarios tienen una función visible o desaparecen; no quedan versiones pequeñas semitransparentes como fondo permanente. Durante el tránsito puede haber fundidos breves.

Solo en modo mejorado, `--copy-opacity` coordina los bloques reales de lectura: el texto saliente se funde durante el primer 8 % del tránsito y el entrante aparece entre el 80 % y el 98 %; el encabezado panorámico espera al 92–100 % para dejar libre el cruce. La portada coordina por separado título, metadatos y bloque inferior. Se despeja así el recorrido lateral sin sustituir el contenido por una imagen o una copia inaccesible. Esos porcentajes describen la implementación y deben contrastarse durante la revisión visual, también al retroceder.

El campo azul noche es una elipse SVG transformada y reutilizada como clip de los recorridos y los dispositivos. Su entrada se construye mediante escala con relleno opaco, en lugar de un panel gris semitransparente. Cambia de lado, se amplía en el capítulo de contexto y vuelve a acompañar al guante hacia la práctica. No es un efecto 3D.

Las gafas y el guante usan un solo lenguaje de contorno. Los mismos trazados se instancian en una capa clara y otra oscura; la oscura queda recortada exactamente por el campo elíptico. `--device-line` y `--lens-fill` asignan los colores de cada versión. El contraste no depende de decidir el tema por el centro del objeto: cada parte recibe la versión correspondiente al campo situado debajo, también cuando la silueta lo cruza. No se añaden bordes decorativos redundantes. Las fuentes siguen en `assets/graphics/` y se reutilizan con `<use>`.

Los trazados y el subtítulo dependen de pesos continuos de presencia por capítulo. El `stroke-dashoffset` de cada ruta sigue su mismo peso, sin volver a cero al cambiar el índice del capítulo; la conexión de portada conserva su trazado completo después de la entrada inicial. Los extremos de voz y práctica se calculan a partir de sus superficies HTML reales, para acompañar el cambio de composición sin incrustar textos en SVG. Los rótulos decorativos de cada recorrido tienen ventanas de aparición separadas. La interfaz de práctica participa del flujo a la derecha; el guante pertenece al escenario compartido.

El último capítulo recoge la composición, reduce el campo y retira el guante antes de finalizar la contención sticky. El plan de validación y el resto de la página continúan por desplazamiento normal. No se captura la rueda ni se imponen saltos; tampoco se usan temporizadores para controlar el avance. Los objetos se detienen cuando el visitante deja de deslizar y pueden recorrer el camino inverso.

### Controles y adaptación

Los controles ocupan la franja superior del escenario, fuera del canvas decorativo. Los cinco destinos son anclas nativas y `aria-current="step"` identifica el capítulo activo. Pausar conserva el scroll y selecciona una pose de lectura sin interpolación; reanudar no repite la entrada inicial. La entrada de marca, texto, objetos y conexión es breve y finita.

En móvil y ventanas bajas, los gráficos se muestran junto a su contenido con alternancia lateral más pequeña. Si JavaScript y movimiento están disponibles, un desplazamiento horizontal corto sigue su paso por la pantalla; sin ellos, las figuras permanecen estáticas y completas. No se trasladan las alturas ampliadas ni las fijaciones de escritorio a este modo.

La coreografía describe una visión conceptual: no demuestra captación, traducción o feedback funcional. La revisión visual de la implementación actual y cualquier límite pendiente se registran en [el seguimiento del rediseño](redesign-progress.md); la descripción técnica por sí sola no acredita esas comprobaciones.

## Accesibilidad e idiomas

- Los títulos, mensajes y desplegables son contenido real dentro de cada capítulo. En escritorio su contenedor mantiene temporalmente una posición sticky y puede fundirse al preparar el tránsito; en las alternativas, vuelve al flujo normal y a la lectura visible. No se aplica `aria-hidden` al texto principal ni se sustituye por copias decorativas.
- `:focus-within` mantiene visible el bloque que contiene el foco y le da fondo blanco cálido. Cuando la opacidad de un bloque baja del 1 %, sus enlaces, botones y resúmenes reciben temporalmente `tabindex="-1"`, salvo si el foco ya está dentro. Los bloques realmente ocultos también desactivan eventos de puntero; un bloque con foco permanece visible. El valor anterior se conserva y restaura al reaparecer o salir del modo mejorado. La portada protege también su bloque inferior al recibir foco.
- El canvas mejorado es decorativo (`aria-hidden`); no contiene controles. Sus figuras estáticas alternativas se ocultan solo visualmente a 1 px en escritorio, y siguen disponibles para tecnologías de asistencia. En móvil y lectura estática se muestran en su sitio.
- Los controles están fuera del canvas oculto a tecnologías de asistencia. Al pasar a un modo donde el escenario desaparece, el foco vuelve a la sección real si estaba en esos controles.
- En móvil el menú cerrado es `inert` y `aria-hidden`. Al abrir entra foco al primer enlace; Escape cierra y devuelve foco. Anclas nativas, foco de destino y enlace de salto al contenido.
- Los detalles usan `<details>` / `<summary>` nativos; el contenido crece al abrirlos y no se recorta. Las figuras no reciben foco. El texto de los ejemplos y sus etiquetas son HTML traducible.
- Sin JavaScript: inglés completo, navegación visible, cinco figuras y detalles funcionales; controles dependientes ocultos. No es necesario esperar animaciones para leer.
- `prefers-reduced-motion: reduce`: sin entrada, transiciones, sticky o scroll suave; versión completa en flujo normal.

El inglés de `index.html` debe coincidir con `translations.en`. `data-i18n`, `data-i18n-alt` y `data-i18n-aria-label` se actualizan mediante `textContent` y atributos, sin aceptar HTML. El selector actualiza `lang`, título, descripción, metadatos sociales y `og:locale`. Se conserva la fracción de lectura al traducir una escena. El almacenamiento opcional `senva-language` se usa con `try/catch`; bloquearlo no impide el selector durante la visita. Los rastreadores sin script reciben inglés y la vista previa social bilingüe.

Conservar el estado de idea, el carácter hipotético del aprendizaje, codiseño futuro y límites lingüísticos. LSE no es universal, los guantes solos no traducen una lengua, los sensores inerciales no bastan para posicionar manos respecto al cuerpo y la práctica inicial no demuestra una ruta hacia traducción natural. Los estudios de Santiago son los corregidos por el usuario: CSEU La Salle; su relación con Xiji es candidatura, sin admisión. Las colaboradoras siguen anónimas.

## Comprobar después de editar

1. `node --check script.js` y `git diff --check`; paridad EN/ES, respaldo inglés, IDs, anclas y enlaces locales.
2. Comprobar SVG fuente/definiciones, máscaras, avisos y PNG social real 1200 × 630. Actualizar los parámetros de caché si cambia CSS/JS.
3. Revisar 320 px, móvil, tablet, escritorio bajo y grande, EN/ES, redimensionado y orientación. Comprobar entrada, pausa de lectura, mitad y final de cada tránsito lateral y salida hacia validación, en ambos sentidos; no solo las poses finales.
4. Revisar zonas seguras de títulos y etiquetas, contraste al cruzar el campo azul noche, detalles abiertos, cinco anclas de capítulo, pausa, teclado, cambio de idioma y menú.
5. Movimiento reducido, ausencia de JavaScript/observador y almacenamiento bloqueado; comprobar recursos bajo `/senva/` y errores atribuibles a la web.

El [registro de revisión](redesign-progress.md) debe distinguir lo observado, las simulaciones y los límites de cada entrega. No implica certificación de accesibilidad, prueba con dispositivos físicos o lector de pantalla real.

## Publicación

GitHub Pages en `withnolan/senva`: fuente verificada el 21 de octubre de 2026, `main`, carpeta `/`, modo `legacy`; comprobar de nuevo antes de publicar si ha cambiado. No se requieren nuevos ajustes o secretos.

Guardar hitos coherentes y hacer push normal según la autorización del propietario, conservando cambios ajenos y protecciones. No usar force push. Comprobar el build correspondiente al SHA y después [la web pública](https://withnolan.github.io/senva/). Un push correcto no demuestra por sí solo que el despliegue esté terminado. El registro y la respuesta final distinguen ambos estados.
