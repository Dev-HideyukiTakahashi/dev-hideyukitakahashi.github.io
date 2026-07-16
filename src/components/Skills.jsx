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
  'Testes Unitários',
  'Testes de Integração',
  'Testes E2E',
  'TDD',
  'APIs REST',
  'Microservices',
  'Bancos Relacionais (MySQL, PostgreSQL)',
  'Bancos Não Relacionais (MongoDB, Redis)',
  'Git',
  'Github',
  'Figma',
  'Clean Architecture',
  'SOLID',
  'IA Generativa (LLMs)',
];

// Mobile skills
const essentialSkills = [
  'React',
  'Angular',
  'JavaScript',
  'TypeScript',
  'Node.js',
  'Java',
  'Spring Boot',
  'Docker',
  'APIs REST',
  'Microservices',
  'Bancos Relacionais (MySQL, PostgreSQL)',
  'Bancos Não Relacionais (MongoDB, Redis)',
  'Git',
  'Figma',
  'Clean Architecture',
  'SOLID',
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="relative w-full" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-16 pt-8 md:pt-20 md:pb-37 2xl:pb-100">
        {/* Section header */}
        <div className="text-center mb-10">
          <span className="text-gold text-[11px] font-semibold tracking-[0.4em] uppercase">
            Habilidades
          </span>
        </div>

        {/* Skills list */}
        <div className="flex flex-wrap justify-center gap-3 md:mt-20 2xl:mt-30">
          {skills.map((skill, i) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.04 }}
              whileHover={{
                y: -4,
                scale: 1.05,
                borderColor: 'rgba(212, 175, 55, 0.5)',
                color: '#D4AF37',
              }}
              transition={{
                y: { duration: 0.2 },
                scale: { duration: 0.2 },
                borderColor: { duration: 0.2 },
                color: { duration: 0.2 },
              }}
              className={`px-6 py-3 text-[13px] font-medium text-ivory-muted tracking-wide border border-white/10 rounded-md cursor-default
                ${!essentialSkills.includes(skill) ? 'hidden md:inline-block' : 'inline-block'}`}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Next section arrow */}
      <div className="hidden md:flex justify-center pb-16">
        <motion.a
          href="#projects"
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
