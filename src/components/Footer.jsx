import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-8 lg:px-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <nav className="flex items-center gap-8">
            {[
              { name: 'Inicio', href: '#home' },
              { name: 'Sobre', href: '#about' },
              { name: 'Projetos', href: '#projects' },
              { name: 'Contato', href: '#contact' },
            ].map(link => (
              <a
                key={link.name}
                href={link.href}
                className="text-[11px] text-ivory-muted/50 hover:text-gold transition-colors duration-500 tracking-[0.15em] uppercase"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <span className="text-[11px] text-ivory-muted/30 tracking-widest">
            &copy; {currentYear} Hideyuki Takahashi
          </span>
        </div>
      </div>
    </footer>
  );
}
