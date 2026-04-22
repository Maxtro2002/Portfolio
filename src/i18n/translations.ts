export const locales = ['es', 'en'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'es';

export const translations = {
  es: {
    site: {
      title: 'Portafolio',
      description: 'Portafolio profesional de Santiago Pelaez.',
    },
    nav: {
      about: 'Sobre mi',
      skills: 'Habilidades',
      projects: 'Proyectos',
      experience: 'Experiencia',
      contact: 'Contacto',
      langLabel: 'Idioma',
    },
    hero: {
      greeting: 'Hola, soy',
      name: 'Santiago Pelaez',
      role: 'Desarrollador Full Stack',
      ctaPrimary: 'Ver proyectos',
      ctaSecondary: 'Contactar',
    },
    about: {
      title: 'Sobre mi',
      text: 'Ingeniero de sistemas especializado en desarrollo backend con Java y Spring Boot, complementado con experiencia solida en desarrollo movil (Kotlin y Flutter). Experiencia en el diseno de sistemas escalables, optimizacion de APIs y desarrollo de soluciones end-to-end. Adicionalmente, integro herramientas y flujos de trabajo basados en inteligencia artificial (IA) dentro de proyectos de software para mejorar la productividad, automatizar procesos y apoyar la toma de decisiones basada en datos, manteniendo siempre un enfoque en el criterio humano, la calidad del codigo y las buenas practicas de ingenieria.',
    },
    skills: {
      title: 'Habilidades',
      items: [
        'Java',
        'Python',
        'Kotlin',
        'JavaScript',
        'TypeScript',
        'React',
        'NextJS',
        'Flutter',
        'Spring Boot',
        'REST APIs',
        'Microservices',
        'SQLite',
        'PostgreSQL',
        'n8n',
        'WordPress',
        'Elementor',
      ],
    },
    projects: {
      title: 'Proyectos',
      empty: 'Los proyectos fueron guardados para estructurarlos mejor en la siguiente iteracion.',
    },
    experience: {
      title: 'Experiencia',
      empty: 'Experiencia profesional en preparacion con base en CV.',
    },
    contact: {
      title: 'Contacto',
      text: 'Disponible para colaborar en equipos y proyectos de alto impacto.',
      locationLabel: 'Ubicacion',
      location: 'Envigado, Colombia (GMT-5)',
      phoneLabel: 'Telefono',
      phone: '+57 321 3354756',
      emailLabel: 'Email',
      email: 'santipr2002@outlook.com',
      linkedinLabel: 'LinkedIn',
      linkedin: 'linkedin.com/in/santiago-pelaez-r',
    },
  },
  en: {
    site: {
      title: 'Portfolio',
      description: "Santiago Pelaez's professional portfolio.",
    },
    nav: {
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      experience: 'Experience',
      contact: 'Contact',
      langLabel: 'Language',
    },
    hero: {
      greeting: "Hi, I'm",
      name: 'Santiago Pelaez',
      role: 'Full-stack Developer',
      ctaPrimary: 'See projects',
      ctaSecondary: 'Get in touch',
    },
    about: {
      title: 'About',
      text: 'Systems engineer specializing in backend development with Java and Spring Boot, with solid experience in mobile development using Kotlin and Flutter. I design scalable systems, optimize APIs, and build end-to-end solutions. I also integrate AI-based tools and workflows into software projects to improve productivity, automate processes, and support data-driven decisions, while keeping a strong focus on human judgment, code quality, and sound engineering practices.',
    },
    skills: {
      title: 'Skills',
      items: [
        'Java',
        'Python',
        'Kotlin',
        'JavaScript',
        'TypeScript',
        'React',
        'NextJS',
        'Flutter',
        'Spring Boot',
        'REST APIs',
        'Microservices',
        'SQLite',
        'PostgreSQL',
        'n8n',
        'WordPress',
        'Elementor',
      ],
    },
    projects: {
      title: 'Projects',
      empty: 'Projects are being organized and will be refined in the next iteration.',
    },
    experience: {
      title: 'Experience',
      empty: 'Professional experience is being prepared from the CV.',
    },
    contact: {
      title: 'Contact',
      text: 'Open to collaborating with teams and high-impact products.',
      locationLabel: 'Location',
      location: 'Envigado, Colombia (GMT-5)',
      phoneLabel: 'Phone',
      phone: '+57 321 3354756',
      emailLabel: 'Email',
      email: 'santipr2002@outlook.com',
      linkedinLabel: 'LinkedIn',
      linkedin: 'linkedin.com/in/santiago-pelaez-r',
    },
  },
} as const;

export type TranslationSchema = (typeof translations)[Locale];

export function getLocaleFromUrl(url: URL): Locale {
  const lang = url.searchParams.get('lang');
  if (lang && locales.includes(lang as Locale)) {
    return lang as Locale;
  }
  return defaultLocale;
}

export function getTranslation(locale: Locale): TranslationSchema {
  return translations[locale] ?? translations[defaultLocale];
}