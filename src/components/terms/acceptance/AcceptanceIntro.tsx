'use client';

import { motion } from 'framer-motion';
import '../../../styles/components/terms/acceptance/AcceptanceIntro.scss';

const AcceptanceIntro = ({ intro }: { intro: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className='acceptance-intro'
    >
      <span className='acceptance-intro__label'>Agreement</span>

      <p className='acceptance-intro__paragraph'>{intro}</p>
    </motion.div>
  );
};

export default AcceptanceIntro;
