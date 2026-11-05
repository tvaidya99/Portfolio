import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { projects } from '../constants';
import { fadeIn, textVariant, staggerContainer } from '../utils/motion';

const ProjectGlyph = ({ type }) => {
  const marks = {
    tracking: (
      <>
        <rect x="28" y="18" width="264" height="104" rx="8" fill="#1b2223" stroke="#414b4c" />
        <path d="M40 43h240M40 54h240M40 102h240" stroke="#343d3e" />
        <path d="M74 44v58M158 44v58M244 44v58" stroke="#343d3e" strokeDasharray="4 5" />
        <rect x="54" y="69" width="40" height="28" rx="3" fill="#384344" stroke="#657273" />
        <rect x="138" y="59" width="40" height="38" rx="3" fill="#384344" stroke="#657273" />
        <rect x="222" y="75" width="40" height="22" rx="3" fill="#384344" stroke="#657273" />
        <circle cx="158" cy="78" r="5" fill="#f5cf36" />
        <path className="wifi-wave wifi-wave--outer" d="M143 69q15-16 30 0" fill="none" stroke="#f5cf36" strokeWidth="2" strokeLinecap="round" />
        <path className="wifi-wave wifi-wave--inner" d="M149 74q9-9 18 0" fill="none" stroke="#f5cf36" strokeWidth="2" strokeLinecap="round" />
        <path className="wifi-wave wifi-wave--core" d="M155 78q3-3 6 0" fill="none" stroke="#f5cf36" strokeWidth="2" strokeLinecap="round" />
        <circle className="wifi-node" cx="158" cy="82" r="3" fill="#f5cf36" />
      </>
    ),
    flight: (
      <>
        <rect x="28" y="18" width="264" height="104" rx="8" fill="#1b2223" stroke="#414b4c" />
        <path d="M44 40h104M44 48h68" stroke="#657273" strokeWidth="3" strokeLinecap="round" />
        <path d="M48 99h220M48 84h220M48 69h220" stroke="#343d3e" />
        <path d="m54 91 42-11 38 6 43-25 43 12 38-25" fill="none" stroke="#f5cf36" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="258" cy="48" r="4" fill="#f5cf36" />
        <path className="flight-plane" d="M211 30c4 0 6 6 7 11l7 25 25 10v6l-26-6 1 17 8 6v4l-17-4-17 4v-4l8-6 1-17-26 6v-6l25-10 7-25c1-5 3-11 7-11z" fill="#d4d4d8" />
      </>
    ),
    logging: (
      <>
        <rect x="94" y="14" width="132" height="112" rx="9" fill="#1b2223" stroke="#657273" strokeWidth="2" />
        <rect x="109" y="26" width="102" height="16" rx="3" fill="#2a3334" />
        <path d="M118 33h55" stroke="#f5cf36" strokeWidth="3" strokeLinecap="round" />
        <path d="M112 57h18M145 57h54M112 72h18M145 72h54M112 87h18M145 87h54M112 102h18M145 102h54" stroke="#7f8a8b" strokeWidth="3" strokeLinecap="round" />
        <circle cx="122" cy="57" r="5" fill="#f5cf36" />
        <circle cx="122" cy="72" r="5" fill="#b8c5c6" />
        <circle cx="122" cy="87" r="5" fill="#b8c5c6" />
        <circle cx="122" cy="102" r="5" fill="#b8c5c6" />
      </>
    ),
    web: (
      <>
        <rect x="25" y="20" width="270" height="100" rx="8" fill="#1b2223" stroke="#657273" strokeWidth="2" />
        <path d="M26 42h268" stroke="#657273" />
        <circle cx="39" cy="31" r="3" fill="#f5cf36" />
        <circle cx="50" cy="31" r="3" fill="#879394" />
        <circle cx="61" cy="31" r="3" fill="#879394" />
        <path d="M42 56h236M42 70h236M42 84h236M42 98h236M99 56v56M180 56v56M237 56v56" stroke="#414b4c" />
        <path d="M50 63h30M108 63h52M188 63h36M245 63h22M50 77h22M108 77h42M188 77h26M245 77h30M50 91h34M108 91h54M188 91h33M245 91h21M50 105h25M108 105h37M188 105h28M245 105h34" stroke="#b8c5c6" strokeWidth="2" strokeLinecap="round" />
      </>
    ),
    barcode: (
      <>
        <path d="M96 23a10 10 0 0 1 10-10h108a10 10 0 0 1 10 10v42a10 10 0 0 1-10 10h-38l-7 38h-30l-5-38h-28a10 10 0 0 1-10-10z" fill="#2a3334" stroke="#657273" strokeWidth="2" />
        <rect x="111" y="27" width="98" height="34" rx="3" fill="#dfe7df" />
        <path d="M122 34v19M127 34v19M135 34v19M141 34v19M151 34v19M157 34v19M168 34v19M173 34v19M184 34v19M193 34v19" stroke="#1b2223" strokeWidth="3" />
        <path className="barcode-beam" d="M108 70h96" stroke="#f5cf36" strokeWidth="2" strokeLinecap="round" />
        <path className="barcode-beam-glow" d="M108 70h28" stroke="#fff0a5" strokeWidth="4" strokeLinecap="round" />
        <rect x="139" y="88" width="28" height="9" rx="4.5" fill="#414b4c" />
        <circle cx="154" cy="117" r="3" fill="#f5cf36" />
      </>
    ),
  };

  return (
    <div className="flex aspect-[16/7] items-center justify-center overflow-hidden border-b border-white/10 bg-jet" aria-hidden="true">
      <svg className="h-full w-full transition-transform duration-300 group-hover:scale-[1.02]" viewBox="0 0 320 140" fill="none" aria-hidden="true">
        {marks[type]}
      </svg>
    </div>
  );
};

