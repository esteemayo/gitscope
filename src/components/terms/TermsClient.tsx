'use client';

import TermsGithubDataApi from './githubDataApi/TermsGithubDataApi';
import TermsHero from './hero/TermsHero';
import TermsTableOfContents from './tableOfContents/TermsTableOfContents';
import TermsSummary from './summary/TermsSummary';
import TermsGithubAuthentication from './githubAuth/TermsGithubAuthentication';
import TermsUpdated from './termsUpdated/TermsUpdated';
import TermsAnalyticsAccuracy from './analyticsAccuracy/TermsAnalyticsAccuracy';
import TermsEligibility from './eligibility/TermsEligibility';
import TermsUserResponsibilities from './userResponsibilities/TermsUserResponsibilities';
import TermsAcceptance from './acceptance/TermsAcceptance';
import TermsIntellectualProperty from './intellectualProperty/TermsIntellectualProperty';
import TermsAcceptableUse from './acceptableUse/TermsAcceptableUse';

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

      <TermsGithubDataApi {...termsPageData.githubDataApi} />

      <TermsAnalyticsAccuracy {...termsPageData.analyticsAccuracy} />

      <TermsIntellectualProperty {...termsPageData.intellectualProperty} />
    </main>
  );
};

export default TermsClient;
