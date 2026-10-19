(() => {
  'use strict';

  // English also lives in index.html so the complete page works without JavaScript.
  // Arrays insert intentional line breaks using DOM nodes, never HTML strings.
  const translations = {
    "en": {
        "title": "SENVA — Conversations open possibilities",
        "description": "SENVA explores ways to reduce communication barriers between Deaf signers and hearing people. A gloves-and-glasses concept at the idea and hypothesis-validation stage.",
        "socialDescription": "Communication is the purpose. Exploring autonomy, participation and everyday connection between Deaf signers and hearing people.",
        "socialImageAlt": "SENVA. Every gesture brings us closer. A conceptual illustration of connected gloves and glasses in turquoise on night blue.",
        "skip": "Skip to content",
        "homeLabel": "SENVA — home",
        "navLabel": "Main navigation",
        "navConcept": "The vision",
        "navApproach": "Our approach",
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
        "heroEyebrow": "More autonomy. More ways to connect.",
        "heroTitle1": "A conversation",
        "heroTitle2": "opens possibilities.",
        "heroDescription": "We explore new ways to connect Deaf signers and hearing people through technology that supports their communication.",
        "exploreConcept": "Discover the vision",
        "meetFounders": "Meet the founders",
        "artHeading": "A communication concept",
        "conceptIllustration": "Concept illustration",
        "stage": "Idea / Hypothesis validation",
        "stageNote": "No prototype, interviews, results or confirmed partnerships yet.",
        "discoverPlan": "Discover the validation plan",
        "opportunityLabel": "The purpose",
        "opportunityTitle": "Everyday moments. Possibilities to share.",
        "opportunityLead": "More autonomy. More participation. More room for everyday connection.",
        "opportunityBody": "Our mission is to contribute to reducing communication barriers between Deaf signers and hearing people. Reciprocity and the freedom to participate guide what we want to explore.",
        "opportunityHonesty": "These everyday situations motivate the project. They are starting points for questions, not researched experiences or testimonials.",
        "firstAudience": "Our first audience",
        "audienceStudents": "Adult LSE students",
        "audienceCentres": "LSE teaching centres",
        "audienceNote": "Students as users; centres as potential collaborators and buyers. Both hypotheses to validate.",
        "conceptLabel": "A first hypothesis",
        "conceptTitle1": "Start small.",
        "conceptTitle2": "Learn what matters.",
        "conceptBody": "One possible first application is a pair of sensor gloves and an app for adult LSE learners. With teachers, we would investigate sensors and feedback on selected aspects of hand configuration and movement in specific practice exercises.",
        "conceptPrinciple": "A possible research starting point that complements teaching. It is not a guaranteed route to translation.",
        "proposedFlow": "Proposed practice flow",
        "flowPractice": "Practice",
        "flowPracticeBody": "An exercise selected with teachers.",
        "flowCapture": "Capture",
        "flowCaptureBody": "Explore measurable hand configuration and movement.",
        "flowAnalyse": "Analyse",
        "flowAnalyseBody": "Investigate what the signals can reliably tell us.",
        "flowFeedback": "Offer feedback",
        "flowFeedbackBody": "Test whether guidance is correct, clear and useful.",
        "flowNote": "A research direction, not a working product. Sensors and system architecture are still to be explored.",
        "scopeLabel": "A deliberate first scope",
        "scopeBody": "Spanish Sign Language (LSE), adult learners, a small set of exercises. Sign languages are distinct; this concept does not assume a universal system.",
        "questionsLabel": "Questions before hardware",
        "questionsTitle": "What would useful support look like?",
        "questionsIntro": "Technology has to earn its place in a conversation, and in people’s lives.",
        "centralQuestion": "Which communication needs are worth addressing, and would gloves and glasses be useful and acceptable to the people using them?",
        "question1": "What can the sensors actually tell us?",
        "answer1": "Which aspects of hand configuration and movement could be measured reliably? We must also explore how to establish hand position relative to the body; inertial sensors alone cannot be assumed to solve it.",
        "question2": "Could learning be a useful first experiment?",
        "answer2": "Could feedback justify gloves’ cost, calibration and discomfort compared with cameras and existing learning resources? Teachers would need to verify the feedback, and students would need to understand and use it. This would test a practice hypothesis, not validate conversation translation.",
        "question3": "What would communication assistance require?",
        "answer3": "Facial expression, body movement and the use of space carry linguistic information. Recognising hand movements is not the same as understanding a language. Any future communication research would require its own study and data from competent signers; beginner practice data would not be enough.",
        "validationLabel": "The work ahead",
        "validationTitle": "Evidence before assumptions.",
        "validationIntro": "A proposed path from an idea to an informed decision. Co-design with Deaf signers would help define the needs worth addressing and whether the proposed hardware is useful and acceptable.",
        "plan1Title": "Define the need together",
        "plan1Body": "Plan research with Deaf signers and hearing interlocutors around communication needs. Separately, explore practice difficulties with adult LSE learners and teachers.",
        "plan2Title": "Challenge the hardware choice",
        "plan2Body": "Compare the proposed hardware with camera-based, phone-based and existing educational alternatives for usefulness, accessibility, acceptability, comfort and cost.",
        "plan3Title": "Choose a first experiment",
        "plan3Body": "If the research justifies it, explore a limited practice experiment with off-the-shelf sensors and a few exercises chosen with teachers.",
        "plan4Title": "Evaluate with people",
        "plan4Body": "Involve Deaf signers in assessing usefulness and acceptability. For the practice experiment, evaluate feedback with teachers and learners, including calibration and comfort across different people.",
        "plan5Title": "Let the evidence decide",
        "plan5Body": "Continue, change direction or set the gloves aside. A useful answer matters more than defending the original idea.",
        "participationNote": "Co-design is a commitment in our proposed plan. Deaf signers should help shape the questions, the design and the evaluation. No interviews or collaborations have started yet.",
        "visionGraphic": "A possibility to investigate",
        "visionLabel": "The vision",
        "visionTitle": "Both directions. A shared conversation.",
        "visionStatus": "Research concept · no prototype",
        "visionBody": "We imagine a possible system of gloves and glasses to assist communication in both directions. Gloves could contribute manual signals to research on assistance from Spanish Sign Language (LSE) to speech or text, alongside other linguistic information. Glasses could display captions of the interlocutor’s speech and add sensors if their value is demonstrated.",
        "visionAspiration": "The aspiration: more freedom to converse, without having to hold or position a phone.",
        "visionLimit": "This is a concept to investigate with competent signers. It does not promise perfect, universal or real-time translation. A learning experiment would not by itself establish a path to natural conversation.",
        "teamLabel": "The people behind the idea",
        "teamTitle": [
            "Two perspectives.",
            "One shared question."
        ],
        "teamIntro": "Computing and business meet transmedia. Different fields of study, with the potential to connect technical exploration, communication and an understanding of value.",
        "cofounder": "Co-founder",
        "nolanPortrait": "Portrait of Shengyu Nolan Chen",
        "santiagoPortrait": "Portrait of Santiago Muñoz Veguillas",
        "nolanLinkedInLabel": "Shengyu Nolan Chen on LinkedIn (opens in a new tab)",
        "santiagoLinkedInLabel": "Santiago Muñoz Veguillas on LinkedIn (opens in a new tab)",
        "nolanStudies": "Student of Computer Science and Business Administration at Universidad Carlos III de Madrid (UC3M).",
        "santiagoStudies": "Bachelor’s degree student in Design and Management of Transmedia Projects at CSEU La Salle.",
        "collaboratorNote": "With contributions from two student collaborators during the ideation phase.",
        "xijiLabel": "Why Xiji · Shanghai",
        "xijiTitle": [
            "A place to learn.",
            "A chance to question."
        ],
        "xijiIntro": "Santiago’s application to Xiji Incubator is an opportunity to learn how to turn SENVA’s communication mission into testable hypotheses and a first experiment.",
        "applicationLabel": "Application context · no affiliation or endorsement",
        "xiji1Title": "Broaden the perspective",
        "xiji1Body": "Build knowledge and international experience, and learn about China’s entrepreneurial ecosystem.",
        "xiji2Title": "Understand hardware development",
        "xiji2Body": "Explore how access to components, suppliers and hardware development knowledge could help investigate the concept.",
        "xiji3Title": "Make the first experiment count",
        "xiji3Body": "Learn to frame the right questions, test assumptions and use evidence to decide what comes next.",
        "contactLabel": "The next step starts with a conversation",
        "contactTitle": "Let’s ask better questions.",
        "brandMeaning": "Every gesture brings us closer.",
        "repositoryLabel": "View the SENVA repository on GitHub (opens in a new tab)",
        "repository": "Explore the repository",
        "footerStage": "An entrepreneurial project at the idea stage.",
        "backTop": "Back to top",
        "heroVision": "Our vision: a possible system of gloves and glasses to assist communication in both directions.",
        "moment1": "Share an idea",
        "moment2": "Meet someone new",
        "moment3": "Join a spontaneous conversation",
        "glovesLabel": "Gloves",
        "glassesLabel": "Glasses",
        "manualSignals": "Manual signals",
        "speechCaptions": "Speech captions",
        "purposeBridge": "Communication is the purpose. Learning is a first hypothesis we will explore.",
        "storyLabel": "Connection, step by step",
        "storyTitle": "Start with a person. Keep the conversation in view.",
        "story1Title": "A person",
        "story1Body": "Their language, choices and context come first. The questions should be shaped with Deaf signers, not decided on their behalf.",
        "story2Title": "A gesture",
        "story2Body": "Hands are part of a language. Facial expression, the body and space also matter; a movement signal alone cannot carry a whole conversation.",
        "story3Title": "A technology",
        "story3Body": "Gloves, glasses or another approach: we want to find out what could help without adding unnecessary effort, discomfort or dependence.",
        "story4Title": "A connection",
        "story4Body": "The purpose is reciprocal participation: sharing an idea, meeting someone and having more possibilities to connect on your own terms.",
        "storyNode1": "Person",
        "storyNode2": "Gesture",
        "storyNode3": "Technology",
        "storyNode4": "Connection",
        "storyCaption": "A direction for research, shaped by people."
    },
    "es": {
        "title": "SENVA — Que una conversación abra posibilidades",
        "description": "SENVA explora formas de reducir las barreras de comunicación entre personas sordas signantes y oyentes. Un concepto de guantes y gafas en fase de idea y validación de hipótesis.",
        "socialDescription": "La comunicación es el propósito. Exploramos autonomía, participación y conexión cotidiana entre personas sordas signantes y oyentes.",
        "socialImageAlt": "SENVA. Cada gesto nos acerca. Ilustración conceptual de guantes y gafas conectados, en turquesa sobre azul noche.",
        "skip": "Saltar al contenido",
        "homeLabel": "SENVA — inicio",
        "navLabel": "Navegación principal",
        "navConcept": "La visión",
        "navApproach": "Nuestro enfoque",
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
        "heroEyebrow": "Más autonomía. Más formas de conectar.",
        "heroTitle1": "Que una conversación",
        "heroTitle2": "abra posibilidades.",
        "heroDescription": "Exploramos nuevas formas de conectar a personas sordas signantes y oyentes mediante tecnología que acompañe su comunicación.",
        "exploreConcept": "Descubre la visión",
        "meetFounders": "Conoce al equipo",
        "artHeading": "Un concepto de comunicación",
        "conceptIllustration": "Ilustración conceptual",
        "stage": "Idea / Validación de hipótesis",
        "stageNote": "Sin prototipo, entrevistas, resultados ni alianzas confirmadas.",
        "discoverPlan": "Descubrir el plan de validación",
        "opportunityLabel": "El propósito",
        "opportunityTitle": "Momentos cotidianos. Posibilidades que compartir.",
        "opportunityLead": "Más autonomía. Más participación. Más espacio para conectar cada día.",
        "opportunityBody": "Nuestra misión es contribuir a reducir las barreras de comunicación entre personas sordas signantes y oyentes. La reciprocidad y la libertad de participar guían lo que queremos explorar.",
        "opportunityHonesty": "Estas situaciones cotidianas motivan el proyecto. Son puntos de partida para hacer preguntas, no experiencias investigadas ni testimonios.",
        "firstAudience": "Nuestro primer público",
        "audienceStudents": "Estudiantes adultos de LSE",
        "audienceCentres": "Centros que enseñan LSE",
        "audienceNote": "Estudiantes como usuarios; centros como posibles colaboradores y compradores. Ambas son hipótesis por validar.",
        "conceptLabel": "Una primera hipótesis",
        "conceptTitle1": "Empezar en pequeño.",
        "conceptTitle2": "Aprender lo que importa.",
        "conceptBody": "Una posible primera aplicación son unos guantes con sensores y una aplicación para estudiantes adultos de LSE. Con docentes, investigaríamos sensores y feedback sobre determinados aspectos de la configuración y el movimiento de las manos en ejercicios concretos de práctica.",
        "conceptPrinciple": "Un posible punto de partida para investigar que complementa la enseñanza. No es una ruta garantizada hacia la traducción.",
        "proposedFlow": "Flujo de práctica propuesto",
        "flowPractice": "Practicar",
        "flowPracticeBody": "Un ejercicio elegido con docentes.",
        "flowCapture": "Captar",
        "flowCaptureBody": "Explorar aspectos medibles de la configuración y el movimiento de las manos.",
        "flowAnalyse": "Analizar",
        "flowAnalyseBody": "Investigar qué pueden decirnos las señales de forma fiable.",
        "flowFeedback": "Ofrecer feedback",
        "flowFeedbackBody": "Evaluar si la orientación es correcta, clara y útil.",
        "flowNote": "Una dirección de investigación, no un producto operativo. Los sensores y la arquitectura del sistema están por explorar.",
        "scopeLabel": "Un primer alcance acotado",
        "scopeBody": "Lengua de signos española (LSE), estudiantes adultos y un conjunto pequeño de ejercicios. Las lenguas de signos son distintas; este concepto no presupone un sistema universal.",
        "questionsLabel": "Preguntas antes que hardware",
        "questionsTitle": "¿Cómo sería una ayuda útil?",
        "questionsIntro": "La tecnología tiene que aportar valor a la conversación y a la vida de las personas.",
        "centralQuestion": "¿Qué necesidades de comunicación merece la pena abordar? ¿Serían los guantes y las gafas útiles y aceptables para quienes los utilicen?",
        "question1": "¿Qué pueden decirnos realmente los sensores?",
        "answer1": "¿Qué aspectos de la configuración y el movimiento de las manos podrían medirse de forma fiable? También debemos explorar cómo determinar la posición de las manos respecto al cuerpo; no podemos dar por hecho que los sensores inerciales, por sí solos, lo resuelvan.",
        "question2": "¿Puede el aprendizaje ser un primer experimento útil?",
        "answer2": "¿Justificaría el feedback el coste, la calibración y la incomodidad de los guantes frente a cámaras y recursos educativos existentes? Los docentes tendrían que verificar el feedback y los estudiantes entenderlo y aprovecharlo. Se contrastaría una hipótesis de práctica, no se validaría la traducción de conversaciones.",
        "question3": "¿Qué requeriría la asistencia a la comunicación?",
        "answer3": "La expresión facial, el movimiento del cuerpo y el uso del espacio contienen información lingüística. Reconocer movimientos de las manos no equivale a comprender una lengua. Una futura investigación sobre comunicación necesitaría un estudio propio y datos de personas signantes competentes; los datos de práctica de principiantes no bastarían.",
        "validationLabel": "El trabajo por delante",
        "validationTitle": "Evidencia antes que suposiciones.",
        "validationIntro": "Un camino propuesto para pasar de una idea a una decisión informada. El codiseño con personas sordas signantes ayudaría a definir qué necesidades merece la pena resolver y si el hardware resulta útil y aceptable.",
        "plan1Title": "Definir juntos la necesidad",
        "plan1Body": "Plantear investigación con personas sordas signantes e interlocutores oyentes sobre necesidades de comunicación. Explorar por separado las dificultades de práctica con estudiantes adultos de LSE y docentes.",
        "plan2Title": "Cuestionar la elección del hardware",
        "plan2Body": "Comparar el hardware propuesto con alternativas basadas en cámara, móvil y recursos educativos existentes en utilidad, accesibilidad, aceptabilidad, comodidad y coste.",
        "plan3Title": "Elegir un primer experimento",
        "plan3Body": "Si la investigación lo justifica, explorar un experimento de práctica limitado con sensores comerciales y unos pocos ejercicios elegidos con docentes.",
        "plan4Title": "Evaluar con las personas",
        "plan4Body": "Involucrar a personas sordas signantes al evaluar utilidad y aceptabilidad. En el experimento de práctica, valorar el feedback con docentes y estudiantes, incluida la calibración y la comodidad con personas distintas.",
        "plan5Title": "Dejar que la evidencia decida",
        "plan5Body": "Continuar, cambiar el enfoque o descartar los guantes. Una respuesta útil importa más que defender la idea original.",
        "participationNote": "El codiseño es un compromiso de nuestro plan propuesto. Las personas sordas signantes deben contribuir a definir las preguntas, el diseño y la evaluación. Todavía no han comenzado las entrevistas ni las colaboraciones.",
        "visionGraphic": "Una posibilidad por investigar",
        "visionLabel": "La visión",
        "visionTitle": "Ambas direcciones. Una conversación compartida.",
        "visionStatus": "Concepto en investigación · sin prototipo",
        "visionBody": "Imaginamos un posible sistema de guantes y gafas para asistir a la comunicación en ambas direcciones. Los guantes podrían aportar información manual a la investigación sobre asistencia de lengua de signos española (LSE) a voz o texto, junto con otra información lingüística. Las gafas podrían mostrar subtítulos del habla del interlocutor y añadir sensores si se demuestra su utilidad.",
        "visionAspiration": "La aspiración: más libertad para conversar, sin tener que sostener o colocar un móvil.",
        "visionLimit": "Es un concepto que investigar con personas signantes competentes. No promete traducción perfecta, universal ni en tiempo real. Un experimento de aprendizaje no demostraría, por sí solo, una ruta hacia la conversación natural.",
        "teamLabel": "Las personas detrás de la idea",
        "teamTitle": [
            "Dos perspectivas.",
            "Una pregunta compartida."
        ],
        "teamIntro": "La informática y la empresa se encuentran con el transmedia. Ámbitos de estudio distintos, con el potencial de conectar exploración técnica, comunicación y comprensión del valor.",
        "cofounder": "Cofundador",
        "nolanPortrait": "Retrato de Shengyu Nolan Chen",
        "santiagoPortrait": "Retrato de Santiago Muñoz Veguillas",
        "nolanLinkedInLabel": "Shengyu Nolan Chen en LinkedIn (se abre en una pestaña nueva)",
        "santiagoLinkedInLabel": "Santiago Muñoz Veguillas en LinkedIn (se abre en una pestaña nueva)",
        "nolanStudies": "Estudiante de Informática y Administración y Dirección de Empresas en la Universidad Carlos III de Madrid (UC3M).",
        "santiagoStudies": "Estudiante del Grado en Diseño y Gestión de Proyectos Transmedia en CSEU La Salle.",
        "collaboratorNote": "Con aportaciones de dos estudiantes colaboradoras durante la fase de ideación.",
        "xijiLabel": "Por qué Xiji · Shanghái",
        "xijiTitle": [
            "Un lugar para aprender.",
            "Una oportunidad para preguntar."
        ],
        "xijiIntro": "La candidatura de Santiago a Xiji Incubator es una oportunidad para aprender a convertir la misión de comunicación de SENVA en hipótesis contrastables y un primer experimento.",
        "applicationLabel": "Contexto de candidatura · sin afiliación ni respaldo",
        "xiji1Title": "Ampliar la perspectiva",
        "xiji1Body": "Ampliar conocimientos y experiencia internacional, y conocer el ecosistema emprendedor chino.",
        "xiji2Title": "Comprender el desarrollo de hardware",
        "xiji2Body": "Explorar cómo el acceso a componentes, proveedores y conocimiento sobre desarrollo de hardware podría ayudar a investigar el concepto.",
        "xiji3Title": "Dar sentido al primer experimento",
        "xiji3Body": "Aprender a plantear las preguntas adecuadas, contrastar hipótesis y decidir los siguientes pasos a partir de la evidencia.",
        "contactLabel": "El siguiente paso empieza con una conversación",
        "contactTitle": "Hagamos mejores preguntas.",
        "brandMeaning": "Cada gesto nos acerca.",
        "repositoryLabel": "Ver el repositorio de SENVA en GitHub (se abre en una pestaña nueva)",
        "repository": "Explorar el repositorio",
        "footerStage": "Un proyecto emprendedor en fase de idea.",
        "backTop": "Volver al inicio",
        "heroVision": "Nuestra visión: un posible sistema de guantes y gafas para asistir a la comunicación en ambas direcciones.",
        "moment1": "Compartir una idea",
        "moment2": "Conocer a alguien",
        "moment3": "Participar en una conversación espontánea",
        "glovesLabel": "Guantes",
        "glassesLabel": "Gafas",
        "manualSignals": "Información manual",
        "speechCaptions": "Subtítulos del habla",
        "purposeBridge": "La comunicación es el propósito. El aprendizaje es una primera hipótesis que exploraremos.",
        "storyLabel": "La conexión, paso a paso",
        "storyTitle": "Empezar por la persona. Tener presente la conversación.",
        "story1Title": "Una persona",
        "story1Body": "Su lengua, sus decisiones y su contexto son el punto de partida. Las preguntas deben definirse con personas sordas signantes, contando con su criterio.",
        "story2Title": "Un gesto",
        "story2Body": "Las manos forman parte de una lengua. La expresión facial, el cuerpo y el espacio también importan; una señal de movimiento, por sí sola, no contiene toda una conversación.",
        "story3Title": "Una tecnología",
        "story3Body": "Guantes, gafas u otro enfoque: queremos descubrir qué podría ayudar sin añadir esfuerzo, incomodidad o dependencia innecesarios.",
        "story4Title": "Una conexión",
        "story4Body": "El propósito es participar de forma recíproca: compartir una idea, conocer a alguien y tener más posibilidades de conectar con autonomía.",
        "storyNode1": "Persona",
        "storyNode2": "Gesto",
        "storyNode3": "Tecnología",
        "storyNode4": "Conexión",
        "storyCaption": "Una dirección de investigación, definida con las personas."
    }
};

  const storageKey = 'senva-language';
  const menu = document.querySelector('#main-nav');
  const menuToggle = document.querySelector('.menu-toggle');
  const languageButtons = document.querySelectorAll('[data-language]');
  const mobileViewport = window.matchMedia('(max-width: 600px)');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const motionButton = document.querySelector('.motion-toggle');
  let motionPaused = false;
  let language = 'en';

  function updateMotionButton() {
    const label = translations[language][motionPaused ? 'resumeMotion' : 'pauseMotion'];
    motionButton.textContent = label;
  }

  function setMenu(open, returnFocus = false) {
    menu.classList.toggle('is-open', open);
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', translations[language][open ? 'closeMenu' : 'openMenu']);
    if (returnFocus) menuToggle.focus();
  }

  function replaceText(element, value) {
    if (!Array.isArray(value)) {
      element.textContent = value;
      return;
    }
    const nodes = [];
    value.forEach((line, index) => {
      if (index > 0) nodes.push(document.createElement('br'));
      nodes.push(document.createTextNode(line));
    });
    element.replaceChildren(...nodes);
  }

  function setLanguage(nextLanguage, announce = false) {
    if (!Object.hasOwn(translations, nextLanguage)) return;
    language = nextLanguage;
    const copy = translations[language];
    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const key = element.dataset.i18n;
      if (Object.hasOwn(copy, key)) replaceText(element, copy[key]);
    });
    document.querySelectorAll('[data-i18n-aria-label]').forEach((element) => {
      const key = element.dataset.i18nAriaLabel;
      if (Object.hasOwn(copy, key)) element.setAttribute('aria-label', copy[key]);
    });
    document.querySelectorAll('[data-i18n-alt]').forEach((element) => {
      const key = element.dataset.i18nAlt;
      if (Object.hasOwn(copy, key)) element.setAttribute('alt', copy[key]);
    });
    document.documentElement.lang = language;
    document.title = copy.title;
    document.querySelector('meta[name="description"]').content = copy.description;
    document.querySelector('meta[property="og:title"]').content = copy.title;
    document.querySelector('meta[property="og:description"]').content = copy.socialDescription;
    document.querySelector('meta[property="og:locale"]').content = language === 'es' ? 'es_ES' : 'en_GB';
    document.querySelector('meta[property="og:image:alt"]').content = copy.socialImageAlt;
    languageButtons.forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.language === language)));
    menuToggle.setAttribute('aria-label', copy[menuToggle.getAttribute('aria-expanded') === 'true' ? 'closeMenu' : 'openMenu']);
    if (announce) document.querySelector('#language-announcement').textContent = copy.languageChanged;
    updateMotionButton();
    try { window.localStorage.setItem(storageKey, language); } catch { /* Storage is optional. */ }
  }

  languageButtons.forEach((button) => button.addEventListener('click', () => setLanguage(button.dataset.language, true)));
  menuToggle.addEventListener('click', () => setMenu(menuToggle.getAttribute('aria-expanded') !== 'true'));
  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      const wasOpen = menuToggle.getAttribute('aria-expanded') === 'true';
      setMenu(false);
      if (wasOpen) {
        const target = document.getElementById(link.hash.slice(1));
        if (target) {
          target.setAttribute('tabindex', '-1');
          target.focus({ preventScroll: true });
        }
      }
    });
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') setMenu(false, true);
  });
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.site-header')) setMenu(false);
  });
  document.addEventListener('focusin', (event) => {
    if (!event.target.closest('.site-header')) setMenu(false);
  });
  mobileViewport.addEventListener('change', () => setMenu(false));

  try {
    const savedLanguage = window.localStorage.getItem(storageKey);
    if (Object.hasOwn(translations, savedLanguage)) language = savedLanguage;
  } catch { /* Keep the English default if storage is unavailable. */ }
  setLanguage(language);
  document.documentElement.classList.add('js');

  // Motion is an enhancement: no content depends on an observer or a hidden class.
  const runningAnimations = new Set();
  const revealed = new WeakSet();
  const storyStage = document.querySelector('.story-stage');

  function reveal(element) {
    if (reducedMotion.matches || motionPaused || revealed.has(element) || typeof element.animate !== 'function') return;
    revealed.add(element);
    const animation = element.animate([
      { opacity: 0.35, transform: 'translateY(16px)' },
      { opacity: 1, transform: 'translateY(0)' }
    ], { duration: 700, easing: 'cubic-bezier(.22,1,.36,1)' });
    runningAnimations.add(animation);
    animation.finished.then(() => runningAnimations.delete(animation), () => runningAnimations.delete(animation));
  }

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          reveal(entry.target);
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.opportunity-content, .vision-copy, .concept-board, .team-heading, .xiji-heading, .contact-inner').forEach((element) => revealObserver.observe(element));

    const visibleSteps = new Map();
    const storyObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          visibleSteps.set(entry.target, entry.intersectionRatio);
          reveal(entry.target);
        } else visibleSteps.delete(entry.target);
      });
      if (!visibleSteps.size) return;
      const [activeStep] = [...visibleSteps.entries()].sort((a, b) => b[1] - a[1])[0];
      const index = activeStep.dataset.storyStep;
      storyStage.dataset.activeStep = index;
      document.querySelectorAll('[data-story-node]').forEach((node) => node.classList.toggle('is-active', node.dataset.storyNode === index));
    }, { rootMargin: '-15% 0px -30% 0px', threshold: [0, 0.25, 0.5, 0.75] });
    document.querySelectorAll('[data-story-step]').forEach((step) => storyObserver.observe(step));

    const ambientObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.target.classList.toggle('is-offscreen', !entry.isIntersecting));
    });
    ambientObserver.observe(document.querySelector('.hero-art'));
  }

  reducedMotion.addEventListener('change', () => {
    if (reducedMotion.matches) runningAnimations.forEach((animation) => animation.cancel());
  });
  motionButton.addEventListener('click', () => {
    motionPaused = !motionPaused;
    document.documentElement.classList.toggle('motion-paused', motionPaused);
    if (motionPaused) runningAnimations.forEach((animation) => animation.cancel());
    updateMotionButton();
  });
})();
