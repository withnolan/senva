# SENVA — dos direcciones, una escena

23 de octubre de 2026. Brief vigente para dispositivos y transiciones. Conserva logo, paleta, tipografías, EN/ES, contenido, equipo/contacto restaurados y Lenis local. Referencia: `frontend-design`, aplicada a composición y contención; no añade dependencias.

## Decisión

Sustituir las dos ondas idénticas por tres pasos decorativos distintos dentro del espaciado entre apartados: encuentro de dos recorridos, traslado editorial del guante y apertura hacia las preguntas. Conservan el recorrido solicitado sin añadir contenido. El movimiento protagonista ocurre **dentro del escenario de visión**; práctica tiene un gesto propio.

## Visión A → B

Mantener lectura izquierda y arte sticky derecha. Gafas/voz/subtítulos forman un grupo A; guante/contexto/salida pendiente forman B. Aviso de concepto y pie permanecen estables. El texto principal nunca se desvanece ni queda dentro de una máscara.

| Progreso local | Composición |
| --- | --- |
| **Inicio, 0–0,28** | A ocupa el centro del escenario a escala 1. Voz, conexión y gafas se leen como una relación completa. B fuera del campo decorativo; su explicación continúa disponible en flujo. |
| **Mitad, 0,28–0,62** | A sale 240 px hacia arriba y 80 px a la derecha, escala 1→0,90 y pierde opacidad. B entra 160 px desde abajo y 80 px a la izquierda, escala 0,90→1. Trayectorias diferentes; ningún objeto cruza la columna de lectura. |
| **Reposo, 0,62–0,90** | B completo y dominante. Guante, rostro/cuerpo/espacio y pregunta de salida quedan agrupados. A desaparece por completo: evitar gafas miniaturizadas como restos. |
| **Salida, 0,90–1** | Mantener B legible mientras el contenedor libera el sticky. El traslado del guante enlaza con el fondo oscuro de práctica, con desplazamiento normal. |

En el centro del intercambio debe existir un protagonista: B supera el 80 % de visibilidad antes de que A termine de salir; colocaciones distintas evitan una doble exposición confusa. Etiquetas acompañan a su grupo, nunca un dispositivo nítido con texto casi invisible.

Distancia: se reservan 125svh por lectura; EN/ES determinan la altura mínima si el texto necesita más espacio. No ampliar alturas para justificar el efecto. Sin bucles ambientales ni doble interpolación sobre Lenis.

## Práctica → validación

**Inicio:** hoja y guante visibles. **Mitad:** hoja asciende 60–80 px y gira en plano −3°→0°; guante se separa 30–45 px de su borde. Una costura/trazo editorial se descubre hacia la primera pregunta, sin simular sensores activos. **Reposo:** preguntas, concepto y límites completos. **Salida:** hoja permanece asentada; validación aparece por desplazamiento normal, con una apertura de trazos y fondo dentro del espaciado entre apartados.

## Adaptaciones y aceptación

Móvil: grupos sucesivos en flujo, desplazamientos de 16–24 px; sin alturas heredadas, grandes salidas laterales ni sticky. Movimiento reducido/sin JS: ambas relaciones completas, sin transformaciones necesarias. Reversibilidad exacta; revisar inicio/mitad/reposo/salida en EN/ES, escritorio bajo y 320 px. Capturas comprueban composición; navegación real comprueba continuidad. Sin 3D, signos inventados o reconocimiento simulado.
