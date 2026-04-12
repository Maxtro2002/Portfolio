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
      text: 'Desarrollador Full Stack enfocado en crear productos web escalables, mantenibles y centrados en resultados.',
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
      emailLabel: 'Email',
      email: 'tu-correo@ejemplo.com',
    },
  },
  en: {
    site: {
      title: 'Portfolio',
      description: 'Professional portfolio of Santiago Pelaez.',
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
      greeting: 'Hi, I am',
      name: 'Santiago Pelaez',
      role: 'Full Stack Developer',
      ctaPrimary: 'View projects',
      ctaSecondary: 'Contact me',
    },
    about: {
      title: 'About',
      text: 'Full Stack Developer focused on building scalable, maintainable products with measurable business impact.',
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
      empty: 'Projects have been saved and will be refined in the next iteration.',
    },
    experience: {
      title: 'Experience',
      empty: 'Professional experience is being prepared from your CV.',
    },
    contact: {
      title: 'Contact',
      text: 'Open to collaborate with teams and high-impact products.',
      emailLabel: 'Email',
      email: 'your-email@example.com',
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