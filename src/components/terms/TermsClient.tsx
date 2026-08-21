'use client';

import TermsEligibility from './eligibility/TermsEligibility';
import TermsHero from './hero/TermsHero';
import TermsAcceptableUse from './acceptableUse/TermsAcceptableUse';
import TermsSummary from './summary/TermsSummary';
import TermsTableOfContents from './tableOfContents/TermsTableOfContents';
import TermsUpdated from './termsUpdated/TermsUpdated';
import TermsGithubAuthentication from './githubAuth/TermsGithubAuthentication';
import TermsAcceptance from './acceptance/TermsAcceptance';
import TermsUserResponsibilities from './userResponsibilities/TermsUserResponsibilities';

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

      <TermsUserResponsibilities {...termsPageData.userResponsibilities} />

      <TermsAcceptableUse {...termsPageData.acceptableUse} />
    </main>
  );
};

export default TermsClient;
