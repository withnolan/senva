# SENVA — cámara, manifiesto y cierre continuo

23 de octubre de 2026. Dirección para la petición de la captura de las21:37. Se han leído la síntesis del proyecto, la entrada actual de progreso, la dirección anterior y HTML/CSS/controlador. Esta revisión es de código y de la captura aportada; el acceso de observación al navegador continúa bloqueado. No cambia hechos, logo, retratos, paleta ni el recorrido del único modelo de gafas.

## Problema que hay que retirar

La unión Xiji → contacto usa una elipse de180vw×120vw dentro de una franja de180px con `overflow:clip`. El borde de esa franja corta la elipse y produce el segmento horizontal visible en la captura. Aumentar el radio o añadir reflejos no resuelve la geometría: hay que retirar el óvalo relleno y sus spans. Tampoco conviene reemplazarlo por otra apertura idéntica a validación.

El principio de comunicación ya existe, pero está relegado a un párrafo detrás del experimento. Debe ser un momento de lectura propio. Varias transformaciones se desarrollan solo durante0,3–0,6 viewport mientras los escenarios duran más de dos; el contraste se percibe como rapidez local.

## Storyboard y ritmo

| Momento | Inicio | Desarrollo y lectura | Reposo y salida |
| --- | --- | --- | --- |
| Apertura | Marca sobre noche durante unos2s, como pide ahora el usuario. Sin porcentaje ficticio ni dependencia del modelo3D. | El símbolo y una expansión luminosa amplia preparan el paso a la portada. Cubierta se disuelve mientras la ilustración entra con acercamiento visible, escala aproximada0,86→1 y desplazamiento corto; marca → titular → texto → acciones con separaciones breves. | El texto termina estable. Interacción, ancla, atrás y movimiento reducido pueden omitir la espera. Límite de seguridad independiente para no dejar la cubierta. No bloquear scroll ni foco. |
| Campo de visión | Las gafas conservan entrada fuera por izquierda y recorrido a derecha. | Las curvas de fondo se desplazan como un plano lejano; el giro de gafas es el foco cercano. No transformar ningún ancestro del canvas ni el hueco de llegada. | La escena3D desciende al hueco existente sin salto. Las ondas se asientan en vez de acelerar al final. |
| Primer experimento | La hoja de contenido se ve completa en un encuadre algo más abierto. | Acercamiento lento y pan corto de la propia hoja, usando casi todo el recorrido, sin ampliarla tanto que corte etiquetas. Guante y trazo comparten ese tiempo, evitando una entrada veloz independiente. | Hoja y cuerpo de lectura se estabilizan antes de soltar sticky. El texto principal no se desvanece. |
| La comunicación es el propósito | El experimento deja paso al mismo fondo noche, con luz difusa turquesa detrás del mensaje. El principio ocupa su propio espacio, sin nueva información. | La cámara se acerca al conjunto, aproximadamente0,84→1 con45px de avance vertical, a lo largo de al menos1–1,2 viewport. «La comunicación es el propósito» domina; «El aprendizaje es una primera hipótesis» aparece subordinado y completo desde el principio. | Reposo amplio al centro. El texto no se esconde en la salida; cambia la posición o amplitud del glow, con `transform` y `opacity`, mientras el siguiente bloque entra de forma natural. |
| Cierre Xiji → contacto | El fondo lavanda comienza una disolución hacia noche, sin forma rellena cortada en una franja. | Una única luz radial suave y el arco del propio contacto aportan profundidad. El conjunto de título/contactos hace un acercamiento desde aproximadamente0,84 y un pan corto desde5vw/70px, repartidos durante1,2–1,4 viewport. Nada de rectángulos u óvalos sólidos gigantes. | Fondo noche y texto estable antes del footer. Los enlaces nunca desaparecen ni se vuelven inaccesibles. Al subir se deshace el encuadre, sin capturar la rueda. |

La unión de color puede usar un gradiente de fondo entre los dos tonos exactos, con sus extremos idénticos a las superficies adyacentes. El gradiente es una transición cromática, no una nueva placa animada. La profundidad pertenece al contenido y al arco, y sus formas no tienen un borde horizontal recortado que deba cerrar un óvalo. Evitar filtros de blur grandes: un gradiente radial estático dentro de una capa que se desplaza/escala sirve para el resplandor.

## Límites de implementación

