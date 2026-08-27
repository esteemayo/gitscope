import {
  CheckCircle2,
  Database,
  Info,
  KeyRound,
  LockKeyhole,
  ShieldCheck,
  Upload,
  UserRound,
  UsersRound,
  Workflow,
  XCircle,
} from 'lucide-react';

import {
  UserContentBoundaryType,
  UserContentLifecycleStep,
  UserContentNoticeType,
  UserContentPermissionType,
} from '@/types/terms/userContent';

export const userContentLifecycle: UserContentLifecycleStep[] = [
  {
    id: 'provide',
    eyebrow: 'Your action',
    title: 'You provide content',
    description:
      'You remain responsible for deciding what information or content you provide to GitScope through supported application features.',
    icon: Upload,
    accentColor: '#60A5FA',
  },

  {
    id: 'process',
    eyebrow: 'GitScope',
    title: 'GitScope processes it',
    description:
      'GitScope processes relevant content to operate the features you request and provide the functionality described by the service.',
    icon: Workflow,
    accentColor: '#A78BFA',
  },

  {
    id: 'protect',
    eyebrow: 'Access',
    title: 'Access is controlled',
    description:
      'Application controls are used to govern access to supported features and information within the GitScope environment.',
    icon: LockKeyhole,
    accentColor: '#34D399',
  },

  {
    id: 'retain',
    eyebrow: 'Ownership',
    title: 'You retain your rights',
    description:
      'Providing content to GitScope does not transfer ownership of content you already own, subject to the rights required to operate the service.',
    icon: UserRound,
    accentColor: '#F59E0B',
  },
];

export const userContentPermissions: UserContentPermissionType[] = [
  {
    id: 'service-license',
    title: 'Permission to operate the service',
    description:
      'You grant GitScope the permissions reasonably required to process your content for the purpose of providing the features you request.',
    icon: KeyRound,
    accentColor: '#60A5FA',
  },

  {
    id: 'display',
    title: 'Displaying requested information',
    description:
      'GitScope may display or transform relevant content within the application when required to provide analytics, dashboards, or other requested functionality.',
    icon: Database,
    accentColor: '#A78BFA',
  },

  {
    id: 'authorized-access',
    title: 'Authorized access',
    description:
      "Access to supported user content is limited according to the application's authentication and authorization mechanisms.",
    icon: ShieldCheck,
    accentColor: '#34D399',
  },
];

export const userContentBoundaries: UserContentBoundaryType[] = [
  {
    id: 'rights',
    title: 'You must have the necessary rights',
    description:
      'You should only provide content when you have the rights, permissions, or lawful basis required to use it with GitScope.',
    icon: CheckCircle2,
    accentColor: '#34D399',
  },

  {
    id: 'lawful-content',
    title: 'Content must be lawful',
    description:
      'You are responsible for ensuring that content you provide does not violate applicable laws, third-party rights, or these Terms.',
    icon: ShieldCheck,
    accentColor: '#60A5FA',
  },

  {
    id: 'third-party',
    title: 'Respect third-party rights',
    description:
      'You must not provide content in a way that infringes intellectual property, privacy, confidentiality, or other rights belonging to another person or organization.',
    icon: UsersRound,
    accentColor: '#F59E0B',
  },

  {
    id: 'restricted',
    title: 'Do not submit restricted information',
    description:
      'Avoid submitting sensitive or confidential information unless the relevant GitScope feature explicitly supports its handling and you have the necessary authorization.',
    icon: XCircle,
    accentColor: '#F472B6',
  },
];

export const userContentNotice: UserContentNoticeType = {
  title: 'You remain responsible for your content',
  description:
    'GitScope does not assume ownership of content you provide. You remain responsible for the legality, accuracy, rights, and permissions associated with that content.',
  icon: Info,
  accentColor: '#F59E0B',
};
