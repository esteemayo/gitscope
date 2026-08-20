import { Database, KeyRound, Scale, ShieldCheck } from 'lucide-react';

import GitHubLogoIcon from '@/components/icons/GitHubLogoIcon';
import {
  UserResponsibilityItemType,
  UserResponsibilityNoticeType,
} from '@/types/terms/userResponsibilities';

export const termsUserResponsibilitiesItems: UserResponsibilityItemType[] = [
  {
    id: 'account-security',
    title: 'Protect your account',
    description:
      'Keep your GitScope credentials and authentication information secure. Notify us if you believe your account has been accessed without authorization.',
    icon: ShieldCheck,
    accentColor: '#60A5FA',
  },
  {
    id: 'credentials',
    title: 'Protect authentication credentials',
    description:
      'Do not share authentication credentials, session information, or other access mechanisms with unauthorized people.',
    icon: KeyRound,
    accentColor: '#A78BFA',
  },
  {
    id: 'lawful-use',
    title: 'Use GitScope lawfully',
    description:
      'Use the patform in compliance with applicable laws, regulations, GitHub policies, and these Terms.',
    icon: Scale,
    accentColor: '#34D399',
  },
  {
    id: 'github-access',
    title: 'Maintain authorized GitHub access',
    description:
      'Only connect GitHub accounts and repositories you are authorized to access and analyze through GitScope.',
    icon: GitHubLogoIcon,
    accentColor: '#F59E0B',
  },
  {
    id: 'accurate-data',
    title: 'Provide accurate information',
    description:
      'Keep account and profile information you provide to GitScope accurate and up to date.',
    icon: Database,
    accentColor: '#F472B6',
  },
  {
    id: 'platform-integrity',
    title: 'Respect platform integrity',
    description:
      'Do not attempt to disrupt, abuse, reverse engineer, overload, or gain unauthorized access to GitScope ot its underlying systems.',
    icon: ShieldCheck,
    accentColor: '#FB923C',
  },
];

export const termsUserResponsibilitiesNotice: UserResponsibilityNoticeType = {
  title: 'Your actions affect platform security',
  description:
    'If you identify suspicious activity, unauthorized access, or a security issue involving your account, take reasonable steps to protect your account and contact GitScope through the available support channel.',
  icon: ShieldCheck,
  accentColor: '#22C55E',
};
