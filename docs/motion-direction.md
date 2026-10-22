# SENVA — El hilo toma la palabra

22 de octubre de 2026. Corrección de dirección tras la revisión editorial.

## Encargo y responsables

La petición de estudiar AVIVA se refiere a **su organización de agentes**: dirección creativa, implementación especializada, revisión independiente y coordinación que integra las correcciones. No convierte su estilo, producto, bibliotecas o intensidad visual en requisitos de SENVA.

La última revisión dio claridad al contenido, pero redujo el movimiento a una entrada breve y variaciones de 5 px / 2 %. Esta corrección recupera una experiencia animada perceptible. Se conservan textos, hechos, logo, paleta, EN/ES, ilustración 2D y lectura accesible.

- Dirección creativa: este brief y el storyboard; no modifica la implementación.
- Desarrollo de interacción: HTML/CSS/JS y coreografía; propiedad separada de los documentos de revisión.
- Coordinación: integración, revisión visual en navegador, documentación de evidencias, Git y publicación.
- Revisión independiente: contenido, estados intermedios, colisiones y alternativas accesibles; observaciones concretas antes de cerrar.

## Idea conductora

**Un hilo compartido enlaza personas, dos direcciones de comunicación y una primera pregunta que investigar.** La transformación de la composición debe ser visible aun sin prestar atención a detalles pequeños. El texto sigue siendo el contenido; los gráficos dan continuidad y explican relaciones.

El hilo puede ser varios segmentos SVG alineados entre secciones. No exige un único trazado gigante ni un elemento fijo que atraviese toda la web. No representa datos capturados, reconocimiento o traducción funcional.

## Storyboard de las tres secuencias

Las posiciones se expresan en porcentaje del escenario útil, excluyendo cabecera y controles. Son objetivos de composición: se ajustan a las cajas reales de EN/ES para mantener zonas de lectura.

| Secuencia | Inicio | Mitad | Final |
| --- | --- | --- | --- |
| **1. Un espacio compartido** — portada → propósito | Dos adultos visibles, separados unos 40 px respecto a la pose de encuentro. Titular, misión y estado ya disponibles. | Al avanzar, las capas se aproximan; el trazo compartido se dibuja y se prolonga. Escala moderada, sin balanceo constante. | Personas en reposo de encuentro; un segmento del hilo toma el relevo en propósito y acompaña las tres situaciones. |
| **2. Una conversación, dos direcciones** — visión | Escenario abierto de ancho total. Lectura A en el tercio izquierdo; gafas, voz y subtítulos en la mitad derecha. | Las gafas se desplazan de forma amplia hacia una zona superior segura; el hilo cambia de dirección y el guante atraviesa el centro hacia la izquierda. La nueva lectura entra por el flujo natural, sin ocultar la anterior por JS. | Lectura B en el tercio derecho; guante e información facial/corporal/espacial agrupados a la izquierda. La ruta inversa conduce hacia una pregunta de investigación, no hacia una salida que parezca demostrada. |
| **3. Convertir una visión en una pregunta** — salida de visión → práctica | Guante y trazo cierran el segundo flujo. Concepto y límites siguen visibles. | El mismo lenguaje de trazo pasa a la práctica. La hoja/interfaz se despliega con un desplazamiento de 60–80 px y una rotación plana de aproximadamente 2° a 0°. | Guante y conexión conducen a las preguntas actuales del experimento. La hoja reposa y da paso al plan de validación. |

## Especificación de la visión

