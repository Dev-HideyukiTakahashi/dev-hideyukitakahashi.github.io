import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import { ArrowDown } from 'lucide-react';

import SkillsHeader from './skills-header';
import SkillRow from './skills-row';
import SkillsProfessional from './skills-professional';
import { skillRows } from './skills-data';

// ============================================================
// NOTNULL SYSTEMS
// PORTFÓLIO PESSOAL — SKILLS SECTION
// ============================================================

export default function Skills() {
  const sectionRef = useRef(null);

  const isInView = useInView(sectionRef, {
    once: true,
    margin: '-100px',
  });

  const reduceMotion = useReducedMotion();

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative isolate w-full overflow-hidden scroll-mt-20 border-b border-white/5 bg-[#050507]"
    >
      {/* ======================================================
          FUNDO
      ====================================================== */}

      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 h-96 w-[65%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-700/5.5 blur-[130px]" />

        <div
          className="absolute inset-0 opacity-[0.016]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(168,85,247,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.5) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            maskImage: 'radial-gradient(circle at center, black 0%, transparent 72%)',
            WebkitMaskImage: 'radial-gradient(circle at center, black 0%, transparent 72%)',
          }}
        />
      </div>

      {/* ======================================================
          CONTAINER
      ====================================================== */}

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <SkillsHeader isInView={isInView} reduceMotion={reduceMotion} />

        <div className="divide-y divide-white/5 border-y border-white/5">
          {skillRows.map((row, index) => (
            <SkillRow
              key={row.id}
              row={row}
              index={index}
              isInView={isInView}
              reduceMotion={reduceMotion}
            />
          ))}
        </div>

        <SkillsProfessional isInView={isInView} reduceMotion={reduceMotion} />

        {/* ====================================================
            PRÓXIMA SEÇÃO
        ==================================================== */}

        <motion.a
          href="#projects"
          aria-label="Ir para projetos"
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
          <span>Projetos</span>

          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/6">
            <ArrowDown size={14} strokeWidth={1.4} />
          </span>
        </motion.a>
      </div>
    </section>
  );
}
