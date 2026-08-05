// ============================================================
// NOTNULL SYSTEMS
// PROJECT VISUAL
//
// Responsabilidade:
// - Imagem do projeto
// - Placeholder de projetos em construção
// - Estado visual de projeto planejado
// ============================================================

import { ArrowUpRight, Blocks, CalendarClock } from 'lucide-react';

export default function ProjectVisual({ project }) {
  const hasLink = Boolean(project.link);

  return (
    <div className="relative aspect-16/10 overflow-hidden border-b border-white/6 bg-[#08070c]">
      {/* ========== FUNDO TECNOLÓGICO ========== */}

      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-linear-to-br from-violet-500/6.5 via-transparent to-gold/2.5" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(168,85,247,0.55) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.55) 1px, transparent 1px)',

            backgroundSize: '34px 34px',

            maskImage: 'radial-gradient(circle at center, black 0%, transparent 78%)',

            WebkitMaskImage: 'radial-gradient(circle at center, black 0%, transparent 78%)',
          }}
        />
      </div>

      {/* ========== IMAGEM ========== */}

      {project.image ? (
        <img
          src={project.image}
          alt={`Interface do projeto ${project.title}`}
          className="relative z-10 h-full w-full object-contain p-4 transition-transform duration-700 group-hover:scale-[1.025] sm:p-6"
        />
      ) : (
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-400/12 bg-violet-400/[0.035] text-violet-300/55">
            {project.planned ? (
              <CalendarClock size={20} strokeWidth={1.25} />
            ) : (
              <Blocks size={20} strokeWidth={1.25} />
            )}
          </span>

          <span className="font-playfair text-xl font-semibold text-white/68">{project.title}</span>

          <span className="mt-2 text-[8px] font-light uppercase tracking-[0.25em] text-white/25">
            {project.planned ? 'Projeto em planejamento' : 'Projeto em desenvolvimento'}
          </span>
        </div>
      )}

      {/* ========== LINK SOBRE A IMAGEM ========== */}

      {hasLink && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Abrir o projeto ${project.title}`}
          className="absolute inset-0 z-20 flex items-end justify-end bg-black/0 p-5 opacity-0 transition-all duration-500 group-hover:bg-black/20 group-hover:opacity-100"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/20 bg-[#09070d]/85 text-gold backdrop-blur-md">
            <ArrowUpRight size={17} strokeWidth={1.4} />
          </span>
        </a>
      )}

      {/* ========== LINHA INFERIOR ========== */}

      <div
        aria-hidden="true"
        className="absolute right-0 bottom-0 left-0 z-20 h-px origin-left scale-x-0 bg-linear-to-r from-violet-400/70 via-gold/55 to-transparent transition-transform duration-700 group-hover:scale-x-100"
      />
    </div>
  );
}
