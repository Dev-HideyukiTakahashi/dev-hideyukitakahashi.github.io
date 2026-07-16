import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const skills = [
  'React', 'Angular', 'Tailwind CSS', 'JavaScript', 'TypeScript',
  'Node.js', 'Java', 'Spring Boot', 'Docker', 'Scrum',
  'Swagger', 'Testes', 'APIs REST', 'Microservices',
  'MySQL', 'PostgreSQL', 'MongoDB', 'Git',
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="relative py-40 bg-charcoal/40" ref={ref}>
      <div className="max-w-5xl mx-auto px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <span className="text-gold text-[11px] font-semibold tracking-[0.4em] uppercase">
            Habilidades
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-ivory mt-5">
            Tecnologias que
            <br />
            <span className="text-gold italic">domino</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {skills.map((skill, i) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.04 }}
              className="group px-6 py-3.5 border border-white/5 text-ivory-muted text-[13px] font-medium tracking-wide hover:border-gold/30 hover:text-gold hover:bg-gold/[0.03] transition-all duration-500 cursor-default"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
