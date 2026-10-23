# SENVA — propuesta breve de texto

23 de octubre de 2026. Propuesta de 17 claves EN/ES para la petición de dar más fuerza e inspiración a las palabras. [Reemplazos compatibles con el diccionario](copy-revision.json). Coordinación decide qué integrar; este archivo no modifica el sitio ni los hechos del proyecto.

## Criterio

La emoción parte de poder aportar algo, compartir una idea y prestar atención a otra persona. La tecnología permanece en condicional. Los momentos cotidianos siguen siendo motivaciones imaginadas, nunca testimonios ni resultados. El cambio evita imágenes de rescate, promesas de traducción o insinuaciones de que las personas sordas carecen de lengua.

Se conservan el titular de portada «Que una conversación abra posibilidades», «Dos direcciones. Una conversación», «Dos perspectivas. Un punto de partida compartido» y «Cada gesto nos acerca». Ya forman una secuencia reconocible; añadir metáforas en todos los titulares diluiría esa identidad. Tampoco se toca el estado de idea, los avisos de concepto, los límites lingüísticos, los perfiles/estudios/LinkedIn, las colaboradoras anónimas ni el estado de candidatura de Santiago a Xiji.

| Claves propuestas | Motivo |
| --- | --- |
| `heroLead`, `purposeBody` | Relacionar la investigación con compartir, participar y encontrarse; presentar a cada persona como alguien con algo que aportar. |
| `situation1`, `situation2`, `situation3` | Pequeñas escenas reconocibles, con posibilidades abiertas y sin atribuir experiencias a usuarios investigados. |
| `visionIntro`, `voiceBody` | Hacer imaginable el concepto y la atención a otra persona; mantener «podría», «imaginamos» y la investigación pendiente. |
| `practiceTitle`, `practiceBody` | Dar al experimento una pregunta humana: qué ayuda a practicar. Mantener LSE, docentes, estudiantes adultos, sensores, feedback y primera hipótesis. |
| `experimentQuestion2`, `experimentNext` | Presentar el feedback como pregunta y reservar la elección de ejercicios a un futuro trabajo con docentes y adultos. |
| `planIntro`, `plan1Title`, `planDecision` | Escucha y decisión compartidas, con un plan aún no iniciado y disposición a descartar el hardware. |
| `teamBody` | Conectar las áreas de estudio con una motivación común sin inventar competencias profesionales o experiencia demostrada. |
| `xijiGoal` | Expresar una motivación de aprendizaje concreta, sin tocar la candidatura ni insinuar admisión. |
| `contactBody` | Invitar a aportar una perspectiva real mediante los perfiles ya existentes. |

## Integración y comprobación

El JSON contiene el mismo conjunto de 17 claves en ambos idiomas. Todas existen en el diccionario actual. Son cadenas de texto sin HTML ni saltos de línea forzados. Al integrar, actualizar tanto el diccionario como el respaldo inglés de HTML y volver a medir las reservas EN/ES existentes: las traducciones son naturales y pueden ocupar distinto número de líneas. No igualar líneas ni recortar el texto para ajustar la escena.

Se han leído `AGENTS.md`, `docs/project-brief.md`, la entrada vigente de `docs/redesign-progress.md`, `docs/motion-revision-direction.md` y el diccionario completo de `script.js`. Se comprueban estructura JSON, paridad, existencia de claves y ausencia de saltos forzados mediante script. No se ha revisado el texto maquetado en navegador; el bloqueo de acceso sigue documentado y no se intenta eludirlo.

La captura aportada por el usuario muestra un gran campo lavanda con borde superior recto y dos recortes laterales en la transición equipo/Xiji. Es una observación de esa imagen, no del sitio en vivo. Su corrección corresponde a coordinación/desarrollo de movimiento; esta propuesta no modifica CSS.

Archivos creados: `docs/copy-revision.json` y `docs/copy-revision.md`. Pendiente: selección e integración por coordinación y revisión visual bilingüe cuando exista acceso.


Integración: se aceptan las17 claves. Coordinación acorta práctica y sustituye la pregunta retórica de voz por una aspiración directa. El respaldo inglés de HTML se actualiza junto al diccionario; los límites y perfiles no se cambian. Ver comprobaciones y limitación visual en [redesign-progress.md](redesign-progress.md#continuous-glasses).
