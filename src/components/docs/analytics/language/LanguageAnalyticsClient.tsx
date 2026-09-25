'use client';

import DocsArticle from '../../DocsArticle';

import DocsCallout from '../../DocsCallout';

import * as data from '@/data/docs/analytics/language.data';
import '../../../../styles/components/docs/analytics/language/LanguageAnalyticsClient.scss';
import DocsFeatureCard from '../../DocsFeatureCard';
import DocsFeatureItem from '../../DocsFeatureItem';

const LanguageAnalyticsClient = () => {
  return (
    <main className='language-analytics-client'>
      <DocsArticle
        category='Analytics'
        title='Language Analytics'
        description='Explore the programming languages represented across a GitHub profile and understand how GitScope organizes language data.'
        previous={{
          title: 'Repository Metrics',
          href: '/documentation/analytics/repository-metrics',
        }}
        next={{
          title: 'Contribution Analytics',
          href: '/documentation/analytics/contribution-analytics',
        }}
      >
        <section>
          <h2>Overview</h2>

          <p>
            Language analytics provide a high-level view of the programming
            languages represented across a developer&apos;s public repositories.
          </p>

          <p>
            GitScope uses repository language information to help you understand
            the technologies represented across a profile without requiring you
            to inspect every repository individually.
          </p>
        </section>

        <section>
          <h2>Language analytics areas</h2>

          <div className='language-analytics-client__grid'>
            {data.languageAnalyticsArea.map((analytic) => (
              <DocsFeatureCard key={analytic.title} {...analytic} />
            ))}
          </div>
        </section>

        <section id='language-distribution'>
          <h2>Language distribution</h2>

          <p>
            Language distribution summarizes the programming languages detected
            across the repositories being analyzed.
          </p>

          <p>
            This gives you a quick way to identify the technologies that appear
            throughout a profile and provides a starting point for deeper
            repository exploration.
          </p>
        </section>

        <section id='language-composition'>
          <h2>Language composition</h2>

          <p>
            Language composition describes how the available repository language
            data is distributed across technologies.
          </p>

          <div className='language-analytics-client__items'>
            {data.languageCompositions.map((composition) => (
              <DocsFeatureItem key={composition.title} {...composition} />
            ))}
          </div>
        </section>

        <section id='repository-language-data'>
          <h2>Repository language data</h2>

          <p>
            Language analytics are connected to repository data. A language
            shown in the analytics can be traced back to the repositories where
            it is represented.
          </p>

          <p>
            This relationship lets you move from a profile-level technology
            overview into individual repositories for additional context.
          </p>

          <DocsCallout type='note'>
            Language analytics describe the language data available from the
            analyzed repositories. They are not intended to represent a
            developer&apos;s complete technical skill set.
          </DocsCallout>
        </section>

        <section id='language-comparison'>
          <h2>Language comparison</h2>

          <p>
            Comparing languages makes it easier to identify differences in their
            representation across a profile.
          </p>

          <div className='language-analytics-client__items'>
            {data.languageComparison.map((comparison) => (
              <DocsFeatureItem key={comparison.title} {...comparison} />
            ))}
          </div>
        </section>

        <section id='exploring-languages-through-repositories'>
          <h2>Exploring languages through repositories</h2>

          <p>
            Language analytics become more useful when combined with repository
            exploration. After identifying a language, you can inspect the
            repositories associated with it to understand the project context.
          </p>

          <div className='language-analytics-client__steps'>
            {data.languageSteps.map((step) => (
              <DocsFeatureItem key={step.title} {...step} />
            ))}
          </div>
        </section>

        <section id='technology-patterns'>
          <h2>Technology patterns</h2>

          <p>
            Language distribution can reveal recurring technologies across a
            developer&apos;s public projects. These patterns can help you
            quickly understand the technical composition of a profile.
          </p>

          <p>
            However, language presence alone does not establish proficiency,
            experience level, or production expertise.
          </p>
        </section>

        <section id='reading-language-analytics'>
          <h2>Reading language analytics</h2>

          <p>
            Start with the overall distribution, then move into the repositories
            contributing to each language. This provides more context than
            interpreting a single percentage or chart segment in isolation.
          </p>

          <div className='language-analytics-client__grid language-analytics-client__grid--compact'>
            {data.readingLanguageAnalytics.map((analytic) => (
              <DocsFeatureCard key={analytic.title} {...analytic} />
            ))}
          </div>
        </section>

        <section id='data-context'>
          <h2>Data context</h2>

          <DocsCallout type='warning'>
            Language analytics depend on the repository data available to
            GitScope. GitHub repository contents and language information can
            change over time.
          </DocsCallout>

          <p>
            The analytics should therefore be treated as a snapshot of the
            available repository data at the time of analysis.
          </p>
        </section>

        <section id='next-steps'>
          <h2>Next steps</h2>

          <p>
            Continue with Contribution Analytics to understand how GitScope
            organizes contribution activity and development patterns over time.
          </p>
        </section>
      </DocsArticle>
    </main>
  );
};

export default LanguageAnalyticsClient;
