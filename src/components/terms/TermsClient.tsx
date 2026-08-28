'use client';

import TermsGithubDataApi from './githubDataApi/TermsGithubDataApi';
import TermsHero from './hero/TermsHero';
import TermsAcceptableUse from './acceptableUse/TermsAcceptableUse';
import TermsSummary from './summary/TermsSummary';
import TermsTableOfContents from './tableOfContents/TermsTableOfContents';
import TermsUpdated from './termsUpdated/TermsUpdated';
import TermsGithubAuthentication from './githubAuth/TermsGithubAuthentication';
import TermsAcceptance from './acceptance/TermsAcceptance';
import TermsAnalyticsAccuracy from './analyticsAccuracy/TermsAnalyticsAccuracy';
import TermsUserContent from './userContent/TermsUserContent';
import TermsIntellectualProperty from './intellectualProperty/TermsIntellectualProperty';
import TermsEligibility from './eligibility/TermsEligibility';
import TermsUserResponsibilities from './userResponsibilities/TermsUserResponsibilities';
import TermsPrivacyData from './privacyData/TermsPrivacyData';

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

      <TermsUserContent {...termsPageData.userContent} />

      <TermsPrivacyData {...termsPageData.privacyData} />
    </main>
  );
};

export default TermsClient;
