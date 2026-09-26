'use client';

import { KeyRound, LockKeyhole, ShieldCheck, UserCheck } from 'lucide-react';

import DocsFeatureCard from '../DocsFeatureCard';
import DocsArticle from '../DocsArticle';
import DocsFeatureItem from '../DocsFeatureItem';
import DocsCallout from '../DocsCallout';

import '../../../styles/components/docs/api/ApiAuthenticationClient.scss';

const ApiAuthenticationClient = () => {
  return (
    <main className='api-authentication-client'>
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
            <DocsFeatureCard
              icon={UserCheck}
              title='Authentication'
              description='Establishes the identity or authenticated session associated with an API request.'
              accentColor='#8B5CF6'
            />

            <DocsFeatureCard
              icon={ShieldCheck}
              title='Authorization'
              description='Determines whether the authenticated context can access a particular resource or operation.'
              accentColor='#22C55E'
            />
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
            <DocsFeatureItem
              title='Public resources'
              description='Resources intended for public access can be requested without an authenticated session when supported.'
              accentColor='#22C55E'
            />

            <DocsFeatureItem
              title='Protected resources'
              description='Resources containing authenticated functionality require the appropriate authentication context.'
              accentColor='#8B5CF6'
            />

            <DocsFeatureItem
              title='User-specific operations'
              description='Operations associated with an authenticated user require GitScope to identify the requesting session.'
              accentColor='#06B6D4'
            />
          </div>
        </section>

        <section id='authentication-flow'>
          <h2>Authentication flow</h2>

          <div className='api-authentication-client__flow'>
            <DocsFeatureItem
              title='1. Authenticate'
              description='The user establishes an authenticated session through the supported GitHub authentication flow.'
              accentColor='#8B5CF6'
            />

            <DocsFeatureItem
              title='2. Establish session'
              description='GitScope maintains the authenticated context needed for protected application functionality.'
              accentColor='#06B6D4'
            />

            <DocsFeatureItem
              title='3. Make the request'
              description='The application sends an API request within the appropriate authenticated context.'
              accentColor='#22C55E'
            />

            <DocsFeatureItem
              title='4. Validate access'
              description='The API verifies that the request has the authentication context required by the resource.'
              accentColor='#F59E0B'
            />

            <DocsFeatureItem
              title='5. Return the result'
              description='The API returns the requested data when the request satisfies the resource requirements.'
              accentColor='#14B8A6'
            />
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
            <DocsFeatureCard
              icon={LockKeyhole}
              title='Protected context'
              description='Protected resources should only be processed when the required authenticated context is available.'
              accentColor='#EF4444'
            />

            <DocsFeatureCard
              icon={KeyRound}
              title='Request credentials'
              description='Authentication information must be supplied through the mechanism expected by the API.'
              accentColor='#F59E0B'
            />
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
            <DocsFeatureItem
              title='Missing authentication'
              description='The request does not provide the authentication context required by the resource.'
              accentColor='#F59E0B'
            />

            <DocsFeatureItem
              title='Invalid authentication'
              description='The supplied authentication context cannot be validated.'
              accentColor='#EF4444'
            />

            <DocsFeatureItem
              title='Expired session'
              description='The authenticated session is no longer available or valid.'
              accentColor='#F97316'
            />

            <DocsFeatureItem
              title='Insufficient access'
              description='The authenticated context does not provide the access required for the requested operation.'
              accentColor='#8B5CF6'
            />
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
      </DocsArticle>
    </main>
  );
};

export default ApiAuthenticationClient;
