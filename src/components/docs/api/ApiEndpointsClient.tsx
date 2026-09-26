'use client';

import { BarChart3, GitBranch, Languages, UserRound } from 'lucide-react';

import DocsArticle from '../DocsArticle';
import DocsCallout from '../DocsCallout';
import DocsFeatureCard from '../DocsFeatureCard';
import DocsFeatureItem from '../DocsFeatureItem';

import '../../../styles/components/docs/api/ApiEndpointsClient.scss';

const ApiEndpointsClient = () => {
  return (
    <main className='api-endpoints-client'>
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
            <DocsFeatureCard
              icon={UserRound}
              title='Profiles'
              description='Resources related to GitHub developer profiles and profile-level analytics.'
              accentColor='#8B5CF6'
            />

            <DocsFeatureCard
              icon={GitBranch}
              title='Repositories'
              description='Resources used to retrieve repository information and repository-level analytics.'
              accentColor='#22C55E'
            />

            <DocsFeatureCard
              icon={BarChart3}
              title='Contributions'
              description='Resources related to GitHub contribution activity and contribution analytics.'
              accentColor='#06B6D4'
            />

            <DocsFeatureCard
              icon={Languages}
              title='Languages'
              description='Resources used to work with programming language distribution and related analytics.'
              accentColor='#F59E0B'
            />
          </div>
        </section>

        <section id='choosing-an-endpoint'>
          <h2>Choosing an endpoint</h2>

          <p>
            Start by identifying the type of data your application needs. The
            resource determines which endpoint should handle the request.
          </p>

          <div className='api-endpoints-client__list'>
            <DocsFeatureItem
              title='Profile data'
              description='Use a profile-oriented resource when your application needs information about a GitHub developer.'
              accentColor='#8B5CF6'
            />

            <DocsFeatureItem
              title='Repository data'
              description='Use a repository-oriented resource when working with repository details or project metrics.'
              accentColor='#22C55E'
            />

            <DocsFeatureItem
              title='Contribution data'
              description='Use a contribution-oriented resource when retrieving activity over time.'
              accentColor='#06B6D4'
            />

            <DocsFeatureItem
              title='Language data'
              description='Use a language-oriented resource when analyzing programming language distribution.'
              accentColor='#F59E0B'
            />
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
            <DocsFeatureItem
              title='1. Resource'
              description='Identify the API resource that provides the data you need.'
              accentColor='#8B5CF6'
            />

            <DocsFeatureItem
              title='2. Endpoint'
              description='Send the request to the endpoint associated with that resource.'
              accentColor='#06B6D4'
            />

            <DocsFeatureItem
              title='3. Parameters'
              description='Provide the parameters required by the endpoint.'
              accentColor='#F59E0B'
            />

            <DocsFeatureItem
              title='4. Authentication'
              description='Include the required authenticated context when the resource is protected.'
              accentColor='#22C55E'
            />

            <DocsFeatureItem
              title='5. Response'
              description='Process the structured response returned by the API.'
              accentColor='#14B8A6'
            />
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
            <DocsFeatureItem
              title='Public access'
              description='Endpoints intended for public data can be accessed without an authenticated session when supported.'
              accentColor='#22C55E'
            />

            <DocsFeatureItem
              title='Authenticated access'
              description='Protected endpoints require the appropriate authenticated context.'
              accentColor='#8B5CF6'
            />

            <DocsFeatureItem
              title='Access validation'
              description='The API validates the request context before returning protected data.'
              accentColor='#06B6D4'
            />
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
            <DocsFeatureCard
              icon={UserRound}
              title='Profile response'
              description='Contains data associated with the requested GitHub profile and supported profile analytics.'
              accentColor='#8B5CF6'
            />

            <DocsFeatureCard
              icon={GitBranch}
              title='Repository response'
              description='Contains information associated with the requested repository and its supported metrics.'
              accentColor='#22C55E'
            />

            <DocsFeatureCard
              icon={BarChart3}
              title='Analytics response'
              description='Contains structured analytics data used by GitScope features.'
              accentColor='#06B6D4'
            />
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
            <DocsFeatureItem
              title='Use the appropriate resource'
              description='Choose an endpoint based on the type of data your application needs.'
              accentColor='#8B5CF6'
            />

            <DocsFeatureItem
              title='Respect documented parameters'
              description='Send only the parameters supported by the selected endpoint.'
              accentColor='#F59E0B'
            />

            <DocsFeatureItem
              title='Handle responses explicitly'
              description='Process successful and unsuccessful responses as separate application states.'
              accentColor='#22C55E'
            />

            <DocsFeatureItem
              title='Protect authenticated requests'
              description='Keep authentication information secure and use it only where required.'
              accentColor='#EF4444'
            />
          </div>
        </section>

        <section id='next-steps'>
          <h2>Next steps</h2>

          <p>
            Continue with API responses to understand how GitScope communicates
            successful requests and how returned data should be handled.
          </p>
        </section>
      </DocsArticle>
    </main>
  );
};

export default ApiEndpointsClient;
