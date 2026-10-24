# SENVA — Rediseño integral

Actualizado: 23 de octubre de 2026. Registro del rediseño desde `4945ec0`.

**Trabajo actual:** [Escenarios integrados y composición bilingüe](#integrated-cinema), sobre `0665049`. Tres escenas de pantalla con contenido real, mayor recorrido y saltos naturales en cada idioma.

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

Pruebas en navegador con tamaños de viewport, no en dispositivos físicos; revisión interna, no pruebas con usuarios. La preferencia reducida se simuló en un arnés externo. No se hizo medición de FPS. No quedan incidencias reproducibles detectadas dentro del alcance revisado. No se requieren cambios de configuración de Pages.

### Entrega y publicación — verificadas

Implementación guardada y pusheada a `origin/main` en `8a09545a8881c69be8f5ae427a25216427931dc2`. GitHub Pages devolvió `built` para ese SHA, sin error. Se abrió la web pública y se revisaron portada móvil y escritorio; estado, EN/ES, fuente y nueva ilustración cargan correctamente. Once recursos publicados —incluidos HTML, CSS/JS con sus versiones, fuente, SVG, retratos y PNG social— coinciden byte a byte con los archivos locales revisados. La fuente de Pages permanece en `main`, `/`, modo `legacy`.

Este registro de cierre se guarda en un segundo commit normal, sin cambios de implementación. [Web publicada](https://withnolan.github.io/senva/).


<a id="motion-return"></a>
## Recuperar la coreografía — 22 de octubre de 2026

### Corrección de alcance

El usuario ha aclarado que AVIVA debía servir como referencia de **trabajo con agentes**, no como argumento para cambiar la dirección de la web. El rediseño anterior dejó una página demasiado estática. Conservar su contenido más claro y recuperar la esencia inmersiva mediante una coreografía visible, nativa y reversible.

### Organización y brief — terminados

Dirección creativa ha entregado [motion-direction.md](motion-direction.md); desarrollo es propietario de HTML/CSS/JS; revisión independiente evalúa movimiento, contenido y fallos concretos. Coordinación integra, verifica en navegador y realiza Git. El contrato persistente está en [AGENTS.md](../AGENTS.md).

### Implementación — terminada

Portada con personas por capas, hilo trazado y distancias compensadas al escalar el SVG. Propósito con conexión entre situaciones. Visión abierta a ancho total, dos lecturas y recorrido lateral de gafas y guante mediante scroll nativo. Entrada de práctica con despliegue de hoja y trazado; reposo final. En móvil se mantiene movimiento corto sin fijación. Sin dependencias nuevas.

Contenido EN/ES idéntico al baseline: 114 claves; logo, favicon y fotografías idénticos por hash. Se han retirado las transformaciones antiguas del 2 % y actualizado versiones CSS/JS.

### Revisión — terminada localmente

[Informe de hallazgos](motion-review.md). Dirección creativa y revisión técnica independientes han examinado código y capturas; coordinación realiza navegación real. Se corrigieron cuadrícula heredada, carril de leyenda, respaldo accesible de rutas y separación de etiquetas.

- Visión EN a 1280×720: inicio, 25 %, mitad, 75 %, final y regreso, con cambio espacial perceptible y texto en flujo. Mitad ES repetida. A 1000×680 ES, cruces de 50 % y 65 % sin invasión observada de texto; leyendas separadas 14 px.
- Entrada de práctica 25 %, 50 % y 100 % a 1000×680 ES: texto visible dentro del marco, trazo progresivo y matriz de reposo sin transformación; regreso a 25 % comprobado.
- Matriz EN/ES en 320×844, 390×844, 768×1024, 1000×680, 1280×720, 1440×900 y 844×390: desbordamiento horizontal cero y sin recortes medidos en el texto revisado. El modo de escenario permanece activo a 1280×720 y 1000×680.
- Sintaxis JS, HTML, claves EN/ES, rutas, recursos y `git diff --check` correctos.
- Móvil390×844: aproximación de personas y revelado de hilo observados en inicio y progreso 0,5389; rutas con desplazamiento opuesto y crecimiento de conexión en progreso 0,7108. Sin fijación ni desbordamiento. La matriz incluye 320 px y orientación 844×390.
- Menú móvil: primer enlace enfocado al abrir, Tab, Escape y foco de retorno; redimensionado con menú abierto. Anclas y modo de escenario recuperado al volver a escritorio. El árbol accesible completo conserva información manual y salida texto/voz en modo animado.
- Cambio ES→EN durante la lectura B: título a 417,98 px antes y 418,07 px después; metadatos/lang correctos. La escena continúa sin ocultar contenido.
- Arneses externos: sin JS con inglés completo y rutas/menú visibles; sin observador con lectura normal y selector funcional; almacenamiento bloqueado sin impedir el idioma. Reducción de movimiento equivalente en CSS/JS: sin sticky, transformaciones, trazados progresivos ni scroll suave. No se cambió la preferencia real del sistema operativo.
- Consola sin errores o avisos registrados. No se han realizado pruebas en dispositivos físicos, lector de pantalla real o medición de FPS. Las revisiones independientes son de capturas/código; el recorrido nativo lo verificó coordinación.

### Entrega — verificada

Implementación guardada y pusheada a `origin/main` en `5837255fea5a0a0343aba20bcb87a936dd1ee7ed`. GitHub Pages devolvió `built` para ese SHA, sin error. En la web pública, a 1280×720, se verificaron el escenario activo, avance a 52 % y final, regreso a 28 % y cambio ES→EN; sin intersecciones o recortes medidos en esas muestras ni errores/avisos registrados. Portada pública a 390×844 en ES, sin fijación ni desbordamiento horizontal.

Once recursos públicos —HTML, CSS/JS versionados, fuente, dispositivos SVG, retratos, favicon, imagen social y `.nojekyll`— respondieron correctamente y coincidieron byte a byte con los archivos locales revisados. HTTPS con validación TLS del sistema. Sin force push ni cambios de ajustes.

Fuera del repositorio se guardaron capturas y un GIF de once estados reales del recorrido, con regreso mediante la secuencia inversa de esas capturas: `senva-motion-return.gif`. Es una vista de estados, no una grabación continua ni una medición de fluidez/FPS. La navegación nativa hacia delante y atrás se comprobó aparte.

Este cierre solo actualiza el registro de entrega; se guarda en un segundo commit normal. No quedan fallos reproducibles observados dentro del alcance descrito. Se conservan los límites de revisión indicados arriba. [Web publicada](https://withnolan.github.io/senva/).

<a id="visual-reset"></a>
## Revisión visual y fluidez — 22 de octubre de 2026

### Inspección y dirección — terminadas

El usuario ha vuelto a rechazar la tipografía, las ilustraciones y los errores del recorrido. La inspección directa de la web publicada confirma una mitad de visión con etiquetas casi invisibles, texto saliente residual y entrante fuera del marco. Auditoría independiente identifica trayectoria condicional, mezcla de lecturas/escrituras por frame y demasiados estilos acumulados.

Referencias primarias consultadas: TuffStudy, Ava y XRAI. Skill `frontend-design` de Anthropic consultada e instalada desde su repositorio oficial; queda disponible para próximos turnos. Brief vigente: [visual-reset-brief.md](visual-reset-brief.md). Se mantienen hechos, logo y paleta; se cambia tipografía y composición. Arte y revisión con propiedad de archivos separada.

### Implementación — terminada; revisión en curso

Retícula estable de lectura y arte, trayectoria continua y amortiguación temporal de 70 ms solo de ilustraciones. Geometría cacheada en resize, idioma y carga de fuentes; se retiran los guards de colisión y las escrituras de paths/left/top por frame. RAF se detiene al asentarse y al ocultar la pestaña. No se sustituye el scroll nativo.

Fuentes Bricolage Grotesque e Instrument Sans locales en WOFF2 latino (107 KB en conjunto), con licencias OFL y preload. Nueva ilustración editorial 2D de conversación, 1200×800 y 122 KB WebP con alfa; origen y límites en [conversation-art.md](conversation-art.md). Gafas/guante refinados en SVG y vista social actualizada. Logo y retratos conservados. Estilos consolidados en una sola implementación por componente.

La primera revisión corrigió el hueco entre lecturas, el cierre de tarjeta en el gráfico, la escala del guante, el agrupamiento de etiquetas y un desbordamiento de la imagen de gafas a 320 px. Comprobación afectada EN/ES repetida con desbordamiento cero. Pendientes revisión final de transiciones, teclado, alternativas y publicación.

### Comprobaciones finales

- Matriz real de viewport EN/ES: 320×844, 390×844, 768×1024, 1000×680, 1280×720, 1440×900 y 844×390. Desbordamiento horizontal cero, sin recortes medidos en titulares, párrafos, botones y etiquetas revisadas. Corregida y repetida la imagen de gafas a 320 px.
- Inspección visual de portada, lecturas A/B, estados intermedios y regreso con scroll/teclado nativos, primera hipótesis, equipo y cierre. La revisión independiente de capturas no encuentra fallos visuales imprescindibles; no equivale a medir fluidez. Se compactaron los intervalos de lectura y se retiró la tarjeta de la visión. La barra de capítulos queda limitada al recorrido y libera las secciones directas.
- A 1280×720, avance desde progreso 0,002 hasta 1 y regreso a 0,451. Cambio EN→ES con título de la segunda lectura a 471,86 px antes y 471,76 px después; lang/título correctos. Las figuras no atraviesan texto. Separación entre etiquetas y aviso revisada también durante la entrada.
- Móvil390: título, misión, CTA, figuras, ambas rutas y avisos legibles en flujo, sin pin. Menú abre con foco en primer enlace; Tab y Escape cierran devolviendo foco. Cambio de orientación a 844×390 y regreso. Anclas de visión/equipo llegan a destinos reales con foco.
- Arnés externo sin JS a 320 px: inglés completo, menú visible, idioma dependiente de script oculto, rutas en flujo y desbordamiento cero. Preferencia reducida equivalente simulada: sin sticky, transformaciones o scroll suave. Sin observador: lectura normal y selector ES funcional. No se modificó la preferencia real del sistema.
- 114 pares de claves/valores EN/ES idénticos a la entrega anterior. Logo, favicon y retratos idénticos. HTML equilibrado, IDs/anclas, SVG, enlaces Markdown y PNG social 1200×630 válidos. Sintaxis JS y `git diff --check` correctos. Consola sin errores/avisos registrados en la revisión.

Capturas y matriz fuera del repositorio con prefijo `senva-visual-reset-`. Hubo un zoom residual de la herramienta durante una sesión de inspección; esas capturas no se usaron como prueba responsive final. Se repitieron las medidas con una pestaña limpia, comprobando dimensiones CSS y escala efectiva. Pruebas en navegador integrado, sin dispositivos físicos, lector de pantalla real o medición de FPS. No se afirma rendimiento cuantificado.

### Revisión — cerrada localmente

Las dos críticas visuales independientes se incorporaron a la composición; no quedan fallos visuales imprescindibles observados en las capturas finales. Se ha sincronizado la entrada del grupo manual con el espacio que libera la voz, sin guardas de colisión. El caso ajustado de entrada a 1280×720 conserva margen entre leyendas y aviso; las etiquetas del grupo reducido se dimensionan para mantener al menos 12 px efectivos en su reposo final. La barra de capítulos termina antes del contenido directo; comprobado fuera del viewport al final de página.

### Publicación — verificada

Implementación `1f52ab9`, seguida de `5899409363f1fcdbde5c7b42a3f0a7c6325c4fcb` para normalizar únicamente espacios finales en las dos licencias oficiales. Push normal a `origin/main`; sin cambios ajenos entrantes, force push o ajustes del repositorio. GitHub Pages devolvió `built` para el último SHA, sin error.

Se abrió la web pública y se verificaron portada, fuentes cargadas, ilustración de 1200 px, EN/ES y metadatos. A 1440×900, escenario activo, progreso observado 0,567 y regreso hacia inicio, sin desbordamiento. Trece recursos públicos —HTML, CSS/JS versionados, dos fuentes, ilustración WebP, dispositivos SVG, retratos, favicon, vista social y `.nojekyll`— respondieron HTTP 200 y coincidieron byte a byte con los archivos revisados. CSS `c4e2c166`, JS `9f3b1c0f`. HTTPS con validación TLS del sistema.

La revisión técnica independiente final no encuentra nuevos mustfix concretos en el código; sus límites son revisión estática, sin FPS o navegador propio. Las comprobaciones de interacción y publicación corresponden a coordinación. Este cierre se guarda en un commit adicional solo de documentación, cuyo push/build se confirma en la entrega. [Web publicada](https://withnolan.github.io/senva/).

No quedan fallos reproducibles observados dentro del alcance descrito. Se mantienen los límites de pruebas con viewports, simulación de preferencia reducida y ausencia de dispositivos/lector de pantalla reales.


## Restauración de equipo y contacto — 22 de octubre de 2026

Petición del usuario: recuperar «Dos perspectivas» y «Cada gesto nos acerca» como estaban antes de la última revisión y mantener una web sencilla de presentación. Se restaura el aspecto de `4269030` exclusivamente en `#team` y `#contact`: Manrope, introducción del equipo a dos columnas, fotos cuadradas y perfiles anteriores; cierre turquesa claro con texto azul noche, titular en dos líneas y separadores de LinkedIn. HTML, traducciones, datos, retratos y enlaces eran idénticos y se conservan. Sin cambios de diseño en otras secciones.

Comparación independiente de alcance realizada sin editar archivos. Restauración terminada: inspección visual de ambas secciones en escritorio y comprobación EN/ES a 320, 390 y 1440 px, sin desbordamiento horizontal o recortes medidos en sus textos. Manrope cargada y retícula anterior comprobada. HTML idéntico salvo versión CSS; JavaScript y las demás reglas CSS conservados. HTML, traducciones, recursos y `git diff --check` correctos. Capturas `senva-restored-team.jpg` y `senva-restored-contact.jpg` fuera del repositorio. La confirmación de push y build del SHA se realiza antes de la respuesta de entrega.


<a id="inertial-scroll"></a>
## Cabecera integrada y smooth scroll — 22 de octubre de 2026

### Alcance y referencia — terminados

La captura del usuario muestra la barra de capítulos como una franja separada que tapa el título. Pide más recorrido y transiciones entre apartados, sin nuevo contenido, e investigar smooth scroll en GitHub. Revisado el repositorio oficial [darkroomengineering/lenis](https://github.com/darkroomengineering/lenis). Esta petición autoriza inercia real de página y prevalece sobre la restricción anterior de rueda nativa; AGENTS y guía técnica reflejan la excepción.

Coordinación integra HTML/CSS/JS y realiza revisión visual/Git. Un agente prepara exclusivamente los archivos oficiales de Lenis y después actualiza guía/contrato; otro revisa código en lectura. Sin nuevo rediseño de arte o tipografía.

### Implementación — terminada

- Retirada la barra flotante. Propósito, visión, primera hipótesis, preguntas, equipo y Xiji comparten una sola navegación en cabecera; el indicador activo se limpia al salir de las secciones observadas. Menú desplegable hasta 1050 px.
- Más separación en los cuatro apartados del recorrido. En escritorio, cada lectura de visión reserva 110svh, manteniendo el texto sticky dentro de su artículo mientras evoluciona la figura. Offset compartido calculado a partir de la cabecera real.
- Dos interludios decorativos con campos planos e hilo SVG trazado entre propósito/visión y visión/primera hipótesis. Transiciones reversibles y entrada de práctica más marcada; sin añadir texto o datos.
- Lenis vanilla 1.3.27 local (18 815 bytes JS), licencia MIT y procedencia/hashes conservados. Inercia de rueda en escritorio con puntero fino; móvil/táctil, movimiento reducido y biblioteca ausente mantienen scroll nativo. Sin CDN, framework o contenedores transformados. Se evita doble interpolación de las figuras.
- Anclas con hash/foco y compensación CSS única. Idioma reajusta la posición y cancela el objetivo de inercia anterior. Atrás/Adelante cancelan la animación pendiente. Menú y anclas siguen disponibles sin JS; cabecera sin fijación y enlaces separados en esa alternativa.

### Comprobaciones locales — terminadas

- Revisión visual en navegador integrado a 1440×900 y 1100×700, EN/ES. Cabecera única, título visible, entrada/salida de visión, estados iniciales/intermedios/finales y regreso. Lecturas de texto y dispositivos en columnas separadas. Cambio ES→EN en B a 1100×700 conserva el título: 200,56 px antes / 200,59 px después.
- Rueda real mediante la herramienta nativa: clase de desplazamiento suave activa y avance posterior al fin del gesto, hasta asentarse. No se confunde con CSS de anclas. Teclado PageDown/PageUp continúa funcionando. Detectado y corregido que Atrás dejaba continuar la animación al destino anterior; repetido, posición estable y animación cancelada.
- A 1440×900 ES, comparación del mismo contenido con `7315149`: recorrido principal pasa de 4005,78 a 6154,79 px; documento de 7322 a 9471 px. La longitud adicional corresponde a separación, lectura y transiciones, sin nuevo contenido.
- Tablet1000×680: menú, foco en primer enlace, Escape y retorno a botón; cambio a móvil y vuelta a escritorio recupera modos. Móvil390×844, 320×844 EN/ES y orientación844×390: desbordamiento horizontal cero en medidas; sin texto recortado en los elementos revisados, diagramas en flujo, interludios de 150 px en móvil. Ancla de visión desde el menú comprobada.
- Arnés externo sin JS a 320 px: inglés completo, seis enlaces visibles y diagramas en flujo. Se corrigió separación entre enlaces contiguos. Arnés de movimiento reducido equivalente en CSS/JS a1280×720: sin Lenis, sticky o interludios, lecturas completas. Sin archivo de Lenis: script propio funciona con scroll nativo. No se cambió la preferencia real del sistema.
- Revisión independiente encontró indicador activo residual y cambio de tacto al pasar la rueda por la navegación; ambos corregidos. Detectó el caso Atrás para comprobarlo en navegador; se reprodujo y corrigió. Su revisión es estática, la navegación corresponde a coordinación.
- 114 pares EN/ES, HTML de equipo/contacto y bloque CSS restaurado idénticos al baseline. Logo, favicon y retratos conservados. Sintaxis JS, HTML equilibrado, IDs/anclas, recursos locales, Markdown y `git diff --check` comprobados. Consola del recorrido local sin errores/avisos registrados.

Capturas fuera de producción, prefijo `senva-inertia-`. Pruebas con tamaños de viewport, sin dispositivos físicos, lector de pantalla real ni medición de FPS. Preferencia reducida simulada mediante arnés externo; sin afirmar pruebas del ajuste real del sistema.

### Entrega — verificada

Implementación guardada y pusheada en `a6a9ee3630bb7de77fe45b599839a6ebf24ac453`. GitHub Pages devolvió `built` para ese SHA, sin error, a las 21:45 (Madrid). Se revisó la web pública a1440×900: cabecera única, título completo, Lenis activo y avance con rueda hasta reposo. A390×844 ES: modo nativo, figura en flujo y desbordamiento horizontal cero. Consola pública sin errores/avisos registrados.

Dieciséis recursos públicos —incluidos HTML, CSS/JS versionados, Lenis CSS/JS, las tres fuentes y recursos visuales— respondieron HTTP200 y coincidieron byte a byte con los archivos revisados, con TLS validado. CSS `ab20db59`, JS `39d7d236`. Captura pública `senva-inertia-public-header.jpg` fuera del repositorio. El indicador se comprobó limpio al final de página en la última revisión local.

Este cierre se guarda en un segundo commit normal, solo de documentación; se confirma también su push/build antes de la entrega. No hay incidencias reproducibles pendientes dentro del alcance comprobado. Se mantienen los límites de revisión indicados. Sin force push ni cambios de configuración. [Web publicada](https://withnolan.github.io/senva/).


<a id="scroll-fixes"></a>
## Correcciones de navegación y transiciones — 22 de octubre de 2026

### Alcance e implementación — terminados

El usuario confirma que ya ve el smooth scroll y pide corregir errores. Se conservan composición, contenido, duración del recorrido y parámetros de inercia de la versión publicada.

- Cancelación explícita y segura de animaciones Lenis al usar teclado, elegir otra ancla, cambiar idioma/layout o volver en el historial. Se usan `stop()`/`start()` consecutivos, sin mantener bloqueo ni impedir acciones nativas. La revisión del código oficial 1.3.27 mostró que `resize()` no detiene una animación y un destino inmediato coincidente puede retornar antes de cancelarla.
- Indicador por posición de lectura y cajas cacheadas, en lugar de márgenes porcentuales sensibles al ancho. Referencia técnica comprobada: [definición de rootMargin de W3C](https://www.w3.org/TR/intersection-observer/#intersectionobserver-root-intersection-rectangle). Al abrir/cerrar preguntas se vuelven a medir los destinos de equipo y Xiji.
- Más separación entre las gafas y la etiqueta de concepto al terminar la transición: desplazamiento vertical de −90 a −55 px, manteniendo el resto de la coreografía.

Revisión independiente de código detectó el cálculo del indicador y la necesidad de medir de nuevo tras desplegables. Otro agente revisó la API exacta de cancelación de Lenis. Coordinación implementó y comprobó en navegador. No se cambiaron traducciones, datos, logo, retratos ni la restauración de equipo/contacto.

### Comprobaciones locales — terminadas

- Escritorio1280×720: PageDown interrumpe un viaje hacia Xiji y conserva la nueva posición (595 px), sin continuar hasta el destino anterior ni trasladar el foco después. Cambio de idioma durante rueda a1100×700: posición2579,5 px estable tras traducir; clase de inercia ya asentada. Redimensionado durante otra ancla a1000×680 retira Lenis y mantiene el desplazamiento disponible.
- Atrás durante una ancla devuelve el hash y cancela el destino pendiente; la posición permanece estable en la comprobación posterior. No se afirma igualdad exacta de restauración con todos los navegadores.
- Visión a1100×700 EN/ES: final, regreso a mitad y avance; margen medido entre imagen de gafas y cabecera del diagrama de12,87 px en el final ES, sin desbordamiento horizontal. Indicador de visión activo.
- Tres preguntas abiertas desplazan el inicio de equipo528,77 px; ancla a equipo llega a104,99 px bajo cabecera y el indicador identifica equipo tras recalcular. Menú de1000 px sigue cerrando y enfocando su destino.
- Móvil320×844 EN/ES: desbordamiento horizontal cero y sin recortes por anchura en titulares/párrafos medidos. Alternativa reducida en arnés externo1280×720: scroll nativo, texto/figura en flujo, opacidad completa y sin desbordamiento. No se modificó la preferencia del sistema operativo.
- 114 pares EN/ES, bloque restaurado de equipo/contacto, logo y retratos conservados. Sintaxis JS, HTML/IDs/anclas/recursos/Markdown y `git diff --check` correctos. Sin errores/avisos de consola registrados en el recorrido local.

Pruebas con viewports del navegador integrado, sin dispositivos físicos, lector de pantalla real ni mediciones de FPS. Se repitió además el respaldo sin JS a320 px: inglés, navegación visible, diagrama en flujo y desbordamiento cero.

### Publicación — verificada

Commit de implementación `7ad7a4abeae31cb995d610190eaf824fe04925ec`, push a `origin/main` y build de Pages `built`, sin error. En la web pública se comprobaron visión a1100×700, indicador correcto, margen12,87 px y ausencia de desbordamiento. PageDown interrumpió un destino a Xiji; posición3515 px estable al asentarse y sin callback que recupere el destino anterior. Consola pública sin errores/avisos registrados.

Dieciséis recursos publicados coinciden byte a byte con los revisados, mediante HTTPS validado. CSS `9617f459`, JS `dc71c364`. Captura fuera del repositorio: `senva-scroll-fixes-public.jpg`. Este registro de entrega se guarda en un segundo commit normal de documentación; su push/build se confirma antes de la respuesta. Sin cambios de configuración ni force push. No quedan fallos reproducibles pendientes dentro del alcance probado; se mantienen los límites de revisión anteriores.


<a id="editorial-devices"></a>
## Dispositivos 2D y relevo de escenas — 23 de octubre de 2026

### Dirección e implementación — terminadas

El usuario rechaza los dispositivos y pide transiciones mucho más trabajadas. [Storyboard vigente](device-motion-direction.md). Arte trabaja exclusivamente en los dos SVG, dirección propone la secuencia y coordinación integra/revisa/Git. Una revisión independiente de código y cuatro capturas aporta fallos concretos de composición.

- Gafas y guante rehechos por completo como ilustraciones editoriales planas: montura fina, patillas y lentes limpias; guante textil con panel, costuras y puño de punto. Sin luces, sensores resueltos, signos o capacidades inventadas. Dos SVG locales de menos de2 KB cada uno, sin filtros, gradientes o dependencias. URLs versionadas para renovar la caché de las imágenes anteriores.
- La visión deja de mantener dos objetos apilados. A ocupa el centro; sale hacia arriba/derecha y desaparece. B entra desde abajo/izquierda y queda completo. Se mantienen concepto, aviso y texto principal en flujo; solo el campo gráfico enmascara el relevo. Posición, escala y opacidad reversibles; pausas para lectura. Estado inicial CSS evita un destello de ambas composiciones superpuestas.
- Tres pasos diferentes entre apartados, en lugar de dos ondas idénticas: encuentro con gafas, continuidad del guante hacia práctica y apertura hacia validación. La hoja de práctica se despliega con traslación/escala y rotación plana de hasta3°, con desplazamiento del guante y trazo compartido. Sin 3D, nuevos servicios o nuevas secciones de contenido.
- Tras la crítica visual se corrigió el puño oscuro sobre el mismo fondo con una costura exterior clara. También se redujo el padding junto a los pasos y se reservan125svh por lectura, dedicando más recorrido a la escena legible y menos a espacio vacío. El tercer paso es breve. Móvil conserva flujo normal y movimientos cortos.

### Comprobaciones locales — terminadas

- Inspección directa de la publicación anterior y nuevas escenas a1280×720. Inicio, salida, mitad, reposo B y regreso recorridos con teclado nativo; tres pasos entre apartados inspeccionados en estados intermedios. La primera mitad se corrigió tras observar dos grupos demasiado tenues: B ahora domina antes de que A desaparezca. El texto principal permanece visible en flujo.
- A1100×700 ES: progreso observado0 /0,444 /0,485 /1, sin desbordamiento horizontal. A en reposo opacidad1/B0; en el centro B1/A0; final B completo. Repetidos inicio, mitad y reposo en inglés. Concepto y aviso separados del grupo que sale.
- EN/ES a390×844 y320×844: figuras en flujo, ambos grupos con opacidad1, modo nativo y sin desbordamiento horizontal; titulares/párrafos medidos sin recorte de anchura. Menú móvil y ancla a primera hipótesis comprobados. Guante y preguntas de práctica observados a320 px.
- Movimiento reducido equivalente mediante arnés externo: scroll nativo, diagramas en flujo, ambas relaciones completas y tres pasos ocultos. Sin JS a320 px: inglés completo, navegación visible, ambas relaciones disponibles y desbordamiento cero. No se cambió la preferencia real del sistema operativo.
- Revisión de cuatro capturas y código independiente: corrigió pérdida de silueta del puño y exceso de distancia acumulada entre bloques. No equivale a revisión de movimiento continuo; la ida/vuelta la realizó coordinación. SVG renderizados y observados por arte, con una corrección del guante antes de integrar.
- 114 pares EN/ES, logo, retratos y HTML/CSS restaurados de equipo/contacto conservados. Sintaxis JS, XML de SVG, HTML equilibrado, IDs/anclas, rutas Markdown, recursos locales y `git diff --check` correctos. Sin nuevas bibliotecas; Lenis conserva parámetros y correcciones de teclado/idioma/historial.

Capturas fuera de producción con prefijo `senva-device`/`senva-devices`. Pruebas mediante tamaños de viewport en navegador integrado, sin dispositivos físicos, lector de pantalla real ni medición de FPS. Criterio de calidad visual revisado internamente; corresponde al usuario valorar la nueva dirección.

### Publicación — verificada

Implementación `b7efa3edfdc42d630b30e71df5009adfd33bce1a`, pusheada a `origin/main`; Pages confirma `built`, sin error. A1280×720 en la web pública se verificó avance con rueda desde progreso0,2842 (A1/B0) a0,4617 (A0,0882/B1) y regreso a0,2842 (A1/B0), manteniendo escala de viewport1 y sin desbordamiento. También se recorrieron inicio y reposo B con teclado y se guardaron `senva-editorial-devices-public-a.jpg` / `senva-editorial-devices-public-b.jpg` fuera del repositorio. Consola pública sin errores/avisos registrados.

Dieciséis recursos publicados respondieron correctamente y coinciden byte a byte con los revisados, mediante HTTPS validado. CSS `3756fad0`, JS `a188c918`, gafas `0e05cf94`, guante `5b0df0c0`. README, guía técnica y storyboard reflejan la implementación final. Este registro se guarda en un segundo commit normal solo de documentación, cuyo push/build se confirma antes de la entrega. Sin ajustes del repositorio ni force push; se mantienen los límites de revisión señalados.


<a id="chapter-cinema"></a>
## Capítulos, contraste y transiciones — 23 de octubre de 2026

### Dirección e implementación — terminadas

Se ha inspeccionado [Oryzo](https://oryzo.ai/) en navegador, recorriendo portada y varios encuadres intermedios hacia delante/atrás. La referencia es su continuidad de objeto, contraste y grandes cambios de escala; no se copia su estética, 3D, contenido o bibliotecas. [Storyboard final](chapter-cinema-direction.md).

- Fondos a todo el ancho: portada/experimento/equipo/contacto azul noche; propósito/validación blanco cálido; visión/Xiji turquesa; límites verde pálido. Equipo/contacto conservan composición, tipografías y perfiles restaurados, con el cambio cromático solicitado.
- Siete umbrales decorativos diferenciados. Protagonistas: círculo turquesa que se expande con las gafas y papel que se abre hacia validación. Barrido diagonal con el guante hacia la primera hipótesis; cuatro pasos cortos enlazan el resto. El principio de comunicación toma escala de titular. Texto y estado siguen en flujo, sin ocultarse por estos planos.
- Cabecera adopta el tema de cada apartado sin cambiar dimensiones. Cambio simultáneo de foreground/fondo para evitar contraste pobre durante interpolaciones. Sobre mint, los textos pequeños son navy. Sin naranja, 3D, nuevas dependencias o cambios en contenido/recursos gráficos.
- Revisión independiente de código y cuatro capturas señaló el tema erróneo producido por umbrales ocultos en el fallback y una costura bajo la cabecera al anclar equipo. Se filtran superficies sin altura y las transiciones terminan antes de pasar bajo cabecera. Coordinación detectó además una franja aislada antes de contacto; su plano nace ahora desde abajo.

### Comprobaciones

- Navegador integrado a 1440×900, 1280×720 y 1100×700: inicio, mitad y reposo de las transiciones protagonistas, regreso y cambios de fondo. Se observaron también los cuatro pasos de apoyo. Relevo A/B de visión recorrido hacia delante/atrás en EN/ES; el cambio de idioma mantuvo el progreso 0,4341 y actualizó lang/título/og:locale. Contenido principal visible en flujo.
- Repetido el anclaje a equipo: paso final 1,0000, sección a 104,93 px bajo cabecera, sin la raya pale de media anchura. Contacto revisado en estados intermedios y vuelta: el azul asciende desde el apartado, sin franja aislada.
- Móvil 390×844 ES y 320×844 EN/ES: diagramas en flujo, scroll nativo, fondos completos, menú turquesa legible. Sin desbordamiento horizontal ni recorte de anchura en titulares/párrafos/summary medidos. Contacto y hoja observados a 320 px. Tab/Escape cierran menú y devuelven foco al botón.
- Cambios de ventana a 844×390, 1000×680 y regreso a 1440×900: cero desbordamiento en las medidas, figuras sin fijación en tamaños inferiores y navegación de escritorio recuperada. Se comprobó ancla de equipo desde menú y de nuevo en escritorio tras redimensionar; el redimensionado cancela el desplazamiento pendiente como estaba previsto.
- Arnés externo de movimiento reducido equivalente en CSS/JS a 1280×720 y 1440×900: siete pasos ocultos, sin Lenis/sticky, ambas composiciones con opacidad 1; cabecera night en portada y mint dentro de visión, tras filtrar umbrales ocultos. No se cambió la preferencia real del sistema. Sin JS a 320 px: inglés íntegro, seis enlaces visibles, figuras en flujo, opacidad 1 y cero desbordamiento/recorte de anchura medido.
- Revisión independiente limitada a código y cuatro capturas. Coordinación realizó navegación y observación del movimiento. Texto HTML y diccionario de 114 pares EN/ES idénticos a `f71b129`; logo/retratos/favicon conservados. Sin nuevos recursos visuales o bibliotecas. Sintaxis JS, HTML equilibrado, IDs/anclas, SVG, recursos y Markdown correctos. Consola local sin errores/avisos registrados. Rueda nativa de la herramienta activa Lenis y hace avanzar el iris; teclado conserva su acción.

Capturas fuera del repositorio con prefijo `senva-chapters-`. Pruebas mediante tamaños de viewport, sin dispositivos físicos, lector de pantalla real ni medición de FPS. No equivalen a inspección completa de todos los efectos de Oryzo. La valoración estética sigue correspondiendo al usuario.

### Publicación — verificada

Implementación `ee44d594043723f5699ae8650c22804d1d02afb8`, pusheada a `origin/main`. GitHub Pages confirma `built` para ese SHA, sin error. A 1440×900 ES en la web pública, la rueda avanza el iris de progreso 0,2809 a 0,7764 y vuelve a 0,4341, con Lenis activo. Se observaron también el campo turquesa asentado y la apertura de papel. A 390×844 ES: figuras en flujo, modo nativo, cero desbordamiento horizontal. Consola pública sin errores/avisos registrados.

Dieciséis recursos públicos coinciden byte a byte con los revisados mediante HTTPS validado. CSS `b015c4ef`, JS `a5d3e127`; SVG, logo y fotografías conservados. Capturas fuera del repositorio: `senva-chapters-public-vision.jpg` y `senva-chapters-public-paper.jpg`. README, guía técnica y storyboard actualizados. Este cierre añade solo documentación a la implementación; se comprueba también el push/build del commit final. Sin force push ni cambios de configuración. No quedan fallos reproducibles pendientes dentro de las comprobaciones realizadas; se mantienen los límites de revisión descritos. [Web publicada](https://withnolan.github.io/senva/).

<a id="product-models"></a>
## Modelos de producto: gafas — 23 de octubre de 2026

Recurso solicitado por el usuario para que otro agente lo implemente; no se modifica `index.html`, CSS ni JS. Carpeta [assets/models](../assets/models/README.md).

- Gafas negras de acetato, montura cuadrada inspirada en wayfarer, sin logos ni grabados de marca. Partieron de un modelo generado por el usuario en Tripo; se reconstruyeron como piezas limpias: frontal simétrico con caras planas y aristas de ~0,9 mm, patillas rectas a ras del canto y unidas en ángulo recto, lentes, plaquetas integradas y dos puntos frontales decorativos elegidos por el usuario.
- Entregables: GLB web con meshopt (1,7 MB, acabado mate), variante brillo, maestro sin comprimir y 15 vistas 2.5D WebP transparentes. Por la regla de no usar 3D en la web, las vistas WebP son la opción por defecto; el GLB queda para una petición expresa de interactividad.
- Comprobaciones: el GLB comprimido carga en three r169 (Chromium headless con SwiftShader), que es el mismo render usado para las vistas. Revisión visual de 12 ángulos y del primer plano de las bisagras; el usuario aprobó el resultado. No hay pruebas en dispositivos físicos ni medición de rendimiento WebGL.
- Pendiente: guante.

<a id="integrated-cinema"></a>
## Escenarios integrados y composición bilingüe — 23 de octubre de 2026

### Dirección e implementación — terminadas; revisión en curso

El usuario sigue considerando básicas las transiciones y autoriza ampliar la paleta, aumentar distancia y dejar distinta composición natural EN/ES. Se contrasta con tres opiniones independientes antes de implementar y se vuelve a criticar con capturas.

- Dirección creativa y arquitectura coinciden: las bandas recortadas eran separadores, aunque sus formas internas fueran grandes. Se aceptan tres escenarios de viewport, fases de entrada/cruce/reposo y cuatro pasos secundarios breves. Coordinación integra el contenido existente en el escenario, evitando repetir encabezados o añadir pantallas decorativas vacías. [Dirección y decisiones](epic-scroll-direction.md).
- Visión: cintas de conversación, gran desplazamiento/escala de gafas y reposo mint hacia A/B. Práctica: planos laterales y entrada de la hoja real, con lectura principal siempre disponible. Validación: tres hojas atraviesan las decisiones existentes y se alinean en papel. Movimiento 2D nativo y reversible, con Lenis existente. Azul profundo, hielo y lavanda amplían la paleta fría; sin naranja o 3D.
- Tracks de 210/225/205svh solo si cada escenario cabe realmente bajo cabecera. Altura natural si no cabe; móvil en flujo. El idioma conserva la fracción del escenario fijado y vuelve a medir tras traducir. Se retiran los saltos obligatorios de cuatro titulares/principio del diccionario, del HTML y de CSS; no se igualan líneas.
- Opiniones incorporadas tras las primeras capturas: retirar cintas grandes al final para dar reposo; proteger etiquetas de concepto; eliminar el rectángulo flotante que enmascaraba el texto de práctica; corregir contraste de texto pequeño sobre hielo/lavanda usando navy. Aumentan biografías a 14 px sin rehacer equipo. Se recupera una señal de foco en títulos de destinos.

### Comprobaciones realizadas

- Navegador integrado a 1440×900 EN: tres escenarios fijados con 819 px útiles. Inicio, cruce y reposo de visión/práctica observados; validación en entrada, mitad y papel asentado. Revisión creativa independiente de seis capturas. Se aplican después sus recomendaciones de reposo y protección de etiquetas.
- A 1280×720 EN/ES: los tres escenarios caben en 639 px, sin desbordamiento horizontal medido. Visión compone 1 línea EN y 2 ES; práctica 2 y 3; equipo 2 y 3. Cambio EN→ES durante visión conserva progreso 0,4973→0,4970. Titulares y metadatos actualizados, sin alturas igualadas. A 1100×700 ES: escenarios en 619 px; hoja de práctica y texto observados completos en mitad/reposo.
- Recorrido hacia delante/atrás con teclado nativo en las tres escenas y A/B de visión. Colores y lectura principal disponibles. Comparación con baseline externo `0665049`, mismo EN 1280×720: documento de 9430 a 12625 px, +33,9%, con el mismo contenido. A 1440×900 la nueva página mide 14308 px.
- Revisión independiente estática: contenido, 114 claves, fallback, foco y medición. Detecta leve recorte potencial del arte móvil; gafas limitadas a 64vw. Detecta el cruce de idiomas natural→fijado: el controlador conserva ahora también esa fracción cuando el idioma final cabe. Estos últimos ajustes no cuentan como pruebas visuales.
- Sintaxis de JavaScript, estructura HTML, IDs/anclas, recursos locales, SVG, metadata social y Markdown comprobados. Logo, favicon y retratos conservados. Las palabras del diccionario no cambian, salvo retirar los saltos editoriales. Sin frameworks, fuentes o bibliotecas nuevas.

### Limitación de revisión pendiente

Al continuar la revisión móvil, la herramienta de navegador perdió su sesión y rechazó recuperar la pestaña local por su política de URL. No se intentan vías alternativas para eludir ese bloqueo. Se ha pedido al usuario restablecer el acceso. La revisión visual nueva de móvil/tablet, orientación, foco y alternativas reducido/sin JS sigue pendiente; no se heredan como pruebas de esta versión las de la iteración anterior. Las variantes se han revisado en código, no visualmente tras estos cambios. Tampoco se ha observado aún el cruce de idioma natural→fijado, una preferencia real del sistema, dispositivos físicos, lector de pantalla o FPS.

Capturas de escritorio fuera de producción con prefijo `senva-cinema-`. El resultado está implementado y revisado en escritorio, pero no se declara cerrado visualmente hasta resolver la limitación anterior.

### Entrega

Implementación `e875aa9`, integrada y pusheada mediante `f55fd2774c9a4218a1a44c1f1d4963bf8d630e63`. GitHub Pages confirma `built` para ese SHA, sin error. Se conserva íntegro el commit remoto `3b83523`: recursos y registro de modelos de la otra tarea, sin referencias desde la web de esta iteración. Sin force push ni cambios de configuración.

Dieciséis recursos publicados responden HTTP200 y coinciden byte a byte con los revisados mediante HTTPS validado. CSS `8c39a0ba`, JS `717dd77d`. Esta es una verificación técnica de entrega; no sustituye la observación visual bloqueada. Este cierre solo cambia documentación y también se comprueba su push/build. La revisión móvil/tablet, variantes accesibles y caso de idioma indicados arriba siguen pendientes. [Web publicada](https://withnolan.github.io/senva/).


<a id="scroll-glasses-3d"></a>
## Gafas 3D ligadas al scroll y barra lateral — 23 de octubre de 2026

### Implementación terminada; verificación visual pendiente por acceso

La petición expresa del usuario autoriza integrar el modelo 3D ya aprobado y ocultar la barra derecha. Prevalece para esta pieza sobre la restricción histórica de no usar 3D. Se conservan portada, logo, contenido, ambos idiomas, guante 2D y los demás escenarios.

- La introducción de visión sustituye la montura SVG por `senva-gafas.glb`, acabado mate. Giro de casi300° alrededor del centro real, con cabeceo/alabeo moderados: tres cuartos → patillas/reverso → frontal opuesto → reposo desde0,83. Se revierte al subir. Las cintas y el campo mint acompañan el mismo progreso; no se añade otro motor de scroll ni un giro automático. [Dirección y límites](glasses-3d-direction.md).
- Coordinación integra HTML/CSS/JS y dependencias; desarrollo trabaja solo en `glasses-3d.js`; dirección observa la hoja de vistas; revisión independiente contrasta el ciclo de vida, rutas y encuadre real del modelo. Se serializan cargas para evitar que una instancia obsoleta oculte el respaldo de otra al cambiar tamaño rápidamente.
- Three.js r169 y Meshopt se sirven localmente, con MIT, procedencia y hashes. Tarball oficial validado mediante SHA-512. Se importa al aproximarse a visión, solo con ventana≥1100×700, hover/puntero fino y sin movimiento reducido. Un canvas, DPR≤1,5, sin sombras ni RAF adicional continuo; dibuja al cambiar pose/tamaño y no actualiza fuera de visión.
- Tres cuartos WebP permanece hasta el primer frame válido. El diagrama de subtítulos usa la vista frontal del mismo modelo. Móvil, movimiento reducido, sin JS, fallo WebGL/GLB o pérdida de contexto mantienen imágenes/contenido; el diagrama estático permanece incluso cuando se oculta el escenario decorativo. Sin controles de canvas enfocables.
- `scrollbar-width:none` y el selector WebKit ocultan únicamente la barra del documento. No se bloquea `overflow` de html/body, ni se oculta la barra interna del menú. Se conserva Lenis, tacto, teclado y anclas existentes.
- No se alteran GLB, vistas, maestro o variante brillo. Los últimos dos no se cargan en la web. Los puntos son decorativos, no sensores/cámaras; el gráfico continúa etiquetado como concepto, sin capacidades funcionales inventadas.

### Comprobaciones reales

- Node carga el GLB mediante GLTFLoader+Meshopt locales:7 mallas,470508 triángulos; caja0,14689×0,04232×0,11634 m. Coordinación recorre101 poses de los vértices reales; revisión independiente recorre1001 con Box3 preciso. Extremos X0,09240/Y0,03671 m dentro del encuadre reservado X0,10437/Y0,04800 m. Esto comprueba la envolvente geométrica del canvas, no el recorte por composición de la página.
- Sintaxis de los dos controladores y módulos locales, importaciones relativas, HTML equilibrado, recursos existentes,114 claves EN/ES, fallback inglés/metadatos, IDs/anclas y enlaces Markdown. Logo exacto, favicon y ambos retratos conservados. El diccionario y los hechos no cambian. Medidas WebP reales2000×798 y2000×580 reservadas. Revisión independiente estática del ciclo carga/cancelación/dispose, respaldo y barra.
- Revisada la hoja local de vistas aprobadas, no una captura del nuevo renderer.

### Limitación y siguiente comprobación

Sigue vigente el bloqueo de acceso al navegador documentado en la entrada anterior; no se ha confirmado un restablecimiento ni se intentan vías alternativas para eludirlo. No se afirma revisión visual de esta integración, ausencia de errores de consola, rendimiento GPU/FPS o pruebas en dispositivos físicos. Pendiente observar poses de entrada/perfil/reverso/reposo y regreso, iluminación/contraste del acetato, alturas bajas, EN/ES, cambio de tamaño, móvil y movimiento reducido. La envolvente matemática no sustituye esta revisión. Los pendientes visuales previos también siguen abiertos.

Guía técnica, recursos visuales, README de modelos y reglas de coordinación actualizados. El README principal sigue centrado en el proyecto; sus instrucciones locales no cambian. Commit/push y build exacto se registran después de la entrega técnica.

### Entrega técnica

Implementación `957710a297f8a66cd8205ef4a4490c0f1f91af45`, pusheada a `origin/main`. GitHub Pages confirma `built` para ese SHA, sin error. Veinticinco recursos publicados responden HTTP200 y coinciden byte a byte mediante HTTPS validado, incluidos GLB, ambas vistas, módulo opcional y cinco módulos Three/Meshopt. CSS `e8053f9e`, JS `90adfb1b`, gafas `ab83f152`. Esta comprobación de entrega no sustituye la revisión visual pendiente descrita arriba. El cierre siguiente modifica solo este registro y también se pushea sin force push ni cambios de configuración. [Web publicada](https://withnolan.github.io/senva/).


<a id="optical-motion-revision"></a>
## Cristal, ritmo compartido y transiciones ópticas — 23 de octubre de 2026

### Dirección y recursos — implementados; integración en comprobación

La nueva petición añade cristal/subtítulos conceptuales, recorrido completo de izquierda a derecha, alturas comunes EN/ES, variedad de transiciones sin paneles rectangulares, movimiento de equipo/cierre, carga/entrada y dispositivos en la ilustración, además de información legal básica. Se preservan hechos, identidad, giro de las gafas y estructura del proyecto.

- Dirección creativa identifica ritmos demasiado breves en el relevo voz/guante y entrada de práctica. [Storyboard](motion-revision-direction.md). Coordinación amplía los tramos de desarrollo, reduce desplazamientos locales y usa una fracción compartida más larga.
- Desarrollo de gafas añade cristal físico transparente frío, un reflejo que sigue la geometría y subtítulos ficticios EN/ES dentro de ambas lentes. Conserva GLB fuente y giro. El texto es frontal, sin reverso espejado. El reposo ya no dibuja de nuevo cuando cambia solo la fracción.
- La ilustración nueva `conversation-devices.webp` muestra gafas en las dos personas y guantes en las manos en reposo de una; mantiene composición editorial y alfa. Generada/editada con imagegen y revisada como archivo local. Original y retratos preservados.
- Retirados de HTML/CSS `scene-plane`, `practice-plane`, `decision-sheet` y `decision-wash`. Una primera propuesta de aperturas resultó repetitiva en revisión independiente: propósito y equipo pasan a curvas/trazos; práctica acerca su hoja; validación abre un campo oval y contacto amplía la profundidad.
- Módulo separado reserva la altura natural máxima EN/ES en grupos independientes, sin imponer líneas ni limitar texto. Clones inertes, sin IDs y retirados; caché para evitar bucles de medición. Móvil/sin JS conserva flujo. Carga breve con límite de seguridad, sin porcentaje ficticio ni esperar el GLB; entrada escalonada posterior.
- Términos, privacidad y cookies nativos EN/ES en `legal.html`, enlazados por idioma. No se añaden cookies ni seguimiento. `senva-language` solo se guarda tras elegir idioma. [Fuentes y alcance](legal-notes.md).

La revisión en navegador continúa bloqueada por la política de URL previamente documentada. No se han utilizado vías alternativas. Las comprobaciones técnicas y de archivos se registrarán al terminar esta integración; no equivalen a observar movimiento/composición/alturas reales.


### Comprobación e integración técnica — terminadas

- 18 grupos bilingües independientes, sin anidación, en portada, propósito, visión, práctica, decisiones, preguntas, equipo, Xiji y pie. La revisión detectó Xiji/pie inferior sin reserva y se añadieron antes de cerrar. No se fuerzan saltos de línea. Mocks DOM verifican máximo EN/ES, caché tras traducir, resize, force de fuentes, details cerrados, restauración y retirada de clones inertes. Son simulaciones, no medidas de texto en navegador.
- GLB real con módulos locales: cada plano de texto queda dentro de la lente en153/153 rayos y las cuatro esquinas; desplazamiento frontal0,311 mm. Mismas geometrías de montura. Reflejos y texto añaden10000 triángulos y dos texturas pequeñas; cambio EN/ES y limpieza de11 geometrías,6 materiales,2 texturas comprobados. Reposo final estable sin renders repetidos por fracción. No acredita brillo, orden de transparencias visible ni FPS.
- Bootstrap de carga ejecutado en VM: recursos listos, recursos rechazados, documento atascado/timeout1600 ms, salida por rueda, reducido, hash y atrás/adelante. Todos pasan sin esperar un mínimo artificial. Entrada de marca/acciones cancela su animación al recibir foco.
- HTML principal/legal equilibrados;24/13 IDs únicos, anclas y recursos relativos existentes.118 claves EN/ES, atributos/metadatos y respaldo inglés completos. Sintaxis de cuatro controladores, llaves/cadenas/paréntesis CSS y hashes comprobados. No quedan clases de paneles rectangulares decorativos en HTML/CSS. Logo, favicon y retratos coinciden con los originales. WebP activo1200×800/129252 bytes, con píxeles exteriores y centro transparentes; ambos dispositivos inspeccionados en archivo local.
- Revisión independiente estática repetida después de integrar: sin fallo bloqueante encontrado; se incorpora su crítica de no repetir una apertura en todos los umbrales. Documentación técnica, visual y legal actualizada. El README principal conserva el enfoque del proyecto y sus instrucciones locales no cambian.

### Límite pendiente y siguiente revisión

No se ha restablecido el acceso de la herramienta al navegador y no se elude su política. Por tanto no se declara verificada visualmente esta iteración: brillo/subtítulos, recorrido lateral real, igualdad de alturas EN/ES, ritmo comparado, mobile320 px/tablet/orientación, ida/vuelta, foco y variantes reducidas/sin JS siguen pendientes en navegador. Los arneses simulados, análisis geométricos y revisión de archivos no sustituyen esas pruebas. Al recuperar acceso: revisar0/25/50/75/100% y vuelta, ambos idiomas a1440/1280/768/390/320, carga lenta/fallo y preferencias. No hay nueva captura de página de esta versión.

Se mantiene la autorización de commit/push; el build exacto y recursos publicados se comprobarán tras enviar la implementación.

### Entrega técnica y recursos publicados

Implementación `24d67fb0f8b075b73c876ed8846a5aee3b087f60`, pusheada a `origin/main`. GitHub Pages confirma `built` para ese SHA, sin error. Treinta recursos públicos responden HTTP200 y coinciden byte a byte mediante HTTPS validado, incluidos portada con dispositivos, módulos de carga/reserva/gafas, GLB, términos y CSS legal. CSS `0ec382e7`, controlador `01f763eb`, gafas `c03da9bb`, entrada `fdce6f6b`, reserva `409cb059`, legal `472aa101`. Este resultado acredita entrega de archivos, no el comportamiento visual pendiente.

El siguiente cierre modifica solo este registro y también se pushea/verifica. Sin force push ni cambios de configuración. Los pendientes visuales indicados arriba siguen abiertos hasta restablecer el acceso al navegador. [Web](https://withnolan.github.io/senva/) · [Información legal EN/ES](https://withnolan.github.io/senva/legal.html).

<a id="continuous-glasses"></a>
## Un mismo modelo, cristal vivo y continuidad — 23 de octubre de 2026

### Dirección e integración — en comprobación

La petición vigente pide mejorar cristal y texto, reflejos cambiantes sin bandas rectas y frases ficticias que se escriban lentamente en reposo. El mismo modelo debe entrar completamente desde fuera del borde izquierdo, detenerse a la derecha sin salir y descender al diagrama A. También se revisan palabras y oportunidades de movimiento. La captura del usuario muestra una apertura de Xiji cortada horizontalmente y separación acumulada excesiva.

- Desarrollo de lentes modifica únicamente `glasses-3d.js`: reflejos radiales orgánicos, cristal más transparente, tipografía Instrument Sans de mayor resolución con halo suave, cuatro frases cotidianas ficticias por idioma. Escritura155 ms/carácter, reposo2350 ms, fundido600 ms. Giro aprobado conservado; handoff permite orientar al frontal. La petición autoriza este movimiento continuo acotado al cristal; se pausa por control, invisibilidad, pestaña oculta, preferencia reducida o disposición de recursos.
- Coordinación integra un solo canvas: host absoluto dentro de visión, en una capa que evita recortes de ambos escenarios. Entra fuera de pantalla, llega con todo el canvas dentro y se desplaza al hueco real del diagrama. Imagen frontal solo como fallback; se oculta mientras el mismo modelo está listo. Sin reparentar al cruzar la escena, sin otro GLB/renderer. [Dirección y fórmulas](continuous-glasses-direction.md).
- Controles de pausa accesibles junto a los dos momentos de lectura, sincronizados con una única animación. Aviso HTML de frases ficticias, sin aria-live para cada letra. Móvil/reducido/sin WebGL/JS conservan vistas estáticas y toda la lectura. La mejora continua solo se activa si el escenario de escritorio cabe realmente.
- Edición acotada de17 textos EN/ES sobre participación, atención a la otra persona y primeras preguntas. Se retocan las propuestas de voz/práctica para mantener concisión. Se conservan titulares principales aprobados, estado, perfiles, límites, codiseño y candidatura sin admisión. [Propuesta y criterios](copy-revision.md).
- Xiji pierde el óvalo recortado: curva SVG de ancho completo, unión90 px/70 px móvil, menor separación vacía antes y después. Se añade acercamiento de su titular, respuesta suave al abrir preguntas y movimiento breve del hilo de propósito/voz. La captura aportada se usa como evidencia del defecto; no es una captura de esta implementación.

La limitación de acceso al navegador sigue vigente. No se intenta eludirla; las comprobaciones geométricas, simuladas y de archivos se registrarán tras revisar la integración y no se describirán como observación visual/GPU.


### Revisión y correcciones — integración terminada

- La revisión independiente detecta un desfase: el hueco de llegada heredaba el transform del fotograma previo de voz. Se deja el ancla sin transformar mientras el modelo está activo; voz y línea conservan su movimiento. Así no depende de otro scroll para quedar alineado al volver B→A.
- El arnés de trayectoria extrae la función real del controlador y prueba1001 muestras: entrada completamente fuera por izquierda, canvas dentro del borde derecho con32 px de margen al llegar, números finitos, continuidad en liberación/llegada y centro final coincidente con el hueco. Recorrido reversible. Una geometría simulada1100×700 detecta desbordamiento inferior intermedio; se limita el arco y se repite la prueba: borde inferior≤684 px,16 px de margen. No equivale a layout observado.
- GLB real y mocks del renderer:153/153 muestras del plano dentro de cada lente, ocho frases EN/ES, reflejos radiales sin gradientes lineales/barras. En6 segundos de reloj simulado se dibuja87 veces al cambiar las texturas. Activación, pausa, invisibilidad, dispose, contextlost y resolución tardía de fuente pasan; no se presenta como FPS real ni prueba GPU.
- Se reservan80/64 px para la fila de pausa antes de activar WebGL y evitar un ciclo de encajar→cargar→crecer→destruir. Cambio a reducido/pantalla pequeña desactiva inmediatamente el reloj y restaura el host original. Contextlost restaura imágenes. La revisión estática no encuentra cargas simultáneas ni dos escenas. El respaldo frontal se oculta sin fundido que duplique contornos.
- Sintaxis de controladores, HTML,121 claves EN/ES, respaldo inglés, atributos/metadatos, IDs/anclas y enlaces Markdown comprobados. Se repite el arnés de reservas bilingües: máximo, caché, resize, fonts/force, details y retirada de clones. Logo, favicon, retratos y archivos de modelo conservados. Documentación técnica/visual actualizada.

### Límite pendiente

Se ha revisado la captura aportada por el usuario, el código y las geometrías/simulaciones descritas. Continúa el bloqueo de acceso a la herramienta de navegador, sin restablecimiento confirmado y sin vías alternativas para eludirlo. No hay observación nueva de la página, transparencias, brillo, escritura o trayecto real. Pendiente: 0/25/50/75/100% e ida/vuelta, frío en ancla A, pausa, cambio EN/ES y resize durante el descenso,320 px/móvil/reducido/sin JS. Tampoco se afirman FPS, consola limpia o pruebas en dispositivos físicos. La publicación técnica se verificará por SHA y recursos, separada de esta limitación.

### Entrega técnica

Implementación `affa08bae4ae8c22185afe0e4961f9ffe29478cc`, pusheada a `origin/main`. GitHub Pages confirma `built` para ese SHA, sin error. Treinta recursos responden HTTP200 y coinciden byte a byte mediante HTTPS validado, incluidos el módulo vivo, controlador, CSS, GLB y respaldos. CSS `4f88ebff`, JS `cbfa062a`, gafas `21560d0a`. Se comprueba entrega de archivos, sin atribuir a ello una revisión GPU/visual de la página.

Este cierre solo actualiza el registro y también se pushea/verifica. No hay force push ni cambios de configuración. Los pendientes de observación visual anteriores siguen abiertos. [Revisar visión](https://withnolan.github.io/senva/#vision).


<a id="camera-and-purpose"></a>
## Cámara, propósito y banda inferior de subtítulos — 24 de octubre de 2026

### Bloque de implementación integrado

Petición vigente: corregir la línea de la captura de las21:37, dar movimientos de cámara y un ritmo menos brusco, bajar los subtítulos, una apertura deliberada de unos2s, menos etiquetas de concepto y un espacio protagonista para el principio de comunicación. Se conserva el proyecto y el único modelo aprobado.

- Coordinación retira el óvalo sólido recortado de la unión Xiji→contacto. La disolución cromática tiene extremos exactamente iguales a las secciones vecinas; el acercamiento/pan corresponde al titular real y al arco de contacto. No existe ya una silueta rellena que corte horizontalmente esa franja.
- El principio existente ocupa un espacio propio: propósito grande, hipótesis subordinada, luz difusa turquesa detrás y acercamiento amplio. Entrada, reposo de lectura y salida de luz comparten una función reversible del paso por viewport. Sin desaparición del texto ni altura máxima. Móvil/reducido usan contenido en flujo.
- Práctica aproxima la hoja de0,78→1 durante todo el recorrido. Validación hace un acercamiento/pan del contenido real. Se retiran sus aperturas sólidas gigantes, sustituidas por planos de luz suaves sobre fondos continuos. Los progresos de entrada/cruce/asentamiento se extienden; equipo/Xiji/contacto dejan de completar su movimiento tan pronto. No se transforma ningún ancestro del modelo ni el hueco de llegada.
- Desarrollo de lentes modifica solo `glasses-3d.js`: el plano completo queda bajo el centro óptico, ancho60% y descenso20% de la altura. La textura compensa el tamaño de letra sin comprimirla; conserva reflejos, escritura, giro y controles.
- Desarrollo de entrada modifica solo `intro.js`: mínimo solicitado2000ms más fotograma, salida independiente de seguridad2800ms. Interacción/reducido/retorno omiten la cubierta. Marca y luz se aproximan, el logo se amplía al salir y la portada entra escalonada con una aproximación más visible de la ilustración. Sin esperar el GLB ni bloquear desplazamiento/foco.
- La etiqueta «Concept in research» pasa de cuatro apariciones a una junto al diagrama. Se conservan el estado real en portada, los límites explicativos y las frases ficticias con pausa. El principio deja de repetirse como texto secundario en portada.

[Storyboard y responsabilidades](camera-motion-direction.md). Dirección revisa la captura y el diff de forma independiente. Detectó que reservar el párrafo dentro de un padre escalado subestimaría su altura; la reserva EN/ES se mueve al propio grupo transformado, cuyo clon se mide sin transform. Sin reservas anidadas ni saltos de línea impuestos.

### Comprobaciones iniciales y límite

Sintaxis,17 escenarios de temporización simulada, reservas bilingües y validaciones de HTML/122 claves EN/ES pasan. Geometría GLB real:2145 muestras por lente sitúan toda la banda inferior dentro de su superficie; el arnés del reloj confirma frases, pausa/inactivo/dispose/contextlost. Estas pruebas no acreditan apariencia, GPU o fluidez real.

Continúa el bloqueo de acceso al navegador previamente documentado, sin restablecimiento confirmado. Se usa la captura aportada como evidencia del defecto y no se elude el bloqueo mediante otras superficies. Queda pendiente observar esta nueva implementación en escritorio/móvil, ambas lenguas, ida/vuelta y movimiento reducido. La entrega técnica y sus comprobaciones finales se anotarán al terminar.


### Revisión final de código y comprobaciones afectadas

- Segunda crítica independiente detecta que el zoom1,16/pan7% de portada podría desbordar lateralmente; se contiene en `.hero` con `overflow:clip`, conservando el desplazamiento del documento. Práctica reduce su pan de10vw a3vw para mantener el acercamiento dentro de su espacio. Son correcciones por envolvente CSS, no layout observado.
- `cameraPass` se extrae del controlador real:1001 muestras en tres geometrías, inicio/mitad/final, monotonía, reposo0,56–0,78 y regreso idéntico. Acercamiento0,98–1,04viewports en las geometrías comprobadas. Se comprueba que el umbral ya no tiene apertura sólida, los extremos cromáticos coinciden y solo queda una etiqueta repetitiva de concepto.
- Trayectoria real extraída:1001 muestras, entrada fuera por izquierda, llegada dentro por derecha, continuidad de liberación y centro del hueco, regreso y límite inferior en700px. El cambio de ritmo de fondos no altera la función del modelo ni sus ancestros.
- Se repiten geometría inferior de ambas lentes y reloj de escritura/idioma/pausa/inactividad/dispose/contextlost; pasan. Se repiten17 escenarios de entrada:2000ms mínimo,2800ms seguridad, interrupción/bypass, fallos y recursos demorados. Reserva bilingüe: caché, anchos, refresco de fuentes, details, limpieza de clones y máximo EN/ES pasan.
- HTML equilibrado,122 claves y respaldo inglés/atributos/metadatos, IDs/anclas y enlaces Markdown, licencia/recursos locales y sintaxis. Logo exacto, favicon y retratos originales conservados. Sin cambios de instrucciones de arranque; README principal permanece centrado en el proyecto. Guía técnica, recursos y storyboard actualizados.

Estas comprobaciones de código, geometría y simulación no sustituyen observación visual. Siguen pendientes encuadres/glow, transiciones reales de ida/vuelta, foco visible,320px/móvil, EN/ES y reducido en navegador, por el bloqueo descrito. No se afirman FPS, consola limpia, rendimiento GPU ni pruebas en dispositivos físicos. Commit/push y build exacto se verifican a continuación.


### Entrega técnica

Implementación `f3b83a3ffa3b1abcd0c9b35a7aced5171d690c66` pusheada a `origin/main`. GitHub Pages confirma `built` para ese SHA, sin error.31 recursos publicados responden HTTP200 y coinciden byte a byte mediante HTTPS validado, incluidos módulo de lentes con su nueva versión, cubierta inicial, controlador, CSS, modelo y respaldos. CSS `8aa75c17`, JS `fe33602b`, entrada `a5895ea3`, gafas `ec903386`.

Esta comprobación acredita entrega de archivos; no sustituye la revisión visual pendiente. El cierre siguiente solo registra la entrega y también se pushea/verifica. Sin force push ni cambios de configuración. [Revisar la web desde el inicio, sin ancla, para ver la apertura](https://withnolan.github.io/senva/).


## Más aire vertical entre apartados — 24 de octubre de2026

Petición acotada: más margen arriba y abajo. Se amplía el padding de propósito, visión A/B, investigación, equipo, Xiji, contacto y el principio, entre80–100px por lado en escritorio y50–60px en móvil. El principio suma100px a su mínimo para que la separación no quede absorbida por la altura anterior. Móvil mantiene altura natural y amplía también el contenido de las escenas en flujo. Sin contenido nuevo ni cambios de animaciones, modelos, textos o navegación.

Revisión independiente de selectores: se ajustan también los overrides finales de equipo/Xiji. Se usa padding específico, sin márgenes colapsables ni regla global que altere los escenarios. Los tracks, longitudes y padding de contenido sticky de escritorio permanecen iguales; las posiciones posteriores siguen midiéndose desde el layout real.

Comprobaciones: diff acotado a CSS, versión del recurso y documentación; validación estática de HTML/EN/ES/recursos y reservas bilingües. Sigue pendiente revisión visual porque el acceso al navegador continúa bloqueado; no se atribuyen pruebas nuevas de layout en dispositivos. La publicación se verifica por SHA.


## Líneas de portada y carga del símbolo — 24 de octubre de2026

La captura muestra el divisor del aviso cruzando la base de la ilustración y la curva turquesa próxima al borde de portada. Se separa el divisor96px de la fila superior; la curva decorativa baja40 unidades SVG sin mover el fondo ni las otras uniones. La separación también cubre la expansión del arte durante la entrada, según su envolvente CSS; no se presenta como layout observado.

La cubierta conserva el logo, ahora ampliado sobre el nombre. Se divide el mismo trazado original en sus tres curvas: superior, media e inferior. Cada una avanza de izquierda a derecha durante0,48s, empezando a0,10/0,64/1,18s; las tres están completas en1,66s. Después se revela SENVA y se mantiene el cierre de unos2s existente. El símbolo no se desvanece durante el dibujo de la primera línea. No se cambia `intro.js`, su interrupción por interacción ni las alternativas de anclas/reducido/sinJS.

Revisión independiente de dirección: orden y monotonía horizontal de los paths correctos; advertidos el fundido inicial del padre y la expansión inferior del arte. Se corrigen ambos con símbolo opaco y separación96px. Comprobación estática de trazados originales, secuencia sin solapamiento y cierre antes de2s; HTML, claves EN/ES y recursos conservados. Pendiente observación visual por el bloqueo de navegador ya documentado. Commit/push y build se verifican para la entrega.


## SENVA gigante hacia la cabecera y cambios de fondo suaves — 24 de octubre de2026

### Implementación integrada

- Se corrige el orden solicitado: símbolo inferior→medio→superior, cada trazo de izquierda a derecha. Duración600ms, comienzos100/820/1540ms; nombre gigante2160–2440ms. La carga intencional pasa a2600ms con salida de seguridad3600ms.
- Desarrollo modifica únicamente `intro.js`: reutiliza la misma palabra SENVA y mide origen/destino reales, con hueco reservado. Anima1350ms hasta la palabra de la cabecera, luego restaura nodo/atributos y muestra la marca real en el mismo frame. Coordinación integra CSS/HTML y retira las animaciones anteriores de marca/salida que causarían otro salto.
- El vuelo se cancela/restaura por interacción/foco, scroll, resize/orientación, hash/idioma, ocultación, reducido o BFcache. Sin Web Animations/rectángulos válidos se muestra la marca real. Limpieza independiente1500ms. Sin bloquear foco o desplazamiento; sinJS/reducido/anclas mantienen alternativas.
- La cabecera pasa de grandes cambios claro/oscuro a matices de azul noche interpolados700ms, con blanco cálido/turquesa constantes. Evita saltos de superficie y el cruce de bajo contraste entre texto y fondo. Menú, foco e idioma conservan contraste.
- Apartados de flujo suman32px por lado en escritorio y20px en móvil; portada gana16–24px arriba. Los tres tracks suman15svh, sin alterar la altura natural ni el criterio de encaje de los escenarios de escritorio. Texto, perfiles, enlaces, hechos, idiomas, modelos y recursos ajenos conservados.

### Revisión independiente y comprobaciones iniciales

Dirección señala que la animación antigua de la marca movería el destino y que el título gigante podría recortarse en panorámicas bajas. Se retira la primera y se limita la fuente por ancho/altura, con símbolo/gap compactos bajo420px de alto. El contraste del header se calcula para49pares de fondos×101intermedios: mínimo6,57:1 para blanco cálido/mint; no se presenta como captura ni medición del navegador.

El arnés de desarrollo comprueba30 escenarios de temporización, vuelo medido y ciclo de vida (VM/mocks), incluidos extremos escritorio/móvil y punto intermedio. No acredita apariencia real. HTML/122claves EN/ES, respaldo inglés, recursos, SVG, anclas y conservación de logo/retratos pasan la validación estática. Se comprobarán también reservas bilingües y trayectoria con tracks actualizados antes de entregar.

Continúa el bloqueo de observación en navegador, sin restablecimiento confirmado; no se intenta eludirlo. Pendiente ver la entrada, aterrizaje, gradación y recorrido real en escritorio/móvil/EN/ES, ida/vuelta y reducido. Sin afirmaciones de FPS, consola limpia o pruebas físicas. Commit/push y Pages se verificarán por SHA.


### Comprobaciones finales de esta iteración

Se repiten las30 simulaciones de entrada con la curva de aceleración/reposo revisada, incluidas posición inicial/intermedia/final, cancelación y animación sin resolución. Se comprueba la envolvente por altura en seis tamaños, incluidos932×320 y320×200; es cálculo CSS, no render. Los trazos conservan exactamente las curvas originales y el orden ahora inferior/medio/superior.

Se repite la reserva bilingüe (máximo, caché, fuente/resize, details y retirada de clones). La prueba de trayectoria extrae la función actual y actualiza fixtures a225svh y separación262px:1001 muestras, llegada al hueco, continuidad/ida-vuelta y límite inferior en700px pasan. No se cambian renderer, lentes o su reloj. HTML, recursos/metadatos, claves y enlaces se vuelven a comprobar tras versionar. Los pendientes visuales descritos arriba continúan abiertos.

La revisión independiente final de `intro.js` comprueba restauración normal/error/skip, control de reentrada al cancelar WAAPI y disponibilidad del nombre accesible del enlace. No encuentra otro fallo concreto en el código; no se presenta como aprobación visual. El vuelo usa aceleración suave desde reposo y asentamiento final para conservar legibilidad del título grande.

## Rama `redesign`: prueba de portada con lentes — 24 de octubre de 2026

Petición: auditoría completa y prueba de dirección solo en la portada, en la rama `redesign`, sin push ni merge. Dirección elegida con `design-taste-frontend` (`colour-chapters`, semilla 1441130044; portada sustituida por «Giant cropped shape» porque la original necesitaba fotografías de arquitectura ajenas al proyecto).

- La forma de lente de `assets/graphics/glasses.svg` pasa a ser una gran figura recortada por el borde: una lente turquesa plana y otra que enmarca la ilustración de la conversación, solapadas un cuarto.
- Se retiran la etiqueta superior y la línea fina; la fase «Idea / Validación de hipótesis» se integra en la nota de estado, con el mismo texto EN/ES.
- Título con revelado enmascarado por línea; lente y textos entran con transform/opacidad. Movimiento reducido y ausencia de JS muestran la composición estática.
- Comprobado en navegador local bajo `/senva/`: EN/ES a 1440 y 390 px, inspector de diseño (desaparecen los fallos de etiqueta, línea y título de más de dos líneas de la portada en EN). El título ES ocupa tres líneas a 390 px; pendiente de decidir un texto más corto con el usuario.


## Plan autónomo — paso a.1: 404 de marca — 24 de octubre de 2026

- Commit `ff01863` en `redesign` (pusheado; no hay `.github/workflows`, así que ningún flujo despliega desde esta rama). Se commitea `docs/redesign-plan.md`, `review/` entra en `.gitignore` y se crea `404.html` (EN/ES por `senva-language` o idioma del navegador, enlace a `./index.html`, CSS en línea, fuentes y símbolo propios).
- Límite: 404.html se sirve en rutas inexistentes más profundas que `/senva/x`, donde `./` apuntaría mal; se acepta por ser el caso habitual de un solo nivel.
- No comprobado en navegador en este bloque (sin captura todavía).
- Nota: las fuentes Bricolage/Instrument ya están autoalojadas y precargadas en `index.html`; queda retirar Manrope (`styles.css:453`, `assets/fonts/manrope-variable.ttf`) en el paso a.7.

## Plan autónomo — paso a.2: limpieza de archivos sin uso — 24 de octubre de 2026

- Commit `081d973`. Copiados antes de borrar a `Documents/senva-design-source`: maestro GLB, `social-card.svg` y los tres PNG fuente (copias comprobadas).
- Eliminados tras volver a buscar referencias: maestro GLB, `senva-gafas-brillo.glb`, 3 PNG fuente, 13 vistas WebP, `social-card.svg`, variantes `conversation-768/1536/editorial`, `glasses-*`, `glove-*` y `graphics/conversation.svg`. Se mantienen `hoja-de-vistas`, `gafas-frontal`, `gafas-tres-cuartos-izquierda`, `glasses.svg` y `glove.svg`.
- Docs corregidos: README, `assets/models/README.md`, `technical-guide.md`, `visual-assets.md`. `conversation-art.md` y `design-review.md` quedan como historial.
- Comprobado: los siete recursos que carga el sitio existen. Sin captura en navegador (solo se borraron archivos sin referencias).

## Plan autónomo — paso a.3: subtítulos legibles en las lentes — 24 de octubre de 2026

- Los subtítulos de las lentes medían unos 6 px de alto, blancos sobre cristal claro. Ahora: texto azul noche con halo claro (legible sobre cristal y montura), tipografía 108 px en la textura (antes 92), plano de subtítulo al 82 % del ancho de la lente (antes 60 %), peso 600, gafas del diagrama a 440 px máx. (antes 340; límite de escala 0,9 en `script.js`).
- Comprobado en navegador local a 1440 px, EN y ES (`review/a3-before-*.png`, `a3-after-4.png`, `a3-es.png`). Frases largas («Cuéntame tu idea.») caben sin recortes. No comprobados 1100–1280 px ni vídeo.
- Hashes `?v=` de `styles.css`, `glasses-3d.js` y `script.js` recalculados (sha256 del contenido LF, 8 caracteres); los de otros archivos ya no coincidían con su contenido y no se tocan.

## Plan autónomo — paso a.4: texto mínimo de 13 px — 24 de octubre de 2026

- Todos los `font-size` de 9–12 px de `styles.css` y `legal.css` (incluido «Co-founder», notas y pies) pasan a 13 px. Comprobado con script en navegador: ningún nodo de texto visible por debajo de 13 px y desbordamiento horizontal 0, a 1440 y 390 px, EN y ES (portada). Captura del equipo en `review/a4-team-1440.png`. No revisadas todas las secciones en 320 px.
- Al ser un cambio global de CSS, `legal.html` también cambia de hash; sin otros efectos.
- Aparte: `.playwright-cli/` estaba commiteado por error en a.3 y se deja de rastrear.

## Plan autónomo — paso a.5: objetivos táctiles — 24 de octubre de 2026

- «Explore the repository» y «Back to top» medían 21 px de alto; ahora `inline-flex` con `min-height:32px` y sin saltos de línea (`styles.css`). Medido en navegador a 1440 y 390 px: ningún enlace, botón o summary visible por debajo de 24 px. Captura `review/a5-footer-390.png`.

## Plan autónomo — paso a.6: canonical y hreflang — 24 de octubre de 2026

- `index.html`: `rel=canonical` a https://withnolan.github.io/senva/ y `hreflang` en / es / x-default. `legal.html`: canonical a `.../legal.html`.
- Límite: el idioma se cambia en cliente sobre una sola URL, así que los tres hreflang apuntan a la misma dirección (válido pero poco informativo). Habría que tener URLs separadas (`/es/`) para que sirvan de algo; ver «Decisions to review».
- No hay captura (solo metadatos en `<head>`).

## Plan autónomo — paso a.7: fuentes — 24 de octubre de 2026

- Bricolage Grotesque e Instrument Sans ya estaban alojadas en woff2 (OFL, licencias en `assets/fonts/`). Se retira Manrope: `@font-face`, reglas de #team/#contact (ahora heredan Bricolage/Instrument), `manrope-variable.ttf` y `OFL-Manrope.txt`; docs corregidas. La marca sigue en Arial por decisión previa.
- Comprobado: `document.fonts` solo carga las dos nuevas; consola de la portada sin avisos tras 8 s (sin aviso de precarga reproducible en Chromium local; las dos precargas llevan `crossorigin`). Captura `review/a7-team.png`.

## Plan autónomo — paso a.8: márgenes a 768 px — 24 de octubre de 2026

- Equipo y contacto tenían su propio ancho de `.wrap` (36 px de margen a 768 px, 54 px de contenido a 1440) distinto del resto (28 px). Se eliminan esas tres reglas y usan el `.wrap` global. Medido: margen izquierdo idéntico en las nueve secciones a 768 (28) y 390 (20) px; sin desbordamiento horizontal (1440/768/390). Captura `review/a8-team-768.png`. No encontré el margen de 10 px citado en el plan; se uniformó el desvío real encontrado.

## Plan autónomo — paso a.9: menú móvil y foco — 24 de octubre de 2026

- El menú ya se cerraba al llegar al contenido, pero el foco pasaba antes por los botones EN/ES dentro de la cabecera con el menú aún abierto. `focusin` en `script.js` ahora cierra el menú en móvil si el foco va a cualquier elemento fuera del menú y del botón. Probado a 390 px: abrir, Tab por los cinco enlaces, el sexto Tab (EN) cierra; reabrir con clic y Escape devuelven el foco al botón. Sin captura.

## Plan autónomo — paso a.10: aviso noscript — 24 de octubre de 2026

- `<noscript>` bilingüe (una línea) tras el enlace «Skip to content» en `index.html`, con estilo `.noscript-note` (13 px, azul noche). Comprobado con Chromium con JavaScript desactivado (`review/a10-nojs.png`): aviso visible, portada y contenido en inglés legibles. `legal.html` y `404.html` no lo llevan (404 ya tiene su propio contenido estático).

## Plan autónomo — paso a.11 (parte 1): etiquetas «01 / …» fuera — 24 de octubre de 2026

- Retiradas las tres etiquetas (`purposeLabel`, `visionLabel`, `experimentLabel`) del HTML y de las claves EN/ES de `script.js` (el menú conserva los nombres). Comprobado en navegador a 1440 px (`review/a11-purpose.png`, `a11-concept.png`): titulares bien colocados sin la etiqueta. Quedan las etiquetas sin número (p. ej. «The work ahead») por no estar en la lista del plan.

## Plan autónomo — paso a.11 (parte 2): detalles medios y bajos — 24 de octubre de 2026

- `translate="no"` en el logotipo de cabecera/pie, la cubierta de carga y «SENVA / LSE». No se envuelve cada mención de SENVA en el texto corrido.
- Safe-area: `viewport-fit=cover` en index, legal y 404, y `--sa` (máx. de insets izquierdo/derecho) restado dos veces del ancho de `.wrap` en `styles.css` y `legal.css`. Medido sin cambios en un navegador de escritorio (80 px a 1440, 20 px a 390, sin desbordamiento); **no probado en un iPhone con muesca real**.
- `legal.html`: al final de cada bloque, «Back to top ↑ · Ir a español» y «Volver arriba ↑ · Go to English» con 32 px de alto (`review/a11-legal.png`).
- Pantalla de carga sobre el título: **no se cambia la duración** (2,6 s mínimo, 3,6 s máximo, saltable con cualquier interacción y desactivada con movimiento reducido); es la marca dibujada trazo a trazo que pidió el usuario antes. Ver «Decisions to review».

## Plan autónomo — paso b (1/2): forma de la lente del hero — 24 de octubre de 2026

- Referencia: `assets/models/gafas/vistas/gafas-frontal.webp` (apertura de la lente izquierda, trazada en un canvas y retocada a mano con curvas Bézier). La lente real es un trapecio de wayfarer: borde superior casi recto que baja hacia el puente, esquina del puente redondeada y vertical, lado exterior inclinado y estrechándose hacia abajo, esquinas inferiores amplias. La anterior (`glasses.svg`) tenía una esquina superior exterior en punta y un lado exterior recto que no existen en las gafas.
- `--lens` en `styles.css` usa ahora ese trazado (`viewBox 0 0 168 115`, misma relación 168:115). Comparación lado a lado en `review/lens-comparison.png`; portada resultante a 1440 y 390 px en `review/b-lens-after-*.png`.
- `assets/graphics/glasses.svg` sigue con la forma antigua; no se ha tocado (ver «Decisions to review»).

## Plan autónomo — paso b (2/2): estilos y fondo vivo base — 24 de octubre de 2026

**Estilos elegidos** (leídas las descripciones y el contenido de los skills; son guías de tokens muy genéricas, así que mandan sobre todo su intención):
- **storytelling** (principal): recorridos narrativos con imagen, texto e interacción; encaja con «una conversación se abre» y con escenas ancladas.
- **gradient** (apoyo): superficies con degradados suaves y profundidad; es el vocabulario de los brillos menta/lavanda pedidos.
- **glassmorphism** (apoyo, solo en la opción B): capas translúcidas con borde luminoso; se corresponde con el cristal de las gafas.
- Descartados: *immersive* (un único lienzo verde continuo choca con la identidad por sección), *cosmic/futuristic/dramatic* (ciencia ficción, no cálido), *editorial/refined* (serif; la marca ya usa Bricolage), *premium/vibrant/expressive* (o demasiado frío o demasiado colorido para «honesto y cálido»).

**Fondo base** (`styles.css`, `.hero::before/::after`): tres brillos radiales menta/lavanda con deriva lenta de 30 s (solo transform), grano SVG y mosaico del contorno de lente al 7 % de opacidad. Solo CSS, sin imágenes; con movimiento reducido la animación queda anulada por la regla global. Captura `review/b-bg-1440.png`. Contraste con axe-core se comprobará en el paso d.

## Plan autónomo — paso b (final): tres opciones de hero y elección — 24 de octubre de 2026

Ramas empujadas, todas desde `9641ca1` (lente real + fondo vivo): 
- **redesign-option-a** (`0406631`) — *parallax*: lente, ilustración y brillos se mueven a distinto ritmo con scroll y puntero (`translate/rotate/scale` individuales). Sutil y barata, sin fijación; el movimiento se nota poco al comparar inicio y final.
- **redesign-option-b** (`8d6a006`) — *cristal* (glassmorphism): lente de vidrio esmerilado con borde luminoso, brillo que barre y sigue al puntero, tarjeta de cristal para el estado. La más bonita en reposo, pero usa `backdrop-filter` sobre superficies grandes (coste en móviles medios) y no cuenta nada al desplazar.
- **redesign-option-c** (`f31ce40`) — *historia fijada* (storytelling): en escritorio el hero queda fijado 0,8 pantallas; la lente se acerca a la mujer y luego cruza al hombre mientras los brillos derivan. El texto no se atenúa. Móvil, movimiento reducido y sin JS: composición estática.

**Elegida: C** (merge `95f4044` en `redesign`). Es la única cuyo movimiento se lee al comparar inicio, mitad y final (mujer → ambos → hombre = «una conversación se abre»), sigue el criterio de AGENTS.md (reversible, scroll nativo, sin ocultar texto, tramo corto), solo anima `translate/scale` y trabaja con el estilo principal (*storytelling*) y el fondo en degradado. Se descartó B por coste/valor; sus ideas (cristal en tarjetas) pueden reutilizarse en el paso c. Se conserva `.lens-clip` (la máscara va en un contenedor para poder mover la imagen dentro de la lente).
- Comprobado en navegador a 1440 px (0/300/600 px de scroll) y 390 px (sin desbordamiento; sin fijación). Capturas `review/b-opt{A,B,C}-*.png`. No grabado en vídeo, no probado con ES ni a 1100 px, ni con movimiento reducido real.

## Plan autónomo — paso c.1: propósito — 24 de octubre de 2026

- Receta de fondos vivos compartida para todas las secciones (`.chapter-surface:not(.hero)::before/::after` en `styles.css`): brillos menta/lavanda con deriva lenta, grano y mosaico del contorno de lente, configurables con `--g1/--g2/--g3`, `--tile`, `--grain-a`. `--grain`, `--tile-light` y `--tile-dark` pasan a `:root`.
- Propósito (papel): brillos menta arriba a la izquierda y lavanda abajo a la derecha, mosaico oscuro al 3,5 %. Las tres situaciones suben escalonadas con el trazo (`translate` ligado a `--purpose-progress`; el texto no se atenúa). Captura `review/c-purpose.png`. EN, 1440 px.

## Plan autónomo — paso c.2: visión — 24 de octubre de 2026

- La receta de fondo vivo también se aplica a `.cinema-stage` (cada escenario fijado tiene su propio fondo opaco que tapaba el de la sección). Visión: brillos menta, lavanda y blanco sobre hielo/menta, mosaico al 2,8 %. Las gafas 3D, el diagrama y los subtítulos no cambian. Capturas `review/c-vision-a.png` y `c-vision-b.png` (1440 px, EN): el titular sigue legible sobre el brillo; el mosaico se nota sobre el menta pero no compite con el diagrama.

## Plan autónomo — paso c.3: primera hipótesis — 24 de octubre de 2026

- (Los colores de fondo de esta sección se incluyeron por error en el commit de visión, `286747c`.) Escenario azul noche con brillos menta/lavanda suaves y mosaico claro al 5 %. La tarjeta «A possible practice session» se eleva 8 px con sombra al pasar el puntero (solo con `hover:hover`). Captura `review/c-concept.png`.
- Observado, sin cambiar: a mitad de la entrada, el trazo decorativo `.practice-sweep` cruza el texto «It would not demonstrate…». Es fino y forma parte del trazo que une escenas; se deja para la revisión final (paso d) si molesta.

## Plan autónomo — paso c.4: preguntas (plan y límites) — 24 de octubre de 2026

- Aplicado a `#validation` («Decisions before devices») y `#research` («A signal is not a language»): brillos lavanda/menta con mosaico oscuro al 3 %. Las tres columnas del plan se elevan 4 px y marcan el filete superior en turquesa al pasar el puntero. Capturas `review/c-validation.png`, `c-research.png` (EN, 1440 px). No comprobado en ES ni móvil todavía (paso d).

### Decisions to review
- Pantalla de carga: se dejó en 2,6 s mínimo porque dibuja el logotipo trazo a trazo (petición anterior); si se quiere el titular visible antes, bajar `minimumTimer` y los 2,6 s de `.booting` en `styles.css`.
- `assets/graphics/glasses.svg` (dibujo de gafas del diagrama original) no coincide con la montura real (esquinas, lente en punta); no se cambia, solo se usa la forma real en el hero.
- hreflang: EN/ES comparten URL (cambio de idioma en cliente); si se quiere SEO por idioma habría que crear páginas separadas. Se dejó como mínimo conservador.

**Next step:** c.5 — equipo.
