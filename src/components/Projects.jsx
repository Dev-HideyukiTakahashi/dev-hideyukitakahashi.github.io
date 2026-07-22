import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRightIcon } from './Icons';

import helpDeskImg from '../assets/projects/help-desk.png';

const projects = [
  {
    title: 'Help-Desk',
    description:
      'Sistema de gerenciador de chamados que simula o fluxo realista entre Administradores, Técnicos e Clientes para abertura, acompanhamento e encerramento de ocorrências.',
    tags: [
      'React',
      'Express',
      'Typescript',
      'Jest',
      'Docker',
      'PostgreSQL',
      'Tailwind CSS',
      'Prisma',
      'Zod',
    ],
    link: 'https://github.com/Dev-HideyukiTakahashi/help-desk-rocketseat',
    image: helpDeskImg,
  },
  {
    title: 'Dentify',
    description:
      'Sistema de gestão para clínicas odontológicas que centraliza o fluxo completo: agendamentos de pacientes, agenda de dentistas, prontuário, histórico clínico, pagamentos e indicadores administrativos.',
    tags: [
      'Java',
      'Spring Boot',
      'Angular',
      'Angular Material',
      'Flyway',
      'Swagger (OpenAPI)',
      'PostgreSQL',
    ],
    link: '#',
    image: null,
  },
  {
    title: 'StayVanilla',
    description:
      'Portal de reservas hoteleiras desenvolvido sem frameworks (Vanilla Node.js) para demonstrar domínio profundo dos fundamentos e manipulação nativa de DOM. Conta também com uma versão moderna utilizando Fastify e React.',
    tags: ['Node.js (Vanilla)', 'node:test', 'SQLite', 'HTML5', 'CSS3', 'Javascript'],
    link: '#',
    image: null,
  },
  {
    title: 'PetExpress',
    description:
      'E-commerce pet shop voltado para gestão de catálogo, controle de estoque, checkout com pagamento simulado e painel administrativo centralizado para acompanhar todo o ciclo de vendas.',
    tags: ['NestJS', 'Typescript', 'Zod', 'PostgreSQL', 'React', 'Prisma', 'Redis', 'Docker'],
    link: '#',
    image: null,
  },
  {
    title: 'Finora',
    description:
      'Aplicação de finanças pessoais para controle detalhado de receitas, despesas, cartões e metas. Centraliza lançamentos e categorizações para fornecer relatórios visuais precisos e inteligência orçamentária.',
    tags: ['Fastify', 'Prisma', 'Zod', 'Swagger', 'PostgreSQL', 'React', 'Vitest', 'Tailwind CSS'],
    link: '#',
    image: null,
  },
];

