# SENVA — una sola pieza, dos momentos

23 de octubre de 2026. Dirección para la petición de cristal, escritura y continuidad de gafas. Leídos `docs/project-brief.md`, entrada actual de progreso, `docs/motion-revision-direction.md`, HTML, CSS y controlador actuales. Se ha examinado la captura aportada en la conversación; esta tarea no ha accedido al navegador y no afirma una revisión visual de la implementación.

## La decisión

Conservar una única instancia del modelo y su canvas durante toda la sección de visión. El mismo objeto entra desde fuera del borde izquierdo, gira y llega al lado derecho sin recortarse; después desciende hasta la explicación voz → subtítulos. No cambiar de canvas, no cargar otra escena y no superponer una segunda imagen de gafas mientras el modelo está disponible. La versión estática continúa disponible si no procede WebGL.

El modelo representa el concepto, no una demostración de transcripción. El texto ficticio de las lentes puede escribirse lentamente cuando el apartado permanece visible; ninguna frase debe parecer recibida del micrófono. La nota de concepto permanece en HTML, fuera del canvas. En movimiento reducido se conserva una frase completa y estable.

## Arquitectura mínima

- Mover el host `.glasses-model` una sola vez, al inicializar la mejora, a un hijo directo de `#vision`. Mantenerlo absoluto respecto a esa sección. Evitar los `overflow:clip` de `.cinema-stage` y `.static-routes`; el host no debe vivir dentro de ninguno de esos recortes.
- Reservar el hueco de composición del escenario inicial y añadir un hueco de destino `.glasses-dock` dentro de `.route-device`. El hueco de destino tiene dimensiones estables y alberga la imagen frontal accesible al fallback. La clase de modelo listo oculta esa imagen; nunca retirarla del DOM ni de la reserva geométrica.
- El único canvas es decorativo, no recibe foco y conserva `pointer-events:none`. Los rótulos y avisos siguen siendo HTML. No convertir toda la sección en un canvas ni añadir un contenedor de scroll.
- El controlador existente sigue proporcionando progreso, idioma, resize y visibilidad. Lenis, rueda, teclado, anclas y geometría de la página permanecen a cargo del documento. El renderer conserva el giro actual; trayectoria de página y escala externa pertenecen al controlador de interacción.

### Puntos de referencia

Trabajar con el centro del host, no con su borde izquierdo. Si `W` es el ancho de viewport, `C` el ancho CSS del host y `m` un margen de 28–40 px:

```js
const startX = -C / 2 - 32; // canvas entero fuera por la izquierda
const rightX = W - C / 2 - m; // canvas entero dentro al llegar
```

Usar el ancho del canvas completo resulta conservador: la silueta del modelo es algo menor. La primera pose realmente visible debe conservar una entrada gradual; no empezar con medio modelo ya dentro. No sumar otra traslación de `--glasses-range` al nuevo trayecto.

Coordenadas de host absoluto, dada una posición deseada en viewport `P` y el origen documental de `#vision`:

```js
const localX = P.x - visionDocumentLeft;
const localY = P.y + scrollY - visionDocumentTop;
host.style.transform = `translate3d(${localX}px,${localY}px,0) translate(-50%,-50%) scale(${scale})`;
```

La sección y el host deben evitar bordes o transformaciones extra que invaliden ese origen. La medición se hace después de las reservas EN/ES. Si se leen rectángulos de destinos durante un frame, agrupar esas lecturas al principio del frame, antes de escribir variables CSS; una lectura del hueco estable es preferible a adivinar su centro tras escalas y sticky.

## Storyboard con reposo

| Momento | Inicio | Desarrollo y lectura | Reposo / salida |
| --- | --- | --- | --- |
| Descubrir la visión | Centro del host fuera de pantalla por la izquierda. Texto del capítulo visible. | Traslación continua hacia `rightX` durante aproximadamente el 75–85% del tramo; mantener el giro aprobado. El texto no debe moverse a la velocidad del modelo. | Último 15% con gafas completas al lado derecho, cristal y texto frontal legible. |
| Bajar al uso conceptual | Al liberarse el sticky, conservar continuidad de posición; ningún cambio de padre en ese momento. | Durante el intervalo entre la liberación del escenario y el asentamiento del diagrama A, el mismo host viaja hacia el centro del hueco de destino y reduce escala. Una curva lateral muy leve es suficiente; no dar otra vuelta completa. | Modelo alineado con voz y rótulo de subtítulos. Las frases ficticias continúan lentamente mientras se lee A. |
| Reciprocidad A/B | A comienza completa, sin nuevo modelo. | El host acompaña el relevo amplio de A a B; funde con A en el mismo intervalo. El guante ocupa después el foco. | B se lee sin gafas gigantes superpuestas; al subir, el mismo host reaparece en A y recorre el camino inverso. |

