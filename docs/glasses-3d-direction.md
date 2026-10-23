# Gafas: dirección del giro vinculado al scroll

23 de octubre de 2026. La petición expresa de integrar el modelo 3D y ocultar la barra de desplazamiento prevalece sobre las restricciones históricas. Esta dirección afecta solo al recurso central de la introducción de visión; conserva la estructura, los textos y los diagramas A/B existentes.

## Lectura de la pieza

Revisados `assets/models/README.md`, la hoja `gafas/vistas/hoja-de-vistas.webp`, el HTML de visión y el controlador del escenario actual. La montura mate tiene una buena silueta frontal, patillas rectas expresivas y un tres cuartos trasero reconocible. El perfil exacto se vuelve muy estrecho: es un ángulo de paso, no una posición para leer. El frontal mira a +Z, +Y es vertical. La raíz está en metros después de aplicar su escala; su caja mide aproximadamente 147 × 42 × 116 mm y necesita centrarse antes de animarla.

## Idea: dar la vuelta a una perspectiva

Las cintas representan el intercambio; las gafas giran en un arco amplio para descubrir la construcción y recuperar una vista frontal. Se trata de mostrar un **objeto conceptual**, no una respuesta a la voz ni al reconocimiento de signos. Un giro ligado a la posición del documento hace natural volver hacia atrás. No hay auto giro, controles obligatorios ni una cámara que persiga al objeto.

El movimiento ocupa el espacio de arte bajo el texto. Titular y párrafo permanecen estables y visibles. La etiqueta de concepto conserva su margen y su fondo, por encima de las cintas. La composición se mide tras traducir; el número de líneas EN/ES puede ser distinto.

## Fases propuestas

Ángulos de Euler orientativos para un grupo centrado, con cámara fija mirando desde +Z. Deben ajustarse tras ver el GLB real; no se deben aplicar a su raíz descentrada. Interpolar cada tramo con suavizado y continuidad; el yaw es continuo, sin normalizar a −180/180 entre claves.

| Fracción del escenario | Pose del objeto X / Y / Z | Composición y significado |
| --- | --- | --- |
| 0–0,18: entrada | −8° / −38° / −8° → −12° / −65° / −4° | Tres cuartos grande, desplazado a la izquierda del centro del área de arte. Asciende unos 35 px y crece de 85% a 100%. La montura es identificable desde el inicio; no aparece de canto ni transparente. |
| 0,18–0,58: descubrir | −12° / −65° / −4° → +12° / −235° / +7° | Arco amplio en Y que muestra las patillas y el reverso; cruce lateral de alrededor de 140 px. Las cintas pasan detrás, sin tapar la montura. Los perfiles son breves. El cabeceo revela espesor sin volcar las gafas. |
| 0,58–0,83: volver al encuentro | +12° / −235° / +7° → −6° / −338° / −2° | Recupera un tres cuartos frontal del otro lado. El campo mint termina de asentarse. La escala cae solo a 94%, preparando el dibujo A/B que sigue. |
| 0,83–1: reposo y salida | −6° / −338° / −2° fija | Detener todos los giros. Un cuarto final aproximadamente estable permite mirar el objeto, leer la aclaración y seguir hacia A/B. Sale con el escenario por el desplazamiento ordinario del documento. |

El recorrido total ronda 300°, sin vueltas infinitas ni rebotes. No plegar las patillas en esta primera integración: añadir bisagras animadas al giro distraería y complicaría la lectura. Los puntos decorativos no se iluminan ni emiten señales.

## Encuadre, luz y alternativas

- Escritorio: anchura aparente máxima de unos 560–640 px dentro del área de arte, sin invadir el bloque de texto. Reservar espacio según la esfera de la pieza, no solo su caja frontal, para que el reverso no se recorte. No acercar la cámara como segundo movimiento.
- Luz suave cálida blanca y relleno frío, fondo transparente sobre hielo/mint. Hacen falta reflejos amplios y suaves para distinguir acetato y patillas negras, sin brillos pulsantes, pedestales ni aspecto de metal. No cambiar los materiales por un negro plano sin iluminación.
- Móvil: conservar el flujo normal y el bloque de arte de unos 250–270 px. Si se habilita el modelo, reducir el cruce lateral a unos 30 px y encuadrar para una anchura aparente máxima del 82% del viewport. Nunca generar un track fijo para justificar el giro.
- Sin WebGL, fallo del GLB, movimiento reducido o sin JS: una única vista WebP tres cuartos con tamaño reservado; sin transición entre una serie de fotografías. No quitar la imagen hasta tener un primer frame correcto. Texto, anclas, concepto y A/B continúan funcionando.
- Ocultar la barra lateral mediante CSS manteniendo el scroll del documento, Lenis existente, teclado y anclas. No reemplazarla por una barra falsa ni bloquear `overflow-y`.

## Crítica y comprobaciones que hacen falta

La pieza tiene cerca de 470 mil triángulos; no convertir su presencia en un bucle de render permanente. Limitar la resolución y dibujar al cambiar pose, tamaño o estado de carga. Cargar cuando se aproxime el escenario y pausar fuera de pantalla. Comprobar el coste real en el navegador disponible; no prometer FPS o rendimiento en móviles físicos.

La vista negra se puede perder sobre una cinta teal. Revisar entrada, perfil, reverso, frontal final y vuelta, con ambos idiomas y tamaños bajos. Si las cintas tapan el objeto, reducir o retirar la cinta durante el cruce; no añadir halos para remediarlo. El eje de giro y el centro se deben confirmar mirando el resultado, no solo por la ausencia de errores.

Este documento registra dirección y revisión estática/de la hoja de vistas. No declara probada la futura implementación 3D ni el movimiento en navegador.
