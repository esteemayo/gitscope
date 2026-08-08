'use client';

import InformationCollected from './information/InformationCollected';
import PrivacyHero from './PrivacyHero';
import PrivacyPrinciples from './privacyPrinciples/PrivacyPrinciples';
import PrivacySummary from './privacySummary/PrivacySummary';
import CookiesLocalStorage from './cookiesLocalStorage/CookiesLocalStorage';
import GitHubPermissions from './permissions/GitHubPermissions';
import HowWeUseYourInformation from './howWeUseYourInfo/HowWeUseYourInformation';

import * as information from '@/data/privacy/informationCollected.data';
import DataStorageSecurity from './dataStorage/DataStorageSecurity';
import { securityOverview } from '@/data/privacy/securityOverview.data';
import { securityFeatures } from '@/data/privacy/securityFeatures.data';
import { securityLayers } from '@/data/privacy/securityLayers.data';
import { githubPermissions } from '@/data/privacy/githubPermissions.data';
import { securityBanner } from '@/data/privacy/securityBanner.data';
import { privacyPrinciples } from '@/data/privacy/privacyPrinciples.data';
import { usageSteps } from '@/data/privacy/howWeUseInformation.data';
import { privacyHeroContent } from '@/data/privacy/privacyHeroContent.data';
import { securityOutcome } from '@/data/privacy/securityOutcome.data';
import { permissionOverview } from '@/data/privacy/permissionOverview.data';
import { securityTrustItems } from '@/data/privacy/securityTrust.data';
import { cookiesLocalStorageData } from '@/data/privacy/cookiesLocalStorage.data';
import { privacySumaryItems } from '@/data/privacy/privacySummaryItems.data';

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
    </main>
  );
};

export default PrivacyClient;
