import { motion } from 'framer-motion';
import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant, fadeIn } from '../utils/motion';

const ExperienceCard = ({ experience, index }) => (
  <motion.li
    variants={fadeIn('up', 'tween', index * 0.04, 0.35)}
    className="relative border-l border-white/15 pb-8 pl-6 last:border-transparent last:pb-0 sm:pl-8"
  >
    <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-night" aria-hidden="true" />
    <article className="rounded-lg border border-white/10 bg-white/[0.03] p-5 sm:p-6">
      <div className="flex items-start gap-4">
        <div
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-black/5 font-beckman font-bold"
          style={{ backgroundColor: experience.markBg, color: experience.markColor }}
          aria-hidden="true"
        >
          {experience.logo ? (
            <img
              src={experience.logo}
              alt={`${experience.company_name} logo`}
              className="max-h-8 max-w-10 object-contain"
              loading="lazy"
              decoding="async"
            />
          ) : (
            <span className={experience.mark.length > 1 ? 'text-[9px] tracking-wide' : 'text-xl'}>{experience.mark}</span>
          )}
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">{experience.type} · {experience.date}</p>
          <h3 className="mt-1 font-beckman text-lg font-bold leading-snug text-white-100 sm:text-xl">{experience.title}</h3>
          <p className="mt-1 text-sm font-medium text-silver">{experience.company_name}</p>
        </div>
      </div>
      <p className="mt-4 text-sm leading-6 text-silver">{experience.summary}</p>
      <ul className="mt-4 flex flex-wrap gap-2" aria-label="Skills used">
        {experience.skills.map((skill) => (
          <li key={skill} className="rounded border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-taupe">{skill}</li>
        ))}
      </ul>
    </article>
  </motion.li>
);

const Experience = () => (
  <section id="experience" aria-labelledby="experience-heading" className="py-10 sm:py-14">
    <div className={`${styles.innerWidth} mx-auto`}>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight} id="experience-heading">
          My Professional Journey
        </p>
        <h2 className={styles.sectionHeadTextLight}>
          Work Experience
        </h2>
      </motion.div>

      <motion.div
        variants={fadeIn('up', 'spring', 0.1, 0.6)}
        className="mt-5 max-w-3xl text-sm leading-6 text-silver sm:text-base"
      >
        Six co-op terms across industry and campus roles, followed by a full-time position in site IT operations.
      </motion.div>

      <motion.ol
        variants={fadeIn('up', 'tween', 0.15, 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="mt-8"
        aria-label="Work experience timeline"
      >
        {experiences.map((experience, index) => (
          <ExperienceCard key={`${experience.company_name}-${experience.title}-${experience.date}`} experience={experience} index={index} />
        ))}
      </motion.ol>

      <a
        href="/TanmayResume.pdf"
        download
        className="mt-8 inline-flex min-h-11 items-center gap-2 rounded border border-primary/50 px-4 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-eerieBlack focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        Download résumé (PDF)
        <span aria-hidden="true">↓</span>
      </a>
    </div>
  </section>
);

export default SectionWrapper(Experience, 'experience');