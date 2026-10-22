# SENVA — Recursos visuales y tipografía

La implementación editorial utiliza azul noche, blanco cálido y turquesa, ilustración 2D original y texto HTML traducible. Los gráficos explican una idea de investigación; no son pruebas de hardware, captación o traducción funcional.

## Recursos activos

| Recurso | Fuente | Uso |
| --- | --- | --- |
| Conversación entre dos personas | `assets/graphics/conversation.svg` | Portada; alternativa EN/ES mediante `heroArtAlt` en HTML. |
| Gafas frontales | `assets/graphics/glasses.svg` | Primera dirección del diagrama de visión. |
| Guante vacío | `assets/graphics/glove.svg` | Segunda dirección y primera hipótesis de práctica. |
| Señal de voz y conexiones | HTML/CSS del diagrama; SVG local en la práctica | Relaciones conceptuales, sin datos capturados. |
| Ilustraciones de la práctica y sus preguntas | HTML, SVG y CSS en `index.html` / `styles.css` | Interfaz ilustrativa adaptable, con texto EN/ES. |
| Retratos | `assets/shengyu-nolan-chen.jpg`, `assets/santiago-munoz-veguillas.jpg` | Fotografías facilitadas por el usuario, con igual tratamiento. |
| Identidad | `assets/favicon.svg`, `assets/senva-logo.svg`, marca en cabecera/pie | Logo conservado. |
| Vista previa social | `assets/social-card.svg`, `.png` | Fuente editable y exportación de 1200 × 630 para metadatos. |
| Manrope | `assets/fonts/manrope-variable.ttf` | Tipografía local de la web; licencia adjunta. |

## Ilustraciones originales

`conversation.svg` es una ilustración vectorial original creada por el agente para este proyecto. Contiene los grupos `left-person`, `shared-space` y `right-person`, sobre un `viewBox` de 720 × 720. Representa dos personas adultas y un espacio compartido; no reproduce un signo concreto, testimonio o resultado de investigación. Está construida con colores planos, sin modelos, texturas ni recursos de terceros.

Las gafas y el guante se redibujaron directamente en SVG para SENVA. Comparten un contorno sencillo y pesos proporcionales; se retiraron reflejos, bordes duplicados y líneas interiores redundantes. El guante está vacío, con cinco dedos, pulgar lateral y muñeca corta; no contiene una mano anatómica ni representa un signo lingüístico.

Sus fuentes conservan `var(--device-line,#102e3b)` para el contorno y, en las gafas, `var(--lens-fill,#f8f7f2)` para las lentes. **La web actual los carga con `<img>` sobre superficies claras**, usando los colores de respaldo. Las variables de la página no atraviesan el documento externo de una imagen SVG. Si en el futuro se integran como SVG en línea, podrán heredarse `--device-line:#f8f7f2` y `--lens-fill:#102e3b` para un fondo azul noche, sin añadir un segundo borde.

No hay definiciones de dispositivos duplicadas en `index.html`, capas claras/oscuras superpuestas ni un escenario continuo de objetos viajeros. El diagrama de visión reúne ambas direcciones con texto HTML y un énfasis de escala/desplazamiento muy pequeño. Los textos y aclaraciones permanecen visibles.

## Tipografía y licencia

Manrope procede del repositorio oficial [google/fonts, `ofl/manrope`](https://github.com/google/fonts/tree/main/ofl/manrope): `Manrope[wght].ttf`, guardado localmente como `assets/fonts/manrope-variable.ttf`. La licencia oficial `OFL.txt` se conserva como [assets/fonts/OFL-Manrope.txt](../assets/fonts/OFL-Manrope.txt), **SIL Open Font License 1.1**, con el aviso de copyright de The Manrope Project Authors.

La fuente y licencia locales se contrastaron con los objetos publicados por `google/fonts`: sus identificadores de blob coinciden (`75274da58537d6123b14f2cd0c355ad4681fc2b3` y `e271172a9ed0cddc895aabb6509f1c7d880b492d`). Esta comprobación identifica la procedencia de los archivos; no es una prueba del renderizado del navegador.

`styles.css` declara `@font-face`, pesos 400–800 y `font-display: swap`, con Arial/Helvetica/sans-serif como respaldo. No se solicita Google Fonts durante la visita. La palabra de marca conserva su familia independiente. Al redistribuir o sustituir la fuente, conservar su licencia y comprobar las condiciones del recurso concreto; no atribuir la tipografía a SENVA.

## Editar sin romper la integración

1. Editar las fuentes SVG directamente, conservando sus `viewBox` y proporciones. La ilustración de conversación tiene grupos separados; los dispositivos son archivos externos compartidos por sus usos.
2. Conservar `fill="none"` y rellenos explícitos donde correspondan. Evitar sombras, perspectiva, reflejos o trazos añadidos para ocultar problemas de contraste.
3. Mantener los textos del diagrama, preguntas, estado y avisos en HTML y traducciones de `script.js`; no convertir una sección en una imagen ni incrustar sus textos en SVG.
4. Reservar dimensiones en las imágenes. Revisar encuadre, títulos, alternativas EN/ES y longitudes de etiquetas en móvil y escritorio.
5. Si cambia la portada, actualizar la fuente `social-card.svg`, su PNG de 1200 × 630 y las alternativas sociales EN/ES. Sharp puede exportar el SVG desde el entorno de autoría; no es una dependencia de ejecución de la web. Revisar el PNG exportado antes de publicarlo.
6. Conservar logo, retratos y licencia de la fuente; registrar las comprobaciones visuales reales en [el seguimiento del rediseño](redesign-progress.md).

## Límites de representación y archivo

- La frase cotidiana es ficticia y no se atribuye a una persona real.
- La información facial, corporal y espacial y su captación siguen por resolver; el guante no traduce una lengua por sí solo.
- La práctica presenta preguntas de investigación, sin mediciones, puntuaciones o correcciones lingüísticas validadas.
- La situación de las personas de la portada no es un testimonio ni el retrato de un participante investigado.
- Los PNG/WebP de `assets/illustrations/` pertenecen a iteraciones anteriores. Se conservan como archivo pasivo y no se solicitan en la página actual. El historial Git conserva los dibujos y coreografías sustituidos.

Este documento registra recursos y mantenimiento. La existencia de un SVG, una exportación o una licencia no acredita por sí sola pruebas responsive, de accesibilidad o del despliegue.
