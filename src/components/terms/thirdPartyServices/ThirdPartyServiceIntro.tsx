'use client';

import { motion } from 'framer-motion';
import '../../../styles/components/terms/thirdPartyServices/ThirdPartyServiceIntro.scss';

const ThirdPartyServiceIntro = ({ intro }: { intro: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className='third-party-service-intro'
    >
      <span className='third-party-service-intro__label'>
        External integrations
      </span>

      <p className='third-party-service-intro__description'>{intro}</p>
    </motion.div>
  );
};

export default ThirdPartyServiceIntro;
