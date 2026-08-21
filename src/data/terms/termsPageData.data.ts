import { termsAcceptanceData } from './acceptance/termsAcceptanceData.data';
import { termsHeroData } from './termsHero/termsHeroData.data';
import { termsEligibilityData } from './eligibility/termsEligibilityData.data';
import { termsSummaryData } from './summary/termsSummaryData.data';
import { termsGitHubAuthenticationData } from './githhubAuth/termsGithubAuthData.data';
import { termsUpdatedData } from './termsUpdated/termsUpdatedData.data';
import { termsTableOfContentsData } from './termsTableOfContents/termsTableOfContentsData.data';
import { acceptableUseData } from './acceptableUse/acceptableUseData.data';
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
};
