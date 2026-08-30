import {
  AlertTriangle,
  BadgeDollarSign,
  DatabaseZap,
  FileWarning,
  ServerCrash,
  TimerOff,
} from 'lucide-react';

export const limitationOfLiabilityExclusions = [
  {
    id: 'indirect-damages',
    label: '01 · Indirect loss',
    title: 'Indirect or consequential damages',
    description:
      'GitScope is not liable for indirect, incidental, special, consequential, or punitive damages arising from the use of the service.',
    icon: FileWarning,
    accentColor: '#A78BFA',
  },
  {
    id: 'data-loss',
    label: '02 · Data impact',
    title: 'Data loss or data-related issues',
    description:
      'GitScope is not liable for loss, corruption, unavailability, or inaccessibility of information caused by technical issues, external services, or circumstances outside reasonable control.',
    icon: DatabaseZap,
    accentColor: '#60A5FA',
  },
  {
    id: 'service-interruption',
    label: '03 · Service access',
    title: 'Service interruption or downtime',
    description:
      'GitScope is not liable for temporary or prolonged service interruption, feature unavailability, delayed access, maintenance periods, or infrastructure failures.',
    icon: ServerCrash,
    accentColor: '#F59E0B',
  },
  {
    id: 'external-services',
    label: '04 · External dependency',
    title: 'Third-party failures',
    description:
      'GitScope is not liable for failures, policy changes, outages, data issues, or other actions associated with third-party services or external providers.',
    icon: TimerOff,
    accentColor: '#34D399',
  },
  {
    id: 'user-decisions',
    label: '05 · User decisions',
    title: 'Actions based on analytics',
    description:
      'GitScope is not responsible for decisions, business outcomes, technical actions, or other consequences resulting from your reliance on analytics or information provided by the service.',
    icon: AlertTriangle,
    accentColor: '#F472B6',
  },
];

export const limitationOfLiabilityCap = {
  label: 'Liability limit',
  title: 'No liability beyond the maximum extent allowed by law',
  description:
    'Where liability cannot be excluded under applicable law, any liability will be limited to the maximum extent permitted by that law. Nothing in these Terms excludes liability that cannot legally be limited or excluded.',
  icon: BadgeDollarSign,
  accentColor: '#EF4444',
};
