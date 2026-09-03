'use client';

import TermsGithubDataApi from './githubDataApi/TermsGithubDataApi';
import TermsHero from './hero/TermsHero';
import TermsAcceptableUse from './acceptableUse/TermsAcceptableUse';
import Contact from './contact/Contact';
import ThirdPartyServices from './thirdPartyServices/ThirdPartyServices';
import TermsSummary from './summary/TermsSummary';
import Termination from './termination/Termination';
import TermsTableOfContents from './tableOfContents/TermsTableOfContents';
import GoverningLaw from './governingLaw/GoverningLaw';
import ServiceAvailability from './serviceAvailability/ServiceAvailability';
import TermsUpdated from './termsUpdated/TermsUpdated';
import TermsGithubAuthentication from './githubAuth/TermsGithubAuthentication';
import TermsAcceptance from './acceptance/TermsAcceptance';
import TermsAnalyticsAccuracy from './analyticsAccuracy/TermsAnalyticsAccuracy';
import ChangesToTerms from './changesToTerms/ChangesToTerms';
import LimitationOfLiability from './limitationOfLiability/LimitationOfLiability';
import TermsUserContent from './userContent/TermsUserContent';
import TermsIntellectualProperty from './intellectualProperty/TermsIntellectualProperty';
import TermsEligibility from './eligibility/TermsEligibility';
import TermsUserResponsibilities from './userResponsibilities/TermsUserResponsibilities';
import TermsPrivacyData from './privacyData/TermsPrivacyData';
import AccountSuspension from './accountSuspension/AccountSuspension';

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

      <AccountSuspension {...termsPageData.accountSuspension} />

      <Termination {...termsPageData.termination} />

      <ChangesToTerms {...termsPageData.changesToTerms} />

      <GoverningLaw {...termsPageData.governingLaw} />

      <Contact {...termsPageData.contact} />
    </main>
  );
};

export default TermsClient;
