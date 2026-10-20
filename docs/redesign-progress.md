# SENVA — Progreso del rediseño

## Objetivo

Transformar la web en una presentación visual sobre comunicación, autonomía y conexión entre personas sordas signantes y oyentes. Mantener azul noche, blanco cálido y turquesa; inglés y español; accesibilidad; recursos locales y GitHub Pages. Los gráficos representan una visión conceptual, no un producto ni resultados.

La referencia de ritmo, espacio y transiciones es https://tuffstudy.com/. La web de partida es https://withnolan.github.io/senva/. No se copiarán identidad, contenido ni recursos de la referencia.

## Alcance de implementación y entrega

Implementar **únicamente la etapa 4: revisión completa y correcciones para preparar la publicación**. Conservar la estructura, contenido y dirección visual de las etapas 1–3. Restaurar el logo anterior solicitado, usando la versión de `611c90a` en cabecera, pie y favicon. No añadir secciones, efectos ni funcionalidades.

**Etapa 4 terminada localmente (2026-10-20).** Responsive, orientación, navegación, movimiento, idiomas, contenido, recursos, metadatos y compatibilidad con `/senva/` revisados con los medios descritos abajo. Fallos observados corregidos y documentación actualizada. Preparada para revisión y posterior publicación autorizada; el despliegue nuevo todavía no se ha realizado.

La revisión de la etapa 4 se cerró inicialmente **sin commit, push, publicación ni cambios de configuración del repositorio**, conforme a aquella instrucción. **Autorización posterior (2026-10-20): el usuario pide entregar los cambios mediante commit y push y mantener los futuros trabajos pusheados por defecto.** Esta instrucción sustituye la restricción de entrega anterior. Se conservan los cambios de las etapas 3 y 4; no se cambian ajustes de Pages. Base previa a la entrega: `8c457c5`; copia del trabajo al comenzar guardada fuera del repositorio para verificar el alcance.

## Etapas independientes

1. **Portada.** Retirar la ilustración inicial de guantes y gafas. Crear una composición abierta con tipografía protagonista y dos formas diferenciadas que se acercan e intercambian señales. Comprobar EN/ES, móvil, teclado, movimiento reducido y lectura sin JavaScript.
2. **Narrativa de cuatro escenas.** Propósito → visión → primer experimento → qué debemos demostrar. Escenario temporalmente fijo en escritorio, evolución del recurso visual, indicador de capítulo y scroll nativo reversible. Móvil y movimiento reducido con lectura normal cuando fijar el escenario no resulte adecuado. **Terminada.**
3. **Movimiento y transiciones.** Afinar entrada, evolución de las cuatro escenas, indicador, controles y continuidad, conservando estructura y contenido. **Terminada localmente.** La propuesta previa de revisar composiciones de las secciones posteriores queda fuera del alcance autorizado actual.
4. **Verificación integral y coherencia.** Revisar inicios, mitades y finales de transiciones; desplazamiento en ambas direcciones; idiomas; redimensionado; teclado; movimiento reducido y ausencia de JavaScript. Revisar también la imagen social y documentación. **Terminada localmente; límites registrados abajo.**
5. **Entrega.** Guardar las etapas 3–4 en un commit y hacer **push a `origin/main`**, según la autorización posterior del usuario. Mantener compatibilidad con GitHub Pages y sus ajustes existentes. El push puede activar el despliegue ya configurado.

## Inspección previa — terminada

- Inspeccionadas ambas webs en navegador, incluidas portada de SENVA y portada, espacio tipográfico y cambios de composición al desplazar TuffStudy.
- En la inspección inicial, la web publicada de SENVA coincidía con la portada local de partida: panel oscuro con boceto técnico de dispositivos.
- De TuffStudy se toma la jerarquía tipográfica, la pausa entre mensajes y la alternancia de composiciones; no su interfaz de producto, marca ni contenido.
- El lector web no pudo abrir SENVA; la inspección sí se realizó directamente en navegador.

## Etapa 1 — terminada localmente (2026-10-19)

### Implementado

