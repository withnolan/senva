# SENVA — Revisión de la coreografía recuperada

## Alcance

Se conserva el contenido de `d0ba6f9` y se implementa [el storyboard](motion-direction.md). La referencia AVIVA corresponde a organización de agentes: dirección creativa, desarrollo con propiedad de archivos, revisión independiente y coordinación. No prescribe una web estática ni la estética de SENVA.

## Revisión independiente

Dirección creativa comparó capturas de visión en inicio, 25 %, mitad, 75 % y final, y práctica en 25 %, mitad y reposo. Confirmó una transformación espacial evidente y una jerarquía legible. Detectó el cruce de las gafas con el aviso conceptual en la primera mitad; la muestra corregida mantiene separación.

Revisión técnica independiente inspeccionó el controlador, respaldo accesible y muestras de composición. Señaló riesgos concretos de cruce con textos largos, entrada de la hoja a 1000 px y continuidad entre segmentos del hilo. La coordinación verificó los dos primeros en navegador. La continuidad es un relevo entre composiciones mediante guante y lenguaje de línea; no es un único objeto que atraviese toda la página.

Estas revisiones se basan en código y capturas, no en pruebas con usuarios ni en medición de rendimiento. La navegación real la comprobó la coordinación.

## Hallazgos y correcciones

| Hallazgo | Corrección | Comprobación |
| --- | --- | --- |
| La cuadrícula anterior mantenía el escenario en media pantalla y estrechaba el texto a 169 px. | Una sola columna para la superposición del escenario y la historia; dos zonas de lectura reales. | Captura a 1280×720: copia de 432 px y escenario abierto. |
| Las gafas invadían la banda del aviso conceptual en mitad del cruce. | Carril limitado por las cajas reales de la leyenda y el texto saliente. | Mitad repetida EN/ES, sin cruce observado con el aviso. |
| Las etiquetas de la ruta inversa desaparecían del árbol accesible en modo animado. | Respaldo de rutas con ocultación solo visual; stage decorativo. | Código revisado y texto completo conservado. |
| Las distancias de las personas se reducían al escalar el SVG. | Compensación por anchura real de la ilustración. | Distancias de 44 px en escritorio y 20 px en móvil, calculadas desde el tamaño del recurso. |
| Las etiquetas inferiores podían acercarse demasiado al reducir el escenario. | Separación basada en altura real del bloque, con margen de 14 px. | A 1000×680 ES: extremo inferior 594,45 px y siguiente etiqueta desde 608,46 px. |
| La hoja entraba parcialmente fuera del marco a 1000 px. | Se revisó su entrada; el borde puede atravesar el encuadre y el texto permanece dentro. | En 25 % y 50 %, sin texto visible cortado. No hizo falta reducir la coreografía. |

## Evidencia y límites

La coordinación guarda las capturas fuera del repositorio, con prefijo `senva-motion-return-`. La matriz y las posiciones reales están registradas junto a ellas. El estado de cierre, las alternativas accesibles y el despliegue se documentan en [redesign-progress.md](redesign-progress.md#motion-return).

Un resultado sin desbordamientos no acredita por sí solo calidad de animación. La revisión también comparó composiciones intermedias y observó cambio de lado, trazado y reposo. No se asignan puntuaciones subjetivas como prueba de calidad.
