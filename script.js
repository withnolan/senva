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
    "heroLead": "We explore new ways for Deaf signers and hearing people to connect, with technology that could support their communication.",
    "heroCta": "Discover the vision",
    "stageNote": "Only the idea exists. No prototype, interviews, tests, users, revenue or confirmed partnerships.",
    "planLabel": "The work ahead",
    "planTitle": "Decisions before devices.",
    "planIntro": "A future plan, shaped with the people it is meant to support. None of this research has started.",
    "plan1Title": "Define the need together.",
    "plan1Body": "Co-design with Deaf signers and hearing people: which situations matter, and what support would be useful and acceptable?",
    "plan2Title": "Challenge the hardware choice.",
    "plan2Body": "Compare gloves and glasses with cameras, phones and existing resources: autonomy, comfort, calibration, cost and accessibility.",
    "plan3Title": "Choose a question we can test.",
    "plan3Body": "If justified, select a few exercises with teachers and explore off-the-shelf sensors. Assess feedback with different adult learners.",
    "planDecision": "Evidence should decide whether to continue, change direction or leave the hardware behind.",
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
    "teamBody": "Computing and business meet transmedia. Complementary fields of study, brought together by the same questions.",
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
    "xijiGoal": "The goal: learn to turn an idea into testable hypotheses and a first experiment.",
    "xijiStatus": "Application context. No admission, affiliation, endorsement or supplier commitments are implied.",
    "contactLabel": "A next step starts with a conversation",
    "contactTitle1": "Every gesture",
    "contactTitle2": "brings us closer.",
    "contactBody": "Meet the people behind the idea. Talk to either of us on LinkedIn.",
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
    "voiceBody": "Explore speech as captions in glasses, so words could stay in view while the conversation continues.",
    "signDetails": "What would we need to understand?",
    "practiceTitle": "Start small.\nLearn what matters.",
    "practiceBody": "A possible complementary LSE practice tool for adult learners and teachers: a limited setting to investigate sensors and useful feedback.",
    "practicePrinciple": "Communication is the purpose.\nLearning is a first hypothesis.",
    "practiceMore": "A complementary practice tool, with exercises to select with teachers. Adult learners are potential users; teaching centres are possible collaborators and buyers. No recognition, scores or linguistic corrections have been validated. This would not establish a route to natural-conversation translation.",
    "manualInfo": "Manual information",
    "heroSecondary": "Our next questions",
    "heroArtAlt": "Two adults facing each other, joined by a shared turquoise line. An editorial illustration of connection.",
    "purposeLabel": "01 / The purpose",
    "purposeTitle": "More room\nto take part.",
    "purposeBody": "Autonomy, participation and the freedom to join in. Everyday possibilities are the reason to explore SENVA.",
    "situation1": "Share an idea.",
    "situation2": "Meet someone new.",
    "situation3": "Join a spontaneous conversation.",
    "situationsNote": "Situations that motivate the project, not testimonials or findings from research.",
    "visionLabel": "02 / The vision",
    "visionTitle": "Two directions.\nOne conversation.",
    "visionIntro": "A possible system of gloves and glasses to assist communication in both directions. With the aspiration of avoiding the need to hold or position a phone.",
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
    "experimentQuestion2": "Would the feedback help someone practise?",
    "experimentNext": "To select and assess with teachers and adult learners.",
    "learningLabel": "A possible practice session",
    "practiceSmall": "Selected exercises · scope to define",
    "experimentLink": "Read the research boundaries",
    "chapterPurpose": "Purpose",
    "chapterVision": "Vision",
    "chapterExperiment": "First hypothesis",
    "chapterValidation": "Validation",
    "heroConcrete": "Communication is the purpose. Learning is a first hypothesis."
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
    "heroLead": "Exploramos nuevas formas de conectar a personas sordas signantes y oyentes mediante tecnología que acompañe su comunicación.",
    "heroCta": "Descubre la visión",
    "stageNote": "Solo existe la idea. Sin prototipo, entrevistas, pruebas, usuarios, ingresos ni alianzas confirmadas.",
    "planLabel": "El trabajo que viene",
    "planTitle": "Decisiones antes que dispositivos.",
    "planIntro": "Un plan futuro, definido con las personas a las que quiere acompañar. Esta investigación todavía no ha comenzado.",
    "plan1Title": "Definir juntos la necesidad.",
    "plan1Body": "Codiseñar con personas sordas signantes y oyentes qué situaciones merecen atención y qué apoyo sería útil y aceptable.",
    "plan2Title": "Cuestionar la elección de hardware.",
    "plan2Body": "Comparar guantes y gafas con cámaras, móviles y recursos existentes: autonomía, comodidad, calibración, coste y accesibilidad.",
    "plan3Title": "Elegir una pregunta comprobable.",
    "plan3Body": "Si se justifica, elegir unos pocos ejercicios con docentes y explorar sensores comerciales. Evaluar el feedback con distintos estudiantes adultos.",
    "planDecision": "La evidencia debe decidir si continuar, cambiar el enfoque o dejar atrás el hardware.",
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
    "teamBody": "Informática y empresa se encuentran con transmedia. Ámbitos de estudio complementarios, unidos por las mismas preguntas.",
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
    "xijiGoal": "El objetivo: aprender a convertir una idea en hipótesis contrastables y un primer experimento.",
    "xijiStatus": "Contexto de candidatura. No implica admisión, afiliación, respaldo ni compromisos de proveedores.",
    "contactLabel": "El siguiente paso empieza con una conversación",
    "contactTitle1": "Cada gesto",
    "contactTitle2": "nos acerca.",
    "contactBody": "Conoce a las personas detrás de la idea. Puedes hablar con cualquiera de los dos en LinkedIn.",
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
    "voiceBody": "Explorar el habla como subtítulos en las gafas, para tener las palabras a la vista mientras la conversación continúa.",
    "signDetails": "¿Qué necesitaríamos comprender?",
    "practiceTitle": "Empezar pequeño.\nAprender lo importante.",
    "practiceBody": "Una posible herramienta complementaria de práctica de LSE para estudiantes adultos y docentes: un contexto acotado para investigar sensores y feedback útil.",
    "practicePrinciple": "La comunicación es el propósito.\nEl aprendizaje es una primera hipótesis.",
    "practiceMore": "Una herramienta complementaria de práctica, con ejercicios por elegir con docentes. Los estudiantes adultos serían posibles usuarios; los centros, posibles colaboradores y compradores. No se ha validado reconocimiento, puntuaciones ni correcciones lingüísticas. Esto no demostraría una ruta hacia la traducción de conversaciones naturales.",
    "manualInfo": "Información manual",
    "heroSecondary": "Nuestras próximas preguntas",
    "heroArtAlt": "Dos personas adultas frente a frente, unidas por un trazo turquesa compartido. Ilustración editorial de conexión.",
    "purposeLabel": "01 / El propósito",
    "purposeTitle": "Más espacio\npara participar.",
    "purposeBody": "Autonomía, participación y libertad para sumarse. Las posibilidades cotidianas son la razón para explorar SENVA.",
    "situation1": "Compartir una idea.",
    "situation2": "Conocer a alguien.",
    "situation3": "Participar en una conversación espontánea.",
    "situationsNote": "Situaciones que motivan el proyecto, no testimonios ni resultados de investigación.",
    "visionLabel": "02 / La visión",
    "visionTitle": "Dos direcciones.\nUna conversación.",
    "visionIntro": "Un posible sistema de guantes y gafas para asistir a la comunicación en ambas direcciones. Con la aspiración de evitar sostener o colocar un móvil.",
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
    "experimentQuestion2": "¿Ayudaría el feedback a practicar?",
    "experimentNext": "Por seleccionar y evaluar con docentes y estudiantes adultos.",
    "learningLabel": "Una posible sesión de práctica",
    "practiceSmall": "Ejercicios seleccionados · alcance por definir",
    "experimentLink": "Leer los límites de investigación",
    "chapterPurpose": "Propósito",
    "chapterVision": "Visión",
    "chapterExperiment": "Primera hipótesis",
    "chapterValidation": "Validación",
    "heroConcrete": "La comunicación es el propósito. El aprendizaje es una primera hipótesis."
  }
};
  const root = document.documentElement;
  const menu = document.querySelector('#main-nav');
  const toggle = document.querySelector('.menu-toggle');
  const mobile = matchMedia('(max-width: 760px)');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const diagramMotion = matchMedia('(min-width: 1000px) and (min-height: 640px)');
  const languages = [...document.querySelectorAll('[data-language]')];
  const diagram = document.querySelector('.vision-diagram');
  let language = 'en';

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
      if (reading && scrollY > 100) {
        root.classList.add('language-changing');
        scrollBy({top: reading.getBoundingClientRect().top - top, behavior: 'auto'});
        requestAnimationFrame(() => root.classList.remove('language-changing'));
      }
    }
    try { localStorage.setItem('senva-language', next); } catch { /* Optional preference. */ }
    queueMotion();
  }

  toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') setMenu(false, true);
  });
  document.addEventListener('click', event => { if (!event.target.closest('.site-header')) setMenu(false); });
  document.addEventListener('focusin', event => { if (!event.target.closest('.site-header')) setMenu(false); });
  mobile.addEventListener('change', () => setMenu(false));
  document.querySelectorAll('a[href^="#"]').forEach(link => link.addEventListener('click', () => {
    const target = document.getElementById(link.hash.slice(1));
    setMenu(false);
    if (target) { target.setAttribute('tabindex', '-1'); target.focus({preventScroll: true}); }
  }));
  languages.forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.language, true)));

  // One native-scroll controller, active only near the three visual sequences.
  // Copy stays in normal flow; only decorative 2D layers use these progress values.
  let frame = 0;
  const clamp = value => Math.max(0, Math.min(1, value));
  const smooth = value => { value = clamp(value); return value * value * (3 - 2 * value); };
  const mix = (a, b, value) => a + (b - a) * value;
  const hero = document.querySelector('.hero');
  const purpose = document.querySelector('.purpose');
  const vision = document.querySelector('.vision');
  const visionLayout = document.querySelector('.vision-layout');
  const experiment = document.querySelector('.experiment');
  const practiceLayout = document.querySelector('.experiment-layout');
  const artboard = document.querySelector('.vision-artboard');
  const readingA = document.querySelector('[data-route="voice"] .vision-copy');
  const readingB = document.querySelector('[data-route="manual"] .vision-copy');
  const blocks = [hero, purpose, vision, experiment];
  const visibleBlocks = new Set();
  const percentX = value => (value / 12).toFixed(3) + '%';
  const percentY = value => (value / 6.4).toFixed(3) + '%';
  const styles = (element, values) => {
    for (const [name, value] of Object.entries(values)) element.style.setProperty(name, String(value));
  };
  function updateMotionMode() {
    const allowed = !reduced.matches && 'IntersectionObserver' in window;
    root.classList.toggle('motion-ready', allowed);
    root.classList.toggle('motion-desktop', allowed && diagramMotion.matches);
    if (!allowed) root.classList.remove('enter');
    if (allowed && visibleBlocks.size) addEventListener('scroll', queueMotion, {passive: true});
    else removeEventListener('scroll', queueMotion);
    queueMotion();
  }
  function updateMotion() {
    frame = 0;
    if (document.hidden) return;
    const height = innerHeight;
    const enabled = root.classList.contains('motion-ready');
    const header = document.querySelector('.site-header').getBoundingClientRect().height;
    if (visibleBlocks.has(hero) || !enabled) {
      const box = hero.getBoundingClientRect();
      const value = enabled ? clamp((header - box.top) / Math.max(240, box.height * .72)) : 1;
      const picture = hero.querySelector('.conversation-art').getBoundingClientRect();
      const personShift = (innerWidth <= 760 ? 20 : 44) * 720 / Math.max(1, picture.width);
      styles(hero, {'--hero-progress': value.toFixed(4), '--person-shift': personShift.toFixed(2) + 'px'});
    }
    if (visibleBlocks.has(purpose) || !enabled) {
      const box = purpose.getBoundingClientRect();
      const value = enabled ? clamp((height * .9 - box.top) / (height * .75)) : 1;
      purpose.style.setProperty('--purpose-progress', value.toFixed(4));
    }
    if (visibleBlocks.has(experiment) || !enabled) {
      const box = practiceLayout.getBoundingClientRect();
      const value = enabled ? clamp((height * .95 - box.top) / (height * .78)) : 1;
      experiment.style.setProperty('--practice-progress', value.toFixed(4));
    }
    if (!visibleBlocks.has(vision) && enabled) return;
    const layout = visionLayout.getBoundingClientRect();
    if (!root.classList.contains('motion-desktop')) {
      const value = enabled ? clamp((height * .9 - layout.top) / (height * .9)) : 1;
      styles(vision, {'--mobile-vision-progress': value.toFixed(4), '--mobile-line-progress': (.25 + value * .75).toFixed(4)});
      vision.dataset.motionProgress = value.toFixed(4);
      return;
    }
    const stage = diagram.getBoundingClientRect();
    const board = artboard.getBoundingClientRect();
    const scale = board.width / 1200;
    const range = Math.max(1, layout.height - stage.height);
    const progress = clamp((88 - layout.top) / range);
    const a = readingA.getBoundingClientRect();
    const b = readingB.getBoundingClientRect();
    const crossing = smooth((progress - .28) / .44);
    const gs = mix(.82, .5, crossing);
    // Reserve the actual concept/status band as well as the main copy. The
    // external SVG image box includes its lens whitespace, so use its full
    // 250-unit height when keeping the upper crossing below that band.
    const legendBottom = Math.max(
      diagram.querySelector('.diagram-head').getBoundingClientRect().bottom,
      diagram.querySelector('figcaption').getBoundingClientRect().bottom
    );
    const minimumGy = (legendBottom + 22 - board.top) / scale + 125 * gs;
    const gy = Math.max(minimumGy, mix(250, 130, crossing) - Math.sin(Math.PI * crossing) * 55);
    const laneTop = board.top + (gy - 125 * gs) * scale;
    const clearLane = smooth((laneTop - a.bottom - 14) / Math.max(45, 90 * scale));
    const glassesTravel = crossing * clearLane;
    const gx = mix(850, 300, glassesTravel);
    const source = gx - 330 * gs - 50;
    const manualTravel = smooth((progress - .29) / .42);
    const gloveVisible = smooth((progress - .26) / .13);
    const labelsVisible = smooth((progress - .49) / .20);
    const hx = mix(900, 310, manualTravel);
    let hy = mix(500, 390, manualTravel) - Math.sin(Math.PI * manualTravel) * 85;
    let hs = .58 - Math.sin(Math.PI * manualTravel) * .12;
    // The glove traverses the gap between the outgoing left copy and the
    // incoming right copy. Real text boxes define that gap after translation.
    const halfWidth = 155 * hs * scale;
    const centreX = board.left + hx * scale;
    let low = 45 + 230 * hs;
    let high = 625 - 230 * hs;
    if (centreX - halfWidth < a.right + 22 && centreX + halfWidth > a.left - 22 && a.bottom > header) {
      low = Math.max(low, (a.bottom + 22 - board.top) / scale + 230 * hs);
    }
    if (centreX + halfWidth > b.left - 22 && centreX - halfWidth < b.right + 22 && b.top < height) {
      high = Math.min(high, (b.top - 22 - board.top) / scale - 230 * hs);
    }
    if (low <= high) hy = Math.max(low, Math.min(high, hy));
    const outputX = hx - 190;
    const captionY = gy + 115 * gs + 15;
    const manualLabelY = hy + 230 * hs + 15;
    const manualLabelHeight = document.querySelector('.stage-manual-label').getBoundingClientRect().height;
    const researchY = manualLabelY + (manualLabelHeight + 14) / scale;
    const voicePath = document.querySelector('.stage-voice-path');
    const manualPath = document.querySelector('.stage-manual-path');
    voicePath.setAttribute('d', `M${source + 38} ${gy}C${source + 75} ${gy} ${gx - 245 * gs - 20} ${gy} ${gx - 245 * gs} ${gy}M${gx} ${gy + 78 * gs}C${gx} ${captionY - 14} ${gx} ${captionY - 14} ${gx} ${captionY - 10}`);
    manualPath.setAttribute('d', `M${hx - 90 * hs} ${hy}C${hx - 120} ${hy} ${outputX + 70} ${hy} ${outputX + 42} ${hy}`);
    styles(vision, {
      '--glasses-x': gx.toFixed(2) + 'px', '--glasses-y': gy.toFixed(2) + 'px', '--glasses-scale': gs.toFixed(4),
      '--source-x': source.toFixed(2) + 'px', '--source-scale': mix(1, .7, crossing).toFixed(4),
      '--glove-x': hx.toFixed(2) + 'px', '--glove-y': hy.toFixed(2) + 'px', '--glove-scale': hs.toFixed(4),
      '--field-x': mix(850, 310, smooth((progress - .3) / .45)).toFixed(2) + 'px', '--field-y': '325px', '--field-scale': mix(1, .96, crossing).toFixed(4),
      '--manual-visible': gloveVisible.toFixed(4), '--manual-label-visible': labelsVisible.toFixed(4),
      '--voice-dash': (1 - smooth((progress - .02) / .2)).toFixed(4), '--manual-dash': (1 - labelsVisible).toFixed(4),
      '--source-label-x': percentX(source), '--source-label-y': percentY(gy + 56),
      '--caption-x': percentX(gx), '--caption-y': percentY(captionY),
      '--manual-label-x': percentX(hx), '--manual-label-y': percentY(manualLabelY),
      '--output-x': percentX(outputX), '--output-y': percentY(hy - 42),
      '--research-y': percentY(researchY), '--legend-left': mix(56, 0, glassesTravel).toFixed(3) + '%'
    });
    vision.dataset.motionProgress = progress.toFixed(4);
  }
  function queueMotion() { if (!frame) frame = requestAnimationFrame(updateMotion); }
  if ('IntersectionObserver' in window) {
    const motionObserver = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) visibleBlocks.add(entry.target);
        else visibleBlocks.delete(entry.target);
      }
      if (visibleBlocks.size && !reduced.matches) { addEventListener('scroll', queueMotion, {passive: true}); queueMotion(); }
      else removeEventListener('scroll', queueMotion);
    }, {rootMargin: '100px 0px'});
    blocks.forEach(block => motionObserver.observe(block));
    const chapters = [...document.querySelectorAll('[data-chapter]')];
    const chapterObserver = new IntersectionObserver(entries => {
      for (const entry of entries) if (entry.isIntersecting) {
        chapters.forEach(link => {
          if (link.dataset.chapter === entry.target.id) link.setAttribute('aria-current', 'step');
          else link.removeAttribute('aria-current');
        });
      }
    }, {rootMargin: '-15% 0px -55% 0px', threshold: 0});
    chapters.forEach(link => chapterObserver.observe(document.getElementById(link.dataset.chapter)));
  }
  addEventListener('resize', updateMotionMode, {passive: true});
  diagramMotion.addEventListener('change', updateMotionMode);
  reduced.addEventListener('change', updateMotionMode);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden && frame) { cancelAnimationFrame(frame); frame = 0; }
    else queueMotion();
  });
  try {
    const saved = localStorage.getItem('senva-language');
    if (Object.hasOwn(translations, saved)) language = saved;
  } catch { /* English remains the complete fallback. */ }
  setLanguage(language);
  root.classList.add('js');
  setMenu(false);
  updateMotionMode();
  if (!reduced.matches && scrollY < 80 && (!location.hash || location.hash === '#home')) root.classList.add('enter');

})();
