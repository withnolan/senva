# SENVA — una conversación con espacio

22 de octubre de 2026. Dirección para la corrección solicitada tras la recuperación del movimiento. Este documento sustituye las decisiones tipográficas del brief anterior; conserva misión, hechos, paleta, logo y movimiento nativo.

## Lo que falla en la versión revisada

Revisión de HTML/CSS/SVG y de las capturas existentes `senva-motion-return-hero-start.jpg`, `senva-motion-return-frame-05.jpg` y `senva-motion-return-practice-100.jpg`. No es una nueva prueba de movimiento continuo.

1. **La tipografía comprime y debilita el contenido.** Manrope a peso 500 casi en toda la página y un tracking de −0,065 em en portada producen titulares delgados y apretados. Navegación de 11–12 px y leyendas de 9–10 px dejan los hechos importantes en una escala secundaria excesiva. La jerarquía depende demasiado del tamaño, sin contrastes suficientes de peso o composición.
2. **La mitad de la visión parece una colisión accidental.** En la captura intermedia, la lectura A ha salido casi por completo y la B aparece cortada abajo, mientras un campo circular y dos dispositivos ocupan casi toda la pantalla. Las etiquetas del guante quedan tan transparentes que no acompañan al objeto. Una captura sin intersecciones no garantiza una composición comprensible.
3. **Los SVG no tienen la calidad editorial necesaria.** Dos bustos casi reflejados, sin brazos ni una situación cotidiana, expresan poco. El pelo azul noche se pierde sobre el mismo fondo y deja rostros flotantes. Las gafas frontales parecen un icono ampliado; el guante es una palma abierta sin suficientes detalles de objeto textil. El trazo compartido parece un garabato aislado.
4. **El experimento parece una ficha de formulario.** Cabeceras pequeñas, muchas líneas horizontales y un icono pegado a una curva. La gráfica no organiza la información ni ayuda a comprender qué se investigaría.

## Referencias consultadas y transferencia limitada

Fuentes primarias consultadas en web el 22 de octubre de 2026. Se ha revisado su contenido y jerarquía publicada; no se atribuye aquí una inspección de su movimiento cuadro a cuadro.

