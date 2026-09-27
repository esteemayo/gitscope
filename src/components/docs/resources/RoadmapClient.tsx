'use client';

import DocsFeatureCard from '../DocsFeatureCard';
import DocsArticle from '../DocsArticle';
import DocsFeatureItem from '../DocsFeatureItem';
import DocsCallout from '../DocsCallout';

import * as data from '@/data/docs/resources/roadmap.data';
import '../../../styles/components/docs/resources/RoadmapClient.scss';

const RoadmapClient = () => {
  return (
    <DocsArticle
      category='Resources'
      title='Roadmap'
      description="Explore the areas of development that shape GitScope's future direction."
      previous={{
        title: 'Changelog',
        href: '/documentation/resources/changelog',
      }}
    >
      <div className='roadmap-client'>
        <section id='overview'>
          <h2>Overview</h2>

          <p>
            The GitScope roadmap describes the areas of development being
            considered for the project. It provides context around future
            improvements without treating planned work as a guaranteed release
            schedule.
          </p>

          <DocsCallout type='note'>
            Roadmap items can change as project requirements, technical
            constraints, and user feedback evolve.
          </DocsCallout>
        </section>

        <section id='roadmap-areas'>
          <h2>Roadmap areas</h2>

          <div className='roadmap-client__grid'>
            {data.roadmapAreas.map((area) => (
              <DocsFeatureCard key={area.title} {...area} />
            ))}
          </div>
        </section>

        <section id='analytics-direction'>
          <h2>Analytics direction</h2>

          <p>
            GitScope is designed around making GitHub activity easier to explore
            and understand. Future analytics work can extend the existing
            profile, repository, language, and contribution views with deeper
            context and additional ways to explore the data.
          </p>

          <div className='roadmap-client__list'>
            {data.analyticsDirection.map((direction) => (
              <DocsFeatureItem key={direction.title} {...direction} />
            ))}
          </div>
        </section>

        <section id='developer-platform-direction'>
          <h2>Developer platform direction</h2>

          <p>
            The developer platform can evolve alongside the core application.
            API capabilities, integrations, documentation, and developer tooling
            are areas that can support broader use of GitScope data.
          </p>

          <div className='roadmap-client__list'>
            {data.developerPlatforms.map((platform) => (
              <DocsFeatureItem key={platform.title} {...platform} />
            ))}
          </div>
        </section>

        <section id='product-experience'>
          <h2>Product experience</h2>

          <p>
            Future product work can focus on reducing friction across discovery,
            analysis, comparison, authentication, export, and sharing workflows.
          </p>

          <div className='roadmap-client__grid'>
            {data.productExperiences.map((experience) => (
              <DocsFeatureCard key={experience.title} {...experience} />
            ))}
          </div>
        </section>

        <section id='how-roadmap-items-are-considered'>
          <h2>How roadmap items are considered</h2>

          <div className='roadmap-client__list'>
            {data.roadmapItems.map((item) => (
              <DocsFeatureItem key={item.title} {...item} />
            ))}
          </div>
        </section>

        <section id='planned-vs-committed-work'>
          <h2>Planned vs committed work</h2>

          <p>
            Roadmap items represent direction rather than guaranteed delivery.
            An item can be refined, postponed, changed, or removed as the
            project evolves.
          </p>

          <DocsCallout type='warning'>
            A roadmap should not be treated as a release calendar. Refer to the
            changelog for documented changes that have already been introduced.
          </DocsCallout>
        </section>

        <section id='project-direction'>
          <h2>Project direction</h2>

          <div className='roadmap-client__grid'>
            {data.projectDirections.map((direction) => (
              <DocsFeatureCard key={direction.title} {...direction} />
            ))}
          </div>
        </section>

        <section id='contributing-to-the-direction'>
          <h2>Contributing to the direction</h2>

          <p>
            Feedback can help shape future development. Suggestions, issue
            reports, feature discussions, and contributions can provide useful
            context when evaluating potential roadmap work.
          </p>
        </section>

        <section id='documentation-journey'>
          <h2>Documentation journey</h2>

          <p>
            You have reached the end of the GitScope documentation navigation.
            You can return to any section from the documentation sidebar or use
            the search functionality to revisit a specific topic.
          </p>

          <DocsCallout type='tip'>
            For current project changes, review the Changelog. For planned
            direction, use this Roadmap.
          </DocsCallout>
        </section>
      </div>
    </DocsArticle>
  );
};

export default RoadmapClient;
