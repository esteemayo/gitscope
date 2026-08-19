'use client';

import TermsAcceptance from './acceptance/TermsAcceptance';
import TermsHero from './hero/TermsHero';
import TermsEligibility from './eligibility/TermsEligibility';
import TermsSummary from './summary/TermsSummary';
import TermsTableOfContents from './tableOfContents/TermsTableOfContents';
import TermsUpdated from './termsUpdated/TermsUpdated';
import TermsGithubAuthentication from './githubAuth/TermsGithubAuthentication';

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

      <TermsEligibility {...termsPageData.eligibility} />

      <TermsGithubAuthentication {...termsPageData.githubAuthentication} />
    </main>
  );
};

export default TermsClient;
