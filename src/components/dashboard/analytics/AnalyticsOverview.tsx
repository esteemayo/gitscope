import LanguageDistribution from './LanguageDistribution';
import AnalyticsMetrics from './AnalyticsMetrics';
import RepositoryComparisonChart from './RepositoryComparisonChart';

import { MOCK_ANALYTICS } from '@/data/dashboard/analytics.data';
import '../../../styles/components/dashboard/analytics/AnalyticsOverview.scss';

const AnalyticsOverview = () => {
  const { metrics, repositories, languages } = MOCK_ANALYTICS;

  return (
    <section
      className='analytics-overview'
      aria-labelledby='analytics-overview-title'
    >
      <div className='analytics-overview__container'>
        <header className='analytics-overview__header'>
          <div className='analytics-overview__heading'>
            <span className='analytics-overview__heading--eyebrow'>
              Developer analytics
            </span>

            <h2
              id='analytics-overview-title'
              className='analytics-overview__heading--title'
            >
              Analytics overview
            </h2>

            <p className='analytics-overview__heading--description'>
              Understand the reach, composition, and performance of a
              developer&apos;s public repositories.
            </p>
          </div>
        </header>

        <AnalyticsMetrics metrics={metrics} />

        <div className='analytics-overview__grid'>
          <RepositoryComparisonChart repositories={repositories} />

          <LanguageDistribution languages={languages} />
        </div>

        <p className='analytics-overview__disclaimer'>
          Preview data is illustrative. Repository and language metrics will be
          populated from GitHub data.
        </p>
      </div>
    </section>
  );
};

export default AnalyticsOverview;
