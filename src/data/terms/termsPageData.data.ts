import { changesToTermsData } from './changesToTerms/changesToTermsData.data';
import { termsHeroData } from './termsHero/termsHeroData.data';
import { termsEligibilityData } from './eligibility/termsEligibilityData.data';
import { termsSummaryData } from './summary/termsSummaryData.data';
import { termsGitHubAuthenticationData } from './githhubAuth/termsGithubAuthData.data';
import { userContentData } from './userContent/userContentData.data';
import { analyticsAccuracyData } from './analyticsAccuracy/analyticsAccuracyData.data';
import { privacyDataData } from './privacyData/privacyDataData.data';
import { accountSuspensionData } from './accountSuspension/accountSuspensionData.data';
import { terminationData } from './termination/terminationData.data';
import { thirdPartyServicesData } from './thirdPartyServices/thirdPartyServicesData.data';
import { termsUpdatedData } from './termsUpdated/termsUpdatedData.data';
import { serviceAvailabilityData } from './serviceAvailability/serviceAvailabilityData.data';
import { governingLawData } from './governingLaw/governingLawData.data';
import { termsTableOfContentsData } from './termsTableOfContents/termsTableOfContentsData.data';
import { acceptableUseData } from './acceptableUse/acceptableUseData.data';
import { intellectualPropertyData } from './intellectualProperty/intellectualPropertyData.data';
import { githubDataApiData } from './githubDataApi/githubDataApiData.data';
import { limitationOfLiabilityData } from './limitationOfLiability/limitationOfLiabilityData.data';
import { termsAcceptanceData } from './acceptance/termsAcceptanceData.data';
import { termsUserResponsibilitiesData } from './userResponsibilities/termsUserResponsibilitiesData.data';

export const termsPageData = {
  hero: termsHeroData,
  termsUpdated: termsUpdatedData,
  summary: termsSummaryData,
  contents: termsTableOfContentsData,
  acceptance: termsAcceptanceData,
  eligibility: termsEligibilityData,
  githubAuthentication: termsGitHubAuthenticationData,
  userResponsibilities: termsUserResponsibilitiesData,
  acceptableUse: acceptableUseData,
  githubDataApi: githubDataApiData,
  analyticsAccuracy: analyticsAccuracyData,
  intellectualProperty: intellectualPropertyData,
  userContent: userContentData,
  privacyData: privacyDataData,
  thirdPartyServices: thirdPartyServicesData,
  serviceAvailability: serviceAvailabilityData,
  limitationOfLiability: limitationOfLiabilityData,
  accountSuspension: accountSuspensionData,
  termination: terminationData,
  changesToTerms: changesToTermsData,
  governingLaw: governingLawData,
};
