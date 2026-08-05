// ============================================================
// NOTNULL SYSTEMS | HERO COPY
// ============================================================

import { ArrowDownRight, Download } from 'lucide-react';
import { heroDescription } from './hero-data';

export default function HeroCopy() {
  return (
    <div className="hero-copy">
      <span className="hero-eyebrow">Full Stack Developer</span>

      <h1 className="hero-title">
        <span className="hero-title-primary">Hideyuki</span>
        <span className="hero-title-secondary">Takahashi</span>
      </h1>

      <div className="hero-description">
        {heroDescription.map(text => (
          <p key={text}>{text}</p>
        ))}
      </div>

      <div className="hero-actions">
        <a href="#projects" className="hero-button hero-button-primary">
          <span>Ver Projetos</span>
          <ArrowDownRight size={16} />
        </a>

        <a href="/curriculo.pdf" download className="hero-button hero-button-secondary">
          <span>Baixar Currículo</span>
          <Download size={16} />
        </a>
      </div>
    </div>
  );
}
