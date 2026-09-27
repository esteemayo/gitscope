'use client';

import DocsFeatureCard from '../DocsFeatureCard';
import DocsArticle from '../DocsArticle';
import DocsFeatureItem from '../DocsFeatureItem';
import DocsCallout from '../DocsCallout';

import * as data from '@/data/docs/api/response.data';
import '../../../styles/components/docs/api/ApiResponsesClient.scss';

const ApiResponsesClient = () => {
  return (
    <DocsArticle
      category='API'
      title='API Responses'
      description='Understand how GitScope API responses are structured, interpreted, and handled by applications.'
      previous={{
        title: 'Endpoints',
        href: '/documentation/api/endpoints',
      }}
      next={{
        title: 'Errors',
        href: '/documentation/api/errors',
      }}
    >
      <div className='api-responses-client'>
        <section id='overview'>
          <h2>Overview</h2>

          <p>
            GitScope API responses communicate the result of an API request. A
            successful response provides the requested data, while an
            unsuccessful response provides information that helps the
            application understand why the request could not be completed.
          </p>

          <DocsCallout type='note'>
            The exact fields returned by an endpoint depend on the resource
            being requested. Always use the endpoint-specific response structure
            rather than assuming every API response contains the same data.
          </DocsCallout>
        </section>

        <section id='response-structure'>
          <h2>Response structure</h2>

          <p>
            API responses are structured so applications can distinguish
            returned data from request status and error information.
            Resource-specific fields contain the data associated with the
            endpoint.
          </p>

          <div className='api-responses-client__grid'>
            {data.responseStructures.map((structure) => (
              <DocsFeatureCard key={structure.title} {...structure} />
            ))}
          </div>
        </section>

        <section id='successful-responses'>
          <h2>Successful responses</h2>

          <p>
            A successful response indicates that the API was able to process the
            request. The response contains the resource data requested by the
            application.
          </p>

          <div className='api-responses-client__list'>
            {data.successfulResponses.map((response) => (
              <DocsFeatureItem key={response.title} {...response} />
            ))}
          </div>
        </section>

        <section id='resource-data'>
          <h2>Resource data</h2>

          <p>
            Resource data represents the information requested from the API. The
            fields available depend on the endpoint and the resource being
            requested.
          </p>

          <div className='api-responses-client__grid'>
            {data.resourceData.map((item) => (
              <DocsFeatureCard key={item.title} {...item} />
            ))}
          </div>
        </section>

        <section id='reading-a-response'>
          <h2>Reading a response</h2>

          <div className='api-responses-client__flow'>
            {data.readingResponses.map((response) => (
              <DocsFeatureItem key={response.title} {...response} />
            ))}
          </div>
        </section>

        <section id='response-data-and-analytics'>
          <h2>Response data and analytics</h2>

          <p>
            GitScope analytics are derived from GitHub data available to the
            application. Returned analytics should therefore be interpreted
            within the context of the requested GitHub resource and the data
            available when the request was processed.
          </p>

          <DocsCallout type='tip'>
            Analytics responses describe data available to GitScope at the time
            of retrieval. They should not be treated as permanently static
            values.
          </DocsCallout>
        </section>

        <section id='empty-and-partial-data'>
          <h2>Empty and partial data</h2>

          <p>
            A successful request does not necessarily mean every possible field
            contains a value. Some GitHub profiles or repositories may have
            limited data available for a particular resource.
          </p>

          <div className='api-responses-client__list'>
            {data.emptyData.map((item) => (
              <DocsFeatureItem key={item.title} {...item} />
            ))}
          </div>
        </section>

        <section id='handling-responses-in-applications'>
          <h2>Handling responses in applications</h2>

          <p>
            Client applications should treat API responses as external data.
            Validate the response before using it and keep rendering logic
            resilient to missing or unexpected values.
          </p>

          <div className='api-responses-client__grid'>
            {data.applicationResponses.map((response) => (
              <DocsFeatureCard key={response.title} {...response} />
            ))}
          </div>
        </section>

        <section id='unsuccessful-responses'>
          <h2>Unsuccessful responses</h2>

          <p>
            When an API request cannot be completed, the response should be
            handled as an error state. Applications should use the available
            error information to determine whether the request should be
            retried, corrected, or presented to the user.
          </p>

          <DocsCallout type='warning'>
            Avoid treating every unsuccessful request as a server failure.
            Authentication, validation, resource availability, and other request
            conditions can produce different types of errors.
          </DocsCallout>
        </section>

        <section id='response-principles'>
          <h2>Response principles</h2>

          <div className='api-responses-client__list'>
            {data.responsePrinciples.map((principle) => (
              <DocsFeatureItem key={principle.title} {...principle} />
            ))}
          </div>
        </section>

        <section id='data-context'>
          <h2>Data context</h2>

          <p>
            API response data is based on information available to GitScope from
            GitHub and the processing performed by the platform. The
            availability and freshness of returned information can therefore
            depend on the underlying source data.
          </p>
        </section>

        <section id='next-steps'>
          <h2>Next steps</h2>

          <p>
            Continue with API errors to understand unsuccessful requests, common
            failure conditions, and how applications should handle them.
          </p>
        </section>
      </div>
    </DocsArticle>
  );
};

export default ApiResponsesClient;
