'use client';

import { Clock3 } from 'lucide-react';

import SavedHeading from './SavedHeading';
import RecentProfileRow from './RecentProfileRow';

import { RecentlyViewedProps } from '@/types/saved/recently.viewed.type';
import '../../styles/components/saved/RecentlyViewed.scss';

const RecentlyViewed = ({ profiles }: RecentlyViewedProps) => {
  return (
    <section className='recently-viewed'>
      <div className='recently-viewed__header'>
        <SavedHeading
          title='Recently viewed'
          description="Profiles you've recently opened."
          icon={Clock3}
        />
      </div>

      <div className='recently-viewed__list'>
        {profiles.map((profile) => (
          <RecentProfileRow key={profile.id} {...profile} />
        ))}
      </div>
    </section>
  );
};

export default RecentlyViewed;
