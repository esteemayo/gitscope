'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import SavedCard from '../ui/SavedCard';
import EmptyState from '../ui/EmptyState';

import { SavedUserType } from '@/types';
import { getSavedUsers } from '@/lib/storage';

import '../../styles/components/SavedUsers.scss';

const variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const SavedUsers = () => {
  const [users, setUsers] = useState<SavedUserType[]>([]);

  const load = () => {
    const frame = requestAnimationFrame(() => {
      setUsers(() => getSavedUsers());
    });

    return () => cancelAnimationFrame(frame);
  };

  useEffect(() => {
    load();

    window.addEventListener('saved:updated', load);
    return () => window.removeEventListener('saved:updated', load);
  }, []);

  return (
    <motion.div
      variants={variants}
      initial='initial'
      animate='animate'
      exit='initial'
      className='saved-users'
    >
      <div className='saved-users__container'>
        <header className='saved-users__header'>
          <h2 className='saved-users__heading'>Saved profiles</h2>
        </header>

        {users.length === 0 ? (
          <EmptyState
            title='No saved profiles.'
            subtitle='You have not saved any profile yet.'
          />
        ) : (
          <div className='saved-users__grid'>
            {users?.map((user) => (
              <SavedCard key={user.username} {...user} />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default SavedUsers;