- Eliminado por completo el SVG inicial de guantes y gafas de la portada, incluido su panel oscuro y sus etiquetas técnicas.
- Nueva composición abierta: titular de mayor escala, texto de misión breve y dos formas amplias en azul noche y turquesa. Un canal en negativo y dos señales lineales representan intercambio recíproco; no hay manos, signos, partículas ni simulación de reconocimiento.
- Las formas se aproximan brevemente al entrar. El intercambio usa `transform` y `opacity`, se pausa con el control existente y al salir de pantalla. Sin JavaScript o con movimiento reducido, la ilustración sigue siendo comprensible y estática.
- Etiquetas nuevas traducidas en EN/ES. El concepto de dispositivos se explica más adelante, en la sección de visión existente.
- Adaptación de composición, tamaños y controles en móvil. Sin alturas de pantalla obligatorias ni scroll añadido.
- Archivos modificados: `index.html`, `styles.css`, `script.js` y este registro. Al cerrar la etapa 1 quedaron guardados localmente, sin commit ni push. Su entrega se incluye ahora junto a la etapa 2 por la instrucción posterior del usuario.

### Comprobaciones realizadas

- Inspección visual de la portada en escritorio y móvil. Matriz responsive de 320, 390, 768 y 1440 px efectivos en **EN y ES**: sin desbordamiento horizontal. Revisados los saltos de línea, las etiquetas y el cambio entre tamaños.
- Selector de idioma: traducción de portada, `lang` del documento y título coherentes. Paridad de claves EN/ES comprobada.
- Menú móvil: apertura, cierre con Escape y devolución de foco al botón.
- Pausa y reanudación del movimiento con teclado: ambas señales pasan correctamente de `running` a `paused` y vuelven a `running`.
- Navegación portada → visión → portada: anclas correctas y desplazamiento nativo; el gráfico se pausa fuera de pantalla.
- Sin JavaScript, mediante iframe con scripts bloqueados: título y descripción en inglés, leyenda conceptual, cuatro enlaces de navegación y gráfico estático disponibles; sin controles de movimiento inoperantes visibles.
- Movimiento reducido **simulado en un arnés temporal fuera del repositorio**: sin animaciones de las formas ni de las señales, contenido visible y control de movimiento oculto. No se ha cambiado ni verificado la preferencia real del sistema operativo.
- Consola de la vista previa: sin errores ni advertencias. Sintaxis de JavaScript y `git diff --check`: correctos.
- Verificación de alcance contra la base: cabecera y metadatos intactos; todas las secciones desde «El propósito» hasta el footer conservan exactamente el mismo HTML; lógica de navegación, idioma y observadores intacta. Solo se añaden tres claves de texto por idioma.
- SHA-256 del contenido posterior sin cambios: `4c77816b5cacd4adb4ab493ced70860f184a324b760c93f684c7da88bbc3da14`.
- Capturas locales de escritorio y móvil en EN/ES guardadas fuera del repositorio con nombres `senva-redesign-stage1-desktop-en.png`, `senva-redesign-stage1-desktop-es.png`, `senva-redesign-stage1-mobile-en.png` y `senva-redesign-stage1-mobile-es.png`.

### Alcance al cerrar la etapa 1

No se ha iniciado la narrativa nueva de cuatro escenas. Las secciones posteriores, sus diagramas, equipo, plan, Xiji y contacto no se han rediseñado. La imagen social y las referencias a ella conservan su versión anterior; se revisarán al autorizar una etapa de coherencia integral.

## Etapa 2 — terminada (2026-10-20)

### Implementado