const extraProjects = [
  {
    title: 'CoreFlow',
    description: 'Plataforma corporativa de gestão empresarial.',
    tags: ['Fastify', 'API', 'RBAC'],
    link: '#',
  },
  {
    title: 'StockFlow',
    description: 'Catálogo de produtos e controle de estoque.',
    tags: ['NestJS', 'JWT', 'Redis'],
    link: '#',
  },
  {
    title: 'FinanceFlow',
    description: 'Gestão financeira pessoal e empresarial.',
    tags: ['Java', 'Spring Boot', 'Layered Arch'],
    link: '#',
  },
  {
    title: 'NexusFlow',
    description: 'Plataforma distribuída de pedidos.',
    tags: ['Microservices', 'Express', 'RabbitMQ'],
    link: '#',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="relative py-20" ref={ref}>
      <div className="max-w-6xl mx-auto px-8 md:px-16">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-24"
        >
          <span className="text-gold text-[11px] font-semibold tracking-[0.4em] uppercase">
            Portfolio
          </span>

          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-ivory mt-5">
            Projetos
            <br />
            <span className="text-gold italic">em Destaque</span>
          </h2>

          <p className="text-ivory-muted mt-6 max-w-xl mx-auto text-[15px] leading-relaxed">
            Aqui estão alguns projetos que desenvolvi, demonstrando minha experiência e habilidade
            em programação.
          </p>
        </motion.div>

        {/* Projects list */}
        <div className="space-y-24">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2 + i * 0.2 }}
            >
              <div className="grid lg:grid-cols-2 gap-14 items-center">
                {/* Desktop image / Placeholder */}
                <div className={`${i % 2 !== 0 ? 'lg:order-2' : ''} hidden lg:block`}>
                  <div className="group relative overflow-hidden rounded-sm aspect-video border border-white/5 transition-all duration-700 hover:border-gold/15 bg-black/40">
                    {/* Image overlay */}
                    <div className="absolute inset-0 bg-linear-to-br from-gold/4 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700" />

                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      /* Placeholder luxuoso */
                      <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center border border-dashed border-white/10 group-hover:border-gold/30 transition-colors duration-500">
                        <span className="font-playfair text-xl italic text-gold/60 mb-2">
                          {project.title}
                        </span>
                        <span className="text-xs uppercase tracking-[0.2em] text-ivory-muted/60">
                          Projeto em Construção . . .
                        </span>
                      </div>
                    )}

                    {/* Project link */}
                    {project.link !== '#' && (
                      <div className="absolute inset-0 flex items-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="pointer-events-auto inline-flex items-center gap-2 text-gold/80 hover:text-gold transition-colors duration-200 group/project"
                        >
                          <span className="relative">
                            Ver projeto
                            <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-gold transition-all duration-300 group-hover/project:w-full" />
                          </span>

                          <ArrowUpRightIcon
                            size={14}
                            className="transition-transform duration-200 group-hover/project:translate-x-1 group-hover/project:-translate-y-1"
                          />
                        </a>
                      </div>
                    )}
                  </div>
                </div>

                {/* Project content */}
                <div className={`${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  {/* Project number */}
                  <span className="text-gold text-[10px] font-semibold tracking-[0.3em] uppercase mb-4 block">
                    Projeto {String(i + 1).padStart(2, '0')}
                  </span>

                  {/* Project title */}
                  <h3 className="text-2xl md:text-3xl font-playfair font-bold text-ivory mb-5 hover:text-gold transition-colors duration-500 cursor-default">
                    {project.title}
                  </h3>

                  {/* Project description */}
                  <p className="text-ivory-muted leading-[1.9] text-[15px] mb-8">
                    {project.description}
                  </p>

                  {/* Mobile image / Placeholder */}
                  <div className="lg:hidden mb-8">
                    <div className="relative overflow-hidden rounded-sm aspect-video border border-white/5 bg-black/40">
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center border border-dashed border-white/10">
                          <span className="font-playfair text-lg italic text-gold/60 mb-1">
                            {project.title}
                          </span>
                          <span className="text-[10px] uppercase tracking-[0.2em] text-ivory-muted/60">
                            Em Construção . . .
                          </span>
                        </div>
                      )}

                      {project.link !== '#' && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute inset-0"
                        />
                      )}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.tags.map((tag, index) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{
                          duration: 0.5,
                          delay: 0.2 + index * 0.04,
                        }}
                        whileHover={{
                          y: -4,
                          scale: 1.05,
                          borderColor: 'rgba(212, 175, 55, 0.5)',
                          color: '#D4AF37',
                        }}
                        transition={{
                          y: { duration: 0.2 },
                          scale: { duration: 0.2 },
                          borderColor: { duration: 0.2 },
                          color: { duration: 0.2 },
                        }}
                        className="px-5 py-2 text-[12px] font-medium text-ivory-muted tracking-wide border border-white/10 rounded-md cursor-default"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {/* Details link */}
                  {project.link !== '#' && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-gold/80 hover:text-gold transition-all duration-200"
                    >
                      <span className="relative after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full">
                        Ver Detalhes
                      </span>

                      <ArrowUpRightIcon
                        size={14}
                        className="transition-transform duration-200 hover:translate-x-1 hover:-translate-y-1"
                      />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More Projects */}
        <div className="mt-20">
          <div className="text-center mb-14">
            <span className="text-gold text-[11px] font-semibold tracking-[0.4em] uppercase">
              Repositórios
            </span>

            <h3 className="font-playfair text-3xl md:text-4xl font-bold text-ivory mt-4">
              Outros Projetos
            </h3>

            <p className="text-ivory-muted mt-4 max-w-xl mx-auto text-[15px]">
              Projetos pessoais explorando backend, APIs e arquitetura de sistemas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {extraProjects.map(project => (
              <div
                key={project.title}
                className="group relative flex flex-col h-full border border-white/5 hover:border-gold/20 p-6 transition-all duration-300 bg-black/20 overflow-hidden"
              >
                {/* Indicador sutil de Em Construção no topo do card */}
                <div className="absolute top-0 right-0 bg-gold/10 text-gold text-[9px] tracking-widest uppercase px-3 py-1 border-b border-l border-gold/15 font-medium">
                  Em Construção
                </div>

                {/* Title */}
                <h4 className="text-xl font-semibold text-ivory group-hover:text-gold transition-colors duration-200 mt-2">
                  {project.title}
                </h4>

                {/* Description */}
                <p className="text-sm text-ivory-muted mt-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags (Exatamente 3) */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-[11px] text-gold border border-gold/20 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Spacer */}
                <div className="flex-1" />

                {/* Link (Não redireciona, mantido visualmente) */}
                <div className="mt-6 flex items-center gap-2 text-gold/70 group-hover:text-gold transition-colors duration-200 cursor-pointer">
                  <span className="relative after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 group-hover:after:w-full">
                    Ver projeto
                  </span>

                  <ArrowUpRightIcon
                    size={14}
                    className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
