import { Network } from 'lucide-react';
import { ThirdPartyServiceContent } from '@/types/terms/thirdPartyServices';

export const thirdPartyServiceContent: ThirdPartyServiceContent = {
  badge: '11 - External Services',
  title: 'Third-Party Services.',
  description:
    'GitScope integrates with selected external services to provide authentication, GitHub analytics, infrastructure, and application functionality.',
  headerIcon: Network,
  intro:
    'Some GitScope features depend on services operated by third parties. These providers operate under their own terms, privacy practices, security controls, and service conditions. Your use of GitScope alongside an external service is also subject to the applicable terms and policies of that provider.',
  accentColor: '#083FA1',
};