### Un enlace reversible sin saltos

Si el escenario está fijo, el final de su fijación ocurre en:

```js
const releaseY = trackTop + trackHeight - stageHeight - headerHeight;
const dockY = layoutTop - sceneTop; // llegada del diagrama a su top sticky
const handoff = smoothstep(clamp((scrollY - releaseY) / Math.max(1, dockY - releaseY)));
```

En el inicio de ese intervalo, el centro vertical de reposo en viewport es `headerHeight + artLocalCenterY`. Mantener ese ancla de salida y mezclarla con el centro real del hueco de destino en viewport. Esto evita que las gafas desaparezcan hacia arriba con el final del escenario para reaparecer de golpe en el diagrama. El resultado se vuelve a convertir a coordenadas locales de `#vision` con la fórmula anterior.

El centro real del destino debe seguir su sticky y el pequeño movimiento del grupo A. Si se calcula geométricamente en lugar de leer su rectángulo, la posición documental del diagrama es `clamp(scrollY + sceneTop, figureNormalTop, layoutBottom - figureHeight)`; después sumar el desplazamiento local del hueco. Leer únicamente `offsetTop` del modelo original no contempla el sticky.

Para pantallas en las que la escena no cabe, no forzar la arquitectura fija: conservar flujo normal e imagen estática. No reservar un viaje largo adicional ni ampliar alturas para justificar el relevo. La mejora puede activarse solo cuando las dos anclas tienen medidas válidas y la escena de escritorio se mantiene fija.

## Qué revela la captura del cierre

La elipse de `.transition-xiji` se recorta dentro de un bloque de 160 px. Su corte horizontal superior produce exactamente la apariencia de una placa rectangular con esquinas curvas que el usuario rechaza. Cambiar únicamente `border-radius` no lo arregla.

Además se acumulan el padding inferior del equipo, los 160 px del umbral y los 200 px superiores de Xiji. En la captura se percibe un gran tramo sin contenido antes de la etiqueta de candidatura. Ese espacio no aporta coreografía ni lectura.

Corrección recomendada: retirar la apertura rellena de este umbral, reducirlo a un enlace de 60–90 px y enlazar los fondos con una sola curva SVG de ancho completo, sin caras rellenas que crezcan dentro de un recorte. Su contorno debe acabar en los bordes de la unión real entre secciones; el trazo puede dibujarse, pero no necesita un óvalo gigante. Reducir padding inferior de equipo y superior de Xiji a unos 90–110 px en escritorio. El titular de Xiji puede acercarse suavemente con escala 0,94→1 y 20–24 px de recorrido mientras entra, manteniendo opacidad 1.

Conservar como máximo una apertura óptica grande en validación o cierre. Si se mantiene la del cierre, su intersección con el borde debe quedar fuera del intervalo de lectura, no aparecer como otra cápsula cortada. No resolver la petición de más animación aumentando espacios vacíos.

## Palabras que inspiran sin exagerar

La aspiración puede expresarse con frases breves y humanas, conservando condicionales en el cuerpo que explica el hardware. Propuestas para coordinar ambos idiomas, sin prometer resultados:

- Voz: «Que las palabras encuentren su lugar.» / “Give words a place in the conversation.”
- Ejemplo ficticio en lentes: «Una idea puede / empezar aquí.» / “An idea can / begin here.”; «¿Lo imaginamos / juntos?» / “Shall we imagine / it together?”; «Qué bien / encontrarnos.» / “Good to / meet you here.”
- Cierre: «Las posibilidades empiezan con una conversación.» / “Possibilities begin with a conversation.”

Las frases del cristal deben ser cortas, estables mientras se escriben y claramente ficticias. Ritmo orientativo: 70–110 ms por carácter, pausa de 1,8–2,4 s con frase completa, desvanecer y empezar otra. No borrar de golpe cada 500 ms ni activar `aria-live`; el aviso HTML comunica el sentido. Pausar al quedar fuera de viewport o al ocultarse la pestaña. El usuario pide ese bucle deliberadamente: limitarlo a las lentes y no extender movimiento constante al resto de la web.

## Comprobaciones de esta tarea y pendientes

Esta tarea solo cambia este documento. Se han contrastado estructura y fórmulas existentes y la captura aportada. Pendiente por coordinación: implementación, comprobar el primer/último píxel del trayecto en varios anchos, handoff al bajar/subir, cambio EN/ES durante el viaje, resize, alineación final con el hueco, reflujo y alternativas sin WebGL/JS o con movimiento reducido. El bloqueo previo de acceso al navegador impide afirmar una nueva revisión visual. No se ha empleado navegador alternativo ni ejecución indirecta para eludirlo.
