import { BadgeCheck, EyeOff, LockKeyhole, ShieldCheck } from 'lucide-react';
import {
  ChildrenPrivacyNoticeData,
  ChildrenPrivacyPanelData,
  ChildrenPrivacyPoint,
} from '@/types/privacy/childrenPrivacy';

export const childrenPrivacyPoints: ChildrenPrivacyPoint[] = [
  {
    id: 'no-targeting',
    title: 'No Child-Focused Targeting',
    description:
      'GitScope is not designed to target children with personalized advertising or child-focused profiling.',
    icon: EyeOff,
  },
  {
    id: 'limited-collection',
    title: 'Purpose-Limited Collection',
    description:
      'Information is collected to provide GitScope features and operate the application, rather than for unnecessary collection.',
    icon: LockKeyhole,
  },
  {
    id: 'privacy-by-design',
    title: 'Privacy by Design',
    description:
      'Authentication, data handling, and application storage are designed with privacy and security considerations in mind.',
    icon: EyeOff,
  },
];

export const childrenPrivacyPanel: ChildrenPrivacyPanelData = {
  status: 'Privacy Commitment',
  title: 'GitScope Is Not Intended for Children',
  description:
    'GitScope is a developer-focused analytics platform and is not directed toward children. We do not knowingly collect personal information from children through the service.',
  icon: BadgeCheck,
  accentColor: '#8B5CF6',
  points: childrenPrivacyPoints,
};

export const childrenPrivacyNotice: ChildrenPrivacyNoticeData = {
  badge: 'If We Learn About It',
  title: 'We Take Unexpected Collection Seriously.',
  description:
    'If we learn that personal information belonging to a child has been collected through GitScope without the appropriate authorization, we will take reasonable steps to review and address the situation.',
  icon: ShieldCheck,
  accentColor: '#22C55E',
};
