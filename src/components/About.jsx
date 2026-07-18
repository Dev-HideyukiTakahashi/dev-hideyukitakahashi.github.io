import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowDown } from 'lucide-react';

import profileImg from '../assets/profile.png';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative w-full overflow-hidden" ref={ref}>
      <div className="max-w-6xl mx-auto px-8 lg:px-16 pt-20 pb-10 2xl:pb-55">
        {/* Section header */}
        <div className="text-center mb-8">
          <span className="text-gold text-[11px] font-semibold tracking-[0.4em] uppercase">
            Sobre
          </span>
        </div>

        {/* About content */}
        <div className="grid lg:grid-cols-2 gap-20 items-center 2xl:mt-40">
          {/* Profile section */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative group">
              {/* Background glow */}
              <div className="absolute -inset-6 bg-linear-to-br from-gold/10 via-transparent to-gold/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Profile placeholder */}
              <div className="relative w-72 h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border border-gold/20 bg-linear-to-br from-slate-dark to-charcoal">
                <img
                  src={profileImg}
                  alt="Hideyuki Takahashi"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  draggable={false}
                />

                {/* Soft overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/25 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Decorative circles */}
              <div className="absolute -bottom-3 -right-3 w-24 h-24 border border-gold/10 rounded-full transition-all duration-500 group-hover:scale-105 group-hover:border-gold/30" />
              <div className="absolute -top-3 -left-3 w-16 h-16 border border-gold/10 rounded-full transition-all duration-500 group-hover:scale-110 group-hover:border-gold/30" />
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {/* Title */}
            <h3 className="font-playfair text-3xl lg:text-4xl font-bold text-ivory mb-8 leading-snug">
              Desenvolvedor Full Stack
              <br />
              <span className="text-gold italic">em São Paulo</span>
            </h3>

            {/* Description */}
            <div className="space-y-6 mb-4">
              <p className="text-ivory-muted leading-[1.9] text-[15px]">
                Sou Hideyuki Takahashi, desenvolvedor Full Stack. Formado em Análise de Sistemas e
                com MBA em Full Stack, foco em backend e arquitetura de aplicações escaláveis.
              </p>

              <p className="text-ivory-muted leading-[1.9] text-[15px]">
                Busco evolução técnica contínua por meio de bootcamps e certificações, aplicando
                sempre as melhores práticas de mercado.
              </p>
            </div>

            {/* Divider */}
            <div className="h-px bg-linear-to-r from-gold/30 via-gold/10 to-transparent mb-4" />

            {/* Personal info */}
            <div className="flex flex-wrap gap-8">
              {[
                { label: 'Localização', value: 'Diadema, SP' },
                { label: 'Experiência', value: 'Full Stack', hideMobile: true },
                { label: 'Foco', value: 'Backend' },
              ].map(item => (
                <div key={item.label} className={item.hideMobile ? 'hidden md:block' : ''}>
                  <span className="text-[10px] text-gold tracking-[0.3em] uppercase block mb-1">
                    {item.label}
                  </span>

                  <span className="text-sm text-ivory font-medium">{item.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Next section arrow */}
      <div className="hidden md:flex justify-center pb-20">
        <motion.a
          href="#skills"
          className="text-gold/40 hover:text-gold transition-colors duration-500"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={32} />
        </motion.a>
      </div>
    </section>
  );
}
