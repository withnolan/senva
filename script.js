(() => {
  'use strict';
  // The English HTML is the complete no-JavaScript fallback.
  const translations = {
  "en": {
    "title": "SENVA — Every gesture brings us closer",
    "description": "Exploring communication between Deaf signers and hearing people. A gloves-and-glasses concept, with LSE practice as a first research hypothesis.",
    "socialDescription": "Communication. Autonomy. Connection. Discover the idea behind SENVA and the questions we want to explore.",
    "socialImageAlt": "SENVA. Let a conversation open possibilities. Two people connected by a turquoise line.",
    "skip": "Skip to content",
    "homeLabel": "SENVA — home",
    "navLabel": "Main navigation",
    "navVision": "The vision",
    "navPlan": "The questions",
    "navTeam": "The people",
    "navXiji": "Why Xiji",
    "languageLabel": "Language",
    "readEnglish": "Read in English",
    "readSpanish": "Read in Spanish",
    "openMenu": "Open navigation",
    "closeMenu": "Close navigation",
    "languageChanged": "The page is now in English.",
    "stage": "Idea / Hypothesis validation",
    "heroEyebrow": "Communication. Autonomy. Connection.",
    "heroTitle1": "Let a conversation",
    "heroTitle2": "open possibilities.",
    "heroLead": "We explore how technology could support communication between Deaf signers and hearing people, with more freedom to share, take part and connect.",
    "heroCta": "Discover the vision",
    "stageNote": "Only the idea exists. No prototype, interviews, tests, users, revenue or confirmed partnerships.",
    "planLabel": "The work ahead",
    "planTitle": "Decisions before devices.",
    "planIntro": "The first step would be to listen and decide with people what is worth investigating. This plan has not started yet.",
    "plan1Title": "Listen. Decide together.",
    "plan1Body": "Co-design with Deaf signers and hearing people: which situations matter, and what support would be useful and acceptable?",
    "plan2Title": "Challenge the hardware choice.",
    "plan2Body": "Compare gloves and glasses with cameras, phones and existing resources: autonomy, comfort, calibration, cost and accessibility.",
    "plan3Title": "Choose a question we can test.",
    "plan3Body": "If justified, select a few exercises with teachers and explore off-the-shelf sensors. Assess feedback with different adult learners.",
    "planDecision": "Evidence should guide us, even if it means rethinking the idea or leaving the hardware behind.",
    "researchLabel": "What remains open",
    "researchTitle": "A signal is not a language.",
    "research1": "What information would be missing?",
    "research1Body": "Sign languages also use facial expression, the body and space. Inertial sensors alone cannot be assumed to establish hand position relative to the body. Sensors and system architecture are still to be explored.",
    "research2": "What could a practice experiment establish?",
    "research2Body": "Only whether selected measurements and teacher-verified feedback might be useful in a limited learning context. Beginner practice data would not establish natural-conversation translation; that requires separate research with competent signers.",
    "research3": "Why begin with LSE?",
    "research3Body": "Spanish Sign Language (LSE) is a proposed first scope, not a universal sign language. The exercises, user needs, teaching-centre interest and value of gloves over alternatives all need their own validation.",
    "teamLabel": "The people behind SENVA",
    "teamTitle": "Two perspectives. A shared starting point.",
    "teamBody": "Computing, business and transmedia. Two ways of approaching the same challenge, with a shared desire to learn.",
    "cofounder": "Co-founder",
    "nolanStudies": "Student of Computer Science and Business Administration at Universidad Carlos III de Madrid (UC3M).",
    "santiagoStudies": "Bachelor’s degree student in Design and Management of Transmedia Projects at CSEU La Salle.",
    "nolanPortrait": "Portrait of Shengyu Nolan Chen",
    "santiagoPortrait": "Portrait of Santiago Muñoz Veguillas",
    "nolanLinkedInLabel": "Shengyu Nolan Chen on LinkedIn (opens in a new tab)",
    "santiagoLinkedInLabel": "Santiago Muñoz Veguillas on LinkedIn (opens in a new tab)",
    "collaborators": "With contributions from two student collaborators during ideation.",
    "xijiLabel": "Santiago’s application · Xiji, Shanghai",
    "xijiTitle": "A wider perspective. Better questions.",
    "xijiBody": "Santiago is applying to Xiji to broaden his knowledge and international experience, discover China’s entrepreneurial ecosystem, and understand how hardware development and access to components and suppliers could help investigate SENVA.",
    "xijiGoal": "The goal: ask better questions, test the idea and choose a meaningful first experiment.",
    "xijiStatus": "Application context. No admission, affiliation, endorsement or supplier commitments are implied.",
    "contactLabel": "A next step starts with a conversation",
    "contactTitle1": "Every gesture",
    "contactTitle2": "brings us closer.",
    "contactBody": "Ideas grow through conversation. If you have a question or a perspective to share, find us on LinkedIn.",
    "brandMeaning": "Inspired by seña, movement and progress. Not an acronym.",
    "repository": "Explore the repository",
    "repositoryLabel": "View SENVA on GitHub (opens in a new tab)",
    "backTop": "Back to top",
    "footerStage": "An entrepreneurial project at the idea stage.",
    "captionExample": "Shall we meet here tomorrow?",
    "illustrativeLabel": "Conceptual experience. Not a functional demonstration.",
    "interfaceLabel": "Interface concept · no measured data",
    "fictionLabel": "Fictional everyday phrase",
    "journeyNav": "Explore the conversation",
    "voiceBody": "We want to explore speech as captions in glasses, so attention could stay with the person in front of you.",
    "signDetails": "What would we need to understand?",
    "practiceTitle": "First, learn what helps.",
    "practiceBody": "A first hypothesis: explore sensors and feedback through a possible LSE practice tool with teachers and adult learners. A limited experiment to learn what helps.",
    "principlePurpose": "Communication is the purpose.",
    "principleHypothesis": "Learning is a first hypothesis.",
    "practiceMore": "A complementary practice tool, with exercises to select with teachers. Adult learners are potential users; teaching centres are possible collaborators and buyers. No recognition, scores or linguistic corrections have been validated. This would not establish a route to natural-conversation translation.",
    "manualInfo": "Manual information",
    "heroSecondary": "Our next questions",
    "heroArtAlt": "Two adults wearing conceptual glasses, with gloves on the resting hands of one person. An editorial illustration, not a product demonstration.",
    "purposeLabel": "01 / The purpose",
    "purposeTitle": "More room to take part.",
    "purposeBody": "Everyone has something to contribute. We want to explore support that respects people’s autonomy and makes more room for connection.",
    "situation1": "An idea worth sharing.",
    "situation2": "Someone you haven’t met yet.",
    "situation3": "A conversation that starts in the moment.",
    "situationsNote": "Situations that motivate the project, not testimonials or findings from research.",
    "visionLabel": "02 / The vision",
    "visionTitle": "Two directions. One conversation.",
    "visionIntro": "We imagine gloves and glasses that could support both directions of a conversation, without holding or positioning a phone. For now, an idea to investigate.",
    "voiceHeading": "Make room for the other person’s voice.",
    "manualHeading": "Understand more than the hands.",
    "manualBody": "Gloves could contribute manual information. Facial expression, the body and space also carry meaning: gloves alone cannot translate a whole sign language.",
    "openArchitecture": "How to capture the other information, and how the system would work, remain research questions.",
    "conceptState": "Concept in research",
    "speechLabel": "Speech",
    "captionsLabel": "Captions in glasses",
    "otherInformation": "Face, body and space",
    "capturePending": "Capture and architecture unresolved",
    "routePending": "Towards text / voice",
    "experimentLabel": "03 / The first hypothesis",
    "practiceBoundary": "It would not demonstrate translation of natural conversations. That needs its own research.",
    "experimentQuestion1": "What can sensors capture reliably?",
    "experimentQuestion2": "What feedback could help someone take the next step?",
    "experimentNext": "Questions and exercises would be chosen with teachers and adult learners.",
    "learningLabel": "A possible practice session",
    "practiceSmall": "Selected exercises · scope to define",
    "experimentLink": "Read the research boundaries",
    "chapterPurpose": "Purpose",
    "chapterVision": "Vision",
    "chapterExperiment": "First hypothesis",
    "chapterValidation": "Validation",
    "heroConcrete": "Communication is the purpose. Learning is a first hypothesis.",
    "legalNav": "Legal information",
    "termsLink": "Terms of use",
    "privacyLink": "Privacy",
    "cookiesLink": "Cookies & preferences",
    "pauseCaptionAnimation": "Pause animation",
    "resumeCaptionAnimation": "Resume animation",
    "captionAnimationNote": "Fictional phrases, written slowly to illustrate the concept."
  },
  "es": {
    "title": "SENVA — Cada gesto nos acerca",
    "description": "Exploramos la comunicación entre personas sordas signantes y oyentes. Un concepto de guantes y gafas, con la práctica de LSE como primera hipótesis de investigación.",
    "socialDescription": "Comunicación. Autonomía. Conexión. Descubre la idea de SENVA y las preguntas que queremos explorar.",
    "socialImageAlt": "SENVA. Que una conversación abra posibilidades. Dos personas conectadas por un trazo turquesa.",
    "skip": "Saltar al contenido",
    "homeLabel": "SENVA — inicio",
    "navLabel": "Navegación principal",
    "navVision": "La visión",
    "navPlan": "Las preguntas",
    "navTeam": "El equipo",
    "navXiji": "Por qué Xiji",
    "languageLabel": "Idioma",
    "readEnglish": "Leer en inglés",
    "readSpanish": "Leer en español",
    "openMenu": "Abrir navegación",
    "closeMenu": "Cerrar navegación",
    "languageChanged": "La página está ahora en español.",
    "stage": "Idea / Validación de hipótesis",
    "heroEyebrow": "Comunicación. Autonomía. Conexión.",
    "heroTitle1": "Que una conversación",
    "heroTitle2": "abra posibilidades.",
    "heroLead": "Exploramos cómo la tecnología podría acompañar la comunicación entre personas sordas signantes y oyentes, con más libertad para compartir, participar y encontrarse.",
    "heroCta": "Descubre la visión",
    "stageNote": "Solo existe la idea. Sin prototipo, entrevistas, pruebas, usuarios, ingresos ni alianzas confirmadas.",
    "planLabel": "El trabajo que viene",
    "planTitle": "Decisiones antes que dispositivos.",
    "planIntro": "El primer paso sería escuchar y decidir con las personas qué merece la pena investigar. Este plan todavía no ha comenzado.",
    "plan1Title": "Escuchar. Decidir juntos.",
    "plan1Body": "Codiseñar con personas sordas signantes y oyentes qué situaciones merecen atención y qué apoyo sería útil y aceptable.",
    "plan2Title": "Cuestionar la elección de hardware.",
    "plan2Body": "Comparar guantes y gafas con cámaras, móviles y recursos existentes: autonomía, comodidad, calibración, coste y accesibilidad.",
    "plan3Title": "Elegir una pregunta comprobable.",
    "plan3Body": "Si se justifica, elegir unos pocos ejercicios con docentes y explorar sensores comerciales. Evaluar el feedback con distintos estudiantes adultos.",
    "planDecision": "La evidencia debería guiarnos, incluso si nos lleva a cambiar de idea o a dejar atrás el hardware.",
    "researchLabel": "Lo que sigue abierto",
    "researchTitle": "Una señal no es una lengua.",
    "research1": "¿Qué información faltaría?",
    "research1Body": "Las lenguas de signos también utilizan la expresión facial, el cuerpo y el espacio. No se puede asumir que los sensores inerciales por sí solos establezcan la posición de las manos respecto al cuerpo. Los sensores y la arquitectura están por explorar.",
    "research2": "¿Qué demostraría un experimento de práctica?",
    "research2Body": "Solo si ciertas mediciones y un feedback verificado por docentes podrían ser útiles en un contexto de aprendizaje acotado. Los datos de principiantes no demostrarían traducción de conversaciones naturales: eso exige investigación propia con personas signantes competentes.",
    "research3": "¿Por qué empezar con LSE?",
    "research3Body": "La lengua de signos española (LSE) es un primer alcance propuesto, no una lengua de signos universal. Ejercicios, necesidades, interés de centros y valor de los guantes frente a alternativas requieren validación propia.",
    "teamLabel": "Las personas detrás de SENVA",
    "teamTitle": "Dos perspectivas. Un punto de partida compartido.",
    "teamBody": "Informática, empresa y transmedia. Dos formas de mirar el mismo reto y una voluntad compartida de aprender.",
    "cofounder": "Cofundador",
    "nolanStudies": "Estudiante de Informática y Administración y Dirección de Empresas en la Universidad Carlos III de Madrid (UC3M).",
    "santiagoStudies": "Estudiante del Grado en Diseño y Gestión de Proyectos Transmedia en CSEU La Salle.",
    "nolanPortrait": "Retrato de Shengyu Nolan Chen",
    "santiagoPortrait": "Retrato de Santiago Muñoz Veguillas",
    "nolanLinkedInLabel": "Shengyu Nolan Chen en LinkedIn (se abre en una pestaña nueva)",
    "santiagoLinkedInLabel": "Santiago Muñoz Veguillas en LinkedIn (se abre en una pestaña nueva)",
    "collaborators": "Con aportaciones de dos estudiantes colaboradoras durante la ideación.",
    "xijiLabel": "Candidatura de Santiago · Xiji, Shanghái",
    "xijiTitle": "Ampliar la mirada. Mejorar las preguntas.",
    "xijiBody": "Santiago presenta su candidatura a Xiji para ampliar conocimientos y experiencia internacional, conocer el ecosistema emprendedor chino y entender cómo el desarrollo de hardware y el acceso a componentes y proveedores podrían ayudar a investigar SENVA.",
    "xijiGoal": "El objetivo: hacer mejores preguntas, contrastar la idea y elegir un primer experimento con sentido.",
    "xijiStatus": "Contexto de candidatura. No implica admisión, afiliación, respaldo ni compromisos de proveedores.",
    "contactLabel": "El siguiente paso empieza con una conversación",
    "contactTitle1": "Cada gesto",
    "contactTitle2": "nos acerca.",
    "contactBody": "Una idea mejora cuando se conversa. Si quieres compartir una pregunta o una perspectiva, puedes encontrarnos en LinkedIn.",
    "brandMeaning": "Inspirado en seña, movimiento y avance. No es un acrónimo.",
    "repository": "Explora el repositorio",
    "repositoryLabel": "Ver SENVA en GitHub (se abre en una pestaña nueva)",
    "backTop": "Volver al inicio",
    "footerStage": "Un proyecto emprendedor en fase de idea.",
    "captionExample": "¿Nos vemos aquí mañana?",
    "illustrativeLabel": "Experiencia conceptual. No es una demostración funcional.",
    "interfaceLabel": "Concepto de interfaz · sin datos medidos",
    "fictionLabel": "Frase cotidiana ficticia",
    "journeyNav": "Explorar la conversación",
    "voiceBody": "Queremos investigar cómo mostrar el habla como subtítulos en las gafas, para que la atención pueda quedarse en la otra persona.",
    "signDetails": "¿Qué necesitaríamos comprender?",
    "practiceTitle": "Primero, aprender qué ayuda.",
    "practiceBody": "Una primera hipótesis: explorar sensores y feedback con una posible herramienta de práctica de LSE, junto a docentes y estudiantes adultos. Un experimento acotado para aprender qué ayuda.",
    "principlePurpose": "La comunicación es el propósito.",
    "principleHypothesis": "El aprendizaje es una primera hipótesis.",
    "practiceMore": "Una herramienta complementaria de práctica, con ejercicios por elegir con docentes. Los estudiantes adultos serían posibles usuarios; los centros, posibles colaboradores y compradores. No se ha validado reconocimiento, puntuaciones ni correcciones lingüísticas. Esto no demostraría una ruta hacia la traducción de conversaciones naturales.",
    "manualInfo": "Información manual",
    "heroSecondary": "Nuestras próximas preguntas",
    "heroArtAlt": "Dos personas adultas con gafas conceptuales y una de ellas con guantes sobre las manos en reposo. Ilustración editorial, no una demostración del producto.",
    "purposeLabel": "01 / El propósito",
    "purposeTitle": "Más espacio para participar.",
    "purposeBody": "Cada persona tiene algo que aportar. Queremos explorar apoyos que respeten su autonomía y den más espacio al encuentro.",
    "situation1": "Una idea que merece compartirse.",
    "situation2": "Alguien a quien aún no conoces.",
    "situation3": "Una conversación que surge sin planearla.",
    "situationsNote": "Situaciones que motivan el proyecto, no testimonios ni resultados de investigación.",
    "visionLabel": "02 / La visión",
    "visionTitle": "Dos direcciones. Una conversación.",
    "visionIntro": "Imaginamos guantes y gafas que pudieran acompañar una conversación en ambas direcciones, sin tener que sostener o colocar un móvil. Por ahora, una idea que investigar.",
    "voiceHeading": "Dar espacio a la voz de la otra persona.",
    "manualHeading": "Comprender más allá de las manos.",
    "manualBody": "Los guantes podrían aportar información manual. La expresión facial, el cuerpo y el espacio también aportan significado: un guante no puede traducir por sí solo una lengua de signos completa.",
    "openArchitecture": "Cómo captar el resto de información y cómo funcionaría el sistema siguen siendo preguntas de investigación.",
    "conceptState": "Concepto en investigación",
    "speechLabel": "Voz",
    "captionsLabel": "Subtítulos en las gafas",
    "otherInformation": "Rostro, cuerpo y espacio",
    "capturePending": "Captación y arquitectura por resolver",
    "routePending": "Hacia texto / voz",
    "experimentLabel": "03 / La primera hipótesis",
    "practiceBoundary": "No demostraría traducción de conversaciones naturales. Eso necesita su propia investigación.",
    "experimentQuestion1": "¿Qué pueden captar los sensores de forma fiable?",
    "experimentQuestion2": "¿Qué feedback ayudaría a dar el siguiente paso?",
    "experimentNext": "Las preguntas y los ejercicios se elegirían con docentes y estudiantes adultos.",
    "learningLabel": "Una posible sesión de práctica",
    "practiceSmall": "Ejercicios seleccionados · alcance por definir",
    "experimentLink": "Leer los límites de investigación",
    "chapterPurpose": "Propósito",
    "chapterVision": "Visión",
    "chapterExperiment": "Primera hipótesis",
    "chapterValidation": "Validación",
    "heroConcrete": "La comunicación es el propósito. El aprendizaje es una primera hipótesis.",
    "legalNav": "Información legal",
    "termsLink": "Términos de uso",
    "privacyLink": "Privacidad",
    "cookiesLink": "Cookies y preferencias",
    "pauseCaptionAnimation": "Pausar animación",
    "resumeCaptionAnimation": "Reanudar animación",
    "captionAnimationNote": "Frases ficticias que se escriben lentamente para ilustrar el concepto."
  }
};
  const root = document.documentElement;
  const menu = document.querySelector('#main-nav');
  const toggle = document.querySelector('.menu-toggle');
  const mobile = matchMedia('(max-width: 1050px)');
  const inertiaDesktop = matchMedia('(min-width: 1051px) and (hover: hover) and (pointer: fine)');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const diagramMotion = matchMedia('(min-width: 1100px) and (min-height: 700px)');
  const languages = [...document.querySelectorAll('[data-language]')];
  const diagram = document.querySelector('.vision-diagram');
  let language = 'en';
  let smoothScroll = null;

  // The user explicitly requested wheel inertia. Touch and reduced motion stay native.
  function updateSmoothScroll() {
    const enabled = inertiaDesktop.matches && !reduced.matches && typeof window.Lenis === 'function';
    if (!enabled) {
      if (smoothScroll) smoothScroll.destroy();
      smoothScroll = null;
    } else if (!smoothScroll) {
      smoothScroll = new window.Lenis({autoRaf: true, lerp: .1, smoothWheel: true, syncTouch: false, respectReducedMotion: true, anchors: false});
    }
    root.dataset.scrollMode = smoothScroll ? 'inertia' : 'native';
  }

  function cancelScrollAnimation() {
    if (!smoothScroll || !smoothScroll.isScrolling) return;
    // Public stop/start reset the pending animation together, without leaving scroll locked.
    smoothScroll.stop();
    smoothScroll.start();
  }

  function setMenu(open, returnFocus = false) {
    const hidden = mobile.matches && !open;
    menu.classList.toggle('is-open', open);
    menu.toggleAttribute('inert', hidden);
    if (hidden) menu.setAttribute('aria-hidden', 'true');
    else menu.removeAttribute('aria-hidden');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', translations[language][open ? 'closeMenu' : 'openMenu']);
    if (returnFocus || (hidden && menu.contains(document.activeElement))) toggle.focus();
    if (open && mobile.matches) menu.querySelector('a').focus({preventScroll: true});
  }

  function setLanguage(next, announce = false) {
    if (!Object.hasOwn(translations, next)) return;
    cancelScrollAnimation();
    const cinemaReading = announce && geometry?.cinema.find(scene => {
      const start = scene.top - geometry.headerHeight;
      const end = scene.fixed ? start + scene.height - scene.stageHeight : start + scene.height;
      return scrollY >= start && scrollY <= end;
    });
    const cinemaFraction = cinemaReading ? cinemaProgress(cinemaReading, scrollY, geometry) : 0;
    // Preserve the closest reading block rather than the full page's percentage.
    const reading = [...document.querySelectorAll('main h2, main h3, .hero-copy')]
      .filter(el => el.getBoundingClientRect().top <= innerHeight * .6)
      .at(-1);
    const top = reading?.getBoundingClientRect().top;
    language = next;
    const copy = translations[next];
    document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = copy[el.dataset.i18n]; });
    for (const [key, attr] of [['i18nAriaLabel', 'aria-label'], ['i18nAlt', 'alt']]) {
      const selector = attr === 'alt' ? '[data-i18n-alt]' : '[data-i18n-aria-label]';
      document.querySelectorAll(selector).forEach(el => el.setAttribute(attr, copy[el.dataset[key]]));
    }
    root.lang = next;
    glassesScene?.setLanguage(next);
    document.querySelectorAll('[data-legal]').forEach(link => { link.href = './legal.html#' + link.dataset.legal + '-' + next; });
    document.title = copy.title;
    for (const [selector, value] of [
      ['meta[name="description"]', copy.description],
      ['meta[property="og:title"]', copy.title],
      ['meta[property="og:description"]', copy.socialDescription],
      ['meta[property="og:image:alt"]', copy.socialImageAlt],
      ['meta[property="og:locale"]', next === 'es' ? 'es_ES' : 'en_GB']
    ]) document.querySelector(selector).content = value;
    languages.forEach(el => el.setAttribute('aria-pressed', String(el.dataset.language === next)));
    toggle.setAttribute('aria-label', copy[toggle.getAttribute('aria-expanded') === 'true' ? 'closeMenu' : 'openMenu']);
    if (announce) {
      document.querySelector('#language-announcement').textContent = copy.languageChanged;
      if ((cinemaReading || reading) && scrollY > 100) {
        root.classList.add('language-changing');
        // Translation can change the stage's natural height. Refit first, then
        // retain the cinematic fraction only while the content still fits.
        if (measureFrame) { cancelAnimationFrame(measureFrame); measureFrame = 0; }
        measureMotion();
        const translatedScene = cinemaReading && geometry.cinema.find(scene => scene.el === cinemaReading.el);
        const preserveCinema = translatedScene && (cinemaReading.fixed || translatedScene.fixed);
        const position = preserveCinema
          ? translatedScene.top - geometry.headerHeight + cinemaFraction * Math.max(0, translatedScene.fixed ? translatedScene.height - translatedScene.stageHeight : translatedScene.stageHeight - (geometry.height - geometry.headerHeight))
          : scrollY + reading.getBoundingClientRect().top - top;
        if (smoothScroll) { smoothScroll.resize(); smoothScroll.scrollTo(position, {immediate: true}); }
        else scrollTo({top: position, behavior: 'auto'});
        requestAnimationFrame(() => root.classList.remove('language-changing'));
      }
    }
    try { if (announce) localStorage.setItem('senva-language', next); } catch { /* Optional preference. */ }
    queueMeasure();
  }

  toggle.addEventListener('click', () => { root.classList.add('menu-used'); setMenu(toggle.getAttribute('aria-expanded') !== 'true'); });
  document.addEventListener('keydown', event => {
    const editing = event.target.closest('input, textarea, select, [contenteditable]:not([contenteditable="false"])');
    const scrollKey = ['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', 'Tab'].includes(event.key);
    const scrollSpace = event.key === ' ' && !event.target.closest('button, a, summary');
    if (!event.defaultPrevented && !editing && (scrollKey || scrollSpace)) cancelScrollAnimation();
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') setMenu(false, true);
  });
  document.addEventListener('click', event => { if (!event.target.closest('.site-header')) setMenu(false); });
  document.addEventListener('focusin', event => { if (!event.target.closest('.site-header')) setMenu(false); });
  mobile.addEventListener('change', () => setMenu(false));
  document.querySelectorAll('a[href^="#"]').forEach(link => link.addEventListener('click', event => {
    if (event.button || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const target = document.getElementById(link.hash.slice(1));
    if (!target) return;
    setMenu(false);
    target.setAttribute('tabindex', '-1');
    if (smoothScroll) {
      event.preventDefault();
      cancelScrollAnimation();
      history.pushState(null, '', link.hash);
      // Lenis reads CSS scroll-padding; applying another header offset would double it.
      smoothScroll.scrollTo(target, {onComplete: () => target.focus({preventScroll: true})});
    } else target.focus({preventScroll: true});
  }));
  languages.forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.language, true)));
  function cancelNavigationInertia() {
    cancelScrollAnimation();
    // Browser history may restore its native position after popstate dispatch.
    requestAnimationFrame(() => {
      cancelScrollAnimation();
      if (smoothScroll) smoothScroll.resize();
    });
  }
  addEventListener('popstate', cancelNavigationInertia);
  addEventListener('hashchange', cancelNavigationInertia);


  // Document scrolling stays native; CSS hides only its scrollbar decoration.
  // Geometry is measured after layout changes, never after writes in a frame.
  const clamp = value => Math.max(0, Math.min(1, value));
  const smooth = value => { value = clamp(value); return value * value * (3 - 2 * value); };
  const hero = document.querySelector('.hero');
  const purpose = document.querySelector('.purpose');
  const vision = document.querySelector('.vision');
  const visionLayout = document.querySelector('.vision-layout');
  const experiment = document.querySelector('.experiment');
  const practiceLayout = document.querySelector('.experiment-layout');
  const transitions = [...document.querySelectorAll('.scene-transition')];
  const header = document.querySelector('.site-header');
  const surfaces = [...document.querySelectorAll('main [data-tone]')];
  const cinemaTracks = [...document.querySelectorAll('[data-cinema]')].map(el => ({el, stage: el.querySelector('.cinema-stage')})).filter(scene => scene.stage);
  const glassesHost = document.querySelector('[data-glasses-model]');
  const glassesTrack = document.querySelector('[data-cinema=vision]');
  const glassesArt = glassesTrack?.querySelector('.vision-art');
  const glassesDock = document.querySelector('[data-glasses-dock]');
  const glassesOrigin = glassesHost && {parent: glassesHost.parentElement, next: glassesHost.nextSibling};
  const captionControls = [...document.querySelectorAll('[data-caption-toggle]')];
  let flightBoundary = null, captionsPaused = false;
  // A local, optional enhancement: no WebGL on touch, small screens or reduced motion.
  // Import lazily near the vision; the existing motion frame owns its exact progress.
  let glassesScene = null, glassesLoading = false, glassesNear = false;
  let glassesGeneration = 0, glassesProgress = 0, glassesFailed = false;
  function glassesAllowed() {
    const track = geometry?.cinema.find(scene => scene.el === glassesTrack);
    return glassesHost && glassesDock && !reduced.matches && inertiaDesktop.matches && diagramMotion.matches && track?.fixed && 'IntersectionObserver' in window;
  }
  function captionControlState() {
    captionControls.forEach(button => {
      button.hidden = !glassesScene;
      const key = captionsPaused ? 'resumeCaptionAnimation' : 'pauseCaptionAnimation';
      button.dataset.i18n = key;
      button.textContent = translations[language][key];
    });
  }
  function restoreGlasses() {
    vision.classList.remove('has-continuous-model');
    if (glassesHost && glassesOrigin && glassesHost.parentElement !== glassesOrigin.parent) {
      glassesOrigin.parent.insertBefore(glassesHost, glassesOrigin.next);
      glassesHost.classList.remove('is-continuous');
      glassesHost.style.removeProperty('transform');
      glassesHost.style.removeProperty('opacity');
    }
    flightBoundary?.remove();
    flightBoundary = null;
    captionControlState();
  }
  function installGlassesFlight() {
    if (!flightBoundary) {
      flightBoundary = document.createElement('div');
      flightBoundary.className = 'glasses-flight-boundary';
      flightBoundary.setAttribute('aria-hidden', 'true');
      vision.append(flightBoundary);
      flightBoundary.append(glassesHost);
      glassesHost.classList.add('is-continuous');
    }
    vision.classList.add('has-continuous-model');
    glassesScene.setPaused(captionsPaused);
    captionControlState();
    queueMeasure();
  }
  captionControls.forEach(button => button.addEventListener('click', () => {
    captionsPaused = !captionsPaused;
    glassesScene?.setPaused(captionsPaused);
    captionControlState();
  }));
  if (glassesHost && 'MutationObserver' in window) {
    new MutationObserver(() => {
      if (glassesScene && !glassesHost.classList.contains('is-ready')) {
        glassesScene.dispose();
        glassesScene = null;
        glassesFailed = true;
        restoreGlasses();
      }
    }).observe(glassesHost, {attributes: true, attributeFilter: ['class']});
  }
  function syncGlasses() {
    if (!glassesAllowed()) {
      if (glassesLoading) glassesGeneration++;
      glassesScene?.dispose();
      glassesScene = null;
      restoreGlasses();
      return;
    }
    if (glassesScene) { glassesScene.resize(); return; }
    if (!glassesNear || glassesLoading || glassesFailed || document.hidden) return;
    const generation = ++glassesGeneration;
    glassesLoading = true;
    import('./glasses-3d.js?v=ec903386').then(module => {
      if (generation !== glassesGeneration || !glassesAllowed()) return null;
      return module.createGlassesScene(glassesHost, {
        modelUrl: new URL('./assets/models/gafas/senva-gafas.glb', document.baseURI).href,
        initialProgress: glassesProgress, language
      });
    }).then(scene => {
      if (!scene) return;
      if (generation !== glassesGeneration || !glassesAllowed()) { scene.dispose(); return; }
      glassesScene = scene;
      installGlassesFlight();
      scene.setLanguage(language);
      scene.update(glassesProgress);
    }).catch(() => {
      // The image and all HTML remain available if modules, WebGL or the GLB fail.
      if (generation === glassesGeneration) glassesFailed = true;
    }).finally(() => {
      glassesLoading = false;
      if (generation !== glassesGeneration) syncGlasses();
    });
  }
  if (glassesTrack && 'IntersectionObserver' in window) {
    new IntersectionObserver(entries => {
      glassesNear = entries[0].isIntersecting;
      if (glassesNear) syncGlasses();
    }, {rootMargin: '600px 0px'}).observe(vision);
  }
  const revealScenes = [...document.querySelectorAll('#team, #xiji, #contact')];
  const bilingualBlocks = [...document.querySelectorAll('[data-bilingual-space]')];
  const principleStage = document.querySelector('.principle-stage');
  const chapters = [...document.querySelectorAll('[data-chapter]')];
  let currentChapter = '';
  let frame = 0, measureFrame = 0, previousTime = 0, geometry = null;
  const pose = {hero: 0, purpose: 0, vision: 0, practice: 0};
  let settled = false;
  function cinemaProgress(scene, y, g) {
    if (scene.fixed) return clamp((y - (scene.top - g.headerHeight)) / Math.max(1, scene.height - scene.stageHeight));
    return clamp((y + g.height - scene.top) / Math.max(1, g.height + scene.height));
  }
  // One slow approach, a reading hold, then only the light travels out.
  // Uses the complete passage through the viewport, in either direction.
  function cameraPass(box, y, height) {
    const passage = clamp((y + height - box.top) / Math.max(1, height + box.height));
    return {approach: smooth((passage - .02) / .54), departure: smooth((passage - .78) / .22), passage};
  }
  // Pure document-coordinate path; no DOM reads, scroll locks or reparenting here.
  function glassesFlightPose(g, y, progress, dock, voiceOpacity) {
    const scene = g.cinema.find(item => item.el === glassesTrack);
    const f = g.glasses;
    const release = scene.top + scene.height - scene.stageHeight - g.headerHeight;
    const dockArrival = Math.max(release + 1, g.vision.top - g.sceneTop);
    const handoff = smooth((y - release) / (dockArrival - release));
    const travel = smooth((progress - .015) / .815);
    const startX = -f.width / 2 - 32;
    const rightX = g.width - f.width / 2 - 32;
    const introX = startX + (rightX - startX) * travel;
    const stageDocumentTop = scene.top + Math.max(0, Math.min(scene.height - scene.stageHeight, y + g.headerHeight - scene.top));
    const artCenter = Math.min(f.artCenter, g.height - g.headerHeight - f.height / 2 - 16);
    const movingY = stageDocumentTop - y + artCenter;
    const departureY = g.headerHeight + artCenter;
    const dockX = dock.left + dock.width / 2;
    const dockY = dock.top + dock.height / 2;
    const centerX = introX + (dockX - introX) * handoff;
    let centerY = handoff > 0 ? departureY + (dockY - departureY) * handoff + Math.sin(handoff * Math.PI) * 44 : movingY;
    const introScale = .92 + travel * .08;
    const dockScale = Math.min(.72, dock.width / Math.max(1, f.width * .70));
    const scale = introScale + (dockScale - introScale) * handoff;
    if (handoff > 0 && handoff < 1) {
      const halfHeight = f.height * scale / 2;
      centerY = Math.max(g.headerHeight + halfHeight + 12, Math.min(g.height - halfHeight - 16, centerY));
    }
    const opacity = 1 + (voiceOpacity - 1) * handoff;
    const visible = opacity > .025 && centerX + f.width * scale / 2 > 0 && centerX - f.width * scale / 2 < g.width && centerY + f.height * scale / 2 > g.headerHeight && centerY - f.height * scale / 2 < g.height;
    return {x: centerX - f.sectionLeft, y: centerY + y - f.sectionTop, scale, opacity, handoff, visible};
  }
  function measureMotion() {
    measureFrame = 0;
    const y = scrollY;
    const box = el => { const r = el.getBoundingClientRect(); return {top: r.top + y, height: r.height}; };
    const headerHeight = header.getBoundingClientRect().height;
    root.style.setProperty('--header-height', headerHeight + 'px');
    window.SenvaBilingualLayout?.reserve(bilingualBlocks, translations);
    const desktop = root.classList.contains('motion-desktop');
    const stageHeights = cinemaTracks.map(scene => scene.stage.getBoundingClientRect().height);
    cinemaTracks.forEach((scene, i) => scene.el.classList.toggle('is-fixed', desktop && stageHeights[i] > 0 && stageHeights[i] <= innerHeight - headerHeight + 2));
    const visionBox = vision.getBoundingClientRect();
    const artBox = glassesArt.getBoundingClientRect();
    const visionStageBox = glassesTrack.querySelector('.cinema-stage').getBoundingClientRect();
    geometry = {
      width: innerWidth,
      glasses: {width: glassesHost.offsetWidth, height: glassesHost.offsetHeight, sectionTop: visionBox.top + y, sectionLeft: visionBox.left, artCenter: artBox.top - visionStageBox.top + artBox.height * .48},
      headerHeight, chromeLine: headerHeight + 1,
      surfaces: surfaces.map(el => ({tone: el.dataset.tone, ...box(el)})).filter(surface => surface.height > 0),
      cinema: cinemaTracks.map(({el, stage}) => ({el, ...box(el), stageHeight: stage.getBoundingClientRect().height, fixed: el.classList.contains('is-fixed'), from: el.dataset.fromTone, to: el.dataset.toTone})),
      reveals: revealScenes.map(box), principle: box(principleStage),
      chapterLine: Math.max(headerHeight + 40, innerHeight * .32),
      chapters: chapters.map(link => ({id: link.dataset.chapter, ...box(document.getElementById(link.dataset.chapter))})),
      sceneTop: headerHeight + 28, transitions: transitions.map(box), height: innerHeight,
      hero: box(hero), purpose: box(purpose), vision: box(visionLayout), practice: box(practiceLayout), stage: diagram.getBoundingClientRect().height
    };
    if (smoothScroll) { cancelScrollAnimation(); smoothScroll.resize(); }
    syncGlasses();
    queueMotion();
  }
  function queueMeasure() {
    if (!measureFrame) measureFrame = requestAnimationFrame(measureMotion);
  }
  function updateMotionMode() {
    const allowed = !reduced.matches && 'IntersectionObserver' in window;
    root.classList.toggle('motion-ready', allowed);
    root.classList.toggle('motion-desktop', allowed && diagramMotion.matches);
    if (!allowed) root.classList.remove('enter');
    if (glassesScene && (!allowed || !inertiaDesktop.matches || !diagramMotion.matches)) syncGlasses();
    updateSmoothScroll();
    settled = false;
    queueMeasure();
  }
  function updateMotion(time) {
    frame = 0;
    if (document.hidden || !geometry) return;
    const dockBox = glassesScene && flightBoundary ? glassesDock.getBoundingClientRect() : null;
    const enabled = root.classList.contains('motion-ready');
    const y = scrollY, g = geometry;
    const desktop = root.classList.contains('motion-desktop');
    let tone = 'paper';
    for (const surface of g.surfaces) { if (surface.top > y + g.chromeLine) break; tone = surface.tone; }
    g.cinema.forEach(scene => {
      const progress = enabled ? cinemaProgress(scene, y, g) : 1;
      scene.el.style.setProperty('--cinema-p', progress.toFixed(4));
      scene.el.style.setProperty('--cinema-enter', smooth(progress / .60).toFixed(4));
      scene.el.style.setProperty('--cinema-cross', smooth((progress - .05) / .90).toFixed(4));
      scene.el.style.setProperty('--cinema-settle', smooth((progress - .36) / .60).toFixed(4));
      scene.el.style.setProperty('--cinema-travel', smooth(progress).toFixed(4));
      scene.el.dataset.cinemaProgress = progress.toFixed(4);
      if (scene.el === glassesTrack) {
        glassesProgress = progress;
      }
      if (y + g.chromeLine >= scene.top && y + g.chromeLine < scene.top + scene.height) tone = progress < .6 ? scene.from : scene.to;
    });
    if (root.dataset.chrome !== tone) root.dataset.chrome = tone;
    const readingLine = y + g.chapterLine;
    const chapter = g.chapters.find(box => readingLine >= box.top && readingLine < box.top + box.height)?.id || '';
    if (chapter !== currentChapter) {
      currentChapter = chapter;
      chapters.forEach(link => {
        if (link.dataset.chapter === chapter) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    }
    const target = {
      hero: enabled ? clamp(y / Math.max(300, g.hero.height * .72)) : 1,
      purpose: enabled ? clamp((y + g.height * .85 - g.purpose.top) / (g.height * .8)) : 1,
      vision: enabled ? (desktop ? clamp((y + g.sceneTop - g.vision.top) / Math.max(1, g.vision.height - g.stage)) : clamp((y + g.height * .65 - g.vision.top) / Math.max(1, g.vision.height * .7))) : 1,
      practice: enabled ? clamp((y + g.height * .9 - g.practice.top) / (g.height * .75)) : 1
    };
    const dt = previousTime ? Math.min(50, time - previousTime) : 16;
    previousTime = time;
    const alpha = !enabled || !settled || smoothScroll ? 1 : 1 - Math.exp(-dt / 70);
    let moving = false;
    for (const key of Object.keys(pose)) {
      pose[key] += (target[key] - pose[key]) * alpha;
      if (Math.abs(target[key] - pose[key]) < .0005) pose[key] = target[key];
      else moving = true;
    }
    settled = true;
    hero.style.setProperty('--hero-progress', pose.hero.toFixed(4));
    purpose.style.setProperty('--purpose-progress', pose.purpose.toFixed(4));
    experiment.style.setProperty('--practice-progress', pose.practice.toFixed(4));
    const statementCamera = cameraPass(g.principle, y, g.height);
    principleStage.style.setProperty('--principle-progress', (enabled ? statementCamera.approach : 1).toFixed(4));
    principleStage.style.setProperty('--principle-exit', (enabled ? statementCamera.departure : 0).toFixed(4));
    revealScenes.forEach((el, i) => {
      el.style.setProperty('--chapter-progress', (enabled ? smooth((y + g.height * .94 - g.reveals[i].top) / (g.height * (el.id === 'contact' ? 1.30 : 1.2))) : 1).toFixed(4));
      if (el.id === 'contact') el.style.setProperty('--camera-passage', (enabled ? cameraPass(g.reveals[i], y, g.height).passage : .5).toFixed(4));
    });
    const exchange = smooth((pose.vision - .24) / .50);
    vision.style.setProperty('--exchange', exchange.toFixed(4));
    vision.style.setProperty('--manual-reveal', smooth((pose.vision - .28) / .50).toFixed(4));
    vision.style.setProperty('--manual-opacity', smooth((pose.vision - .36) / .32).toFixed(4));
    vision.style.setProperty('--voice-opacity', (1 - smooth((pose.vision - .28) / .30)).toFixed(4));
    vision.dataset.motionProgress = pose.vision.toFixed(4);
    if (glassesScene && dockBox && flightBoundary) {
      const current = glassesFlightPose(g, y, glassesProgress, dockBox, 1 - smooth((pose.vision - .28) / .30));
      glassesHost.style.transform = `translate3d(${current.x.toFixed(2)}px,${current.y.toFixed(2)}px,0) translate(-50%,-50%) scale(${current.scale.toFixed(4)})`;
      glassesHost.style.opacity = current.opacity.toFixed(4);
      flightBoundary.style.visibility = 'visible';
      glassesScene.setActive(current.visible && !document.hidden);
      if (current.visible) { glassesScene.update(glassesProgress); glassesScene.setHandoff(current.handoff); }
    }
    transitions.forEach((el, i) => {
      const b = g.transitions[i];
      // Settle the incoming surface before the threshold reaches the header.
      const travel = (y + g.height - b.top) / (g.height + b.height);
      const progress = enabled ? smooth((travel - .06) / .78) : 1;
      el.style.setProperty('--transition-progress', progress.toFixed(4));
    });
    if (moving) frame = requestAnimationFrame(updateMotion);
    else previousTime = 0;
  }
  function queueMotion() {
    if (!frame && !document.hidden) frame = requestAnimationFrame(updateMotion);
  }
  addEventListener('scroll', queueMotion, {passive: true});
  addEventListener('resize', updateMotionMode, {passive: true});
  diagramMotion.addEventListener('change', updateMotionMode);
  reduced.addEventListener('change', updateMotionMode);
  inertiaDesktop.addEventListener('change', () => { updateSmoothScroll(); syncGlasses(); });
  if ('ResizeObserver' in window) {
    const sizeObserver = new ResizeObserver(queueMeasure);
    [hero, purpose, visionLayout, practiceLayout, diagram, header, principleStage, ...cinemaTracks.map(scene => scene.stage)].forEach(el => sizeObserver.observe(el));
  }
  document.querySelectorAll('#research details').forEach(details => details.addEventListener('toggle', queueMeasure));
  if (document.fonts?.ready) document.fonts.ready.then(() => { window.SenvaBilingualLayout?.reserve(bilingualBlocks, translations, {force: true}); queueMeasure(); });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      if (frame) cancelAnimationFrame(frame);
      frame = 0; previousTime = 0;
      glassesScene?.setActive(false);
    } else queueMeasure();
  });
  try {
    const saved = localStorage.getItem('senva-language');
    if (Object.hasOwn(translations, saved)) language = saved;
  } catch { /* English remains the complete fallback. */ }
  setLanguage(language);
  root.classList.add('js');
  setMenu(false);
  updateMotionMode();
  if (!root.classList.contains('booting') && !reduced.matches && scrollY < 80 && (!location.hash || location.hash === '#home')) root.classList.add('enter');

})();
