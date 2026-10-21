# SENVA — Guía técnica

La [presentación del proyecto](../README.md) explica misión, equipo y estado. La implementación actual es **Una conversación en movimiento**, una web estática con objetos SVG compartidos, scroll nativo y texto HTML EN/ES.

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

- `index.html`: inglés completo de respaldo, definiciones SVG, cuatro escenas reales, controles, detalles nativos, plan, equipo, Xiji y contacto.
- `styles.css`: composición abierta, capa gráfica, alternativas estáticas, responsive, controles, entrada finita y movimiento reducido. Sustituye los paneles y estilos de la secuencia anterior.
- `script.js`: 111 claves EN/ES, menú, metadatos, preferencia opcional y un único controlador de composición.
- `assets/graphics/glasses.svg`, `glove.svg`: fuentes vectoriales propias de los objetos; sus mismos trazados están en las definiciones de `index.html`. [Edición y procedencia](visual-assets.md).
- Señal de voz, conexiones y máscaras SVG; subtítulos e interfaz de práctica HTML dentro de `index.html`. No hay una imagen de la interfaz.
- `assets/favicon.svg` y `senva-logo.svg`: identidad original conservada. Los retratos originales de 800 × 800 permanecen iguales y con el mismo tratamiento.
- `assets/social-card.svg` / `.png`: fuente enteramente vectorial y exportación real 1200 × 630, con avisos EN/ES. El PNG solo se usa como vista previa social.
- `assets/illustrations/`: recursos de la iteración anterior, conservados sin cargarse en la web actual. La pareja y las imágenes WebP ya no forman parte de la presentación.
- `.nojekyll`: entrega directa. No hay `dist`, workflow propio o dependencias de ejecución nuevas.

La página solo carga su CSS, JS y los dos retratos locales (carga diferida con dimensiones reservadas). Los dibujos del recorrido están en el propio documento, por lo que no esperan descargas de imágenes. No se cargan fuentes remotas, bibliotecas, WebGL, GLB/GLTF, analítica ni servicios externos. Los enlaces externos son GitHub y los LinkedIn facilitados, con `noopener noreferrer` y aviso accesible de nueva pestaña.

## Composición y scroll

Cuatro secciones semánticas, todas legibles en el documento: `home`, `vision` (voz/subtítulos), `reciprocity` (información manual + información lingüística adicional), `concept` (primera hipótesis de práctica). Los antiguos destinos `opportunity` y `questions` se conservan en etiquetas visibles de portada y validación.

La base muestra dibujos SVG y las anotaciones HTML junto a su texto. JavaScript añade `.js` tras preparar idiomas y navegación; `.is-enhanced` solo aparece si hay `IntersectionObserver`, al menos **1000 × 680 px** y movimiento permitido. Las ventanas bajas, móvil, tablet, ausencia de observador y movimiento reducido usan el recorrido estático completo.

En modo mejorado, escenario y secciones ocupan la misma celda de una cuadrícula. El escenario es `position: sticky`, bajo la cabecera de 84 px, y su altura es `100svh - 84px`. Su contención termina con el último experimento: no cubre el plan de validación. Los fondos y textos de las secciones se desplazan de manera nativa; los mismos objetos SVG permanecen y cambian de composición. El artboard mantiene proporción 5:3 y cabe en ancho y altura disponibles.

Un `IntersectionObserver` activa un listener pasivo de scroll solo cuando el recorrido está visible. Una única cola `requestAnimationFrame` mide los centros de las cuatro secciones y calcula progreso 0–3. El array `poses` en `script.js` contiene posición, escala y opacidad de gafas y guante. Se interpola con una curva suave, sin capturar rueda, imponer saltos, usar temporizadores ni añadir alturas vacías para animar.

La conexión de portada cede a voz → gafas → subtítulos. El segundo momento destaca el guante, la información facial/corporal/espacial y una salida en investigación. Las máscaras simples trazan el recorrido de información y la ida/vuelta de captación/feedback en práctica. El ejemplo es conceptual, no reconocimiento ni traducción funcional. Los objetos quedan estables cuando el visitante deja de deslizar.

Las etiquetas de subtítulos, información adicional e interfaz tienen ventanas de opacidad separadas: no se superponen durante los fundidos. El texto de los artículos conserva siempre su opacidad. La frase final de práctica participa del flujo para dejar espacio a los detalles abiertos, también en ventanas bajas.

