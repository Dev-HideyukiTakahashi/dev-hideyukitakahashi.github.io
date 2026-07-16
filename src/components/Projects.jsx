import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRightIcon } from './Icons';

import dentalCareImg from '../assets/projects/dental-care.png';
import helpDeskImg from '../assets/projects/help-desk.png';

const projects = [
  {
    title: 'Dental Care',
    description:
      'O sistema permite que pacientes agendem, cancelem e avaliem consultas, dentistas gerenciem suas agendas e administradores controlem usuários e visualizem relatórios.',
    tags: [
      'Java',
      'Spring Boot',
      'Angular',
      'Flyway',
      'Swagger (OpenAPI)',
      'PostgreSQL',
      'Bootstrap 5',
    ],
    link: 'https://github.com/Dev-HideyukiTakahashi/dental-care',
    image: dentalCareImg,
  },
  {
    title: 'Help-Desk',
    description:
      'O sistema simula um Gerenciador de Chamados, permitindo que Administradores, Técnicos e Clientes interajam em um fluxo realista de abertura, acompanhamento e encerramento de chamados.',
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
                {/* Desktop image */}
                <div className={`${i % 2 !== 0 ? 'lg:order-2' : ''} hidden lg:block`}>
                  <div className="group relative overflow-hidden rounded-sm aspect-video border border-white/5 transition-all duration-700 hover:border-gold/15">
                    {/* Image overlay */}
                    <div className="absolute inset-0 bg-linear-to-br from-gold/4 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700" />

                    {/* Project image */}
                    {project.image && (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                      />
                    )}

                    {/* Project link */}
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

                  {/* Mobile image */}
                  {project.image && (
                    <div className="lg:hidden mb-8">
                      <div className="relative overflow-hidden rounded-sm aspect-video border border-white/5">
                        {/* Project image */}
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-contain"
                        />

                        {/* Project link */}
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute inset-0"
                        />
                      </div>
                    </div>
                  )}

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
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
