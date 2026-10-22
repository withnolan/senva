# SENVA — Guía técnica

La [presentación del proyecto](../README.md) explica misión, equipo y estado. La implementación combina contenido editorial y una coreografía de SVG/CSS ligada al scroll nativo: encuentro entre personas, dos direcciones de comunicación que intercambian protagonismo y llegada a una primera pregunta de práctica. La organización por agentes se conserva en [AGENTS.md](../AGENTS.md); el brief de movimiento vigente es [motion-direction.md](motion-direction.md).

## Ejecutar localmente

No requiere instalación, framework, compilación o backend. Desde la raíz, con Python 3:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Abrir [http://127.0.0.1:8000](http://127.0.0.1:8000); detener con `Ctrl+C`. Cambiar el puerto si está ocupado.

Para revisar el prefijo real de GitHub Pages sin mover el repositorio:

```sh
senva_preview_dir="$(mktemp -d)"
ln -s "$PWD" "$senva_preview_dir/senva"
python3 -m http.server 8000 --bind 127.0.0.1 --directory "$senva_preview_dir"
```

Abrir [http://127.0.0.1:8000/senva/](http://127.0.0.1:8000/senva/). Los arneses y capturas de revisión pueden mantenerse fuera del repositorio.

## Archivos y recursos

| Archivo | Responsabilidad |
| --- | --- |
| `index.html` | Inglés completo de respaldo, secciones, diagrama, práctica, detalles nativos, equipo y enlaces. |
| `styles.css` | Tipografía local, paleta, composición editorial, responsive, foco, entrada breve y alternativa con movimiento reducido. |
| `script.js` | Selector EN/ES, metadatos, menú, indicador de capítulo y coreografía por bloques visibles. 114 claves en cada idioma en esta versión. |
| `assets/graphics/conversation.svg` | Fuente original de las personas; se integra por grupos en el SVG de portada con alternativa textual EN/ES. |
| `assets/graphics/glasses.svg`, `glove.svg` | Objetos SVG compartidos por el diagrama y la composición de práctica. |
| `assets/fonts/manrope-variable.ttf` | Manrope variable, servida localmente; licencia en `assets/fonts/OFL-Manrope.txt`. |
| `assets/*.jpg` | Retratos originales de 800 × 800, con dimensiones reservadas y carga diferida. |
| `assets/favicon.svg`, `senva-logo.svg` | Identidad conservada; la cabecera y el pie mantienen su símbolo SVG y palabra de marca. |
| `assets/social-card.svg`, `.png` | Fuente y exportación de la vista previa social de 1200 × 630. |
| `.nojekyll` | Entrega directa desde el repositorio, sin compilación. |

La página solicita recursos locales: CSS, JS, fuente y SVG, además de los dos retratos. No carga bibliotecas, fuentes desde CDN, motores 3D, analítica o servicios de ejecución externos. Los dispositivos se reutilizan como imágenes SVG externas en el respaldo y con `<image>` dentro del escenario SVG animado. La ilustración humana se integra en línea para mover sus capas. La vista previa social es un recurso para metadatos; no es una sección de la web.

Los recursos de `assets/illustrations/` pertenecen a iteraciones anteriores: se conservan como archivo, pero la implementación actual no los solicita. El historial Git conserva las coreografías retiradas. No deben reactivarse estilos o controladores antiguos al hacer ajustes.

[Fuentes, licencia y edición de recursos](visual-assets.md).

## Estructura y navegación

| Destino | Contenido |
| --- | --- |
| `#home` | Portada, propósito breve, estado real e ilustración de personas. |
| `#opportunity` | Participación y situaciones cotidianas que motivan el proyecto. |
| `#vision` | Visión de guantes y gafas, dos direcciones y un diagrama común. |
| `#reciprocity` | Segunda explicación de la visión: información manual y contexto lingüístico adicional. |
| `#concept` | Primera hipótesis de práctica de LSE, con preguntas de investigación. |
| `#validation` | Plan futuro de validación; `#questions` conserva un destino anterior. |
| `#research` | Límites técnicos y lingüísticos, mediante `<details>` / `<summary>`. |
| `#team`, `#xiji`, `#contact` | Fundadores, candidatura de Santiago y contacto. |

`#expression` se conserva junto a la segunda explicación de la visión para enlaces anteriores. La barra de capítulos enlaza propósito, visión, primera hipótesis y validación. Son anclas nativas; JavaScript añade foco al destino y cierra el menú cuando corresponde. No se impone un salto por gesto ni se intercepta la rueda.

## Movimiento y adaptación

La portada mantiene su entrada breve de texto e ilustración. Después, el avance nativo aproxima las capas de personas y traza el hilo compartido. El propósito retoma el lenguaje de conexión entre las tres situaciones; la práctica despliega su hoja y traza una conexión hacia las preguntas. Son progresos finitos, sin bucles ambientales ni pantalla de carga.

La visión utiliza un escenario abierto `position:sticky` y dos artículos reales en flujo. En la primera lectura, texto a la izquierda y gafas a la derecha; en la segunda, texto a la derecha y guante a la izquierda. Los dispositivos recorren varios cientos de unidades del SVG y sus señales permanecen agrupadas. La ruta inversa conserva el interrogante y las aclaraciones de arquitectura pendiente. Las cajas reales de texto y leyenda delimitan el carril de cruce. El escenario termina con la sección.

`IntersectionObserver` registra qué bloques están cerca del viewport. Un solo listener pasivo y una cola `requestAnimationFrame` calculan los progresos de portada, propósito, visión y experimento. No se captura la rueda ni se modifica el desplazamiento nativo. El estado se deriva de posición y geometría actual, por lo que puede recorrerse hacia atrás. La pestaña oculta cancela el frame pendiente; la preferencia reducida desactiva la escucha de movimiento. Otro observador mantiene el capítulo activo.

El modo de escenario requiere al menos **1000 px de ancho y 640 px de alto**; incluye 1280×720 y 1000×680. La figura se fija a 88 px y usa la altura disponible bajo cabecera. Cada artículo reserva un intervalo de lectura, con crecimiento posible por el contenido. El texto principal no se desvanece ni se retira del árbol accesible.

En móvil y ventanas insuficientes, la visión utiliza sus dos rutas en flujo. El móvil conserva desplazamientos laterales cortos y trazados de conexión, sin pin. La práctica y las personas tienen distancias menores. No se heredan las alturas de escena de escritorio.

Sin JS u observadores se muestra la composición completa. Con `prefers-reduced-motion:reduce` se eliminan entrada, trazados progresivos, transformaciones y scroll suave; no se activa el escenario fijo. La figura accesible contiene las etiquetas de ambas rutas. Durante el modo animado ese respaldo se oculta **solo visualmente**, mientras el stage adicional es decorativo (`aria-hidden`). No hay controles dentro de capas animadas ni un botón de movimiento inoperante.

Los parámetros principales están en `updateMotion` y las reglas de `.motion-ready` / `.motion-desktop`. Cambiar una trayectoria exige revisar su estado intermedio, no solo los extremos. La geometría de una lengua no se infiere del dibujo: los recursos siguen siendo un concepto.

## Idiomas y accesibilidad

- Mantener sincronizados `translations.en`, `translations.es` y el inglés de `index.html`. El selector actualiza `data-i18n`, alternativas de imágenes y etiquetas accesibles con `textContent` y atributos, sin insertar HTML.
- Se actualizan `lang`, título, descripción, metadatos Open Graph, texto alternativo social y `og:locale`. La preferencia `senva-language` se almacena opcionalmente con `try/catch`.
- Al traducir durante la lectura, se intenta conservar la posición del bloque de lectura más cercano; no se restaura un porcentaje arbitrario de toda la página. Revisar este comportamiento cuando cambien títulos o longitudes.
- Sin JavaScript se sirve inglés completo, navegación visible, diagramas y detalles funcionales. Los controles de idioma dependientes de script se ocultan.
- Hasta 760 px, el menú cerrado usa `inert` y `aria-hidden`. Al abrir, el foco entra en su primer enlace; Escape cierra y devuelve el foco. Al cambiar el ancho se recalcula el estado del menú.
- Conservar enlace de salto, foco visible, alternativas de retratos e ilustración, aviso de nueva pestaña en enlaces externos y `noopener noreferrer`.
- Los dispositivos son decorativos dentro de figuras explicadas mediante texto HTML. Los ejemplos se identifican como ficticios y las interfaces como concepto, sin datos medidos.

La fuente **Manrope** procede de [google/fonts, `ofl/manrope`](https://github.com/google/fonts/tree/main/ofl/manrope), con licencia **SIL Open Font License 1.1** conservada en [OFL-Manrope.txt](../assets/fonts/OFL-Manrope.txt). `@font-face` declara pesos 400–800 y `font-display: swap`; si la fuente no carga, se usan Arial, Helvetica o sans-serif. La palabra de marca conserva su familia independiente para no rediseñar el logo.

## Mantenimiento y revisión

Después de editar CSS o JS, actualizar sus parámetros `?v=` en `index.html` con los primeros ocho caracteres del SHA-256:

```sh
shasum -a 256 styles.css script.js
```

El parámetro solo evita reutilizar versiones anteriores desde caché; no es un sistema de compilación.

Comprobaciones sugeridas para cambios posteriores:

1. `node --check script.js` y `git diff --check`; paridad de traducciones, inglés de respaldo, IDs únicos, anclas y recursos locales.
2. Revisar de 320 px a escritorio, ventanas altas y bajas, orientación y redimensionado. Observar ambos idiomas, títulos largos, figura, retratos y detalles abiertos.
3. Capturar inicio, 25 %, mitad, 75 % y final del intercambio, ida y vuelta. Comprobar geometría de copy, leyendas, dispositivos y enlaces; revisar la salida hacia la práctica y el movimiento de portada/móvil. La animación debe ser perceptible, además de no colisionar.
4. Menú con teclado, foco de anclas, selector EN/ES, barra de capítulos y enlaces externos. Comprobar alternativas sin script, sin observador, con almacenamiento bloqueado y con movimiento reducido.
5. Confirmar recursos, fuente y licencia bajo `/senva/`, metadatos sociales y ausencia de errores atribuibles a la web. Mantener el estado de idea y los límites de la investigación.

Esta guía describe el código y propone revisión; **no acredita que todas esas pruebas se hayan ejecutado**. Las comprobaciones reales, simulaciones y límites de cada entrega pertenecen a [docs/redesign-progress.md](redesign-progress.md).

## Publicación

GitHub Pages publica `withnolan/senva`. La última configuración registrada es rama `main`, carpeta `/`, modo `legacy`; consultar su estado antes de cambiar cualquier ajuste. No se requieren secretos nuevos ni compilación.

Guardar los cambios autorizados, hacer push normal sin reescribir historia ni perder cambios ajenos y comprobar el build del SHA correspondiente. Después revisar [la web pública](https://withnolan.github.io/senva/). Un push correcto no demuestra por sí solo que Pages haya terminado; registrar ambos estados por separado.
