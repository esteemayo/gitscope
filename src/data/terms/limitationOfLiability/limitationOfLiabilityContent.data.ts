import { Scale } from 'lucide-react';
import { LimitationOfLiabilityContent } from '@/types/terms/limitationOfLiability';

export const limitationOfLiabilityContent: LimitationOfLiabilityContent = {
  badge: '13 · Liability',
  title: 'Limitation of Liability.',
  description:
    'GitScope limits liability for losses, damages, interruptions, and other outcomes arising from the use or inability to use the service, subject to applicable law.',
  headerIcon: Scale,
  intro:
    'To the maximum extent permitted by applicable law, GitScope and its operators are not liable for damages or losses arising from your use of, inability to use, or reliance on the service. This includes outcomes connected to service availability, analytics accuracy, external dependencies, technical failures, or user decisions based on information presented by GitScope.',
  boundaryTitle: 'Liability has defined limits',
  boundaryDescription:
    'GitScope provides analytics and related functionality as a software service. You remain responsible for how you use the information, decisions, actions, and outcomes associated with the service.',
  accentColor: 'var(--accent-color)',
};
