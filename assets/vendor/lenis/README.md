# Lenis vendored for SENVA

Vanilla browser distribution of **Lenis 1.3.27**, pinned from the published npm package on 22 October 2026. No framework adapter, package manager, runtime CDN or optional plugin is included.

- Official repository: https://github.com/darkroomengineering/lenis
- Published package: https://registry.npmjs.org/lenis/1.3.27
- Archive: https://registry.npmjs.org/lenis/-/lenis-1.3.27.tgz
- Source commit recorded by that package: `1f60fb9199a823f10fb23f7df55011defbb2747a`
- Package license: MIT; its complete, unmodified text is in [LICENSE](LICENSE).
- Unmodified files: `dist/lenis.min.js`, `dist/lenis.css`, `LICENSE` extracted from that archive. The optional JavaScript source map is not deployed; its reference is part of the upstream minified build and is not needed at runtime.

Archive integrity was checked against the npm registry before extraction:

```
sha512-QIHNH4LIfWyLfgH/5K0aTGZgyFJJ7GfHNcaH/AIgyKjb8gstLh5siNGvrVqz1w5ClLXzOvllBVk7vby8JzUVPQ==
```

## File verification

| File | Bytes | SHA-256 |
| --- | ---: | --- |
| `lenis.min.js` | 18815 | `80f53e77f1c13e379fc246d2b5e299188e20bcb2b2fe7ebb13e8e8c7563a6da7` |
| `lenis.css` | 513 | `2f668ae84a668327f246faf8a770383a2bf69196d214290fbc4d5548910606c5` |
| `LICENSE` | 1088 | `7d1896b31f2eed9f286b05faca067c4e35b2f109ae7c4ed5105220e2d2820228` |

## Integration boundaries

`lenis.min.js` exposes `globalThis.Lenis`. The local stylesheet is the upstream recommended stylesheet. SENVA's own controller owns initialization, preference changes, anchor/focus handling and the choice of RAF scheduling.

For this version, `smoothWheel: true` smooths wheel/trackpad input while `syncTouch: false` leaves touch scrolling native. The default `respectReducedMotion: true` disables interpolation and makes programmatic scrolling immediate; SENVA may additionally destroy the instance while that preference applies to retain a fully native fallback. `destroy()` removes instance listeners/classes and cancels its automatic RAF. `autoRaf: true` or an external `raf(timestampInMilliseconds)` loop is required, never both.

`scrollTo(element, options)` accounts for the element's CSS scroll margin and the container's CSS scroll padding. An additional negative `offset` places a destination further below a fixed header. Avoid counting the same header offset twice. Native focus and hash updates remain SENVA's responsibility when it handles links itself.
