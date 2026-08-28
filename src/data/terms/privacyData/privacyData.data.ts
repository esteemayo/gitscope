import {
  Database,
  Eye,
  FileKey2,
  Fingerprint,
  LockKeyhole,
  Minimize2,
  Network,
  Server,
  ShieldCheck,
  UserCheck,
  UserRound,
  Wifi,
} from 'lucide-react';

import {
  PrivacyControlType,
  PrivacyDataCategoryType,
  PrivacyNoticeType,
  PrivacyPrincipleType,
} from '@/types/terms/privacyData';

export const privacyDataControls: PrivacyControlType[] = [
  {
    id: 'collection',
    title: 'Controlled collection',
    description:
      'GitScope focuses on information required to authenticate users, provide analytics, operate requested features, and maintain the service.',
    icon: Database,
    accentColor: '#60A5FA',
  },
  {
    id: 'access',
    title: 'Access control',
    description:
      'Protected features use authentication and authorization mechanisms to restrict access to supported application resources.',
    icon: UserCheck,
    accentColor: '#A78BFA',
  },
  {
    id: 'security',
    title: 'Security measures',
    description:
      'Security controls are applied across relevant application layers to reduce unauthorized access, misuse, and and exposure risks.',
    icon: LockKeyhole,
    accentColor: '#34D399',
  },
  {
    id: 'transmission',
    title: 'Protected transmission',
    description:
      'Information transmitted between your device and supported GitScope services is handled through appropriate transport security mechanisms.',
    icon: Wifi,
    accentColor: '#F59E0B',
  },
  {
    id: 'identity',
    title: 'Identity boundaries',
    description:
      'Authentication information and account-related data are treated separately from analytics information where the architecture permits.',
    icon: Fingerprint,
    accentColor: '#F472B6',
  },
];

export const privacyDataPrinciples: PrivacyPrincipleType[] = [
  {
    id: 'minimisation',
    title: 'Data minimisation',
    description:
      'Collect and process information relevant to the purpose for which GitScope provides a feature.',
    icon: Minimize2,
    accentColor: '#60A5FA',
  },
  {
    id: 'purpose',
    title: 'Purpose limitation',
    description:
      'Information should be processed in connection with legitimate application functionality and service operations.',
    icon: FileKey2,
    accentColor: '#A78BFA',
  },
  {
    id: 'confidentiality',
    title: 'Confidentiality',
    description:
      'Access to protected information should remain limited to authorized users, systems, and service operations.',
    icon: ShieldCheck,
    accentColor: '#34D399',
  },
  {
    id: 'transparentcy',
    title: 'Transparency',
    description:
      'GitScope aims to provide clear information about how relevant data is collected, processed, and used.',
    icon: Eye,
    accentColor: '#F59E0B',
  },
];

export const privacyDataCategories: PrivacyDataCategoryType[] = [
  {
    id: 'account',
    category: 'Account data',
    examples: ['Authentication information', 'Account identifiers'],
    icon: UserRound,
    accentColor: '#60A5FA',
  },
  {
    id: 'github',
    category: 'GitHub data',
    examples: [
      'Public repository information',
      'Profile and contribution data',
    ],
    icon: Network,
    accentColor: '#A78BFA',
  },
  {
    id: 'technical',
    category: 'Technical data',
    examples: ['Application requests', 'Operational information'],
    icon: Server,
    accentColor: '#34D399',
  },
];

export const privacyDataNotice: PrivacyNoticeType = {
  title: 'Privacy details are governed by the Privacy Policy',
  description:
    'This section provides a high-level overview of privacy and data protection within the Terms. Refer to the GitScope Privacy Policy for detailed information about data collection, processing, retention, rights, and related practices.',
  icon: ShieldCheck,
  accentColor: '#60A5FA',
};
