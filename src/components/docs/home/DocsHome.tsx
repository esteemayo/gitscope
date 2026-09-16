'use client';

import DocsHomeHero from './DocsHomeHero';
import DocsCard from './DocsCard';
import DocsHomeNext from './DocsHomeNext';
import DocsStep from './DocsStep';
import DocsHomeSection from './DocsHomeSection';

import DocsArticle from '../DocsArticle';
import DocsCallout from '../DocsCallout';
import DocsCodeBlock from '../DocsCodeBlock';

import { docsHomePage } from '@/data/docs/docsHomePage';
import '../../../styles/components/docs/home/DocsHome.scss';

const usernameExample = 'esteemayo';

const DocsHome = () => {
  return (
    <DocsArticle
      category='Introduction'
      title='Getting Started'
      description='Learn what GitScope does, how the core experience works, and how to start exploring GitHub analytics.'
      next={{
        title: 'How GitScope Works',
        href: '/documentation/introduction/how-it-works',
      }}
    >
      <h2>What is GitScope</h2>

      <p>
        GitScope is a GitHub analytics platform built to turn GitHub activity
        and repository data into structured, useful insights.
      </p>

      <p>
        Instead of browsing multiple GitHub pages to understand a developer
        profile, GitScope brings relevant metrics into a single analytics
        experience.
      </p>

      <DocsCallout type='note' title='Public data'>
        GitScope uses GitHub data according to the access available to the
        current experience.
      </DocsCallout>

      <h2>What you can explore</h2>

      <p>GitScope organizes GitHub information into several areas.</p>

      <ul>
        <li>Repository activity and metrics</li>

        <li>Programming language distribution</li>

        <li>Contribution activity</li>

        <li>Stars and forks</li>

        <li>Developer profile information</li>

        <li>Comparisons between GitHub users</li>
      </ul>

      <h2>Analyze a GitHub profile</h2>

      <p>
        Start from the GitScope search experience. Enter a public GitHub
        username and open the resulting analytics profile.
      </p>

      <DocsCodeBlock language='text' code={usernameExample} />

      <p>
        GitScope then organizes the available data into an analytics dashboard.
      </p>

      <h2>Understanding the dashboard</h2>

      <h3>Profile information</h3>

      <p>
        The profile area provides essential information about the GitHub
        account, including the username, profile details and account statistics.
      </p>

      <h3>Contribution analytics</h3>

      <p>
        Contribution visualizations provide a clearer view of activity patterns
        over time.
      </p>

      <h2>Authenticated features</h2>

      <p>
        GitScope supports an authenticated experience for features requiring
        additional GitHub access.
      </p>

      <DocsCallout type='warning' title='Authentication'>
        Authentication is only required for features where GitScope needs
        authenticated GitHub access.
      </DocsCallout>

      <h2>Next steps</h2>

      <p>
        Once you understand the basic GitScope experience, continue with the
        architecture guide to understand how GitHub data moves through the
        platform.
      </p>
    </DocsArticle>

    // <article className='docs-home'>
    //   <DocsHomeHero />

    //   <DocsHomeSection {...docsHomePage.quickStart.content}>
    //     <div className='docs-home__grid'>
    //       {docsHomePage.quickStart.cards.map((card) => (
    //         <DocsCard key={card.id} {...card} />
    //       ))}
    //     </div>
    //   </DocsHomeSection>

    //   <DocsHomeSection {...docsHomePage.howItWorks.content}>
    //     <div className='docs-home__pipeline'>
    //       {docsHomePage.howItWorks.steps.map((step, index) => (
    //         <DocsStep key={step.id} {...step} index={index} />
    //       ))}
    //     </div>
    //   </DocsHomeSection>

    //   <DocsHomeNext {...docsHomePage.nextSteps} />
    // </article>
  );
};

export default DocsHome;
