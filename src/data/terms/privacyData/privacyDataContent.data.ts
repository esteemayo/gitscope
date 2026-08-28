import { ShieldCheck } from 'lucide-react';
import { PrivacyDataContent } from '@/types/terms/privacyData';

export const privacyDataContent: PrivacyDataContent = {
  badge: '10 - Privacy',
  title: 'Privacy & Data Protection.',
  description:
    'GitScope is designed round responsible data handling, controlled access, and clear boundaries around information used by the service.',
  headerIcon: ShieldCheck,
  intro:
    'Privacy is part of the GitScope product architecture. The application limits data collection to information required for its features, applies access controls to protected areas, and uses security measures intended to protect information processed through the service.',
  accentColor: '#7F52FF',
};
