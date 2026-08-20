import { termsEligibilityData } from './eligibility/termsEligibilityData.data';
import { termsHeroData } from './termsHero/termsHeroData.data';
import { termsGitHubAuthenticationData } from './githhubAuth/termsGithubAuthData.data';
import { termsSummaryData } from './summary/termsSummaryData.data';
import { termsTableOfContentsData } from './termsTableOfContents/termsTableOfContentsData.data';
import { termsUpdatedData } from './termsUpdated/termsUpdatedData.data';
import { termsUserResponsibilitiesData } from './userResponsibilities/termsUserResponsibilitiesData.data';
import { termsAcceptanceData } from './acceptance/termsAcceptanceData.data';

export const termsPageData = {
  hero: termsHeroData,
  termsUpdated: termsUpdatedData,
  summary: termsSummaryData,
  contents: termsTableOfContentsData,
  acceptance: termsAcceptanceData,
  eligibility: termsEligibilityData,
  githubAuthentication: termsGitHubAuthenticationData,
  userResponsibilities: termsUserResponsibilitiesData,
};
