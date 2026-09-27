'use client';

import DocsFeatureCard from '../DocsFeatureCard';
import DocsArticle from '../DocsArticle';
import DocsFeatureItem from '../DocsFeatureItem';
import DocsCallout from '../DocsCallout';

import * as data from '@/data/docs/api/authentication.data';
import '../../../styles/components/docs/api/ApiAuthenticationClient.scss';

const ApiAuthenticationClient = () => {
  return (
    <DocsArticle
      category='API'
      title='API Authentication'
      description='Understand how authentication applies to the GitScope API and how authenticated access protects API resources.'
      previous={{
        title: 'API Overview',
        href: '/documentation/api',
      }}
      next={{
        title: 'Endpoints',
        href: '/documentation/api/endpoints',
      }}
    >
      <div className='api-authentication-client'>
        <section id='overview'>
          <h2>Overview</h2>

          <p>
            API authentication determines whether a request is allowed to access
            protected GitScope resources. It connects the identity of the
            authenticated user or session with the permissions required by an
            API operation.
          </p>

          <DocsCallout type='note'>
            Authentication requirements depend on the API resource being
            requested. Public data and authenticated functionality should be
            treated as separate access contexts.
          </DocsCallout>
        </section>

        <section id='authentication-and-authorization'>
          <h2>Authentication and authorization</h2>

          <p>
            Authentication and authorization serve different purposes.
            Authentication establishes who is making a request, while
            authorization determines whether that authenticated context has
            access to the requested resource.
          </p>

          <div className='api-authentication-client__grid'>
            {data.authenticationContexts.map((context) => (
              <DocsFeatureCard key={context.title} {...context} />
            ))}
          </div>
        </section>

        <section id='when-authentication-is-required'>
          <h2>When authentication is required</h2>

          <p>
            GitScope can expose functionality that does not require a signed-in
            user, while other operations may depend on an authenticated session.
            Protected operations should verify authentication before processing
            the request.
          </p>

          <div className='api-authentication-client__list'>
            {data.authenticationRequests.map((request) => (
              <DocsFeatureItem key={request.title} {...request} />
            ))}
          </div>
        </section>

        <section id='authentication-flow'>
          <h2>Authentication flow</h2>

          <div className='api-authentication-client__flow'>
            {data.authenticationFlows.map((flow) => (
              <DocsFeatureItem key={flow.title} {...flow} />
            ))}
          </div>
        </section>

        <section id='github-authentication'>
          <h2>GitHub authentication</h2>

          <p>
            GitScope uses GitHub authentication as part of its authenticated
            experience. This allows GitScope to establish an authenticated user
            context and request the GitHub data required by protected
            functionality.
          </p>

          <DocsCallout type='tip'>
            GitHub authentication does not mean every API request automatically
            has unrestricted access to GitHub data. Access remains subject to
            the permissions and data available to the authenticated context.
          </DocsCallout>
        </section>

        <section id='protected-api-requests'>
          <h2>Protected API requests</h2>

          <div className='api-authentication-client__grid'>
            {data.apiRequests.map((request) => (
              <DocsFeatureCard key={request.title} {...request} />
            ))}
          </div>
        </section>

        <section id='authentication-failures'>
          <h2>Authentication failures</h2>

          <p>
            An API request can fail when authentication is missing, invalid,
            expired, or otherwise unavailable. Applications should distinguish
            authentication failures from other API errors and respond
            appropriately.
          </p>

          <div className='api-authentication-client__list'>
            {data.authenticationFailures.map((failure) => (
              <DocsFeatureItem key={failure.title} {...failure} />
            ))}
          </div>
        </section>

        <section id='security-considerations'>
          <h2>Security considerations</h2>

          <p>
            Authentication credentials and session information should be treated
            as sensitive. Applications consuming the API should avoid exposing
            credentials in client-side code, URLs, logs, or publicly accessible
            source files.
          </p>

          <DocsCallout type='warning'>
            Never expose private authentication credentials or tokens in source
            control, browser-visible configuration, screenshots, or error
            messages.
          </DocsCallout>
        </section>

        <section id='authentication-and-privacy'>
          <h2>Authentication and privacy</h2>

          <p>
            Authentication provides the context required for protected
            functionality, but it does not change the underlying privacy
            principles of GitScope. Access to GitHub data should remain limited
            to what is required by the application and the permissions available
            to the authenticated context.
          </p>
        </section>

        <section id='next-steps'>
          <h2>Next steps</h2>

          <p>
            Continue with API endpoints to understand the resources available
            through the GitScope API and how requests are organized.
          </p>
        </section>
      </div>
    </DocsArticle>
  );
};

export default ApiAuthenticationClient;
