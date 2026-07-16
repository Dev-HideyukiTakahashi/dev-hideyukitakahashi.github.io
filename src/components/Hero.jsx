import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsAppIcon, MailIcon } from './Icons';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-visible md:overflow-hidden md:mt-8 scroll-mt-20"
    >
      {/* Background Blurs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-gold/3 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-100 h-100 bg-gold/2 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-6 -mt-10"
        >
          <span className="inline-block text-gold text-[11px] font-semibold tracking-[0.4em] uppercase">
            Full Stack Developer
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-playfair text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-8"
        >
          <span className="text-ivory">Hideyuki</span>
          <br />
          <span className="text-gold italic">Takahashi</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-ivory-muted text-lg md:text-xl max-w-2xl mx-auto mb-8 font-light leading-relaxed"
        >
          Código, arquitetura e soluções escaláveis.
          <br />
          <span className="text-ivory font-normal">React</span>,{' '}
          <span className="text-ivory font-normal">Node.js</span> e{' '}
          <span className="text-ivory font-normal">Java</span>.
        </motion.p>

        {/* Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 1 }}
          className="flex items-center justify-center gap-5 "
        >
          {[
            { icon: GithubIcon, href: 'https://github.com/dev-hideyukitakahashi', label: 'GitHub' },
            {
              icon: LinkedinIcon,
              href: 'https://www.linkedin.com/in/dev-hideyukitakahashi/',
              label: 'LinkedIn',
            },
            { icon: WhatsAppIcon, href: 'https://wa.me/5511942051849', label: 'WhatsApp' },
            { icon: MailIcon, href: 'mailto:dev.hideyukitakahashi@gmail.com', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-ivory-muted hover:text-gold hover:border-gold/30 transition-colors duration-200"
              whileHover={{ y: -3, scale: 1.1, transition: { duration: 0.2 } }}
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* ARROW */}
      <motion.a
        href="#about"
        className="absolute bottom-24 md:bottom-12 left-1/2 -translate-x-1/2 text-gold/40 hover:text-gold transition-colors duration-300"
        animate={{ y: [0, 8, 0] }}
        onClick={() =>
          window.dispatchEvent(new CustomEvent('triggerBorderEvent', { bubbles: true }))
        }
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ArrowDown size={32} />
      </motion.a>
    </section>
  );
}
