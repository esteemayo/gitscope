'use client';

import { motion } from 'framer-motion';
import '../../../styles/components/terms/aboutTeam/AboutTeamIntro.scss';

const AboutTeamIntro = ({ intro }: { intro: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className='about-team-intro'
    >
      <span className='about-team-intro__label'>Who we are</span>

      <p className='about-team-intro__paragraph'>{intro}</p>
    </motion.div>
  );
};

export default AboutTeamIntro;
