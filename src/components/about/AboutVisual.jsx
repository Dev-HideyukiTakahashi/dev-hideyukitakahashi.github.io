// ============================================================
// NOTNULL SYSTEMS
// PORTFÓLIO PESSOAL — HIDEYUKI TAKAHASHI
//
// Componente: AboutVisual
// Responsabilidade:
// - Fotografia da seção Sobre
// - Moldura tecnológica
// - Status visual da NotNull Systems
// ============================================================

import { motion } from 'framer-motion';

import profileImage from '../../assets/profile2.png';

export default function AboutVisual({ isInView, reduceMotion }) {
  return (
    <motion.div
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              x: -42,
              filter: 'blur(8px)',
            }
      }
      animate={
        isInView
          ? {
              opacity: 1,
              x: 0,
              filter: 'blur(0px)',
            }
          : {}
      }
      transition={{
        duration: 0.9,
        delay: 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="about-visual"
    >
      <div className="about-visual__ambient" />

      {/* ========== CIRCUITOS ========== */}

      <div aria-hidden="true" className="about-visual__circuits">
        <span className="about-visual__circuit about-visual__circuit--left" />
        <span className="about-visual__circuit about-visual__circuit--right" />

        <span className="about-visual__node about-visual__node--left" />
        <span className="about-visual__node about-visual__node--right" />
      </div>

      {/* ========== MOLDURA ========== */}

      <div className="about-visual__frame">
        <div className="about-visual__frame-inner">
          <img
            src={profileImage}
            alt="Hideyuki Takahashi"
            draggable={false}
            className="about-visual__image"
          />

          <div aria-hidden="true" className="about-visual__overlay" />

          {/* ========== IDENTIFICAÇÃO ========== */}

          <div className="about-visual__caption">
            <div>
              <span className="about-visual__caption-label">Fundador</span>

              <span className="about-visual__caption-value">NotNull Systems</span>
            </div>

            <span className="about-visual__status" aria-label="Disponível" title="Disponível">
              <span className="about-visual__status-dot" />
            </span>
          </div>
        </div>
      </div>

      {/* ========== CAMADAS DECORATIVAS ========== */}

      <div aria-hidden="true" className="about-visual__decoration about-visual__decoration--top" />

      <div
        aria-hidden="true"
        className="about-visual__decoration about-visual__decoration--bottom"
      />
    </motion.div>
  );
}
