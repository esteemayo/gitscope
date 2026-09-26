'use client';

import {
  AlertCircle,
  Ban,
  CircleOff,
  LockKeyhole,
  SearchX,
  ServerCrash,
} from 'lucide-react';

import DocsFeatureCard from '../DocsFeatureCard';
import DocsArticle from '../DocsArticle';
import DocsFeatureItem from '../DocsFeatureItem';
import DocsCallout from '../DocsCallout';

import '../../../styles/components/docs/api/ApiErrorsClient.scss';

const ApiErrorsClient = () => {
  return (
    <main className='api-errors-client'>
      <DocsArticle
        category='API'
        title='API Errors'
        description='Understand API failures, common error conditions, and how applications should respond to unsuccessful GitScope API requests.'
        previous={{
          title: 'Response',
          href: '/documentation/api/response',
        }}
        next={{
          title: 'FAQ',
          href: '/documentation/resources/faq',
        }}
      >
        <section id='overview'>
          <h2>Overview</h2>

          <p>
            API errors occur when GitScope cannot successfully complete a
            requested operation. An error can result from the request,
            authentication context, requested resource, or an issue while
            processing the request.
          </p>

          <DocsCallout type='note'>
            Treat API errors as expected application states. A robust client
            should be able to identify unsuccessful requests and respond without
            breaking the surrounding application.
          </DocsCallout>
        </section>

        <section id='common-error-areas'>
          <h2>Common error areas</h2>

          <div className='api-errors-client__grid'>
            <DocsFeatureCard
              icon={AlertCircle}
              title='Invalid request'
              description='The request does not satisfy the requirements expected by the API resource.'
              accentColor='#F59E0B'
            />

            <DocsFeatureCard
              icon={LockKeyhole}
              title='Authentication'
              description='The request is missing or cannot use the authentication context required by the resource.'
              accentColor='#8B5CF6'
            />

            <DocsFeatureCard
              icon={SearchX}
              title='Resource'
              description='The requested GitHub or GitScope resource cannot be found or accessed.'
              accentColor='#06B6D4'
            />

            <DocsFeatureCard
              icon={ServerCrash}
              title='Server'
              description='The API encounters a problem while processing a valid request.'
              accentColor='#EF4444'
            />
          </div>
        </section>

        <section id='invalid-requests'>
          <h2>Invalid requests</h2>

          <p>
            A request can fail when required information is missing, a parameter
            is invalid, or the request does not match the requirements of the
            selected endpoint.
          </p>

          <div className='api-errors-client__list'>
            <DocsFeatureItem
              title='Missing information'
              description='A required value was not provided by the client.'
              accentColor='#F59E0B'
            />

            <DocsFeatureItem
              title='Invalid parameter'
              description='A supplied parameter does not satisfy the endpoint requirements.'
              accentColor='#EF4444'
            />

            <DocsFeatureItem
              title='Unsupported request'
              description='The request does not match an operation supported by the endpoint.'
              accentColor='#8B5CF6'
            />
          </div>
        </section>

        <section id='authentication-errors'>
          <h2>Authentication errors</h2>

          <p>
            Protected API resources can reject a request when the required
            authentication context is unavailable or cannot be validated.
          </p>

          <div className='api-errors-client__list'>
            <DocsFeatureItem
              title='Missing authentication'
              description='The request does not provide the authentication context required by the resource.'
              accentColor='#F59E0B'
            />

            <DocsFeatureItem
              title='Invalid authentication'
              description='The provided authentication context cannot be validated.'
              accentColor='#EF4444'
            />

            <DocsFeatureItem
              title='Expired session'
              description='The authenticated session is no longer available or valid.'
              accentColor='#F97316'
            />

            <DocsFeatureItem
              title='Insufficient access'
              description='The authenticated context does not provide the access required by the operation.'
              accentColor='#8B5CF6'
            />
          </div>

          <DocsCallout type='tip'>
            Authentication failures should be handled separately from ordinary
            request validation errors so the application can provide the
            appropriate recovery path.
          </DocsCallout>
        </section>

        <section id='resource-errors'>
          <h2>Resource errors</h2>

          <p>
            A resource error occurs when the requested data cannot be resolved
            or accessed. This can happen when a referenced GitHub profile or
            repository is unavailable.
          </p>

          <div className='api-errors-client__grid'>
            <DocsFeatureCard
              icon={SearchX}
              title='Not found'
              description='The requested resource cannot be located.'
              accentColor='#06B6D4'
            />

            <DocsFeatureCard
              icon={CircleOff}
              title='Unavailable'
              description='The resource exists or is expected to exist, but its data is not currently available.'
              accentColor='#F59E0B'
            />

            <DocsFeatureCard
              icon={Ban}
              title='Restricted'
              description='Access to the requested resource is not available to the current request context.'
              accentColor='#EF4444'
            />
          </div>
        </section>

        <section id='server-errors'>
          <h2>Server errors</h2>

          <p>
            Server-side errors occur when GitScope cannot complete a request
            because of an unexpected problem while processing it. These errors
            are different from problems caused directly by invalid client input.
          </p>

          <DocsCallout type='danger'>
            Do not expose internal implementation details, credentials, stack
            traces, or sensitive server information when presenting API errors
            to end users.
          </DocsCallout>
        </section>

        <section id='handling-api-errors'>
          <h2>Handling API errors</h2>

          <div className='api-errors-client__flow'>
            <DocsFeatureItem
              title='1. Detect the failure'
              description='Determine whether the API request completed successfully.'
              accentColor='#8B5CF6'
            />

            <DocsFeatureItem
              title='2. Identify the error'
              description='Inspect the available error information to determine the cause of the failure.'
              accentColor='#06B6D4'
            />

            <DocsFeatureItem
              title='3. Choose a recovery path'
              description='Decide whether the request should be corrected, retried, or surfaced to the user.'
              accentColor='#F59E0B'
            />

            <DocsFeatureItem
              title='4. Protect sensitive details'
              description='Keep credentials and internal server information out of user-facing error messages.'
              accentColor='#EF4444'
            />

            <DocsFeatureItem
              title='5. Restore application state'
              description='Return the application to a predictable state after the failed request.'
              accentColor='#22C55E'
            />
          </div>
        </section>

        <section id='retrying-failed-requests'>
          <h2>Retrying failed requests</h2>

          <p>
            Not every error should trigger an automatic retry. Retrying makes
            sense only when the failure may be temporary and the operation can
            safely be attempted again.
          </p>

          <div className='api-errors-client__list'>
            <DocsFeatureItem
              title='Temporary failures'
              description='A temporary service or network condition may justify retrying a request.'
              accentColor='#22C55E'
            />

            <DocsFeatureItem
              title='Invalid requests'
              description='Correct the request before attempting it again.'
              accentColor='#F59E0B'
            />

            <DocsFeatureItem
              title='Authentication failures'
              description='Restore the required authentication context instead of repeatedly sending the same failed request.'
              accentColor='#8B5CF6'
            />

            <DocsFeatureItem
              title='Unavailable resources'
              description='Verify the resource and request context before retrying.'
              accentColor='#06B6D4'
            />
          </div>
        </section>

        <section id='error-handling-principles'>
          <h2>Error handling principles</h2>

          <div className='api-errors-client__grid'>
            <DocsFeatureCard
              icon={AlertCircle}
              title='Handle explicitly'
              description='Treat unsuccessful API requests as defined application states.'
              accentColor='#F59E0B'
            />

            <DocsFeatureCard
              icon={SearchX}
              title='Identify the cause'
              description='Use available error information to determine the appropriate response.'
              accentColor='#06B6D4'
            />

            <DocsFeatureCard
              icon={LockKeyhole}
              title='Protect credentials'
              description='Never expose authentication information while reporting an API failure.'
              accentColor='#8B5CF6'
            />

            <DocsFeatureCard
              icon={ServerCrash}
              title='Fail safely'
              description='Keep the application stable when an API request cannot be completed.'
              accentColor='#EF4444'
            />
          </div>
        </section>

        <section id='debugging-api-errors'>
          <h2>Debugging API errors</h2>

          <p>
            When an API request fails, begin with the request context,
            authentication state, endpoint, parameters, and returned error
            information. This helps separate client-side problems from resource
            and server-side failures.
          </p>

          <DocsCallout type='note'>
            Avoid relying on assumptions about the cause of an error. Use the
            information returned by the API and the endpoint documentation to
            determine the appropriate next step.
          </DocsCallout>
        </section>

        <section id='data-and-error-context'>
          <h2>Data and error context</h2>

          <p>
            API errors can occur independently of the underlying GitHub data. A
            failed request does not necessarily indicate that the requested
            GitHub profile, repository, or analytics data does not exist.
          </p>
        </section>

        <section id='next-steps'>
          <h2>Next steps</h2>

          <p>
            Continue to the Resources section to find frequently asked
            questions, review GitScope changes over time, and explore the
            project&apos;s development roadmap through the FAQ, Changelog, and
            Roadmap pages.
          </p>
        </section>
      </DocsArticle>
    </main>
  );
};

export default ApiErrorsClient;
