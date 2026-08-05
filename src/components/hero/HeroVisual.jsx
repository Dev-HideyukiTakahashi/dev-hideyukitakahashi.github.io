// ============================================================
// NOTNULL SYSTEMS | HERO VISUAL
// ============================================================

import profile from '../../assets/profile.png';

export default function HeroVisual() {
  return (
    <div className="hero-visual">
      <div className="hero-function-card">
        <span className="hero-card-label">Function build() {'{'}</span>

        <div className="hero-function-lines">
          <span>strategy();</span>
          <span>architecture();</span>
          <span>scale();</span>
          <span>return impact();</span>
        </div>

        <span className="hero-function-close">{'}'}</span>
      </div>

      <div className="hero-cpu-wrap">
        <div className="hero-cpu-core">
          <div className="hero-cpu-circuit hero-cpu-circuit-top" />
          <div className="hero-cpu-circuit hero-cpu-circuit-right" />
          <div className="hero-cpu-circuit hero-cpu-circuit-bottom" />
          <div className="hero-cpu-circuit hero-cpu-circuit-left" />

          <div className="hero-photo-frame">
            <img src={profile} alt="Hideyuki Takahashi" className="hero-photo" />
          </div>
        </div>
      </div>

      <div className="hero-status-orb" aria-hidden="true" />
    </div>
  );
}
