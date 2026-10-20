# SENVA — Guía técnica

La [presentación del proyecto](../README.md) explica misión, equipo y estado. Esta guía describe la implementación real y su mantenimiento.

## Ejecución

Web estática sin instalación, compilación, framework, backend ni dependencias externas. Con Python 3 desde la raíz:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Abrir [http://127.0.0.1:8000](http://127.0.0.1:8000); detener con `Ctrl+C`. También se puede abrir `index.html`, aunque HTTP es preferible para probar almacenamiento y recursos de forma consistente.

Para reproducir el prefijo de GitHub Pages sin mover archivos del repositorio:

```sh
senva_preview_dir="$(mktemp -d)"
ln -s "$PWD" "$senva_preview_dir/senva"
python3 -m http.server 8000 --bind 127.0.0.1 --directory "$senva_preview_dir"
```

Abrir [http://127.0.0.1:8000/senva/](http://127.0.0.1:8000/senva/). El enlace simbólico queda fuera del repositorio y no se publica. Usar otro puerto si está ocupado. Las referencias CSS/JS llevan un parámetro `?v=` derivado de su SHA-256 para evitar reutilizar la versión anterior tras publicar. Al editar uno de esos archivos, actualizar ese valor en `index.html` con los primeros ocho caracteres de su nuevo hash (`shasum -a 256 styles.css script.js`). En una revisión local también se puede forzar recarga.

## Archivos

- `index.html`: documento semántico completo en inglés, anclas, detalles nativos y diagramas SVG/CSS propios.
- `styles.css`: composición, responsive, estados del escenario, entrada finita, microinteracciones, impresión y movimiento reducido. Incluye el bloque “Editorial 2D illustrations” con la escena humana, los dispositivos ilustrados y las interfaces conceptuales. Se retiraron los estilos del esquema anterior de palabras y flechas.
- `script.js`: diccionarios EN/ES, preferencia local opcional, menú, metadatos y un único controlador de progreso de la secuencia.
- `assets/favicon.svg`: símbolo original, sin cambios. `senva-logo.svg`: versión reutilizable del mismo símbolo y logotipo para README.
- `assets/*.jpg`: los dos retratos existentes de 800 × 800; no alterarlos. Se muestran con igual importancia y tamaño, sin recortar su contenido.
- `assets/illustrations/`: seis WebP responsive locales; `source/` conserva tres másteres PNG de ilustración editorial 2D. [Procedencia, prompts, pesos y edición](visual-assets.md). Representan conceptos, no hardware construido; sin modelos ni motores 3D.
- `assets/social-card.svg` y `.png`: fuente y exportación 1200 × 630 de la vista previa social.
- `.nojekyll`: entrega estática directa en Pages.
- `docs/project-brief.md`: preguntas de investigación y contexto Xiji. `docs/redesign-progress.md`: decisiones, comprobaciones, límites y entrega.

No se cargan fuentes, imágenes, bibliotecas ni scripts de servicios externos. Los WebP de personas, gafas y guante usan `srcset` 768/1536 y dimensiones explícitas; la portada se carga inmediatamente y los recursos de escenas con `loading="lazy"`. Los PNG fuente no aparecen en el HTML. No hay nuevas dependencias de ejecución: Sharp se usó fuera de la web solo para redimensionar/codificar las exportaciones. Los enlaces salientes van al repositorio y a los LinkedIn facilitados; incluyen aviso accesible de nueva pestaña y `rel="noopener noreferrer"`. No hay formularios, analítica ni cuentas.

## Textos e idiomas

El inglés de `index.html` debe coincidir con `translations.en` de `script.js`. Cada `data-i18n="clave"` corresponde a una cadena en EN y ES. El controlador usa `textContent`, sin aceptar HTML en traducciones. Los nombres accesibles y retratos emplean `data-i18n-aria-label` y `data-i18n-alt`.

El idioma inicial es inglés, salvo preferencia válida guardada en `localStorage` con la clave `senva-language`. Un bloqueo de almacenamiento se captura y no impide el selector durante la visita. EN/ES conservan su propio atributo `lang`; el documento, título, descripción, `og:title`, `og:description`, `og:locale` y `og:image:alt` se actualizan al cambiar idioma. Los rastreadores sin JavaScript reciben el inglés inicial y la imagen social bilingüe.

Al traducir durante una escena, se conserva su fracción relativa en la línea de lectura. `.language-changing` desactiva temporalmente scroll suave y anclaje automático durante la recomposición. Solo esta acción del selector ajusta el punto de lectura: la navegación ordinaria usa scroll nativo.

Conservar los hechos confirmados, incluidos CSEU La Salle para Santiago y su condición de candidato a Xiji. No publicar datos de las colaboradoras anónimas ni añadir resultados, cargos, alianzas, presupuestos o plazos sin evidencia. Los textos de visión deben distinguir información manual, información lingüística adicional e investigación pendiente.

## Arquitectura del movimiento

La base es una página estática legible. JavaScript añade `.js` después de preparar idioma y navegación; los controles dependientes no aparecen sin él. La entrada de marca, las dos líneas del titular y el bloque de apoyo es CSS, breve y de una sola ejecución desde portada. Las ilustraciones hacen una entrada corta y después permanecen estables; la antigua trayectoria de portada se ha retirado. No hay animación constante, bucles de temporizador ni revelaciones repetidas de todas las secciones.

La secuencia tiene cuatro artículos reales (`data-step`, anclas `opportunity`, `vision`, `concept`, `questions`). Los títulos y textos permanecen en el flujo; nunca son capas invisibles enfocables. El duplicado del escenario está marcado `aria-hidden="true"` y no contiene controles. Las figuras de visión y práctica dentro de los artículos son alternativas accesibles: cuando funciona el sticky, se ocultan solo visualmente con una caja recortada de 1 px; en lectura estática se muestran junto al texto. Sus frases ficticias y avisos siguen disponibles para tecnologías de asistencia.

El escenario usa `position: sticky` solo desde **1100 × 740 px**, con movimiento permitido e `IntersectionObserver` disponible. El alto es como máximo 650 px y respeta la altura útil de la ventana. Los artículos tienen una duración espacial acotada y crecen si su texto lo exige. En móvil, tablet, ventanas bajas, sin observador o con movimiento reducido, se muestran artículos normales e ilustraciones dentro del contenido; no se crean tramos vacíos para animar.

Un `IntersectionObserver` activa el listener pasivo de scroll únicamente al entrar en la secuencia y lo retira al salir. `requestAnimationFrame` agrupa cuatro medidas de escena y actualiza el progreso continuo. A partir de él se interpolan `transform` y `opacity` de la trayectoria y los cuatro gráficos. Dentro del capítulo de visión se destaca primero la ruta de habla/gafas/subtítulos y después la de guantes + información facial/corporal/espacial hacia investigación. Las etiquetas siempre permanecen presentes. Las barras de recorrido, opacidad de la señal y aparición sutil de la superficie óptica siguen el progreso nativo; no hay reproducción automática. Es una explicación conceptual, sin datos ni reconocimiento simulado. Las leyendas de gráficos se funden sin superponerse; su contenido esencial también está escrito en los artículos. El indicador numérico y `aria-current="step"` señalan el capítulo activo. Redimensionado, traducción, anclas y detalles nativos solicitan una nueva medida. No se captura rueda, se fuerza scroll ni se impone un salto por gesto.

El control **Pause motion / Pausar movimiento** elimina animaciones y transiciones y muestra el gráfico del capítulo sin interpolación; conserva las dimensiones de lectura. Reanudar no repite la entrada. `prefers-reduced-motion: reduce` desactiva también scroll suave y sticky y ofrece lectura estática completa.

## Accesibilidad y responsive

- Menú móvil desde 700 px hacia abajo; enlaces cerrados con `inert` y `aria-hidden`, Al abrir, el foco entra en el primer enlace; Escape devuelve el foco. Al cambiar al ancho de escritorio se retiran esas restricciones.
- Anclas nativas, foco en el destino sin desplazamiento forzado y margen superior para la cabecera. La etiqueta del destino muestra el foco de teclado, evitando un contorno alrededor de toda la sección. Enlace de salto al contenido y foco visible.
- Detalles de investigación con `<details>` / `<summary>` nativos; toda la información puede leerse sin animaciones ni JavaScript.
- Sin JavaScript: inglés completo y navegación visible, gráficos estáticos y controles dependientes ocultos.
- Ninguna capacidad se representa solo por color. Las dos direcciones se explican en texto y con etiquetas y rutas, sin simular reconocimiento.
- Paleta central en `:root`: azul noche, blanco cálido, turquesa oscuro para texto sobre claro y turquesa claro sobre oscuro. Sin naranja.

No se afirma certificación de accesibilidad. La [revisión documentada](redesign-progress.md) distingue simulaciones, navegador integrado y límites de dispositivos o tecnologías de asistencia.

## Recursos sociales y logo

El logo de cabecera y pie conserva el SVG original y su logotipo; los ajustes son de integración. No confundir las trayectorias editoriales con el símbolo de SENVA. Las fotografías originales no deben sustituirse ni alterarse.

Si se cambia `social-card.svg`, exportar de nuevo `social-card.png` a **1200 × 630 en formato PNG real**. La URL de `og:image` es absoluta porque la consumen rastreadores: `https://withnolan.github.io/senva/assets/social-card.png`. El resto de recursos son relativos y compatibles con `/senva/`. La vista previa combina ilustración editorial 2D, titulares y aviso conceptual EN/ES, no una captura de producto.

## Comprobaciones después de editar

1. Sintaxis: `node --check script.js`, cuando Node esté disponible, y `git diff --check`.
2. Paridad de claves EN/ES, respaldo inglés, IDs únicos y destinos internos; comprobar archivos enlazados y metadatos.
3. Navegador: 320 px, móvil habitual, tablet, escritorio grande y bajo; EN/ES, menús, detalles abiertos, cambios de orientación y redimensionado.
4. Entrada y salida del sticky, estados principales e intermedios, avance y regreso, anclas y selector durante una escena.
5. Teclado, movimiento reducido, lectura sin JavaScript y almacenamiento bloqueado. Revisar consola, recursos y desbordamientos bajo `/senva/`.
6. Comparar capturas de portada, escenas, equipo y cierre. Repetir solo pruebas afectadas por correcciones.

Los arneses y capturas de la revisión no se añaden a la web ni requieren infraestructura de tests.

## GitHub Pages

Fuente **verificada mediante la API el 20 de octubre de 2026**: repositorio `withnolan/senva`, rama `main`, carpeta `/`, mecanismo `legacy`. No hay workflow propio ni carpeta `dist`; se sirven los archivos de raíz. No se necesitan nuevos ajustes ni secretos.

Después de las comprobaciones, guardar los archivos pertinentes en un commit y hacer push normal a `origin/main`, según la autorización del propietario. Conservar cambios ajenos; nunca usar force push ni eludir protecciones. Si una protección requiere PR, subir una rama y documentar la aprobación pendiente.

El push puede iniciar el despliegue ya configurado. Comprobar el build de Pages correspondiente al SHA y su resultado, y abrir después [la web pública](https://withnolan.github.io/senva/). Un push correcto no demuestra que el despliegue haya terminado. No afirmar publicación si el build sigue pendiente o falla. El resultado de esta entrega se registra en `redesign-progress.md`.

Referencia de mantenimiento: [fuentes de publicación de GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).
