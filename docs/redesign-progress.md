# SENVA — Progreso del rediseño

## Objetivo

Transformar la web en una presentación visual sobre comunicación, autonomía y conexión entre personas sordas signantes y oyentes. Mantener azul noche, blanco cálido y turquesa; inglés y español; accesibilidad; recursos locales y GitHub Pages. Los gráficos representan una visión conceptual, no un producto ni resultados.

La referencia de ritmo, espacio y transiciones es https://tuffstudy.com/. La web de partida es https://withnolan.github.io/senva/. No se copiarán identidad, contenido ni recursos de la referencia.

## Alcance autorizado en esta sesión

Implementar **únicamente la etapa 2**, conservando la portada terminada y los datos del proyecto. No iniciar el pulido avanzado ni rediseñar validación, equipo, Xiji o contacto. La petición posterior de reducir flechas y mejorar logos autoriza un ajuste acotado de iconografía en toda la página, sin cambiar sus textos ni destinos. La instrucción posterior del usuario («recuerda dejar todo pusheado siempre») autoriza commit y push al terminar y comprobar esta etapa; sustituye el límite anterior de guardar solo localmente. No se solicita desplegar en otro servicio.

**Etapa 2 terminada y comprobada (2026-10-20).** La portada de la etapa 1 se conserva. Se entregan ambas etapas guardadas en el repositorio; no se inicia la etapa 3.

Base de partida: `611c90a033b655eb9527fd15daf516420b0c0196`.

## Etapas independientes

1. **Portada.** Retirar la ilustración inicial de guantes y gafas. Crear una composición abierta con tipografía protagonista y dos formas diferenciadas que se acercan e intercambian señales. Comprobar EN/ES, móvil, teclado, movimiento reducido y lectura sin JavaScript.
2. **Narrativa de cuatro escenas.** Propósito → visión → primer experimento → qué debemos demostrar. Escenario temporalmente fijo en escritorio, evolución del recurso visual, indicador de capítulo y scroll nativo reversible. Móvil y movimiento reducido con lectura normal cuando fijar el escenario no resulte adecuado. **Terminada.**
3. **Pulido visual y continuación directa.** Afinar las transiciones y la coherencia visual del bloque narrativo sin añadir scroll artificial. Revisar composición y densidad de equipo, plan de validación, motivación de Santiago para Xiji y contacto, conservando todos los hechos, perfiles y enlaces. Pendiente.
4. **Verificación integral y coherencia.** Revisar inicios, mitades y finales de transiciones; desplazamiento en ambas direcciones; idiomas; redimensionado; teclado; movimiento reducido y ausencia de JavaScript. Revisar también la imagen social y documentación cuando se autorice ampliar el alcance. Pendiente.
5. **Entrega.** Revisar el diff y hacer commit y push tras cada etapa terminada, conforme a la última instrucción del usuario. Mantener la compatibilidad con GitHub Pages; no crear un alojamiento alternativo.

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
- Móvil, tablet, ventanas bajas y movimiento reducido: secciones normales, con altura según el contenido y diagrama de visión dentro del texto. Sin JavaScript o sin `IntersectionObserver`, se conserva esta lectura normal en inglés.
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

Los cambios guardados de las etapas 1 y 2, junto con este registro, se incluyen en la entrega a `main` conforme a la instrucción de hacer push. La confirmación del push se comprueba con Git al cerrar la tarea. No se crea alojamiento en otro servicio. Las herramientas de comprobación y los arneses temporales no forman parte del repositorio.

El pulido visual avanzado, una revisión de las secciones posteriores y la imagen social siguen pendientes. Las comprobaciones de esta etapa se realizaron en el navegador de vista previa; no equivalen a una matriz de navegadores ni a una revisión con lector de pantalla real.

## Cómo revisar la etapa 2

En la web de GitHub Pages, entrar al bloque desde `#opportunity` y recorrerlo hasta `#questions`. La actualización depende del despliegue habitual de Pages tras el push. Alternar EN/ES, desplazarse en ambos sentidos y comparar escritorio con móvil. Los enlaces de capítulo permiten ir directamente a cada escena.

Para revisar la copia local desde la carpeta del repositorio:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Abrir http://127.0.0.1:8000/#opportunity. Comprobar también ventanas bajas, los desplegables y la preferencia de movimiento reducido. El servidor utilizado por el agente se detiene al terminar. También se puede abrir `index.html` directamente para una revisión rápida.

## Siguiente paso — pendiente de autorización

La **etapa 3**: pulir ritmo, composiciones y transiciones, y revisar la continuación directa de equipo, plan de validación, Xiji y contacto según el briefing. Antes de retomarla, leer este registro y revisar Git; conservar las etapas 1 y 2. Esta sesión termina al entregar la etapa 2, sin empezar el trabajo pendiente.
