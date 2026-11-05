import { motion } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn, textVariant, staggerContainer } from '../utils/motion';
import { SectionWrapper } from '../hoc';

// Enhanced service cards with better descriptions and impact focus
const ServiceCard = ({ index, title, description, highlights }) => {
  return (
    <motion.article
      variants={fadeIn('up', 'tween', index * 0.06, 0.35)}
      className="rounded-lg border border-white/10 bg-white/[0.03] p-5 sm:p-6"
    >
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 font-beckman text-lg font-bold text-primary" aria-hidden="true">
        {title.charAt(0)}
      </div>
      <h3 className="mb-3 font-beckman text-xl font-bold text-white-100">{title}</h3>
      <p className="mb-4 text-sm leading-6 text-silver">{description}</p>
      <ul className="space-y-2 border-t border-white/10 pt-4" aria-label={`${title} highlights`}>
        {highlights.map((highlight) => (
          <li key={highlight} className="flex items-start gap-2 text-sm leading-6 text-silver">
            <span className="mt-0.5 text-primary" aria-hidden="true">›</span>
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
};

const services = [
  {
    title: 'Site IT Operations',
    description: 'Maintaining site infrastructure and equipment while supporting reliable IT services and applications.',
    highlights: [
      'Infrastructure and equipment performance',
      'Incident response and application support',
      'Preventive maintenance and documentation',
    ],
  },
  {
    title: 'IT Controls & Security',
    description: 'Supporting secure, reliable systems through infrastructure upgrades, security assessments, and IT controls.',
    highlights: [
      'Security assessment and risk mitigation',
      'System administration and access controls',
      'Standard operating procedures',
    ],
  },
  {
    title: 'Robotics & Sensor Systems',
    description: 'Connecting software and physical systems through sensor drivers, serial communications, and robotics integration.',
    highlights: [
      'Python sensor driver at 10 Hz',
      'JSON data handling',
      'Spot robot software integration',
    ],
  },
  {
    title: 'Software & Automation',
    description: 'Building useful tools for operations, data processing, and mobile workflows across work terms and capstone projects.',
    highlights: [
      'Python, C#, C++, and .NET',
      'ASP.NET, SQL, and Windows services',
      'Dart, Flutter, and React Native',
    ],
  },
];

const About = () => {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-10 sm:py-14">
      <div className={`${styles.innerWidth} mx-auto`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubTextLight} id="about-heading">Background</p>
          <h2 className={styles.sectionHeadTextLight}>Overview</h2>
        </motion.div>

        <motion.p
          variants={fadeIn('up', 'spring', 0.1, 0.6)}
          className="mt-5 max-w-3xl text-base leading-7 text-silver sm:text-lg sm:leading-8"
        >
          As a Computer Engineering graduate from Memorial University of Newfoundland, I bring six co-op terms and 2.5+ years of continuous, hands-on experience across site IT operations, cybersecurity and controls, robotics, and software development.
        </motion.p>

        <motion.div
          variants={staggerContainer}
          className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </motion.div>

        {/* Education & Certifications */}
        <motion.div
          variants={fadeIn('up', 'spring', 0.2, 0.8)}
          className="mt-12 border-t border-white/10 pt-8"
        >
          <h3 className="text-white-100 font-bold font-beckman text-[24px] mb-6">Education</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-5 sm:p-6 bg-jetLight rounded-lg border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold font-beckman text-white-100">B.Eng. Computer Engineering</h4>
                  <p className="text-taupe text-sm">Memorial University of Newfoundland</p>
                </div>
              </div>
              <p className="text-silver text-sm">September 2019 - April 2025 · St. John&apos;s, Newfoundland and Labrador</p>
            </div>
            <div className="p-5 sm:p-6 bg-jetLight rounded-lg border border-white/10">
              <h4 className="font-bold font-beckman text-white-100">Selected coursework</h4>
              <p className="mt-3 text-silver text-sm leading-6">
                Data structures, algorithms, operating systems, computer security, microprocessors, software development practices, mobile development, and data visualization.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionWrapper(About, 'about');