'use client';

import DocsFeatureCard from '../../DocsFeatureCard';
import DocsArticle from '../../DocsArticle';
import DocsFeatureItem from '../../DocsFeatureItem';
import DocsCallout from '../../DocsCallout';

import * as data from '@/data/docs/analytics/contribution.data';
import '../../../../styles/components/docs/analytics/contribution/ContributionAnalyticsClient.scss';

const ContributionAnalyticsClient = () => {
  return (
    <main className='contribution-analytics-client'>
      <DocsArticle
        category='Analytics'
        title='Contribution Analytics'
        description='Understand how GitScope organizes GitHub contribution activity into timelines, consistency signals, and activity patterns.'
        previous={{
          title: 'Language Analytics',
          href: '/documentation/analytics/language-analytics',
        }}
        next={{
          title: 'GitHub Authentication',
          href: '/documentation/authentication',
        }}
      >
        <section id='overview'>
          <h2>Overview</h2>

          <p>
            Contribution analytics provide a view of development activity over
            time. GitScope uses available GitHub contribution data to make
            activity patterns easier to explore.
          </p>

          <p>
            Instead of focusing only on a single total, contribution analytics
            help you examine how activity is distributed across the available
            timeline.
          </p>
        </section>

        <section id='contribution-analytics-areas'>
          <h2>Contribution analytics areas</h2>

          <div className='contribution-analytics-client__grid'>
            {data.contributionAnalytics.map((analytic) => (
              <DocsFeatureCard key={analytic.title} {...analytic} />
            ))}
          </div>
        </section>

        <section id='contribution-data'>
          <h2>Contribution data</h2>

          <p>
            Contribution analytics are based on the GitHub contribution data
            available to GitScope for the profile being analyzed.
          </p>

          <p>
            The data provides a historical view of observable contribution
            activity and can be used alongside repository and profile metrics
            for additional context.
          </p>

          <DocsCallout type='note'>
            Contribution activity represents observable GitHub activity. It
            should not be treated as a complete record of every form of
            development work.
          </DocsCallout>
        </section>

        <section id='contribution-timeline'>
          <h2>Contribution timeline</h2>

          <p>
            The contribution timeline shows how activity changes across the
            available periods.
          </p>

          <div className='contribution-analytics-client__items'>
            {data.contributionTimeline.map((timeline) => (
              <DocsFeatureItem key={timeline.title} {...timeline} />
            ))}
          </div>
        </section>

        <section id='consistency'>
          <h2>Consistency</h2>

          <p>
            Consistency describes how regularly contribution activity appears
            across the analyzed timeline.
          </p>

          <p>
            GitScope can use contribution patterns to highlight recurring
            activity without treating consistency as a measure of developer
            quality or skill.
          </p>

          <div className='contribution-analytics-client__items'>
            {data.contributionConsistencies.map((consistency) => (
              <DocsFeatureItem key={consistency.title} {...consistency} />
            ))}
          </div>
        </section>

        <section id='peak-activity'>
          <h2>Peak activity</h2>

          <p>
            Peak activity identifies periods with the highest observed
            contribution activity within the analyzed data.
          </p>

          <p>
            A peak can provide useful context when exploring a developer&apos;s
            activity history, but it represents a point or period in time rather
            than a complete picture of development work.
          </p>

          <DocsFeatureCard {...data.contributionPeakActivity} />
        </section>

        <section id='reading-contribution-activity'>
          <h2>Reading contribution activity</h2>

          <p>
            Contribution analytics are most useful when you look at the timeline
            as a whole rather than focusing on a single high or low point.
          </p>

          <div className='contribution-analytics-client__grid contribution-analytics-client__grid--compact'>
            {data.contributionActivities.map((activity) => (
              <DocsFeatureCard key={activity.title} {...activity} />
            ))}
          </div>
        </section>

        <section id='interpreting-contribution-analytics'>
          <h2>Interpreting contribution analytics</h2>

          <p>
            Contribution activity can vary for many reasons. A lower activity
            period does not necessarily indicate reduced development work, and a
            higher activity period does not by itself establish project impact
            or developer proficiency.
          </p>

          <p>
            Use contribution analytics as one part of the broader GitScope
            profile rather than as a standalone assessment.
          </p>
        </section>

        <section id='contribution-context'>
          <h2>Contribution context</h2>

          <DocsCallout type='warning'>
            Contribution analytics depend on the GitHub data available to
            GitScope and the time period represented by that data. Activity can
            change as new contributions are recorded.
          </DocsCallout>

          <p>
            GitHub activity also represents only the work that is visible
            through the relevant GitHub contribution data. Development work
            performed elsewhere may not appear in these analytics.
          </p>
        </section>

        <section id='next-steps'>
          <h2>Next steps</h2>

          <p>
            Continue with GitHub Authentication to understand how GitScope
            connects to GitHub, handles authorization, and uses authenticated
            access.
          </p>
        </section>
      </DocsArticle>
    </main>
  );
};

export default ContributionAnalyticsClient;
