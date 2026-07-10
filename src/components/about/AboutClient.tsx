'use client';

import AboutFeatures from './features/AboutFeatures';
import AboutHero from './hero/AboutHero';
import AboutMission from './mission/AboutMission';
import AboutStats from './stats/AboutStats';

import { aboutFeatures } from '@/data/about/aboutFeatures';
import { aboutStats } from '@/data/about/aboutStats';
import { missionTimeline } from '@/data/about/missionTimeline';
import { heroAnalytics } from '@/data/about/heroAnalytics';
import { missionPrinciples } from '@/data/about/missionPrinciples';

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

      <AboutFeatures
        badge='Powerful Features'
        title='Everything you need to understand GitHub repositories through modern analytics.'
        description='GitScope combines repository intelligence, visual dashboards and developer insights into one seamless experience.'
        features={aboutFeatures}
      />
    </main>
  );
};

export default AboutClient;
