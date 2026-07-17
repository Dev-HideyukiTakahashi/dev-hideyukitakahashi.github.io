import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const skills = [
  'CSS',
  'HTML',
  'JavaScript',
  'TypeScript',
  'Java',
  'Spring Boot',
  'Node.js',
  'React',
  'Angular',
  'Tailwind CSS',
  'Bootstrap',
  'Docker',
  'CI/CD',
  'Scrum',
  'Swagger',
  'Testes Unitários',
  'Testes de Integração',
  'Testes E2E',
  'TDD',
  'APIs REST',
  'Microservices',
  'PostgreSQL',
  'MongoDB',
  'Redis',
  'Git',
  'Github',
  'Figma',
  'UI/UX',
  'Clean Architecture',
  'Clean Code',
  'SOLID',
  'IA Generativa (LLMs)',
  'Linux',
  'Trabalho em Equipe',
  'Resolução de Problemas',
  'Aprendizado Contínuo',
];

// Skills displayed on mobile devices
const mobileSkills = [
  'HTML',
  'CSS',
  'Java',
  'Spring Boot',
  'React',
  'TypeScript',
  'JavaScript',
  'Node.js',
  'APIs REST',
  'PostgreSQL',
  'MongoDB',
  'Docker',
  'Git',
  'UI/UX',
  'Testes Unitários',
  'SOLID',
  'Trabalho em Equipe',
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="relative w-full" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-16 pt-8 md:pt-20 md:pb-23 2xl:pb-90">
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
                ${!mobileSkills.includes(skill) ? 'hidden md:inline-block' : 'inline-block'}`}
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
