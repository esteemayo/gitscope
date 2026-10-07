'use client';

import clsx from 'clsx';
import { AnimatePresence, motion, Variants } from 'framer-motion';

import SavedProfileCard from './SavedProfileCard';
import { SavedProfilesProps } from '@/types/saved/saved.profiles.type';

import '../../styles/components/saved/SavedProfiles.scss';

const variants: Variants = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
    },
  },
};

const SavedProfiles = ({ view, profiles }: SavedProfilesProps) => {
  if (profiles.length === 0) {
    return (
      <div className='saved-profiles__empty'>
        <span className='saved-profiles__empty--description'>
          No saved profile found.
        </span>
      </div>
    );
  }

  return (
    <motion.div layout className='saved-profiles'>
      <AnimatePresence mode='popLayout'>
        <motion.div
          layout
          variants={variants}
          initial='initial'
          animate='animate'
          exit='initial'
          className={clsx('saved-profiles__grid', {
            'saved-profiles__list': view === 'list',
          })}
        >
          {profiles.map((profile) => (
            <SavedProfileCard
              key={profile.id}
              view={view}
              profile={profile}
              draggable
            />
          ))}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default SavedProfiles;
