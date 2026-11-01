import { Trophy } from 'lucide-react';

import AwardCard from './AwardCard';
import AuthenticationGate from './AuthenticationGate';

import '../../../styles/components/dashboard/awards/DeveloperAwards.scss';

const DeveloperAwards = () => {
  const isLoading = false;
  const isAuthenticated = false;

  return (
    <section
      className='developer-awards'
      aria-labelledby='developer-awards-title'
    >
      <div className='developer-awards__container'>
        <header className='developer-awards__header'>
          <div className='developer-awards__heading-group'>
            <div className='developer-awards__heading-icon'>
              <Trophy
                size={22}
                strokeWidth={1.8}
                role='img'
                aria-hidden='true'
                focusable='false'
              />
            </div>

            <div className='developer-awards__heading-text'>
              <div className='developer-awards__title-row'>
                <h2
                  id='developer-awards-title'
                  className='developer-awards__title'
                >
                  Developer awards
                </h2>

                <span className='developer-awards__earned-count'>
                  20 of 30 earned
                </span>
              </div>

              <p className='developer-awards__description'>
                Milestones and achievements from your GitHub journey
              </p>
            </div>
          </div>
        </header>

        {!isAuthenticated ? (
          <AuthenticationGate onSignIn={() => console.log('signed in')} />
        ) : isLoading ? (
          'loading'
        ) : (
          <div className='developer-awards__grid'>
            <AwardCard />
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
