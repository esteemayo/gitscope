import {
  BriefcaseBusiness,
  FileCheck2,
  Handshake,
  Info,
  KeyRound,
  LifeBuoy,
  LockKeyhole,
  Scale,
  ScrollText,
  ShieldCheck,
  UserCheck,
  UserRoundX,
} from 'lucide-react';

import GitHubLogoIcon from '@/components/icons/GitHubLogoIcon';
import { TermsContentsItem } from '@/types/terms/tableOfContents';

export const termsTableOfContents: TermsContentsItem[] = [
  {
    id: 'acceptance-of-terms',
    title: 'Acceptance of Terms',
    description: 'When these Terms apply and what accepting them means.',
    icon: FileCheck2,
  },

  {
    id: 'eligibility',
    title: 'Eligibility',
    description: 'Requirements for using GitScope.',
    icon: UserCheck,
  },

  {
    id: 'github-authentication',
    title: 'GitHub Authentication',
    description: 'How GitHub OAuth is used to authenticate your account.',
    icon: GitHubLogoIcon,
  },

  {
    id: 'user-responsibilities',
    title: 'User Responsibilities',
    description: 'Your responsibilities when accessing GitScope.',
    icon: Handshake,
  },

  {
    id: 'acceptable-use',
    title: 'Acceptable Use',
    description: 'Activities permitted and prohibited on the platform.',
    icon: ShieldCheck,
  },

  {
    id: 'github-data',
    title: 'GitHub Data & API Usage',
    description: 'How GitHub data and API services are used.',
    icon: KeyRound,
  },

  {
    id: 'analytics-accuracy',
    title: 'Analytics Accuracy',
    description: 'Important information about GitScope analytics.',
    icon: Info,
  },

  {
    id: 'intellectual-property',
    title: 'Intellectual Property',
    description: 'Ownership of GitScope, GitHub, and user content.',
    icon: Scale,
  },

  {
    id: 'user-content',
    title: 'User Content',
    description: 'How content you provide through GitScope is handled.',
    icon: UserCheck,
  },

  {
    id: 'privacy-data-protection',
    title: 'Privacy & Data Protection',
    description:
      'How application data is handled alongside our Privacy Policy.',
    icon: LockKeyhole,
  },

  {
    id: 'third-party-services',
    title: 'Third-Party Services',
    description: 'Services that support GitScope functionality.',
    icon: BriefcaseBusiness,
  },

  {
    id: 'service-availability',
    title: 'Service Availability',
    description: 'Availability, maintenance, and service interruptions.',
    icon: LifeBuoy,
  },

  {
    id: 'limitation-of-liability',
    title: 'Limitation of Liability',
    description: 'Important limits regarding use of the platform.',
    icon: Scale,
  },

  {
    id: 'account-suspension',
    title: 'Account Suspension',
    description: 'Circumstances that may result in restricted access.',
    icon: UserRoundX,
  },

  {
    id: 'termination',
    title: 'Termination',
    description: 'How users and GitScope can end access to the service.',
    icon: ScrollText,
  },

  {
    id: 'changes-to-terms',
    title: 'Changes to These Terms',
    description: 'How updates to these Terms are communicated.',
    icon: FileCheck2,
  },

  {
    id: 'governing-law',
    title: 'Governing Law',
    description: 'The legal framework applicable to these Terms.',
    icon: Scale,
  },

  {
    id: 'contact',
    title: 'Contact',
    description: 'How to contact GitScope with legal or support questions.',
    icon: LifeBuoy,
  },

  {
    id: 'about-team',
    title: 'About the Team',
    description:
      'Meet the people behind GitScope and learn about our principles.',
    icon: Handshake,
  },
];
