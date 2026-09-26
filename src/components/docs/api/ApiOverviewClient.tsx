'use client';

import {
  BarChart3,
  Database,
  GitBranch,
  ShieldCheck,
  Workflow,
} from 'lucide-react';

import DocsFeatureCard from '../DocsFeatureCard';
import DocsArticle from '../DocsArticle';
import DocsFeatureItem from '../DocsFeatureItem';
import DocsCallout from '../DocsCallout';

import '../../../styles/components/docs/api/ApiOverviewClient.scss';

const ApiOverviewClient = () => {
  return (
    <main className='api-overview-client'>
      <DocsArticle
        category='API'
        title='API Overview'
        description='Understand the GitScope API, its purpose, available resources, and how API requests fit into the platform.'
        previous={{
          title: 'Share a Profile',
          href: '/documentation/guides/share-profile',
        }}
        next={{
          title: 'Authentication',
          href: '/documentation/api/authentication',
        }}
      >
        <section id='overview'>
          <h2>Overview</h2>

          <p>
            The GitScope API provides a programmatic way to work with GitHub
            analytics data used throughout the platform. It separates data
            access from the user interface so analytics can be retrieved and
            processed consistently.
          </p>

          <DocsCallout type='note'>
            The API documentation describes the concepts and behavior exposed by
            GitScope. Refer to the individual API pages for authentication,
            endpoints, responses, and error handling.
          </DocsCallout>
        </section>

        <section id='what-the-api-provides'>
          <h2>What the API provides</h2>

          <div className='api-overview-client__grid'>
            <DocsFeatureCard
              icon={BarChart3}
              title='Analytics data'
              description='Access the data used to represent GitHub profiles, repositories, languages, and contribution activity.'
              accentColor='#8B5CF6'
            />

            <DocsFeatureCard
              icon={GitBranch}
              title='GitHub data'
              description='Work with GitHub-related information retrieved and processed by GitScope.'
              accentColor='#22C55E'
            />

            <DocsFeatureCard
              icon={Database}
              title='Structured resources'
              description='Interact with API resources through predictable request and response structures.'
              accentColor='#06B6D4'
            />

            <DocsFeatureCard
              icon={Workflow}
              title='Programmatic access'
              description='Use API-based access when application code needs GitScope analytics without relying on the dashboard interface.'
              accentColor='#F59E0B'
            />
          </div>
        </section>

        <section id='api-areas'>
          <h2>API areas</h2>

          <div className='api-overview-client__list'>
            <DocsFeatureItem
              title='Authentication'
              description='Understand how authenticated API access works and which requests require authentication.'
              accentColor='#8B5CF6'
            />

            <DocsFeatureItem
              title='Endpoints'
              description='Explore the API resources available for retrieving GitScope data.'
              accentColor='#06B6D4'
            />

            <DocsFeatureItem
              title='Responses'
              description='Learn how API responses are structured and how returned data should be interpreted.'
              accentColor='#22C55E'
            />

            <DocsFeatureItem
              title='Errors'
              description='Understand API failures, error responses, and how to handle unsuccessful requests.'
              accentColor='#EF4444'
            />
          </div>
        </section>

        <section id='how-the-api-fits-into-gitscope'>
          <h2>How the API fits into GitScope</h2>

          <p>
            GitScope uses multiple layers to turn GitHub data into analytics.
            The API sits between data retrieval and the application experience,
            providing a consistent interface for working with the resulting
            data.
          </p>

          <div className='api-overview-client__flow'>
            <DocsFeatureItem
              title='GitHub'
              description='Source of the underlying developer and repository data.'
              accentColor='#F97316'
            />

            <DocsFeatureItem
              title='GitScope data layer'
              description='Retrieves, processes, and prepares GitHub data for the application.'
              accentColor='#8B5CF6'
            />

            <DocsFeatureItem
              title='GitScope API'
              description='Exposes application data through documented API resources.'
              accentColor='#06B6D4'
            />

            <DocsFeatureItem
              title='GitScope interface'
              description='Uses the available data to present analytics and insights to users.'
              accentColor='#22C55E'
            />
          </div>
        </section>

        <section id='api-access-and-authentication'>
          <h2>API access and authentication</h2>

          <p>
            Some GitScope functionality depends on authenticated access.
            Authentication determines which API operations can be performed and
            which data can be accessed.
          </p>

          <DocsCallout type='tip'>
            Authentication and API permissions are separate concerns.
            Authentication identifies the session, while permissions determine
            what data and operations are available to that session.
          </DocsCallout>
        </section>

        <section id='working-with-the-api'>
          <h2>Working with the API</h2>

          <div className='api-overview-client__list'>
            <DocsFeatureItem
              title='Start with authentication'
              description='Understand whether the API operation you need requires an authenticated session.'
              accentColor='#8B5CF6'
            />

            <DocsFeatureItem
              title='Choose a resource'
              description='Identify the API endpoint that corresponds to the data or operation you need.'
              accentColor='#06B6D4'
            />

            <DocsFeatureItem
              title='Read the response'
              description='Use the documented response structure to process the returned data.'
              accentColor='#22C55E'
            />

            <DocsFeatureItem
              title='Handle failures'
              description='Account for unsuccessful requests and use API error information when troubleshooting.'
              accentColor='#EF4444'
            />
          </div>
        </section>

        <section id='api-principles'>
          <h2>API principles</h2>

          <div className='api-overview-client__grid'>
            <DocsFeatureCard
              icon={ShieldCheck}
              title='Controlled access'
              description='API access should respect authentication and permission boundaries.'
              accentColor='#8B5CF6'
            />

            <DocsFeatureCard
              icon={Workflow}
              title='Consistent behavior'
              description='Requests and responses should follow the documented API conventions.'
              accentColor='#06B6D4'
            />

            <DocsFeatureCard
              icon={Database}
              title='Structured data'
              description='API resources provide structured information that applications can consume.'
              accentColor='#22C55E'
            />
          </div>
        </section>

        <section id='data-context'>
          <h2>Data context</h2>

          <p>
            GitScope analytics are derived from GitHub data and therefore
            reflect the information available to GitScope at the time of
            retrieval. API consumers should treat returned analytics as
            application data derived from GitHub rather than as an independent
            source of truth.
          </p>
        </section>

        <section id='next-steps'>
          <h2>Next steps</h2>

          <p>
            Continue with API authentication to understand how access to
            protected API functionality is established.
          </p>
        </section>
      </DocsArticle>
    </main>
  );
};

export default ApiOverviewClient;
