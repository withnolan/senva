# SENVA — óptica, conversación y un ritmo común

23 de octubre de 2026. Dirección para la petición actual. Lectura de `AGENTS.md`, síntesis del proyecto, última entrada de progreso, HTML, CSS y controlador. No se ha observado esta revisión en navegador: sigue pendiente el acceso bloqueado. Esta propuesta no cambia contenido, logo, retratos ni paleta.

## Diagnóstico concreto

Los rectángulos no son un accidente aislado: cuatro umbrales usan `.scene-plane`; práctica tiene tres `.practice-plane`; validación tiene tres `.decision-sheet` y un `.decision-wash` que escala desde un lateral. Repetir esa gramática domina la página. La hoja de práctica es contenido y puede conservar su forma; son sus enormes planos de fondo los que sobran.

El ritmo tampoco es homogéneo. El cruce de las gafas se reparte en un 44% del escenario, pero voz desaparece en solo un 10% del progreso A/B y manual aparece en un 14%. La práctica desplaza la hoja 22vw en el primer 22% y el fondo valida con tres entradas simultáneas. Esto produce carreras locales dentro de escenas lentas. Más duración total no corrige esa diferencia.

## Regla compartida de movimiento

Un gesto protagonista por sección. Entrada 0–0,20; desarrollo 0,20–0,70; desaceleración 0,70–0,88; reposo 0,88–1. Mantener el texto legible durante todos los tramos. Interpolar posiciones amplias durante al menos un 60–70% del recorrido; no combinar tres `smoothstep` estrechos con desplazamientos de pantalla completa. Los fundidos duran un 25–35%, acompañados de movimiento corto; el foco nunca depende de un texto transparente. Todo se revierte al subir.

Usar geometría óptica en lugar de puertas: elipses grandes, una apertura circular, un arco y un zoom de composición. No convertir cada transición en el mismo círculo. Las formas viven detrás del contenido, con `pointer-events:none`; las ampliaciones se recortan en el escenario, nunca en `html/body`. Evitar filtros de desenfoque grandes, partículas o bucles continuos.

## Storyboard propuesto

| Momento | Inicio | Mitad y lectura | Reposo y salida |
| --- | --- | --- | --- |
| Carga y portada | Marca SENVA sobre noche; un arco breve acompaña el primer frame. Sin porcentaje ficticio ni esperar el GLB diferido. | Disolver la cubierta en unos 350–450 ms al estar lista la interfaz; marca → titular → párrafo → acciones, desfases de 70–90 ms, movimiento de 16 px y una ampliación del arte 0,94→1. | Lectura disponible antes de un segundo; nunca capturar scroll ni foco. Solo activar cubierta con JS, retirarla también por límite de seguridad y en errores. En reducido, sin cubierta animada. |
| Propósito → visión | Un aro fino nace del hilo de conversación. | El aro se amplía hasta que su campo de hielo ocupa el fondo; no es una placa que empuja desde el borde. El título permanece firme. | Fondo asentado antes del siguiente encabezado. El aro abandona el encuadre sin una segunda cortinilla. |
| Gafas | Tres cuartos visible junto al extremo izquierdo del área de arte. Mantener giro y centro real del modelo. | Recorrido horizontal continuo de izquierda a derecha durante 0,08–0,86, pasando por el centro en 0,48. Rotación actual de casi 300° acompaña ese cruce sin acelerar la posición en una sola fase corta. | Llegar al extremo derecho en 0,86 y descansar. Si se desea salida completa por el borde, reservar 0,94–1 para ella; no perder el modelo antes del tramo de lectura. |
| Dos direcciones A/B | Voz y gafas completas; un trazo recorre con calma el canal. | Voz se desplaza solo 35–50 px, escala 1→0,94 y funde; guante entra desde la dirección recíproca. Repartir el relevo entre aproximadamente 0,28 y 0,72 del progreso A/B, sin el salto actual de 0,10. | La ruta B permanece estable al menos el último cuarto. Etiquetas y advertencia siguen fijas; no simular reconocimiento ni texto capturado. |
| Primer experimento | Hoja real a escala 0,88; texto estable sobre azul noche. Una elipse mint queda parcialmente fuera del borde. | La hoja crece 0,88→1 y se desplaza como máximo 7–9vw durante 0,08–0,76. La elipse se abre detrás, no tapa la hoja ni el texto. El trazo del guante acompaña el mismo tiempo. | Hoja recta y fondo noche; retirar la elipse con expansión suave fuera del marco. Sin láminas diagonales. |
| Lo que debemos demostrar | Tres decisiones disponibles sobre lavanda. Un arco grande une sus números. | El arco se abre; una única apertura oval de papel crece detrás del conjunto. Las columnas no entran como tarjetas ni cambian su orden. | Papel completo y decisiones en reposo. El zoom afecta al campo decorativo, no agranda el cuerpo de texto. |
| Dos perspectivas / equipo | Ambos nombres y fotos ya legibles. | Acercamiento bilateral corto: los dos perfiles pasan de ±26 px a cero durante unos 0,8 viewport de desplazamiento; fotos 0,94→1. Línea común se dibuja desde el centro hacia ambos lados. | Sin retratos flotantes continuos ni desaparición al salir. Mantener las fotografías originales. |
| Xiji → contacto / final | Curva lavanda conecta el final de Xiji con el fondo noche. | Una apertura de noche se expande desde un centro desplazado; el título de contacto sube 26 px y crece 0,94→1. Los enlaces aparecen con desfases de scroll mínimos, permaneciendo enfocables y visibles. | Texto y enlaces estables en el último tercio; cierre de marca con un único trazo, sin volver a animar cada enlace ni bloquear el footer legal. |

