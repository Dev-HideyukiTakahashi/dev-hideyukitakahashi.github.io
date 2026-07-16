import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const skills = [
  'React',
  'Angular',
  'Tailwind CSS',
  'JavaScript',
  'TypeScript',
  'Node.js',
  'Java',
  'Spring Boot',
  'Docker',
  'Scrum',
  'Swagger',
  'Testes',
  'APIs REST',
  'Microservices',
  'MySQL',
  'PostgreSQL',
  'MongoDB',
  'Git',
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative w-full overflow-hidden" ref={ref}>
      <div className="max-w-6xl mx-auto px-8 lg:px-16 pt-52 pb-20">
        <span className="text-gold text-[11px] font-semibold tracking-[0.4em] uppercase">
          Sobre
        </span>
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative group">
              <div className="absolute -inset-6 bg-gradient-to-br from-gold/10 via-transparent to-gold/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative w-72 h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border border-gold/20 bg-gradient-to-br from-slate-dark to-charcoal flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-playfair font-bold text-gold/30 mb-3">HT</div>
                  <p className="text-ivory-muted text-[10px] tracking-[0.3em] uppercase">
                    Sua Foto
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-3 -right-3 w-24 h-24 border border-gold/10 rounded-full" />
              <div className="absolute -top-3 -left-3 w-16 h-16 border border-gold/10 rounded-full" />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <h3 className="font-playfair text-3xl lg:text-4xl font-bold text-ivory mb-8 leading-snug">
              Desenvolvedor Full Stack
              <br />
              <span className="text-gold italic">em Sao Paulo</span>
            </h3>

            <div className="space-y-6 mb-10">
              <p className="text-ivory-muted leading-[1.9] text-[15px]">
                Ola, sou Hideyuki Takahashi, um desenvolvedor Full Stack em Sao Paulo. Embora eu
                tenha experiencia tanto em frontend quanto em backend, minha verdadeira paixao esta
                no desenvolvimento de solucoes para o backend.
              </p>
              <p className="text-ivory-muted leading-[1.9] text-[15px]">
                Sou apaixonado por resolver problemas com codigo e estou em constante aprimoramento
                para criar aplicacoes robustas, seguras, atualizadas e eficientes.
              </p>
            </div>

            <div className="h-px bg-gradient-to-r from-gold/30 via-gold/10 to-transparent mb-8" />

            <div className="flex flex-wrap gap-8">
              {[
                { label: 'Localizacao', value: 'Sao Paulo, BR' },
                { label: 'Experiencia', value: 'Full Stack' },
                { label: 'Foco', value: 'Backend' },
              ].map(item => (
                <div key={item.label}>
                  <span className="text-[10px] text-gold tracking-[0.3em] uppercase block mb-1">
                    {item.label}
                  </span>
                  <span className="text-sm text-ivory font-medium">{item.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-36"
        >
          <div className="text-center mb-10">
            <span className="text-gold text-[11px] font-semibold tracking-[0.4em] uppercase">
              Habilidades
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + i * 0.04 }}
                className="px-6 py-3 text-[13px] font-medium text-ivory-muted tracking-wide border border-white/10 rounded-md hover:border-gold/30 hover:text-gold transition-all duration-500 cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="flex justify-center pb-20">
        <motion.a
          href="#projects"
          className="text-gold/40 hover:text-gold transition-colors duration-500"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={20} />
        </motion.a>
      </div>
    </section>
  );
}
