'use client';

import TermsUpdated from './termsUpdated/TermsUpdated';
import TermsHero from './hero/TermsHero';
import TermsAcceptance from './acceptance/TermsAcceptance';
import TermsSummary from './summary/TermsSummary';
import TermsTableOfContents from './tableOfContents/TermsTableOfContents';

import { termsPageData } from '@/data/terms/termsPageData.data';
import '../../styles/components/terms/TermsClient.scss';

const TermsClient = () => {
  return (
    <main className='terms-client'>
      <TermsHero {...termsPageData.hero} />

      <TermsUpdated {...termsPageData.termsUpdated} />

      <TermsSummary {...termsPageData.summary} />

      <TermsTableOfContents {...termsPageData.contents} />

      <TermsAcceptance {...termsPageData.acceptance} />
    </main>
  );
};

export default TermsClient;
