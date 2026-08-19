import { CheckCircle2, Info, Scale } from 'lucide-react';
import { TermsAcceptancePointData } from '@/types/terms/acceptance';

export const termsAcceptancePoints: TermsAcceptancePointData[] = [
  {
    id: 'read',
    title: 'Read Before Using',
    description:
      'Review these Terms and our Privacy Policy before using GitScope.',
    icon: Info,
    accentColor: '#60A5FA',
  },

  {
    id: 'agreement',
    title: 'Using GitScope Means Agreement',
    description:
      'Accessing or using the service indicates your acceptance of these Terms.',
    icon: CheckCircle2,
    accentColor: '#34D399',
  },

  {
    id: 'legal',
    title: 'The Terms Apply to Your Use',
    description:
      'These conditions govern your relationship with GitScope while you use the platform.',
    icon: Scale,
    accentColor: '#FBBF24',
  },
];
