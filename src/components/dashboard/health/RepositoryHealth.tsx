import HealthMetricCard from './HealthMetricCard';

import '../../../styles/components/dashboard/health/RepositoryHealth.scss';
import StaleRepositoryCard from './StaleRepositoryCard';
import { AlertCircle } from 'lucide-react';

const RepositoryHealth = () => {
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

          <span className='repository-health__count'>5 repositories</span>
        </header>

        <div className='repository-health__grid'>
          {[...Array(4)].map((_, index) => (
            <HealthMetricCard key={index} />
          ))}
        </div>

        <div className='repository-health__content'>
          <div className='repository-health__content-header'>
            <div>
              <h3>Repositories needing attention</h3>

              <p>Repositories with no updates in at least 180 days.</p>
            </div>

            <span className='repository-health__stale-count'>39</span>
          </div>

          <div className='repository-health__repository-list'>
            {[...Array(4)].map((_, index) => (
              <StaleRepositoryCard key={index} />
            ))}
          </div>
        </div>

        <div className='repository-health__notice'>
          <AlertCircle size={16} />

          <span>
            This analysis uses the repositories currently loaded. Some results
            might change when additional repositories are fetched.
          </span>
        </div>

        <p className='repository-health__disclaimer'>
          Maintenance indicators are based on repository update dates. They do
          not measure code quality or developer productivity.
        </p>
      </div>
    </section>
  );
};

export default RepositoryHealth;
