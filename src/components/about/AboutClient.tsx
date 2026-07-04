'use client';

import AboutHero from './AboutHero';

import { heroStats } from '@/data/about/heroStats';
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
        stats={heroStats}
        analytics={heroAnalytics}
      />
    </main>
  );
};

export default AboutClient;
