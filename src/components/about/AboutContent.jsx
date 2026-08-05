// ============================================================
// NOTNULL SYSTEMS
// PORTFÓLIO PESSOAL — HIDEYUKI TAKAHASHI
//
// Componente: AboutContent
// Responsabilidade:
// - Título e apresentação profissional
// - Informações acadêmicas e profissionais
// - Destaques da seção Sobre
// ============================================================

import { motion } from 'framer-motion';

import { aboutHighlights, aboutParagraphs } from './about-data';

export default function AboutContent({ isInView, reduceMotion }) {
  return (
    <motion.div
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              x: 42,
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
        delay: 0.22,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="about-content"
    >
      {/* ========== MARCADOR ========== */}

      <div className="about-content__marker">
        <span className="about-content__marker-dot" />

        <span>Perfil profissional</span>
      </div>

      {/* ========== TÍTULO ========== */}

      <h2 className="about-content__title">
        <span className="about-content__title-primary">Tecnologia com</span>

        <span className="about-content__title-secondary">propósito e precisão.</span>
      </h2>

      {/* ========== DESCRIÇÃO ========== */}

      <div className="about-content__description">
        {aboutParagraphs.map(paragraph => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      {/* ========== DIVISOR ========== */}

      <div aria-hidden="true" className="about-content__divider" />

      {/* ========== INFORMAÇÕES ========== */}

      <div className="about-content__highlights">
        {aboutHighlights.map(({ id, icon: Icon, label, value }) => (
          <div key={id} className="about-highlight">
            <div className="about-highlight__header">
              <Icon size={15} strokeWidth={1.35} className="about-highlight__icon" />

              <span className="about-highlight__point" />
            </div>

            <span className="about-highlight__label">{label}</span>

            <span className="about-highlight__value">{value}</span>
          </div>
        ))}
      </div>

      {/* ========== ASSINATURA ========== */}

      <div className="about-content__signature">
        <span className="about-content__signature-line" />

        <span>Construindo com clareza</span>
      </div>
    </motion.div>
  );
}
