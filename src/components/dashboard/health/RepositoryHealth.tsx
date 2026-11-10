import StaleRepositoryCard from './StaleRepositoryCard';
import Disclaimer from '../Disclaimer';
import EmptyStaleRepository from './EmptyStaleRepository';
import HealthEmptyState from './HealthEmptyState';
import RepositoryHealthNotice from './RepositoryHealthNotice';
import HealthMetricCard from './HealthMetricCard';
import RepositoryHealthSkeleton from '@/components/skeletons/dashboard/RepositoryHealthSkeleton';

import { getRepositoryHealth } from '@/utils/dashboard/getRepositoryHealth';
import { RepositoryHealthProps } from '@/types/dashboard/health/repository.health.type';

import '../../../styles/components/dashboard/health/RepositoryHealth.scss';

const RepositoryHealth = ({
  repositories,
  isLoading = false,
  repositoriesComplete,
}: RepositoryHealthProps) => {
  if (isLoading) {
    return <RepositoryHealthSkeleton />;
  }

  if ((repositories ?? []).length === 0) {
    return (
      <section className='repository-health'>
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
          </header>

          <HealthEmptyState
            title='No repository data available'
            description='GitScope could not find repositories to analyze.'
            accentColor='var(--color-yellow-700)'
          />
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

        <div className='repository-health__wrapper'>
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
              <EmptyStaleRepository
                title='No stale repositories detected'
                description='No non-archived repositories meet the 180-day threshold.'
              />
            )}
          </div>

          {!repositoriesComplete && <RepositoryHealthNotice />}

          <Disclaimer text='Maintenance indicators are based on repository update dates. They do not measure code quality or developer productivity.' />
        </div>
      </div>
    </section>
  );
};

export default RepositoryHealth;
