import { BrainCircuit, Sparkles } from 'lucide-react';

import IntelligenceInsight from './IntelligenceInsight';
import IntelligenceEmptyState from './IntelligenceEmptyState';

import { ProfileIntelligenceProps } from '@/types/dashboard/intelligence/profile.intelligence.type';
import '../../../styles/components/dashboard/intelligence/ProfileIntelligence.scss';
import { getProfileIntelligence } from '@/utils/dashboard/getProfileIntelligence';

const ProfileIntelligence = ({
  profile,
  repositories,
  languages,
  isLoading = false,
}: ProfileIntelligenceProps) => {
  const insights = getProfileIntelligence({ profile, repositories, languages });

  const hasInsightData = true;

  return (
    <section
      className='profile-intelligence'
      aria-labelledby='profile-intelligence-title'
    >
      <div className='profile-intelligence__container'>
        <header className='profile-intelligence__header'>
          <div className='profile-intelligence__heading-group'>
            <div
              className='profile-intelligence__heading-icon'
              aria-hidden='true'
            >
              <BrainCircuit
                size={20}
                strokeWidth={1.8}
                role='img'
                aria-hidden='true'
                focusable='false'
              />
            </div>

            <div className='profile-intelligence__heading-text'>
              <div className='profile-intelligence__title-row'>
                <h2
                  id='profile-intelligence-title'
                  className='profile-intelligence__title'
                >
                  Profile intelligence
                </h2>

                <span className='profile-intelligence__insight-badge'>
                  <Sparkles
                    size={12}
                    strokeWidth={1.8}
                    role='img'
                    aria-hidden='true'
                    focusable='false'
                  />
                  Insights
                </span>
              </div>

              <p className='profile-intelligence__description'>
                A closer look at profile.login&apos;s public developer
                portfolio.
              </p>
            </div>
          </div>
        </header>

        {isLoading ? (
          'loading...'
        ) : !hasInsightData ? (
          <IntelligenceEmptyState />
        ) : (
          <div className='profile-intelligence__grid'>
            {insights.map((insight) => (
              <IntelligenceInsight key={insight.id} {...insight} />
            ))}
          </div>
        )}

        <p className='profile-intelligence__disclaimer'>
          Insights are derived from available public GitHub profile, repository,
          and language data. They do not measure developer skill or
          productivity.
        </p>
      </div>
    </section>
  );
};

export default ProfileIntelligence;
