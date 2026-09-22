'use client';

import ActivityItem from './ActivityItem';
import DocsArticle from './DocsArticle';
import ContributionCard from './ContributionCard';
import DocsCallout from './DocsCallout';

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
            <ContributionCard
              title='Contribution total'
              description='Provides the total contribution activity represented by the available GitHub data.'
              accentColor='#22C55E'
            />

            <ContributionCard
              title='Activity timeline'
              description='Shows how contribution activity changes across the available period.'
              accentColor='#06B6D4'
            />

            <ContributionCard
              title='Consistency'
              description='Helps identify whether activity is distributed regularly or concentrated in specific periods.'
              accentColor='#8B5CF6'
            />

            <ContributionCard
              title='Peak activity'
              description='Highlights periods where contribution activity reaches its highest level.'
              accentColor='#F59E0B'
            />
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
              {[
                {
                  label: 'Jan',
                  value: '34',
                  width: '42%',
                  accentColor: '#8B5CF6',
                },
                {
                  label: 'Feb',
                  value: '52',
                  width: '65%',
                  accentColor: '#06B6D4',
                },
                {
                  label: 'Mar',
                  value: '71',
                  width: '84%',
                  accentColor: '#22C55E',
                },
                {
                  label: 'Apr',
                  value: '43',
                  width: '54%',
                  accentColor: '#F59E0B',
                },
              ].map((item) => (
                <div
                  className='contributions-client__timeline-row'
                  key={item.label}
                >
                  <span>{item.label}</span>

                  <div className='contributions-client__timeline-track'>
                    <span
                      className='contributions-client__timeline-bar'
                      style={
                        {
                          '--accent-color': item.accentColor,
                          '--bar-width': item.width,
                        } as React.CSSProperties
                      }
                    />
                  </div>

                  <strong>{item.value}</strong>
                </div>
              ))}
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
            <ActivityItem
              label='Regular activity'
              description='Contributions appear across many periods with fewer large gaps.'
              accentColor='#22C55E'
            />

            <ActivityItem
              label='Concentrated activity'
              description='A larger portion of contributions appears within a smaller number of periods.'
              accentColor='#F59E0B'
            />

            <ActivityItem
              label='Variable activity'
              description='Activity levels fluctuate significantly between periods.'
              accentColor='#8B5CF6'
            />
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
            <article
              className='contributions-client__reading-card'
              style={
                {
                  '--accent-color': '#22C55E',
                } as React.CSSProperties
              }
            >
              <span>Density</span>

              <p>
                Areas with more activity indicate periods with a higher
                concentration of contributions.
              </p>
            </article>

            <article
              className='contributions-client__reading-card'
              style={
                {
                  '--accent-color': '#8B5CF6',
                } as React.CSSProperties
              }
            >
              <span>Gaps</span>

              <p>
                Empty or quieter periods can indicate breaks or changes in
                activity.
              </p>
            </article>

            <article
              className='contributions-client__reading-card'
              style={
                {
                  '--accent-color': '#F59E0B',
                } as React.CSSProperties
              }
            >
              <span>Patterns</span>

              <p>
                Repeated activity across periods can reveal recurring
                contribution patterns.
              </p>
            </article>
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
            <li>
              <div>
                <strong>Start with the total.</strong>

                <span>
                  Use the total to understand the overall amount of activity
                  represented by the data.
                </span>
              </div>
            </li>

            <li>
              <div>
                <strong>Check the timeline.</strong>

                <span>
                  Look at when the activity occurred instead of relying only on
                  the aggregate number.
                </span>
              </div>
            </li>

            <li>
              <div>
                <strong>Look for patterns.</strong>

                <span>
                  Compare periods of high, low, and consistent activity.
                </span>
              </div>
            </li>

            <li>
              <div>
                <strong>Consider the context.</strong>

                <span>
                  Repository work, private activity, and other factors can
                  affect what is visible on a public profile.
                </span>
              </div>
            </li>
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
