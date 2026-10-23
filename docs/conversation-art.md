# Conversation illustration — 22 October 2026

## Final asset

`assets/illustrations/conversation-editorial.webp`, 1200 × 800 pixels, approximately 122 KB. Raster editorial artwork generated with the built-in `image_gen` tool, then resized and encoded as WebP with its alpha channel preserved. No model, renderer or image-generation dependency is shipped with the site.

Two adults face each other on equal terms, with hands resting naturally. The image does not depict a particular sign, identify a person's hearing status, or demonstrate a SENVA capability. The open center is intended for a separate conceptual communication line. Hair, clothing and faces use navy, warm white and turquoise/teal families; this is raster artwork, so its sampled colors are not a mathematically restricted four-color vector palette.

## Prompt and selection

Initial generation brief: a refined contemporary flat editorial illustration for SENVA, two adult people in reciprocal conversation, believable proportions, understated expressions and 3/4 profiles. Hands rest low, without deliberate gestures. Generous space between them. Strict direction: navy `#102e3b`, warm white `#f8f7f2`, teal `#08777b`, turquoise `#8de0d4`; no orange, text, logos, UI, particles, 3D, gradients or volume lighting. Mature cut-paper/screenprint character rather than childish or corporate clipart.

The first result introduced halos and was rejected. A second edit flattened the artwork into broad ink areas and removed lighting. The selected cutout used this final prompt:

> Use case: background-extraction. Produce a genuine transparent-background cutout of exactly the two illustrated adults in this image. Remove only the solid navy background between and around the two people, including all blank space. Preserve the actual navy hair and navy jacket as opaque foreground, and preserve all white outline details. Keep the composition, scale, facial expressions, natural proportions, clothes and hands exactly as they are. The two people must be entirely crisp flat colored artwork, no halo or soft shadows around them. All outside space and the gap between people are completely transparent alpha, not black, navy, white, gradient or a drawn checkerboard. Keep all foreground fills solid and flat. Do not add new objects, text, logos or details.

## Checks and limits

The final source and optimized WebP were visually inspected. Metadata confirms 1200 × 800, four channels and alpha. The center/background contains fully transparent pixels; the image is not dependent on an opaque background rectangle. Fine antialiasing and small raster-edge details remain. Check integration at the actual desktop/mobile display sizes; this asset inspection is not a browser layout, user, linguistic or accessibility test.

The prior SVG and other resources are preserved. The asset introduces no project claims. Its generated original remains outside production assets; only the selected optimized image is included here.


## Device edition — 23 October 2026

Active hero: `assets/illustrations/conversation-devices.webp`,1200×800,129252 bytes, real alpha. The earlier asset remains intact and is still used by the unchanged social card. Built-in `image_gen` edit mode was used, not CLI/API fallback. The current two adults wear flat illustrated glasses matching the approved unbranded frame; the woman's resting hands wear understated navy gloves. The man's hands stay in his pockets. No sign, sensor, product function, hearing status or researched user is depicted. HTML labels the illustration as a concept and its bilingual alternative states that it is not a demonstration.

Inputs: original editorial cutout as edit target; approved `assets/models/gafas/vistas/gafas-tres-cuartos-izquierda.webp` as shape reference, not a pasted render. First generation was rejected for lighting/halo. Final generation source: `/Users/raquelye/.codex/generated_images/01a1557d-b839-7b23-bf94-06a02803e51f/exec-9e0efe54-c2b3-4c76-85cc-b5518b209370.png`. It was resized/encoded as WebP with alpha preserved. Local inspection confirms fitted glasses, resting hands, no invented gesture, and transparent outside/gap pixels; this is an asset review, not a browser layout test.

Final built-in edit prompt:

> Use case: background-extraction. Output a REAL transparent-alpha cutout of exactly these TWO illustrated adults WITH their glasses and the woman's gloves. Remove ALL background, glow, halos, shadows and colored lighting between and around the people, including blank gap. No painted navy background, no dark wash, no vignette, no white background, no checkerboard. Every pixel of negative space must be alpha zero. Preserve opaque navy hair/jacket/gloves, eyes and faces and white outline details, existing glasses, exact body poses, clothes, scale and composition. Flatten all shading/gradients inside clothing and skin into clean solid areas of navy #102e3b, warm white #f8f7f2, teal #08777b and mint #8de0d4, like crisp 2D screenprint editorial artwork. No gradient halo or rim-light. Do not add any new object, symbol, text, extra hand or background. Keep both faces and glasses carefully drawn. Transparent alpha is mandatory.

The raster contains antialiasing and mostly253–254 foreground alpha rather than mathematically opaque255; fully transparent space is present. The illustration is not claimed to be a four-value vector file.
