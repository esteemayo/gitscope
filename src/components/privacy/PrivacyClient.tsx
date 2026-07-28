'use client';

import PrivacyHero from './PrivacyHero';
import PrivacySummary from './privacySummary/PrivacySummary';

import { privacyHeroContent } from '@/data/privacy/privacyHeroContent.data';
import { privacySumaryItems } from '@/data/privacy/privacySummaryItems.data';

import '../../styles/components/privacy/PrivacyClient.scss';

const PrivacyClient = () => {
  return (
    <main className='privacy-client'>
      <PrivacyHero {...privacyHeroContent} />

      <PrivacySummary
        title='Privacy at a Glance'
        subtitle='A quick overview of how GitScope protects your information.'
        items={privacySumaryItems}
      />
    </main>
  );
};

export default PrivacyClient;
