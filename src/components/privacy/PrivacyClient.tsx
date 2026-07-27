import PrivacyHero from './PrivacyHero';

import { privacyHeroStats } from '@/data/privacy/privacyHeroStats.data';

import '../../styles/components/privacy/PrivacyClient.scss';

const PrivacyClient = () => {
  return (
    <main className='privacy-client'>
      <PrivacyHero
        badge='Privacy First'
        title='Privacy Policy'
        subtitle='Your GitHub data belongs to you. GitScope only accesses the information required to generate accurate analytics while keeping your information secure.'
        lastUpdated='July 2026'
        summaryLink=''
        policyLink=''
        stats={privacyHeroStats}
      />
    </main>
  );
};

export default PrivacyClient;
