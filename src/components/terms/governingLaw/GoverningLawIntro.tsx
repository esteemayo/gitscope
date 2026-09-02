'use client';

import { motion } from 'framer-motion';
import '../../../styles/components/terms/governingLaw/GoverningLawIntro.scss';

const GoverningLawIntro = ({ intro }: { intro: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className='governing-law-intro'
    >
      <span className='governing-law-intro__label'>Legal jurisdiction</span>

      <p className='governing-law-intro__paragraph'>{intro}</p>
    </motion.div>
  );
};

export default GoverningLawIntro;
