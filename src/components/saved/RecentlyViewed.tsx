'use client';

import { Clock3 } from 'lucide-react';
import RecentProfileRow from './RecentProfileRow';

import { recentProfiles } from '@/data/saved/recent-profiles.data';
import '../../styles/components/saved/RecentlyViewed.scss';

const RecentlyViewed = () => {
  return (
    <section className='recently-viewed'>
      <div className='recently-viewed__header'>
        <div>
          <div className='recently-viewed__title'>
            <Clock3
              size={15}
              strokeWidth={1.8}
              role='img'
              aria-hidden='true'
              focusable='false'
            />

            <h2>Recently viewed</h2>
          </div>

          <p className='recently-viewed__header--description'>
            Profiles you&apos;ve recently opened.
          </p>
        </div>
      </div>

      <div className='recently-viewed__list'>
        {recentProfiles.map((profile) => (
          <RecentProfileRow key={profile.id} {...profile} />
        ))}
      </div>
    </section>
  );
};

export default RecentlyViewed;
