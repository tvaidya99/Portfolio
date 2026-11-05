import { motion } from 'framer-motion';
import { styles } from '../styles';
import { staggerContainer } from '../utils/motion';

const SectionWrapper = (Component, idName) => {
  function HOC() {
    return (
      <motion.section
        id={idName}
        variants={staggerContainer(0.05, 0.03)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className={`${styles.padding} relative z-0 mx-auto w-full max-w-7xl scroll-mt-20`}>
        <Component />
      </motion.section>
    );
  }

  return HOC;
};

export default SectionWrapper;
