// ============================================================
// NOTNULL SYSTEMS
// PORTFÓLIO PESSOAL — HIDEYUKI TAKAHASHI
//
// Componente: About
// Responsabilidade:
// - Estrutura principal da seção Sobre
// - Animação de entrada
// - Organização responsiva
// - Navegação para Habilidades
// ============================================================

import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

import AboutContent from './AboutContent';
import AboutVisual from './AboutVisual';

export default function About() {
  const sectionRef = useRef(null);

  const isInView = useInView(sectionRef, {
    once: true,
    margin: '-100px',
  });

  const reduceMotion = useReducedMotion();

  return (
    <section id="about" ref={sectionRef} className="about-section">
      {/* ======================================================
          CENÁRIO
      ====================================================== */}

      <div aria-hidden="true" className="about-section__background">
        <div className="about-section__grid" />
        <div className="about-section__glow about-section__glow--left" />
        <div className="about-section__glow about-section__glow--right" />
        <div className="about-section__vignette" />
      </div>

      {/* ======================================================
          CONTAINER
      ====================================================== */}

      <div className="about-section__container">
        {/* ========== CABEÇALHO ========== */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 20,
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
            ease: [0.22, 1, 0.36, 1],
          }}
          className="about-section__header"
        >
          <span className="about-section__header-line" />

          <span className="about-section__eyebrow">Sobre</span>

          <span className="about-section__header-line about-section__header-line--reverse" />
        </motion.div>

        {/* ========== CONTEÚDO PRINCIPAL ========== */}

        <div className="about-section__layout">
          <AboutVisual isInView={isInView} reduceMotion={reduceMotion} />

          <AboutContent isInView={isInView} reduceMotion={reduceMotion} />
        </div>

        {/* ========== PRÓXIMA SEÇÃO ========== */}

        <motion.a
          href="#skills"
          aria-label="Ir para habilidades"
          className="about-section__next"
          animate={
            reduceMotion
              ? undefined
              : {
                  y: [0, 6, 0],
                }
          }
          transition={{
            duration: 2.4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <span>Continuar</span>

          <span className="about-section__next-icon">
            <ArrowDown size={14} strokeWidth={1.4} />
          </span>
        </motion.a>
      </div>
    </section>
  );
}
