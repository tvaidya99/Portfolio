import { useEffect, useState, useRef, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { close, menu } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);
  const lastFocusedRef = useRef(null);
  const prefersReducedMotion = useRef(false);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    prefersReducedMotion.current = mediaQuery.matches;
    const handler = (e) => { prefersReducedMotion.current = e.matches; };
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Close menu on link click
  const handleNavClick = useCallback(() => {
    setToggle(false);
    setActive('');
    // Return focus to menu button
    if (lastFocusedRef.current) {
      lastFocusedRef.current.focus();
    }
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Trap focus in mobile menu
  useEffect(() => {
    if (toggle && menuRef.current) {
      // Store last focused element
      lastFocusedRef.current = document.activeElement;

      // Focus first focusable element in menu
      const focusableElements = menuRef.current.querySelectorAll(
        'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
      );
      if (focusableElements.length > 0) {
        focusableElements[0].focus();
      }

      // Handle tab trapping
      const handleKeyDown = (e) => {
        if (e.key !== 'Tab') return;

        const focusableArray = Array.from(focusableElements);
        const firstElement = focusableArray[0];
        const lastElement = focusableArray[focusableArray.length - 1];

        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [toggle]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && toggle) {
        setToggle(false);
        handleNavClick();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [toggle, handleNavClick]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (toggle) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [toggle]);

  // Update active section based on scroll position
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id.charAt(0).toUpperCase() + entry.target.id.slice(1));
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const navTransition = prefersReducedMotion.current
    ? { duration: 0 }
    : { duration: 0.2, ease: 'easeOut' };

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-2 fixed
      top-0 z-20 transition-all duration-300 ${
        scrolled
          ? 'bg-night/95 backdrop-blur-md border-b border-white/10 shadow-sm'
          : 'bg-night/85 backdrop-blur-sm border-b border-white/10'
      } min-h-16 sm:min-h-[72px]`}
      aria-label="Main navigation"
      role="navigation"
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md"
          onClick={handleNavClick}
          aria-label="Tanmay Vaidya - Home"
        >
          <span className="font-mova text-xl font-bold text-primary" aria-hidden="true">TV</span>

          <span className="font-beckman text-lg font-bold text-white-100 sm:text-xl">
            Tanmay Vaidya
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="list-none hidden sm:flex flex-row gap-10 mt-2" role="menubar">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              role="none"
              className="relative"
            >
              <a
                href={`#${nav.id}`}
                role="menuitem"
                className={`${
                  active === nav.title ? 'text-primary' : 'text-silver'
                } hover:text-white-100 text-sm font-medium font-mova
                  uppercase tracking-[1px] cursor-pointer nav-links relative
                  py-2 px-1 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded`}
                onClick={() => setActive(nav.title)}
              >
                {nav.title}
                {/* Active indicator */}
                {active === nav.title && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-primary rounded-full" aria-hidden="true" />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button - always visible, accessible */}
        <div className="sm:hidden flex items-center gap-2">
          <button
            ref={(el) => { if (el && !toggle) lastFocusedRef.current = el; }}
            onClick={() => setToggle(!toggle)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/15 bg-white/5 transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:hidden"
            aria-label={toggle ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={toggle}
            aria-controls="mobile-menu"
            aria-haspopup="true"
            type="button"
          >
            <img
              src={toggle ? close : menu}
              alt=""
              className="w-6 h-6 object-contain"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>

      {/* Mobile menu - slide in from right */}
      <AnimatePresence>
        {toggle && (
          <motion.div
            key="mobile-menu"
            id="mobile-menu"
            ref={menuRef}
            initial={{ x: '100%', opacity: 0.9 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0.9 }}
            transition={navTransition}
            className="fixed inset-y-0 right-0 z-50 h-dvh w-[min(86vw,24rem)] max-w-full border-l border-white/10 bg-night shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-label="Main navigation menu"
          >
            <div className="flex h-full flex-col p-6 pt-[max(1.5rem,env(safe-area-inset-top))]">
              <div className="mb-8 flex min-h-11 items-center justify-between border-b border-white/10 pb-4">
                <span className="font-beckman text-lg font-bold text-white-100">Menu</span>
                <button
                  type="button"
                  onClick={handleNavClick}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/15 bg-white/5 transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  aria-label="Close navigation menu"
                >
                  <img src={close} alt="" className="h-5 w-5 object-contain" aria-hidden="true" />
                </button>
              </div>
              <nav>
                <ul className="flex flex-col gap-2 text-lg font-medium" role="menu">
                  {navLinks.map((nav) => (
                    <li key={nav.id} role="none">
                      <a
                        href={`#${nav.id}`}
                        role="menuitem"
                        className={`flex min-h-12 items-center gap-4 rounded-lg px-4 py-3 transition-colors ${
                          active === nav.title
                            ? 'bg-white/10 text-primary'
                            : 'text-silver hover:bg-white/5 hover:text-white-100'
                        } focus:outline-none focus:ring-2 focus:ring-primary`}
                        onClick={() => {
                          handleNavClick();
                          setActive(nav.title);
                        }}
                      >
                        <span className="font-mova uppercase tracking-wider">{nav.title}</span>
                        {active === nav.title && (
                          <span className="ml-auto w-2 h-2 rounded-full bg-primary" aria-hidden="true" />
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="mt-auto border-t border-white/10 pt-6">
                <a
                  href="#contact"
                  className="flex min-h-12 items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 font-beckman font-bold text-eerieBlack transition-colors hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  onClick={handleNavClick}
                >
                  Get in Touch
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile menu backdrop */}
      <AnimatePresence>
        {toggle && (
          <motion.div
            key="mobile-menu-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={navTransition}
            className="fixed inset-0 bg-black/50 z-40 sm:hidden"
            aria-hidden="true"
            onClick={handleNavClick}
          />
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;