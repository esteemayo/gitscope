'use client';

import DocsArticle from './DocsArticle';
import ShareStep from './ShareStep';
import DocsCallout from './DocsCallout';
import ExportCard from './ExportCard';

import '../../styles/components/docs/ExportSharingClient.scss';

const ExportSharingClient = () => {
  return (
    <main className='export-sharing-client'>
      <DocsArticle
        category='Features'
        title='Export & Sharing'
        description='Capture GitScope analytics in a form that is easier to save, reference, present, or share with others.'
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
            <ExportCard
              title='Analytics export'
              description='Capture relevant analytics from the current view for later reference.'
              accentColor='#8b5cf6'
              items={[
                'Profile analytics',
                'Repository metrics',
                'Contribution data',
              ]}
            />

            <ExportCard
              title='Comparison export'
              description='Preserve information from a developer comparison for review or reference.'
              accentColor='#06b6d4'
              items={[
                'Compared profiles',
                'Metric differences',
                'Comparison context',
              ]}
            />

            <ExportCard
              title='Repository data'
              description='Keep useful repository-level information outside the live dashboard.'
              accentColor='#f59e0b'
              items={[
                'Repository metrics',
                'Language information',
                'Activity context',
              ]}
            />

            <ExportCard
              title='Shared analytics'
              description='Share a useful analytics view without requiring the recipient to recreate the analysis.'
              accentColor='#22c55e'
              items={[
                'Profile context',
                'Relevant metrics',
                'Analytics snapshot',
              ]}
            />
          </div>
        </section>

        <section id='sharing'>
          <h2>Sharing analytics</h2>

          <p>
            Sharing allows analytics to be communicated without turning the
            dashboard into the final destination for every reader.
          </p>

          <div className='export-sharing-client__share-flow'>
            <ShareStep
              number='01'
              title='Analyze'
              description='Open the GitHub profile, repository, or comparison you want to share.'
              accentColor='#8b5cf6'
            />

            <ShareStep
              number='02'
              title='Review'
              description='Check that the visible analytics provide the context you want other people to see.'
              accentColor='#06b6d4'
            />

            <ShareStep
              number='03'
              title='Share'
              description='Use the available sharing mechanism to make the analytics accessible to the recipient.'
              accentColor='#22c55e'
            />
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
            <div
              className='export-sharing-client__context-item'
              style={
                {
                  '--accent-color': '#8b5cf6',
                } as React.CSSProperties
              }
            >
              <span>Subject</span>

              <strong>Who or what is being analyzed?</strong>
            </div>

            <div
              className='export-sharing-client__context-item'
              style={
                {
                  '--accent-color': '#06b6d4',
                } as React.CSSProperties
              }
            >
              <span>Metrics</span>

              <strong>Which analytics are being presented?</strong>
            </div>

            <div
              className='export-sharing-client__context-item'
              style={
                {
                  '--accent-color': '#f59e0b',
                } as React.CSSProperties
              }
            >
              <span>Time</span>

              <strong>When was the data generated or viewed?</strong>
            </div>
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
            <article
              className='export-sharing-client__comparison-card'
              style={
                {
                  '--accent-color': '#06b6d4',
                } as React.CSSProperties
              }
            >
              <span>Live analytics</span>

              <ul>
                <li>Reflects currently available data</li>

                <li>Can change as GitHub activity changes</li>

                <li>Provides the interactive GitScope experience</li>
              </ul>
            </article>

            <article
              className='export-sharing-client__comparison-card'
              style={
                {
                  '--accent-color': '#8b5cf6',
                } as React.CSSProperties
              }
            >
              <span>Exported information</span>

              <ul>
                <li>Represents data captured at a point in time</li>

                <li>Can be stored or referenced separately</li>

                <li>May become outdated as source data changes</li>
              </ul>
            </article>
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
            <li>
              <div>
                <strong>Review before sharing.</strong>

                <span>
                  Confirm that the analytics and profile are the ones you intend
                  to share.
                </span>
              </div>
            </li>

            <li>
              <div>
                <strong>Include context.</strong>

                <span>
                  Explain what the metrics represent and when the data was
                  captured.
                </span>
              </div>
            </li>

            <li>
              <div>
                <strong>Check freshness.</strong>

                <span>
                  Revisit the source when the accuracy of current activity
                  matters.
                </span>
              </div>
            </li>

            <li>
              <div>
                <strong>Share intentionally.</strong>

                <span>
                  Consider who can access the shared information and why they
                  need it.
                </span>
              </div>
            </li>
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
