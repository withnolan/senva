# SENVA — Rediseño integral

Actualizado: 20 de octubre de 2026. Registro del rediseño desde `4945ec0`.

**Estado actual:** ampliación de [ilustración editorial 2D](#editorial-2d) entregada y con despliegue confirmado, sobre `d199c90`. El bloque final registra su entrega; los apartados anteriores conservan el historial.

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
