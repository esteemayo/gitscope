import IntelligenceEmptyState from './IntelligenceEmptyState';
import IntelligenceInsight from './IntelligenceInsight';
import IntelligenceSkeleton from '@/components/skeletons/dashboard/IntelligenceSkeleton';

import { getProfileIntelligence } from '@/utils/dashboard/getProfileIntelligence';
import { ProfileIntelligenceProps } from '@/types/dashboard/intelligence/profile.intelligence.type';

import '../../../styles/components/dashboard/intelligence/ProfileIntelligence.scss';

const ProfileIntelligence = ({
  profile,
  repositories,
  languages,
  isLoading = false,
}: ProfileIntelligenceProps) => {
  const hasLanguageData = (languages ?? []).length > 0;
  const hasRepositoryData = (repositories ?? []).length > 0;

  const insights = getProfileIntelligence({ profile, repositories, languages });

  const hasInsightData = hasRepositoryData || hasLanguageData;

  return (
    <section
      className='profile-intelligence'
      aria-labelledby='profile-intelligence-title'
    >
      <div className='profile-intelligence__container'>
        <header className='profile-intelligence__header'>
          <div className='profile-intelligence__heading'>
            <span className='profile-intelligence__heading--eyebrow'>
              Insights
            </span>

            <h2
              id='profile-intelligence-title'
              className='profile-intelligence__heading--title'
            >
              Profile intelligence
            </h2>

            <p className='profile-intelligence__heading--description'>
              A closer look at {profile.login}&apos;s public developer
              portfolio.
            </p>
          </div>
        </header>

        {isLoading ? (
          <IntelligenceSkeleton />
        ) : !hasInsightData ? (
          <IntelligenceEmptyState
            title='Insights are not available yet'
            description='We need repository or language data to generate meaningful insights for this profile.'
          />
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
