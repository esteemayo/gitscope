'use client';

import { motion } from 'framer-motion';
import { containerVariants } from '@/animations/page';

const TermsUserContent = () => {
  return (
    <motion.section
      id='user-content'
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      className='terms-user-content'
      aria-labelledby='terms-user-content-title'
    >
      <div className='terms-user-content__container'>TermsUserContent</div>
    </motion.section>
  );
};

export default TermsUserContent;
