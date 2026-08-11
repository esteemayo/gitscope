'use client';

import InformationCollected from './information/InformationCollected';
import PrivacyHero from './PrivacyHero';
import PrivacyPrinciples from './privacyPrinciples/PrivacyPrinciples';
import YourRights from './yourRights/YourRights';
import InternationalUsers from './internationalUsers/InternationalUsers';
import DataRetention from './dataRetention/DataRetention';
import ThirdPartyServices from './thirdPartyServices/ThirdPartyServices';
import PrivacySummary from './privacySummary/PrivacySummary';
import CookiesLocalStorage from './cookiesLocalStorage/CookiesLocalStorage';
import ChildrenPrivacy from './childrenPrivacy/ChildrenPrivacy';
import HowWeUseYourInformation from './howWeUseYourInfo/HowWeUseYourInformation';
import GitHubPermissions from './permissions/GitHubPermissions';

import { githubPermissions } from '@/data/privacy/githubPermissions.data';
import DataStorageSecurity from './dataStorage/DataStorageSecurity';
import { privacyHeroContent } from '@/data/privacy/privacyHeroContent.data';
import { privacyPrinciples } from '@/data/privacy/privacyPrinciples.data';
import { securityLayers } from '@/data/privacy/securityLayers.data';
import { securityBanner } from '@/data/privacy/securityBanner.data';
import { permissionOverview } from '@/data/privacy/permissionOverview.data';
import { usageSteps } from '@/data/privacy/howWeUseInformation.data';
import { privacySumaryItems } from '@/data/privacy/privacySummaryItems.data';
import { securityOutcome } from '@/data/privacy/securityOutcome.data';
import { cookiesLocalStorageData } from '@/data/privacy/cookiesLocalStorage.data';
import { securityTrustItems } from '@/data/privacy/securityTrust.data';
import { yourRightsData } from '@/data/privacy/yourRights/yourRightsData.data';
import * as information from '@/data/privacy/informationCollected.data';
import { dataRetentionData } from '@/data/privacy/dataRetention/dataRentionData.data';
import { securityOverview } from '@/data/privacy/securityOverview.data';
import { thirdPartyServicesContent } from '@/data/privacy/thirdPartyServicesContent.data';
import { securityFeatures } from '@/data/privacy/securityFeatures.data';
import { childrenPrivacyData } from '@/data/privacy/childrenPrivacy/childrenPrivacyData.data';
import { internationalUsersData } from '@/data/privacy/internationalUsers/internationalUsersData.data';

import '../../styles/components/privacy/PrivacyClient.scss';

const PrivacyClient = () => {
  return (
    <main className='privacy-client'>
      <PrivacyHero {...privacyHeroContent} />

      <PrivacySummary
        badge='Privacy Overview'
        title='Privacy at a Glance.'
        subtitle='Understand how GitScope handles your data before exploring the complete privacy policy.'
        items={privacySumaryItems}
      />

      <PrivacyPrinciples
        badge='Privacy Principles'
        title='Privacy Built Into Every Decision.'
        subtitle='GitScope is designed around a set of principles that prioritize transparency, security, and user control. These principles guide how we collect, process, store, and protect your information across every feature.'
        principles={privacyPrinciples}
      />

      <InformationCollected
        badge='Information We Collect'
        title='Only the Data Needed to Power GitScope.'
        subtitle='GitScope only collects information required to authenticate your account, generate repository analytics, and improve your experience. We never request unnecessary access to your GutHub account.'
        stats={information.informationCollectedStats}
        categories={information.informationCollected}
      />

      <HowWeUseYourInformation
        badge='How We Use Your Information'
        title='A Transparent Journey From Data to Insights.'
        subtitle='Every piece of information processed by GitScope serves a clear purpose. From public GitHub data to personalized analytics, each step is designed to deliver valuable insights while respecting your privacy and maintaining strong security practices.'
        steps={usageSteps}
        defaultActiveStep='access'
      />

      <GitHubPermissions
        badge='GitHub Permissions'
        title='Understand What GitScope Can Access.'
        subtitle='GitScope only requests the minimum GitHub permissions needed to provide analytics and personalized features. You remain in control, and authentication is optional unless you choose to access account-specific functionality.'
        overview={permissionOverview}
        permissions={githubPermissions}
      />

      <DataStorageSecurity
        badge='Data Storage & Security'
        title='How GitScope Protects Your Information.'
        subtitle='Security is built into every layer of GitScope, from GitHub authentication to encrypted communication and read-only access.'
        overview={securityOverview}
        trustItems={securityTrustItems}
        features={securityFeatures}
        securityLayersBadge='Security Architecture'
        securityLayersTitle='Multiple Layers Working Together.'
        securityLayersSubtitle='Every authenticated request passes through multiple security measures before analytics are generated.'
        layers={securityLayers}
        securityOutcome={securityOutcome}
        trustBanner={securityBanner}
      />

      <CookiesLocalStorage {...cookiesLocalStorageData} />

      <ThirdPartyServices {...thirdPartyServicesContent} />

      <YourRights {...yourRightsData} />

      <DataRetention {...dataRetentionData} />

      <ChildrenPrivacy {...childrenPrivacyData} />

      <InternationalUsers {...internationalUsersData} />
    </main>
  );
};

export default PrivacyClient;
