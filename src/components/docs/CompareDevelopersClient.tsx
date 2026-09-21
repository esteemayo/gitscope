'use client';

import DocsArticle from './DocsArticle';
import MetricRow from './MetricRow';
import ComparisonCard from './ComparisonCard';
import DocsCallout from './DocsCallout';

import '../../styles/components/docs/CompareDevelopersClient.scss';

const CompareDevelopersClient = () => {
  return (
    <main className='compare-developers-client'>
      <DocsArticle
        category='Features'
        title='Compare Developers'
        description='Compare two GitHub profiles side by side to understand differences in activity, repositories, contributions, languages, and overall development patterns.'
        previous={{
          title: 'Repository Insights',
          href: '/documentation/features/repository-insights',
        }}
        next={{
          title: 'Contributions',
          href: '/documentation/features/contributions',
        }}
      >
        <section id='overview'>
          <h2>Overview</h2>

          <p>
            Compare Developers lets you examine two GitHub profiles using the
            same set of analytics. Instead of switching between separate profile
            pages, GitScope places the relevant metrics into one comparison
            view.
          </p>

          <p>
            The comparison is designed to provide context rather than reduce
            developer activity to a single number. Different metrics highlight
            different aspects of GitHub activity.
          </p>

          <DocsCallout type='note'>
            Comparison results are based on the GitHub data available to
            GitScope at the time of analysis. GitHub activity can change as
            profiles and repositories are updated.
          </DocsCallout>
        </section>

        <section id='what-is-compared'>
          <h2>What is being compared?</h2>

          <p>
            GitScope organizes the comparison around several areas of a
            developer profile.
          </p>

          <div className='compare-developers-client__grid'>
            <ComparisonCard
              title='Profile metrics'
              description='Compare high-level account activity and repository presence.'
              accentColor='#8B5CF6'
              items={[
                'Followers and following',
                'Public repositories',
                'Repository stars',
                'Account activity',
              ]}
            />

            <ComparisonCard
              title='Repository activity'
              description='Examine the repositories associated with each profile.'
              accentColor='#06B6D4'
              items={[
                'Repository count',
                'Stars and forks',
                'Popular repositories',
                'Recent repository activity',
              ]}
            />

            <ComparisonCard
              title='Contributions'
              description='Compare contribution patterns across the available activity data.'
              accentColor='#22C55E'
              items={[
                'Contribution totals',
                'Activity over time',
                'Peak activity periods',
                'Consistency patterns',
              ]}
            />

            <ComparisonCard
              title='Languages'
              description='Understand the technologies represented across each profile.'
              accentColor='#F59E0B'
              items={[
                'Programming languages',
                'Language distribution',
                'Repository language usage',
                'Technology patterns',
              ]}
            />
          </div>
        </section>

        <section id='profile-metrics'>
          <h2>Profile metrics</h2>

          <p>
            The profile section provides a quick view of the basic differences
            between the two developers. These metrics help establish context
            before looking at deeper activity data.
          </p>

          <div className='compare-developers-client__metric-list'>
            <MetricRow
              label='Repositories'
              firstValue='42'
              secondValue='27'
              difference='+55.6%'
              accentColor='#8B5CF6'
            />

            <MetricRow
              label='Followers'
              firstValue='180'
              secondValue='120'
              difference='+50%'
              accentColor='#06B6D4'
            />

            <MetricRow
              label='Stars'
              firstValue='640'
              secondValue='410'
              difference='+56.1%'
              accentColor='#F59E0B'
            />
          </div>

          <p className='compare-developers-client__caption'>
            Example values are illustrative. Actual values come from the
            profiles being compared.
          </p>
        </section>

        <section id='repository-comparison'>
          <h2>Repository comparison</h2>

          <p>
            Repository comparison focuses on the projects represented by each
            developer&apos;s public GitHub profile.
          </p>

          <div className='compare-developers-client__flow'>
            {[
              {
                title: 'Repository count',
                text: 'Compare the number of public repositories.',
                accentColor: '#8B5CF6',
              },
              {
                title: 'Stars',
                text: 'Compare accumulated repository stars.',
                accentColor: '#F59E0B',
              },
              {
                title: 'Forks',
                text: 'Compare how often repositories have been forked.',
                accentColor: '#06B6D4',
              },
              {
                title: 'Activity',
                text: 'Inspect recent repository activity and updates.',
                accentColor: '#22C55E',
              },
            ].map((item) => (
              <article
                key={item.title}
                className='compare-developers-client__flow-card'
                style={
                  {
                    '--accent-color': item.accentColor,
                  } as React.CSSProperties
                }
              >
                <span>{item.title}</span>

                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id='contribution-comparison'>
          <h2>Contribution comparison</h2>

          <p>
            Contribution analytics help show how GitHub activity changes over
            time. GitScope can surface overall contribution differences along
            with patterns across the available timeline.
          </p>

          <div className='compare-developers-client__timeline'>
            <div
              className='compare-developers-client__timeline-item'
              style={
                {
                  '--accent-color': '#22C55E',
                } as React.CSSProperties
              }
            >
              <span>Consistency</span>

              <p>
                Shows how regularly activity appears across the comparison
                period.
              </p>
            </div>

            <div
              className='compare-developers-client__timeline-item'
              style={
                {
                  '--accent-color': '#06B6D4',
                } as React.CSSProperties
              }
            >
              <span>Peak month</span>

              <p>
                Identifies the period with the highest contribution activity.
              </p>
            </div>

            <div
              className='compare-developers-client__timeline-item'
              style={
                {
                  '--accent-color': '#8B5CF6',
                } as React.CSSProperties
              }
            >
              <span>Timeline</span>

              <p>Provides a broader view of how activity changes over time.</p>
            </div>
          </div>
        </section>

        <section id='language-comparison'>
          <h2>Language comparison</h2>

          <p>
            Language analytics show which programming languages appear across
            each developer&apos;s repositories. This can reveal overlap,
            different technology preferences, and the distribution of languages
            within each profile.
          </p>

          <div className='compare-developers-client__language-grid'>
            <div
              className='compare-developers-client__language-card'
              style={
                {
                  '--accent-color': '#F59E0B',
                } as React.CSSProperties
              }
            >
              <span>Developer A</span>

              <strong>TypeScript</strong>

              <small>Primary language</small>
            </div>

            <div
              className='compare-developers-client__language-card'
              style={
                {
                  '--accent-color': '#06B6D4',
                } as React.CSSProperties
              }
            >
              <span>Developer B</span>

              <strong>Python</strong>

              <small>Primary language</small>
            </div>
          </div>

          <p>
            Language presence does not indicate proficiency. It represents
            language usage detected across the repositories included in the
            analysis.
          </p>
        </section>

        <section id='relative-differences'>
          <h2>Relative differences</h2>

          <p>
            GitScope can express metric differences as percentages to make the
            size of a gap easier to understand.
          </p>

          <div className='compare-developers-client__formula'>
            <span>Percentage difference</span>

            <code>((value A - value B) / value B) × 100</code>
          </div>

          <p>
            Relative differences should be interpreted alongside the underlying
            values. A large percentage can result from a small baseline, so the
            percentage alone does not provide the complete context.
          </p>
        </section>

        <section id='comparison-highlights'>
          <h2>Comparison highlights</h2>

          <p>
            The comparison interface can highlight which profile has the higher
            value for a particular metric. These highlights are metric-specific
            and should not be interpreted as an overall ranking of the
            developers.
          </p>

          <div className='compare-developers-client__highlight-grid'>
            <article
              className='compare-developers-client__highlight'
              style={
                {
                  '--accent-color': '#22C55E',
                } as React.CSSProperties
              }
            >
              <span>Higher contributions</span>

              <strong>Profile A</strong>

              <p>Based on the contribution metric being displayed.</p>
            </article>

            <article
              className='compare-developers-client__highlight'
              style={
                {
                  '--accent-color': '#8B5CF6',
                } as React.CSSProperties
              }
            >
              <span>More repositories</span>

              <strong>Profile B</strong>

              <p>Based on the repository count available for comparison.</p>
            </article>
          </div>
        </section>

        <section id='how-to-read'>
          <h2>How to read a comparison</h2>

          <p>
            A useful comparison starts with the underlying metrics rather than a
            single highlighted value.
          </p>

          <ol className='compare-developers-client__steps'>
            <li>
              <div>
                <strong>Check the metric.</strong>

                <span>Identify exactly what the comparison is measuring.</span>
              </div>
            </li>

            <li>
              <div>
                <strong>Review both values.</strong>

                <span>
                  Look at the underlying numbers before considering the
                  percentage difference.
                </span>
              </div>
            </li>

            <li>
              <div>
                <strong>Inspect the timeline.</strong>

                <span>
                  Contribution patterns can provide context that a total cannot.
                </span>
              </div>
            </li>

            <li>
              <div>
                <strong>Check repository context.</strong>

                <span>
                  Stars, forks, languages, and repository activity describe
                  different aspects of a profile.
                </span>
              </div>
            </li>
          </ol>
        </section>

        <section id='authentication'>
          <h2>Authentication requirements</h2>

          <p>
            Basic GitHub profile exploration can be performed without signing
            in. GitScope requires authentication for features that need an
            authenticated user context, including developer comparison.
          </p>

          <DocsCallout type='tip'>
            If comparison is unavailable, sign in and try again. GitScope
            protects authenticated features rather than redirecting every
            profile exploration through authentication.
          </DocsCallout>
        </section>

        <section id='next-steps'>
          <h2>Next steps</h2>

          <p>
            After comparing developers, continue with the analytics
            documentation to understand the individual metrics in more detail.
          </p>

          <ul>
            <li>
              Explore GitHub Analytics to understand profile-level analytics.
            </li>

            <li>
              Explore Repository Insights to understand individual projects.
            </li>

            <li>Explore Contributions to understand activity over time.</li>
          </ul>
        </section>
      </DocsArticle>
    </main>
  );
};

export default CompareDevelopersClient;
