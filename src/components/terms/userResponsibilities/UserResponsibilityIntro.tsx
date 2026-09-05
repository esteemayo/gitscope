'use client';

import { motion } from 'framer-motion';
import '../../../styles/components/terms/userResponsibilities/UserResponsibilityIntro.scss';

const UserResponsibilityIntro = ({ intro }: { intro: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className='user-responsibility-intro'
    >
      <span className='user-responsibility-intro__label'>Responsible use</span>

      <p className='user-responsibility-intro__paragraph'>{intro}</p>
    </motion.div>
  );
};

export default UserResponsibilityIntro;
