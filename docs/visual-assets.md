# Ilustraciones editoriales 2D de SENVA

La implementación final usa **ilustración editorial 2D** de curvas limpias, azul noche, blanco cálido y turquesa. Los recursos son conceptos, no hardware construido ni evidencia de reconocimiento. No se representa ningún signo concreto: los personajes son ficticios y tienen las manos fuera del encuadre. El guante está vacío.

## Procedencia y archivos

Creación el 20 de octubre de 2026 con la herramienta integrada de generación de imágenes de Codex: generación de ilustraciones y una edición para simplificar formas, retirar halos/sombreado y trabajar sobre blanco cálido. Sin modelos 3D o material externo. La herramienta no expone aquí un identificador de modelo; no se atribuye uno.

| Ilustración | Máster PNG de 1536 × 1024 | WebP 768 / 1536 px, en assets/illustrations/ |
| --- | --- | --- |
| Conversación y dispositivos conceptuales | assets/illustrations/source/conversation.png | conversation-768.webp / conversation-1536.webp: 39 494 / 93 384 bytes |
| Gafas estilizadas | assets/illustrations/source/glasses.png | glasses-768.webp / glasses-1536.webp: 18 208 / 44 354 bytes |
| Guante vacío estilizado | assets/illustrations/source/glove.png | glove-768.webp / glove-1536.webp: 16 868 / 44 848 bytes |

Los tres WebP juntos suman unos **73 KiB a 768 px / 178 KiB a 1536 px**. Los másteres no se cargan en la página. Los renders fotorrealistas descartados se retiraron del árbol del proyecto antes de publicar, preservando recursos ajenos. No se había añadido ningún motor, GLB/GLTF o dependencia 3D.

## Integración y mantenimiento

- Portada: `.hero-illustration`, composición humana protagonista con alternativa EN/ES y aviso de concepto. Carga inmediata, dimensiones reservadas y encuadre completo.
- Visión: `.system-visual`, mismos dispositivos ilustrados, voz SVG, superficie óptica plana con frase ficticia HTML y una figura editorial SVG para rostro/cuerpo/espacio. Dos recorridos destacados progresivamente con scroll. Información manual más información adicional pendiente de resolver, hacia investigación; no traducción demostrada.
- Experimento: `.experiment-visual`, guante, ejercicio por definir y preguntas sobre captación de movimiento y utilidad del feedback. Trazos sin escala ni datos medidos, sin puntuaciones ni correcciones lingüísticas inventadas.
- Texto, controles y avisos en HTML, no incrustados en los dibujos. El duplicado sticky es decorativo; la alternativa en los artículos sigue accesible y se muestra en móvil/lectura estática.
- Movimiento mediante trazados, desplazamientos, escalas y fundidos 2D. Sin WebGL, perspectiva o rotación tridimensional. Sin JavaScript o con movimiento reducido, contenido e ilustraciones se leen normalmente.

Editar composición en el bloque “Editorial 2D illustrations” de `styles.css`; textos en `script.js` y respaldo inglés de `index.html`. La frase cotidiana no se atribuye a los personajes ni a un signo. No convertir los ejemplos en aparente reconocimiento real.

Para sustituir un recurso, mantener proporción 3:2, márgenes, trazo y colores planos sobre blanco cálido. Guardar PNG en `source/` y exportar WebP de 768 y 1536 px. Se usó **Sharp del entorno de trabajo** exclusivamente para redimensionar/codificar (calidad 90), sin edición creativa. No es dependencia del repositorio o de ejecución; puede usarse otro editor equivalente. Revisar peso, encuadre, EN/ES y móvil.

`assets/social-card.svg` combina texto vectorial y la ilustración 2D incrustada, sin enlaces externos; `social-card.png` es la exportación 1200 × 630. Logo y retratos reales conservados.

## Prompts finales y referencias

Cada recurso se generó con el prompt correspondiente y después se editó con el prompt compartido. Los másteres guardados son los resultados finales de esta edición.

### Generación: conversación

