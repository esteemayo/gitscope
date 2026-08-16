'use client';

import TermsHero from './hero/TermsHero';
import TermsUpdated from './termsUpdated/TermsUpdated';

import { termsPageData } from '@/data/terms/termsPageData.data';
import '../../styles/components/terms/TermsClient.scss';

const TermsClient = () => {
  return (
    <main className='terms-client'>
      <TermsHero {...termsPageData.hero} />

      <TermsUpdated {...termsPageData.termsUpdated} />
    </main>
  );
};

export default TermsClient;
