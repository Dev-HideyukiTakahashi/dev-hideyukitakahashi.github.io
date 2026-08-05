// ============================================================
// NOTNULL SYSTEMS | HERO
// ============================================================

import HeroCopy from './HeroCopy';
import HeroVisual from './HeroVisual';

export default function Hero() {
  return (
    <section id="home" className="hero-section scroll-mt-24">
      {/* ========== FUNDO ========== */}
      <div className="hero-background" aria-hidden="true">
        <div className="hero-grid" />
        <div className="hero-glow hero-glow-primary" />
        <div className="hero-glow hero-glow-secondary" />
        <div className="hero-glow hero-glow-accent" />
      </div>

      {/* ========== CONTEÚDO ========== */}
      <div className="hero-shell">
        <div className="hero-content">
          <HeroCopy />
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
