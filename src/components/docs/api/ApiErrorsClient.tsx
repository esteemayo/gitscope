'use client';

import DocsFeatureCard from '../DocsFeatureCard';
import DocsArticle from '../DocsArticle';
import DocsFeatureItem from '../DocsFeatureItem';
import DocsCallout from '../DocsCallout';

import * as data from '@/data/docs/api/errors.data';
import '../../../styles/components/docs/api/ApiErrorsClient.scss';

const ApiErrorsClient = () => {
  return (
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
      <div className='api-errors-client'>
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
            {data.errorsAreas.map((area) => (
              <DocsFeatureCard key={area.title} {...area} />
            ))}
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
            {data.invalidRequests.map((request) => (
              <DocsFeatureItem key={request.title} {...request} />
            ))}
          </div>
        </section>

        <section id='authentication-errors'>
          <h2>Authentication errors</h2>

          <p>
            Protected API resources can reject a request when the required
            authentication context is unavailable or cannot be validated.
          </p>

          <div className='api-errors-client__list'>
            {data.authenticationErrors.map((item) => (
              <DocsFeatureItem key={item.title} {...item} />
            ))}
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
            {data.resourcesErrors.map((resource) => (
              <DocsFeatureCard key={resource.title} {...resource} />
            ))}
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
            {data.apiErrors.map((item) => (
              <DocsFeatureItem key={item.title} {...item} />
            ))}
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
            {data.failedRequests.map((request) => (
              <DocsFeatureItem key={request.title} {...request} />
            ))}
          </div>
        </section>

        <section id='error-handling-principles'>
          <h2>Error handling principles</h2>

          <div className='api-errors-client__grid'>
            {data.errorPrinciples.map((primciple) => (
              <DocsFeatureCard key={primciple.title} {...primciple} />
            ))}
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
      </div>
    </DocsArticle>
  );
};

export default ApiErrorsClient;
