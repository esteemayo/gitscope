'use client';

import DocsArticle from '../DocsArticle';
import DocsCallout from '../DocsCallout';
import DocsFeatureCard from '../DocsFeatureCard';
import DocsFeatureItem from '../DocsFeatureItem';

import * as data from '@/data/docs/api/endpoints.data';
import '../../../styles/components/docs/api/ApiEndpointsClient.scss';

const ApiEndpointsClient = () => {
  return (
    <DocsArticle
      category='API'
      title='API Endpoints'
      description='Understand how GitScope API endpoints are organized and how to identify the resource required by your application.'
      previous={{
        title: 'Authentication',
        href: '/documentation/api/authentication',
      }}
      next={{
        title: 'Response',
        href: '/documentation/api/response',
      }}
    >
      <div className='api-endpoints-client'>
        <section id='overview'>
          <h2>Overview</h2>

          <p>
            API endpoints define the resources and operations available through
            GitScope. Each endpoint represents a specific API entry point that
            an application can use to request or work with GitScope data.
          </p>

          <DocsCallout type='note'>
            The endpoint structure described here focuses on the organization
            and behavior of the API. Use the implementation and endpoint
            reference for the exact paths and request parameters supported by
            your GitScope deployment.
          </DocsCallout>
        </section>

        <section id='endpoint-areas'>
          <h2>Endpoint areas</h2>

          <div className='api-endpoints-client__grid'>
            {data.endpointAreas.map((area) => (
              <DocsFeatureCard key={area.title} {...area} />
            ))}
          </div>
        </section>

        <section id='choosing-an-endpoint'>
          <h2>Choosing an endpoint</h2>

          <p>
            Start by identifying the type of data your application needs. The
            resource determines which endpoint should handle the request.
          </p>

          <div className='api-endpoints-client__list'>
            {data.choosingEndpoint.map((item) => (
              <DocsFeatureItem key={item.title} {...item} />
            ))}
          </div>
        </section>

        <section id='request-structure'>
          <h2>Request structure</h2>

          <p>
            An API request is made against a specific endpoint and can include
            the parameters required by that resource. The request context may
            also include authentication information when the endpoint requires
            protected access.
          </p>

          <div className='api-endpoints-client__flow'>
            {data.requestStructures.map((structure) => (
              <DocsFeatureItem key={structure.title} {...structure} />
            ))}
          </div>
        </section>

        <section id='endpoint-parameters'>
          <h2>Endpoint parameters</h2>

          <p>
            Parameters allow an endpoint to identify the specific data being
            requested. Depending on the resource, parameters may identify a
            GitHub user, repository, or another supported resource.
          </p>

          <DocsCallout type='tip'>
            Only send parameters supported by the endpoint. Treat undocumented
            parameters as unsupported rather than relying on behavior that may
            change between API versions.
          </DocsCallout>
        </section>

        <section id='authenticated-endpoints'>
          <h2>Authenticated endpoints</h2>

          <p>
            Some endpoints may depend on an authenticated GitScope session. When
            authentication is required, the request must provide the
            authentication context expected by the API.
          </p>

          <div className='api-endpoints-client__list'>
            {data.authenticatedEndpoints.map((endpoint) => (
              <DocsFeatureItem key={endpoint.title} {...endpoint} />
            ))}
          </div>
        </section>

        <section id='working-with-endpoint-responses'>
          <h2>Working with endpoint responses</h2>

          <p>
            A successful endpoint request returns structured API data.
            Applications should process the response according to the documented
            resource rather than assuming that every endpoint returns the same
            fields.
          </p>

          <div className='api-endpoints-client__grid'>
            {data.endpointResponses.map((response) => (
              <DocsFeatureCard key={response.title} {...response} />
            ))}
          </div>
        </section>

        <section id='endpoint-errors'>
          <h2>Endpoint errors</h2>

          <p>
            Endpoint requests can fail because of invalid parameters, missing
            authentication, unavailable resources, or other request and server
            conditions. Applications should inspect the returned error
            information before deciding how to recover.
          </p>

          <DocsCallout type='warning'>
            Do not assume that a failed request means the requested resource
            does not exist. Check the response and error context to determine
            why the request failed.
          </DocsCallout>
        </section>

        <section id='endpoint-principles'>
          <h2>Endpoint principles</h2>

          <div className='api-endpoints-client__list'>
            {data.endpointPrinciples.map((principle) => (
              <DocsFeatureItem key={principle.title} {...principle} />
            ))}
          </div>
        </section>

        <section id='next-steps'>
          <h2>Next steps</h2>

          <p>
            Continue with API responses to understand how GitScope communicates
            successful requests and how returned data should be handled.
          </p>
        </section>
      </div>
    </DocsArticle>
  );
};

export default ApiEndpointsClient;
