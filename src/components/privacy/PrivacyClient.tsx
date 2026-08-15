'use client';

import ChildrenPrivacy from './childrenPrivacy/ChildrenPrivacy';
import PrivacyHero from './PrivacyHero';
import InformationCollected from './information/InformationCollected';
import YourRights from './yourRights/YourRights';
import PrivacyPrinciples from './privacyPrinciples/PrivacyPrinciples';
import PrivacyFAQ from './privacyFAQ/PrivacyFAQ';
import InternationalUsers from './internationalUsers/InternationalUsers';
import DataRetention from './dataRetention/DataRetention';
import ThirdPartyServices from './thirdPartyServices/ThirdPartyServices';
import PrivacyContact from './privacyContact/PrivacyContact';
import CookiesLocalStorage from './cookiesLocalStorage/CookiesLocalStorage';
import PrivacySummary from './privacySummary/PrivacySummary';
import HowWeUseYourInformation from './howWeUseYourInfo/HowWeUseYourInformation';
import GitHubPermissions from './permissions/GitHubPermissions';
import PolicyUpdatesTimeline from './policyUpdatesTimeline/PolicyUpdatesTimeline';
import DataStorageSecurity from './dataStorage/DataStorageSecurity';

import { privacyPageData } from '@/data/privacy/privacyPageData.data';
import '../../styles/components/privacy/PrivacyClient.scss';

const PrivacyClient = () => {
  return (
    <main className='privacy-client'>
      <PrivacyHero {...privacyPageData.hero} />

      <PrivacySummary {...privacyPageData.summary} />

      <PrivacyPrinciples {...privacyPageData.principles} />

      <InformationCollected {...privacyPageData.information} />

      <HowWeUseYourInformation {...privacyPageData.usageData} />

      <GitHubPermissions {...privacyPageData.permissions} />

      <DataStorageSecurity {...privacyPageData.storageSecurity} />

      <CookiesLocalStorage {...privacyPageData.storageData} />

      <ThirdPartyServices {...privacyPageData.thirdParty} />

      <YourRights {...privacyPageData.yourRights} />

      <DataRetention {...privacyPageData.dataRetention} />

      <ChildrenPrivacy {...privacyPageData.childrenPrivacy} />

      <InternationalUsers {...privacyPageData.internationalUsers} />

      <PolicyUpdatesTimeline {...privacyPageData.policyUpdates} />

      <PrivacyFAQ {...privacyPageData.faq} />

      <PrivacyContact {...privacyPageData.contact} />
    </main>
  );
};

export default PrivacyClient;
