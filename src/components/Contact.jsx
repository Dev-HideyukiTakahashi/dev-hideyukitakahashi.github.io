import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { GithubIcon, LinkedinIcon, WhatsAppIcon, MailIcon, ArrowUpRightIcon } from './Icons'

const contactLinks = [
  {
    icon: GithubIcon,
    label: 'GitHub',
    value: 'github.com/dev-hideyukitakahashi',
    href: 'https://github.com/dev-hideyukitakahashi',
    color: 'hover:text-white',
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    value: 'linkedin.com/in/hideyuki-takahashi',
    href: 'https://www.linkedin.com/in/hideyuki-takahashi/',
    color: 'hover:text-[#0A66C2]',
  },
  {
    icon: WhatsAppIcon,
    label: 'WhatsApp',
    value: '+55 (11) 99999-9999',
    href: 'https://wa.me/5511999999999',
    color: 'hover:text-[#25D366]',
  },
  {
    icon: MailIcon,
    label: 'Email',
    value: 'seu@email.com',
    href: 'mailto:seu@email.com',
    color: 'hover:text-gold',
  },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" className="relative py-40 bg-charcoal/40" ref={ref}>
      <div className="max-w-4xl mx-auto px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <span className="text-gold text-[11px] font-semibold tracking-[0.4em] uppercase">
            Contato
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-ivory mt-5">
            Vamos Conversar
          </h2>
          <p className="text-ivory-muted mt-6 max-w-lg mx-auto text-[15px] leading-relaxed">
            Estou sempre aberto a novos projetos e oportunidades.
            Entre em contato!
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {contactLinks.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.1 }}
              className={`group relative p-8 border border-white/5 hover:border-gold/20 transition-all duration-700 ${item.color}`}
              whileHover={{ y: -4 }}
            >
              <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <ArrowUpRightIcon size={16} className="text-gold" />
              </div>

              <item.icon size={24} className="text-ivory-muted group-hover:text-gold transition-colors duration-500 mb-6" />

              <h3 className="text-[11px] text-gold tracking-[0.3em] uppercase mb-2 font-semibold">
                {item.label}
              </h3>

              <p className="text-ivory text-[15px] font-light">
                {item.value}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
