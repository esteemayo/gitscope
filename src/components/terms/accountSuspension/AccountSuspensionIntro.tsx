'use client';

import { motion } from 'framer-motion';
import '../../../styles/components/terms/accountSuspension/AccountSuspensionIntro.scss';

const AccountSuspensionIntro = ({ intro }: { intro: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className='account-suspension-intro'
    >
      <span className='account-suspension-intro--label'>
        Account enforcement
      </span>

      <p className='account-suspension-intro--description'>{intro}</p>
    </motion.div>
  );
};

export default AccountSuspensionIntro;
