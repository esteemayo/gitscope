'use client';

import DocsFeatureCard from '../DocsFeatureCard';
import DocsArticle from '../DocsArticle';
import DocsFeatureItem from '../DocsFeatureItem';
import DocsCallout from '../DocsCallout';

import * as data from '@/data/docs/authentication/privacy.data';
import '../../../styles/components/docs/authentication/PrivacyClient.scss';

const PrivacyClient = () => {
  return (
    <main className='privacy-client'>
      <DocsArticle
        category='Authentication'
        title='Privacy'
        description='Understand how authentication, GitHub data, sessions, and privacy relate in GitScope.'
        previous={{
          title: 'Sessions',
          href: '/documentation/authentication/sessions',
        }}
        next={{
          title: 'Analyze a Profile',
          href: '/documentation/guides/analyze-profile',
        }}
      >
        <div className='privacy-client'>
          <section id='verview'>
            <h2>Overview</h2>

            <p>
              GitScope uses GitHub authentication to provide features that
              require an authenticated GitHub account. Authentication also
              determines what information the application can access and use
              when generating analytics.
            </p>

            <DocsCallout type='note'>
              Authentication does not mean that GitScope automatically has
              unrestricted access to your GitHub account. Access depends on the
              permissions granted through the GitHub authorization flow.
            </DocsCallout>
          </section>

          <section id='authentication-and-privacy'>
            <h2>Authentication and privacy</h2>

            <p>
              Authentication connects your GitHub identity with your
              authenticated GitScope session. This allows the application to
              provide features that are unavailable to unauthenticated users.
            </p>

            <p>
              The information available to GitScope depends on the permissions
              granted through GitHub and the data required by the feature you
              are using.
            </p>

            <div className='privacy-client__grid'>
              {data.authenticationPrivacy.map((privacy) => (
                <DocsFeatureCard key={privacy.title} {...privacy} />
              ))}
            </div>
          </section>

          <section id='what-authentication-enables'>
            <h2>What authentication enables</h2>

            <p>
              Some GitScope features require an authenticated account because
              they depend on access to GitHub data or authenticated application
              state.
            </p>

            <div className='privacy-client__grid'>
              {data.privacyAreas.map((area) => (
                <DocsFeatureCard key={area.title} {...area} />
              ))}
            </div>
          </section>

          <section id='github-data'>
            <h2>GitHub data</h2>

            <p>
              GitScope can use GitHub data to create analytics and visual
              representations of developer activity. The exact data available
              depends on the GitHub API, the permissions granted, and the
              feature being used.
            </p>

            <div className='privacy-client__list'>
              {data.authenticationData.map((item) => (
                <DocsFeatureItem key={item.title} {...item} />
              ))}
            </div>
          </section>

          <section id='sessions-and-privacy'>
            <h2>Sessions and privacy</h2>

            <p>
              A session maintains your authenticated state while you interact
              with protected GitScope features. Session information is different
              from the GitHub data used to generate analytics.
            </p>

            <p>
              Session behavior, including expiration and invalidation, depends
              on the authentication implementation and configuration.
            </p>

            <DocsCallout type='tip'>
              Sign out when you finish using GitScope on a shared device. This
              ends the current authenticated application state.
            </DocsCallout>
          </section>

          <section id='permissions-and-privacy'>
            <h2>Permissions and privacy</h2>

            <p>
              GitHub permissions determine what information an application can
              request or access. Reviewing the requested permissions before
              authorizing GitScope helps you understand the scope of access
              associated with your account.
            </p>

            <div className='privacy-client__list'>
              {data.privacyPermissions.map((permission) => (
                <DocsFeatureItem key={permission.title} {...permission} />
              ))}
            </div>
          </section>

          <section id='privacy-principles'>
            <h2>Privacy principles</h2>

            <p>
              GitScope&apos;s authentication architecture should follow a small
              set of principles when handling authenticated application state
              and GitHub data.
            </p>

            <div className='privacy-client__list'>
              {data.privacyPrinciples.map((principle) => (
                <DocsFeatureItem key={principle.title} {...principle} />
              ))}
            </div>
          </section>

          <section id='public-and-authenticated-data'>
            <h2>Public and authenticated data</h2>

            <p>
              Not every GitScope feature requires authentication. Public
              functionality can operate using information available through
              supported GitHub data access without requiring a signed-in
              session.
            </p>

            <p>
              Authenticated features can provide additional functionality when
              the application needs to associate activity with the signed-in
              GitHub account or access functionality that requires
              authorization.
            </p>
          </section>

          <section id='data-retention'>
            <h2>Data retention</h2>

            <p>
              Data retention depends on what information GitScope stores and how
              each feature is implemented. This documentation does not define a
              fixed retention period for authentication or analytics data.
            </p>

            <DocsCallout type='warning'>
              Do not interpret the absence of a retention period on this page as
              a guarantee that authentication or analytics data is retained for
              a particular amount of time. Refer to the main GitScope Privacy
              Policy for the application&apos;s current data-handling practices.
            </DocsCallout>
          </section>

          <section id='revoking-github-access'>
            <h2>Revoking GitHub access</h2>

            <p>
              If you no longer want GitScope to have the permissions previously
              granted through GitHub, you can review and manage authorized
              application access from your GitHub account.
            </p>

            <p>
              Revoking authorization can affect authenticated GitScope features
              that depend on the previously granted access.
            </p>
          </section>

          <section id='next-steps'>
            <h2>Next steps</h2>

            <p>
              For the complete rules governing how GitScope handles personal
              information and application data, continue to the main Privacy
              Policy.
            </p>
          </section>
        </div>
      </DocsArticle>
    </main>
  );
};

export default PrivacyClient;
