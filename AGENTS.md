# SENVA — forma de trabajo del equipo

## Encargo y prioridades

La web debe comunicar el proyecto y ofrecer una experiencia animada con personalidad. La organización de agentes de AVIVA es una referencia de colaboración, **no una dirección estética ni una razón para retirar las animaciones de SENVA**.

Leer primero `docs/project-brief.md`, la entrada actual de `docs/redesign-progress.md` y el brief vigente. El último mensaje del usuario prevalece sobre este documento y sobre decisiones históricas.

Conservar logo, azul noche/blanco cálido/turquesa, EN/ES, fotografías, nombres, estudios y LinkedIn. Sin naranja ni capacidades inventadas. La petición vigente autoriza el modelo 3D de gafas existente con giro ligado al scroll, cristal y subtítulos ficticios sobre las lentes; el resto conserva su dirección 2D. La última petición pide escritura continua lenta y reflejos orgánicos solo mientras las lentes están visibles, con pausa y alternativa reducida, y reutilizar una sola escena de gafas entre la introducción y el diagrama. Comunicación y autonomía son la misión; la práctica de LSE es una primera hipótesis independiente. Estado de idea, sin prototipo, entrevistas, resultados o alianzas confirmadas.

## Responsabilidades acotadas

- **Coordinación:** decide el alcance, integra críticas, revisa el resultado en navegador, mantiene documentación y realiza Git.
- **Dirección creativa:** escribe un storyboard breve con inicio, mitad, reposo y salida; explica qué significa cada movimiento y dónde puede leerse el contenido.
- **Desarrollo de interacción:** implementa HTML/CSS/JS siguiendo el brief; declara qué archivos modifica y los límites observados.
- **Arte:** cuando haga falta, trabaja únicamente en los recursos asignados y comprueba su aspecto antes de integrarlos.
- **Revisión independiente:** busca problemas de movimiento, composición, contenido y accesibilidad; entrega una lista priorizada de fallos concretos, no una aprobación por ausencia de errores de consola.

No editar archivos que otro agente tenga asignados. Comunicar dependencias al coordinador. Cada tarea termina con archivos cambiados, comprobaciones reales y pendientes. No copiar la identidad, contenido o bibliotecas de AVIVA por haber estudiado su equipo.

## Criterios de revisión

- El movimiento protagonista debe resultar evidente al comparar inicio, mitad y final. Un cambio de escala del 2 % o un fundido aislado no sustituye una coreografía.
- La dirección vigente está en `docs/motion-revision-direction.md`: variedad de curvas, trazos y zooms; retirar grandes paneles rectangulares decorativos. EN/ES reserva el máximo natural por grupo sin igualar líneas.
- Mantener continuidad entre escenas, intervalos de lectura y un foco claro. No ocultar texto principal durante largos recorridos ni añadir pantallas vacías para justificar duración.
- Desplazamiento vertical reversible, sin saltos obligatorios. La petición vigente autoriza Lenis local para suavizar con inercia la rueda y el trackpad de escritorio; conservar el desplazamiento del documento, teclado y anclas. La última petición oculta solo la barra visible mediante CSS, sin bloquear el scroll. Móvil, entrada táctil, movimiento reducido o biblioteca ausente mantienen desplazamiento nativo. No añadir otros motores de scroll.
- Móvil conserva una adaptación con personalidad. Movimiento reducido y ausencia de JS ofrecen lectura completa, sin fijaciones prolongadas.
- Revisar ambos idiomas, estados intermedios, ida/vuelta, anclas, foco, redimensionado y dispositivos pequeños en navegador. Distinguir simulaciones de pruebas reales.
- No dar por terminado un rediseño animado solo porque pasa las comprobaciones técnicas: coordinación y revisión creativa deben observar el movimiento y la composición.

## Estado y entrega

Actualizar `docs/redesign-progress.md` tras cada bloque de trabajo. Guardar capturas fuera de los recursos de producción. Mantener README centrado en el proyecto; detalles de implementación en la guía técnica.

Seguir la autorización vigente del usuario para commit/push. Actualmente ha pedido dejar todos los cambios pusheados; una instrucción posterior más concreta puede modificarlo. Sin force push ni cambios de configuración no solicitados. Comprobar el build del SHA enviado y separar ese estado de las verificaciones locales.
