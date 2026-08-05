// ============================================================
// NOTNULL SYSTEMS
// PORTFÓLIO PESSOAL — HIDEYUKI TAKAHASHI
//
// Componente: Contact
// Responsabilidade:
// - Apresentar os canais de contato
// - Comunicar disponibilidade profissional
// - Encerrar o conteúdo principal do portfólio
// ============================================================

import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

import ContactCard from './ContactCard';
import { contactLinks } from './contact-data';

export default function Contact() {
  const sectionRef = useRef(null);

  const isInView = useInView(sectionRef, {
    once: true,
    margin: '-100px',
  });

  const reduceMotion = useReducedMotion();

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="
        relative isolate w-full overflow-hidden
        scroll-mt-20
        border-b border-white/5
        bg-[#050507]
      "
    >
      {/* ======================================================
          CENÁRIO
      ====================================================== */}

      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute top-[20%] left-1/2
            h-96 w-[65%]
            -translate-x-1/2
            rounded-full
            bg-violet-700/5.5
            blur-[140px]
          "
        />

        <div
          className="
            absolute right-[8%] bottom-[8%]
            h-64 w-64
            rounded-full
            bg-gold/[0.022]
            blur-[100px]
          "
        />

        <div
          className="absolute inset-0 opacity-[0.014]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(168,85,247,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.5) 1px, transparent 1px)',

            backgroundSize: '68px 68px',

            maskImage: 'radial-gradient(circle at center, black 0%, transparent 74%)',

            WebkitMaskImage: 'radial-gradient(circle at center, black 0%, transparent 74%)',
          }}
        />

        <div className="absolute top-0 right-0 left-0 h-px bg-linear-to-r from-transparent via-violet-400/10 to-transparent" />
      </div>

      {/* ======================================================
          CONTAINER
      ====================================================== */}

      <div className="relative z-10 mx-auto w-full max-w-5xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
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
          className="mx-auto mb-12 max-w-2xl text-center sm:mb-14"
        >
          {/* ========== EYEBROW ========== */}

          <div className="mb-5 flex items-center justify-center gap-4">
            <span className="h-px w-9 bg-linear-to-r from-transparent to-gold/50" />

            <span className="text-[9px] font-medium uppercase tracking-[0.38em] text-gold sm:text-[10px]">
              Contato
            </span>

            <span className="h-px w-9 bg-linear-to-r from-gold/50 to-transparent" />
          </div>

          {/* ========== TÍTULO ========== */}

          <h2 className="font-playfair text-[clamp(2.7rem,5vw,4.4rem)] leading-[1.04] font-bold tracking-[-0.04em]">
            <span className="text-ivory">Vamos criar</span>

            <br />

            <span className="bg-linear-to-r from-[#aa7c25] via-[#dfb84c] to-[#aa7c25] bg-clip-text text-transparent italic">
              algo relevante.
            </span>
          </h2>

          {/* ========== DESCRIÇÃO ========== */}

          <p className="mx-auto mt-6 max-w-xl text-sm leading-[1.8] font-light text-white/42 sm:text-[15px]">
            Estou disponível para conversar sobre projetos, oportunidades, tecnologia e novas
            soluções digitais.
          </p>

          {/* ========== DISPONIBILIDADE ========== */}

          <div className="mt-6 flex justify-center">
            <span
              className="
                inline-flex items-center gap-2.5
                rounded-full
                border border-emerald-400/12
                bg-emerald-400/2.5
                px-4 py-2
                text-[8px] font-medium uppercase
                tracking-[0.22em]
                text-emerald-300/55
              "
            >
              <span
                className="
                  relative flex h-2 w-2
                  items-center justify-center
                "
              >
                <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/30" />

                <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_9px_rgba(52,211,153,0.75)]" />
              </span>
              Disponível para novos contatos
            </span>
          </div>
        </motion.div>

        {/* ====================================================
            CANAIS DE CONTATO
        ==================================================== */}

        <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
          {contactLinks.map((item, index) => (
            <ContactCard
              key={item.id}
              item={item}
              index={index}
              isInView={isInView}
              reduceMotion={reduceMotion}
            />
          ))}
        </div>

        {/* ====================================================
            MENSAGEM FINAL
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
            duration: 0.75,
            delay: reduceMotion ? 0 : 0.52,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mt-10 flex flex-col items-center justify-between gap-5
            border-t border-white/5
            pt-6
            text-center
            sm:flex-row sm:text-left
          "
        >
          <div>
            <span className="block text-[8px] font-medium uppercase tracking-[0.26em] text-gold/45">
              NotNull Systems
            </span>

            <p className="mt-2 text-xs font-light text-white/27">
              Tecnologia construída com clareza, estabilidade e precisão.
            </p>
          </div>

          <a
            href="#home"
            aria-label="Voltar ao início"
            className="
              group inline-flex items-center gap-3
              text-[8px] font-medium uppercase
              tracking-[0.24em]
              text-white/25
              transition-colors duration-300
              hover:text-gold/70
            "
          >
            Voltar ao início
            <span
              className="
                flex h-8 w-8 items-center justify-center
                rounded-full
                border border-white/6
                transition-all duration-300
                group-hover:border-gold/18
              "
            >
              <ArrowUp
                size={14}
                strokeWidth={1.4}
                className="transition-transform duration-300 group-hover:-translate-y-0.5"
              />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