- Repartir desplazamientos grandes durante0,08–0,88 del progreso, con suavizado y último tramo de reposo. No apilar fundidos cortos independientes sobre ese mismo instante.
- Dar al principio `min-block-size` adaptable, nunca altura fija. En móvil dejar padding y texto natural; en reducido/sinJS, mensaje final sin transform ni ocultación. El glow es decorativo y no recibe foco.
- Reservar el máximo natural EN/ES para el conjunto del principio, sin reservar de nuevo sus hijos. Diferentes líneas son correctas; no introducir `br`, truncados o una fuente menor solo en español.
- No transformar `#vision`, el escenario del que depende la geometría de las gafas ni `.glasses-dock`. La composición del experimento y la lectura de contacto son independientes del modelo y sí admiten un plano de cámara.
- Reducir las etiquetas repetidas de concepto: estado real en portada y aviso contextual junto al diagrama bastan. Las frases de lentes siguen identificadas como ficción con pausa. No borrar todos los límites para sugerir producto funcional.
- El cambio actual autoriza unos2s deliberados de entrada; sustituye la decisión histórica de resolver el loader inmediatamente. Mantener bypass por interacción/reducido y salida de seguridad.

## Comprobación y límites

Se ha identificado la causa de la línea por el CSS y se ha contrastado con la captura recibida. Son propuestas de composición, no una observación de la implementación nueva. La coordinación debe comprobar progreso0/0,25/0,5/0,75/1 y regreso, regiones sinJS/reducido, EN/ES con diferente longitud y la integridad del recorrido3D. Hasta restablecer el acceso de navegador, no se acredita aquí calidad visual, contraste real del glow, FPS, legibilidad efectiva de cada encuadre ni ausencia de cortes en dispositivos físicos.

Archivo cambiado por dirección: únicamente este documento. Sin cambios de código, commit ni push propios.

## Revisión independiente de la integración

Se ha revisado el diff de HTML/CSS/controlador, sin acceso al navegador. La implementación retira la apertura recortada de contacto, sustituye también los grandes óvalos sólidos de práctica/validación por campos de luz, separa el principio en dos jerarquías y prolonga los tramos de movimiento. Estos hechos proceden del código, no de una captura nueva.

Se detectaron dos fallos concretos antes del cierre:

1. La reserva bilingüe del principio estaba en un párrafo cuyo padre se escala0,82→1. El medidor clona en ese mismo padre y usa `getBoundingClientRect`, por lo que heredaba la escala y podía reservar solo el82% de la altura natural. Se trasladó la reserva única al `.wrap` transformado: el clon anula su propia transformación, y no quedan reservas anidadas en el mensaje.
2. La nueva entrada de la ilustración (escala1,16 y pan7%) excedía el ancho del documento. Con390px y las reglas existentes, su envolvente inicial alcanzaba aproximadamente435,5px. Se añadió recorte local al escenario `.hero`; no se oculta el overflow del documento ni se bloquea el scroll. Es una comprobación geométrica de las reglas, no un layout observado.

También se amplió el acercamiento del principio a pasaje0,02–0,56 y se retrasó su salida luminosa hasta0,78. Para un escenario de0,85 viewport, el acercamiento ocupa aproximadamente un viewport entero. El pan de la hoja de práctica baja de10vw a3vw para conservar su encuadre con la ampliación.

La lectura estática confirma que las reglas reducidas anulan el movimiento del principio/cierre y que los nuevos efectos no transforman ancestros del único canvas ni su hueco de llegada. El texto del principio permanece opaco y en flujo, con altura mínima adaptable; las etiquetas repetidas se reducen manteniendo el estado real y el aviso contextual del diagrama. No se declara con ello revisada la composición efectiva, la salida exacta del glow o la legibilidad de todos los estados: siguen pendientes de observación visual real.


## Revisión vigente de la entrada y cabecera — 24 de octubre de2026

Sustituye el storyboard de apertura anterior: trazos inferior→medio→superior, todos de izquierda a derecha, más lentos; SENVA ocupa gran parte del ancho como título y viaja hasta la palabra real en la cabecera. El inicio permite leer la marca grande; el desplazamiento acelera después y se asienta sin otra animación del destino. Se miden origen y destino, con alternativa inmediata y cancelación al interactuar. El símbolo de navegación permanece disponible.

La cabecera mantiene texto blanco cálido y acento turquesa sobre matices oscuros que cambian gradualmente, evitando el cruce de contraste al invertir texto/fondo. Los apartados ganan algo de espacio y los tracks15svh. La revisión independiente detectó el posible recorte del loader en ventanas bajas: el tamaño de palabra se limita también por svh y el grupo reduce símbolo/espacio en panorámicas. No se ha observado la implementación en navegador por el bloqueo existente.
