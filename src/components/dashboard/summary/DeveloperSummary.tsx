import { Activity, AlertCircle, BookOpen } from 'lucide-react';

import Disclaimer from '../Disclaimer';
import ObservationCard from './ObservationCard';

import { DeveloperSummaryProps } from '@/types/dashboard/summary/developer.summary.type';
import '../../../styles/components/dashboard/summary/DeveloperSummary.scss';
import { getDeveloperSummary } from '@/utils/dashboard/getDeveloperSummary';

const DeveloperSummary = ({
  profile,
  repositories,
  languages,
  repositoryHealth,
  repositoriesComplete,
  isLoading = false,
}: DeveloperSummaryProps) => {
  if (isLoading) {
    return 'DeveloperSummarySkeleton';
  }

  const { overview, observations, dataCoverage } = getDeveloperSummary({
    profile,
    repositories,
    languages,
    repositoryHealth,
    repositoriesComplete,
  });

  return (
    <section
      className='developer-summary'
      aria-labelledby='developer-summary-title'
    >
      <div className='developer-summary__container'>
        <header className='developer-summary__header'>
          <div className='developer-summary__heading'>
            <span className='developer-summary__heading--eyebrow'>
              Profile analysis
            </span>

            <h2
              id='developer-summary-title'
              className='developer-summary__heading--title'
            >
              Developer summary
            </h2>

            <p className='developer-summary__heading--description'>
              An overview of this developer&apos;s public GitHub presence.
            </p>
          </div>
        </header>

        <div className='developer-summary__wrapper'>
          <div className='developer-summary__card'>
            <div className='developer-summary__card-heading'>
              <div className='developer-summary__card-icon'>
                <BookOpen
                  size={19}
                  strokeWidth={1.8}
                  role='img'
                  aria-hidden='true'
                  focusable='false'
                />
              </div>

              <div className='developer-summary__card-content'>
                <h3>Overview</h3>

                <p>About this developer</p>
              </div>
            </div>

            <p className='developer-summary__card-overview'>{overview}</p>
          </div>

          <div className='developer-summary__observations'>
            <div className='developer-summary__observations-header'>
              <div className='developer-summary__observations-heading'>
                <h3>Key observations</h3>

                <p>Highlights derived from available GitHub data.</p>
              </div>

              <span className='developer-summary__observations-count'>
                {observations.length} insights
              </span>
            </div>

            {observations.length > 0 ? (
              <div className='developer-summary__observations-grid'>
                {observations.map((observation) => (
                  <ObservationCard key={observation.id} {...observation} />
                ))}
              </div>
            ) : (
              <div className='developer-summary__empty-state'>
                <Activity
                  size={20}
                  strokeWidth={1.8}
                  role='img'
                  aria-hidden='true'
                  focusable='false'
                />

                <p>There is not enough data to generate observations.</p>
              </div>
            )}
          </div>

          <div className='developer-summary__notice'>
            <AlertCircle
              size={16}
              strokeWidth={1.8}
              role='img'
              aria-hidden='true'
              focusable='false'
            />

            <p>{dataCoverage}</p>
          </div>

          <Disclaimer text='This summary describes publicly available GitHub data. It does not measure coding ability, code quality, or professional experience.' />
        </div>
      </div>
    </section>
  );
};

export default DeveloperSummary;
