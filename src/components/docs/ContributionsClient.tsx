'use client';

import ActivityItem from './ActivityItem';
import DocsArticle from './DocsArticle';
import ContributionCard from './ContributionCard';
import DocsCallout from './DocsCallout';

import * as data from '@/data/docs/contributions.data';
import '../../styles/components/docs/ContributionsClient.scss';

export default function ContributionsClient() {
  return (
    <main className='contributions-client'>
      <DocsArticle
        category='Features'
        title='Contributions'
        description='Understand GitHub contribution activity through totals, timelines, consistency patterns, and periods of higher activity.'
        previous={{
          title: 'Compare Developers',
          href: '/documentation/features/compare-developers',
        }}
        next={{
          title: 'Export & Sharing',
          href: '/documentation/features/export-sharing',
        }}
      >
        <section id='overview'>
          <h2>Overview</h2>

          <p>
            Contributions provide a view of how a developer has interacted with
            GitHub over time. GitScope turns available contribution data into
            visual analytics that make activity patterns easier to inspect.
          </p>

          <p>
            Instead of looking only at a single contribution total, you can
            examine how activity changes across the selected timeline.
          </p>

          <DocsCallout type='note'>
            Contribution data reflects the GitHub activity available to
            GitScope. GitHub may update, recalculate, or classify activity
            differently over time.
          </DocsCallout>
        </section>

        <section id='contribution-data'>
          <h2>Contribution data</h2>

          <p>
            GitScope uses contribution information to build a broader picture of
            developer activity.
          </p>

          <div className='contributions-client__grid'>
            {data.contributionData.map((data) => (
              <ContributionCard key={data.id} {...data} />
            ))}
          </div>
        </section>

        <section id='contribution-timeline'>
          <h2>Contribution timeline</h2>

          <p>
            The timeline provides context for contribution totals by showing
            when activity occurred.
          </p>

          <div className='contributions-client__timeline'>
            <div className='contributions-client__timeline-header'>
              <span>Activity</span>

              <span>Time</span>
            </div>

            <div className='contributions-client__timeline-bars'>
              {data.contributionTimeline.map((item) => {
                const { label, value, width, accentColor } = item;

                return (
                  <div
                    className='contributions-client__timeline-row'
                    key={label}
                  >
                    <span>{label}</span>

                    <div className='contributions-client__timeline-track'>
                      <span
                        className='contributions-client__timeline-bar'
                        style={
                          {
                            '--accent-color': accentColor,
                            '--bar-width': width,
                          } as React.CSSProperties
                        }
                      />
                    </div>

                    <strong>{value}</strong>
                  </div>
                );
              })}
            </div>
          </div>

          <p className='contributions-client__caption'>
            Example values are illustrative and do not represent a specific
            GitHub profile.
          </p>
        </section>

        <section id='consistency'>
          <h2>Consistency</h2>

          <p>
            A contribution total does not explain how activity is distributed.
            Two developers can have similar totals while following very
            different activity patterns.
          </p>

          <div className='contributions-client__activity'>
            {data.contributionActivities.map((activity) => (
              <ActivityItem key={activity.id} {...activity} />
            ))}
          </div>

          <DocsCallout type='tip'>
            Use consistency as context for the contribution timeline rather than
            treating it as a measure of developer quality or skill.
          </DocsCallout>
        </section>

        <section id='peak-activity'>
          <h2>Peak activity</h2>

          <p>
            GitScope can identify the period with the highest contribution
            activity. This gives you a quick way to locate a developer&apos;s
            most active period within the available timeline.
          </p>

          <div
            className='contributions-client__highlight'
            style={
              {
                '--accent-color': '#06B6D4',
              } as React.CSSProperties
            }
          >
            <span>Peak period</span>

            <strong>Highest contribution activity</strong>

            <p>
              Use the surrounding timeline to understand whether the peak was
              part of a broader pattern or a short period of increased activity.
            </p>
          </div>
        </section>

        <section id='reading-the-heatmap'>
          <h2>Reading contribution activity</h2>

          <p>
            Contribution visualizations are most useful when read as patterns
            rather than isolated cells or numbers.
          </p>

          <div className='contributions-client__reading-grid'>
            {data.contributionReadings.map((reading) => {
              const { label, description, accentColor } = reading;

              return (
                <article
                  key={label}
                  className='contributions-client__reading-card'
                  style={
                    {
                      '--accent-color': accentColor,
                    } as React.CSSProperties
                  }
                >
                  <span>{label}</span>

                  <p>{description}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section id='interpreting-contributions'>
          <h2>Interpreting contribution analytics</h2>

          <p>
            Contribution analytics describe GitHub activity. They should not be
            treated as a complete measurement of a developer&apos;s ability,
            experience, or professional performance.
          </p>

          <ol className='contributions-client__steps'>
            {data.contributionSteps.map((step) => {
              const { id, title, description } = step;

              return (
                <li key={id}>
                  <div>
                    <strong>{title}</strong>

                    <span>{description}</span>
                  </div>
                </li>
              );
            })}
          </ol>
        </section>

        <section id='next-steps'>
          <h2>Next steps</h2>

          <p>
            Contributions work alongside the other analytics available in
            GitScope.
          </p>

          <ul>
            <li>
              Explore GitHub Analytics for a broader profile-level overview.
            </li>

            <li>
              Explore Compare Developers to examine contribution patterns
              between two profiles.
            </li>

            <li>
              Explore Repository Insights to connect activity with individual
              repositories.
            </li>
          </ul>
        </section>
      </DocsArticle>
    </main>
  );
}
