'use client';

import AboutMission from './mission/AboutMission';
import FAQ from './FAQ/FAQ';
import WhyGitScope from './whyGitScope/WhyGitScope';
import Roadmap from './roadmap/Roadmap';
import AboutFeatures from './features/AboutFeatures';
import AboutHero from './hero/AboutHero';
import Architecture from './architecture/Architecture';
import CallToAction from './CallToAction';
import TechnologyStack from './technologyStack/TechnologyStack';
import AboutStats from './stats/AboutStats';
import PrivacySecurity from './privacySecurity/PrivacySecurity';
import WhoItsFor from './whoItsFor/WhoItsFor';

import { faqItems } from '@/data/about/faq.data';
import { ctaContent } from '@/data/about/cta.data';

import { aboutPageData } from '@/data/about/aboutPageData';
import '../../styles/components/about/AboutClient.scss';

const AboutClient = () => {
  return (
    <main className='about-client'>
      <AboutHero {...aboutPageData.hero} />

      <AboutStats {...aboutPageData.stats} />

      <AboutMission {...aboutPageData.mission} />

      <AboutFeatures {...aboutPageData.features} />

      <WhyGitScope {...aboutPageData.whyGitScope} />

      <Architecture {...aboutPageData.architecture} />

      <WhoItsFor {...aboutPageData.audiences} />

      <TechnologyStack {...aboutPageData.technologyStack} />

      <PrivacySecurity {...aboutPageData.privacySecurity} />

      <Roadmap {...aboutPageData.roadmap} />

      <FAQ
        badge='Frequently Asked Question'
        title='Answers to common questions.'
        description='Everything you need to know about GitScope, from authentication and privacy to repository analytics and future plans.'
        items={faqItems}
      />

      <CallToAction {...ctaContent} />
    </main>
  );
};

export default AboutClient;
