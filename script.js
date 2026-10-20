(() => {
  'use strict';
  // English in the HTML is the complete, script-free fallback.
  const translations = {
  "en": {
    "title": "SENVA — Every gesture brings us closer",
    "description": "Exploring communication between Deaf signers and hearing people. A gloves-and-glasses concept, with LSE practice as a first research hypothesis.",
    "socialDescription": "Communication. Autonomy. Connection. Discover the idea behind SENVA and the questions we want to explore.",
    "socialImageAlt": "SENVA. A conversation. More possibilities. A conceptual path between different forms of expression. Idea / Hypothesis validation.",
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
    "pauseMotion": "Pause motion",
    "resumeMotion": "Resume motion",
    "stage": "Idea / Hypothesis validation",
    "heroEyebrow": "Communication. Autonomy. Connection.",
    "heroTitle1": "A conversation.",
    "heroTitle2": "More possibilities.",
    "heroLead": "We explore technology that could help Deaf signers and hearing people connect, with more autonomy in everyday life.",
    "heroConcrete": "The idea: gloves and glasses to support communication in both directions. The work: find out whether they should exist.",
    "heroCta": "Explore the idea",
    "heroSecondary": "Meet the founders",
    "heroFrom": "An idea.",
    "heroTo": "An encounter.",
    "heroThread": "Different forms of expression. A conversation to share.",
    "stageNote": "Only the idea exists. No prototype, interviews, tests, users, revenue or confirmed partnerships.",
    "storyLabel": "The idea, in four chapters",
    "chapterNav": "Explore the four chapters",
    "chapter1": "Why",
    "chapter2": "Two directions",
    "chapter3": "First experiment",
    "chapter4": "What must hold true",
    "purposeTitle": "A little more room for possibility.",
    "purposeBody": "Sharing an idea. Meeting someone new. Joining a spontaneous conversation. These are the everyday possibilities that motivate SENVA.",
    "purposePrinciple": "The freedom to take part. The choice to connect.",
    "purposeNote": "Starting points for research, not testimonials or needs we have already validated.",
    "visualYour": "Your idea.",
    "visualOther": "Another perspective.",
    "visualTogether": "Room for a conversation.",
    "visionTitle": "One conversation. Two directions.",
    "visionBody": "A possible gloves-and-glasses system, with the aspiration of conversing without holding or positioning a phone.",
    "directionSpeech": "Speech → captions in glasses.",
    "directionSign": "Manual information from gloves, together with other necessary linguistic information → research towards text or voice.",
    "visionNote": "The second direction is an open research challenge. Gloves alone cannot translate a whole language.",
    "conceptTag": "Concept · not a working product",
    "laneSpeech": "Speech",
    "laneGlasses": "Glasses",
    "laneCaptions": "Captions",
    "laneHands": "Manual information",
    "laneGloves": "Gloves",
    "laneMore": "Facial, bodily + spatial information",
    "laneResearch": "Research",
    "laneOutput": "Text / voice",
    "laneResearchNote": "A direction to investigate, not a translation demonstration.",
    "experimentTitle": "Start small. Ask something real.",
    "experimentBody": "One possible first experiment: selected LSE practice exercises with adult learners and teachers, to investigate sensors and useful feedback.",
    "experimentPrinciple": "Communication is the purpose. Learning is a first hypothesis.",
    "experimentAudience": "Adult LSE learners as potential users; teaching centres as possible collaborators and buyers. Both hypotheses to validate.",
    "practice1": "Practise",
    "practice2": "Explore signals",
    "practice3": "Question the feedback",
    "practiceWith": "With adult learners + teachers",
    "proofTitle": "The idea has to earn its hardware.",
    "proofBody": "Would it help? Would people choose it? Could we measure what matters? We want to answer these questions before defending a device.",
    "proofUseful": "Useful?",
    "proofPossible": "Feasible?",
    "proofAcceptable": "Acceptable?",
    "proofAlternative": "Gloves, cameras, or another approach?",
    "proofDecision": "Continue. Adapt. Or set the hardware aside.",
    "seePlan": "How we would find out",
    "planLabel": "The work ahead",
    "planTitle": "Decisions before devices.",
    "planIntro": "A future plan, shaped with the people it is meant to support. None of this research has started.",
    "plan1Title": "Define the need together.",
    "plan1Body": "Co-design with Deaf signers and hearing interlocutors: which situations are worth addressing, and what would useful, acceptable support look like?",
    "plan2Title": "Challenge the hardware choice.",
    "plan2Body": "Compare gloves and glasses with cameras, phones and existing resources. Consider autonomy, comfort, calibration, cost and accessibility.",
    "plan3Title": "Choose a question we can test.",
    "plan3Body": "If research justifies it, explore off-the-shelf sensors and a few LSE exercises selected with teachers. Assess feedback across different adult learners.",
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
    "footerStage": "An entrepreneurial project at the idea stage."
  },
  "es": {
    "title": "SENVA — Cada gesto nos acerca",
    "description": "Exploramos la comunicación entre personas sordas signantes y oyentes. Un concepto de guantes y gafas, con la práctica de LSE como primera hipótesis de investigación.",
    "socialDescription": "Comunicación. Autonomía. Conexión. Descubre la idea de SENVA y las preguntas que queremos explorar.",
    "socialImageAlt": "SENVA. Una conversación. Más posibilidades. Una trayectoria conceptual entre distintas formas de expresión. Idea / Validación de hipótesis.",
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
    "pauseMotion": "Pausar movimiento",
    "resumeMotion": "Reanudar movimiento",
    "stage": "Idea / Validación de hipótesis",
    "heroEyebrow": "Comunicación. Autonomía. Conexión.",
    "heroTitle1": "Una conversación.",
    "heroTitle2": "Más posibilidades.",
    "heroLead": "Exploramos tecnología que podría ayudar a conectar a personas sordas signantes y oyentes, con más autonomía en su día a día.",
    "heroConcrete": "La idea: guantes y gafas para asistir a la comunicación en ambas direcciones. El trabajo: descubrir si merece la pena construirlos.",
    "heroCta": "Explora la idea",
    "heroSecondary": "Conoce al equipo",
    "heroFrom": "Una idea.",
    "heroTo": "Un encuentro.",
    "heroThread": "Distintas formas de expresión. Una conversación que compartir.",
    "stageNote": "Solo existe la idea. Sin prototipo, entrevistas, pruebas, usuarios, ingresos ni alianzas confirmadas.",
    "storyLabel": "La idea, en cuatro capítulos",
    "chapterNav": "Explorar los cuatro capítulos",
    "chapter1": "El porqué",
    "chapter2": "Dos direcciones",
    "chapter3": "Primer experimento",
    "chapter4": "Por demostrar",
    "purposeTitle": "Más espacio para lo posible.",
    "purposeBody": "Compartir una idea. Conocer a alguien. Participar en una conversación espontánea. Esas posibilidades cotidianas de encuentro motivan SENVA.",
    "purposePrinciple": "La libertad de participar. La decisión de conectar.",
    "purposeNote": "Puntos de partida para investigar, no testimonios ni necesidades que ya hayamos validado.",
    "visualYour": "Tu idea.",
    "visualOther": "Otra perspectiva.",
    "visualTogether": "Espacio para conversar.",
    "visionTitle": "Una conversación. Dos direcciones.",
    "visionBody": "Un posible sistema de guantes y gafas, con la aspiración de conversar sin tener que sostener o colocar un móvil.",
    "directionSpeech": "Habla → subtítulos en las gafas.",
    "directionSign": "Información manual de los guantes, junto con la información lingüística adicional necesaria → investigación sobre salida en texto o voz.",
    "visionNote": "La segunda dirección es un reto abierto de investigación. Los guantes por sí solos no pueden traducir una lengua completa.",
    "conceptTag": "Concepto · no es un producto funcional",
    "laneSpeech": "Habla",
    "laneGlasses": "Gafas",
    "laneCaptions": "Subtítulos",
    "laneHands": "Información manual",
    "laneGloves": "Guantes",
    "laneMore": "Información facial, corporal + espacial",
    "laneResearch": "Investigación",
    "laneOutput": "Texto / voz",
    "laneResearchNote": "Una dirección por investigar, no una demostración de traducción.",
    "experimentTitle": "Empezar con algo pequeño. Preguntar algo concreto.",
    "experimentBody": "Un posible primer experimento: ejercicios acotados de práctica de LSE con estudiantes adultos y docentes para investigar sensores y feedback útil.",
    "experimentPrinciple": "La comunicación es el propósito. El aprendizaje es una primera hipótesis.",
    "experimentAudience": "Estudiantes adultos de LSE como posibles usuarios; centros docentes como posibles colaboradores y compradores. Dos hipótesis por validar.",
    "practice1": "Practicar",
    "practice2": "Explorar señales",
    "practice3": "Cuestionar el feedback",
    "practiceWith": "Con estudiantes adultos + docentes",
    "proofTitle": "El hardware tiene que demostrar su valor.",
    "proofBody": "¿Ayudaría? ¿Lo elegirían las personas? ¿Podríamos medir lo que importa? Queremos responder antes de defender un dispositivo.",
    "proofUseful": "¿Útil?",
    "proofPossible": "¿Viable?",
    "proofAcceptable": "¿Aceptable?",
    "proofAlternative": "¿Guantes, cámaras u otro enfoque?",
    "proofDecision": "Continuar. Adaptar. O descartar el hardware.",
    "seePlan": "Cómo lo contrastaríamos",
    "planLabel": "El trabajo que viene",
    "planTitle": "Decisiones antes que dispositivos.",
    "planIntro": "Un plan futuro, definido con las personas a las que quiere acompañar. Esta investigación todavía no ha comenzado.",
    "plan1Title": "Definir juntos la necesidad.",
    "plan1Body": "Codiseñar con personas sordas signantes e interlocutores oyentes: ¿qué situaciones merecen atención y cómo sería un apoyo útil y aceptable?",
    "plan2Title": "Cuestionar la elección de hardware.",
    "plan2Body": "Comparar guantes y gafas con cámaras, móviles y recursos existentes. Valorar autonomía, comodidad, calibración, coste y accesibilidad.",
    "plan3Title": "Elegir una pregunta comprobable.",
    "plan3Body": "Si la investigación lo justifica, explorar sensores comerciales y unos pocos ejercicios de LSE elegidos con docentes. Evaluar el feedback con estudiantes adultos distintos.",
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
    "footerStage": "Un proyecto emprendedor en fase de idea."
  }
};
  const root = document.documentElement;
  const menu = document.querySelector('#main-nav');
  const menuToggle = document.querySelector('.menu-toggle');
  const languageButtons = [...document.querySelectorAll('[data-language]')];
  const motionButton = document.querySelector('.motion-toggle');
  const story = document.querySelector('.story');
  const scenes = [...document.querySelectorAll('[data-step]')];
  const stage = document.querySelector('.story-stage');
  const panels = [...document.querySelectorAll('[data-panel]')];
  const chapters = [...document.querySelectorAll('[data-chapter]')];
  const mobile = window.matchMedia('(max-width: 700px)');
  const desktop = window.matchMedia('(min-width: 1100px) and (min-height: 740px)');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  let language = 'en';
  let paused = false;
  let frame = 0;
  let lastProgress = '';
  const clamp = (n) => Math.max(0, Math.min(1, n));
  const smooth = (n) => n * n * (3 - 2 * n);

  function setMenu(open, returnFocus = false) {
    const hidden = mobile.matches && !open;
    menu.classList.toggle('is-open', open);
    menu.toggleAttribute('inert', hidden);
    if (hidden) menu.setAttribute('aria-hidden', 'true');
    else menu.removeAttribute('aria-hidden');
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', translations[language][open ? 'closeMenu' : 'openMenu']);
    if (returnFocus || (hidden && menu.contains(document.activeElement))) menuToggle.focus();
    if (open && mobile.matches) menu.querySelector('a').focus({ preventScroll: true });
  }
  function updateMotion() {
    motionButton.textContent = translations[language][paused ? 'resumeMotion' : 'pauseMotion'];
    motionButton.setAttribute('aria-pressed', String(paused));
  }
  function setLanguage(next, announce = false) {
    if (!Object.hasOwn(translations, next)) return;
    const readingLine = innerHeight * .5;
    const scene = announce && scenes.find((item) => {
      const rect = item.getBoundingClientRect();
      return rect.top <= readingLine && rect.bottom > readingLine;
    });
    const before = scene && scene.getBoundingClientRect();
    const fraction = before ? (readingLine - before.top) / before.height : 0;
    if (scene) root.classList.add('language-changing');
    language = next;
    const copy = translations[next];
    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const value = copy[element.dataset.i18n];
      if (value !== undefined) element.textContent = value;
    });
    for (const [dataKey, attribute] of [['i18nAriaLabel', 'aria-label'], ['i18nAlt', 'alt']]) {
      document.querySelectorAll(attribute === 'alt' ? '[data-i18n-alt]' : '[data-i18n-aria-label]').forEach((element) => {
        const value = copy[element.dataset[dataKey]];
        if (value !== undefined) element.setAttribute(attribute, value);
      });
    }
    root.lang = next;
    document.title = copy.title;
    document.querySelector('meta[name="description"]').content = copy.description;
    document.querySelector('meta[property="og:title"]').content = copy.title;
    document.querySelector('meta[property="og:description"]').content = copy.socialDescription;
    document.querySelector('meta[property="og:image:alt"]').content = copy.socialImageAlt;
    document.querySelector('meta[property="og:locale"]').content = next === 'es' ? 'es_ES' : 'en_GB';
    languageButtons.forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.language === next)));
    menuToggle.setAttribute('aria-label', copy[menuToggle.getAttribute('aria-expanded') === 'true' ? 'closeMenu' : 'openMenu']);
    updateMotion();
    if (announce) document.querySelector('#language-announcement').textContent = copy.languageChanged;
    try { localStorage.setItem('senva-language', next); } catch { /* An optional preference. */ }
    if (scene) {
      const restore = () => {
        const rect = scene.getBoundingClientRect();
        const delta = rect.top + rect.height * fraction - readingLine;
        if (Math.abs(delta) > 1) window.scrollBy({ top: delta, behavior: 'auto' });
      };
      restore();
      requestAnimationFrame(() => { restore(); root.classList.remove('language-changing'); queueUpdate(); });
    }
    queueUpdate();
  }

  menuToggle.addEventListener('click', () => setMenu(menuToggle.getAttribute('aria-expanded') !== 'true'));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') setMenu(false, true);
  });
  document.addEventListener('click', (event) => { if (!event.target.closest('.site-header')) setMenu(false); });
  document.addEventListener('focusin', (event) => { if (!event.target.closest('.site-header')) setMenu(false); });
  mobile.addEventListener('change', () => setMenu(false));
  document.querySelectorAll('a[href^="#"]').forEach((link) => link.addEventListener('click', () => {
    const target = document.getElementById(link.hash.slice(1));
    setMenu(false);
    if (target) {
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
    }
    // The browser performs the anchor navigation; no wheel or scroll interception.
  }));
  languageButtons.forEach((button) => button.addEventListener('click', () => setLanguage(button.dataset.language, true)));
  motionButton.addEventListener('click', () => {
    paused = !paused;
    root.classList.toggle('motion-paused', paused);
    if (paused) root.classList.remove('enter');
    updateMotion();
    lastProgress = '';
    queueUpdate();
  });
  reduced.addEventListener('change', () => {
    if (reduced.matches) root.classList.remove('enter');
    lastProgress = '';
    queueUpdate();
  });

  function updateStory() {
    frame = 0;
    const bounds = scenes.map((scene) => scene.getBoundingClientRect());
    const line = innerHeight * .53;
    const animated = desktop.matches && !reduced.matches && !paused;
    const blend = Math.min(240, innerHeight * .25);
    let progress = 0;
    bounds.slice(1).forEach((rect) => {
      progress += animated ? clamp((line + blend / 2 - rect.top) / blend) : Number(rect.top <= line);
    });
    const active = Math.round(progress);
    story.dataset.active = String(active);
    chapters.forEach((link, i) => {
      if (i === active) link.setAttribute('aria-current', 'step');
      else link.removeAttribute('aria-current');
    });
    stage.querySelector('.stage-count').textContent = `0${active + 1} — 04`;
    const rounded = progress.toFixed(3);
    // Within the vision chapter, reveal the two routes in reading order.
    // Labels stay visible: this explains a concept, never live recognition.
    const visionFraction = clamp((line - bounds[1].top) / bounds[1].height);
    stage.style.setProperty('--speech-reveal', (animated ? .18 + .82 * clamp((visionFraction + .05) * 3) : 1).toFixed(3));
    stage.style.setProperty('--sign-reveal', (animated ? .18 + .82 * clamp((visionFraction - .17) * 3) : 1).toFixed(3));
    if (lastProgress === rounded) return;
    lastProgress = rounded;
    stage.style.setProperty('--progress', (progress / 3).toFixed(4));
    const from = Math.floor(progress), to = Math.min(3, from + 1), mix = smooth(progress - from);
    const poses = [[0,0,1,.8], [0,0,.85,.42], [-50,-30,.8,.4], [35,10,1,.55]];
    const pose = poses[from].map((v, i) => v + (poses[to][i] - v) * mix);
    ['--line-y','--line-angle','--line-scale','--line-opacity'].forEach((key,i) => stage.style.setProperty(key, pose[i].toFixed(3) + ['px','deg','',''][i]));
    panels.forEach((panel, i) => {
      const distance = Math.abs(progress - i);
      const opacity = animated ? smooth(clamp((.5 - distance) / .16)) : Number(i === active);
      panel.style.setProperty('--panel-opacity', opacity.toFixed(3));
      panel.style.setProperty('--panel-x', `${Math.max(-1,Math.min(1,i-progress))*24}px`);
      panel.style.setProperty('--panel-scale', (1 - Math.min(1,distance)*.012).toFixed(4));
      panel.style.visibility = opacity > .002 ? 'visible' : 'hidden';
    });
  }
  function queueUpdate() { if (!frame) frame = requestAnimationFrame(updateStory); }

  try { const saved = localStorage.getItem('senva-language'); if (Object.hasOwn(translations,saved)) language = saved; } catch { /* English fallback. */ }
  setLanguage(language);
  setMenu(false);
  root.classList.add('js');
  if (!reduced.matches && scrollY < 100 && (!location.hash || location.hash === '#home')) root.classList.add('enter');
  if ('IntersectionObserver' in window) {
    story.classList.add('can-enhance');
    new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { window.addEventListener('scroll', queueUpdate, {passive:true}); queueUpdate(); }
      else window.removeEventListener('scroll', queueUpdate);
    }).observe(story);
  }
  window.addEventListener('resize', queueUpdate, {passive:true});
  window.addEventListener('hashchange', queueUpdate);
  document.querySelectorAll('details').forEach((item) => item.addEventListener('toggle',queueUpdate));
  queueUpdate();
})();
