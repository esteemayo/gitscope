import { Trophy } from 'lucide-react';

import AuthenticationGate from './AuthenticationGate';
import AwardCard from './AwardCard';
import AwardsSkeleton from '@/components/skeletons/dashboard/AwardsSkeleton';

import { DeveloperAwardsProps } from '@/types/dashboard/awards/developer.awards.type';
import '../../../styles/components/dashboard/awards/DeveloperAwards.scss';

const DeveloperAwards = ({
  profile,
  repositories,
  isAuthenticated,
  isLoading,
  repositoriesComplete,
  onSignIn,
}: DeveloperAwardsProps) => {
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

          <span className='developer-awards__earned-count'>
            <Trophy
              size={12}
              strokeWidth={1.8}
              role='img'
              aria-hidden='true'
              focusable='false'
            />
            20 of 30 earned
          </span>
        </header>

        {!isAuthenticated ? (
          <AuthenticationGate onSignIn={onSignIn} />
        ) : isLoading ? (
          <AwardsSkeleton />
        ) : (
          <div className='developer-awards__grid'>
            {[...Array(5)].map((_, index) => (
              <AwardCard key={index} />
            ))}
          </div>
        )}

        <p className='developer-awards__disclaimer'>
          Awards are based on GitScope-defined milestones and available public
          GitHub data. They are not official GitHub achievements.
        </p>
      </div>
    </section>
  );
};

export default DeveloperAwards;
