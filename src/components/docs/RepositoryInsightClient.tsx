'use client';

import DocsArticle from './DocsArticle';
import DocsCallout from './DocsCallout';
import RepositoryInsightCard from './RepositoryInsightCard';

import * as data from '@/data/docs/repository-insight';
import '../../styles/components/docs/RepositoryInsightClient.scss';

const RepositoryInsightsClient = () => {
  return (
    <main className='repository-insights-client'>
      <DocsArticle
        category='Features'
        title='Repository Insights'
        description='Explore repository-level metrics, activity, technologies, and project health through a focused view.'
        previous={{
          title: 'GitHub Analytics',
          href: '/documentation/features/github-analytics',
        }}
        next={{
          title: 'Compare Developers',
          href: '/documentation/features/compare-developers',
        }}
      >
        <section id='overview'>
          <h2>Overview</h2>

          <p>
            Repository Insights provides a focused view of an individual GitHub
            repository. Instead of looking at repository information across
            several GitHub pages, GitScope brings the relevant data together in
            one place.
          </p>

          <p>
            The repository view combines project metadata, measurable activity,
            technology information, and repository signals to make a project
            easier to understand.
          </p>
        </section>

        <section id='repository-overview'>
          <h2>Repository overview</h2>

          <p>
            The repository header provides the basic context needed to identify
            and understand the project before examining its metrics.
          </p>

          <div className='repository-insights-client__grid'>
            {data.repositoryInsightOverview.map((overview) => (
              <RepositoryInsightCard key={overview.id} {...overview} />
            ))}
          </div>
        </section>

        <section id='core-metrics'>
          <h2>Core metrics</h2>

          <p>
            Core metrics provide measurable signals about the repository. They
            give you a quick overview before you inspect the more detailed
            sections.
          </p>

          <div className='repository-insights-client__grid'>
            {data.repositoryInsightMetrics.map((metric) => (
              <RepositoryInsightCard key={metric.id} {...metric} />
            ))}
          </div>

          <DocsCallout type='note'>
            Metrics describe observable repository activity. They should be
            interpreted within the context of the project&apos;s age, purpose,
            and development history.
          </DocsCallout>
        </section>

        <section id='repository-health'>
          <h2>Repository health</h2>

          <p>
            Repository health brings several repository signals together to
            provide additional context about project activity.
          </p>

          <RepositoryInsightCard
            title='Health signals'
            description='A combined view of repository activity and available project signals.'
            accentColor='#22C55E'
          >
            <ul>
              <li>Recent repository activity</li>

              <li>Issue activity</li>

              <li>Community signals</li>

              <li>Project maintenance indicators</li>
            </ul>
          </RepositoryInsightCard>

          <p className='repository-insights-client__caption'>
            Health indicators are intended as contextual signals rather than a
            definitive assessment of a project&apos;s quality or
            maintainability.
          </p>
        </section>

        <section id='languages'>
          <h2>Languages and technologies</h2>

          <p>
            GitScope surfaces language information associated with the
            repository to provide a quick view of its technical composition.
          </p>

          <RepositoryInsightCard
            title='Language distribution'
            description='The programming languages detected within the repository.'
            accentColor='var(--color-pink)'
          >
            <p>
              Language data helps provide technical context around a project
              without requiring you to inspect every source file manually.
            </p>
          </RepositoryInsightCard>

          <DocsCallout type='note'>
            Language percentages represent detected repository content. They
            should not be interpreted as a direct measurement of development
            effort.
          </DocsCallout>
        </section>

        <section id='repository-summary'>
          <h2>Repository summary</h2>

          <p>
            The repository summary brings important project information into a
            concise overview.
          </p>

          <div className='repository-insights-client__flow'>
            {data.repositoryInsightSummaries.map((summary) => (
              <RepositoryInsightCard key={summary.id} {...summary} />
            ))}
          </div>
        </section>

        <section id='recent-activity'>
          <h2>Recent activity</h2>

          <p>
            Recent activity helps you understand whether a repository has
            received updates over time.
          </p>

          <RepositoryInsightCard
            title='Recently updated'
            description='Highlights repositories and project information associated with recent updates.'
            accentColor='#F59E0B'
          />

          <DocsCallout type='tip'>
            Recent activity is useful for understanding maintenance patterns,
            but a lack of recent activity does not necessarily indicate that a
            repository is abandoned.
          </DocsCallout>
        </section>

        <section id='repository-navigation'>
          <h2>Repository navigation</h2>

          <p>
            The repository details view is organized so that you can move from
            high-level information to more detailed project signals.
          </p>

          <div className='repository-insights-client__flow'>
            {data.repositoryInsightNavigation.map((navigation) => (
              <RepositoryInsightCard key={navigation.id} {...navigation} />
            ))}
          </div>
        </section>

        <section id='interpreting-insights'>
          <h2>Interpreting repository insights</h2>

          <p>
            Repository metrics are most useful when considered together. Stars,
            forks, activity, languages, and repository age can each describe a
            different part of a project.
          </p>

          <div className='repository-insights-client__interpretation'>
            {data.repositoryInsightInterpretation.map((interpretation) => (
              <RepositoryInsightCard
                key={interpretation.id}
                {...interpretation}
              />
            ))}
          </div>
        </section>

        <section id='next-steps'>
          <h2>Next steps</h2>

          <p>
            Repository Insights focuses on individual projects. Continue with
            the other GitScope features to understand how repository data
            connects with broader profile analytics.
          </p>

          <ul>
            <li>
              Explore <strong>Compare Developers</strong> to compare profiles.
            </li>

            <li>
              Read <strong>Contributions</strong> to understand contribution
              activity.
            </li>

            <li>
              Return to <strong>GitHub Analytics</strong> for the broader
              profile-level experience.
            </li>
          </ul>
        </section>
      </DocsArticle>
    </main>
  );
};

export default RepositoryInsightsClient;
