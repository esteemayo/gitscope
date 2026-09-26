'use client';

import {
  CheckCircle2,
  Database,
  FileJson2,
  Layers3,
  ListTree,
} from 'lucide-react';

import DocsFeatureCard from '../DocsFeatureCard';
import DocsArticle from '../DocsArticle';
import DocsFeatureItem from '../DocsFeatureItem';
import DocsCallout from '../DocsCallout';

import '../../../styles/components/docs/api/ApiResponsesClient.scss';

const ApiResponsesClient = () => {
  return (
    <main className='api-responses-client'>
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
            <DocsFeatureCard
              icon={CheckCircle2}
              title='Request status'
              description='Indicates whether the API request completed successfully.'
              accentColor='#22C55E'
            />

            <DocsFeatureCard
              icon={Database}
              title='Resource data'
              description='Contains the data returned by the requested API resource.'
              accentColor='#8B5CF6'
            />

            <DocsFeatureCard
              icon={FileJson2}
              title='Structured payload'
              description='Provides data in a format that application code can process.'
              accentColor='#06B6D4'
            />

            <DocsFeatureCard
              icon={ListTree}
              title='Error information'
              description='Provides context when the API cannot complete the requested operation.'
              accentColor='#EF4444'
            />
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
            <DocsFeatureItem
              title='Request completed'
              description='The API successfully processed the request.'
              accentColor='#22C55E'
            />

            <DocsFeatureItem
              title='Resource returned'
              description='The response contains the data associated with the requested resource.'
              accentColor='#8B5CF6'
            />

            <DocsFeatureItem
              title='Application processing'
              description='The client can parse and use the returned data according to the endpoint documentation.'
              accentColor='#06B6D4'
            />
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
            <DocsFeatureCard
              icon={Layers3}
              title='Profile data'
              description='Information associated with a GitHub developer profile.'
              accentColor='#8B5CF6'
            />

            <DocsFeatureCard
              icon={Database}
              title='Repository data'
              description='Information associated with a GitHub repository and its supported metrics.'
              accentColor='#22C55E'
            />

            <DocsFeatureCard
              icon={ListTree}
              title='Analytics data'
              description='Structured information used to represent GitScope analytics.'
              accentColor='#06B6D4'
            />
          </div>
        </section>

        <section id='reading-a-response'>
          <h2>Reading a response</h2>

          <div className='api-responses-client__flow'>
            <DocsFeatureItem
              title='1. Check the request result'
              description='Determine whether the request completed successfully before processing the payload.'
              accentColor='#8B5CF6'
            />

            <DocsFeatureItem
              title='2. Identify the resource'
              description='Determine which API resource produced the response.'
              accentColor='#06B6D4'
            />

            <DocsFeatureItem
              title='3. Read the returned data'
              description='Access the fields documented for the requested endpoint.'
              accentColor='#22C55E'
            />

            <DocsFeatureItem
              title='4. Handle missing data'
              description='Account for optional, unavailable, or empty values where the endpoint permits them.'
              accentColor='#F59E0B'
            />

            <DocsFeatureItem
              title='5. Handle failures'
              description='If the request failed, process the returned error information instead of the resource payload.'
              accentColor='#EF4444'
            />
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
            <DocsFeatureItem
              title='Empty collections'
              description='A valid resource can contain an empty collection when no matching data is available.'
              accentColor='#F59E0B'
            />

            <DocsFeatureItem
              title='Optional values'
              description='Some resource fields may be unavailable or empty depending on the underlying GitHub data.'
              accentColor='#06B6D4'
            />

            <DocsFeatureItem
              title='Limited analytics'
              description='Analytics may contain fewer data points when the source data does not provide enough information.'
              accentColor='#8B5CF6'
            />
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
            <DocsFeatureCard
              icon={CheckCircle2}
              title='Validate'
              description='Confirm that the returned data matches the structure expected by the application.'
              accentColor='#22C55E'
            />

            <DocsFeatureCard
              icon={Database}
              title='Normalize'
              description='Transform response data into the internal format required by the application when necessary.'
              accentColor='#8B5CF6'
            />

            <DocsFeatureCard
              icon={ListTree}
              title='Handle states'
              description='Account for loading, success, empty, and error states when consuming API data.'
              accentColor='#06B6D4'
            />
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
            <DocsFeatureItem
              title='Check before processing'
              description='Determine the request outcome before attempting to consume resource data.'
              accentColor='#8B5CF6'
            />

            <DocsFeatureItem
              title='Respect the documented structure'
              description='Use endpoint documentation to determine which fields are available.'
              accentColor='#06B6D4'
            />

            <DocsFeatureItem
              title='Handle incomplete data'
              description='Design clients to tolerate empty and optional values.'
              accentColor='#F59E0B'
            />

            <DocsFeatureItem
              title='Separate errors from data'
              description='Keep unsuccessful request handling separate from normal resource processing.'
              accentColor='#EF4444'
            />
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
      </DocsArticle>
    </main>
  );
};

export default ApiResponsesClient;
