'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import SavedProfileCard from './SavedProfileCard';
import { SavedProfilesProps } from '@/types/saved/saved.profiles.type';

import '../../styles/components/saved/SavedProfiles.scss';

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
    <div className='saved-profiles'>
      <motion.div
        layout
        transition={{
          layout: {
            duration: 0.3,
            ease: [0.22, 1, 0.36, 1],
          },
        }}
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
    </div>
  );
};

export default SavedProfiles;
