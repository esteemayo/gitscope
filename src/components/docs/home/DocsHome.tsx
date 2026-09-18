'use client';

import DocsArticle from '../DocsArticle';
import DocsHero from '../DocsHero';
import DocsCallout from '../DocsCallout';
import DocsFeature from './DocsFeature';
import DocsCodeBlock from '../DocsCodeBlock';

import { docsFeatures } from '@/data/docs/docs-features.data';
import '../../../styles/components/docs/home/DocsHome.scss';

const DocsHome = () => {
  return (
    <div className='docs-home'>
      <DocsHero
        title='GitScope Documentation'
        description='Learn how GitScope turns GitHub data into clear, useful insights about developers, repositories, contributions, and activity.'
      />

      <DocsArticle
        category='Introduction'
        title='Getting Started'
        description="Everything you need to start exploring GitHub profiles and understanding GitScope's analytics."
        next={{
          title: 'How GitScope Works',
          href: '/documentation/introduction/how-it-works',
        }}
      >
        <section id='what-is-gitscope'>
          <h2>What is GitScope</h2>

          <p>
            GitScope is a GitHub analytics platform that transforms public
            GitHub data into structured insights. Instead of browsing
            repositories and contribution activity manually, you can explore
            that information through a single analytics interface.
          </p>

          <p>
            Search for a GitHub username to view profile information, repository
            metrics, contribution activity, language usage, and other developer
            insights.
          </p>
        </section>

        <section id='what-you-can-explore'>
          <h2>What you can explore</h2>

          <div className='docs-home__feature'>
            {docsFeatures.map((feature) => (
              <DocsFeature key={feature.id} {...feature} />
            ))}
          </div>
        </section>

        <section id='analyze-a-profile'>
          <h2>Analyze a GitHub profile</h2>

          <p>
            GitScope starts with a GitHub username. Enter a public username on
            the landing page and GitScope retrieves the data required to build
            the analytics dashboard.
          </p>

          <DocsCodeBlock
            language='text'
            code='https://gitscope-analytics.vercel.app/username'
          />

          <DocsCallout type='note'>
            Replace <code>username</code> with the GitHub username you want to
            analyze.
          </DocsCallout>
        </section>

        <section id='understanding-the-dashboard'>
          <h2>Understanding the dashboard</h2>

          <p>
            The dashboard organizes GitHub information into focused sections.
            Profile information provides identity and account context, while
            repository and contribution sections focus on activity and
            development patterns.
          </p>

          <p>
            Charts make larger datasets easier to interpret, allowing you to
            identify repository distribution, language usage, contribution
            trends, and other patterns without manually inspecting GitHub.
          </p>
        </section>

        <section id='authenticated-features'>
          <h2>Authenticated features</h2>

          <p>
            GitScope can be used without authentication for public profile
            exploration. Authentication unlocks features that require a
            personalized GitHub experience.
          </p>

          <ul>
            <li>Compare GitHub profiles.</li>

            <li>Open detailed repository information.</li>

            <li>View your fully visualized profile.</li>
          </ul>

          <DocsCallout type='tip'>
            You can explore public GitHub profiles before deciding whether
            authentication is necessary.
          </DocsCallout>
        </section>

        <section id='next-steps'>
          <h2>Next steps</h2>

          <p>
            Now that you understand the basic GitScope workflow, continue with
            the documentation to learn how the platform processes GitHub data
            and how each feature works.
          </p>

          <ul>
            <li>
              Learn <strong>How GitScope Works</strong> to understand the
              underlying data flow.
            </li>

            <li>
              Explore <strong>GitHub Analytics</strong> and repository insights.
            </li>

            <li>
              Learn how <strong>Compare Profiles</strong> works.
            </li>

            <li>
              Read the <strong>Authentication</strong> documentation for
              account-specific features.
            </li>
          </ul>
        </section>
      </DocsArticle>
    </div>
  );
};

export default DocsHome;
