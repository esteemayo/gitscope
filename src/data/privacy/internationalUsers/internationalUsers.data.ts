import { Globe2, Languages, MapPin, ShieldCheck } from 'lucide-react';
import {
  InternationalUserPoint,
  InternationalUsersNoticeData,
  InternationalUsersPanelData,
} from '@/types/privacy/internationalUsers';

export const internationalUserPoints: InternationalUserPoint[] = [
  {
    id: 'global-access',
    title: 'Global Access',
    description:
      'GitScope is designed to be accessible to developers regardless of where they are located.',
    icon: Globe2,
  },
  {
    id: 'regional-context',
    title: 'Regional Context',
    description:
      'Your location or region can affect how certain legal, privacy, or service requirements apply to your use of GitScope.',
    icon: MapPin,
  },
  {
    id: 'privacy-consideration',
    title: 'Privacy Consideration',
    description:
      'We consider applicable privacy requirements when handling information from users in different jurisdictions.',
    icon: ShieldCheck,
  },
];

export const internationalUsersPanel: InternationalUsersPanelData = {
  status: 'Global Availability',
  title: 'GitScope Is Built for Developers Everywhere.',
  description:
    'GitScope is designed as a globally accessible developer analytics platform. Depending on where you access the service from, different privacy and legal requirements may apply to your use of the platform.',
  icon: Globe2,
  accentColor: '#06B6D4',
  points: internationalUserPoints,
};

export const internationalUsersNotice: InternationalUsersNoticeData = {
  badge: 'Your Local Requirements',
  title: 'Local Laws May Give You Additional Rights.',
  description:
    'Privacy rights and requirements vary between jurisdictions. If the laws where you live provide additional rights or protections, those requirements may apply to your use of GitScope.',
  icon: Languages,
  accentColor: '#3B82F6',
};