- Sustituidos los bloques anteriores de propósito, visión, historia, práctica y preguntas por una sola secuencia de **cuatro escenas**: propósito, visión de guantes y gafas, primer experimento de aprendizaje y lo que debemos demostrar. Se evita duplicar la narrativa anterior.
- En escritorio de al menos 1000 × 720 px, un escenario con `position: sticky` acompaña a los textos. Dos formas de conexión se separan, aproximan y reorganizan para acompañar las direcciones de comunicación, el flujo de práctica y las preguntas pendientes. Los dispositivos se representan mediante un diagrama de etiquetas, sin dibujos improvisados de manos ni reconocimiento simulado.
- Indicadores 01–04 y navegación por anclas; el capítulo activo se actualiza en ambos sentidos. `IntersectionObserver` limita el seguimiento al bloque visible; los eventos de scroll pasivos agrupan las mediciones de las cuatro escenas mediante `requestAnimationFrame`. Solo se actualiza el estado cuando cambia el capítulo. Redimensionado, cambio de idioma y apertura de detalles se vuelven a medir.
- Transiciones básicas de `transform` y `opacity`, sin capturar rueda, detener el scroll, introducir esperas ni imponer saltos. El texto permanece en el flujo normal, disponible y sin capas superpuestas. El escenario es decorativo para lectores de pantalla y no contiene controles enfocables.
- Móvil, tablet, ventanas bajas y movimiento reducido: secciones normales, con altura según el contenido y diagrama de visión dentro del texto. Sin JavaScript, se conserva esta lectura normal en inglés; si falta `IntersectionObserver`, sigue funcionando el selector EN/ES con la presentación estática.
- Límites técnicos y de investigación conservados en desplegables HTML nativos: información manual y no manual, posición relativa al cuerpo, sensores inerciales, ausencia de traducción funcional, datos de personas signantes competentes, práctica acotada, feedback con docentes y comparación con cámaras. Se mantienen las hipótesis de estudiantes adultos y centros; no se añaden resultados, colaboradores ni producto construido.
- Conservadas la composición y los textos de portada, cabecera y metadatos de la etapa 1; también todos los datos, fotos, estudios, perfiles y destinos desde validación hasta el footer. La única ampliación posterior son los SVG y pequeños indicadores solicitados por el usuario. Paleta sin naranja; ningún framework, motor 3D, dependencia ni recurso externo nuevo.

### Comprobaciones realizadas

- Recorrido con scroll nativo de las cuatro escenas **hacia delante y hacia atrás** en escritorio, en EN y ES. Comprobados cambio de composición, número activo y mantenimiento del escenario a 120 px del borde superior mientras corresponde. Revisados estados intermedios y finales de la secuencia básica.
- Inspección visual de las cuatro escenas a 1440 × 1000 px y del límite de escritorio a 1000 × 720 px. Escenario y leyendas contenidos; el texto puede crecer sin recortes. Por debajo del límite se usa lectura normal.
- Matriz responsive de **320, 390 y 768 px en EN y ES**: sin desbordamiento horizontal ni texto que exceda su anchura; escenario fijo oculto y sin alturas mínimas de pantalla en los artículos. Inspección visual de visión y evidencias a 390 px; redimensionado entre móvil y escritorio durante el recorrido.
- Selector EN/ES: titulares, textos, diagramas, capítulos y etiquetas traducidos; `lang`, título y estado activo coherentes. Las 171 claves de cada idioma tienen paridad y todas las claves utilizadas en HTML existen en ambos.
- Teclado: activación de anclas con Enter, foco en el artículo de destino y apertura/cierre del desplegable de preguntas. Enlaces de capítulos y validación funcionales. No hay elementos enfocables en paneles visuales ocultos.
- Sin JavaScript: lectura de las cuatro escenas y diagrama de visión en un iframe con scripts bloqueados. Además, copia temporal del HTML sin la etiqueta `script`: desplegable técnico abierto con Enter, texto íntegro y ningún escenario fijo ni controles de movimiento inoperantes.
- Movimiento reducido **simulado con CSS y `matchMedia` equivalentes en un arnés temporal fuera del repositorio**: escenario oculto, artículos sin alturas mínimas, scroll sin suavizado y señales sin animación. No se ha modificado ni comprobado la preferencia real del sistema operativo.
- Consola de la vista previa: sin errores ni advertencias de la aplicación. `node --check script.js` y `git diff --check`: correctos. IDs únicos y destinos de todas las anclas verificados.
- Comparación con la copia de trabajo al iniciar la etapa 2: antes del ajuste posterior de iconos, portada y cabecera idénticas byte a byte, también validación → footer. Después del ajuste se comprueba que sus textos y enlaces no cambian (salvo los índices discretos 01–03 de Xiji). El CSS anterior se conserva íntegro; las nuevas reglas cubren narrativa e iconos.
- Capturas de revisión guardadas fuera del repositorio: `senva-stage2-desktop-es.png` y `senva-stage2-mobile-es.png`.

### Ajuste posterior solicitado: menos flechas y mejores logos (2026-10-20)