Los controles de recorrido se sitúan en la zona superior derecha, separada del texto principal. `aria-current="step"` señala el momento activo. El color de controles y aviso se calcula a partir del fondo que tienen realmente debajo, también durante transiciones. Pausar elimina interpolación y transiciones; conserva el scroll y muestra una composición estable por escena. Reanudar no repite la entrada. La entrada inicial de marca, texto, objetos y conexión es breve y de una sola ejecución.

## Accesibilidad e idiomas

- Los títulos, mensajes y desplegables permanecen en flujo normal. No se ocultan capas de texto principal para animar.
- El canvas mejorado es decorativo (`aria-hidden`); no contiene controles. Sus figuras estáticas alternativas se ocultan solo visualmente a 1 px en escritorio, y siguen disponibles para tecnologías de asistencia. En móvil y lectura estática se muestran en su sitio.
- Los controles están fuera del canvas oculto a tecnologías de asistencia. Al pasar a un modo donde el escenario desaparece, el foco vuelve a la sección real si estaba en esos controles.
- En móvil el menú cerrado es `inert` y `aria-hidden`. Al abrir entra foco al primer enlace; Escape cierra y devuelve foco. Anclas nativas, foco de destino y enlace de salto al contenido.
- Los detalles usan `<details>` / `<summary>` nativos; el contenido crece al abrirlos y no se recorta. Las figuras no reciben foco. El texto de los ejemplos y sus etiquetas son HTML traducible.
- Sin JavaScript: inglés completo, navegación visible, figuras y detalles funcionales; controles dependientes ocultos. No es necesario esperar animaciones para leer.
- `prefers-reduced-motion: reduce`: sin entrada, transiciones, sticky o scroll suave; versión completa en flujo normal.

El inglés de `index.html` debe coincidir con `translations.en`. `data-i18n`, `data-i18n-alt` y `data-i18n-aria-label` se actualizan mediante `textContent` y atributos, sin aceptar HTML. El selector actualiza `lang`, título, descripción, metadatos sociales y `og:locale`. Se conserva la fracción de lectura al traducir una escena. El almacenamiento opcional `senva-language` se usa con `try/catch`; bloquearlo no impide el selector durante la visita. Los rastreadores sin script reciben inglés y la vista previa social bilingüe.

Conservar el estado de idea, el carácter hipotético del aprendizaje, codiseño futuro y límites lingüísticos. LSE no es universal, los guantes solos no traducen una lengua, los sensores inerciales no bastan para posicionar manos respecto al cuerpo y la práctica inicial no demuestra una ruta hacia traducción natural. Los estudios de Santiago son los corregidos por el usuario: CSEU La Salle; su relación con Xiji es candidatura, sin admisión. Las colaboradoras siguen anónimas.

## Comprobar después de editar

1. `node --check script.js` y `git diff --check`; paridad EN/ES, respaldo inglés, IDs, anclas y enlaces locales.
2. Comprobar SVG fuente/definiciones, máscaras, avisos y PNG social real 1200 × 630. Actualizar los parámetros de caché si cambia CSS/JS.
3. Revisar 320 px, móvil, tablet, escritorio bajo y grande, EN/ES, redimensionado y orientación. No solo los estados finales: observar mitad de cada transición y salida hacia validación, en ambos sentidos.
4. Revisar títulos y etiquetas junto a objetos, detalles abiertos, controles de capítulo/pausa, teclado, cambio de idioma y menú.
5. Movimiento reducido, ausencia de JavaScript/observador y almacenamiento bloqueado; comprobar recursos bajo `/senva/` y errores atribuibles a la web.

La [revisión de esta entrega](redesign-progress.md#conversation-in-motion) distingue lo observado, simulaciones y límites. No implica certificación de accesibilidad, prueba con dispositivos físicos o lector de pantalla real.

## Publicación

GitHub Pages en `withnolan/senva`: fuente verificada el 21 de octubre de 2026, `main`, carpeta `/`, modo `legacy`; comprobar de nuevo antes de publicar si ha cambiado. No se requieren nuevos ajustes o secretos.

Guardar hitos coherentes y hacer push normal según la autorización del propietario, conservando cambios ajenos y protecciones. No usar force push. Comprobar el build correspondiente al SHA y después [la web pública](https://withnolan.github.io/senva/). Un push correcto no demuestra por sí solo que el despliegue esté terminado. El registro y la respuesta final distinguen ambos estados.
