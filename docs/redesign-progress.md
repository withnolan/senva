# SENVA — Rediseño integral

Actualizado: 22 de octubre de 2026. Registro del rediseño desde `4945ec0`.

**Trabajo actual:** [Revisión editorial con método de agentes](#editorial-review), 22 de octubre de 2026, sobre `27a7d3d`. Los bloques anteriores conservan el historial.

## Objetivo y alcance

Crear una presentación breve y memorable sobre comunicación, autonomía y encuentro. La práctica de LSE es una primera hipótesis de investigación. No existe producto, prototipo, validación ni alianzas. Rediseño completo de HTML/CSS/JavaScript y documentación, verificación y entrega mediante commits y push autorizados. Sin cambiar ajustes del repositorio ni añadir un framework.

Se conservan el símbolo y logotipo actuales, lema, retratos reales e igual importancia de los cofundadores, EN/ES y paleta azul noche / blanco cálido / turquesa. La corrección explícita del usuario sobre Santiago —Grado en Diseño y Gestión de Proyectos Transmedia, CSEU La Salle— prevalece sobre cualquier dato anterior.

## Decisión creativa

- **Encuentro de perspectivas:** campos gráficos que se aproximan. Humana y sobria, pero demasiado próxima a la abstracción de los aros anteriores.
- **Una conversación encuentra continuidad — elegida:** palabras y trayectorias pasan de encuentro a dos direcciones concretas, luego a un experimento y a una decisión. El movimiento explica relaciones; la composición cambia con el significado.

La referencia TuffStudy se ha inspeccionado en navegador para observar escala, pausas, contraste de escenas y transición al bloque fijo. No se copian recursos, identidad ni contenido; tampoco sus intervalos de pantalla vacía.

## Hitos

### 1. Inspección y dirección — terminado

- Revisados código, recursos y cuatro documentos principales; capturas de portada, secuencia, equipo y cierre anteriores en escritorio y portada móvil, fuera del repositorio.
- Árbol inicial limpio. Remoto `https://github.com/withnolan/senva.git`; rama `main`. Sin instrucciones `AGENTS.md` aplicables encontradas.
- API de Pages consultada: fuente `main`, carpeta `/`, mecanismo `legacy`, URL `https://withnolan.github.io/senva/`, estado inicial `built`.
- Fotografías y favicon registrados por hash para comprobar que no se alteran.

### 2. Web y narrativa — implementado; revisión en el hito 4

Portada tipográfica sin aros y trayectoria editorial; cuatro escenas con gráficos propios: encuentro, dos flujos, práctica y preguntas. Diagrama de subtítulos de habla hacia gafas y flujo inverso de información manual + información facial/corporal/espacial hacia investigación. Plan por decisiones, preguntas técnicas agrupadas y cierre con ambos fundadores. CSS y controladores anteriores sustituidos, sin dependencias. Primer recorrido visual de escritorio realizado; corregida la dirección física del segundo flujo para coincidir con el texto. El logo de cabecera y pie conserva exactamente su SVG anterior.

### 3. Documentación y recursos — implementado

README EN/ES con la misma información esencial, inicio rápido y mapa real de archivos. Síntesis centrada en hipótesis y decisiones, con borrador Xiji. Guía técnica acorde al controlador y sus alternativas estáticas. Logo reutilizable para README a partir del símbolo y logotipo existentes; nueva fuente social tipográfica. SVG y PNG real 1200 × 630 comprobados visualmente y servidos correctamente bajo `/senva/`. Sin licencia añadida.

### 4. Revisión y correcciones — terminada localmente

Comprobaciones y límites detallados a continuación. No quedan fallos reproducibles observados de la implementación tras las correcciones. La publicación todavía debe verificarse en el hito 5.

### 5. Entrega — realizada; seguimiento de cierre

Implementación entregada en `1415421` y push confirmado a `origin/main`. Build de Pages `built` para ese SHA, sin error, el 20 de octubre de 2026 a las 11:20 (Madrid). Web pública y README renderizado comprobados. El commit de cierre registra la entrega y mejora el foco de anclas observado en producción. Sin force push ni cambios de ajustes.

## Historial anterior

Las etapas 1–2 se entregaron en `bf6d803`; las etapas 3–4 y restauración del logo original en `4945ec0`. Esta instrucción integral sustituye las restricciones de detenerse tras una etapa. El historial Git conserva las versiones y comprobaciones anteriores; este registro describe el trabajo integral actual.

## Correcciones surgidas de la revisión

- Matriz inicial EN/ES de 320 a 1920 px sin desplazamiento horizontal. Detectado y corregido un desbordamiento local del gráfico de preguntas a 320 px.
- Revisada visualmente toda la web española a 320 px. Mejorada la lectura de biografías: retrato y nombre juntos, estudios a anchura completa en móvil, igual tratamiento para ambos.
- Corregido un destello del menú cerrado durante cambios de ancho: la transición se aplica al abrir por interacción, no al ocultar inicialmente o redimensionar.
- Las dos rutas se trazan en orden dentro del capítulo de visión con scroll nativo; las etiquetas permanecen visibles. No hay reconocimiento simulado.

- Acortado el espacio de lectura en escritorio y concentrados los fundidos: la trayectoria mantiene presencia durante el cambio de composición, sin alargar un tramo vacío ni superponer leyendas.
- Indicadores de los detalles cambiados a + / −, sin rotación que exceda la caja. Los tres abiertos en EN/ES a 320 px tienen desbordamiento cero.
- Al abrir el menú, el foco entra en su primer enlace. Tab pasa al siguiente; Escape cierra y devuelve foco. Si se oculta al redimensionar, no queda foco dentro de enlaces `inert`.
- Parámetros de versión derivados del hash de CSS/JS para evitar servir el diseño anterior desde la caché tras publicar. Recursos relativos, sin sistema de compilación.
- Ajuste final de foco de anclas tras probar la web pública: señal discreta en la etiqueta del destino, en lugar de un contorno nativo alrededor de toda la sección. Comprobado con navegación al equipo y retorno al inicio.

## Comprobaciones efectuadas

- **Responsive EN/ES:** 320 × 844, 390 × 844, 600 × 844, 700 × 844, 701 × 844, 768 × 1024, 900 × 900, 1024 × 768, 1100 × 740, 1440 × 1000 y 1920 × 1080. Medidas reales del viewport; sin desplazamiento horizontal. Repetidas las anchuras afectadas por correcciones. Ventanas de 1100 × 650 y 844 × 390 usan lectura normal.
- **Revisión visual:** web publicada antes del cambio en escritorio y móvil; nueva portada, cuatro estados, entrada/salida del escenario, plan, investigación, ambos fundadores, Xiji y cierre. Toda la página recorrida en español a 320 px y en inglés en escritorio; revisadas escenas españolas de escritorio y longitudes de ambos idiomas. Capturas antes/después guardadas fuera del repositorio con prefijo `senva-integral-`.
- **Scroll:** 01 → 02 → 03 → 04 → 03 → 02 → 01 en EN y ES. Trayectoria, capítulos y dos rutas reversibles; el escenario se fija a 110 px cuando corresponde y sale naturalmente. Comprobados estados intermedios de los tres fundidos; las leyendas decorativas no se superponen. El texto principal nunca se oculta. Alturas internas de los cuatro gráficos verificadas a 1100 × 740, 1280 × 800 y 1440 × 1000 sin desbordamiento.
- **Navegación y foco:** anclas nativas y foco de destino, menú con clic/Enter, Tab y Escape; enlaces cerrados `inert` / `aria-hidden`. Orientación con menú abierto de 320 × 844 a 844 × 390 y regreso. Pausa/reanudación con Space, transiciones a cero durante pausa y entrada sin repetirse al reanudar. Comprobación de todos los IDs y destinos internos.
- **Idioma:** 118 claves EN/ES con paridad, respaldo inglés y etiquetas accesibles sincronizados. `lang`, título, descripción, `og:locale` y metadatos sociales correctos al cambiar. Una lectura de visión pasó de 862,59 a 901,19 px de altura manteniendo la fracción de lectura de 0,3480 a 0,3483. Detalles abiertos permanecen abiertos y legibles tras traducir.
- **Alternativas estáticas:** HTML sin script en un arnés externo, en escritorio y a 320 px: inglés íntegro, cuatro escenas, navegación visible y detalles abiertos con Enter; sin controles inoperantes ni sticky. Ausencia de `IntersectionObserver` simulada: lectura normal con las cuatro escenas. Almacenamiento bloqueado simulado: inglés inicial y cambio a ES funcional durante la visita.
- **Movimiento reducido:** CSS y `matchMedia` equivalentes simulados en un arnés fuera del repositorio. Sin entrada, sticky, transiciones o scroll suave; artículos sin altura mínima y contenido completo. No se cambió ni comprobó la preferencia real del sistema operativo.
- **Contenido:** misión de comunicación, autonomía y reciprocidad; práctica y compradores como hipótesis; codiseño pendiente; sin logros, producto o alianzas inventados. Información facial/corporal/espacial y límites de sensores conservados. Ambas fotografías y favicon idénticos byte a byte a `4945ec0`; SVG original del logo idéntico en cabecera y pie. Estudios de Santiago según la corrección explícita del historial. Colaboradoras anónimas y candidatura de Santiago sin admisión.
- **Recursos:** todos los CSS, JS y recursos locales respondieron HTTP 200 bajo `/senva/`, incluidos parámetros de versión y PNG social. SVG válidos; PNG real 1200 × 630; HTML equilibrado, IDs únicos, enlaces locales Markdown y sus anclas válidos. Sin dependencias externas o arneses en el repositorio.
- **Contraste calculado de los pares de texto usados:** turquesa oscuro / blanco cálido 4,98:1; turquesa claro / azul noche 9,31:1; texto secundario / fondo claro 5,42:1; nota clara / azul noche 8,27:1. No equivale a una auditoría integral de accesibilidad.
- **Comprobaciones de código:** `node --check script.js`, `git diff --check`, sincronía de textos y comprobación del alcance de los recursos conservados, correctos. Las últimas recorridas locales no registraron nuevos errores ni avisos. El historial de la herramienta conserva un aviso externo de Cookiebot al inspeccionar TuffStudy y dos `TypeError` sin URL sobre `animation`; no se reprodujeron en la revisión final ni se ha identificado un origen en SENVA. No se declara vacío el historial completo de la herramienta.

## Límites pendientes

Viewports del navegador integrado, sin dispositivos físicos, matriz de motores ni lector de pantalla real. Preferencia de movimiento reducido y almacenamiento bloqueado comprobados por simulación. Los enlaces de LinkedIn conservan exactamente los facilitados; su contenido no se confirma sin superar la pantalla de acceso. No se ha comprobado disponibilidad desde China ni se atribuye un diagnóstico a mensajes sin origen. Los checks locales no demuestran por sí solos un despliegue público.

## Estado de entrega

**Rediseño integral entregado en `origin/main`.** Commit de implementación `14154218c45e1a8c8b46e1be8835e99222458345`; despliegue `built` confirmado para ese SHA, sin errores. URL pública: https://withnolan.github.io/senva/.

Comprobación en producción: titular y metadatos nuevos, referencias CSS/JS versionadas, escenario a 110 px, avance y regreso, cambio EN/ES sin perder capítulo, menú móvil por Tab y Enter hasta el equipo, retratos cargados de 800 × 800 y mismo tamaño visible, retorno al inicio con teclado y cero desbordamiento a 320 px. Sin nuevos errores o avisos en ese recorrido. El README de GitHub muestra el logo cargado y la nueva entrada inglesa con acceso a español.

La prueba pública de retorno con teclado mostró un contorno nativo alrededor de toda la portada. El seguimiento de cierre lo sustituye por una señal de foco en la etiqueta del destino, manteniendo foco visible y navegación nativa. Comprobado localmente desde el enlace del equipo y desde el pie: sección sin contorno grande, etiqueta con contorno turquesa y retorno a `scrollY = 0`. Este ajuste no cambia contenido, arquitectura ni movimiento; actualiza el hash del CSS.

El commit de cierre incluye este registro y el ajuste de foco; su SHA y resultado final de Pages se confirman en la respuesta de entrega. Las comprobaciones y límites anteriores se mantienen. No hay ajustes del repositorio, fotografías, licencia o datos personales nuevos en esta entrega.

<a id="editorial-2d"></a>
## Capa visual editorial 2D — 20 de octubre de 2026

Base `d199c90`. La dirección anterior de objetos fotorrealistas se ha descartado por corrección explícita del usuario antes de publicar. Los recursos creados para esa dirección se han retirado del árbol del proyecto. No se añadieron modelos, motores ni dependencias 3D. Logo, retratos y recursos ajenos conservados.

### Dirección final

Ilustración editorial contemporánea 2D: dos personajes ficticios en conversación, gafas y guante estilizados; curvas limpias, azul noche, blanco cálido y turquesa. Sin signo concreto, manos de personajes fuera de encuadre y guante vacío. Nada de naranja, WebGL, perspectivas CSS ni rotaciones tridimensionales.

### Hitos

1. Inspección de la versión pública y del código: terminada en el inicio de esta ampliación.
2. Recursos 2D: creados tres másteres y seis WebP responsive locales; 73 KiB juntos a 768 px / 178 KiB a 1536 px. Renders descartados retirados.
3. Integración: portada humana; dos rutas con dispositivos ilustrados, voz, subtítulos ficticios e información adicional pendiente; primer experimento con guante y aplicación ilustrativa. Textos y avisos EN/ES en HTML. Implementada y comprobada.
4. README, guía técnica y procedencia/prompts actualizados para la implementación 2D. Vista previa social SVG/PNG 1200 × 630 exportada y revisada visualmente.
5. Revisión local finalizada según el detalle siguiente. Las comprobaciones de la dirección descartada no se atribuyen a esta versión.
6. Implementación subida en `397d0f7` mediante push normal a `origin/main`; build de Pages `built` para ese SHA, sin errores. Versión pública comprobada.

### Comprobaciones de la versión 2D

- EN/ES: 320 × 844, 390 × 844, 768 × 1024, 1100 × 740, 1280 × 720 y 1440 × 1000, más orientación horizontal 844 × 390, con dimensiones reales del viewport comprobadas. Sin desplazamiento horizontal ni desbordamiento de textos en figuras. El escenario se convierte en lectura normal en móvil/tablet y ventana baja. Los paneles caben en la altura mínima de escritorio; figcaptions dentro del recurso.
- Revisión visual de portada humana, visión/subtítulos y práctica en escritorio y a 320 px; dibujos completos, sin texto incrustado en imágenes, ejemplos y avisos visibles. Corregido un cruce de la etiqueta de voz con las gafas; el nombre de la ruta ya explica el origen y la señal queda despejada. Eliminados los fondos multiplicados que encajonaban los dibujos; composición 2D integrada con colores planos.
- Secuencia 01 → 02 → 03 → 04 → 03 → 02 → 01 en ES y recorrido equivalente en EN. Sticky a 110 px durante los capítulos centrales; entrada y salida naturales. Dentro de visión, las dos rutas avanzan y retroceden en orden (fracciones 0,12 / 0,30 / 0,50 / 0,30 / 0,12). Los textos no bajan de opacidad: el énfasis afecta a señal, figura y trazados decorativos.
- Cambio EN → ES dentro de visión a 1100 × 740: fracción de lectura 0,3503 antes y después. `lang`, título, descripción, metadatos y alternativa de la escena humana sincronizados. 134 claves EN/ES con paridad y respaldo inglés comprobado.
- Menú a 320 px con Enter: foco en el primer enlace; Tab avanza; Escape cierra, devuelve foco al botón y deja enlaces cerrados `inert`. Anclas funcionales. Sin JavaScript en arnés externo a 320 px y escritorio: inglés íntegro, menú visible, ilustraciones estáticas y detalles abiertos mediante Enter, sin controles de idioma inoperantes.
- Movimiento reducido **simulado** con CSS y `matchMedia` equivalentes en un arnés fuera del repositorio: sin sticky, entrada, transiciones ni scroll suave; artículos sin altura mínima; visión y experimento completos en escritorio y móvil, EN/ES. No se ha cambiado ni comprobado la preferencia real del sistema operativo.
- Todos los recursos, incluidas las seis variantes `srcset`, responden HTTP 200 bajo `/senva/`. Carga inmediata de portada y diferida en escenas, dimensiones reservadas, sin PNG fuente en HTML. Sin referencias a renders retirados, modelos, motores 3D o servicios de recursos externos. SVG válido y PNG social real de 1200 × 630, revisado visualmente.
- `node --check`, `git diff --check`, HTML equilibrado, IDs/anclas y enlaces locales Markdown correctos. Logo original idéntico en cabecera y pie; favicon y ambos retratos idénticos byte a byte a la base conservada. Contrastes de texto calculados: turquesa oscuro/blanco cálido 4,98:1 y turquesa claro/azul noche 9,31:1. Sin errores o avisos registrados en el recorrido final del navegador de revisión.

### Límites de esta ampliación

Pruebas con el navegador integrado y viewports, sin dispositivos físicos, matriz de motores ni lector de pantalla real. Movimiento reducido y ausencia de script comprobados en arneses externos, no mediante cambios de ajustes del sistema. Los dibujos son ilustraciones de una visión: no demuestran hardware, captación de movimiento, feedback validado ni traducción. Los datos del proyecto, perfiles y candidatura Xiji se conservan. Capturas y arneses fuera del repositorio.

### Entrega 2D

**Implementación entregada:** `397d0f752ea91bd3e6be8b19491b42f1397216ff`, subida a `origin/main`. Pages confirmó `built` sin error para ese SHA el 20 de octubre de 2026 a las 18:16 (Madrid, 16:16 UTC). URL: https://withnolan.github.io/senva/.

La web pública carga `assets/illustrations/conversation-768.webp`, CSS `4890c529` y JS `885046c8`, con imagen completa y sin desbordamiento. Revisadas portada y rutas publicadas, escenario fijo a 110 px y paso al experimento; las ilustraciones cargan correctamente. Capturas de portada, visión, experimento y móvil guardadas fuera del repositorio con prefijo `senva-2d-`.

Fuente Pages verificada: rama `main`, carpeta `/`, modo `legacy`. Referencias remotas actualizadas y coincidentes con `d199c90` antes del commit. Sin cambios de ajustes del repositorio ni force push. Este seguimiento documental registra la entrega ya comprobada; su commit y el resultado de su build se confirman en la respuesta final.


<a id="conversation-in-motion"></a>
## Una conversación en movimiento — 21 de octubre de 2026

Base `34ec015`, árbol limpio. El nuevo briefing sustituye la dirección visual anterior en caso de conflicto. Se conservan el logo exacto, colores, datos y retratos, EN/ES y rigor del estado de idea. Commit/push autorizados; sin force push.

### Dirección elegida

Un único escenario abierto enlaza portada, voz/subtítulos, información manual + información adicional, y primer experimento. Gafas y guante vectoriales por capas, pocos trazos y colores planos. La conexión de portada se convierte en recorridos de información; el mismo guante cambia de contexto hacia una interfaz HTML traducible. El fondo cambia con el desplazamiento nativo. Sin imágenes rectangulares, personajes de portada, 3D o dependencias nuevas.

### Hitos

1. Inspección de SENVA publicada, código y referencia TuffStudy: realizada. Se toman continuidad, escala y pausas; no recursos, identidad ni tramos de scroll vacíos.
2. Recursos SVG coherentes: gafas y guante propios en `assets/graphics/`, integrados como definiciones compartidas. Contornos legibles sobre ambos fondos y máscaras para los recorridos. Terminado.
3. Escenario continuo, textos breves y alternativas estáticas: terminados. Se sustituyeron el controlador, los gráficos y estilos anteriores; cuatro secciones reales, un escenario SVG compartido y una interfaz HTML. Se conserva la información técnica en desplegables y documentación. Sin dependencias nuevas.
4. Revisión local, documentación y vista previa social: terminadas según el detalle siguiente. README, guía técnica y procedencia describen la implementación actual. Hito vectorial guardado en `50f9718`; implementación/revisión entregadas en `2493afb`.
5. Commit/push y comprobación pública: realizados. Implementación `2493afb` y hito `50f9718` subidos mediante push normal a `origin/main`. Pages confirmó `built` para `2493afb87dcd2fc4453763c1b07533e18038a372`, sin error, el 21 de octubre a las 10:32:09 UTC (12:32 Madrid). Fuente confirmada: `main`, `/`, modo `legacy`; sin cambios ajenos entrantes ni cambios de ajustes.

### Correcciones de la revisión actual

- Contención del sticky en la misma celda de cuadrícula que los artículos; termina con el experimento y no cubre validación. Sin márgenes negativos ni scroll artificial.
- Inicialización de idioma robusta, sin acceder al rectángulo de un valor booleano durante el arranque.
- Contorno blanco cálido en gafas y guante para conservar definición sobre azul noche; fuentes SVG compartidas, sin variantes por escena. Máscaras separadas del trazado discontinuo visible para dibujar realmente los recorridos.
- Ventanas de fundido separadas para subtítulos, información adicional y aplicación. Corregidos cruces de etiquetas observados en los puntos 1,5 y 2,5. Repetidos puntos 1,36 / 1,50 / 1,65 y 2,35 / 2,50 / 2,70: solo una familia de anotaciones visible a la vez.
- Controles superiores y aviso cambian de color según el fondo situado realmente debajo, incluso durante la frontera entre fondos.
- Experimento más estrecho a la izquierda, guante en el centro e interfaz ajustada a ventanas bajas. La frase final vuelve al flujo y reserva espacio tras desplegar los detalles; corregido el solapamiento observado a 1280 × 720.
- Portada móvil con los objetos inmediatamente después del titular. Figura de la segunda dirección adaptada para que la ruta no atraviese las etiquetas. Subtítulo ficticio y aviso conceptual separados.
- Vista previa social vectorial 1200 × 630 actualizada; corregida la herencia de relleno al exportar los trazados. PNG de 69 381 bytes revisado visualmente.

### Comprobaciones de esta implementación

- **Responsive EN/ES:** 320 × 844, 390 × 844, 768 × 1024, 844 × 390, 1000 × 680, 1100 × 740, 1280 × 720 y 1440 × 960, con dimensiones reales del viewport. Sin desplazamiento horizontal ni desbordamiento medido de los bloques de texto de las escenas. Los cuatro primeros tamaños usan lectura normal. Repetidos 1000 × 680 y 1280 × 720 con los tres desplegables abiertos en ambos idiomas: contenido crece sin cruzar la frase final.
- **Visual:** comparación con la versión publicada anterior e inspección de TuffStudy; portada nueva, estados completos y mitades de las tres transiciones, ambos recorridos, práctica y salida del escenario. Revisión móvil de los gráficos, plan, equipo, candidatura y contacto; equipo también revisado en escritorio. Las figuras no son capturas ni paneles de texto incrustado.
- **Scroll nativo:** 0 → 0,5 → 1 → 1,5 → 2 → 2,5 → 3 y regreso en EN/ES; mismas posiciones y escalas al volver a cada punto. Sticky a 84 px, salida contenida antes del plan; sin bloqueo de rueda. Capturas de los estados y 25 fotogramas del avance/regreso guardados fuera del repositorio.
- **Idioma:** 111 claves EN/ES con paridad, respaldo inglés, alternativas y etiquetas accesibles sincronizados. `lang`, título, descripción y `og:locale` cambian. Detalles abiertos se conservan; un clic real EN → ES en la segunda dirección mantuvo exactamente la fracción de lectura 0,434328. No se confunden los desplazamientos automáticos de los localizadores de revisión con clics reales del selector fijo.
- **Teclado y controles:** capítulos con anclas nativas y foco en la sección de destino; ejemplo `#reciprocity`. Ningún control dentro del canvas decorativo oculto. Pausa/reanudación con Space; pausa elimina interpolación y deja transiciones a cero. Al pasar a móvil con el foco en pausa, vuelve a la sección real. Menú con Enter, Tab y Escape; enlaces cerrados `inert`. Orientación de 320 × 844 a 844 × 390 y regreso sin foco en elementos ocultos ni desbordamiento.
- **Sin JavaScript:** arnés externo sin script, en escritorio y a 320 px. Inglés completo, navegación visible, figuras en flujo normal y detalles abiertos con Enter; controles dependientes ocultos. Sin `IntersectionObserver`, lectura normal con las cuatro figuras. Almacenamiento bloqueado simulado: arranque en inglés y cambio a español funcional.
- **Movimiento reducido:** CSS y `matchMedia` equivalentes simulados fuera del repositorio; revisión de escritorio en ES y móvil de 320 px en EN. Sin sticky, entrada, transiciones ni scroll suave, con contenido completo. No se cambió ni comprobó la preferencia real del sistema operativo.
- **Recursos y código:** HTTP 200 bajo `/senva/` para CSS/JS versionados, favicon, retratos, SVG nuevos, logo reutilizable y vista previa social. XML válido para SVG; PNG real 1200 × 630. `node --check`, `git diff --check`, HTML equilibrado, IDs/anclas y enlaces Markdown locales correctos. Sin GLB/GLTF, motores o dependencias de ejecución. Las imágenes antiguas se conservan como archivo, sin cargarse.
- **Identidad y contenido:** SVG original del logo idéntico en cabecera/pie; favicon y retratos idénticos byte a byte a la base conservada. Contrastes de texto calculados 4,98:1 / 9,31:1 / 5,42:1 / 8,27:1 para los pares documentados. Misión, hipótesis, límites lingüísticos, estudios, perfiles, colaboradoras anónimas y candidatura de Santiago conservados. No se atribuyen producto, entrevistas, datos o alianzas.
- **Consola:** sin errores ni avisos de la página registrados en los recorridos finales de la pestaña de revisión. Los errores de consulta de la herramienta durante la inspección DOM no se atribuyen a la web.

### Entrega visual y límites

Capturas antes/después de escritorio y móvil y secuencia GIF de 25 capturas reales del navegador, fuera del repositorio. El GIF permite observar el avance y el regreso, pero **no es una grabación continua ni una medida de rendimiento**. No hay herramienta de grabación de vídeo disponible en este entorno.

Pruebas con viewports del navegador integrado, sin dispositivos físicos, matriz de motores o lector de pantalla real. Reducción de movimiento y bloqueo de almacenamiento comprobados por simulación; ausencia de script mediante arnés externo. LinkedIn conserva los enlaces facilitados; no se verifica contenido detrás de inicio de sesión. No se ha comprobado acceso desde China. El despliegue y las comprobaciones públicas se registran a continuación.

### Estado de entrega actual

**Rediseño entregado y publicado:** https://withnolan.github.io/senva/.

Comprobación pública de la implementación `2493afb`: definiciones SVG nuevas, cuatro escenas, CSS `2b87ce5c` y JS `34e5cbc7`; recorrido hacia delante y regreso, sticky a 84 px y cambio ES → EN sin perder el capítulo. A 320 px: alternativa sin fijación, EN/ES, cero desplazamiento horizontal, retratos de igual tamaño y menú por Enter/Tab hasta `#team`, con foco en la sección y cierre correcto. Sin errores ni avisos de la página registrados durante estas comprobaciones.

CSS, JS, favicon, retratos, fuentes SVG nuevas, vista previa social y `.nojekyll` respondieron HTTP 200 desde Pages y son idénticos byte a byte a los archivos locales. La comprobación HTTPS se hizo con TLS verificado por el almacén del sistema; no se desactivó validación de certificados. Capturas públicas de portada, voz/subtítulos y móvil guardadas fuera del repositorio.

Este commit de cierre documenta el despliegue ya verificado; no cambia código o recursos. Su SHA y build final se confirman en la respuesta. No quedan fallos reproducibles observados dentro de la revisión descrita; se mantienen los límites de dispositivos, motores y tecnologías de asistencia indicados. Sin ajustes del repositorio ni force push.


<a id="lateral-relay"></a>
## Relevo lateral — 21 de octubre de 2026

Base `6a0edda`, árbol inicial limpio. Inspeccionados web publicada y código antes de editar. El nuevo briefing sustituye las restricciones visuales anteriores en conflicto. Se conservan identidad, paleta, datos y retratos; commits y push autorizados.

### Decisión creativa

Retirar la columna gráfica derecha persistente, los objetos pequeños semitransparentes residuales y los trazos redundantes. Dos opciones consideradas: viaje diagonal continuo, o relevo lateral con intervalos de lectura. Elegido el relevo: composición central → gafas izquierda → guante derecha → relación panorámica → guante izquierda/interfaz derecha. Un campo plano azul noche acompaña los cambios de composición.

### Hitos

1. Inspección y dirección: terminadas; captura anterior guardada fuera del repositorio.
2. Dibujos: gafas y guante redibujados con un contorno, proporciones coherentes y detalles selectivos. Fuentes SVG válidas, versiones clara/oscura y PNG social 1200 × 630 revisados. Logo/retratos conservados.
3. Composición y coreografía: terminadas. Cinco artículos reales, pausas de lectura, cruces laterales con curvas, campo SVG que se abre y recoge. Sin dependencias nuevas ni captura de rueda.
4. Revisión local y documentación: terminadas según el detalle siguiente. README, guía y procedencia actualizados. Hito de dibujos guardado en `d0df0b1`; implementación entregada en `8ace7a6`.
5. Entrega realizada: `d0df0b1` y `8ace7a6` subidos mediante push normal. Pages confirmó `built` para `8ace7a645400a6e697a595abdec2aae67fb7a5b5`, sin error, el 21 de octubre de 2026 a las 13:33:11 UTC. Web pública comprobada.

### Correcciones durante la revisión

- Separados el nombre de la figura panorámica y el de su leyenda para mantener la figura en flujo normal. En móvil las anotaciones se sitúan debajo del dibujo: corregido un roce del texto de salida con el puño.
- El texto saliente despeja el cruce antes de que viajen los objetos; el entrante aparece al asentarse. El encabezado panorámico espera un poco más para dejar libre el intercambio. Títulos y párrafos siguen siendo HTML real, sin `aria-hidden`.
- Los controles de copias totalmente ocultas salen temporalmente de Tab y dejan de aceptar clics. Se restauran al reaparecer o pasar a lectura normal; un bloque con foco conserva visibilidad. Pausar en mitad del tránsito deja una única copia visible.
- Dibujos claros/oscuros con los mismos trazados y un clip elíptico exacto: cada parte mantiene contraste al cruzar el campo sin añadir doble contorno. Entrada del campo por escala, opaca; sin disco gris semitransparente.
- Trazados y subtítulos sin reinicio al cambiar de capítulo. La conexión inicial permanece dibujada tras la entrada. La entrada termina si el visitante empieza a avanzar.
- Posición del estado de idea corregida en escritorio estrecho: queda debajo de la etiqueta de misión, separado de ella y de los controles. Nuevo destino `#research` con señal de foco visible.
- Interfaz de práctica en flujo HTML, no en una capa de altura fija. En móvil, dispositivo antes de la interfaz y subtítulo junto al recorrido de voz. Los detalles pueden crecer sin recortar texto.

### Comprobaciones de esta entrega

- **Responsive EN/ES:** 320 × 844, 390 × 844, 768 × 1024, 844 × 390, 1000 × 680, 1100 × 740, 1280 × 720 y 1440 × 960. Dimensiones reales del viewport; sin desplazamiento horizontal ni desbordamiento medido en copias, subtítulos, interfaz o cabeceras. Repetidos los cuatro tamaños estáticos tras mover las leyendas y figuras móviles.
- **Ritmo:** a 1280 × 720, el bloque pasó de cuatro alturas útiles aproximadamente a 5565 px para cinco capítulos (antes unos 2544 px). A 1440 × 960 mide 7665 px. Las duraciones de escritorio son 1,65 / 1,85 / 1,65 / 1,8 / 1,8 alturas útiles; el tramo anterior al tránsito mantiene la pose. Móvil no hereda esas alturas ni fijaciones.
- **Movimientos:** estados de lectura y muestras 0,04 / 0,10 / 0,50 / 0,85 / 0,99 de cada uno de los cuatro tránsitos en EN/ES. Sin intersecciones observadas entre texto visible y objetos en las muestras geométricas revisadas. Inspección visual de mitades, estados completos, salida y ventanas altas/bajas; no equivale a una prueba matemática de todos los píxeles del recorrido.
- **Regreso:** cinco poses recorridas hacia atrás en ambos idiomas; mitades repetidas en sentido inverso. Posiciones/escala equivalentes salvo redondeo de scroll. En las cuatro fronteras, visibilidad de objetos, voz y subtítulo coincide antes/después; no se retrae el recorrido entrante.
- **Escritorio bajo:** revisadas portada, voz, panorama y práctica a 1000 × 680, además de 1280 × 720. Texto y figuras separados; interfaz más larga accesible por scroll normal. El escenario termina exactamente al comenzar validación; no cubre su contenido.
- **Idioma:** 116 claves EN/ES con paridad, respaldo inglés, alt y etiquetas accesibles sincronizados. Cambio con detalles abiertos, título, `lang` y `og:locale` correctos; conserva el capítulo y una posición próxima de lectura. No se afirma coincidencia subpíxel de la fracción de lectura. Todos los textos anteriores del equipo, misión/estado, validación y candidatura se mantienen; solo cambian dos claves existentes relacionadas con el nuevo alcance gráfico manual, además de las cinco claves nuevas de contexto.
- **Teclado:** pausa/reanudación con Space; prueba de pausa intermedia con una sola lectura activa y punteros deshabilitados en la saliente. Enlace de contexto por Enter llega a `#research` con foco visible. Regreso al inicio con teclado. Al redimensionar con foco en pausa, este vuelve a la sección real. Menú con Enter, Tab y Escape; orientación 320 × 844 → 844 × 390 → 320 × 844 sin foco en enlaces `inert`.
- **Sin JavaScript:** arnés externo en escritorio y 320 px, inglés íntegro, navegación visible, cinco figuras en flujo, opacidad 1 y detalles abiertos con Enter. Sin observador: lectura normal completa; almacenamiento bloqueado simulado: arranque inglés y selector ES funcional.
- **Movimiento reducido:** CSS y `matchMedia` equivalentes simulados fuera del repositorio, escritorio EN y móvil ES. Sin sticky, entrada, transiciones ni scroll suave; texto y figuras completos. No se cambió la preferencia real del sistema operativo.
- **Recursos/código:** `node --check`, `git diff --check`, HTML equilibrado, IDs/anclas, enlaces Markdown, SVG y PNG social 1200 × 630 correctos. Recursos locales HTTP 200 bajo `/senva/`; hashes de CSS/JS actualizados. Logo exacto y retratos/favicon idénticos a la base conservada. Sin nuevos modelos, motores, paquetes o servicios externos. Sin errores ni avisos de la página registrados en los recorridos finales de revisión.

### Capturas y límites

Captura anterior, estados nuevos de escritorio/móvil, matriz y 33 fotogramas reales del avance/regreso guardados fuera del repositorio con prefijo `senva-lateral-`. GIF de capturas, no grabación continua ni medición de rendimiento. No hay herramienta de vídeo disponible.

Revisión en el navegador integrado con viewports; sin dispositivos físicos, matriz de motores ni lector de pantalla real. Reducción de movimiento y bloqueo de almacenamiento por simulación; sin script mediante arnés externo. Perfiles y LinkedIn conservados según los datos facilitados; no se comprueba contenido tras inicio de sesión ni disponibilidad desde China. Los dibujos y la interfaz expresan conceptos, no capacidades probadas.

### Publicación

**Publicado:** https://withnolan.github.io/senva/.

Implementación `8ace7a6`, con build `built` confirmado para su SHA completo y sin error. En producción se comprobaron cinco destinos, altura de 7665 px a 1440 × 960, escenarios y tránsito lateral, regreso, cambio ES→EN conservando el capítulo y sticky a 84 px. A 320 px, lectura normal con las cinco copias a opacidad 1, EN/ES, menú por teclado hasta `#team`, foco de destino y cierre `inert`; ambos retratos cargados a 800 px originales, visibles al mismo tamaño de 76 × 76 px. Sin desplazamiento horizontal ni errores/avisos de la página registrados durante ese recorrido.

CSS `0940e2ea` y JS `badc3fa4`, favicon, retratos, fuentes nuevas, vista social y `.nojekyll` respondieron HTTP 200 desde Pages y coincidieron byte a byte con el repositorio. HTTPS con verificación TLS del sistema; sin desactivarla. Capturas públicas guardadas fuera del repositorio.

Remoto actualizado sin cambios ajenos entrantes. Fuente verificada: `main`, `/`, modo `legacy`; sin force push ni cambios de ajustes. Este cierre solo documenta el despliegue verificado, sin modificar código o recursos. Su commit y build final se confirman en la respuesta de entrega. No quedan fallos reproducibles observados dentro del alcance de revisión descrito; se mantienen sus límites de dispositivos, motores y tecnologías de asistencia.


<a id="editorial-review"></a>
## Revisión editorial con método de agentes — 22 de octubre de 2026

### Objetivo y método — terminado

Revisión de la web publicada y del código tras la petición de investigar [AVIVA](https://github.com/withnolan/aviva). Consultados su contrato, roles, coordinación y revisiones. Se adopta un brief común, tareas con propiedad de archivos, separación de arte/contenido/implementación y crítica independiente. No se importan código, identidad, 3D ni dependencias. Detalles y criterios: [design-review.md](design-review.md).

### Implementación — terminada

- Portada navy con ilustración vectorial original de dos adultos y mensaje humano. Estado visible antes del titular, también en móvil.
- Situaciones cotidianas visibles. Visión reunida en un diagrama con rutas opuestas; guante e información facial/corporal/espacial se explican juntos.
- Primer experimento de LSE separado, sin sugerir traducción demostrada. Plan de codiseño, comparación con alternativas y límites conservados.
- Retirados el escenario global de cinco poses, fundidos que ocultaban texto, controles obsoletos y duraciones artificiales. Solo el diagrama tiene un sticky corto y énfasis ligado al scroll nativo en pantallas adecuadas.
- Nueva tipografía Manrope alojada localmente con licencia SIL, SVG de conversación y vista social coherente. Logo, favicon, retratos y datos personales conservados.
- README reorientado a la presentación real. Guías técnicas y de recursos actualizadas.

### Comprobaciones y correcciones — terminadas localmente

Preflight: sintaxis JS, HTML equilibrado, IDs/anclas, 114 claves EN/ES y respaldo inglés, SVG XML, logo original y hashes de retratos/favicon. Matriz en navegador EN/ES: 320×844, 390×844, 768×1024, 1024×768, 1440×900, 1280×720 y 844×390; sin desbordamiento horizontal ni recortes de texto medidos. Revisión visual de portada, propósito, visión, experimento, validación, equipo, Xiji y contacto. Corregidos estado demasiado bajo en móvil, escala inicial de la ilustración y dirección del segundo flujo.

- Auditoría editorial inicial y revisión independiente de implementación/capturas: sin bloqueos restantes. Se corrigió la herencia de Manrope en la marca conservando Arial, peso 750 y espaciado anterior.
- Visión: comienzo, mitad (`--route-progress` 0,509), final 1,000 y regreso 0,000 observados mediante scroll nativo; textos con opacidad1 durante el recorrido. Entrada y salida del diagrama sin bloqueo, con lectura normal del resto de la página. Recorrido con EN y ES.
- Cambio ES→EN durante la visión conservó la coordenada del título de la segunda explicación exactamente en 479,16 px. `lang`, título y `og:locale` cambiaron correctamente. Detalles y enlaces siguen en el documento.
- Teclado móvil: abrir menú enfoca primer enlace; Tab avanza, Escape cierra y devuelve foco. Ancla de equipo enfoca `#team` y cierra el menú. Redimensionado de 320×844 a 844×390 y vuelta sin desbordamiento ni foco en navegación oculta.
- Alternativas en arneses externos: HTML sin script con inglés y menú visible; ausencia de observador y almacenamiento bloqueado con cambio a ES funcional; preferencia reducida equivalente en CSS/JS con `position:relative`, transformaciones/animaciones anuladas y scroll automático. No se cambió la preferencia real del sistema operativo.
- Consola del navegador sin errores o avisos recogidos. Fuentes y recursos locales; PNG social 1200×630 revisado. Perfiles, plan, límites técnicos, colaboradoras y Xiji comparados con la versión anterior: mismos hechos EN/ES.
- Ajustes observados al revisar: aviso de estado arriba, escala de personas, segunda ruta inversa, foco de anclas limitado a una etiqueta y estudios de fundadores a anchura completa en móvil.

### Límites y pendientes

Pruebas en navegador con tamaños de viewport, no en dispositivos físicos; revisión interna, no pruebas con usuarios. La preferencia reducida se simuló en un arnés externo. No se hizo medición de FPS. Queda comprobar el build y la web pública del commit que se enviará a `origin/main`; no se requieren cambios de configuración de Pages.
