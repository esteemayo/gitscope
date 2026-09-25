'use client';

import DocsArticle from './DocsArticle';
import ShareStep from './ShareStep';
import DocsFeatureCard from './DocsFeatureCard';
import DocsCallout from './DocsCallout';

import * as data from '@/data/docs/export-sharing.data';
import '../../styles/components/docs/ExportSharingClient.scss';

const ExportSharingClient = () => {
  return (
    <main className='export-sharing-client'>
      <DocsArticle
        category='Features'
        title='Export & Sharing'
        description='Capture GitScope analytics in a form that is easier to save, reference, present, or share with others.'
        previous={{
          title: 'Contributions',
          href: '/documentation/features/contributions',
        }}
        next={{
          title: 'Overview',
          href: '/documentation/analytics',
        }}
      >
        <section id='overview'>
          <h2>Overview</h2>

          <p>
            GitScope analytics can be useful beyond the dashboard itself. Export
            and sharing features make it easier to take the insights from a
            profile or comparison and use them elsewhere.
          </p>

          <p>
            The exact export and sharing options depend on the analytics view
            and the features available in the current GitScope release.
          </p>

          <DocsCallout type='note'>
            Exported information represents the GitHub data available when the
            analytics were generated. A profile may change after an export or
            shared view is created.
          </DocsCallout>
        </section>

        <section id='export-options'>
          <h2>Export options</h2>

          <p>
            Export functionality is intended to make analytics portable without
            requiring someone else to navigate the complete GitScope interface.
          </p>

          <div className='export-sharing-client__grid'>
            {data.exportOptions.map((option) => (
              <DocsFeatureCard key={option.title} {...option} />
            ))}
          </div>
        </section>

        <section id='sharing'>
          <h2>Sharing analytics</h2>

          <p>
            Sharing allows analytics to be communicated without turning the
            dashboard into the final destination for every reader.
          </p>

          <div className='export-sharing-client__share-flow'>
            {data.sharingAnalytics.map((analytic, index) => (
              <ShareStep key={analytic.title} {...analytic} index={index} />
            ))}
          </div>
        </section>

        <section id='shared-context'>
          <h2>Shared context</h2>

          <p>
            A useful shared analytics view should make its subject clear. The
            recipient should be able to understand which profile, repository, or
            comparison the information represents.
          </p>

          <div className='export-sharing-client__context'>
            {data.sharedContexts.map((context) => {
              const { title, description, accentColor } = context;

              return (
                <div
                  key={title.toLowerCase()}
                  className='export-sharing-client__context-item'
                  style={
                    {
                      '--accent-color': accentColor,
                    } as React.CSSProperties
                  }
                >
                  <span>{title}</span>

                  <strong>{description}</strong>
                </div>
              );
            })}
          </div>
        </section>

        <section id='export-vs-live'>
          <h2>Exported data vs live analytics</h2>

          <p>
            Exported information should be treated as a representation of the
            analytics at a particular point in time. Live GitHub data can change
            after the export has been generated.
          </p>

          <div className='export-sharing-client__comparison'>
            {data.exportComparisons.map((comparison) => {
              const { id, label, items, accentColor } = comparison;

              return (
                <article
                  key={id}
                  className='export-sharing-client__comparison-card'
                  style={
                    {
                      '--accent-color': accentColor,
                    } as React.CSSProperties
                  }
                >
                  <span>{label}</span>

                  <ul>
                    {items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>

          <DocsCallout type='warning'>
            When using exported analytics for reporting or documentation,
            consider checking the source profile again if the freshness of the
            data matters.
          </DocsCallout>
        </section>

        <section id='privacy'>
          <h2>Privacy and sharing</h2>

          <p>
            Only share analytics that you are comfortable making available to
            the intended audience. Public GitHub information can still provide
            useful context about a developer, repository, or organization.
          </p>

          <p>
            Avoid treating an export as permission to redistribute information
            that was not intended for your audience. Review the relevant GitHub
            and GitScope privacy expectations before sharing analytics more
            broadly.
          </p>
        </section>

        <section id='best-practices'>
          <h2>Sharing best practices</h2>

          <ol className='export-sharing-client__steps'>
            {data.sharingSteps.map((step) => {
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
            Now that you understand how GitScope analytics can be exported and
            shared, continue with the analytics documentation for a deeper look
            at the underlying metrics.
          </p>

          <ul>
            <li>
              Explore Repository Metrics to understand repository-level data.
            </li>

            <li>Explore Language Analytics to understand technology usage.</li>

            <li>
              Explore Contribution Analytics to understand activity over time.
            </li>
          </ul>
        </section>
      </DocsArticle>
    </main>
  );
};

export default ExportSharingClient;
