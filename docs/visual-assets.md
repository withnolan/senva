# SENVA — Recursos visuales y tipografía

Azul noche, blanco cálido y turquesa, con los acentos fríos aprobados; ilustración 2D, una pieza de gafas 3D autorizada posteriormente y contenido HTML traducible. Los gráficos son conceptos de investigación, sin datos capturados o capacidades funcionales demostradas.

## Recursos activos

| Recurso | Uso y origen |
| --- | --- |
| `assets/illustrations/conversation-editorial.webp` | Portada, dos adultos con manos en reposo. Generación editorial mediante imagegen; [origen, selección y límites](conversation-art.md). 1200×800 y unos 122 KB. |
| `assets/models/gafas/senva-gafas.glb` | Montura negra mate aprobada; giro conceptual ligado al scroll de visión, carga opcional en escritorio. |
| `assets/models/gafas/vistas/gafas-*.webp` | Tres cuartos como respaldo del escenario y frontal en el diagrama de subtítulos; vistas del mismo modelo. |
| `assets/graphics/glove.svg` | Guante textil vacío con panel, costuras y puño; no es un signo concreto ni un esquema de sensores. |
| Conexiones y voz | SVG/CSS originales, relaciones conceptuales. No representan reconocimiento real. |
| `assets/shengyu-nolan-chen.jpg`, `santiago-munoz-veguillas.jpg` | Fotografías facilitadas por el usuario; mismo tratamiento y tamaño reservado. |
| Favicon, símbolo y palabra SENVA | Identidad conservada. El logo mantiene su familia independiente. |
| `assets/social-card.svg`, `.png` | Vista social 1200×630, nueva ilustración. SVG con imagen PNG embebida para exportación; PNG final para metadatos. |

El guante y los respaldos de gafas se cargan como `<img>` con medidas reservadas; un canvas decorativo sustituye visualmente al respaldo solo tras dibujar el primer frame. Textos, conceptos y aclaraciones se mantienen en HTML.

La nueva imagen tiene alfa real. Su raster utiliza familias cromáticas y antialiasing; no se afirma una paleta matemática de cuatro valores exactos. No hay naranja. El renderer local de las gafas es la única excepción 3D, autorizada expresamente después de esta dirección editorial.

## Modelos de producto

`assets/models/` reúne las gafas negras de acetato sin marca aprobadas por el usuario. La petición posterior integra el GLB mate en visión, con giro de casi 300° controlado por scroll y reposo final. No se animan las bisagras ni se simula reconocimiento. Los puntos frontales son decorativos, no cámaras ni sensores. Detalles, nodos y límites en [assets/models/README.md](../assets/models/README.md). Guante pendiente.

## Tipografía local

- **Bricolage Grotesque**, titulares, pesos variables 400–800; fuente [original](https://github.com/ateliertriay/bricolage), distribución oficial [google/fonts](https://github.com/google/fonts/tree/main/ofl/bricolagegrotesque). Licencia [BricolageGrotesque-OFL.txt](../assets/fonts/BricolageGrotesque-OFL.txt).
- **Instrument Sans**, lectura e interfaz, pesos variables 400–700; fuente [original](https://github.com/Instrument/instrument-sans), distribución oficial [google/fonts](https://github.com/google/fonts/tree/main/ofl/instrumentsans). Licencia [InstrumentSans-OFL.txt](../assets/fonts/InstrumentSans-OFL.txt).

WOFF2 latinos oficiales descargados mediante Google Fonts CSS2, aproximadamente 77 y 30 KB. Conservan caracteres EN/ES y puntuación. Dos `@font-face`, `font-display:swap`, preload local y respaldo sans-serif. El visitante no solicita Google Fonts ni otro CDN. No son conversiones realizadas por el proyecto.

Manrope y su licencia se reutilizan en las secciones de equipo y contacto para recuperar su presentación anterior; las demás secciones conservan las fuentes de la última entrega. La palabra de marca sigue en Arial/Helvetica, peso 750 y espaciado anterior.

## Edición y límites

Conservar los `viewBox` y proporciones de los SVG; revisar objetos a tamaño grande y móvil. No añadir puntos de reconocimiento, sensores elegidos, marcas o arquitectura inventada. La ilustración humana no es testimonio, retrato de usuarios investigados ni referencia lingüística de LSE.

Mantener medidas reservadas, alternativas EN/ES y textos en HTML. Si cambia la portada, actualizar vista social y revisar su PNG: algunos exportadores SVG no soportan imágenes WebP embebidas, por eso la fuente social usa PNG. Sharp solo se usa durante autoría.

Los recursos históricos ajenos se preservan. `assets/graphics/conversation.svg` y otras ilustraciones anteriores no se solicitan por la implementación actual. El historial Git conserva las coreografías sustituidas. Registrar revisión real y límites en [redesign-progress.md](redesign-progress.md).
