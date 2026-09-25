'use client';

import DocsFeatureCard from '../DocsFeatureCard';
import DocsArticle from '../DocsArticle';
import DocsFeatureItem from '../DocsFeatureItem';
import DocsCallout from '../DocsCallout';

import * as data from '@/data/docs/authentication/github-authentication.data';
import '../../../styles/components/docs/authentication/GithubAuthenticationClient.scss';

const GithubAuthenticationClient = () => {
  return (
    <main className='github-authentication-client'>
      <DocsArticle
        category='Authentication'
        title='GitHub Authentication'
        description='Understand how GitScope uses GitHub authentication to provide authenticated features while keeping access scoped to the required capabilities.'
        previous={{
          title: 'Contribution Analytics',
          href: '/documentation/analytics/contribution-analytics',
        }}
        next={{
          title: 'Permissions',
          href: '/documentation/authentication/permissions',
        }}
      >
        <section id='overview'>
          <h2>Overview</h2>

          <p>
            GitHub authentication connects your GitHub account to GitScope so
            authenticated features can access the GitHub data required for those
            experiences.
          </p>

          <p>
            GitScope separates public profile exploration from features that
            require an authenticated GitHub account. You can therefore explore
            supported public analytics without necessarily signing in.
          </p>
        </section>

        <section id='why-authentication-is-required'>
          <h2>Why authentication is required</h2>

          <p>
            Some GitScope features require an authenticated account because they
            depend on access to information associated with the signed-in GitHub
            user.
          </p>

          <div className='github-authentication-client__grid'>
            {data.authenticationCards.map((card) => (
              <DocsFeatureCard key={card.title} {...card} />
            ))}
          </div>
        </section>

        <section id='signing-in-with-github'>
          <h2>Signing in with GitHub</h2>

          <p>
            GitScope uses GitHub as the identity provider for its authenticated
            experience. When you choose to sign in, the authentication flow
            takes you through GitHub&apos;s authorization process.
          </p>

          <div className='github-authentication-client__items'>
            {data.authenticationSignin.map((item) => (
              <DocsFeatureItem key={item.title} {...item} />
            ))}
          </div>
        </section>

        <section id='authorization-and-access'>
          <h2>Authorization and access</h2>

          <p>
            Authentication establishes your identity with GitScope.
            Authorization determines what the application is allowed to access
            through the connected GitHub account.
          </p>

          <p>
            These are separate concepts. Successfully signing in does not mean
            that an application automatically receives unrestricted access to
            your GitHub account.
          </p>

          <DocsCallout type='note'>
            The permissions granted during the GitHub authorization flow
            determine the access available to authenticated GitScope features.
          </DocsCallout>
        </section>

        <section id='authentication-flow'>
          <h2>Authentication flow</h2>

          <div className='github-authentication-client__flow'>
            {data.authenticationFlow.map((flow) => (
              <DocsFeatureItem key={flow.title} {...flow} />
            ))}
          </div>
        </section>

        <section id='authenticated-features'>
          <h2>Authenticated features</h2>

          <p>
            GitScope uses authentication for features that require an
            authenticated user context.
          </p>

          <div className='github-authentication-client__grid'>
            {data.authenticatedFeatures.map((feature) => (
              <DocsFeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </section>

        <section id='authentication-errors'>
          <h2>Authentication errors</h2>

          <p>
            Authentication can fail if authorization is cancelled, the
            authentication flow expires, or the required access cannot be
            established.
          </p>

          <div className='github-authentication-client__items'>
            {data.authenticationErrors.map((error) => (
              <DocsFeatureItem key={error.title} {...error} />
            ))}
          </div>
        </section>

        <section id='security-considerations'>
          <h2>Security considerations</h2>

          <p>
            Authentication should always be treated as a security-sensitive
            operation. GitScope relies on the GitHub authentication flow rather
            than asking you to provide your GitHub password directly to the
            application.
          </p>

          <DocsCallout type='warning'>
            Never enter your GitHub password into a GitScope form that is not
            part of the official GitHub authentication flow.
          </DocsCallout>
        </section>

        <section id='authentication-and-privacy'>
          <h2>Authentication and privacy</h2>

          <p>
            Authentication and privacy are related but separate areas of the
            GitScope documentation. Authentication explains how account access
            is established, while the Privacy documentation explains how
            information is handled by the application.
          </p>

          <p>
            Review the Privacy documentation for more information about data
            handling and privacy-related behavior.
          </p>
        </section>

        <section id='next-steps'>
          <h2>Next steps</h2>

          <p>
            Continue with Permissions to understand what access GitScope
            requires and how authorization affects authenticated features.
          </p>
        </section>
      </DocsArticle>
    </main>
  );
};

export default GithubAuthenticationClient;
