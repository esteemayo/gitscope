'use client';

import AnalyticsStep from './AnalyticsStep';
import DocsArticle from '../../DocsArticle';
import DocsCallout from '../../DocsCallout';
import DocsFeatureCard from '../../DocsFeatureCard';

import * as data from '@/data/docs/analytics/overview.data';
import '../../../../styles/components/docs/analytics/overview/AnalyticsOverviewClient.scss';

const AnalyticsOverviewClient = () => {
  return (
    <main className='analytics-overview-client'>
      <DocsArticle
        category='Analytics'
        title='Overview'
        description='Understand how GitScope organizes GitHub data into profile, repository, language, and contribution analytics.'
        previous={{
          title: 'Export & Sharing',
          href: '/documentation/features/export-sharing',
        }}
        next={{
          title: 'Repository Metrics',
          href: '/documentation/analytics/repository-metrics',
        }}
      >
        <section id='overview'>
          <h2>Overview</h2>

          <p>
            GitScope analytics turn GitHub data into a collection of focused
            views. Instead of relying on a single activity number, GitScope
            separates the data into different dimensions that can be explored
            independently.
          </p>

          <p>
            The analytics section provides the foundation for understanding what
            each metric represents and how the different views relate to one
            another.
          </p>

          <DocsCallout type='note'>
            Analytics describe the GitHub data available to GitScope. They are
            not intended to provide a complete measurement of a developer&apos;s
            skills, experience, or professional performance.
          </DocsCallout>
        </section>

        <section id='analytics-areas'>
          <h2>Analytics areas</h2>

          <p>GitScope organizes analytics into four primary areas.</p>

          <div className='analytics-overview-client__grid'>
            {data.analyticsAreas.map((analytic) => (
              <DocsFeatureCard key={analytic.title} {...analytic} />
            ))}
          </div>
        </section>

        <section id='how-analytics-work'>
          <h2>How analytics work</h2>

          <p>
            GitScope follows a simple path from GitHub data to the analytics
            presented in the interface.
          </p>

          <div className='analytics-overview-client__flow'>
            {data.analyticsStep.map((step, index) => (
              <AnalyticsStep
                key={step.title.toLowerCase()}
                {...step}
                index={index}
              />
            ))}
          </div>
        </section>

        <section id='profile-analytics'>
          <h2>Profile analytics</h2>

          <p>
            Profile analytics provide the high-level context for a developer.
            They help establish the basic characteristics of the GitHub account
            before moving into repository or contribution details.
          </p>

          <ul>
            <li>Account and profile information.</li>

            <li>Repository statistics.</li>

            <li>Followers and following.</li>

            <li>Public activity represented by the available data.</li>
          </ul>
        </section>

        <section id='repository-metrics'>
          <h2>Repository metrics</h2>

          <p>
            Repository metrics describe the projects associated with a profile.
            They provide information about project popularity, activity, and
            repository composition.
          </p>

          <p>
            Use the Repository Metrics documentation for a deeper explanation of
            individual repository-level measurements.
          </p>
        </section>

        <section id='language-analytics'>
          <h2>Language analytics</h2>

          <p>
            Language analytics show the programming languages represented across
            repositories. This makes it easier to identify recurring
            technologies and understand how a profile&apos;s repositories are
            distributed across languages.
          </p>

          <DocsCallout type='tip'>
            Language usage should be interpreted as repository data. The
            presence of a language does not by itself indicate proficiency.
          </DocsCallout>
        </section>

        <section id='contribution-analytics'>
          <h2>Contribution analytics</h2>

          <p>
            Contribution analytics focus on activity over time. Looking at
            contribution patterns alongside totals provides more context than
            the total alone.
          </p>

          <ul>
            <li>Overall contribution activity.</li>

            <li>Activity across the available timeline.</li>

            <li>Periods of higher activity.</li>

            <li>Consistency and changes in activity.</li>
          </ul>
        </section>

        <section id='reading-analytics'>
          <h2>Reading analytics</h2>

          <p>
            Analytics are most useful when multiple metrics are considered
            together.
          </p>

          <div className='analytics-overview-client__reading'>
            {data.analyticsReadings.map((reading) => {
              const { title, description, accentColor } = reading;

              return (
                <div
                  key={title}
                  className='analytics-overview-client__reading-item'
                  style={
                    {
                      '--accent-color': accentColor,
                    } as React.CSSProperties
                  }
                >
                  <span>{title}</span>

                  <p>{description}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section id='data-context'>
          <h2>Data context</h2>

          <p>
            GitHub data can change over time. Repository stars, forks,
            contributions, followers, and other profile information may change
            after an analysis has been generated.
          </p>

          <p>
            Some activity may also not be visible through a public GitHub
            profile. Treat the analytics as a representation of the available
            data rather than a complete record of everything a developer has
            done.
          </p>
        </section>

        <section id='next-steps'>
          <h2>Next steps</h2>

          <p>
            Continue with the analytics pages that focus on individual data
            categories.
          </p>

          <ul>
            <li>Repository Metrics</li>

            <li>Language Analytics</li>

            <li>Contribution Analytics</li>
          </ul>
        </section>
      </DocsArticle>
    </main>
  );
};

export default AnalyticsOverviewClient;
