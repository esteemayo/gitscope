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
        badge='Privacy Overview'
        title='Privacy at a Glance'
        subtitle='Understand how GitScope handles your data before exploring the complete privacy policy.'
        items={privacySumaryItems}
      />
    </main>
  );
};

export default PrivacyClient;
