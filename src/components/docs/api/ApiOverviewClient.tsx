'use client';

import DocsFeatureCard from '../DocsFeatureCard';
import DocsArticle from '../DocsArticle';
import DocsFeatureItem from '../DocsFeatureItem';
import DocsCallout from '../DocsCallout';

import * as data from '@/data/docs/api/overview.data';
import '../../../styles/components/docs/api/ApiOverviewClient.scss';

const ApiOverviewClient = () => {
  return (
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
      <div className='api-overview-client'>
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
            {data.apiProvides.map((item) => (
              <DocsFeatureCard key={item.title} {...item} />
            ))}
          </div>
        </section>

        <section id='api-areas'>
          <h2>API areas</h2>

          <div className='api-overview-client__list'>
            {data.apiAreas.map((area) => (
              <DocsFeatureItem key={area.title} {...area} />
            ))}
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
            {data.apiLayers.map((layer) => (
              <DocsFeatureItem key={layer.title} {...layer} />
            ))}
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
            {data.apiWorks.map((work) => (
              <DocsFeatureItem key={work.title} {...work} />
            ))}
          </div>
        </section>

        <section id='api-principles'>
          <h2>API principles</h2>

          <div className='api-overview-client__grid'>
            {data.apiPrinciples.map((principle) => (
              <DocsFeatureCard key={principle.title} {...principle} />
            ))}
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
      </div>
    </DocsArticle>
  );
};

export default ApiOverviewClient;