- **Escenario de ancho total**, sin la tarjeta técnica de dos filas a la derecha. Cambiar de lado debe transformar la composición completa.
- Dos lecturas en flujo: A alineada a la izquierda y B a la derecha. Ambas conservan su texto real, ejemplo ficticio, enlaces y límites.
- Un escenario `position: sticky` contenido únicamente dentro de estas dos lecturas. Referencia de duración: alrededor de una altura útil por lectura, con altura mínima determinada por el texto. No añadir pantallas de tránsito vacío.
- No desactivar esta experiencia por medir 720 px de alto. Diseñar y comprobar también 1280×720 y 1000×680. Si falta altura, reducir el gráfico o su fijación antes que recortar texto.
- Recorrido perceptible: gafas en torno a x=72 % → x=30 %; guante desde x=72 % → x=26 %. Amplitud orientativa de 120–220 px o más según el escenario, no 5 px.
- La inversión sucede durante el paso entre lecturas. Reservar una franja central o superior libre, calculada a partir de las cajas de texto, para el cruce. No atravesar una frase con un objeto.
- Tres intervalos orientativos del progreso local: 0–0,28 lectura A; 0,28–0,72 intercambio; 0,72–1 lectura B. Ajustar los límites si EN/ES requieren más tiempo estable.
- Durante el intercambio pueden variar posición, escala, máscara del fondo y trazado. No mezclar simultáneamente todos los efectos. El foco pasa de gafas a guante.
- Un elemento secundario debe seguir agrupado con su dirección y sus etiquetas, o desaparecer por completo. No dejar dispositivos diminutos o semitransparentes como restos.
- El rostro, cuerpo y espacio se explican junto al guante. La arquitectura sigue abierta; no dibujar una cámara o sensor resuelto que el proyecto aún no ha decidido.

## Texto y claridad del proyecto

No cambiar el contenido para justificar una animación. En particular:

- Misión y estado de idea visibles desde portada, sin esperar una secuencia.
- Situaciones cotidianas identificadas como motivaciones.
- Visión bidireccional conceptual; guantes por sí solos no traducen una lengua completa.
- Aprendizaje como primera hipótesis acotada, no misión ni paso garantizado hacia traducción natural.
- Codiseño y validación futuros; perfiles, colaboradoras anónimas y candidatura Xiji intactos.

Los textos principales no reciben opacidad 0 ni salen del árbol accesible. Los controles no se colocan dentro de capas decorativas animadas. Las anclas conservan destinos reales y foco visible.

## Implementación y versiones accesibles

CSS/SVG/JavaScript existentes, sin dependencias nuevas. Un `requestAnimationFrame` solo al actualizar el progreso de áreas visibles, con listeners pasivos y sin capturar rueda o imponer saltos. Las transformaciones deben derivarse del progreso nativo y recorrer la misma trayectoria al retroceder.

- Portada: SVG por grupos para personas e hilo; entrada breve finita, seguida de coreografía al deslizar. El logo no se anima ni rediseña.
- Propósito: trazo de continuidad y desplazamientos cortos de los tres motivos; no repetir un revelado idéntico en cada elemento de toda la página.
- Visión: movimiento protagonista; contraste de fondos plano y zonas seguras para lectura.
- Práctica: despliegue y trazado ligados a entrada/salida; reposo al detenerse.
- **Móvil:** secciones normales, sin escenario fijo prolongado. Conservar alternancia lateral mediante desplazamientos de unos 15–24 px y trazados; gráficos dentro del encuadre. No trasladar las distancias o alturas de escritorio.
- **Movimiento reducido / sin JS:** composición completa y legible en flujo; sin fijación prolongada ni animaciones necesarias para entender el proyecto. No ofrecer botones de movimiento inoperantes.

## Revisión antes de publicar

Guardar evidencia real de inicio, 25 %, mitad, 75 % y final de cada secuencia; recorrer ida y vuelta. Revisar las mismas posiciones en EN/ES, 1440×900, 1280×720, 1000×680 y móvil desde 320 px. Comprobar orientación/redimensionado, anclas, teclado y preferencia reducida.

Preguntas de aceptación:

1. ¿Se percibe una transformación sin buscarla? ¿Las gafas y el guante cambian de lado de verdad?
2. ¿Hay texto sustantivo durante las transiciones y tiempo estable suficiente para leer?
3. ¿El hilo conecta los tres momentos, en lugar de ser un adorno distinto en cada sección?
4. ¿Las capas se mantienen fuera de las cajas de texto, también a mitad del movimiento?
5. ¿La representación sigue pareciendo una visión conceptual y no una demostración funcional?

La existencia de este storyboard no acredita pruebas. Los estados observados, fallos corregidos y límites reales pertenecen al registro de revisión y al progreso del rediseño.
