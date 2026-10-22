# SENVA — Guía técnica

La [presentación del proyecto](../README.md) explica misión, equipo y estado. La implementación actual es una página editorial estática: portada humana, propósito, visión bidireccional, primer experimento y plan de validación. El movimiento acompaña un único diagrama de la visión; no organiza toda la página como un escenario animado.

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
| `script.js` | Selector EN/ES, metadatos, menú, indicador de capítulo y énfasis del diagrama. 114 claves en cada idioma en esta versión. |
| `assets/graphics/conversation.svg` | Ilustración original de dos personas para la portada; alternativa textual en HTML. |
| `assets/graphics/glasses.svg`, `glove.svg` | Objetos SVG compartidos por el diagrama y la composición de práctica. |
| `assets/fonts/manrope-variable.ttf` | Manrope variable, servida localmente; licencia en `assets/fonts/OFL-Manrope.txt`. |
| `assets/*.jpg` | Retratos originales de 800 × 800, con dimensiones reservadas y carga diferida. |
| `assets/favicon.svg`, `senva-logo.svg` | Identidad conservada; la cabecera y el pie mantienen su símbolo SVG y palabra de marca. |
| `assets/social-card.svg`, `.png` | Fuente y exportación de la vista previa social de 1200 × 630. |
| `.nojekyll` | Entrega directa desde el repositorio, sin compilación. |

La página solicita recursos locales: CSS, JS, fuente y SVG, además de los dos retratos. No carga bibliotecas, fuentes desde CDN, motores 3D, analítica o servicios de ejecución externos. Los SVG de dispositivos se cargan como imágenes, no mediante definiciones duplicadas en el HTML. La vista previa social es un recurso para metadatos; no es una sección de la web.

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

La portada usa una entrada CSS breve de textos e ilustración, solo cuando JavaScript añade `.enter`, el movimiento está permitido y la visita comienza cerca del inicio. La lectura no depende de que termine la entrada. No hay pantalla de carga.

La visión contiene dos artículos `.vision-beat` y una sola figura `.vision-diagram`. Ambas rutas y sus avisos están siempre visibles. El diagrama puede permanecer `position: sticky` a 112 px durante esa sección; su contención termina con `.vision-layout`. No existe un artboard continuo, un array de cinco poses o un control de pausa global.

Un `IntersectionObserver` activa un listener pasivo de scroll mientras la visión está en pantalla. Una única cola `requestAnimationFrame` mide el avance del contenedor durante su intervalo de fijación y actualiza `--route-progress` entre 0 y 1. CSS aplica desplazamientos de pocos píxeles y escalas de 0,98–1 a las dos rutas. Este énfasis es reversible y no oculta texto, dispositivos o aclaraciones. Al detener el scroll se conserva el estado. Otro observador actualiza `aria-current="step"` en la barra de capítulos.

En anchuras de hasta 760 px el diagrama pasa al flujo normal, antes de sus explicaciones, y los artículos dejan de reservar altura de escritorio. También se desactiva el sticky en ventanas de hasta 720 px de altura. El contenido puede crecer; no se recorta para conservar una animación. El primer experimento y las secciones siguientes se leen con scroll normal.

Con `prefers-reduced-motion: reduce` desaparecen entrada, transiciones, scroll suave y fijación del diagrama. Las transformaciones de énfasis y de las microinteracciones indicadas en CSS se anulan. Si falta JavaScript u observadores, ambos recorridos siguen completos y legibles. Las dependencias de movimiento no controlan la disponibilidad del contenido.

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
3. Recorrer ambas direcciones hacia delante y atrás; comprobar que el énfasis no cambia la lectura y que el diagrama sale antes del experimento. Revisar también entrada y salida del sticky, no solo sus estados centrales.
4. Menú con teclado, foco de anclas, selector EN/ES, barra de capítulos y enlaces externos. Comprobar alternativas sin script, sin observador, con almacenamiento bloqueado y con movimiento reducido.
5. Confirmar recursos, fuente y licencia bajo `/senva/`, metadatos sociales y ausencia de errores atribuibles a la web. Mantener el estado de idea y los límites de la investigación.

Esta guía describe el código y propone revisión; **no acredita que todas esas pruebas se hayan ejecutado**. Las comprobaciones reales, simulaciones y límites de cada entrega pertenecen a [docs/redesign-progress.md](redesign-progress.md).

## Publicación

GitHub Pages publica `withnolan/senva`. La última configuración registrada es rama `main`, carpeta `/`, modo `legacy`; consultar su estado antes de cambiar cualquier ajuste. No se requieren secretos nuevos ni compilación.

Guardar los cambios autorizados, hacer push normal sin reescribir historia ni perder cambios ajenos y comprobar el build del SHA correspondiente. Después revisar [la web pública](https://withnolan.github.io/senva/). Un push correcto no demuestra por sí solo que Pages haya terminado; registrar ambos estados por separado.
