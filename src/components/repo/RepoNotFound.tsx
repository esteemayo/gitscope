'use client';

import { SearchX } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

import '../../styles/components/repo/RepoNotFound.scss';

const RepoNotFound = ({ repositoryName }: { repositoryName?: string }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      transition={{ duration: 0.25 }}
      className='repo-not-found'
      role='alert'
      aria-labelledby='repository-not-found-title'
      aria-describedby='repository-not-found-description'
    >
      <div className='repo-not-found__container'>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.25 }}
          className='repo-not-found__icon'
        >
          <SearchX size={48} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className='repo-not-found__content'
        >
          <h1
            id='repository-not-found-title'
            className='repo-not-found__heading'
          >
            Repository not found
          </h1>

          <p
            id='repository-not-found-description'
            className='repo-not-found__description'
          >
            {repositoryName
              ? `"${repositoryName}" could not be found or may no longer be available.`
              : 'The requested repository could not be found.'}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className='repo-not-found__actions'
        >
          <Link href='/' className='repo-not-found__back-link'>
            Go home
          </Link>

          <Link href='/compare' className='repo-not-found__compare-link'>
            Compare profiles
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default RepoNotFound;
