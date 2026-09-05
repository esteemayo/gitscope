'use client';

import '../../../styles/components/terms/aboutTeam/TeamClosing.scss';
import { motion } from 'framer-motion';

const TeamClosing = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className='team-closing'
    >
      <span className='team-closing__line' />

      <p className='team-closing__paragraph'>
        Clear terms for a better developer experience.
      </p>

      <span className='team-closing__line' />
    </motion.div>
  );
};

export default TeamClosing;
