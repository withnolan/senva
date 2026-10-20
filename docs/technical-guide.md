# SENVA — Guía técnica de la web

Esta guía reúne las instrucciones para previsualizar, editar, mantener y publicar la web estática de SENVA. Para conocer la misión, la visión y el equipo, consulta la [presentación del proyecto](../README.md).

## Previsualizar localmente

No requiere instalación, dependencias ni compilación. Desde la carpeta del repositorio, con Python 3:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Abre [http://127.0.0.1:8000](http://127.0.0.1:8000). Para detener el servidor, pulsa `Ctrl+C` en la terminal. También puedes abrir `index.html` directamente; se recomienda HTTP para probar el almacenamiento local de forma consistente.

El contenido principal en inglés está en el HTML y se puede leer sin JavaScript. Con JavaScript se activan el selector EN/ES y el menú móvil desplegable. Sin JavaScript se muestra la navegación completa. El idioma inicial es inglés; una preferencia válida guardada en este navegador tiene prioridad. Si el navegador bloquea el almacenamiento, el selector sigue funcionando durante la visita.

## Estructura

```text
.
├── index.html             # Contenido semántico en inglés y metadatos iniciales
├── styles.css             # Diseño responsive, impresión y movimiento reducido
├── script.js              # Traducciones, navegación y progreso de las cuatro escenas
├── .nojekyll              # Publicación estática directa en GitHub Pages
├── assets/
│   ├── favicon.svg        # Símbolo propio de SENVA
│   ├── shengyu-nolan-chen.jpg      # Retrato facilitado por el usuario
│   ├── santiago-munoz-veguillas.jpg # Retrato facilitado por el usuario
│   ├── social-card.svg    # Fuente editable de la imagen social bilingüe
│   └── social-card.png    # Imagen social, 1200 × 630
└── docs/
    ├── project-brief.md   # Síntesis EN/ES y borrador de motivación para Xiji
    ├── technical-guide.md # Ejecución, edición y despliegue de la web
    └── redesign-progress.md # Etapas, comprobaciones y límites de la revisión
```

Los gráficos de la página son SVG y CSS propios. La portada muestra dos formas que representan conexión, sin manos ni dispositivos. La narrativa de cuatro escenas recorre propósito → visión de guantes y gafas → primer experimento de aprendizaje → lo que debemos demostrar. Los diagramas están etiquetados como concepto: no muestran reconocimiento real, un prototipo ni resultados. El logo original se conserva en cabecera, pie y favicon. Los retratos se muestran en formato compacto junto a las biografías, con el mismo tamaño para ambos cofundadores. No se cargan fuentes, scripts, imágenes ni otros recursos de servicios externos. Los enlaces salientes apuntan a LinkedIn y al repositorio, y se abren solo por decisión del visitante.

## Editar contenido y traducciones

- El texto en inglés de `index.html` es la versión de respaldo sin JavaScript. Mantén su contenido sincronizado con `translations.en` de `script.js`.
- Cada elemento con `data-i18n="clave"` toma su texto de `translations.en.clave` o `translations.es.clave`. Añade las nuevas claves a **ambos** idiomas. Los valores que son arrays generan saltos de línea con nodos DOM; las traducciones no admiten HTML.
- Las fotografías aportadas por el usuario se sirven como JPEG optimizados de 800 × 800, sin alterar el contenido ni recortar el original; tienen igual tamaño y carga diferida. Sus textos alternativos usan `data-i18n-alt` y están traducidos.
- Los nombres accesibles usan `data-i18n-aria-label`. Los controles de idioma conservan las abreviaturas EN/ES y la propiedad `lang` de cada idioma.
- `title`, `description`, `socialDescription` y `socialImageAlt` actualizan el título, la descripción y los metadatos sociales al cambiar de idioma. Los rastreadores que no ejecuten JavaScript recibirán la versión inglesa inicial. La imagen social incluye los titulares y el estado de idea en ambos idiomas; representa las mismas formas conceptuales de la portada.
- Los colores están en las variables al principio de `styles.css`: azul noche, blanco cálido y turquesa. No se utiliza naranja. El gráfico usa la misma paleta.
- `assets/social-card.svg` es editable. Si lo cambias, exporta de nuevo el PNG a 1200 × 630 y conserva el nombre referenciado en los metadatos.
- Los enlaces de sección usan identificadores estables sin depender del idioma. Las rutas de CSS, JavaScript y favicon son relativas y funcionan en `/senva/`.

La única URL absoluta de un recurso es `og:image`, porque las vistas previas sociales necesitan conocer la dirección pública completa. Apunta al destino previsto `https://withnolan.github.io/senva/assets/social-card.png`; actualízala si cambias el propietario, el nombre del repositorio o utilizas un dominio propio. Esta URL no significa que la web esté publicada.

Respeta el estado del proyecto al editar. No añadas cifras, traducción garantizada, avances, cargos, testimonios, compradores ni colaboraciones sin evidencia. El nombre se inspira en «seña», movimiento y avance; no es un acrónimo. El lema en inglés es **“Every gesture brings us closer”** y en español **“Cada gesto nos acerca”**.

## Publicar en GitHub Pages

Los archivos están preparados para la rama **`main`** y la carpeta **`/ (root)`**. Subirlos al repositorio no modifica los ajustes de GitHub Pages.

1. Con autorización para publicar, revisa el diff y guarda los cambios en un commit; inclúyelos todos, también los recursos sociales y la documentación.
2. Comprueba que la fuente configurada en **Settings → Pages** sea **Deploy from a branch**, rama **`main`**, carpeta **`/ (root)`**. Si ya es así, conserva esos ajustes. Esta revisión no los modifica ni confirma su valor actual.
3. Sube el commit a `origin/main` cuando se autorice. Ese push puede iniciar automáticamente el despliegue si la fuente está configurada así.
4. Espera al resultado del despliegue de Pages en **Actions** y revisa su URL antes de darlo por publicado. La dirección esperada es [https://withnolan.github.io/senva/](https://withnolan.github.io/senva/).

No hace falta un workflow propio, backend, claves, gestor de paquetes ni carpeta `dist`. `.nojekyll` permite servir los archivos estáticos directamente. Si la organización aplica una política distinta a Pages, habrá que seguir los ajustes permitidos por esa cuenta.

## Movimiento y accesibilidad

La entrada de marca, titular, texto y botones usa una secuencia CSS breve de una sola ejecución. Las señales quedan estáticas al terminar; no hay animación ambiental permanente. En escritorio desde 1000 × 720 px, `position: sticky` acompaña la narrativa. `IntersectionObserver` limita el seguimiento al bloque visible y `requestAnimationFrame` agrupa el progreso del scroll nativo: solo se transforman posición, escala y opacidad del gráfico y sus leyendas. El texto principal permanece en el flujo normal. En móvil, tablet y ventanas bajas se usan secciones normales, sin fijación. El botón traducido **Pause motion / Pausar movimiento** suprime transiciones y apariciones; reanudar no repite la entrada. `prefers-reduced-motion` desactiva animaciones, transiciones, scroll suave y la composición fija de la narrativa.

Las apariciones utilizan `IntersectionObserver` y Web Animations como mejora opcional; ningún texto parte de una clase oculta. Si esas APIs o JavaScript fallan, el contenido y el desplazamiento nativo se mantienen. El plan propone codiseño con personas sordas signantes para valorar necesidades, utilidad y aceptabilidad; todavía no se han iniciado colaboraciones.

## Comprobaciones de mantenimiento

Después de cambiar contenido o diseño, comprueba ambos idiomas en móvil y escritorio, las anclas, el menú con teclado y Escape, los acordeones, los enlaces externos y la persistencia del idioma. Prueba también sin JavaScript, con almacenamiento bloqueado y con `prefers-reduced-motion`. Comprueba 320 px, los límites 600–640 px, tablet, escritorio y orientación horizontal; abre los detalles y revisa todas las secciones hasta el pie. Verifica los metadatos EN/ES y que no haya recursos rotos bajo `/senva/`. Consulta las comprobaciones efectuadas y sus límites en [el registro del rediseño](redesign-progress.md).

No hay analítica, formularios, cookies propias de seguimiento ni infraestructura de tests. No se ha verificado la disponibilidad de la web desde China.

## Comprobar el prefijo `/senva/`

Para reproducir la ruta de Pages sin mover archivos ni añadir enlaces simbólicos al repositorio, desde la carpeta SENVA:

```sh
senva_preview_dir="$(mktemp -d)"
ln -s "$PWD" "$senva_preview_dir/senva"
python3 -m http.server 8000 --bind 127.0.0.1 --directory "$senva_preview_dir"
```

Abrir http://127.0.0.1:8000/senva/. Detener con `Ctrl+C`. La carpeta temporal solo facilita la prueba; no se publica ni se añade a Git. Usar otro puerto si 8000 está ocupado. Tras editar CSS o JavaScript, forzar la recarga si el navegador conserva una versión anterior.

Los pasos de publicación se basan en la [documentación de GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site). La comprobación local no sustituye revisar el despliegue real después de un push autorizado.
