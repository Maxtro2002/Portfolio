export const locales = ['es', 'en'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'es';

export const translations = {
  es: {
    site: {
      title: 'Portafolio',
      description: 'Portafolio personal construido con Astro.',
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
      name: 'Tu Nombre',
      role: 'Desarrollador Frontend',
      ctaPrimary: 'Ver proyectos',
      ctaSecondary: 'Contactar',
    },
    about: {
      title: 'Sobre mi',
      text: 'Construyo experiencias web rapidas, accesibles y pensadas para el usuario.',
    },
    skills: {
      title: 'Habilidades',
      items: ['HTML', 'CSS', 'JavaScript', 'Astro'],
    },
    projects: {
      title: 'Proyectos',
      empty: 'Pronto publicare proyectos destacados aqui.',
    },
    experience: {
      title: 'Experiencia',
      empty: 'Agrega aqui tu experiencia laboral o freelance.',
    },
    contact: {
      title: 'Contacto',
      text: 'Escribeme para colaborar en tu proximo proyecto.',
      emailLabel: 'Email',
      email: 'tu-correo@ejemplo.com',
    },
  },
  en: {
    site: {
      title: 'Portfolio',
      description: 'Personal portfolio built with Astro.',
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
      name: 'Your Name',
      role: 'Frontend Developer',
      ctaPrimary: 'View projects',
      ctaSecondary: 'Contact me',
    },
    about: {
      title: 'About',
      text: 'I build fast, accessible web experiences with user-focused design.',
    },
    skills: {
      title: 'Skills',
      items: ['HTML', 'CSS', 'JavaScript', 'Astro'],
    },
    projects: {
      title: 'Projects',
      empty: 'Featured projects will be published here soon.',
    },
    experience: {
      title: 'Experience',
      empty: 'Add your work or freelance experience here.',
    },
    contact: {
      title: 'Contact',
      text: 'Reach out and lets build your next idea.',
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