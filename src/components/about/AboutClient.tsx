'use client';

import AboutStats from './AboutStats';
import AboutHero from './AboutHero';
import AboutMission from './AboutMission';

import { missionTimeline } from '@/data/about/missionTimeline';
import { aboutStats } from '@/data/about/aboutStats';
import { missionPrinciples } from '@/data/about/missionPrinciples';
import { heroAnalytics } from '@/data/about/heroAnalytics';

import '../../styles/components/about/AboutClient.scss';

const AboutClient = () => {
  return (
    <main className='about-client'>
      <AboutHero
        title='Understand GitHub Like Never Before.'
        description='GitScope transforms GitHub repositories into beautiful analytics. Explore contributor activity, repository health, language usage, trends and performance through an elegant interface built for developers.'
        primaryButtonLabel='Explore dashboard'
        secondaryButtonLabel='View repository'
        primaryButtonHref='/'
        secondaryButtonHref='https://github.com'
        analytics={heroAnalytics}
      />

      <AboutStats
        title='Trusted by thousands of developers worldwide'
        description='GitScope transforms millions of GitHub events into actionable insights. Our platform helps developers and teams better understand repositories, contribution trends, and project health.'
        stats={aboutStats}
      />

      <AboutMission
        badge='Our Mission'
        title='Building GitHub analytics developers genuinely enjoy using.'
        description='GitScope was created to remove the complexity of understanding GitHub repositories. Instead of navigating endless commits, branches and contributor lists, we transform repository data into intuitive visual experiences that help developers, recruiters and engineering teams make informed decisions faster.'
        principles={missionPrinciples}
        timeline={missionTimeline}
      />
    </main>
  );
};

export default AboutClient;
