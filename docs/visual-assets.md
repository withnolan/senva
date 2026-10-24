# SENVA — Recursos visuales y tipografía

Azul noche, blanco cálido y turquesa, con los acentos fríos aprobados; ilustración 2D, una pieza de gafas 3D autorizada posteriormente y contenido HTML traducible. Los gráficos son conceptos de investigación, sin datos capturados o capacidades funcionales demostradas.

## Recursos activos

| Recurso | Uso y origen |
| --- | --- |
| `assets/illustrations/conversation-devices.webp` | Portada, dos adultos con gafas conceptuales y manos en reposo, una persona con guantes. Edición imagegen; [prompt, origen y límites](conversation-art.md#device-edition--23-october-2026).1200×800 y unos129 KB. |
| `assets/illustrations/conversation-editorial.webp` | Recurso anterior preservado; permanece en la vista social. |
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

`assets/models/` reúne las gafas negras de acetato sin marca aprobadas por el usuario. La petición posterior integra el GLB mate en visión, con giro de casi300° y recorrido lateral controlados por scroll, cristal frío, reflejos orgánicos y escritura lenta de frases ficticias EN/ES sobre las lentes. El ángulo reposa; las lentes continúan animándose solo mientras están visibles y sin pausa. Una sola escena continúa hasta el diagrama A, con respaldo estático. No se animan las bisagras ni se simula reconocimiento. Los puntos frontales son decorativos, no cámaras ni sensores. Detalles, nodos y límites en [assets/models/README.md](../assets/models/README.md). Guante pendiente.

## Tipografía local

- **Bricolage Grotesque**, titulares, pesos variables 400–800; fuente [original](https://github.com/ateliertriay/bricolage), distribución oficial [google/fonts](https://github.com/google/fonts/tree/main/ofl/bricolagegrotesque). Licencia [BricolageGrotesque-OFL.txt](../assets/fonts/BricolageGrotesque-OFL.txt).
- **Instrument Sans**, lectura e interfaz, pesos variables 400–700; fuente [original](https://github.com/Instrument/instrument-sans), distribución oficial [google/fonts](https://github.com/google/fonts/tree/main/ofl/instrumentsans). Licencia [InstrumentSans-OFL.txt](../assets/fonts/InstrumentSans-OFL.txt).

WOFF2 latinos oficiales descargados mediante Google Fonts CSS2, aproximadamente 77 y 30 KB. Conservan caracteres EN/ES y puntuación. Dos `@font-face`, `font-display:swap`, preload local y respaldo sans-serif. El visitante no solicita Google Fonts ni otro CDN. No son conversiones realizadas por el proyecto.

Manrope y su licencia se reutilizan en las secciones de equipo y contacto para recuperar su presentación anterior; las demás secciones conservan las fuentes de la última entrega. La palabra de marca sigue en Arial/Helvetica, peso 750 y espaciado anterior.

## Edición y límites

Conservar los `viewBox` y proporciones de los SVG; revisar objetos a tamaño grande y móvil. No añadir puntos de reconocimiento, sensores elegidos, marcas o arquitectura inventada. La ilustración humana no es testimonio, retrato de usuarios investigados ni referencia lingüística de LSE.

Mantener medidas reservadas, alternativas EN/ES y textos en HTML. Si cambia la portada, actualizar vista social y revisar su PNG: algunos exportadores SVG no soportan imágenes WebP embebidas, por eso la fuente social usa PNG. Sharp solo se usa durante autoría.

Los recursos históricos ajenos se preservan. `assets/graphics/conversation.svg` y otras ilustraciones anteriores no se solicitan por la implementación actual. El historial Git conserva las coreografías sustituidas. Registrar revisión real y límites en [redesign-progress.md](redesign-progress.md).


### Banda inferior y movimiento de cámara — 24 de octubre de2026

Los planos de subtítulos ocupan la mitad inferior de las lentes del GLB real: ancho60% y descenso20% de la altura. Toda la banda queda bajo el centro óptico;2145 rayos por lente comprobados en Node. Fuente de textura92px conserva aproximadamente el tamaño anterior y la proporción, sin modificar el modelo ni el cristal. Esto no es una comprobación visual/GPU.

Los acercamientos de apertura, práctica, principio y cierre operan sobre las composiciones HTML/CSS existentes. Los resplandores son gradientes radiales en capas decorativas, sin nuevos recursos binarios ni dependencias. Práctica/validación retiran sus óvalos sólidos; contacto usa una disolución cromática sin silueta recortada. [Storyboard y límites](camera-motion-direction.md).
