'use client';

import DocsFeatureCard from '../DocsFeatureCard';
import DocsArticle from '../DocsArticle';
import DocsFeatureItem from '../DocsFeatureItem';
import DocsCallout from '../DocsCallout';

import * as data from '@/data/docs/guides/compare-developers-guide.data';
import '../../../styles/components/docs/guides/CompareDevelopersGuideClient.scss';

const CompareDevelopersGuideClient = () => {
  return (
    <main className='compare-developers-guide-client'>
      <DocsArticle
        category='Guides'
        title='Compare Developers'
        description="Learn how to compare two GitHub developer profiles using GitScope's comparison analytics."
        previous={{
          title: 'Analyze a Profile',
          href: '/documentation/guides/analyze-profile',
        }}
        next={{
          title: 'Export Analytics',
          href: '/documentation/guides/export-analytics',
        }}
      >
        <div className='compare-developers'>
          <section id='overview'>
            <h2>Overview</h2>

            <p>
              GitScope lets you compare two GitHub profiles using shared
              profile, repository, language, and contribution metrics.
            </p>

            <p>
              The comparison view is designed to place related data side by side
              so you can inspect similarities and differences without switching
              repeatedly between profiles.
            </p>

            <DocsCallout type='note'>
              A comparison reflects the GitHub data available to GitScope at the
              time of analysis. Differences should be interpreted in the context
              of the underlying data.
            </DocsCallout>
          </section>

          <section id='start-a-comparison'>
            <h2>Start a comparison</h2>

            <p>
              Begin by selecting the two GitHub usernames you want to compare.
              Both profiles are then used as the input for the comparison view.
            </p>

            <div className='compare-developers-guide-client__grid'>
              {data.comparisonStart.map((start) => (
                <DocsFeatureCard key={start.title} {...start} />
              ))}
            </div>
          </section>

          <section id='comparison-areas'>
            <h2>Comparison areas</h2>

            <p>
              GitScope organizes comparison data into several areas. The exact
              information shown depends on the data available for each profile.
            </p>

            <div className='compare-developers-guide-client__grid'>
              {data.comparisonAreas.map((area) => (
                <DocsFeatureCard key={area.title} {...area} />
              ))}
            </div>
          </section>

          <section id='review-profile-metrics'>
            <h2>Review profile metrics</h2>

            <p>
              Start with profile-level metrics to establish basic context for
              both developers.
            </p>

            <div className='compare-developers-guide-client__list'>
              {data.comparisonMetrics.map((metric) => (
                <DocsFeatureItem key={metric.title} {...metric} />
              ))}
            </div>
          </section>

          <section id='compare-repositories'>
            <h2>Compare repositories</h2>

            <p>
              Repository metrics provide project-level context for the
              comparison. They can help you examine how the available
              repositories differ between the two profiles.
            </p>

            <div className='compare-developers-guide-client__list'>
              {data.comparisonRepositories.map((repository) => (
                <DocsFeatureItem key={repository.title} {...repository} />
              ))}
            </div>
          </section>

          <section id='compare-contribution-activity'>
            <h2>Compare contribution activity</h2>

            <p>
              Contribution analytics provide a time-based view of activity for
              both profiles. Examine the broader pattern instead of focusing
              only on a single point in the timeline.
            </p>

            <DocsCallout type='tip'>
              Contribution activity can vary significantly over time. Use the
              available timeline, consistency, and peak-activity information
              together when interpreting a comparison.
            </DocsCallout>
          </section>

          <section id='compare-languages'>
            <h2>Compare languages</h2>

            <p>
              Language analytics allow you to examine the programming languages
              represented across the repositories associated with each profile.
            </p>

            <div className='compare-developers-guide-client__list'>
              {data.comparisonLanguages.map((language) => (
                <DocsFeatureItem key={language.title} {...language} />
              ))}
            </div>
          </section>

          <section id='understand-relative-differences'>
            <h2>Understand relative differences</h2>

            <p>
              GitScope can present relative differences between comparable
              values. These differences show how the available metrics relate to
              each other, rather than creating an independent assessment of
              either developer.
            </p>

            <div className='compare-developers-guide-client__grid'>
              {data.comparisonDifference.map((difference) => (
                <DocsFeatureCard key={difference.title} {...difference} />
              ))}
            </div>
          </section>

          <section id='use-comparison-highlights'>
            <h2>Use comparison highlights</h2>

            <p>
              Comparison highlights summarize notable differences within the
              available data. Use them as navigation aids, then inspect the
              underlying metrics before drawing conclusions.
            </p>

            <div className='compare-developers-guide-client__list'>
              {data.comparisonHighlights.map((highlight) => (
                <DocsFeatureItem key={highlight.title} {...highlight} />
              ))}
            </div>
          </section>

          <section id='comparison-workflow'>
            <h2>Comparison workflow</h2>

            <p>
              A consistent workflow helps keep comparisons focused and
              reproducible.
            </p>

            <div className='compare-developers-guide-client__list'>
              {data.comparisonWorkflow.map((step) => (
                <DocsFeatureItem key={step.title} {...step} />
              ))}
            </div>
          </section>

          <section id='comparison-principles'>
            <h2>Comparison principles</h2>

            <p>
              Keep the following principles in mind when interpreting a GitScope
              comparison.
            </p>

            <div className='compare-developers-guide-client__list'>
              {data.comparisonPrinciples.map((principle) => (
                <DocsFeatureItem key={principle.title} {...principle} />
              ))}
            </div>
          </section>

          <section id='authentication-requirements'>
            <h2>Authentication requirements</h2>

            <p>
              GitScope can provide public profile search and analytics without
              requiring authentication, while some comparison functionality
              requires an authenticated account.
            </p>

            <DocsCallout type='note'>
              The exact authentication requirements can change as GitScope
              evolves. If a comparison feature prompts you to sign in, complete
              GitHub authentication before continuing.
            </DocsCallout>
          </section>

          <section id='data-context'>
            <h2>Data context</h2>

            <p>
              Comparisons are based on the GitHub information available to
              GitScope. Repository visibility, GitHub API limitations,
              permissions, and changes to either profile can affect the
              resulting comparison.
            </p>

            <p>
              A numerical difference should therefore be treated as a
              description of the available data, not as a complete description
              of either developer.
            </p>
          </section>

          <section id='next-steps'>
            <h2>Next steps</h2>

            <p>
              After comparing profiles, continue with Export Analytics to learn
              how to preserve or export the analytics generated by GitScope.
            </p>
          </section>
        </div>
      </DocsArticle>
    </main>
  );
};

export default CompareDevelopersGuideClient;
