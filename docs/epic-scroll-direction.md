# SENVA — una conversación ocupa la pantalla

23 de octubre de2026. Dirección final de la iteración sobre `0665049`. [Comprobaciones y límites actuales](redesign-progress.md#integrated-cinema).

## Diagnóstico y decisiones compartidas

Dirección creativa y arquitectura señalaron el mismo problema: siete bandas recortadas se perciben como separadores. Aumentar su tamaño interior no cambia la categoría del efecto. Se aceptan tres escenarios completos, fases claras y mayor separación editorial. Se descarta alargar por igual siete cortinillas o agregar más contenido para justificar distancia.

Coordinación decide integrar el contenido existente en los escenarios. Así cada pantalla ofrece lectura, no un objeto flotando durante un intervalo vacío. El HTML sirve el contenido una sola vez; no hay reparentado mediante JavaScript. El movimiento representa relaciones, no sensores o traducción funcional.

## Sistema y storyboard implementado

Base: noche `#102e3b`, papel `#f8f7f2`, mint `#8de0d4`, turquesa oscuro `#08777b`. Apoyos fríos: azul `#174a69`, hielo `#ddebf5`, lavanda `#c8d3f4`. Tipografías, logo y recursos2D existentes conservados. Texto pequeño navy sobre hielo/lavanda y papel/mint sobre fondos oscuros.

| Escenario | Inicio | Cruce | Reposo y salida |
| --- | --- | --- | --- |
| **La visión** | Titular y explicación disponibles sobre hielo; gafas pequeñas a la izquierda. | Dos cintas recorren el ancho en sentidos opuestos; gafas crecen y atraviesan el escenario. | Las cintas anchas salen. El campo queda mint, gafas a la derecha y un trazo fino enlaza con las dos direcciones del diagrama. Etiquetas protegidas del arte. |
| **El primer experimento** | Texto estable sobre azul; la hoja real empieza entrando desde la derecha. | Planos lavanda/mint cambian el encuadre lateral. La hoja, con su guante y preguntas, crece y gira en el plano. | Fondo noche; hoja completa y recta. El principio de comunicación aparece después en el flujo. |
| **Las decisiones** | Contenido existente sobre lavanda. | Tres superficies de papel/hielo/mint atraviesan el viewport con diferentes desplazamientos. | Se alinean y una superficie de papel entrega el paso a investigación. Las decisiones siguen visibles durante todo el recorrido. |

Tracks210/225/205svh si el escenario cabe realmente bajo cabecera; si no, altura natural y lectura normal. Las escenas contienen reposo tras el88% y permiten regresar con el scroll. Mayor aire entre propósito, visión, investigación, equipo, Xiji y contacto. Los cuatro pasos secundarios son más breves.

## Críticas incorporadas después de ver capturas

- Dirección creativa: los tres estados de visión ya se distinguen, pero el final seguía pareciendo un cruce. Se retiran las cintas grandes durante el reposo. No se añaden partículas ni más efectos repetidos.
- Revisión bilingüe: quitar saltos obligatorios, no compensar líneas EN/ES; subir biografías a14 px. Se aplican ambas propuestas. A1280×720 se observaron visión EN1/ES2 líneas y práctica EN2/ES3.
- Revisión independiente: turquesa oscuro sobre hielo/lavanda tiene contraste insuficiente en etiquetas pequeñas. Se sustituyen esos acentos por navy. Se corrigen etiquetas que se perdían sobre cintas y una máscara rectangular visible en práctica.
- Arquitectura: preservar fracción del track al traducir, medir altura real y retirar sticky si no cabe. Se implementa. El caso de cambio entre lectura natural y fijada se cubre en código; su prueba visual específica sigue pendiente.

## Variantes y límites

Móvil conserva color y recursos gráficos en flujo, sin fijaciones prolongadas y sin cortar la lectura para simular duración. Gafas con anchura máxima64vw; práctica sin desplazamiento lateral. Sin JS/movimiento se retiran solo arte y fijación, manteniendo todos los textos. Los saltos dependen del idioma y del ancho, sin alturas compensadas.

Dirección revisó capturas de escritorio y distinguió composición, escala y reposo. Coordinación observó ida/vuelta e idiomas en navegador antes del bloqueo posterior de acceso. Revisión estática independiente cubrió móvil, fallback y controlador; no equivale a pruebas visuales. El registro distingue lo observado de lo pendiente.
