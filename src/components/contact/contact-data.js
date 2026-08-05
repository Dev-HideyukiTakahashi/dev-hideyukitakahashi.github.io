// ============================================================
// NOTNULL SYSTEMS
// PORTFÓLIO PESSOAL — HIDEYUKI TAKAHASHI
//
// Arquivo: contact-data.js
// Responsabilidade:
// - Dados dos canais de contato
// - Links profissionais
// - Informações exibidas nos cards
// ============================================================

import { GithubIcon, LinkedinIcon, MailIcon, WhatsAppIcon } from '../Icons';

export const contactLinks = [
  {
    id: 'github',
    icon: GithubIcon,

    label: 'GitHub',
    value: 'dev-hideyukitakahashi',

    href: 'https://github.com/dev-hideyukitakahashi',

    external: true,
  },

  {
    id: 'linkedin',
    icon: LinkedinIcon,

    label: 'LinkedIn',
    value: 'dev-hideyukitakahashi',

    href: 'https://www.linkedin.com/in/dev-hideyukitakahashi/',

    external: true,
  },

  {
    id: 'whatsapp',
    icon: WhatsAppIcon,

    label: 'WhatsApp',
    value: '+55 (11) 94205-1849',

    href: 'https://wa.me/5511942051849',

    external: true,
  },

  {
    id: 'email',
    icon: MailIcon,

    label: 'E-mail',
    value: 'dev.hideyukitakahashi@gmail.com',

    href: 'mailto:dev.hideyukitakahashi@gmail.com',

    external: false,
  },
];
