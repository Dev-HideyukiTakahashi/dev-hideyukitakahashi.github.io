import { motion, useAnimation, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useEffect, useState } from 'react';

// ============================================================
// NOTNULL SYSTEMS
// PORTFÓLIO PESSOAL — HIDEYUKI TAKAHASHI
//
// Componente: Footer
// Responsabilidade:
// - Exibir a identidade oficial da NotNull Systems
// - Apresentar os direitos autorais
// - Executar a animação contínua de build
// - Encerrar visualmente o portfólio
// ============================================================

const NOTNULL_URL = 'https://notnull-systems.netlify.app/';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const buildControls = useAnimation();
  const reduceMotion = useReducedMotion();

  const [isBuildCompleted, setIsBuildCompleted] = useState(false);

  // ============================================================
  // ANIMAÇÃO DE BUILD
  // ============================================================

  useEffect(() => {
    if (reduceMotion) {
      setIsBuildCompleted(true);
      buildControls.set({
        scaleX: 1,
      });

      return undefined;
    }

    let isMounted = true;
    let restartTimeout;

    const wait = duration =>
      new Promise(resolve => {
        restartTimeout = window.setTimeout(resolve, duration);
      });

    const runBuildAnimation = async () => {
      while (isMounted) {
        setIsBuildCompleted(false);

        buildControls.set({
          scaleX: 0,
        });

        await buildControls.start({
          scaleX: 1,

          transition: {
            duration: 3.2,
            ease: [0.65, 0, 0.35, 1],
          },
        });

        if (!isMounted) {
          break;
        }

        setIsBuildCompleted(true);

        await wait(1700);

        if (!isMounted) {
          break;
        }

        await buildControls.start({
          scaleX: 0,

          transition: {
            duration: 0.35,
            ease: 'easeOut',
          },
        });
      }
    };

    runBuildAnimation();

    return () => {
      isMounted = false;

      if (restartTimeout) {
        window.clearTimeout(restartTimeout);
      }

      buildControls.stop();
    };
  }, [buildControls, reduceMotion]);

  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-[#040406]">
      {/* ======================================================
          FUNDO
      ====================================================== */}

      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 h-32 w-[60%] -translate-x-1/2 rounded-full bg-violet-700/4.5 blur-[80px]" />

        <div className="absolute top-0 right-0 left-0 h-px bg-linear-to-r from-transparent via-violet-400/10 to-transparent" />
      </div>

      {/* ======================================================
          CONTAINER
      ====================================================== */}

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-9 px-5 py-10 sm:px-8 md:flex-row md:gap-8 md:py-12 lg:px-10">
        {/* ====================================================
            IDENTIDADE NOTNULL SYSTEMS
        ==================================================== */}

        <motion.a
          href={NOTNULL_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Acessar o site da NotNull Systems"
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  x: -18,
                }
          }
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="group flex flex-wrap items-center justify-center gap-3 sm:justify-start sm:gap-4"
        >
          {/* Nome da marca */}

          <span className="inline-flex items-center gap-2">
            <span className="text-sm font-bold uppercase tracking-[0.14em] text-white/70 transition-colors duration-300 group-hover:text-white">
              NotNull
            </span>

            <span className="text-[10px] font-light uppercase tracking-[0.28em] text-white/30 transition-colors duration-300 group-hover:text-white/55">
              Systems
            </span>
          </span>

          {/* Divisor */}

          <span
            aria-hidden="true"
            className="hidden h-5 w-px bg-white/10 transition-colors duration-300 group-hover:bg-white/20 sm:block"
          />

          {/* Frase da marca */}

          <span className="font-playfair text-xs italic tracking-[0.16em] text-[#c9a94e]/65 transition-colors duration-300 group-hover:text-[#c9a94e]">
            Always present.
          </span>
        </motion.a>

        {/* ====================================================
            COPYRIGHT E BUILD
        ==================================================== */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  x: 18,
                }
          }
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: 0.7,
            delay: reduceMotion ? 0 : 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex flex-col items-center md:items-end"
        >
          {/* Copyright */}

          <div className="relative pb-2">
            <span className="text-[10px] font-light tracking-[0.16em] text-white/42">
              © {currentYear} Hideyuki Takahashi
            </span>

            {/* Barra de progresso */}

            <span className="absolute right-0 bottom-0 left-0 h-px overflow-hidden bg-white/5">
              <motion.span
                className="absolute inset-0 origin-left bg-linear-to-r from-violet-500/60 via-gold to-gold-light"
                initial={{
                  scaleX: reduceMotion ? 1 : 0,
                }}
                animate={buildControls}
              />
            </span>
          </div>

          {/* Build success */}

          <motion.div
            initial={{
              opacity: reduceMotion ? 1 : 0,
              y: reduceMotion ? 0 : 4,
            }}
            animate={{
              opacity: isBuildCompleted ? 1 : 0,
              y: isBuildCompleted ? 0 : 4,
            }}
            transition={{
              duration: 0.45,
              ease: 'easeOut',
            }}
            className="mt-2 flex items-center gap-2"
          >
            <span className="relative flex h-2 w-2 items-center justify-center">
              <span className="absolute inset-0 rounded-full bg-emerald-400/25 blur-[3px]" />

              <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.75)]" />
            </span>

            <span className="font-mono text-[8px] uppercase tracking-[0.24em] text-emerald-300/55">
              build success ✓
            </span>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
