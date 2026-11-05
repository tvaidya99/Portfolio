import { motion } from 'framer-motion';
import { skillGroups } from '../constants';
import { styles } from '../styles';
import { fadeIn, staggerContainer, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const Tech = () => (
  <section id="skills" aria-labelledby="skills-heading" className="py-10 sm:py-14">
    <div className={`${styles.innerWidth} mx-auto`}>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight} id="skills-heading">Tools & experience</p>
        <h2 className={styles.sectionHeadTextLight}>Skills</h2>
      </motion.div>

      <motion.div
        variants={staggerContainer(0.08, 0.08)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="mt-10 grid gap-4 md:grid-cols-2"
        role="list"
        aria-label="Technical skills grouped by category"
      >
        {skillGroups.map((group, index) => (
          <motion.section
            key={group.name}
            variants={fadeIn('up', 'tween', index * 0.06, 0.35)}
            className="rounded-lg border border-white/10 bg-white/[0.03] p-5 sm:p-6"
            role="listitem"
          >
            <h3 className="font-beckman text-lg font-bold text-white-100">{group.name}</h3>
            <ul className="mt-4 flex flex-wrap gap-2" role="list" aria-label={`${group.name} skills`}>
              {group.items.map((skill) => (
                <li
                  key={skill}
                  role="listitem"
                  className="rounded border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-silver"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </motion.section>
        ))}
      </motion.div>
    </div>
  </section>
);

export default SectionWrapper(Tech, 'skills');