- Eliminadas todas las flechas decorativas `↗` del HTML. La navegación interna usa texto y dos discretos chevrones hacia abajo; las situaciones cotidianas, puntos; los objetivos de Xiji, números.
- Iconos SVG locales y consistentes: símbolo de LinkedIn junto a sus enlaces, código para el repositorio y cinco pictogramas relacionados con cada paso de validación. Todos son decorativos para tecnologías de asistencia; se conservan etiquetas y destinos.
- Símbolo de SENVA refinado con dos trazos que se enlazan, coherente con la composición de conexión. Cabecera, footer y favicon comparten el mismo dibujo. El nombre y los colores de marca se conservan.
- Comprobado el resultado de iconos en escritorio (validación y equipo) y móvil; repetida la matriz de 320, 390 y 768 px en EN/ES sin desbordamiento. SVG del favicon válido, HTML equilibrado y consola sin errores.
- Ajuste acotado: no se rehace la portada ni se inicia la composición o el pulido avanzado de la etapa 3. Archivos de esta entrega: `index.html`, `styles.css`, `script.js`, `assets/favicon.svg` y este registro.

### Entrega y límites

Los cambios guardados de las etapas 1 y 2, los iconos solicitados y este registro están en el commit de implementación `bf6d803` ("Build SENVA narrative scenes and refine connection identity"). **Push confirmado a `origin/main`**, con árbol de trabajo limpio y cero commits de diferencia entre `HEAD` y `origin/main` en la comprobación de entrega. Este registro se actualiza después para dejar constancia del resultado. No se crea alojamiento en otro servicio. Las herramientas de comprobación y los arneses temporales no forman parte del repositorio.

El pulido visual avanzado, una revisión de las secciones posteriores y la imagen social siguen pendientes. Las comprobaciones de esta etapa se realizaron en el navegador de vista previa; no equivalen a una matriz de navegadores ni a una revisión con lector de pantalla real.

## Etapa 3 — terminada localmente (2026-10-20)

### Implementado

- Entrada única y breve de marca, titular, texto y botones: desfases de 0, 70, 140 y 210 ms; duración máxima del grupo de texto de 710 ms. Desplazamientos de 10 px y opacidad parcial, sin ocultar por completo los textos mientras esperan. Se ejecuta solo en una entrada desde portada, con JavaScript y movimiento permitido; no se repite al traducir.
- Aproximación de las formas y un intercambio breve de señales. Eliminados los bucles constantes de la portada; después queda estática. El control existente permite suprimir también transiciones y movimiento del recorrido; reanudar no reproduce la entrada.
- Evolución continua del gráfico entre las cuatro composiciones existentes, calculada a partir de la posición real de las escenas. Transformaciones de posición, rotación y escala con interpolación suave; no hay reloj ni bucle de animación permanente.
- Leyendas con fundido, desplazamiento de hasta 12 px y escala de hasta un 1,5 %. La saliente termina antes de entrar la siguiente para evitar textos superpuestos. Los textos principales siguen en el documento; solo el gráfico conceptual decorativo utiliza capas. El estado de investigación permanece en su pie.
- Indicador 01–04 con una línea que acompaña el avance; `aria-current` mantiene el capítulo correspondiente en la navegación. Tratamiento suave del título de la escena activa en escritorio, sin ocultar títulos inactivos.
- Entrada y salida del escenario con variaciones discretas de opacidad y escala; encuentro entre portada y narrativa mediante una transición estática de blanco cálido a fondo claro. Sin secciones, rellenos de scroll ni alturas nuevas.
- Microinteracciones de botones, enlaces, chevrones, selector EN/ES y menú con un ritmo común. Los enlaces del menú móvil cerrado son inmediatamente `inert` y quedan fuera del árbol accesible, incluso durante su cierre; Escape conserva el retorno de foco.
- Indicador de foco de ancla en el marcador de capítulo, sustituyendo el gran contorno que rodeaba todo el artículo. Teclado, anclas y detalles nativos conservados.
- Cambio de idioma: se conserva la fracción de lectura de la escena durante la recomposición de sus textos. La corrección de posición solo responde al selector de idioma; el scroll cotidiano sigue siendo nativo, sin capturar rueda ni imponer saltos.
- `index.html` y las 171 claves de cada idioma se mantienen idénticos a la base: estructura, datos, enlaces, imágenes, marca, estado y avisos conceptuales sin cambios. Solo se editan `styles.css`, `script.js` y este registro. Sin frameworks ni dependencias nuevas.

### Comprobaciones de la etapa