const ProjectCard = ({ name, description, icon, tags, type, date, index }) => {
  return (
    <motion.article
      variants={fadeIn('up', 'tween', index * 0.04, 0.35)}
      className="group overflow-hidden rounded-lg border border-white/10 bg-white/[0.03] transition-colors duration-200 hover:border-primary/40"
    >
      <ProjectGlyph type={icon} />

      {/* Content */}
      <div className="p-6 space-y-4">
        <div className="flex flex-wrap items-center gap-3 text-xs">
          {type && (
            <span className="font-medium uppercase tracking-wider text-primary">
              {type}
            </span>
          )}
          {date && (
            <time className="text-taupe" dateTime={date}>
              {date}
            </time>
          )}
        </div>

        <h3 className="font-bold sm:text-2xl text-xl text-white-100 font-beckman line-clamp-2 group-hover:text-primary transition-colors">
          {name}
        </h3>

        <p className="text-silver text-[14px] leading-relaxed line-clamp-3">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 pt-2" role="list" aria-label="Technologies used">
          {tags && tags.map((tag) => (
            <span
              key={tag}
              role="listitem"
              className="inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-medium bg-white/5 text-silver border border-white/10"
            >
              {tag}
            </span>
          ))}
        </div>

      </div>
    </motion.article>
  );
};

const Projects = () => (
  <section id="projects" aria-labelledby="projects-heading" className="py-10 sm:py-14">
    <div className={`${styles.innerWidth} mx-auto`}>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight} id="projects-heading">Selected work</p>
        <h2 className={styles.sectionHeadTextLight}>Projects</h2>
      </motion.div>
      <p className="mt-4 max-w-3xl text-sm leading-6 text-silver sm:text-base">
        A selection of software, automation, and systems projects from my capstone and co-op work terms.
      </p>

      <motion.div
        variants={staggerContainer(0.06, 0.06)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="mx-auto mt-8 grid w-full gap-4 sm:grid-cols-2 xl:grid-cols-3"
        role="list"
        aria-label="Project portfolio"
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            index={index}
            {...project}
          />
        ))}
      </motion.div>
    </div>
  </section>
);

export default SectionWrapper(Projects, 'projects');