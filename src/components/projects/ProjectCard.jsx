// ============================================================
// NOTNULL SYSTEMS
// PROJECT CARD
//
// Responsabilidade:
// - Apresentação individual do projeto
// - Tecnologias
// - Status e acesso ao repositório
// ============================================================

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

import ProjectVisual from './ProjectVisual';

export default function ProjectCard({ project, index, isInView, reduceMotion }) {
  const hasLink = Boolean(project.link);

  return (
    <motion.article
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              y: 28,
              filter: 'blur(7px)',
            }
      }
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
            }
          : {}
      }
      transition={{
        duration: 0.75,
        delay: reduceMotion ? 0 : 0.1 + index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={[
        'group relative overflow-hidden rounded-2xl border border-white/6 bg-white/[0.012] transition-all duration-500',

        'hover:-translate-y-1 hover:border-violet-400/16 hover:bg-violet-400/[0.018] hover:shadow-[0_28px_80px_rgba(0,0,0,0.24)]',

        project.featured ? 'lg:col-span-2 lg:grid lg:grid-cols-[1.08fr,0.92fr]' : '',
      ].join(' ')}
    >
      {/* ======================================================
          VISUAL
      ====================================================== */}

      <div className={project.featured ? 'lg:border-r lg:border-b-0 lg:border-white/6' : ''}>
        <ProjectVisual project={project} />
      </div>

      {/* ======================================================
          CONTEÚDO
      ====================================================== */}

      <div
        className={[
          'flex h-full flex-col p-5 sm:p-6',

          project.featured ? 'lg:justify-center lg:p-9' : '',
        ].join(' ')}
      >
        {/* ========== CABEÇALHO ========== */}

        <div className="mb-5 flex items-start justify-between gap-5">
          <div>
            <span className="mb-2 block text-[8px] font-medium uppercase tracking-[0.26em] text-gold/65">
              Projeto {project.number}
            </span>

            <h3
              className={[
                'font-playfair font-semibold tracking-tight text-ivory transition-colors duration-300 group-hover:text-gold-light',

                project.featured ? 'text-3xl sm:text-4xl' : 'text-2xl',
              ].join(' ')}
            >
              {project.title}
            </h3>
          </div>

          <ProjectStatus status={project.status} planned={project.planned} />
        </div>

        {/* ========== TIPO ========== */}

        <span className="mb-4 text-[9px] font-light uppercase tracking-[0.22em] text-violet-300/38">
          {project.type}
        </span>

        {/* ========== DESCRIÇÃO ========== */}

        <p className="text-sm leading-[1.8] font-light text-white/45">{project.description}</p>

        {/* ========== TECNOLOGIAS ========== */}

        <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="inline-flex items-center gap-2 text-[10px] font-light text-white/38 transition-colors duration-300 group-hover:text-white/52"
            >
              <span className="h-1 w-1 rounded-full bg-violet-400/55 shadow-[0_0_6px_rgba(167,139,250,0.4)]" />

              {tag}
            </span>
          ))}
        </div>

        {/* ========== RODAPÉ ========== */}

        <div className="mt-auto pt-7">
          {hasLink ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.2em] text-gold/65 transition-colors duration-300 hover:text-gold"
            >
              <span>Ver repositório</span>

              <ArrowUpRight
                size={14}
                strokeWidth={1.4}
                className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
              />
            </a>
          ) : (
            <span className="text-[8px] font-light uppercase tracking-[0.2em] text-white/18">
              Detalhes em breve
            </span>
          )}
        </div>
      </div>

      {/* ========== ÍNDICE DECORATIVO ========== */}

      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-5 bottom-3 font-playfair text-5xl text-white/[0.018]"
      >
        {project.number}
      </span>
    </motion.article>
  );
}

// ============================================================
// NOTNULL SYSTEMS
// STATUS DO PROJETO
// ============================================================

function ProjectStatus({ status, planned }) {
  return (
    <span
      className={[
        'inline-flex shrink-0 items-center gap-2 rounded-full border px-3 py-1.5 text-[7px] font-medium uppercase tracking-[0.18em]',

        planned
          ? 'border-gold/12 bg-gold/2.5 text-gold/45'
          : status === 'Disponível'
            ? 'border-emerald-400/14 bg-emerald-400/3 text-emerald-300/55'
            : 'border-violet-400/12 bg-violet-400/2.5 text-violet-300/45',
      ].join(' ')}
    >
      <span
        className={[
          'h-1.5 w-1.5 rounded-full',

          planned
            ? 'bg-gold/55'
            : status === 'Disponível'
              ? 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.65)]'
              : 'bg-violet-400/55',
        ].join(' ')}
      />

      {status}
    </span>
  );
}
