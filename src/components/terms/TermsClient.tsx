'use client';

import TermsGithubDataApi from './githubDataApi/TermsGithubDataApi';
import TermsHero from './hero/TermsHero';
import TermsAcceptableUse from './acceptableUse/TermsAcceptableUse';
import TermsSummary from './summary/TermsSummary';
import ThirdPartyServices from './thirdPartyServices/ThirdPartyServices';
import TermsUpdated from './termsUpdated/TermsUpdated';
import TermsTableOfContents from './tableOfContents/TermsTableOfContents';
import TermsAcceptance from './acceptance/TermsAcceptance';
import TermsGithubAuthentication from './githubAuth/TermsGithubAuthentication';
import TermsUserContent from './userContent/TermsUserContent';
import TermsAnalyticsAccuracy from './analyticsAccuracy/TermsAnalyticsAccuracy';
import TermsEligibility from './eligibility/TermsEligibility';
import LimitationOfLiability from './limitationOfLiability/LimitationOfLiability';
import TermsPrivacyData from './privacyData/TermsPrivacyData';
import TermsIntellectualProperty from './intellectualProperty/TermsIntellectualProperty';
import AccountSuspension from './accountSuspension/AccountSuspension';
import TermsUserResponsibilities from './userResponsibilities/TermsUserResponsibilities';
import ServiceAvailability from './serviceAvailability/ServiceAvailability';

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

      <ThirdPartyServices {...termsPageData.thirdPartyServices} />

      <ServiceAvailability {...termsPageData.serviceAvailability} />

      <LimitationOfLiability {...termsPageData.limitationOfLiability} />

      <AccountSuspension />
    </main>
  );
};

export default TermsClient;
