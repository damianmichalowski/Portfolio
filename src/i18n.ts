import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      nav: {
        hero: 'Home',
        about: 'About',
        experience: 'Experience',
        projects: 'Projects',
        technologies: 'Tech',
        contact: 'Contact',
      },
      about: {
        title: 'About Me',
        subtitle: 'A quick snapshot and the full story is right below.',
        imageAlt: 'About Damian Michałowski',
        highlights: {
          ui: {
            tag: 'Focus',
            title: 'Clear, polished UI',
            bullets: [
              'Clarity over clutter',
              'Pixel-level attention to detail',
              'Consistent spacing and layouts',
            ],
          },
          workflow: {
            tag: 'How I work',
            title: 'Build, iterate, improve',
            bullets: [
              'I like improving existing products',
              'Practical solutions over buzzwords',
              'Learning through real systems',
            ],
          },
          curiosity: {
            tag: 'Curiosity',
            title: 'Tech beyond frontend',
            bullets: [
              'AI tooling and workflows',
              'Cybersecurity',
              'Game dev and system internals',
            ],
          },
        },
        paragraphs: {
          p1: "I've been working as a frontend developer for the past few years while studying Computer Science. Most of my experience comes from real production systems - internal tools, banking software, fintech products and AI-related applications.",
          p2: "I'm not trying to sound “senior” just for the sake of it. What matters to me is building useful things, improving existing systems, understanding how products actually work and getting better with every project.",
          p3: "What I care about most in frontend development is building interfaces that feel clear, practical and easy to use. I'm very detail-oriented when it comes to spacing, layout consistency and those small UI issues that can make something feel slightly off. I like polishing those details until the whole thing feels clean and well put together.",
          p4: "A big part of how I work comes from my background in graphic design and video production. That shaped the way I look at visual quality and user experience. Over time it naturally led me into frontend development, where I could combine design awareness with programming.",
          p5: "Outside of work, I'm just genuinely into tech in general - not only frontend. I like exploring AI tools, cybersecurity, game development and system internals because they help me understand software from more than one angle.",
        },
      },
      projects: {
        title: 'Projects',
        viewGallery: 'View Gallery',
        viewImage: 'View Image',
        githubLabel: 'GitHub',
        items: {
          game2d: {
            title: 'Game2D',
            description:
              'A 2D roguelike built in C++ with SFML, inspired by The Binding of Isaac. I made it as a way to learn game development fundamentals, from procedural rooms and enemy encounters to combat and collision handling.',
            technologies: ['C++', 'SFML'],
          },
          moviesBrowser: {
            title: 'Movies Browser',
            description:
              'A movie browsing app built on top of a public API, with search and filtering for movies and actors.',
            technologies: [
              'React',
              'Redux',
              'JavaScript (ES6+)',
              'Styled Components',
              'CSS',
            ],
          },
        },
      },
      hero: {
        role: 'Frontend Developer',
        intro:
          "Hi, I'm Damian - a frontend developer who enjoys building clear, user-friendly interfaces and making products feel polished and intuitive to use.",
        workFocus:
          'Most of my work has been around real production systems - from internal tools and banking platforms to AI-driven applications.',
      },
      buttons: {
        contact: 'Contact Me',
        github: 'GitHub',
        linkedin: 'LinkedIn',
        reference: 'Reference',
        resume: 'CV',
      },
      contact: {
        title: 'Get in Touch',
        subtitle:
          "If you'd like to talk about frontend, projects or working together, feel free to reach out.",
      },
      contactForm: {
        firstName: 'First name',
        lastName: 'Last name',
        email: 'Email Address',
        phone: 'Phone Number',
        message: 'Message',
        placeholders: {
          firstName: 'Will',
          lastName: 'Smith',
          email: 'example@gmail.com',
          phone: '123-456-7890',
          message: 'Your message here...',
        },
        submit: 'Submit',
        sending: 'Sending...',
        errors: {
          firstNameRequired: 'First name is required',
          lastNameRequired: 'Last name is required',
          emailRequired: 'Email is required',
          emailInvalid: 'Email is invalid',
          phoneRequired: 'Phone number is required',
          messageRequired: 'Message is required',
        },
      },
      toast: {
        contactSuccessTitle: 'Thanks for reaching out!',
        contactSuccessDescription:
          "Your message has been sent successfully. I'll get back to you as soon as I can.",
        contactErrorTitle: "Couldn't send the message",
        contactErrorDescription:
          'Something went wrong while sending your message. Please try again later.',
      },
      technologies: {
        title: 'Tech',
        subtitle:
          "I'm always open to learning new tools, but I care more about understanding how and why to use them than just listing as many as possible.",
      },
      experience: {
        title: 'Experience',
        paragraphs: {
          p1: 'Most of my professional experience comes from working on real production systems rather than small demo projects.',
          p2: 'Right now I work on a GenAI chatbot platform for Hitachi, where we build AI-driven interfaces used in enterprise environments. My part of the work is mainly frontend-focused - conversational UI, prompt-based workflows and data-connected tools. The app is built in a micro-frontend architecture and integrates with multiple internal APIs and services.',
          p3: 'At Accenture I also worked on internal operational tooling used by Meta teams - a central platform for planning, managing and tracking operational changes that affect human review processes. It supports Global Operations teams working across areas like content moderation, customer support, vendor management and operational excellence.',
          p4: 'Before that, I worked on an internal banking system used by Santander teams, where I helped extend and improve a fairly complex operational platform. My work included building new UI workflows, creating reusable components and improving the quality and usability of the existing interface.',
          p5: 'I also worked on a financial trading web application handling real-time market data, where I built the frontend and designed custom UI components for large financial tables and desktop-like interactions.',
        },
        cards: {
          hitachi: {
            tag: 'Hitachi',
            title: 'GenAI Chatbot Platform',
            bullets: [
              'Frontend work for conversational interfaces',
              'Prompt-based workflows and data-connected tools',
              'Micro-frontends with internal API integrations',
            ],
          },
          meta: {
            tag: 'Meta',
            title: 'Operational Planning Tool',
            bullets: [
              'Central platform for planning and tracking operational changes',
              'Used by Global Operations teams across multiple large-scale workflows',
              'Built with enterprise scale, performance and reliability in mind',
            ],
          },
          santander: {
            tag: 'Santander',
            title: 'Internal Banking System',
            bullets: [
              'New UI workflows and reusable component development',
              'Usability improvements for a complex internal platform',
            ],
          },
          fintech: {
            tag: 'FinTech / Trading',
            title: 'Real-Time Market Data UI',
            bullets: [
              'Custom components for large financial tables',
              'Fast, desktop-like interactions built for heavy data use',
            ],
          },
        },
      },
      language: {
        en: 'EN',
        pl: 'PL',
      },
      gallery: {
        noAdditionalImages: 'No additional images available',
      },
    },
  },
  pl: {
    translation: {
      nav: {
        hero: 'Start',
        about: 'O mnie',
        experience: 'Doświadczenie',
        projects: 'Projekty',
        technologies: 'Tech',
        contact: 'Kontakt',
      },
      about: {
        title: 'O mnie',
        subtitle: 'Szybki skrót i pełna historia poniżej.',
        imageAlt: 'O Damianie Michałowskim',
        highlights: {
          ui: {
            tag: 'Skupienie',
            title: 'Klarowny, dopracowany UI',
            bullets: [
              'Mniej chaosu, więcej czytelności',
              'Dbałość o detale co do piksela',
              'Spójne odstępy i layouty',
            ],
          },
          workflow: {
            tag: 'Jak pracuję',
            title: 'Buduję, sprawdzam, ulepszam',
            bullets: [
              'Lubię poprawiać to, co już istnieje',
              'Praktyka ponad buzzwordy',
              'Uczę się na realnych systemach',
            ],
          },
          curiosity: {
            tag: 'Ciekawość',
            title: 'Interesuje mnie tech nie tylko od strony frontendu',
            bullets: [
              'Narzędzia AI i praca z promptami',
              'Cyberbezpieczeństwo',
              'Gamedev',
            ],
          },
        },
        paragraphs: {
          p1: 'Od kilku lat pracuję jako frontend developer i równolegle studiuję informatykę. Większość mojego doświadczenia pochodzi z realnych systemów produkcyjnych - narzędzi wewnętrznych, oprogramowania bankowego, produktów fintech i aplikacji związanych z AI.',
          p2: 'Nie zależy mi na tym, żeby brzmieć jak senior. Najważniejsze jest dla mnie tworzenie użytecznych rzeczy, usprawnianie istniejących systemów, rozumienie jak działają produkty i rozwijanie się z każdym kolejnym projektem.',
          p3: 'W frontendzie najbardziej zależy mi na tworzeniu interfejsów, które są klarowne, praktyczne i po prostu wygodne w użyciu. Zwracam dużą uwagę na detale - odstępy, spójność layoutu i drobne niedociągnięcia w UI. Lubię dopracowywać takie rzeczy, aż całość wygląda czysto i jest dobrze przemyślana.',
          p4: 'Duży wpływ na moje podejście do pracy miało to, że zaczynałem od grafiki i produkcji wideo. To mocno ukształtowało moje spojrzenie na jakość wizualną i doświadczenie użytkownika. Z czasem naturalnie przerodziło się to we frontend, gdzie mogłem połączyć wyczucie designu z programowaniem.',
          p5: 'Poza pracą po prostu interesuje mnie szeroko pojęta technologia - nie tylko frontend. Lubię eksplorować narzędzia AI, cyberbezpieczeństwo, gamedev i poznawanie systemów od środka, bo dzięki temu lepiej rozumiem software z różnych stron.',
        },
      },
      projects: {
        title: 'Projekty',
        viewGallery: 'Zobacz galerię',
        viewImage: 'Zobacz obraz',
        githubLabel: 'GitHub',
        items: {
          game2d: {
            title: 'Game2D',
            description:
              'Gra typu 2D roguelike stworzona w C++ z użyciem SFML, inspirowana The Binding of Isaac. Projekt powstał głównie po to, żeby nauczyć się podstaw gamedevu - od proceduralnych pokoi i przeciwników po walkę i kolizje.',
            technologies: ['C++', 'SFML'],
          },
          moviesBrowser: {
            title: 'Movies Browser',
            description:
              'Aplikacja do przeglądania filmów oparta o publiczne API, z wyszukiwaniem i filtrowaniem filmów oraz aktorów.',
            technologies: [
              'React',
              'Redux',
              'JavaScript (ES6+)',
              'Styled Components',
              'CSS',
            ],
          },
        },
      },
      hero: {
        role: 'Frontend Developer',
        intro:
          'Cześć, jestem Damian - frontend developer, który lubi tworzyć klarowne i przyjazne interfejsy oraz dopracowywać produkty tak, żeby korzystanie z nich było po prostu intuicyjne.',
        workFocus:
          'Większość mojej pracy to realne systemy produkcyjne - od narzędzi wewnętrznych i platform bankowych po aplikacje oparte o AI.',
      },
      buttons: {
        contact: 'Napisz do mnie',
        github: 'GitHub',
        linkedin: 'LinkedIn',
        reference: 'Referencja',
        resume: 'CV',
      },
      contact: {
        title: 'Kontakt',
        subtitle:
          'Jeśli chcesz pogadać o frontendzie, projektach albo współpracy - śmiało napisz.',
      },
      contactForm: {
        firstName: 'Imię',
        lastName: 'Nazwisko',
        email: 'Adres e-mail',
        phone: 'Numer telefonu',
        message: 'Wiadomość',
        placeholders: {
          firstName: 'Jan',
          lastName: 'Kowalski',
          email: 'example@gmail.com',
          phone: '123-456-789',
          message: 'Twoja wiadomość...',
        },
        submit: 'Wyślij',
        sending: 'Wysyłanie...',
        errors: {
          firstNameRequired: 'Imię jest wymagane',
          lastNameRequired: 'Nazwisko jest wymagane',
          emailRequired: 'E-mail jest wymagany',
          emailInvalid: 'Nieprawidłowy adres e-mail',
          phoneRequired: 'Numer telefonu jest wymagany',
          messageRequired: 'Wiadomość jest wymagana',
        },
      },
      toast: {
        contactSuccessTitle: 'Dzięki za wiadomość!',
        contactSuccessDescription:
          'Wiadomość została wysłana. Odezwę się tak szybko, jak będę mógł.',
        contactErrorTitle: 'Nie udało się wysłać wiadomości',
        contactErrorDescription:
          'Coś poszło nie tak podczas wysyłania wiadomości. Spróbuj ponownie później.',
      },
      technologies: {
        title: 'Tech',
        subtitle:
          'Lubię poznawać nowe narzędzia, ale jeszcze bardziej zależy mi na tym, żeby rozumieć kiedy i po co ich używać - a nie tylko dopisywać kolejne rzeczy do listy.',
      },
      experience: {
        title: 'Doświadczenie',
        paragraphs: {
          p1: 'Większość mojego doświadczenia zawodowego pochodzi z pracy przy realnych systemach produkcyjnych, a nie z małych projektów demo.',
          p2: 'Obecnie pracuję przy platformie chatbota GenAI dla Hitachi, gdzie tworzymy interfejsy oparte o AI wykorzystywane w środowiskach enterprise. Moja część pracy jest głównie frontendowa - interfejsy konwersacyjne, workflow oparte o prompty i narzędzia połączone z danymi. Aplikacja działa w architekturze micro-frontend i integruje się z wieloma wewnętrznymi API oraz usługami.',
          p3: 'W Accenture pracowałem też przy wewnętrznych narzędziach operacyjnych używanych przez zespoły Meta - centralnej platformie do planowania, zarządzania i śledzenia zmian operacyjnych wpływających na procesy przeglądu wykonywanego przez ludzi. Korzystają z niej zespoły Global Operations działające m.in. w obszarze moderacji treści, obsługi klienta, zarządzania dostawcami i operacyjnej efektywności.',
          p4: 'Wcześniej pracowałem przy wewnętrznym systemie bankowym używanym przez zespoły Santander, gdzie rozwijałem i usprawniałem dość złożoną platformę operacyjną. Moja praca obejmowała tworzenie nowych workflow UI, budowanie komponentów wielokrotnego użytku oraz poprawę jakości i użyteczności istniejącego interfejsu.',
          p5: 'Pracowałem też przy aplikacji tradingowej obsługującej dane rynkowe w czasie rzeczywistym, gdzie rozwijałem frontend i projektowałem własne komponenty pod duże tabele finansowe oraz interakcje przypominające desktop.',
        },
        cards: {
          hitachi: {
            tag: 'Hitachi',
            title: 'Platforma chatbota GenAI',
            bullets: [
              'Frontend dla interfejsów konwersacyjnych',
              'Workflow oparte o prompty i narzędzia połączone z danymi',
              'Micro-frontendy i integracje z wewnętrznymi API',
            ],
          },
          meta: {
            tag: 'Meta',
            title: 'Narzędzie do planowania operacyjnego',
            bullets: [
              'Centralna platforma do planowania i śledzenia zmian operacyjnych',
              'Używana przez zespoły Global Operations przy dużych procesach',
              'Tworzona z myślą o skali, wydajności i niezawodności',
            ],
          },
          santander: {
            tag: 'Santander',
            title: 'Wewnętrzny system bankowy',
            bullets: [
              'Nowe workflow UI i rozwój komponentów wielokrotnego użytku',
              'Usprawnienia użyteczności w złożonej platformie wewnętrznej',
            ],
          },
          fintech: {
            tag: 'FinTech / Trading',
            title: 'UI dla danych rynkowych realtime',
            bullets: [
              'Własne komponenty pod duże tabele finansowe',
              'Szybkie interakcje w stylu desktopowym do pracy na danych',
            ],
          },
        },
      },
      language: {
        en: 'EN',
        pl: 'PL',
      },
      gallery: {
        noAdditionalImages: 'Brak dodatkowych obrazów',
      },
    },
  },
} as const

const getInitialLanguage = (): 'en' | 'pl' => {
  const saved = localStorage.getItem('language')
  if (saved === 'pl' || saved === 'en') return saved
  return 'en'
}

i18n.use(initReactI18next).init({
  resources,
  lng: getInitialLanguage(),
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
})

i18n.on('languageChanged', (lng) => {
  if (lng === 'pl' || lng === 'en') {
    localStorage.setItem('language', lng)
  }
})

export default i18n
