'use client';

import ConceptCard from './ConceptCard';
import DocsArticle from './DocsArticle';
import DocsCallout from './DocsCallout';

import * as data from '@/data/docs/key-concepts.data';
import '../../styles/components/docs/KeyConceptsClient.scss';

const KeyConceptsClient = () => {
  return (
    <main className='key-concepts-client'>
      <DocsArticle
        category='Introduction'
        title='Key Concepts'
        description='Understand the terminology, metrics, and building blocks used throughout GitScope.'
        previous={{
          title: 'How GitScope Works',
          href: '/documentation/introduction/how-it-works',
        }}
        next={{
          title: 'GitHub Analytics',
          href: '/documentation/features/github-analytics',
        }}
      >
        <section id='overview'>
          <h2>Overview</h2>

          <p>
            GitScope turns GitHub data into structured analytics. To make the
            documentation easier to follow, this page defines the core concepts
            used across the platform.
          </p>

          <p>
            These concepts also explain how GitScope organizes information
            across profiles, repositories, contributions, and comparisons.
          </p>
        </section>

        <section id='developer-profile'>
          <h2>Developer profile</h2>
          <p>
            A developer profile represents the GitHub account being analyzed.
            GitScope uses the profile as the starting point for collecting and
            organizing publicly available GitHub information.
          </p>

          <ConceptCard
            title='GitHub Profile'
            description='The account-level information associated with a GitHub username.'
            accentColor='#4F46E5'
          >
            <ul>
              <li>Username and display name</li>

              <li>Biography and account metadata</li>

              <li>Followers and following</li>

              <li>Public repositories</li>

              <li>Contribution activity</li>
            </ul>
          </ConceptCard>
        </section>

        <section id='repositories'>
          <h2>Repositories</h2>

          <p>
            A repository is an individual GitHub project associated with a
            profile. GitScope analyzes repository metadata to provide a clearer
            view of a developer&apos;s projects.
          </p>

          <div className='key-concepts-client__grid'>
            {data.keyConceptRepositories.map((repository) => (
              <ConceptCard key={repository.id} {...repository} />
            ))}
          </div>

          <DocsCallout type='note'>
            Repository metrics describe observable GitHub activity. They do not
            independently measure code quality, developer skill, or project
            impact.
          </DocsCallout>
        </section>

        <section id='contributions'>
          <h2>Contributions</h2>

          <p>
            Contributions represent activity recorded by GitHub over time.
            GitScope uses contribution data to visualize activity patterns and
            make changes over a selected period easier to understand.
          </p>

          <ConceptCard
            title='Contribution Activity'
            description='A time-based representation of GitHub activity associated with a profile.'
            accentColor='#0EA5E9'
          >
            <p>
              GitScope presents contribution activity through visual
              representations such as contribution calendars and trend charts.
            </p>
          </ConceptCard>

          <DocsCallout type='tip'>
            Contribution activity is best interpreted as a pattern over time
            rather than as a single measure of developer productivity.
          </DocsCallout>
        </section>

        <section id='languages'>
          <h2>Language analytics</h2>

          <p>
            Language analytics show the programming languages detected across a
            developer&apos;s repositories.
          </p>

          <ConceptCard
            title='Language Distribution'
            description='A representation of the programming languages present across analyzed repositories.'
            accentColor='#FA5A7A'
          >
            <p>
              GitScope uses language information to help users understand the
              technical composition of a developer&apos;s public projects.
            </p>
          </ConceptCard>
        </section>

        <section id='analytics'>
          <h2>Analytics</h2>

          <p>
            Analytics are the processed representations of GitHub data that
            GitScope presents through metrics, charts, trends,and summaries.
          </p>

          <div className='key-concepts-client__grid'>
            {data.keyConceptAnalytics.map((concept) => (
              <ConceptCard key={concept.id} {...concept} />
            ))}
          </div>
        </section>

        <section id='profile-comparison'>
          <h2>Profile comparison</h2>

          <p>
            Profile comparison allows two GitHub accounts to be analyzed side by
            side using comparable metrics.
          </p>

          <ConceptCard
            title='Comparison'
            description='A side-by-side analysis of two GitHub profiles using shared metrics and activity data.'
            accentColor='#4C0080'
          >
            <ul>
              <li>Repository counts</li>

              <li>Stars and forks</li>

              <li>Contribution activity</li>

              <li>Language distribution</li>

              <li>Activity trends</li>
            </ul>
          </ConceptCard>

          <DocsCallout type='note'>
            A comparison highlights differences in available GitHub data. It
            should not be treated as a definitive assessment of either
            developer.
          </DocsCallout>
        </section>

        <section id='authenticated-profile'>
          <h2>Authenticated Profile</h2>

          <p>
            An authenticated profile is a GitScope experience connected to a
            user &apos;s GitHub account. Authentication enables features that
            require an identified GitHub user.
          </p>

          <ConceptCard
            title='Authentication'
            description='A GitHub-authorized session that enables account-specific GitScope functionality.'
            accentColor='#EF4444'
          >
            <p>
              Public profile exploration does not require authentication.
              Features that operates on the authenticated user or require
              additional access use the authenticated experience.
            </p>
          </ConceptCard>
        </section>

        <section id='data-flow'>
          <h2>Data flow</h2>

          <p>
            GitScope follows a simple conceptual flow from GitHub data to
            analytics and finally to the user interface.
          </p>

          <div className='key-concepts-client__flow'>
            {data.keyConceptFlow.map((flow) => (
              <ConceptCard key={flow.id} {...flow} />
            ))}
          </div>
        </section>

        <section id='what-to-read-next'>
          <h2>What to read next</h2>

          <p>
            Now that the core terminology is clear, continue with the
            documentation to understand how GitScope processes GitHub data and
            how its individual features work.
          </p>

          <ul>
            <li>
              Read <strong>How GitScope Works</strong> for the application
              architecture and data flow
            </li>

            <li>
              Expore <strong>GitHub Analytics</strong> to learn how profile data
              is visualized.
            </li>

            <li>
              Explore <strong>Repository Insights</strong> to understand
              repository-level metrics.
            </li>

            <li>
              Read <strong>Compare Developers</strong> to learn about profile
              comparisons.
            </li>
          </ul>
        </section>
      </DocsArticle>
    </main>
  );
};

export default KeyConceptsClient;