- Auditoría de la etapa 2 antes de editar: recorrido completo de las cuatro escenas en ambos sentidos correcto; se conserva esa implementación como base.
- Revisados inicio, mitad y final de las tres transiciones en español: valores de progreso fraccionarios, formas que evolucionan, indicador continuo y un máximo de una leyenda legible a la vez. Ningún texto principal depende de esos fundidos.
- Recorrido completo hacia delante y atrás en inglés: 01 → 02 → 03 → 04 → 03 → 02 → 01. Revisados también los estados en español y la recomposición al cambiar idioma.
- EN/ES mediante pulsaciones directas del selector: en escritorio y móvil se conserva el punto relativo de lectura. En móvil, la escena de visión pasó de 662 a 733 px y volvió a 662 px manteniendo ese punto.
- Matriz de 320, 390 y 768 px en ambos idiomas: sin desbordamiento horizontal, escenario oculto y artículos sin alturas mínimas de pantalla. Menú móvil abierto/cerrado, Escape, foco devuelto, `inert` y `aria-hidden` comprobados.
- Escritorio de 1440 × 1000 px y límite de 1000 × 720 px: contenido del escenario dentro de sus bordes. A 1000 × 650 px, se vuelve a lectura normal. Redimensionado sin contenido cortado ni nuevas zonas vacías.
- Portada en entrada nueva: desfases y duraciones CSS comprobados, una sola iteración por elemento, cero elementos visibles con animación infinita y estado final legible.
- Movimiento reducido simulado mediante CSS y `matchMedia` equivalentes, en arnés temporal fuera del repositorio: sin entrada de portada, escenario fijo ni transiciones de controles; títulos al 100 % y scroll sin suavizado. No se ha cambiado ni comprobado la preferencia real del sistema operativo.
- HTML sin la etiqueta `script`, en arnés temporal: cuatro escenas, títulos al 100 %, diagrama de visión disponible y detalle abierto con Enter; sin animación de portada ni escenario fijo.
- HTML completo y diccionarios EN/ES comparados byte a byte / por igualdad de datos con la copia al comenzar. Sintaxis JavaScript y `git diff --check` correctos.
- Salida y regreso del bloque comprobados: el escenario atenúa su presencia al entrar validación y la recupera al volver, sin fijaciones prolongadas. Recorrido inverso nuevo en español: 04 → 03 → 02 → 01.
- Pausa/reanudación con Space: clase de pausa y etiqueta correctas, duración de transiciones a cero durante la pausa y entrada inicial sin reproducirse al reanudar. Consola de las vistas finales sin errores ni advertencias.
- Captura final de escritorio guardada fuera del repositorio: `senva-stage3-desktop-es.png`. La versión móvil se inspeccionó visualmente durante la matriz responsive y las pruebas de idioma.

### Límites y pendientes

Etapa 3 guardada localmente y comprobada; **sin commit, push ni publicación**. Se mantiene la base `8c457c5` y se detiene el trabajo. La etapa 4 (revisión integral, otros navegadores, lector de pantalla real e imagen social) sigue pendiente de autorización. No se ha comprobado el cambio real de preferencia en el sistema operativo; la prueba de movimiento reducido usa el arnés descrito. La revisión se realizó en el navegador de vista previa, no en dispositivos físicos ni lectores de pantalla reales.

## Cómo revisar la etapa 2

En la web de GitHub Pages, entrar al bloque desde `#opportunity` y recorrerlo hasta `#questions`. La actualización depende del despliegue habitual de Pages tras el push. Alternar EN/ES, desplazarse en ambos sentidos y comparar escritorio con móvil. Los enlaces de capítulo permiten ir directamente a cada escena.

Para revisar la copia local desde la carpeta del repositorio:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Abrir http://127.0.0.1:8000/#opportunity. Comprobar también ventanas bajas, los desplegables y la preferencia de movimiento reducido. El servidor utilizado por el agente se detiene al terminar. También se puede abrir `index.html` directamente para una revisión rápida.

## Cómo revisar la etapa 3 localmente

Desde la carpeta del repositorio:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Abrir http://127.0.0.1:8000/#home para la entrada y http://127.0.0.1:8000/#opportunity para el recorrido. Si ya se ha abierto la web en ese puerto, forzar la recarga de CSS y JavaScript; la verificación del agente utilizó un servidor temporal sin caché para evitar revisar archivos anteriores. Los arneses y servidores de prueba quedan fuera del repositorio y el servidor del agente se detiene al terminar.

