'use client';

import { motion } from 'framer-motion';
import { containerVariants } from '@/animations/page';

import '../../../styles/components/terms/accountSuspension/AccountSuspension.scss';

const AccountSuspension = () => {
  return (
    <motion.section
      id='account-suspension'
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      className='account-suspension'
      aria-labelledby='account-suspension-title'
    >
      <div className='account-suspension__container'>AccountSuspension</div>
    </motion.section>
  );
};

export default AccountSuspension;
