import { motion } from 'framer-motion';

// ============================================================
// NOTNULL SYSTEMS
// SKILLS HEADER
// ============================================================

export default function SkillsHeader({ isInView, reduceMotion }) {
  return (
    <motion.div
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              y: 22,
              filter: 'blur(6px)',
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
      className="mb-12 text-center sm:mb-14"
    >
      <div className="mb-5 flex items-center justify-center gap-4">
        <span className="h-px w-9 bg-linear-to-r from-transparent to-gold/50" />
        <span className="text-[9px] font-medium uppercase tracking-[0.38em] text-gold sm:text-[10px]">
          Habilidades
        </span>
        <span className="h-px w-9 bg-linear-to-r from-gold/50 to-transparent" />
      </div>

      <h2 className="font-playfair text-[clamp(2.5rem,5vw,4rem)] leading-[1.05] font-bold tracking-[-0.04em]">
        <span className="text-ivory">Conhecimento aplicado</span>
        <br />
        <span className="bg-linear-to-r from-[#aa7c25] via-[#dfb84c] to-[#aa7c25] bg-clip-text text-transparent italic">
          a soluções reais.
        </span>
      </h2>
    </motion.div>
  );
}
