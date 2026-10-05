'use client';

import { Pin } from 'lucide-react';

import SavedProfileCard from './SavedProfileCard';
import { savedProfiles } from '@/data/saved/saved-profiles.data';

import '../../styles/components/saved/PinnedProfiles.scss';

const PinnedProfiles = () => {
  const pinnedProfiles = savedProfiles.filter((profile) => profile.isPinned);

  return (
    <section className='pinned-profiles'>
      <div className='pinned-profiles__header'>
        <div className='pinned-profiles__heading'>
          <div className='pinned-profiles__title'>
            <Pin
              size={15}
              strokeWidth={1.8}
              role='img'
              aria-hidden='true'
              focusable='false'
            />

            <h2>Pinned profiles</h2>
          </div>

          <p className='pinned-profiles__heading--description'>
            Profiles you want to keep close
          </p>
        </div>

        <span className='pinned-profiles__count'>{pinnedProfiles.length}</span>
      </div>

      {pinnedProfiles.length > 0 ? (
        <div className='pinned-profiles__grid'>
          {pinnedProfiles.slice(0, 4).map((profile) => (
            <SavedProfileCard
              key={profile.id}
              profile={profile}
              variant='pinned'
              draggable
            />
          ))}
        </div>
      ) : (
        <div className='pinned-profiles__empty'>
          <Pin
            size={17}
            strokeWidth={1.8}
            role='img'
            aria-hidden='true'
            focusable='false'
          />

          <span className='pinned-profiles__empty--description'>
            Pin profiles to keep them at the top of your collection.
          </span>
        </div>
      )}
    </section>
  );
};

export default PinnedProfiles;
