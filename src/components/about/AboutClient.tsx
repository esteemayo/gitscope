'use client';

import WhyGitScope from './whyGitScope/WhyGitScope';
import AboutHero from './hero/AboutHero';
import AboutFeatures from './features/AboutFeatures';
import AboutStats from './stats/AboutStats';
import Architecture from './architecture/Architecture';
import AboutMission from './mission/AboutMission';

import { comparisonData } from '@/data/about/comparisonData';
import { whyItems } from '@/data/about/whyItems';
import { missionTimeline } from '@/data/about/missionTimeline';
import { aboutStats } from '@/data/about/aboutStats';
import { missionPrinciples } from '@/data/about/missionPrinciples';
import { heroAnalytics } from '@/data/about/heroAnalytics';
import { architectureFeatures } from '@/data/about/architectureFeatures';
import { aboutFeatures } from '@/data/about/aboutFeatures';

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
        badge='Platform Features'
        title='Everything you need to understand GitHub repositories through modern analytics.'
        description='Explore repositories through beautiful visualizations, developer insights, contribution history and repository intelligence.'
        features={aboutFeatures}
      />

      <WhyGitScope
        badge='Why GitScope'
        title='Built to help developers understand repositories, not just browse them.'
        description='GitScope transforms GitHub repository data into meaningful insights through modern analytics, intuitive visualization, repository health metrics, and developer-focused experiences.'
        values={whyItems}
        comparison={comparisonData}
      />

      <Architecture
        badge='Architecture'
        title='Engineered for speed, scalability and developer experience.'
        description='GitScope combines modern frontend architecture, efficient data processing and secure authentication to deliver fast, reliable repository analytics.'
        features={architectureFeatures}
      />
    </main>
  );
};

export default AboutClient;