```text
Use case: illustration-story. Asset type: finished contemporary editorial 2D website illustration for SENVA. Style: sophisticated flat vector-like editorial illustration, clean organic silhouettes, beautifully controlled soft curves, restrained fine line details, mature human warmth and personality. Strictly flat solid colors only: midnight navy #102e3b, warm white #f8f7f2, turquoise #8de0d4 and dark teal #08777b. No orange. NO 3D, no rendered volume, no photorealism, no lighting effects, no gradients, no drop shadows, no bevels, no realistic material texture. Genuinely transparent alpha background. No text, letters, numbers, watermark or logo. Landscape 3:2 canvas. Whole subject clearly framed, generous transparent margins. Consistent smooth navy outlines with selectively solid flat shapes. Not generic stock clipart, not childish, not a technical blueprint. Primary request: a distinctive, elegant editorial illustration of two adult people facing each other, enjoying a reciprocal everyday conversation. Waist-up relaxed figures, one on each side, credible human proportions, expressive but subtle profiles and eyes, one with short softly wavy hair, one with tied-back hair. Clothes in flat navy and turquoise; faces warm white with navy linework. Their arms rest neutrally by their sides; hands are outside the waist-up framing. Absolutely NO signing pose, NO hand gestures or invented sign. Between and slightly below the two figures, integrate a pair of stylized thin glasses and a single empty five-finger textile glove as floating design concepts, at a meaningful scale. They are not worn and show no electronics. A single broad elegant turquoise ribbon curve crosses the central open space and connects the composition as a metaphor of conversation. Balanced editorial composition with intimate human connection, not a technology advertising render. Devices use flat navy outlines and restrained turquoise fills. No UI text or speech bubbles.
```

### Generación: gafas

```text
Use case: illustration-story. Asset type: finished contemporary editorial 2D website illustration for SENVA. Style: sophisticated flat vector-like editorial illustration, clean organic silhouettes, beautifully controlled soft curves, restrained fine line details, mature human warmth and personality. Strictly flat solid colors only: midnight navy #102e3b, warm white #f8f7f2, turquoise #8de0d4 and dark teal #08777b. No orange. NO 3D, no rendered volume, no photorealism, no lighting effects, no gradients, no drop shadows, no bevels, no realistic material texture. Genuinely transparent alpha background. No text, letters, numbers, watermark or logo. Landscape 3:2 canvas. Whole subject clearly framed, generous transparent margins. Consistent smooth navy outlines with selectively solid flat shapes. Not generic stock clipart, not childish, not a technical blueprint. Primary request: one pair of stylized lightweight eyeglasses as an editorial 2D object illustration, thin navy frame, rounded rectangular lens shapes, understated turquoise temple accents. Front view with two open arms drawn simply with flat linework, no foreshortening, no dimensional shading. A small turquoise flat reflection shape can mark each transparent lens without gradient. Expressive graceful curves, beautifully drawn precise hinge details but no electronics or specs. A finished flat illustration with personality, not a small pictogram. Object large and centered across the landscape canvas, full frame and both arms visible. No people, no hands, no background panel.
```

### Generación: guante

```text
Use case: illustration-story. Asset type: finished contemporary editorial 2D website illustration for SENVA. Style: sophisticated flat vector-like editorial illustration, clean organic silhouettes, beautifully controlled soft curves, restrained fine line details, mature human warmth and personality. Strictly flat solid colors only: midnight navy #102e3b, warm white #f8f7f2, turquoise #8de0d4 and dark teal #08777b. No orange. NO 3D, no rendered volume, no photorealism, no lighting effects, no gradients, no drop shadows, no bevels, no realistic material texture. Genuinely transparent alpha background. No text, letters, numbers, watermark or logo. Landscape 3:2 canvas. Whole subject clearly framed, generous transparent margins. Consistent smooth navy outlines with selectively solid flat shapes. Not generic stock clipart, not childish, not a technical blueprint. Primary request: one elegant empty full-finger textile glove as a finished editorial 2D object illustration. Exactly five normal glove fingers, credible proportions, gently relaxed fingers pointing upwards, not a symbolic gesture, no hand inside. Flat navy main silhouette, warm white fine seam curves, restrained turquoise cuff edge with a clear hollow cuff. No internal sensors, wires or electronic specifications. Flat frontal view, no dimensional shading, no perspective volume, no photo fabric texture. Beautiful softly curved contour and considered seam details, not a generic pictogram. Entire glove visible and centered on the landscape canvas with generous transparent margin. No arm, person or skin.
```

### Edición de estilo, aplicada a cada ilustración inicial

```text
Use case: style-transfer. Flatten this illustration into a beautifully composed mature contemporary editorial 2D screenprint with EXACTLY four flat solid inks: navy #102e3b, turquoise #8de0d4, dark teal #08777b and warm white #f8f7f2. Use an entirely solid warm white #f8f7f2 background, no transparency. Preserve the subjects and credible proportions, but simplify contours and facial features to expressive clean shapes. Eliminate ALL gradients, shading, light reflections, halos, ambient glow, fabric texture, volumetric effects, bevels and realistic details. Every shape must have one uniform solid fill. Refined large organic curves, adult editorial sophistication, no anime styling, no children's clipart. Remove lens sheen. No technical blueprint. No text, logo or watermark. No invented signing gesture, no new poses. Full subjects entirely visible, generous margin. Absolutely no orange or skin-tone colors outside this four-ink palette. The result must read like a flat two-dimensional illustration on warm paper, never a render.
```

