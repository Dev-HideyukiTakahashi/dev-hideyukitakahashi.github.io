import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Início', href: '#home' },
  { name: 'Sobre', href: '#about' },
  { name: 'Habilidades', href: '#skills' },
  { name: 'Projetos', href: '#projects' },
  { name: 'Contato', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const [isActiveBorder, setIsActiveBorder] = useState(false);

  const [activeLink, setActiveLink] = useState('#home');

  // Function to trigger the gold border effect
  const triggerBorder = () => {
    setIsActiveBorder(true);
    setTimeout(() => setIsActiveBorder(false), 1000);
  };

  useEffect(() => {
    // Handle scroll to change header background
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);

    // Listen for custom trigger event from other components (e.g., Hero)
    window.addEventListener('triggerBorderEvent', triggerBorder);

    // Observe sections to update active navigation link while scrolling
    const sections = navLinks.map(link => document.querySelector(link.href)).filter(Boolean);

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Update active menu item based on the visible section
            setActiveLink(`#${entry.target.id}`);
          }
        });
      },
      {
        // Trigger when around 40% of the section is visible
        threshold: 0.1,

        // Adjust for fixed header height
        rootMargin: '-100px 0px -50% 0px',
      },
    );

    sections.forEach(section => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('triggerBorderEvent', triggerBorder);

      // Cleanup observer when component unmounts
      sections.forEach(section => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      style={{ paddingBlock: '15px' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 backdrop-blur-2xl border-b 
        ${isActiveBorder ? 'border-gold/50' : 'border-white/5'}
        ${scrolled ? 'bg-obsidian/70' : 'bg-obsidian/90'}`}
    >
      <div className="w-full px-8 lg:px-16">
        <div className="grid grid-cols-[auto_1fr_auto] items-center">
          {/* Opening Logo */}
          <div className="text-xl font-playfair font-bold tracking-wider cursor-default">
            <span className="text-gold">&lt;</span>
            <span className="text-ivory">dev</span>
            <span className="text-gold">&gt;</span>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center justify-center gap-10">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={() => {
                  triggerBorder();
                  setActiveLink(link.href);
                }}
                className={`relative text-[13px] font-medium transition-all duration-200 ease-in-out tracking-[0.15em] uppercase
                ${activeLink === link.href ? 'text-gold' : 'text-ivory-muted hover:text-gold'}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i + 0.5 }}
              >
                {link.name}
              </motion.a>
            ))}
          </nav>

          {/* Closing Logo and Mobile Menu Toggle */}
          <div className="grid grid-cols-[1fr_auto] items-center">
            {/* Right Logo*/}
            <div className="text-xl font-playfair font-bold tracking-wider cursor-default">
              <span className="text-gold">&lt;</span>
              <span className="text-ivory">/dev</span>
              <span className="text-gold">&gt;</span>
            </div>

            {/* Button mobile */}
            <button
              className="md:hidden text-ivory-muted hover:text-gold transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="  absolute top-full left-0 right-0 md:hidden bg-obsidian backdrop-blur-2xl 
              border-t border-b border-white/5 py-4"
          >
            <nav className="flex flex-col items-center gap-6">
              {navLinks.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-ivory-muted hover:text-gold transition-colors text-[13px] 
                    uppercase tracking-[0.2em]"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
