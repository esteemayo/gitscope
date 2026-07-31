'use client';

import InformationCollected from './information/InformationCollected';
import PrivacyHero from './PrivacyHero';
import PrivacyPrinciples from './privacyPrinciples/PrivacyPrinciples';
import PrivacySummary from './privacySummary/PrivacySummary';

import { privacyHeroContent } from '@/data/privacy/privacyHeroContent.data';
import * as information from '@/data/privacy/informationCollected.data';
import { privacySumaryItems } from '@/data/privacy/privacySummaryItems.data';
import { privacyPrinciples } from '@/data/privacy/privacyPrinciples.data';

import '../../styles/components/privacy/PrivacyClient.scss';

const PrivacyClient = () => {
  return (
    <main className='privacy-client'>
      <PrivacyHero {...privacyHeroContent} />

      <PrivacySummary
        badge='Privacy Overview'
        title='Privacy at a Glance.'
        subtitle='Understand how GitScope handles your data before exploring the complete privacy policy.'
        items={privacySumaryItems}
      />

      <PrivacyPrinciples
        badge='Privacy Principles'
        title='Privacy Built Into Every Decision.'
        subtitle='GitScope is designed around a set of principles that prioritize transparency, security, and user control. These principles guide how we collect, process, store, and protect your information across every feature.'
        principles={privacyPrinciples}
      />

      <InformationCollected
        badge='Information We Collect'
        title='Only the Data Needed to Power GitScope.'
        subtitle='GitScope only collects information required to authenticate your account, generate repository analytics, and improve your experience. We never request unnecessary access to your GutHub account.'
        stats={information.informationCollectedStats}
        categories={information.informationCollected}
      />
    </main>
  );
};

export default PrivacyClient;
