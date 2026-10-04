'use client';

import { Pin } from 'lucide-react';
import SavedProfileCard from './SavedProfileCard';

import '../../styles/components/saved/PinnedProfiles.scss';

const PinnedProfiles = () => {
  const pinnedProfiles = [
    {
      id: 'esteemayo',
      login: 'esteemayo',
      name: 'Emmanuel Adebayo',
      avatarUrl: '/avatar-2.jpg',
      bio: 'Full Stack Software Engineer | React Next.js | TypeScript | Node.js | Express.js | Building GitScope, a GitHub Analytics Platform | UI Engineering',
      location: 'Lagos, Nigeria',
      repositories: 300,
      stars: 2000,
      followers: 500,
      lastViewed: 'Last week',
      accentColor: '#22C55E',
    },
    {
      id: 'devayo',
      login: 'devayo',
      name: 'Emmanuel Ayodeji Adebayo',
      avatarUrl: '/avatar-1.jpg',
      bio: 'Frontend Software Engineer | React | Next.js | TypeScript | Building GitScope, a GitHub Analytics Platform | UI Engineering | Accessibility',
      location: 'Toronto, Canada',
      repositories: 250,
      stars: 3000,
      followers: 1000,
      lastViewed: 'Last month',
      accentColor: '#8B5CF6',
    },
    {
      id: 'jdoe',
      login: 'jdoe',
      name: 'John Doe',
      avatarUrl: '/avatar-2.jpg',
      bio: 'Backend Developer | Node.js | Express | TypeScript | MongoDB',
      location: 'Barcelona, Spain',
      repositories: 2500,
      stars: 6000,
      followers: 15000,
      lastViewed: 'Yesterday',
      accentColor: '#06B6D4',
    },
    {
      id: 'mdoe',
      login: 'mdoe',
      name: 'Mary Doe',
      avatarUrl: '/avatar-2.jpg',
      bio: 'Frontend Engineer | Vue.js | Angular | React.js | TypeScript | Accessibility | Performance Optimization | Building Veyra, an authenticity platform for your gadgets and other electronic devices',
      location: 'Barcelona, Spain',
      repositories: 3000,
      stars: 9000,
      followers: 20000,
      lastViewed: 'Yesterday',
      accentColor: '#06B6D4',
    },
  ];

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
          {pinnedProfiles.map((profile) => (
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
