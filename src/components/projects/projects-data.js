// ============================================================
// NOTNULL SYSTEMS
// PORTFÓLIO PESSOAL — HIDEYUKI TAKAHASHI
//
// Arquivo: projects-data.js
// Responsabilidade:
// - Dados dos projetos em destaque
// - Tecnologias principais de cada projeto
// - Links, imagens e estados de desenvolvimento
// ============================================================

import helpDeskImage from '../../assets/projects/help-desk.png';

// ============================================================
// PROJETOS EM DESTAQUE
// ============================================================

export const projects = [
  {
    id: 'help-desk',
    number: '01',

    title: 'Help-Desk',
    type: 'Sistema de atendimento',
    status: 'Disponível',

    description:
      'Sistema completo para gerenciamento de chamados, conectando administradores, técnicos e clientes durante todo o ciclo de atendimento.',

    image: helpDeskImage,

    tags: ['React', 'Express', 'TypeScript', 'PostgreSQL', 'Prisma'],

    link: 'https://github.com/Dev-HideyukiTakahashi/help-desk-rocketseat',

    // Ocupa as duas colunas no início da grade.
    featured: true,
  },

  {
    id: 'dentify',
    number: '02',

    title: 'Dentify',
    type: 'Gestão odontológica',
    status: 'Em desenvolvimento',

    description:
      'Plataforma para clínicas odontológicas com gestão de pacientes, profissionais, agendamentos, prontuários, pagamentos e indicadores administrativos.',

    image: null,

    tags: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL', 'OpenAPI'],

    link: null,
  },

  {
    id: 'stay-vanilla',
    number: '03',

    title: 'StayVanilla',
    type: 'Reservas hoteleiras',
    status: 'Em desenvolvimento',

    description:
      'Portal de reservas desenvolvido com Node.js sem frameworks, criado para demonstrar domínio dos fundamentos da plataforma e das tecnologias nativas da web.',

    image: null,

    tags: ['Node.js', 'JavaScript', 'HTML', 'CSS', 'SQLite'],

    link: null,
  },

  {
    id: 'pet-express',
    number: '04',

    title: 'PetExpress',
    type: 'E-commerce',
    status: 'Em desenvolvimento',

    description:
      'E-commerce para pet shop com catálogo, estoque, checkout, pagamento simulado e painel administrativo para acompanhar o ciclo completo das vendas.',

    image: null,

    tags: ['NestJS', 'React', 'PostgreSQL', 'Prisma', 'Redis'],

    link: null,
  },

  {
    id: 'finora',
    number: '05',

    title: 'Finora',
    type: 'Gestão financeira',
    status: 'Em desenvolvimento',

    description:
      'Plataforma de finanças pessoais para organizar receitas, despesas, cartões e metas, com dashboards e indicadores para apoiar decisões financeiras.',

    image: null,

    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Vitest'],

    link: null,
  },
];
