'use client';

import { motion } from 'framer-motion';
import '../../../styles/components/terms/acceptableUse/AcceptableUseIntro.scss';

const AcceptableUseIntro = ({ intro }: { intro: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className='acceptable-use-intro'
    >
      <span className='acceptable-use-intro__label'>Usage guidelines</span>

      <p className='acceptable-use-intro__paragraph'>{intro}</p>
    </motion.div>
  );
};

export default AcceptableUseIntro;
