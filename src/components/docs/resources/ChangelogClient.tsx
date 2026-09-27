'use client';

import DocsFeatureCard from '../DocsFeatureCard';
import DocsArticle from '../DocsArticle';
import DocsFeatureItem from '../DocsFeatureItem';
import DocsCallout from '../DocsCallout';

import * as data from '@/data/docs/resources/change-log.data';
import '../../../styles/components/docs/resources/ChangelogClient.scss';

const ChangelogClient = () => {
  return (
    <DocsArticle
      category='Resources'
      title='Changelog'
      description='Track documented changes, improvements, fixes, and new capabilities across GitScope.'
      previous={{
        title: 'FAQ',
        href: '/documentation/resources/faq',
      }}
      next={{
        title: 'Roadmap',
        href: '/documentation/resources/roadmap',
      }}
    >
      <div className='changelog-client'>
        <section id='overview'>
          <h2>Overview</h2>

          <p>
            The GitScope changelog documents meaningful changes made throughout
            the project. It provides a concise history of new features,
            improvements, fixes, and documentation updates.
          </p>

          <DocsCallout type='note'>
            The changelog focuses on changes that are useful to understand when
            working with or using GitScope.
          </DocsCallout>
        </section>

        <section id='what-the-changelog-covers'>
          <h2>What the changelog covers</h2>

          <div className='changelog-client__grid'>
            {data.changelogCovers.map((cover) => (
              <DocsFeatureCard key={cover.title} {...cover} />
            ))}
          </div>
        </section>

        <section id='recent-updates'>
          <h2>Recent updates</h2>

          <p>
            Updates are grouped by the type of change they introduce. This makes
            it easier to understand what changed without requiring knowledge of
            the project&apos;s internal development process.
          </p>

          <div className='changelog-client__list'>
            {data.recentUpdates.map((update) => (
              <DocsFeatureItem key={update.title} {...update} />
            ))}
          </div>
        </section>

        <section id='feature-changes'>
          <h2>Feature changes</h2>

          <p>
            Feature entries describe capabilities that have been introduced or
            significantly expanded. They help you understand when a particular
            workflow became available or changed substantially.
          </p>
        </section>

        <section id='improvements'>
          <h2>Improvements</h2>

          <p>
            Improvement entries describe changes to existing functionality.
            These can include interface refinements, performance improvements,
            workflow changes, accessibility updates, and developer experience
            enhancements.
          </p>
        </section>

        <section id='fixes'>
          <h2>Fixes</h2>

          <p>
            Fix entries document resolved issues. They can help explain changes
            in behavior when an earlier implementation produced unexpected
            results.
          </p>
        </section>

        <section id='documentation-updates'>
          <h2>Documentation updates</h2>

          <p>
            Documentation changes are included when they materially improve how
            developers understand or use GitScope. These updates can affect
            guides, API references, authentication documentation, examples, and
            conceptual explanations.
          </p>
        </section>

        <section id='how-to-read-the-changelog'>
          <h2>How to read the changelog</h2>

          <div className='changelog-client__list'>
            {data.readChangelogs.map((item) => (
              <DocsFeatureItem key={item.title} {...item} />
            ))}
          </div>
        </section>

        <section id='release-context'>
          <h2>Release context</h2>

          <p>
            A changelog entry describes a documented project change, but it does
            not necessarily describe every internal development activity. Small
            refactors, dependency changes, and internal implementation details
            may not require a separate changelog entry.
          </p>

          <DocsCallout type='tip'>
            Use the changelog to understand meaningful project evolution. Use
            the documentation itself for the current behavior and usage of
            GitScope.
          </DocsCallout>
        </section>

        <section id='keeping-up-with-changes'>
          <h2>Keeping up with changes</h2>

          <div className='changelog-client__grid'>
            {data.changelogChanges.map((change) => (
              <DocsFeatureCard key={change.title} {...change} />
            ))}
          </div>
        </section>

        <section id='next-steps'>
          <h2>Next steps</h2>

          <p>
            Continue to the Roadmap to explore the project&apos;s planned
            direction, areas of focus, and future development goals.
          </p>
        </section>
      </div>
    </DocsArticle>
  );
};

export default ChangelogClient;
