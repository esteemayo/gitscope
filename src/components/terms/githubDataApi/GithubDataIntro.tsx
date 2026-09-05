'use client';

import { motion } from 'framer-motion';
import '../../../styles/components/terms/githubDataApi/GithubDataIntro.scss';

const GithubDataIntro = ({ intro }: { intro: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className='github-data-intro'
    >
      <span className='github-data-intro__label'>Data & API processing</span>

      <p className='github-data-intro__paragraph'>{intro}</p>
    </motion.div>
  );
};

export default GithubDataIntro;
