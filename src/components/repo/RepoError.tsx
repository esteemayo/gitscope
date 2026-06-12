'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { AlertTriangle } from 'lucide-react';

import '../../styles/components/repo/RepoError.scss';

const RepoError = ({ message }: { message?: string }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      transition={{ duration: 0.25 }}
      className='repo-error'
      role='alert'
      aria-labelledby='repo-error-title'
      aria-describedby='repo-error-description'
    >
      <div className='repo-error__container'>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.25 }}
          className='repo-error__icon'
        >
          <AlertTriangle size={48} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className='repo-error__content'
        >
          <h1 id='repo-error-title' className='repo-error__heading'>
            Unable to Load Repository
          </h1>

          <p id='repo-error-description' className='repo-error__description'>
            {message ??
              'Something went wrong while loading repository information.'}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className='repo-error__actions'
        >
          <button
            type='button'
            onClick={() => window.location.reload()}
            className='repo-error__actions--btn'
          >
            Try again
          </button>

          <Link href='/' className='repo-error__actions--link'>
            Go home
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default RepoError;
