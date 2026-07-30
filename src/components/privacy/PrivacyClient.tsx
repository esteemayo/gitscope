'use client';

import PrivacySummary from './privacySummary/PrivacySummary';
import PrivacyHero from './PrivacyHero';
import PrivacyPrinciples from './privacyPrinciples/PrivacyPrinciples';

import { privacyHeroContent } from '@/data/privacy/privacyHeroContent.data';
import { privacyPrinciples } from '@/data/privacy/privacyPrinciples.data';
import { privacySumaryItems } from '@/data/privacy/privacySummaryItems.data';

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
    </main>
  );
};

export default PrivacyClient;
