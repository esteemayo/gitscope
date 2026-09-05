'use client';

import { motion } from 'framer-motion';
import '../../../styles/components/terms/githubAuth/GithubAuthIntro.scss';

const GithubAuthIntro = ({ intro }: { intro: string }) => {
  return (
    <motion.div
      className='github-auth-intro'
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className='github-auth-intro__label'>Authentication</span>

      <p className='github-auth-intro__description'>{intro}</p>
    </motion.div>
  );
};

export default GithubAuthIntro;
