import { Activity, AlertCircle } from 'lucide-react';

import HealthMetricCard from './HealthMetricCard';
import StaleRepositoryCard from './StaleRepositoryCard';

import { getRepositoryHealth } from '@/utils/dashboard/getRepositoryHealth';
import { RepositoryHealthProps } from '@/types/dashboard/health/repository.health.type';

import '../../../styles/components/dashboard/health/RepositoryHealth.scss';

const RepositoryHealth = ({
  repositories,
  isLoading = false,
  repositoriesComplete,
}: RepositoryHealthProps) => {
  if (isLoading) {
    return 'RepositoryHealthSkeleton';
  }

  if ((repositories ?? []).length === 0) {
    return (
      <section className='repository-health'>
        <div className='repository-health__empty-state'>
          <AlertCircle size={24} />

          <h3>No repository data available</h3>

          <p>GitScope could not find repositories to analyze.</p>
        </div>
      </section>
    );
  }

  const { totalRepositories, staleRepositories, staleRepositoryList, metrics } =
    getRepositoryHealth(repositories);

  return (
    <section
      className='repository-health'
      aria-labelledby='repository-health-title'
    >
      <div className='repository-health__container'>
        <header className='repository-health__header'>
          <div className='repository-health__heading'>
            <span className='repository-health__heading--eyebrow'>
              Repository insights
            </span>

            <h2
              id='repository-health-title'
              className='repository-health__heading--title'
            >
              Repository health
            </h2>

            <p className='repository-health__heading--description'>
              Maintenance signals across public repositories.
            </p>
          </div>

          <span className='repository-health__count'>
            {totalRepositories} repositories
          </span>
        </header>

        <div className='repository-health__grid'>
          {metrics.map((metric) => (
            <HealthMetricCard key={metric.id} {...metric} />
          ))}
        </div>

        <div className='repository-health__content'>
          <div className='repository-health__content-header'>
            <div>
              <h3>Repositories needing attention</h3>

              <p>Repositories with no updates in at least 180 days.</p>
            </div>

            <span className='repository-health__stale-count'>
              {staleRepositories}
            </span>
          </div>

          {staleRepositoryList.length > 0 ? (
            <div className='repository-health__repository-list'>
              {staleRepositoryList.slice(0, 5).map((repository) => (
                <StaleRepositoryCard key={repository.id} {...repository} />
              ))}
            </div>
          ) : (
            <div className='repository-health__empty-stale'>
              <Activity
                size={20}
                strokeWidth={1.8}
                role='img'
                aria-hidden='true'
                focusable='false'
              />

              <div>
                <h3>No stale repositories detected</h3>

                <p>No non-archived repositories meet the 180-day threshold.</p>
              </div>
            </div>
          )}
        </div>

        {!repositoriesComplete && (
          <div className='repository-health__notice'>
            <AlertCircle size={16} />

            <span>
              This analysis uses the repositories currently loaded. Some results
              might change when additional repositories are fetched.
            </span>
          </div>
        )}

        <p className='repository-health__disclaimer'>
          Maintenance indicators are based on repository update dates. They do
          not measure code quality or developer productivity.
        </p>
      </div>
    </section>
  );
};

export default RepositoryHealth;
