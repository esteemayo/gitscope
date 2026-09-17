'use client';

import DocsArticle from './DocsArticle';
import DocsCallout from './DocsCallout';

import '../../styles/components/docs/HowGitScopeWorksClient.scss';

const HowGitScopeWorksClient = () => {
  return (
    <DocsArticle
      category='Introduction'
      title='How GitScope Works'
      description='Understand the main flow from GitHub data to the analytics experience.'
      previous={{
        title: 'Getting Started',
        href: '/documentation',
      }}
      next={{
        title: 'Key Concepts',
        href: '/documentation/introduction/key-concepts',
      }}
    >
      <section id='core-pipeline'>
        <h2>The core pipeline</h2>

        <p>
          GitScope follows a simple data flow. GitHub provides the source data,
          GitScope processes the relevant information, and the interface
          presents the resulting analytics.
        </p>

        <div className='docs-flow'>
          <div
            className='docs-flow__wrapper'
            style={
              {
                '--accent-color': '#8b5cf6',
              } as React.CSSProperties
            }
          >
            <span className='docs-flow__wrapper--number'>01</span>

            <strong className='docs-flow__wrapper--title'>GitHub</strong>

            <p className='docs-flow__wrapper--description'>
              Source profile, repository and activity data.
            </p>
          </div>

          <div
            className='docs-flow__wrapper'
            style={
              {
                '--accent-color': '#06B6D4',
              } as React.CSSProperties
            }
          >
            <span className='docs-flow__wrapper--number'>02</span>

            <strong className='docs-flow__wrapper--title'>Data layer</strong>

            <p className='docs-flow__wrapper--description'>
              Retrieve and organize the required data.
            </p>
          </div>

          <div
            className='docs-flow__wrapper'
            style={
              {
                '--accent-color': '#F59E0B',
              } as React.CSSProperties
            }
          >
            <span className='docs-flow__wrapper--number'>03</span>

            <strong className='docs-flow__wrapper--title'>Analytics</strong>

            <p className='docs-flow__wrapper--description'>
              Transform raw information into useful metrics.
            </p>
          </div>

          <div
            className='docs-flow__wrapper'
            style={
              {
                '--accent-color': '#22C55E',
              } as React.CSSProperties
            }
          >
            <span className='docs-flow__wrapper--number'>04</span>

            <strong className='docs-flow__wrapper--title'>Interface</strong>

            <p className='docs-flow__wrapper--description'>
              Present the results through the GitScope UI.
            </p>
          </div>
        </div>
      </section>

      <section id='github-data'>
        <h2>GitHub data</h2>

        <p>
          GitScope relies on GitHub as the primary source for profile and
          repository information.
        </p>
      </section>

      <section id='data-processing'>
        <h2>Data processing</h2>

        <p>
          Raw GitHub information is organized into structures that are easier
          for the analytics interface to consume.
        </p>

        <DocsCallout type='tip' title='Focus on useful metrics'>
          GitScope focuses the interface on metrics that help developers
          understand GitHub activity rather than exposing raw API responses.
        </DocsCallout>
      </section>

      <section id='analytics-layer'>
        <h2>Analytics layer</h2>

        <p>
          The analytics layer combines relevant data into metrics and
          visualizations such as repository rankings, language distributions and
          contribution patterns.
        </p>
      </section>

      <section id='presentation-layer'>
        <h2>Presentation layer</h2>

        <p>
          The final layer presents the processed data through GitScope&apos;s
          dashboard and profile experiences.
        </p>
      </section>

      <section id='why-this-architecture-matters'>
        <h2>Why this architecture matters</h2>

        <p>
          Separating data retrieval, processing and presentation keeps the
          system easier to reason about and gives each layer a focused
          responsibility.
        </p>
      </section>
    </DocsArticle>
  );
};

export default HowGitScopeWorksClient;
