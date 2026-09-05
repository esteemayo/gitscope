'use client';

import { motion } from 'framer-motion';
import '../../../styles/components/terms/eligibility/EligibilityIntro.scss';

const EligibilityIntro = ({ intro }: { intro: string }) => {
  return (
    <motion.div
      className='eligibility-intro'
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className='eligibility-intro__label'>Eligibility</span>

      <p className='eligibility-intro__description'>{intro}</p>
    </motion.div>
  );
};

export default EligibilityIntro;
