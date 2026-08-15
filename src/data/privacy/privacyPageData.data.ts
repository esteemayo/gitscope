import { browserStorageData } from './browserStorage/browserStorageContent.data';
import { privacyFAQData } from './privacyFAQ/privacyFAQData.data';
import { childrenPrivacyData } from './childrenPrivacy/childrenPrivacyData.data';
import { yourRightsData } from './yourRights/yourRightsData.data';
import { githubPermissionsData } from './githubPermissions/githubPermissionsData.data';
import { privacyHeroData } from './privacyHero/privacyHeroData.data';
import { privacyPrinciplesData } from './privacyPrinciples/privacyPrinciplesData.data';
import { privacyUsageData } from './privacyUsage/privacyUsageData.data';
import { internationalUsersData } from './internationalUsers/internationalUsersData.data';
import { dataRetentionData } from './dataRetention/dataRentionData.data';
import { thirdPartyServicesData } from './thirdPartyServices/thirdPartyServicesData.data';
import { privacyContactData } from './privacyContact/privacyContactData.data';
import { informationCollectedData } from './informationCollected/informationCollectedData.data';
import { privacySummaryData } from './privacySummary/privacySummaryData.data';
import { policyUpdatesTimelineData } from './policyUpdatesTimeline/policyUpdatesTimelineData.data';
import { storageSecurityData } from './storageSecurity/storageSecurityData.data';

export const privacyPageData = {
  hero: privacyHeroData,
  summary: privacySummaryData,
  principles: privacyPrinciplesData,
  information: informationCollectedData,
  usageData: privacyUsageData,
  permissions: githubPermissionsData,
  storageSecurity: storageSecurityData,
  storageData: browserStorageData,
  thirdParty: thirdPartyServicesData,
  yourRights: yourRightsData,
  dataRetention: dataRetentionData,
  childrenPrivacy: childrenPrivacyData,
  internationalUsers: internationalUsersData,
  policyUpdates: policyUpdatesTimelineData,
  faq: privacyFAQData,
  contact: privacyContactData,
};
