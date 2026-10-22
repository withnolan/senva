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
