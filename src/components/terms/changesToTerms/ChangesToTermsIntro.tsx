'use client';

import { motion } from 'framer-motion';
import '../../../styles/components/terms/changesToTerms/ChangesToTermsIntro.scss';

const ChangesToTermsIntro = ({ intro }: { intro: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className='changes-to-terms-intro'
    >
      <span className='changes-to-terms-intro__label'>Living document</span>

      <p className='changes-to-terms-intro__paragraph'>{intro}</p>
    </motion.div>
  );
};

export default ChangesToTermsIntro;
