import { ShieldCheck } from 'lucide-react';
import { ThirdPartyServicesNoticeProps } from '@/types/privacy/thirdPartyServices/third.party.services.notice.type';

export const thirdPartyServicesNotice: ThirdPartyServicesNoticeProps = {
  badge: 'Your Data Stays Controlled',
  title: 'Third-party Access Is Limited.',
  description:
    'GitScope only interacts with external services when they are required to provide a requested feature. Access follows the permissions and purpose associated with each integration.',
  icon: ShieldCheck,
  accentColor: '#22C55E',
  points: [
    'Third-party services do not receive unrestricted access to your GitHub account.',
    'GitScope requests only the permissions required for its authenticated features.',
    'Public GitHub analytics remain available without authentication.',
    'You can revoke GitHub authorization through your GitHub account settings.',
  ],
};
