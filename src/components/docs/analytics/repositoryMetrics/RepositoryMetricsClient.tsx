'use client';

import DocsArticle from '../../DocsArticle';
import MetricCard from './MetricCard';
import DocsCallout from '../../DocsCallout';
import MetricItem from './MetricItem';

import * as data from '@/data/docs/analytics/repository-metrics.data';
import '../../../../styles/components/docs/analytics/repositoryMetric/RepositoryMetricsClient.scss';

const RepositoryMetricsClient = () => {
  return (
    <main className='repository-metrics-client'>
      <DocsArticle
        category='Analytics'
        title='Repository Metrics'
        description='Understand the metrics GitScope uses to analyze repositories, including stars, forks, activity, and project composition.'
        previous={{
          title: 'Overview',
          href: '/documentation/analytics',
        }}
        next={{
          title: 'Language Analytics',
          href: '/documentation/analytics/language-analytics',
        }}
      >
        <section id='overview'>
          <h2>Overview</h2>

          <p>
            Repository metrics provide a structured view of a developer&apos;s
            public GitHub projects. GitScope combines repository-level data into
            analytics that make project activity, popularity, and composition
            easier to explore.
          </p>

          <p>
            These metrics are intended to provide context around a repository
            rather than act as standalone measures of project quality.
          </p>
        </section>

        <section id='core-repository-metrics'>
          <h2>Core repository metrics</h2>

          <div className='repository-metrics-client__grid'>
            {data.repositoryMetrics.map((metric) => (
              <MetricCard key={metric.id} {...metric} />
            ))}
          </div>
        </section>

        <section id='repository-count'>
          <h2>Repository count</h2>

          <p>
            Repository count represents the number of repositories included in
            the profile data being analyzed.
          </p>

          <p>
            The value should be interpreted together with the profile context. A
            larger repository count does not automatically indicate greater
            development activity or project impact.
          </p>
        </section>

        <section id='stars-and-forks'>
          <h2>Stars and forks</h2>

          <div className='repository-metrics-client__items'>
            {data.repositoryCombinedContext.map((item) => (
              <MetricItem key={item.label.toLowerCase()} {...item} />
            ))}
          </div>
        </section>

        <section id='repository-activity'>
          <h2>Repository activity</h2>

          <p>
            Activity metrics help show whether repositories have recent
            development signals in the available GitHub data.
          </p>

          <p>
            Activity should be interpreted in context. A repository can be
            intentionally stable while another may receive frequent changes
            during active development.
          </p>

          <DocsCallout type='note'>
            GitScope reports available GitHub data. It does not infer
            development intent from activity levels.
          </DocsCallout>
        </section>

        <section id='popular-repositories'>
          <h2>Popular repositories</h2>

          <p>
            Repository analytics can be used to identify projects that stand out
            based on supported popularity metrics.
          </p>

          <div className='repository-metrics-client__items'>
            {data.popularRepositories.map((repository) => (
              <MetricItem
                key={repository.label.toLowerCase()}
                {...repository}
              />
            ))}
          </div>
        </section>

        <section id='language-distribution'>
          <h2>Language distribution</h2>

          <p>
            GitScope groups repository language information to show the
            programming languages represented across the analyzed projects.
          </p>

          <p>
            Language distribution helps provide a high-level view of the
            technologies represented in a developer&apos;s public repositories.
          </p>
        </section>

        <section id='repository-health-and-project-signals'>
          <h2>Repository health and project signals</h2>

          <p>
            Repository metrics can provide useful signals about project
            structure and activity, but they should not be treated as a
            definitive assessment of repository quality.
          </p>

          <div className='repository-metrics-client__items'>
            {data.repositoryHealth.map((health) => (
              <MetricItem key={health.label.toLowerCase()} {...health} />
            ))}
          </div>
        </section>

        <section id='sorting-and-exploration'>
          <h2>Sorting and exploration</h2>

          <p>
            Sorting makes it easier to explore repositories from different
            perspectives. Instead of presenting one fixed ordering, GitScope
            allows supported repository metrics to determine how projects are
            displayed.
          </p>

          <p>
            This makes it easier to move between popularity-focused,
            activity-focused, and technology-focused exploration.
          </p>
        </section>

        <section id='interpreting-repository-metrics'>
          <h2>Interpreting repository metrics</h2>

          <p>
            Repository metrics work best when considered together. For example,
            a repository with many stars but limited recent activity tells a
            different story from a repository with fewer stars and active
            development.
          </p>

          <p>
            Use the metrics as observable GitHub signals and combine them with
            repository details when you need additional context.
          </p>
        </section>

        <section id='data-context'>
          <h2>Data context</h2>

          <DocsCallout type='warning'>
            Repository metrics depend on the GitHub data available to GitScope
            at the time of analysis. Results can change as repositories and
            GitHub activity change.
          </DocsCallout>

          <p>
            Metrics should therefore be treated as a snapshot of the available
            data rather than a permanent representation of a developer or
            repository.
          </p>
        </section>

        <section id='next-steps'>
          <h2>Next steps</h2>

          <p>
            After understanding repository metrics, explore language analytics
            to see how GitScope groups and visualizes programming language data
            across repositories.
          </p>
        </section>
      </DocsArticle>
    </main>
  );
};

export default RepositoryMetricsClient;