Para el cruce completo de las gafas, calcular el desplazamiento usando el ancho real reservado y el ancho del escenario. En reposo izquierdo/derecho, el extremo de la silueta puede quedar a unos 24–40 px del borde del viewport; el recorrido no debe seguir limitado a `32vw`. Una salida opcional completamente fuera necesita sumar medio ancho visible del objeto a medio ancho del escenario. No asumir que el canvas y la silueta tienen el mismo ancho. En móvil conservar posición estática o un cruce de solo 20–30 px: el texto y el modelo no deben desaparecer por los laterales.

## Cristal y subtítulos conceptuales

Conservar la geometría aprobada. Una superficie ligeramente azulada/turquesa con reflejo ancho permite leer la lente sin parecer un cristal opaco. Los subtítulos flotan sobre la superficie real y giran con ella, nunca como una tarjeta HTML fija encima del canvas. Dos líneas breves de ejemplo, diferenciadas de una transcripción real por la etiqueta de concepto existente y una nota accesible. Sin parpadeos, barridos constantes ni una supuesta respuesta a la voz. Si se desvanece el texto cuando la lente se ve de canto o de reverso, usar un tramo angular amplio para evitar destellos.

## Igual altura EN/ES sin igualar líneas

La petición actual cambia el criterio histórico: ambas lenguas deben conservar la altura y el ritmo de cada bloque aunque ocupen diferente número de líneas. No introducir `br`, limitar líneas, reducir solo el español ni aplicar alturas que corten el texto.

Reservar en los bloques de lectura señalados el máximo de las alturas naturales EN/ES para el ancho y las fuentes actuales. Medir después de `document.fonts.ready` y al cambiar ancho/orientación; usar `min-block-size`, no `height`. Aplicar la reserva al conjunto de titular y párrafo cuando se deba alinear el siguiente recurso; no añadir la diferencia repetidamente a todos sus hijos. Los clones de medición deben ser inertes, ocultos a accesibilidad, fuera de flujo y sin IDs duplicados. El criterio para activar sticky debe basarse también en el máximo bilingüe: no puede ser fijo en EN y flujo normal en ES. Si cualquiera de los dos no cabe, ambos pasan a lectura normal. Sin JS se conserva lectura natural completa.

## Comprobaciones exigidas al integrar

- Comparar 0 / 0,25 / 0,5 / 0,75 / 1 y vuelta en cada escena; prestar atención al relevo A/B y al primer movimiento de práctica.
- Verificar extremo izquierdo, frontal central y extremo derecho de las gafas. Comprobar que la lente deja ver el fondo y el subtítulo permanece dentro del cristal sin aparecer detrás.
- Medir alturas totales y de bloques EN/ES a 1440×900, 1280×720, 768 y 390 px; comprobar 320 px sin recorte. Diferentes líneas son correctas; saltos de altura al cambiar idioma no.
- Carga lenta, fallo GLB, módulo ausente, JS desactivado, reducido, teclado y anclas. La cubierta nunca debe impedir acceder a la página o dejar el foco detrás.
- La nueva microcoreografía no justifica añadir más altura de scroll ni contenido. Mantener intervalos de lectura actuales, retirar paneles rectangulares decorativos y usar un máximo de dos momentos muy llamativos: gafas y apertura hacia contacto.

Archivos de esta tarea: únicamente este documento. Comprobaciones: lectura estática y contraste de fórmulas de progreso existentes. Pendiente: implementación y observación visual real por coordinación.


## Decisiones de integración tras la crítica

La primera implementación sustituyó seis paneles por seis elipses. La revisión independiente señaló que seguía repitiendo una cortinilla; se retiran las aperturas de propósito y equipo y se conectan con curvas SVG, trazo y acercamiento del contenido. Práctica mantiene el zoom real de su hoja y una curva de noche detrás. Validación/contacto conservan aperturas ópticas como acentos.

Intervalos finales: entrada0–0,34, desarrollo0,14–0,80, desplazamiento amplio0,04–0,90, asentamiento0,60–0,94. Las gafas mantienen sus claves de giro originales y usan el ancho del escenario menos la silueta reservada y márgenes, en lugar de32vw. Relevo voz/guante: desarrollo0,24–0,78, fundidos de0,30/0,32 del progreso, movimientos42–45 px. Equipo/cierre se desarrollan durante0,95–1,2 viewports. El texto principal conserva lectura en todo momento.

El loader tiene dos salidas independientes (recursos críticos o límite1600 ms), acepta salida por cualquier interacción y no espera el GLB. Las entradas de marca/acciones se cancelan al recibir foco para no ocultarlo. Las reservas bilingües se aplican a18 grupos independientes, incluidos Xiji y pie. Fuente/idioma/anchura/details disparan la medición con caché. Estos detalles están implementados y comprobados de forma estática/simulada; el movimiento y las alturas reales siguen pendientes por el bloqueo de acceso al navegador.
