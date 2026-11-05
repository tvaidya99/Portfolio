import { motion } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn, textVariant, staggerContainer } from '../utils/motion';

const Hero = () => {
  return (
    <section
      className="relative isolate flex min-h-[100svh] w-full flex-col overflow-hidden bg-[#121a22]"
      aria-labelledby="hero-heading"
      id="hero"
    >
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#101820] via-night/90 to-[#24333d]" aria-hidden="true" />
      <div className="hero-map pointer-events-none absolute inset-y-0 right-0 hidden w-[78%] md:block" aria-hidden="true">
        <img
          src="/world-map.webp"
          alt=""
          className="h-full w-full object-contain object-right"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />

      {/* Main content */}
      <div className="relative z-10 mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 items-center gap-8 px-6 pb-12 pt-28 sm:px-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(300px,0.85fr)] lg:gap-10 lg:px-12 lg:pb-10 lg:pt-32">
        {/* Text content */}
        <div className="mx-auto w-full max-w-2xl lg:mx-0">
          <div className="text-center lg:text-left">
            <motion.h1
              id="hero-heading"
              variants={textVariant()}
              className={`${styles.heroHeadText} mb-4 text-center lg:text-left`}
            >
              Computer Engineer, EIT
            </motion.h1>
            <motion.p
              variants={fadeIn('up', 'spring', 0.2, 0.8)}
              className={`${styles.heroSubText} mx-auto mt-4 max-w-2xl text-center leading-relaxed lg:mx-0 lg:text-left`}
            >
              Memorial University graduate with six co-op terms and 2.5+ years of continuous, hands-on experience across site IT operations, cybersecurity & controls, robotics (Boston Dynamics Spot), and full-stack software development (Python, C#, .NET, React, React Native).
            </motion.p>
          </div>

          {/* CTA Buttons */}
          <motion.div variants={fadeIn('up', 'spring', 0.3, 0.8)} className="mt-8 flex flex-wrap justify-center gap-4 lg:mt-10 lg:justify-start">
            <a
              href="#projects"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-medium uppercase tracking-wider text-white-100 transition-colors hover:bg-white-100 hover:text-eerieBlack focus:outline-none focus:ring-2 focus:ring-white/70 focus:ring-offset-2 focus:ring-offset-night"
              aria-label="View my projects and case studies"
            >
              View Projects
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-primary/50 bg-transparent px-6 py-3 text-sm font-medium uppercase tracking-wider text-primary transition-colors hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-night"
              aria-label="Get in touch with Tanmay"
            >
              Contact Me
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={staggerContainer}
            className="mx-auto mt-10 w-full max-w-xl lg:mx-0 lg:mt-12"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="grid grid-cols-3 gap-3 text-center sm:gap-4" role="list" aria-label="Key statistics">
              <div className="rounded-lg border border-white/15 bg-white/5 p-3 sm:p-4" role="listitem">
                <p className="font-mova text-2xl font-bold text-primary sm:text-3xl">2.5+</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-timberWolf sm:text-sm">Years Experience</p>
              </div>
              <div className="rounded-lg border border-white/15 bg-white/5 p-3 sm:p-4" role="listitem">
                <p className="font-mova text-2xl font-bold text-primary sm:text-3xl">6</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-timberWolf sm:text-sm">Co-op Terms</p>
              </div>
              <div className="rounded-lg border border-white/15 bg-white/5 p-3 sm:p-4" role="listitem">
                <p className="font-mova text-2xl font-bold text-primary sm:text-3xl">B.Eng.</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-timberWolf sm:text-sm">Computer Engineering</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Portrait */}
        <div className="hero-portrait-stage relative flex items-center justify-center lg:justify-end">
          <span className="hero-portrait-index" aria-hidden="true">PROFILE <span>01</span></span>
          <motion.img
            src="/tanmay-portrait.webp"
            alt="Illustrated portrait of Tanmay Vaidya, Computer Engineer"
            className="hero-portrait relative z-10 h-auto max-h-[42svh] w-full max-w-[240px] rounded-lg border border-white/10 object-contain sm:max-h-[56svh] sm:max-w-[320px] lg:max-h-[72svh] lg:max-w-[440px]"
            loading="eager"
            fetchPriority="high"
            width="440"
            height="560"
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-taupe text-xs uppercase tracking-wider hidden lg:flex"
        aria-hidden="true"
      >
        <span>Scroll to explore</span>
        <svg className="w-5 h-5 animate-bounce" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;