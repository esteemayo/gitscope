'use client';

import { motion } from 'framer-motion';
import { containerVariants } from '@/animations/page';

import '../../../styles/components/terms/privacyData/TermsPrivacyData.scss';

const TermsPrivacyData = () => {
  return (
    <motion.section
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      className='terms-privacy-data '
      aria-labelledby='terms-privacy-data-title'
    >
      <div className='terms-privacy-data__container '>TermsPrivacyData</div>
    </motion.section>
  );
};

export default TermsPrivacyData;
