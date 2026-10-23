# Información legal básica — 23 de octubre de 2026

Implementación: [legal.html](../legal.html) y [legal.css](../legal.css), sin JavaScript. El pie principal enlaza `./legal.html#terms-en` / `#terms-es` y `./legal.html#cookies-en` / `#cookies-es` según idioma. También hay destinos `#privacy-en` y `#privacy-es`. Ambas versiones permanecen disponibles en HTML, con `lang` por artículo y navegación nativa. Recursos locales y rutas relativas compatibles con `/senva/`.

## Alcance comprobado

- Proyecto informativo en fase de idea, sin empresa constituida ni producto a la venta según [brief](project-brief.md). Nombres y LinkedIn copiados de los perfiles existentes; no se inventan razón social, domicilio, NIF, correo ni inscripción registral.
- Revisión de `index.html`, `script.js` y módulo de gafas: sin formularios, cuentas, pagos, analítica, píxeles, acceso a cámara/micrófono ni SDK social. Fuentes, modelos y bibliotecas locales. Los enlaces externos llevan a terceros al seguirlos.
- La única persistencia de la aplicación es `localStorage['senva-language']`, valores `en`/`es`, sin expiración automática. No es una cookie HTTP y no se transmite por el código del proyecto. Borrar datos del sitio elimina la preferencia; bloquear almacenamiento no bloquea la lectura.
- **Integración realizada en `script.js`:** la clave se guarda solo cuando la persona elige EN/ES (`announce === true`), no al inicializar el idioma por defecto. La lectura de una elección previamente guardada permanece.
- No se añade banner de aceptación sin rastreadores opcionales. Tampoco se añaden cookies solo para poder mostrar un banner. Si se integra analítica, formularios, contenido incrustado o nuevos proveedores, habrá que revisar aviso, tratamientos y consentimiento antes de activarlos.
- Se distingue el código propio del alojamiento: no se afirma «no recogemos ningún dato» porque GitHub Pages registra IP por seguridad. Se enlazan sus políticas y vías de ejercicio de derechos, sin inventar plazos ni responsabilidades del proveedor.

## Fuentes primarias consultadas

- [AEPD, Guía sobre el uso de las cookies, mayo de 2024](https://www.aepd.es/recurso-multimedia/guia-sobre-el-uso-de-las-cookies), apartados 1 y 2.1.2.b: tecnologías similares incluidas en el alcance; preferencia de idioma seleccionada expresamente, usada solo para esa finalidad. La decisión de no pedir consentimiento opcional se limita a la implementación actual.
- [BOE, Ley 34/2002, artículo 22.2](https://www.boe.es/buscar/act.php?id=BOE-A-2002-13758#a22): almacenamiento y acceso al terminal; excepción para servicios solicitados. [Artículo 10](https://www.boe.es/buscar/act.php?id=BOE-A-2002-13758#a10): información del prestador cuando sea aplicable.
- [GitHub Pages, Data collection](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages#data-collection): IP de visitantes registrada por seguridad, incluso sin cuenta.
- [GitHub General Privacy Statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement): prácticas del proveedor, conservación, derechos y contacto. Se enlaza la versión vigente, sin trasladar al equipo de SENVA afirmaciones sobre todo GitHub.

## Límites y mantenimiento

Esta página documenta el funcionamiento actual; no certifica cumplimiento legal ni sustituye una revisión jurídica de la actividad real. No se ha determinado que una presentación estudiantil sin actividad económica constituya un prestador sujeto a todas las obligaciones de la LSSI. Si la actividad pasa a ese ámbito, hay que confirmar la persona o entidad titular y, cuando proceda, incorporar domicilio, contacto electrónico directo, NIF y datos registrales; el repositorio no aporta esos datos. No se publica una dirección personal ni un identificador fiscal inventados.

Antes de recoger datos de participantes o abrir formularios, se deberán definir responsable, finalidades, base jurídica, conservación, destinatarios, derechos y canal de contacto adecuados para ese tratamiento. La página actual no pretende cubrir investigación futura.

Comprobaciones estáticas: HTML equilibrado, IDs únicos, anclas internas y recursos relativos existentes; CSS con adaptación a 320 px por diseño, sin alturas fijas para textos, sin efectos ni dependencia de JS. Estas comprobaciones no sustituyen la revisión visual en navegador de coordinación.
