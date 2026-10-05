'use client';

import SavedProfileCard from './SavedProfileCard';
import { savedProfiles } from '@/data/saved/saved-profiles.data';

import '../../styles/components/saved/SavedProfiles.scss';

const SavedProfiles = () => {
  if (savedProfiles.length === 0) {
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
      <div className='saved-profiles__grid'>
        {savedProfiles.map((profile) => (
          <SavedProfileCard key={profile.id} profile={profile} draggable />
        ))}
      </div>
    </div>
  );
};

export default SavedProfiles;
