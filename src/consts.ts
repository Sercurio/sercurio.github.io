import type {Metadata, Site, Socials} from '@types';

export const SITE: Site = {
  TITLE: 'Penalva Louis',
  DESCRIPTION: 'Mon blog personnel.',
  EMAIL: 'penalva.louis@gmail.com',
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: 'Home',
  DESCRIPTION: 'Page d\'accueil.',
};

export const BLOG: Metadata = {
  TITLE: 'Blog',
  DESCRIPTION: 'Une liste de billet à propos des choses qui m\'intéressent.',
};

export const PROJECTS: Metadata = {
  TITLE: 'Projects',
  DESCRIPTION: 'Une liste des différents projets sur lequel je travail.',
};

export const SOCIALS: Socials = [
  // {
  //   NAME: 'X (formerly Twitter)',
  //   HREF: 'https://twitter.com/boogerbuttcheek',
  // },
  {
    NAME: 'GitHub',
    HREF: 'https://github.com/Sercurio',
  },
  // {
  //   NAME: 'Website',
  //   HREF: 'https://trevortylerlee.com',
  // },
];
