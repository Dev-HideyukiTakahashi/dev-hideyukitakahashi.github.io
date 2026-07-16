import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLinkIcon, ArrowUpRightIcon } from './Icons'

const projects = [
  {
    title: 'Dental Care',
    description:
      'O sistema permite que pacientes agendem, cancelem e avaliem consultas, dentistas gerenciem suas agendas e administradores controlem usuarios e visualizem relatorios.',
    tags: ['React', 'Node.js', 'Java', 'Spring Boot', 'PostgreSQL'],
    link: '#',
    featured: true,
  },
  {
    title: 'Help-Desk',
    description:
      'O sistema simula um Gerenciador de Chamados, permitindo que Administradores, Tecnicos e Clientes interajam em um fluxo realista de abertura, acompanhamento e encerramento de chamados.',
    tags: ['Angular', 'Java', 'Spring Boot', 'MySQL', 'Docker'],
    link: '#',
    featured: true,
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="relative py-40" ref={ref}>
      <div className="max-w-6xl mx-auto px-8 lg:px-16">
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
            Aqui estao alguns projetos que desenvolvi, demonstrando minha
            experiencia e habilidade em programacao.
          </p>
        </motion.div>

        <div className="space-y-24">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2 + i * 0.2 }}
              className="group"
            >
              <div className={`grid lg:grid-cols-2 gap-14 items-center ${i % 2 !== 0 ? 'lg:direction-rtl' : ''}`}>
                <div className={`${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <div className="relative overflow-hidden rounded-sm aspect-[16/10] bg-gradient-to-br from-slate-dark via-slate-mid to-charcoal border border-white/5 group-hover:border-gold/15 transition-all duration-700">
                    <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-7xl font-playfair font-bold text-gold/[0.08] group-hover:text-gold/[0.15] transition-colors duration-700">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <div className="absolute inset-0 flex items-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="flex items-center gap-2 text-gold text-sm font-medium">
                        Ver projeto <ArrowUpRightIcon size={14} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <span className="text-gold text-[10px] font-semibold tracking-[0.3em] uppercase mb-4 block">
                    Projeto {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-playfair font-bold text-ivory mb-5 group-hover:text-gold transition-colors duration-500">
                    {project.title}
                  </h3>
                  <p className="text-ivory-muted leading-[1.9] text-[15px] mb-8">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2.5 mb-8">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-1.5 text-[11px] font-medium text-gold/80 border border-gold/10 tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[13px] text-ivory-muted hover:text-gold transition-colors duration-300 group/link"
                  >
                    <span className="tracking-wider uppercase">Ver Detalhes</span>
                    <ArrowUpRightIcon size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
