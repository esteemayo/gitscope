'use client';

import DocsArticle from '@/components/docs/DocsArticle';
import DocsFeatureCard from '@/components/docs/DocsFeatureCard';
import DocsCallout from '@/components/docs/DocsCallout';
import DocsFeatureItem from '@/components/docs/DocsFeatureItem';

import * as data from '@/data/docs/guides/analyze-profile.data';
import '../../../styles/components/docs/guides/AnalyzeProfileClient.scss';

const AnalyzeProfileClient = () => {
  return (
    <main className='analyze-profile-client'>
      <DocsArticle
        category='Guides'
        title='Analyze a Profile'
        description='Learn how to use GitScope to explore a GitHub developer profile and its available analytics.'
        previous={{
          title: 'Privacy',
          href: '/documentation/authentication/privacy',
        }}
        next={{
          title: 'Compare Developers',
          href: '/documentation/guides/compare-developers',
        }}
      >
        <section id='overview'>
          <h2>Overview</h2>

          <p>
            GitScope lets you explore a GitHub profile through a combination of
            profile information, repository analytics, language data, and
            contribution activity.
          </p>

          <p>
            This guide walks through a typical profile analysis workflow, from
            finding a GitHub user to exploring the available analytics.
          </p>

          <DocsCallout type='note'>
            GitScope analytics are based on the GitHub data available to the
            application. The information shown can vary depending on the
            profile, repository visibility, GitHub API availability, and
            authentication state.
          </DocsCallout>
        </section>

        <section id='find-a-github-profile'>
          <h2>Find a GitHub profile</h2>

          <p>
            Start by searching for the GitHub username you want to analyze.
            GitScope uses the username to retrieve the corresponding GitHub
            profile and available analytics data.
          </p>

          <div className='analyze-profile-client__grid'>
            {data.githubProfiles.map((profile) => (
              <DocsFeatureCard key={profile.title} {...profile} />
            ))}
          </div>
        </section>

        <section id='review-the-profile-overview'>
          <h2>Review the profile overview</h2>

          <p>
            Once a profile is loaded, begin with the overview. It provides
            context about the developer before you move into the detailed
            analytics.
          </p>

          <div className='analyze-profile-client__list'>
            {data.profileOverview.map((profile) => (
              <DocsFeatureItem key={profile.title} {...profile} />
            ))}
          </div>
        </section>

        <section id='explore-profile-analytics'>
          <h2>Explore profile analytics</h2>

          <p>
            After reviewing the overview, explore the different analytics areas
            available for the profile.
          </p>

          <div className='analyze-profile-client__grid'>
            {data.analysisAreas.map((area) => (
              <DocsFeatureCard key={area.title} {...area} />
            ))}
          </div>
        </section>

        <section id='explore-repositories'>
          <h2>Explore repositories</h2>

          <p>
            Repository analytics provide a more detailed view of the projects
            associated with a profile. Use the available sorting and exploration
            controls to focus on repositories that match your analysis.
          </p>

          <div className='analyze-profile-client__list'>
            {data.exploreRepositories.map((repository) => (
              <DocsFeatureItem key={repository.title} {...repository} />
            ))}
          </div>
        </section>

        <section id='read-contribution-activity'>
          <h2>Read contribution activity</h2>

          <p>
            Contribution analytics help you examine development activity over
            time. Look at the timeline as a whole instead of treating a single
            period as a complete representation of the developer&apos;s
            activity.
          </p>

          <DocsCallout type='tip'>
            Contribution activity represents GitHub activity available to
            GitScope. It should be interpreted alongside repository and profile
            context.
          </DocsCallout>
        </section>

        <section id='understand-language-analytics'>
          <h2>Understand language analytics</h2>

          <p>
            Language analytics show the programming languages represented in the
            repositories available to GitScope.
          </p>

          <div className='analyze-profile-client__list'>
            {data.languageAnalytics.map((analytic) => (
              <DocsFeatureItem key={analytic.title} {...analytic} />
            ))}
          </div>
        </section>

        <section id='use-the-analysis-workflow'>
          <h2>Use the analysis workflow</h2>

          <p>
            A consistent workflow makes it easier to move from a broad profile
            view to more detailed investigation.
          </p>

          <div className='analyze-profile-client__list'>
            {data.workflowSteps.map((step) => (
              <DocsFeatureItem key={step.title} {...step} />
            ))}
          </div>
        </section>

        <section id='exploration-tips'>
          <h2>Exploration tips</h2>

          <p>
            Use the available analytics together to build context around a
            profile rather than relying on one isolated statistic.
          </p>

          <div className='analyze-profile-client__list'>
            {data.explorationTips.map((tip) => (
              <DocsFeatureItem key={tip.title} {...tip} />
            ))}
          </div>
        </section>

        <section id='data-context'>
          <h2>Data context</h2>

          <p>
            GitScope does not create GitHub activity. It presents and analyzes
            data retrieved from GitHub and the data sources available to the
            application.
          </p>

          <p>
            Results can therefore change as GitHub profiles and repositories
            change. Some information may also be unavailable because of
            repository visibility, API limitations, permissions, or other
            data-access constraints.
          </p>

          <DocsCallout type='warning'>
            Treat analytics as contextual information. A GitHub profile is only
            one representation of a developer&apos;s work and should not be
            interpreted independently of the underlying data.
          </DocsCallout>
        </section>

        <section id='next-steps'>
          <h2>Next steps</h2>

          <p>
            Once you are comfortable analyzing individual profiles, continue
            with Compare Developers to explore two GitHub profiles side by side.
          </p>
        </section>
      </DocsArticle>
    </main>
  );
};

export default AnalyzeProfileClient;
