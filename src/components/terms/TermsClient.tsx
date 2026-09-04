'use client';

import TermsGithubDataApi from './githubDataApi/TermsGithubDataApi';
import TermsHero from './hero/TermsHero';
import TermsAcceptableUse from './acceptableUse/TermsAcceptableUse';
import Contact from './contact/Contact';
import ThirdPartyServices from './thirdPartyServices/ThirdPartyServices';
import AboutTeam from './aboutTeam/AboutTeam';
import TermsTableOfContents from './tableOfContents/TermsTableOfContents';
import TermsSummary from './summary/TermsSummary';
import ServiceAvailability from './serviceAvailability/ServiceAvailability';
import Termination from './termination/Termination';
import TermsGithubAuthentication from './githubAuth/TermsGithubAuthentication';
import GoverningLaw from './governingLaw/GoverningLaw';
import TermsAnalyticsAccuracy from './analyticsAccuracy/TermsAnalyticsAccuracy';
import TermsUpdated from './termsUpdated/TermsUpdated';
import LimitationOfLiability from './limitationOfLiability/LimitationOfLiability';
import TermsAcceptance from './acceptance/TermsAcceptance';
import TermsIntellectualProperty from './intellectualProperty/TermsIntellectualProperty';
import ChangesToTerms from './changesToTerms/ChangesToTerms';
import TermsUserResponsibilities from './userResponsibilities/TermsUserResponsibilities';
import TermsUserContent from './userContent/TermsUserContent';
import AccountSuspension from './accountSuspension/AccountSuspension';
import TermsEligibility from './eligibility/TermsEligibility';
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

      <ThirdPartyServices {...termsPageData.thirdPartyServices} />

      <ServiceAvailability {...termsPageData.serviceAvailability} />

      <LimitationOfLiability {...termsPageData.limitationOfLiability} />

      <AccountSuspension {...termsPageData.accountSuspension} />

      <Termination {...termsPageData.termination} />

      <ChangesToTerms {...termsPageData.changesToTerms} />

      <GoverningLaw {...termsPageData.governingLaw} />

      <Contact {...termsPageData.contact} />

      <AboutTeam {...termsPageData.aboutTeam} />
    </main>
  );
};

export default TermsClient;
