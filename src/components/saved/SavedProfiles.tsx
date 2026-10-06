'use client';

import SavedProfileCard from './SavedProfileCard';
import { SavedProfilesProps } from '@/types/saved/saved.profiles.type';

import '../../styles/components/saved/SavedProfiles.scss';

const SavedProfiles = ({ profiles }: SavedProfilesProps) => {
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
      <div className='saved-profiles__grid'>
        {profiles.map((profile) => (
          <SavedProfileCard key={profile.id} profile={profile} draggable />
        ))}
      </div>
    </div>
  );
};

export default SavedProfiles;
