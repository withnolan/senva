# Revisión editorial de SENVA — 22 de octubre de 2026

## Encargo

Mejorar sustancialmente la web después de revisar cómo trabaja AVIVA con agentes. El contenido de SENVA debe orientar el diseño. Se conservan logo, paleta azul noche/blanco cálido/turquesa, EN/ES, biografías, fotos, enlaces y estado de idea. Sin 3D ni capacidades inventadas.

## Método aplicado

Fuentes primarias consultadas: [contrato del equipo AVIVA](https://github.com/withnolan/aviva/blob/main/CLAUDE.md), [coordinación](https://github.com/withnolan/aviva/blob/main/.claude/agents/project-lead.md) y estructura pública de `.claude/agents`, `work/` y `work/reviews/`.

Se adoptan responsabilidades acotadas, brief común, separación de contenido/arte/implementación, revisión independiente y correcciones observadas antes de entregar. No se adoptan su identidad, parodia, contenido, 3D ni bibliotecas de scroll. No se ejecuta código del repositorio de referencia.

Responsables de esta revisión:
- Coordinación e implementación: agente principal; HTML/CSS/JS, integración y Git.
- Auditoría editorial y de experiencia: agente independiente, solo lectura.
- Investigación del método AVIVA: agente independiente, solo lectura.
- Ilustración: agente de arte, únicamente `assets/graphics/conversation.svg`.

## Diagnóstico y decisión

El anterior recorrido de cinco poses sobredimensionaba guantes y gafas, dilataba el acceso al proyecto y ocultaba texto durante transiciones. Las comprobaciones funcionales anteriores no demostraban calidad visual.

Dos direcciones consideradas:
1. Continuar el objeto viajero con nuevos dibujos: conserva la arquitectura, pero mantiene el protagonismo del hardware y la complejidad.
2. **El espacio común — elegida:** portada humana de alto contraste, escenas editoriales con contenido visible, diagrama bidireccional reunido, experimento acotado y decisiones de validación. Movimiento breve y subordinado a la lectura.

## Contrato de contenido

La fuente de hechos es [project-brief.md](project-brief.md). Primero comunicación, autonomía y encuentro; después visión de asistencia bidireccional; aprendizaje como primera hipótesis independiente. Los guantes no traducen por sí solos una lengua completa. Captación facial/corporal/espacial, arquitectura y utilidad siguen abiertas. Codiseño futuro, sin investigación ya realizada. Xiji es una candidatura de Santiago, sin admisión ni colaboración implícita.

## Criterios de aceptación

- Portada identifica misión y estado sin esperar una animación.
- Ambas direcciones de comunicación se entienden en el mismo bloque; limitaciones esenciales visibles.
- Se accede al aprendizaje y validación sin atravesar transiciones vacías.
- Ningún texto principal se oculta según el scroll; sin secuestro del desplazamiento.
- EN/ES completos, sin pérdida de posición relevante al traducir.
- Móvil desde 320 px, tablet, escritorio y ventana baja sin recortes o desbordamiento horizontal.
- Teclado, anclas, menú móvil, movimiento reducido y respaldo sin JavaScript.
- Verificación visual de estados intermedios y revisión independiente del resultado.

## Resultado y comprobaciones

La auditoría inicial identificó cinco problemas: propósito subordinado al hardware, una explicación fragmentada en dos capítulos, 8,75 alturas útiles con largos tramos sin texto, franjas de lectura estrechas y exceso de orientación persistente. La implementación nueva los aborda con lectura continua y un único diagrama bidireccional.

La segunda revisión independiente de código y capturas no encontró bloqueos de contenido o accesibilidad. Señaló la herencia accidental de la nueva fuente en el logotipo; se corrigió conservando Arial, peso 750 y espaciado original para la marca. Esta revisión es crítica editorial/técnica, no una prueba con usuarios.

La coordinación comprobó en navegador 320×844, 390×844, 768×1024, 1024×768, 1440×900, 1280×720 y 844×390 en ambos idiomas: sin overflow horizontal o recortes de texto medidos. Revisó visualmente la composición y conservó las fotografías y hechos del brief. El cierre de pruebas y publicación se registra en [redesign-progress.md](redesign-progress.md#editorial-review).

## Storyboard de movimiento implementado

| Momento | Inicio | Mitad | Final | Contenido |
| --- | --- | --- | --- | --- |
| Portada | Marca disponible; mensaje ya legible | Entrada escalonada de 12 px, menos de 1 s | Reposo completo | Misión y estado antes de cualquier scroll |
| Visión A → B | Ambas rutas visibles | Énfasis de escala de hasta 2 % y desplazamiento de hasta 5 px | Diagrama sale con su sección | Textos y límites siempre visibles |
| Salida a experimento | Lectura normal | Cambio de fondo en el flujo del documento | Hipótesis de aprendizaje en navy | Sin superposición, pin ni espera nueva |
| Móvil / reducido | Secciones normales | Sin fijación del diagrama | Todo el contenido sigue disponible | Navegación y lectura prioritarias |

La adaptación del método es deliberadamente pequeña: se toma la disciplina de revisión y se evita reproducir la complejidad del proyecto de referencia.
