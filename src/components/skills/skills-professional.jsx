import { motion } from 'framer-motion';
import { professionalSkills } from './skills-data';

// ============================================================
// NOTNULL SYSTEMS
// PROFESSIONAL SKILLS
// ============================================================

export default function SkillsProfessional({ isInView, reduceMotion }) {
  return (
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
        duration: 0.75,
        delay: reduceMotion ? 0 : 0.4,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="mt-10"
    >
      <div className="mb-4 flex items-center gap-3">
        <span className="h-1.5 w-1.5 rounded-full bg-violet-400 shadow-[0_0_9px_rgba(167,139,250,0.75)]" />

        <span className="text-[8px] font-medium uppercase tracking-[0.28em] text-white/28">
          Competências profissionais
        </span>
      </div>

      {/* MOBILE */}
      <div className="grid grid-cols-2 gap-2 sm:hidden">
        {professionalSkills.map(skill => (
          <div
            key={skill}
            className="rounded-xl border border-white/6 bg-white/2 px-3 py-3 text-[11px] leading-[1.35] text-white/55"
          >
            {skill}
          </div>
        ))}
      </div>

      {/* DESKTOP */}
      <div className="hidden flex-wrap gap-x-5 gap-y-3 sm:flex">
        {professionalSkills.map(skill => (
          <span
            key={skill}
            className="text-[11px] font-light text-white/42 transition-colors duration-300 hover:text-white/70"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
