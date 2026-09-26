'use client';

import DocsFeatureCard from '../DocsFeatureCard';
import DocsArticle from '../DocsArticle';
import DocsFeatureItem from '../DocsFeatureItem';
import DocsCallout from '../DocsCallout';

import * as data from '@/data/docs/guides/share-profile.data';
import '../../../styles/components/docs/guides/ShareProfileClient.scss';

const ShareProfileClient = () => {
  return (
    <main className='share-profile-client'>
      <DocsArticle
        category='Guides'
        title='Share a Profile'
        description='Learn how to share GitScope profile analytics with other people while keeping the shared context clear.'
        previous={{
          title: 'Export Analytics',
          href: '/documentation/guides/export-analytics',
        }}
        next={{
          title: 'API Overview',
          href: '/documentation/api',
        }}
      >
        <section id='overview'>
          <h2>Overview</h2>

          <p>
            GitScope can be used to share GitHub profile analytics with other
            people. Sharing is useful when you want someone to review a profile,
            repository activity, contribution data, or other analytics without
            manually reproducing the information.
          </p>

          <p>
            This guide explains the general sharing workflow and the
            considerations to keep in mind before distributing a GitScope
            profile or analytics reference.
          </p>

          <DocsCallout type='note'>
            Available sharing controls depend on the current GitScope
            implementation. This guide describes the sharing workflow without
            assuming a specific URL or sharing mechanism.
          </DocsCallout>
        </section>

        <section id='what-can-you-share'>
          <h2>What can you share?</h2>

          <p>
            The information available for sharing depends on the GitScope view
            you are using and the data available for the selected profile.
          </p>

          <div className='share-profile-client__grid'>
            {data.sharingAreas.map((area) => (
              <DocsFeatureCard key={area.title} {...area} />
            ))}
          </div>
        </section>

        <section id='open-the-profile'>
          <h2>Open the profile</h2>

          <p>
            Start by opening the GitScope profile you want to share. Review the
            profile overview and analytics before using the sharing action.
          </p>

          <div className='share-profile-client__list'>
            {data.sharingProfiles.map((profile) => (
              <DocsFeatureItem key={profile.title} {...profile} />
            ))}
          </div>
        </section>

        <section id='sharing-workflow'>
          <h2>Sharing workflow</h2>

          <p>
            Follow a simple workflow to make sure the shared reference points to
            the intended profile and contains the context your recipient needs.
          </p>

          <div className='share-profile-client__list'>
            {data.sharingWorkflow.map((step) => (
              <DocsFeatureItem key={step.title} {...step} />
            ))}
          </div>
        </section>

        <section id='copying-a-shareable-reference'>
          <h2>Copying a shareable reference</h2>

          <p>
            If GitScope provides a copy or share control, use it to obtain the
            reference generated for the current profile or analytics view.
          </p>

          <div className='share-profile-client__grid'>
            {data.sharingReferences.map((reference) => (
              <DocsFeatureCard key={reference.title} {...reference} />
            ))}
          </div>
        </section>

        <section id='sharing-with-other-developers'>
          <h2>Sharing with other developers</h2>

          <p>
            Shared profiles can provide a convenient way to discuss GitHub
            activity with teammates, collaborators, recruiters, or other
            developers.
          </p>

          <div className='share-profile-client__list'>
            {data.sharingDevelopers.map((developer) => (
              <DocsFeatureItem key={developer.title} {...developer} />
            ))}
          </div>
        </section>

        <section id='privacy-and-sharing'>
          <h2>Privacy and sharing</h2>

          <p>
            Sharing a GitScope profile can make GitHub-related information
            easier for other people to access. Before sharing, consider whether
            the profile and analytics are appropriate for the intended audience.
          </p>

          <DocsCallout type='warning'>
            Do not assume that a shareable profile is private simply because you
            accessed it through an authenticated GitScope session. Review the
            visibility of the underlying GitHub information before sharing.
          </DocsCallout>
        </section>

        <section id='public-and-authenticated-profiles'>
          <h2>Public and authenticated profiles</h2>

          <p>
            GitScope supports public profile exploration, while some features
            require authentication. The ability to view or share a profile can
            therefore depend on the feature, GitHub data availability, and the
            current authentication state.
          </p>

          <div className='share-profile-client__list'>
            {data.sharingAuthProfiles.map((profile) => (
              <DocsFeatureItem key={profile.title} {...profile} />
            ))}
          </div>
        </section>

        <section id='sharing-principles'>
          <h2>Sharing principles</h2>

          <p>
            Use these principles when sharing GitScope profiles and analytics.
          </p>

          <div className='share-profile-client__list'>
            {data.sharingPrinciples.map((principle) => (
              <DocsFeatureItem key={principle.title} {...principle} />
            ))}
          </div>
        </section>

        <section id='live-analytics-vs-shared-context'>
          <h2>Live analytics vs shared context</h2>

          <p>
            GitHub profiles and repositories can change over time. The analytics
            a recipient sees may therefore differ from what you originally saw
            if the shared view loads current GitHub data.
          </p>

          <p>
            When sharing analytics for a specific point in time, consider using
            an export when the current GitScope implementation supports the
            information you need.
          </p>
        </section>

        <section id='data-context'>
          <h2>Data context</h2>

          <p>
            Shared analytics are subject to the same GitHub data availability
            and API constraints as the original GitScope view. Repository
            visibility, permissions, API limitations, and changes to the
            underlying GitHub account can affect the information displayed.
          </p>
        </section>

        <section id='next-steps'>
          <h2>Next steps</h2>

          <p>
            You have now covered the main Guides workflow: analyzing a profile,
            comparing developers, exporting analytics, and sharing a profile.
          </p>

          <p>
            Continue exploring the API section to understand how GitScope
            exposes analytics data and how to work with its API resources.
          </p>
        </section>
      </DocsArticle>
    </main>
  );
};

export default ShareProfileClient;
