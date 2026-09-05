'use client';

import TermsEligibility from './eligibility/TermsEligibility';
import TermsHero from './hero/TermsHero';
import TermsGithubDataApi from './githubDataApi/TermsGithubDataApi';
import Contact from './contact/Contact';
import TermsAcceptableUse from './acceptableUse/TermsAcceptableUse';
import AboutTeam from './aboutTeam/AboutTeam';
import AccountSuspension from './accountSuspension/AccountSuspension';
import TermsSummary from './summary/TermsSummary';
import ThirdPartyServices from './thirdPartyServices/ThirdPartyServices';
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
import TermsPrivacyData from './privacyData/TermsPrivacyData';
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
