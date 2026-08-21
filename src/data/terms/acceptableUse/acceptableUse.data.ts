import {
  AlertOctagon,
  Bot,
  Code2,
  Database,
  FileWarning,
  Gauge,
  KeyRound,
  LockKeyhole,
  ShieldAlert,
  UserX,
} from 'lucide-react';

import GitHubLogoIcon from '@/components/icons/GitHubLogoIcon';
import {
  AcceptableUseGroupType,
  AcceptableUseItemType,
  AcceptableUseNoticeType,
} from '@/types/terms/acceptableUse';

export const acceptableUseGroup: AcceptableUseGroupType[] = [
  {
    id: 'permitted-use',
    eyebrow: 'Within scope',
    title: 'Permitted use',
    description:
      'Use GitScope for legitimate development, repository analysis, GitHub profile analytics, and other supported purposes.',
    accentColor: '#34D399',
    items: [
      {
        id: 'analytics',
        title: 'Analyze authorized repositories',
        description:
          'Use GitScope to analyze GitHub repositories and account data you are authorized to access.',
        icon: GitHubLogoIcon,
        accentColor: '#60A5FA',
      },
      {
        id: 'development',
        title: 'Support development workflows',
        description:
          'Use analytics and insights provided by GitScope to understand development activity and repository performance.',
        icon: Code2,
        accentColor: '#A78BFA',
      },
      {
        id: 'personal-use',
        title: 'Use your own account data',
        description:
          'Review and analyze information associated with your own authorized GitHub account.',
        icon: UserX,
        accentColor: '#22C55E',
      },
    ] as AcceptableUseItemType[],
  },
  {
    id: 'prohibited-use',
    eyebrow: 'Restricted activity',
    title: 'Prohibited activities',
    description:
      'Certain activities are prohibited because they can compromise GitScope, GitHub, other users, or the security and integrity of connected systems.',
    accentColor: '#F87171',
    items: [
      {
        id: 'unauthorized-access',
        title: 'Unauthorized access',
        description:
          'Do not attempt to access accounts, repositories, systems, APIs, or data without proper authorization.',
        icon: KeyRound,
        accentColor: '#F87171',
      },
      {
        id: 'abuse',
        title: 'Abuse or exploitation',
        description:
          "Do not exploit vulnerabilities, abuse application functionality, or intentionally interfere with GitScope's operation.",
        icon: ShieldAlert,
        accentColor: '#FB923C',
      },
      {
        id: 'automation',
        title: 'Harmful automation',
        description:
          'Do not use bots, scripts, or automated processes to overload, scrape, attack, or otherwise abuse GitScope.',
        icon: Bot,
        accentColor: '#FBBF24',
      },
      {
        id: 'security-bypass',
        title: 'Bypass security controls',
        description:
          'Do not circumvent authentication, authorization, rate limits, access controls, or other security mechanisms.',
        icon: LockKeyhole,
        accentColor: '#A78BFA',
      },
      {
        id: 'malicious-data',
        title: 'Submit malicious content',
        description:
          'Do not introduce malicious code, harmful payloads, malware, or content intended to compromise GitScope or its users.',
        icon: FileWarning,
        accentColor: '#F43F5E',
      },
      {
        id: 'resource-abuse',
        title: 'Abuse system resources',
        description:
          'Do not consume resources in a manner intended to degrade availability, performance, or reliability for other users.',
        icon: Gauge,
        accentColor: '#38BDF8',
      },
      {
        id: 'data-misuse',
        title: 'Misuse data',
        description:
          'Do not collect, reproduce, dustribute, or use GitScope or third-party data in ways prohibited by law or applicable platform policies.',
        icon: Database,
        accentColor: '#C084FC',
      },
      {
        id: 'impersonation',
        title: 'Impersonation or deception',
        description:
          'Do not impersonate another person, organization, service, or GitScope representative.',
        icon: UserX,
        accentColor: '#FB7185',
      },
    ] as AcceptableUseItemType[],
  },
];

export const acceptableUseNotice: AcceptableUseNoticeType = {
  title: 'Violations can result in access restrictions',
  description:
    'GitScope reserves the right to investigate activity that appears to violate these Terms and take appropriate action, including restricting or terminating access where permitted by applicable law.',
  icon: AlertOctagon,
  accentColor: '#F59E0B',
};
