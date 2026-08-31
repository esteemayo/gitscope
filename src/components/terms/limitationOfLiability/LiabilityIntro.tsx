'use client';

import { motion } from 'framer-motion';
import '../../../styles/components/terms/limitationOfLiability/LiabilityIntro.scss';

const LiabilityIntro = ({ intro }: { intro: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className='liability-intro'
    >
      <span className='liability-intro__label'>Legal responsibility</span>

      <p className='liability-intro__description'>{intro}</p>
    </motion.div>
  );
};

export default LiabilityIntro;
