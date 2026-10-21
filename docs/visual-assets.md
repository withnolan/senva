# Recursos — Una conversación en movimiento

La dirección actual utiliza **SVG 2D por capas**, con colores planos azul noche, blanco cálido y turquesa. Los objetos son conceptos sin hardware definido; no representan un prototipo, especificaciones, sensores interiores o capacidades existentes. El guante está vacío y no representa un signo.

## Fuentes activas y procedencia

Dibujos propios realizados directamente en SVG y redibujados para la coreografía lateral el 21 de octubre de 2026, sin recursos de terceros ni generación de renders. Sin 3D, texturas, modelos o bibliotecas externas.

| Recurso | Fuente | Integración |
| --- | --- | --- |
| Gafas frontales | `assets/graphics/glasses.svg` | `#drawing-glasses` en las definiciones de `index.html` |
| Guante vacío | `assets/graphics/glove.svg` | `#drawing-glove` en las mismas definiciones |
| Voz, contexto y conexiones | SVG dentro de `index.html` | Capas y trazados del mismo escenario; versiones estáticas |
| Subtítulos y práctica | HTML en `index.html`, traducciones de `script.js` | Adaptables y accesibles; no imágenes de interfaces |
| Vista previa social | `assets/social-card.svg` / `.png` | Fuente vectorial y exportación PNG real 1200 × 630 |

Las gafas y el guante comparten curvas, un único contorno visible y un peso de trazo proporcional. Se han retirado el borde exterior duplicado, los reflejos y las líneas interiores redundantes. Las gafas mantienen montura frontal y dos acentos de bisagra; el guante, cinco dedos separados con longitudes distintas, pulgar lateral y muñeca corta, sin anatomía dibujada en su interior. La señal de voz y la información adicional son diagramáticas; no capturan datos.

El contraste se adapta sin añadir otro borde: los trazados utilizan `var(--device-line,#102e3b)` y las lentes `var(--lens-fill,#f8f7f2)`. Sus valores de respaldo sirven en fondo blanco cálido. Sobre azul noche pueden heredarse `--device-line:#f8f7f2` y `--lens-fill:#102e3b`. El guante conserva el relleno turquesa plano. Mantener estas variables al copiar los trazados al HTML evita mantener dibujos diferentes para cada fondo.

La vista previa social presenta el titular breve centrado, con los dos objetos conectados debajo sobre un fondo abierto. Conserva logo, lema, estado y avisos EN/ES. El SVG es la fuente; el PNG real de 1200 × 630 se ha exportado con Sharp y revisado visualmente. Esta comprobación del recurso no equivale a una prueba nueva del navegador o del recorrido.

## Editar

1. Editar los trazados de `assets/graphics/glasses.svg` o `glove.svg`, conservando centro y `viewBox` para no alterar las posiciones.
2. Copiar el interior del SVG actualizado al grupo correspondiente de `.drawing-definitions` en `index.html`. Preservar `fill="none"` al integrar los trazados o exportarlos; los rellenos intencionados son explícitos. El mismo grupo se reutiliza con `<use>` en todo el documento; no dibujar variantes por escena.
3. Revisar las posiciones y escalas del controlador de `script.js` y las zonas seguras de texto en CSS. Las anotaciones pertenecen al escenario HTML. No incrustar texto en los dibujos.
4. Los SVG estáticos de móvil y alternativas conservan los mismos objetos, con un encuadre adaptado. Su texto está fuera del SVG cuando es posible. Revisar figuras, avisos y detalles abiertos en ambos idiomas.
5. Si cambia la portada, actualizar `social-card.svg` y exportar PNG de 1200 × 630. La exportación actual se hizo con Sharp disponible en el entorno de trabajo; no es dependencia del repositorio ni de ejecución. Puede usarse un editor SVG equivalente.

La página no descarga imágenes para estos objetos: sus definiciones están en el HTML. Solo los retratos reales se cargan como imágenes, con `loading="lazy"` y dimensiones reservadas. La vista previa social no forma parte de la carga del recorrido. No hay hotlinks ni servicios de pago.

## Límites de representación

- La frase de subtítulos es ficticia; no se atribuye a una persona o un signo.
- La segunda dirección exige información facial, corporal y espacial adicional pendiente de resolver. El guante no se presenta como traductor completo.
- La interfaz de práctica plantea preguntas de investigación. No hay porcentajes, mediciones, reconocimiento validado, puntuaciones ni correcciones lingüísticas concretas.
- La escena animada comparte objetos, no evidencia de una capacidad funcional. Los avisos de concepto son HTML visible.
- Logo y retratos originales conservados sin modificaciones.

## Iteración anterior

El historial Git conserva las versiones SVG anteriores al redibujado. Los PNG/WebP de `assets/illustrations/` pertenecen a la versión del 20 de octubre. No se solicitan ni se muestran en la web actual; la pareja y sus láminas se han retirado de la composición. Se conservan los archivos existentes y su historial para no borrar recursos previos. No se han creado nuevas imágenes raster para el recorrido.
