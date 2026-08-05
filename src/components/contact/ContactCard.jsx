// ============================================================
// NOTNULL SYSTEMS
// CONTACT CARD
//
// Responsabilidade:
// - Exibir um canal de contato
// - Apresentar ícone, nome e informação
// - Abrir o link correspondente
// ============================================================

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function ContactCard({ item, index, isInView, reduceMotion }) {
  const Icon = item.icon;

  return (
    <motion.a
      href={item.href}
      target={item.external ? '_blank' : undefined}
      rel={item.external ? 'noopener noreferrer' : undefined}
      aria-label={`Entrar em contato pelo ${item.label}`}
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
        duration: 0.7,
        delay: reduceMotion ? 0 : 0.15 + index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -3,
            }
      }
      whileTap={
        reduceMotion
          ? undefined
          : {
              scale: 0.985,
            }
      }
      className="
        group relative flex min-w-0 items-center gap-4
        overflow-hidden rounded-2xl
        border border-white/6
        bg-white/[0.014]
        p-5
        transition-all duration-500
        hover:border-violet-400/16
        hover:bg-violet-400/[0.022]
        hover:shadow-[0_24px_70px_rgba(0,0,0,0.22)]
        sm:p-6
      "
    >
      {/* ======================================================
          FUNDO DO CARD
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute top-1/2 left-0
          h-24 w-24
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          bg-violet-500/0
          blur-[45px]
          transition-colors duration-500
          group-hover:bg-violet-500/8
        "
      />

      {/* ======================================================
          ÍCONE
      ====================================================== */}

      <span
        className="
          relative flex h-11 w-11 shrink-0
          items-center justify-center
          rounded-xl
          border border-violet-400/12
       bg-violet-400/2.5
          text-violet-300/55
          transition-all duration-300
          group-hover:border-gold/18
          group-hover:text-gold/80
          group-hover:shadow-[0_0_22px_rgba(159,92,247,0.08)]
        "
      >
        <Icon size={18} />
      </span>

      {/* ======================================================
          CONTEÚDO
      ====================================================== */}

      <div className="relative min-w-0 flex-1">
        <span className="mb-1.5 block text-[8px] font-medium uppercase tracking-[0.26em] text-gold/55">
          {item.label}
        </span>

        <span className="block truncate text-xs font-light text-white/68 transition-colors duration-300 group-hover:text-white/85 sm:text-sm">
          {item.value}
        </span>
      </div>

      {/* ======================================================
          SETA
      ====================================================== */}

      <span
        className="
          relative flex h-8 w-8 shrink-0
          items-center justify-center
          rounded-full
          border border-white/6
          text-white/20
          transition-all duration-300
          group-hover:border-gold/18
          group-hover:text-gold/75
        "
      >
        <ArrowUpRight
          size={14}
          strokeWidth={1.4}
          className="
            transition-transform duration-300
            group-hover:translate-x-0.5
            group-hover:-translate-y-0.5
          "
        />
      </span>

      {/* ======================================================
          LINHA INFERIOR
      ====================================================== */}

      <span
        aria-hidden="true"
        className="
          absolute right-5 bottom-0 left-5
          h-px origin-left scale-x-0
          bg-linear-to-r
          from-violet-400/60
          via-gold/45
          to-transparent
          transition-transform duration-500
          group-hover:scale-x-100
        "
      />
    </motion.a>
  );
}
