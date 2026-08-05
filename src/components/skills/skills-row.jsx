import { motion } from 'framer-motion';

// ============================================================
// NOTNULL SYSTEMS
// SKILL ROW
// ============================================================

export default function SkillRow({ row, index, isInView, reduceMotion }) {
  const repeatedSkills = [...row.skills, ...row.skills];

  const movement = row.direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'];

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
        duration: 0.7,
        delay: reduceMotion ? 0 : 0.12 + index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group grid items-center gap-4 py-5 sm:grid-cols-[190px_minmax(0,1fr)] sm:py-6"
    >
      {/* Categoria */}
      <div className="flex items-center gap-3">
        <span className="text-[8px] font-light tracking-[0.2em] text-violet-300/35">
          {String(index + 1).padStart(2, '0')}
        </span>

        <h3 className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/48 sm:text-[11px]">
          {row.label}
        </h3>
      </div>

      {/* Esteira */}
      <div
        className="overflow-hidden"
        style={{
          maskImage: 'linear-gradient(90deg, transparent, black 6%, black 94%, transparent)',
          WebkitMaskImage: 'linear-gradient(90deg, transparent, black 6%, black 94%, transparent)',
        }}
      >
        <motion.div
          className="flex w-max items-center"
          animate={
            reduceMotion || !isInView
              ? undefined
              : {
                  x: movement,
                }
          }
          transition={{
            duration: row.duration,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {repeatedSkills.map((skill, skillIndex) => (
            <span
              key={`${row.id}-${skill}-${skillIndex}`}
              className="mx-3 inline-flex shrink-0 items-center gap-2 whitespace-nowrap text-[11px] font-light text-white/38 transition-colors duration-300 hover:text-gold/75 sm:text-xs"
            >
              <span className="h-1 w-1 rounded-full bg-violet-400/55 shadow-[0_0_6px_rgba(167,139,250,0.45)]" />
              {skill}
            </span>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
