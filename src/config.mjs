import dogsPic from './assets/images/simon_dogs.png';

const CONFIG = {
  name: 'Simon Wong',

  origin: 'https://www.simonwong.dev',
  basePathname: '/',
  trailingSlash: false,

  title: 'Simon Wong',
  description: 'Personal Website of Simon Wong',
  defaultImage: dogsPic,

  defaultTheme: 'system', // Values: "system" | "light" | "dark" | "light:only" | "dark:only"

  language: 'en',
  textDirection: 'ltr',

  dateFormatter: new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  }),
};

export const SITE = { ...CONFIG, blog: undefined };
export const BLOG = CONFIG.blog;
export const DATE_FORMATTER = CONFIG.dateFormatter;
