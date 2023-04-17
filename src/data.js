import { LINKS } from 'links';

export const headerData = {
  links: [
    {
      text: 'About',
      href: '/#about',
    },
    {
      text: 'Engineering',
      href: '/#engineering',
    },
    {
      text: 'Photography',
      href: '/#photography',
    },
    {
      text: 'Contact',
      href: '/#contact',
    },
  ],
};

export const footerData = {
  socialLinks: [
    { ariaLabel: 'LLUNA POP', icon: 'tabler:moon', href: LINKS.POP },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: LINKS.INSTAGRAM },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: LINKS.LINKEDIN },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: LINKS.GITHUB },
  ],
  footNote: `&copy; 2023 Simon Wong`,
};
