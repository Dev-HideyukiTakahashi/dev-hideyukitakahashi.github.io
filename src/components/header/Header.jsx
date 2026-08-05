import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { headerLinks } from './header-data';

// ============================================================
// NOTNULL SYSTEMS
// HEADER DO PORTFÓLIO
//
// Responsabilidade:
// - Navegação principal
// - Indicação da seção ativa
// - Menu responsivo
// - Mudança visual ao rolar
// ============================================================

const INITIAL_ACTIVE_LINK = '#home';
const SCROLL_OFFSET = 40;

export default function Header() {
  const reduceMotion = useReducedMotion();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(INITIAL_ACTIVE_LINK);
  const [isBorderActive, setIsBorderActive] = useState(false);

  // ============================================================
  // INTERAÇÕES
  // ============================================================

  const triggerBorder = useCallback(() => {
    setIsBorderActive(true);

    window.setTimeout(() => {
      setIsBorderActive(false);
    }, 900);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileOpen(false);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileOpen(currentState => !currentState);
  }, []);

  const handleLinkClick = useCallback(
    href => {
      setActiveLink(href);
      closeMobileMenu();
      triggerBorder();
    },
    [closeMobileMenu, triggerBorder],
  );

  // ============================================================
  // SCROLL DO HEADER
  // ============================================================

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_OFFSET);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // ============================================================
  // EVENTO EXTERNO DO HERO
  // ============================================================

  useEffect(() => {
    window.addEventListener('triggerBorderEvent', triggerBorder);

    return () => {
      window.removeEventListener('triggerBorderEvent', triggerBorder);
    };
  }, [triggerBorder]);

  // ============================================================
  // DETECÇÃO DA SEÇÃO ATIVA
  // ============================================================

  useEffect(() => {
    const sections = headerLinks.map(link => document.querySelector(link.href)).filter(Boolean);

    if (sections.length === 0) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      entries => {
        const visibleEntries = entries
          .filter(entry => entry.isIntersecting)
          .sort((firstEntry, secondEntry) => {
            return secondEntry.intersectionRatio - firstEntry.intersectionRatio;
          });

        const mostVisibleEntry = visibleEntries[0];

        if (mostVisibleEntry) {
          setActiveLink(`#${mostVisibleEntry.target.id}`);
        }
      },
      {
        threshold: [0.12, 0.25, 0.4],
        rootMargin: '-90px 0px -55% 0px',
      },
    );

    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // ============================================================
  // FECHAR MENU AO REDIMENSIONAR
  // ============================================================

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // ============================================================
  // BLOQUEAR SCROLL COM MENU MOBILE ABERTO
  // ============================================================

  useEffect(() => {
    if (!isMobileOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMobileOpen]);

  return (
    <motion.header
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              y: -26,
            }
      }
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={[
        'portfolio-header',
        isScrolled ? 'portfolio-header--scrolled' : '',
        isBorderActive ? 'portfolio-header--active-border' : '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {/* ======================================================
          BRILHO SUPERIOR
      ====================================================== */}

      <div aria-hidden="true" className="portfolio-header__ambient" />

      {/* ======================================================
          CONTAINER
      ====================================================== */}

      <div className="portfolio-header__container">
        {/* ====================================================
            LOGO INICIAL
        ==================================================== */}

        <a
          href="#home"
          onClick={() => handleLinkClick('#home')}
          className="portfolio-header__brand"
          aria-label="Voltar ao início"
        >
          <span className="portfolio-header__brand-symbol">&lt;</span>

          <span className="portfolio-header__brand-name">dev</span>

          <span className="portfolio-header__brand-symbol">&gt;</span>
        </a>

        {/* ====================================================
            NAVEGAÇÃO DESKTOP
        ==================================================== */}

        <nav className="portfolio-header__navigation" aria-label="Navegação principal">
          {headerLinks.map((link, index) => {
            const isActive = activeLink === link.href;

            return (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: -12,
                      }
                }
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: reduceMotion ? 0 : 0.12 + index * 0.06,
                }}
                className={[
                  'portfolio-header__link',
                  isActive ? 'portfolio-header__link--active' : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
                aria-current={isActive ? 'page' : undefined}
              >
                <span>{link.name}</span>

                <span aria-hidden="true" className="portfolio-header__link-line" />
              </motion.a>
            );
          })}
        </nav>

        {/* ====================================================
            ÁREA DIREITA
        ==================================================== */}

        <div className="portfolio-header__right">
          {/* Logo final desktop */}

          <a
            href="#home"
            onClick={() => handleLinkClick('#home')}
            className="portfolio-header__brand"
            aria-label="Voltar ao início"
          >
            <span className="portfolio-header__brand-symbol">&lt;</span>

            <span className="portfolio-header__brand-name">/dev</span>

            <span className="portfolio-header__brand-symbol">&gt;</span>
          </a>

          {/* Botão mobile */}

          <button
            type="button"
            onClick={toggleMobileMenu}
            aria-label={isMobileOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMobileOpen}
            aria-controls="portfolio-mobile-navigation"
            className={[
              'portfolio-header__mobile-button',
              isMobileOpen ? 'portfolio-header__mobile-button--active' : '',
            ]
              .filter(Boolean)
              .join(' ')}
          >
            <span className="portfolio-header__mobile-button-glow" />

            <AnimatePresence mode="wait" initial={false}>
              {isMobileOpen ? (
                <motion.span
                  key="close"
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          rotate: -45,
                          scale: 0.85,
                        }
                  }
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={
                    reduceMotion
                      ? undefined
                      : {
                          opacity: 0,
                          rotate: 45,
                          scale: 0.85,
                        }
                  }
                  transition={{
                    duration: 0.2,
                  }}
                  className="relative z-10"
                >
                  <X size={20} strokeWidth={1.5} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          rotate: 45,
                          scale: 0.85,
                        }
                  }
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={
                    reduceMotion
                      ? undefined
                      : {
                          opacity: 0,
                          rotate: -45,
                          scale: 0.85,
                        }
                  }
                  transition={{
                    duration: 0.2,
                  }}
                  className="relative z-10"
                >
                  <Menu size={20} strokeWidth={1.5} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* ======================================================
          MENU MOBILE
      ====================================================== */}

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            id="portfolio-mobile-navigation"
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    height: 0,
                  }
            }
            animate={{
              opacity: 1,
              height: 'auto',
            }}
            exit={
              reduceMotion
                ? undefined
                : {
                    opacity: 0,
                    height: 0,
                  }
            }
            transition={{
              duration: 0.38,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="portfolio-header__mobile-menu"
          >
            <div className="portfolio-header__mobile-menu-background" />

            <nav className="portfolio-header__mobile-navigation" aria-label="Navegação mobile">
              {headerLinks.map((link, index) => {
                const isActive = activeLink === link.href;

                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => handleLinkClick(link.href)}
                    initial={
                      reduceMotion
                        ? false
                        : {
                            opacity: 0,
                            x: -16,
                          }
                    }
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.35,
                      delay: reduceMotion ? 0 : 0.08 + index * 0.045,
                    }}
                    className={[
                      'portfolio-header__mobile-link',
                      isActive ? 'portfolio-header__mobile-link--active' : '',
                    ]
                      .filter(Boolean)
                      .join(' ')}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <span className="portfolio-header__mobile-link-number">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <span className="portfolio-header__mobile-link-name">{link.name}</span>

                    <span className="portfolio-header__mobile-link-line" />
                  </motion.a>
                );
              })}
            </nav>

            <div className="portfolio-header__mobile-footer">
              <span>NotNull Systems</span>

              <span className="portfolio-header__mobile-footer-status">
                <span className="portfolio-header__mobile-footer-dot" />
                Sistema ativo
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ======================================================
          LINHA INFERIOR
      ====================================================== */}

      <div aria-hidden="true" className="portfolio-header__border">
        <span className="portfolio-header__border-light" />
      </div>
    </motion.header>
  );
}