Recorrer las escenas en ambos sentidos, detenerse a mitad de una transición, alternar EN/ES con el selector, abrir los detalles y comparar escritorio con móvil. El control de portada permite pausar las transiciones; la preferencia de movimiento reducido ofrece lectura normal.

## Etapa 4 — terminada localmente (2026-10-20)

### Correcciones realizadas

- Recuperado exactamente el símbolo anterior de `611c90a` en cabecera, pie y favicon. Retiradas las reglas de color y tamaño propias del símbolo que lo había sustituido. Se conserva el resto del sistema de iconos aprobado.
- Corregido un desbordamiento de las etiquetas de cofundador y LinkedIn en las tarjetas españolas del equipo a 601–640 px. Las etiquetas pueden pasar a otra línea entre 601 y 800 px; no cambian las fotografías, los perfiles ni la composición general.
- Sustituido el boceto retirado que aún aparecía en la imagen social por las dos formas conceptuales ya utilizadas en la portada. Conservados sus titulares y estado bilingües. Fuente SVG y PNG real de 1200 × 630 sincronizados; textos alternativos del HTML, EN/ES y README actualizados.
- Guía técnica puesta al día: portada y cuatro escenas actuales, entrada finita, pausa, lectura alternativa, revisión bajo `/senva/` y publicación condicionada a autorización. README conserva su enfoque de proyecto y enlaza este registro.
- Sin nuevas secciones, efectos, funcionalidades, dependencias o cambios de hechos del proyecto. Comparación con la copia al comenzar: el HTML solo cambia en ambos logos y el texto alternativo social; los diccionarios solo cambian en `socialImageAlt`. El trabajo local de la etapa 3 se conserva.

### Comprobaciones efectuadas

- Matriz responsive **EN y ES**: 320 × 844, 390 × 844, 600 × 844, 601 × 844, 640 × 844, 768 × 1024, 801 × 900, 844 × 390, 1024 × 768, 1440 × 1000 y 1920 × 1080. Medidas reales de viewport y desbordamiento horizontal comprobadas. Tras corregir las tarjetas, repetidas las medidas afectadas a 601, 640 y 768 px: etiquetas y enlaces contenidos, sin solapamientos ni desbordamiento horizontal.
- Revisión visual de **toda la página en español**, desde portada hasta el pie, a 320 px y 1440 × 1000: las cuatro escenas, validación, ambos fundadores, nota anónima de colaboradoras, candidatura de Santiago a Xiji y contacto. Retratos cargados y compactos; contenido legible, sin recortes o zonas vacías que bloqueen el recorrido. El espacio entre capítulos de escritorio sigue siendo el aprobado en la etapa 3.
- Scroll nativo hacia delante y atrás en ambos idiomas: capítulos 01–04 y regreso, indicador y `aria-current` coherentes. Entrada y salida del escenario sticky correctas; a mitad de las tres transiciones se verificaron progresos 0,499, 1,501 y 2,499. Las leyendas decorativas dejan un breve intervalo sin texto entre fundidos, sin superponerse; los textos de las escenas permanecen visibles.
- Redimensionado durante la lectura: a 1000 × 650 el escenario desaparece y los artículos vuelven al flujo normal; a 1000 × 720 y 1440 × 1000 reaparece el sticky sin recortar leyendas. Cambio de orientación de 390 × 844 a 844 × 390 y regreso con el menú abierto: cierre correcto, navegación de escritorio disponible y recuperación de `inert` / `aria-hidden` al volver a móvil.
- Teclado: menú abierto con Enter, cerrado con Escape y foco devuelto; navegación a visión con foco en el destino. Los tres detalles técnicos abiertos con Enter. Contenido expandido revisado en EN/ES a 320 px sin desbordamiento. Pausa y reanudación con Space: etiquetas y transiciones a cero correctas; la entrada no se repite. Retorno al inicio comprobado con clic nativo y con Tab + Enter nativos.
- Anclas de portada → visión, capítulos → preguntas, preguntas → validación y pie → inicio comprobadas. Destinos fuera de la cabecera fija tras terminar el desplazamiento. IDs únicos y todos los destinos internos existentes. El escenario decorativo no contiene enlaces ni controles enfocables.
- Cambio EN/ES sin ocultar escenas: `lang`, título, descripción, `og:locale`, imagen social, botones, navegación y etiquetas accesibles correspondientes. Paridad de **171 claves por idioma**, claves HTML existentes y respaldo inglés sincronizado. Las longitudes de ambos idiomas se incluyeron en la matriz responsive y en los detalles abiertos.
- Sin JavaScript: copia temporal del HTML actual sin la etiqueta `script`, fuera del repositorio. Cuatro escenas y diagrama disponibles en inglés, navegación completa visible, selector y controles dependientes ocultos, detalles nativos operativos con Enter; sin sticky ni desbordamiento a 320 px.
- Movimiento reducido **simulado mediante CSS y `matchMedia` equivalentes en un arnés temporal fuera del repositorio**: sin entrada, animaciones, transiciones, scroll suave ni fijación del escenario; títulos al 100 % y artículos sin alturas mínimas. No se modificó ni verificó la preferencia real del sistema operativo.
- Contenido cotejado con los datos facilitados: comunicación y autonomía como propósito, aprendizaje como hipótesis, concepto sin prototipo o resultados; codiseño como plan pendiente. Nombres, estudios, retratos y enlaces conservados; dos colaboradoras de ideación anónimas y Santiago como candidato a Xiji, sin admisión ni respaldo.
- Recursos locales servidos correctamente por HTTP bajo **`/senva/`**, incluidos CSS, JS, favicon y retratos. PNG social corregido: HTTP 200, tipo `image/png`, 1200 × 630. SVG válidos, sin enlaces simbólicos o arneses dentro del repositorio y sin nuevas dependencias externas. El enlace al repositorio abre su página pública; ambos LinkedIn llegan a su pantalla de acceso.
- Recarga y recorridos locales finales: sin nuevos errores ni advertencias de la aplicación. Durante la sesión hubo un `TypeError` aislado sin URL de origen en el registro de la herramienta; no se reprodujo en la recarga ni en los recorridos finales, y no se ha podido atribuir al código de SENVA. No se afirma que todos los mensajes de toda la sesión estuvieran vacíos.
- `node --check script.js`, `git diff --check`, igualdad del logo/favicon con la versión anterior y verificación del alcance respecto a la copia inicial: correctos. Capturas fuera del repositorio: `senva-stage4-desktop-es.jpg` y `senva-stage4-mobile-es.jpg`.

