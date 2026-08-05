// ============================================================
// NOTNULL SYSTEMS
// PORTFÓLIO PESSOAL — HIDEYUKI TAKAHASHI
//
// Componente: Projects
// Responsabilidade:
// - Projetos em destaque
// - Demonstração das competências técnicas
// - Navegação para contato
// ============================================================

import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

import ProjectCard from './ProjectCard';
import { projects } from './projects-data';

export default function Projects() {
  const sectionRef = useRef(null);

  const isInView = useInView(sectionRef, {
    once: true,
    margin: '-100px',
  });

  const reduceMotion = useReducedMotion();

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative isolate w-full overflow-hidden scroll-mt-20 border-b border-white/5 bg-[#050507]"
    >
      {/* ======================================================
          FUNDO
      ====================================================== */}

      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-[16%] left-1/2 h-105 w-[70%] -translate-x-1/2 rounded-full bg-violet-700/5.5 blur-[140px]" />

        <div className="absolute right-[7%] bottom-[8%] h-72 w-72 rounded-full bg-gold/2.5 blur-[110px]" />

        <div
          className="absolute inset-0 opacity-[0.014]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(168,85,247,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.5) 1px, transparent 1px)',

            backgroundSize: '68px 68px',

            maskImage: 'radial-gradient(circle at center, black 0%, transparent 76%)',

            WebkitMaskImage: 'radial-gradient(circle at center, black 0%, transparent 76%)',
          }}
        />
      </div>

      {/* ======================================================
          CONTAINER
      ====================================================== */}

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        {/* ====================================================
            CABEÇALHO
        ==================================================== */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 24,
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
            duration: 0.85,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto mb-12 max-w-2xl text-center sm:mb-16"
        >
          <div className="mb-5 flex items-center justify-center gap-4">
            <span className="h-px w-9 bg-linear-to-r from-transparent to-gold/50" />

            <span className="text-[9px] font-medium uppercase tracking-[0.38em] text-gold sm:text-[10px]">
              Portfólio
            </span>

            <span className="h-px w-9 bg-linear-to-r from-gold/50 to-transparent" />
          </div>

          <h2 className="font-playfair text-[clamp(2.7rem,5vw,4.35rem)] leading-[1.04] font-bold tracking-[-0.04em]">
            <span className="text-ivory">Sistemas construídos</span>

            <br />

            <span className="bg-linear-to-r from-[#aa7c25] via-[#dfb84c] to-[#aa7c25] bg-clip-text text-transparent italic">
              para resolver e evoluir.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-[1.8] font-light text-white/42 sm:text-[15px]">
            Projetos pessoais desenvolvidos para explorar diferentes tecnologias, arquiteturas e
            desafios de produto.
          </p>
        </motion.div>

        {/* ====================================================
            PROJETOS
        ==================================================== */}

        <div className="grid gap-4 md:grid-cols-2 sm:gap-5">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isInView={isInView}
              reduceMotion={reduceMotion}
            />
          ))}
        </div>

        {/* ====================================================
            NOTA
        ==================================================== */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 18,
                }
          }
          animate={
            isInView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{
            duration: 0.7,
            delay: reduceMotion ? 0 : 0.55,
          }}
          className="mt-10 flex items-start gap-3 border-t border-white/5 pt-6"
        >
          <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400 shadow-[0_0_8px_rgba(167,139,250,0.65)]" />

          <p className="max-w-2xl text-xs leading-relaxed font-light text-white/28">
            Os projetos representam estudos e sistemas autorais.
          </p>
        </motion.div>

        {/* ====================================================
            PRÓXIMA SEÇÃO
        ==================================================== */}

        <motion.a
          href="#contact"
          aria-label="Ir para contato"
          className="mx-auto mt-16 hidden w-fit flex-col items-center gap-2 text-[7px] font-light uppercase tracking-[0.3em] text-white/16 transition-colors duration-300 hover:text-gold/65 sm:flex"
          animate={
            reduceMotion
              ? undefined
              : {
                  y: [0, 6, 0],
                }
          }
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <span>Contato</span>

          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/6">
            <ArrowDown size={14} strokeWidth={1.4} />
          </span>
        </motion.a>
      </div>
    </section>
  );
}
