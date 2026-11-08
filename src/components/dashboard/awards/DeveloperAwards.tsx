'use client';

import { useMemo } from 'react';
import { Trophy } from 'lucide-react';

import AuthenticationGate from './AuthenticationGate';
import AwardCard from './AwardCard';
import AwardsSkeleton from '@/components/skeletons/dashboard/AwardsSkeleton';
import Disclaimer from '../Disclaimer';

import { getDeveloperAwards } from '@/utils/dashboard/getDeveloperAwards';
import { DeveloperAwardsProps } from '@/types/dashboard/awards/developer.awards.type';

import '../../../styles/components/dashboard/awards/DeveloperAwards.scss';

const DeveloperAwards = ({
  profile,
  repositories,
  languages,
  isAuthenticated,
  isLoading,
  repositoriesComplete,
  onSignIn,
}: DeveloperAwardsProps) => {
  const awards = getDeveloperAwards({
    profile,
    repositories,
    languages,
    repositoriesComplete,
  });

  const earnedCount = useMemo(
    () => awards.filter((award) => award.status === 'earned'),
    [awards],
  ).length;

  return (
    <section
      className='developer-awards'
      aria-labelledby='developer-awards-title'
    >
      <div className='developer-awards__container'>
        <header className='developer-awards__header'>
          <div className='developer-awards__heading'>
            <span className='developer-awards__heading--eyebrow'>
              Achievements
            </span>

            <h2
              id='developer-awards-title'
              className='developer-awards__heading--title'
            >
              Developer awards
            </h2>

            <p className='developer-awards__heading--description'>
              Milestones and achievements from your GitHub journey.
            </p>
          </div>

          {!isLoading && isAuthenticated && (
            <span className='developer-awards__earned-count'>
              <Trophy
                size={12}
                strokeWidth={1.8}
                role='img'
                aria-hidden='true'
                focusable='false'
              />
              {earnedCount} of {awards.length} earned
            </span>
          )}
        </header>

        {!isAuthenticated ? (
          <AuthenticationGate onSignIn={onSignIn} />
        ) : isLoading ? (
          <AwardsSkeleton />
        ) : (
          <div className='developer-awards__grid'>
            {awards.map((award) => (
              <AwardCard key={award.id} {...award} />
            ))}
          </div>
        )}

        <Disclaimer text='Awards are based on GitScope-defined milestones and available public GitHub data. They are not official GitHub achievements.' />
      </div>
    </section>
  );
};

export default DeveloperAwards;
