'use client';

import DocsArticle from './DocsArticle';
import DocsCallout from './DocsCallout';
import AnalyticsCard from './AnalyticsCard';

import * as data from '@/data/docs/github-analytics.data';
import '../../styles/components/docs/GitHubAnalyticsClient.scss';

const GitHubAnalyticsClient = () => {
  return (
    <main className='github-analytics-client'>
      <DocsArticle
        category='Features'
        title='GitHub Analytics'
        description='Explore GitHub activity through structured metrics, visualizations, and trends.'
        previous={{
          title: 'Key Concepts',
          href: '/documentation/introduction/key-concepts',
        }}
        next={{
          title: 'Repository Insights',
          href: '/documentation/features/repository-insights',
        }}
      >
        <section id='overview'>
          <h2>Overview</h2>

          <p>
            GitHub Analytics is the core analytical experience in GitScope. It
            transforms GitHub profile and repository data into visual
            information that is easier to explore and compare.
          </p>

          <p>
            Instead of examining individual GitHub pages, you can use the
            analytics dashboard to see profile activity, repository
            distribution, language usage, and contribution patterns in one
            place.
          </p>
        </section>

        <section id='profile-analytics'>
          <h2>Profile analytics</h2>

          <p>
            Profile analytics provide an account-level view of the GitHub
            profile being analyzed.
          </p>

          <div className='github-analytics-client__grid'>
            {data.githubProfileAnalytics.map((profile) => (
              <AnalyticsCard key={profile.id} {...profile} />
            ))}
          </div>
        </section>

        <section id='repository-analytics'>
          <h2>Repository analytics</h2>

          <p>
            GitScope aggregates repository information to help you understand
            the projects associated with a profile.
          </p>

          <AnalyticsCard
            title='Repository performance'
            description='Explore repository-level signals such as stars, forks, and recent activity.'
            accentColor='#06B6D4'
          >
            <ul>
              <li>Repository popularity</li>

              <li>Repository activity</li>

              <li>Stars and forks</li>

              <li>Recently updated projects</li>
            </ul>
          </AnalyticsCard>
        </section>

        <section id='language-analytics'>
          <h2>Language analytics</h2>

          <p>
            Language analytics show the programming languages detected across
            the repositories included in the analysis.
          </p>

          <AnalyticsCard
            title='Language distribution'
            description="See how a profile's repositories are distributed across programming languages."
            accentColor='var(--color-pink)'
          >
            <p>
              This view can help you identify the technologies represented
              across a public repository portfolio.
            </p>
          </AnalyticsCard>

          <DocsCallout type='note'>
            Language distribution reflects the repositories and language data
            available to GitScope. It should not be interpreted as a measure of
            proficiency.
          </DocsCallout>
        </section>

        <section id='contribution-analytics'>
          <h2>Contribution analytics</h2>

          <p>
            Contribution analytics visualize activity over time, making it
            easier to identify patterns in a developer&apos;s GitHub
            contributions.
          </p>

          <div className='github-analytics-client__grid'>
            {data.githubContributionAnalytics.map((contribution) => (
              <AnalyticsCard key={contribution.id} {...contribution} />
            ))}
          </div>
        </section>

        <section id='dashboard'>
          <h2>Understanding the dashboard</h2>

          <p>
            GitScope organizes analytics into focused visual sections rather
            than presenting all GitHub data as a single list.
          </p>

          <div className='github-analytics-client__flow'>
            {data.githubAnalyticsDashboard.map((dashboard) => (
              <AnalyticsCard key={dashboard.id} {...dashboard} />
            ))}
          </div>
        </section>

        <section id='sorting'>
          <h2>Sorting and exploration</h2>

          <p>
            Repository data can be sorted to make different aspects of a profile
            easier to inspect.
          </p>

          <p>
            Depending on the available repository data, sorting can help surface
            projects based on metrics such as stars, forks, or activity.
          </p>

          <DocsCallout type='tip'>
            Sorting changes how repository information is presented. It does not
            modify the underlying GitHub data.
          </DocsCallout>
        </section>

        <section id='interpreting-analytics'>
          <h2>Interpreting analytics</h2>

          <p>
            GitScope analytics are designed to provide context around observable
            GitHub activity. Individual metrics are most useful when considered
            alongside the other information on the dashboard.
          </p>

          <div className='github-analytics-client__interpretation'>
            {data.githubInterpretationAnalytics.map((interpretation) => (
              <AnalyticsCard key={interpretation.id} {...interpretation} />
            ))}
          </div>
        </section>

        <section id='next-steps'>
          <h2>Next steps</h2>

          <p>
            Now that you understand GitScope&apos;s analytics layer, explore the
            individual features that build on top of it.
          </p>

          <ul>
            <li>
              Learn about <strong>Repository Insights</strong> for detailed
              repository analysis.
            </li>

            <li>
              Learn about <strong>Compare Developers</strong> for side-by-side
              profile analysis.
            </li>

            <li>
              Explore <strong>Contributions</strong> for contribution-focused
              analytics.
            </li>
          </ul>
        </section>
      </DocsArticle>
    </main>
  );
};

export default GitHubAnalyticsClient;