### Estado final y límites

Etapa 4 guardada y lista para revisión local. **Sin commit, push, publicación ni cambios de ajustes del repositorio.** La base sigue siendo `8c457c5`; el diff incluye las etapas 3 y 4. No quedan defectos visuales o funcionales reproducibles observados dentro de esta revisión.

La inspección se hizo en el navegador integrado con viewports simulados, no en móviles físicos, varios motores de navegador ni con un lector de pantalla real. Movimiento reducido se comprobó por simulación, no mediante la preferencia del sistema. LinkedIn exige acceso y no permitió confirmar públicamente el contenido de los perfiles; sus URLs se conservan según la información facilitada. No se han verificado los ajustes actuales de Pages, el despliegue de estos cambios, la disponibilidad desde China ni el diagnóstico aislado sin origen descrito arriba. Estas limitaciones no se presentan como comprobaciones superadas.

## Entrega autorizada y comprobación posterior

Para revisar, iniciar el servidor local descrito arriba y recorrer `/#home` y `/#opportunity`; la [guía técnica](technical-guide.md#comprobar-el-prefijo-senva) incluye una alternativa para probar `/senva/`. Los servidores y arneses temporales del agente no forman parte de la entrega y su servidor se detiene al terminar.

El usuario ha autorizado después el commit y push del diff completo de las etapas 3–4 a `origin/main`. La entrega incluye logo original, pulido del movimiento, correcciones de revisión, imagen social y documentación. Confirmar el resultado con la respuesta de `git push` y la igualdad entre `HEAD` y la rama remota; no cambiar ajustes del repositorio. Los apartados anteriores que indican «sin commit ni push» describen el cierre histórico de cada etapa antes de esta autorización.

Tras el despliegue de Pages existente, revisar https://withnolan.github.io/senva/ y su imagen social. La revisión local no confirma el resultado de ese despliegue. Los límites de navegadores, dispositivos y perfiles anteriores siguen pendientes de una comprobación externa.
