import { termsAcceptanceData } from './acceptance/termsAcceptanceData.data';
import { contactData } from './contact/contactData.data';
import { changesToTermsData } from './changesToTerms/changesToTermsData.data';
import { aboutTeamData } from './aboutTeam/aboutTeamData.data';
import { termsEligibilityData } from './eligibility/termsEligibilityData.data';
import { termsHeroData } from './termsHero/termsHeroData.data';
import { termsGitHubAuthenticationData } from './githhubAuth/termsGithubAuthData.data';
import { termsSummaryData } from './summary/termsSummaryData.data';
import { analyticsAccuracyData } from './analyticsAccuracy/analyticsAccuracyData.data';
import { userContentData } from './userContent/userContentData.data';
import { accountSuspensionData } from './accountSuspension/accountSuspensionData.data';
import { privacyDataData } from './privacyData/privacyDataData.data';
import { thirdPartyServicesData } from './thirdPartyServices/thirdPartyServicesData.data';
import { terminationData } from './termination/terminationData.data';
import { serviceAvailabilityData } from './serviceAvailability/serviceAvailabilityData.data';
import { termsUpdatedData } from './termsUpdated/termsUpdatedData.data';
import { termsTableOfContentsData } from './termsTableOfContents/termsTableOfContentsData.data';
import { governingLawData } from './governingLaw/governingLawData.data';
import { intellectualPropertyData } from './intellectualProperty/intellectualPropertyData.data';
import { acceptableUseData } from './acceptableUse/acceptableUseData.data';
import { limitationOfLiabilityData } from './limitationOfLiability/limitationOfLiabilityData.data';
import { githubDataApiData } from './githubDataApi/githubDataApiData.data';
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
  contact: contactData,
  aboutTeam: aboutTeamData,
};
