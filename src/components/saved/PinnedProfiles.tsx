'use client';

import { Pin } from 'lucide-react';
import SavedProfileCard from './SavedProfileCard';

import '../../styles/components/saved/PinnedProfiles.scss';

const PinnedProfiles = () => {
  const pinnedProfiles = [
    {
      id: 'esteemayo',
      name: 'Emmanuel Adebayo',
    },
  ];

  return (
    <section className='pinned-profiles'>
      <div className='pinned-profiles__heading'>
        <div className='pinned-profiles__title'>
          <Pin
            size={15}
            strokeWidth={1.8}
            role='img'
            aria-hidden='true'
            focusable='false'
          />

          <h2>Pinned</h2>
        </div>

        <span className='pinned-profiles__count'>{pinnedProfiles.length}</span>

        <div className='pinned-profiles__grid'>
          {pinnedProfiles.map((profile) => (
            <SavedProfileCard key={profile.id} {...profile} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PinnedProfiles;