- [XRAI Glass](https://xrai.glass/): una promesa breve de comunicación seguida de una relación clara entre conversación, subtítulos y gafas. Transferir la claridad del recorrido; SENVA no puede adoptar sus capacidades, métricas, clientes, testimonios ni demostraciones de producto.
- [Ava](https://www.ava.me/): el propósito de participación se conecta con situaciones concretas y direcciones de uso. Transferir esa concreción humana; no importar sus afirmaciones de precisión, disponibilidad ni su presentación como servicio operativo.
- [TuffStudy](https://tuffstudy.com/): título directo, pasos breves, una representación visual asociada a cada explicación. Transferir alternancia y foco de lectura. No copiar interfaz, identidad o vocabulario educativo como misión de SENVA.
- [Instrument](https://www.instrument.com/): referencia complementaria de composición, propósito conciso y separación entre bloques de mensaje y trabajo visual. No convertir SENVA en una galería de agencia.

## Tipografía concreta

**Bricolage Grotesque** para titulares, peso 550–600, anchura normal y tamaño óptico de display. **Instrument Sans** para cuerpo, navegación y datos, pesos 400–600. Dos voces diferenciadas: expresividad humana en el mensaje y precisión en la explicación. El logo conserva su fuente y proporciones actuales.

Ambas familias tienen licencia SIL OFL 1.1 verificada en sus fuentes originales:

- [Bricolage: proyecto del autor](https://github.com/ateliertriay/bricolage), [licencia](https://raw.githubusercontent.com/google/fonts/main/ofl/bricolagegrotesque/OFL.txt), [variable TTF oficial](https://raw.githubusercontent.com/google/fonts/main/ofl/bricolagegrotesque/BricolageGrotesque%5Bopsz%2Cwdth%2Cwght%5D.ttf).
- [Instrument Sans: proyecto original](https://github.com/Instrument/instrument-sans), [licencia](https://raw.githubusercontent.com/google/fonts/main/ofl/instrumentsans/OFL.txt), [variable TTF oficial](https://raw.githubusercontent.com/google/fonts/main/ofl/instrumentsans/InstrumentSans%5Bwdth%2Cwght%5D.ttf).

Alojar localmente, preservar licencias y usar `font-display:swap`. Los TTF oficiales pesan aproximadamente 408 y 194 kB; una conversión WOFF2 o subconjunto latino que conserve ES/EN puede reducirlos, pero debe documentarse si se hace. No añadir solicitudes a un CDN de fuentes.

Escala orientativa, ajustada después a EN y ES reales:

| Uso | Escritorio | Móvil | Criterio |
| --- | --- | --- | --- |
| Portada | 84–104 px | 44–54 px | Interlineado 0,98–1,05; tracking −0,035 a −0,045 em, sin estrechar artificialmente. |
| Sección | 54–72 px | 34–44 px | Dos o tres líneas claras, sin huérfanas forzadas. |
| Lectura principal | 17–19 px | 16–18 px | Interlineado 1,5–1,65; medida 45–65 caracteres. |
| Navegación y botones | 14–15 px | 14–15 px | Contraste claro, área táctil suficiente. |
| Leyendas y límites | 12–14 px | 12–14 px | No depender de opacidad de progreso para ser legibles. |

## Composición y arte

Una retícula clara y tres escalas: mensaje, imagen, explicación. Evitar que cada bloque empiece con el mismo título a la izquierda, texto pequeño a la derecha y una línea debajo. Reducir etiquetas en mayúsculas, bordes y numeración ornamental. Usar el contraste entre azul noche y blanco cálido para ordenar escenas; turquesa para relaciones y decisiones, no para rellenar todos los detalles.

- **Portada:** titular protagonista, misión breve, CTA y estado de idea visibles desde el comienzo. Imagen con un campo de conversación en el lado opuesto, figuras distintas y contacto visual. Cuerpo y pelo deben separarse del fondo por color plano. El recurso compartido debe conectar de verdad los dos lados de la composición, sin parecer datos capturados. Si no se rehace el arte con calidad, es preferible reducirlo y componer bien que ampliar un dibujo deficiente.
- **Visión:** retícula aprobada para implementar: dos lecturas sucesivas en la columna izquierda y composición sticky dentro de la columna derecha. Una dirección de conversación por vez con su texto completo. La transición invierte foco y sentido dentro de la zona de arte, sin cruzar dispositivos por encima del documento ni depender de guardas de colisión. Etiqueta de concepto y límite visibles durante el cambio. Dar aire a los objetos sin convertirlos en iconos gigantes. Si las columnas no dejan una medida de lectura suficiente, volver a flujo normal antes de estrechar ambas zonas.
- **Dispositivos:** proporciones coherentes, mismo grosor óptico, masas planas. Cuff, panel o costura distinguen el guante de una mano desnuda; no añadir indicadores luminosos, pantallas activas ni tecnología resuelta. No inventar signos, sensores, marcas o arquitectura.
- **Experimento:** separar el guante de una hoja de preguntas mediante un trazado que llegue a una pregunta concreta. No simular dashboard, puntuaciones o datos. Una composición abierta, con menos reglas horizontales, conserva las preguntas y el carácter de hipótesis.
- **Equipo y cierre:** fotografías pequeñas pero presentes, estudios con tamaño de lectura normal, LinkedIn claros. No aplicarles otro recorrido largo.

## Storyboard y sentido del movimiento

| Bloque | Inicio | Mitad | Reposo | Salida |
| --- | --- | --- | --- | --- |
| Portada | Mensaje, misión y estado disponibles; imagen separada en dos lados. | Una aproximación lateral suave acerca las figuras/campos y extiende el vínculo. | Composición equilibrada; texto estable y sin movimiento ambiental constante. | El vínculo conduce al propósito sin arrastrar la portada completa. |
| Visión A → B | Voz, gafas y subtítulos agrupados; explicación A completa. | La relación cambia de sentido con desplazamiento corto del grupo y cambio de foco. Evitar un instante vacío donde A haya salido y B aún no entre. | Guante + rostro/cuerpo/espacio agrupados; explicación B y arquitectura abierta legibles. | El gráfico libera el sticky antes de la siguiente explicación; no tapa validación. |
| Primera hipótesis | Pregunta y guante visibles. | El vínculo se dibuja y la hoja se asienta 30–50 px; sin una gran rotación de formulario. | Preguntas completas y límite respecto a traducción natural a tamaño legible. | Vuelta al flujo directo para validación/equipo. |

El texto en flujo no debe seguir un suavizado que lo desplace con retraso respecto al scroll. Se puede amortiguar únicamente el progreso decorativo con un asentamiento breve, sin capturar rueda, crear inercia de página o mantener un bucle en reposo. Calcular geometrías estables tras fuentes, cambio de idioma y resize; evitar alternar lecturas y escrituras de layout dentro de cada actualización.

Las relaciones visuales se animan como **grupos completos**, incluyendo etiquetas. La mitad debe conservar un foco: no aceptar dos grupos al 50 % de opacidad superpuestos y sin jerarquía, ni un dispositivo nítido acompañado de etiquetas casi invisibles. La zona del concepto y su aviso no entran en el fundido. Los desplazamientos pequeños sirven para pasar entre dos composiciones claras; la nueva retícula elimina el cruce de toda la pantalla que causaba el problema anterior.

## Criterios de aceptación de esta corrección

- Comparar portada, visión A, mitad y B al mismo tamaño; cada estado debe parecer diseñado y tener una lectura clara. No aceptar una mitad solo porque no hay errores de consola.
- Volver atrás produce la misma composición y no destellos de etiquetas.
- El usuario puede detenerse en cualquier punto y leer la explicación disponible. Ninguna etiqueta esencial se queda al 5–10 % de opacidad durante medio recorrido.
- Revisar 320 px, móvil habitual, tablet, 1280×720 y escritorio alto en EN/ES. No forzar saltos de línea comunes si un idioma queda peor.
- Movimiento reducido y sin JS muestran relaciones completas en flujo, sin permanecer en un estado intermedio.
- No afirmar fluidez/FPS por una tira de capturas. Coordinación observa navegación real y documenta límites.

## Propiedad y comprobaciones

Este encargo modifica exclusivamente `docs/visual-reset-brief.md`. No se han instalado fuentes, skills, dependencias ni modificado implementación o contenido. Investigación web, licencias y rutas oficiales comprobadas; crítica visual basada en capturas guardadas. La integración, revisión en navegador y publicación corresponden a coordinación.
