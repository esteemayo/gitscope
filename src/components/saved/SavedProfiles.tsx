'use client';

import { motion } from 'framer-motion';
import clsx from 'clsx';
import { ChevronDown, ChevronUp } from 'lucide-react';

import SavedProfileCard from './card/SavedProfileCard';
import { SavedProfilesProps } from '@/types/saved/saved.profiles.type';

import '../../styles/components/saved/SavedProfiles.scss';

const SavedProfiles = ({
  view,
  profiles,
  canExpand,
  isExpanded,
  hasReachedPinLimit,
  showLess,
  showMore,
  onToggle,
  onDelete,
}: SavedProfilesProps) => {
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
            onPin={onToggle}
            onDelete={onDelete}
            isPinDisabled={!profile.isPinned && hasReachedPinLimit}
          />
        ))}
      </motion.div>

      {canExpand && (
        <div className='saved-profiles__cta'>
          {isExpanded ? (
            <button
              type='button'
              onClick={showLess}
              className='saved-profiles__cta--btn'
            >
              <ChevronUp
                size={16}
                strokeWidth={1.8}
                role='img'
                aria-hidden='true'
                focusable='false'
              />

              <span>Show less</span>
            </button>
          ) : (
            <button
              type='button'
              onClick={showMore}
              className='saved-profiles__cta--btn'
            >
              <ChevronDown
                size={16}
                strokeWidth={1.8}
                role='img'
                aria-hidden='true'
                focusable='false'
              />

              <span>Show more profiles</span>
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default SavedProfiles;
