import {
  FileText,
  Landmark,
  MessageSquareWarning,
  Scale,
  ShieldCheck,
} from 'lucide-react';

import {
  DisputeResolutionData,
  JurisdictionPanelData,
  LegalPrincipleType,
} from '@/types/terms/governingLaw';

export const governingLawJurisdiction: JurisdictionPanelData = {
  label: 'Primary legal framework',
  jurisdiction: 'Specified Jurisdiction',
  title: 'These Terms follow the applicable law of the designated jurisdiction',
  description:
    "The laws of the jurisdiction identified in GitScope's published Terms govern the interpretation and enforcement of these Terms, except where mandatory consumer or other legal protections require a different outcome.",
  notice:
    'Before publishing, replace this placeholder with your actual governing jurisdiction and obtain legal advice where appropriate.',
  icon: Landmark,
  accentColor: '#60A5FA',
};

export const governingLawPrinciples: LegalPrincipleType[] = [
  {
    id: 'interpretation',
    title: 'Interpretation of the Terms',
    description:
      'The governing law provides the framework used to interpret the rights, obligations, limitations, and responsibilities described in these Terms.',
    icon: FileText,
    accentColor: '#A78BFA',
  },
  {
    id: 'mandatory-rights',
    title: 'Mandatory legal rights',
    description:
      'Nothing in these Terms is intended to exclude legal protections that cannot lawfully be waived under applicable mandatory law.',
    icon: ShieldCheck,
    accentColor: '#34D399',
  },
  {
    id: 'legal-forum',
    title: 'Legal forum',
    description:
      'Where applicable and permitted by law, disputes may be addressed through the courts or other legally recognised forums with appropriate jurisdiction.',
    icon: Scale,
    accentColor: '#F59E0B',
  },
];

export const governingLawDisputeResolution: DisputeResolutionData = {
  label: 'Dispute handling',
  title: 'Resolving concerns before escalation',
  description:
    'If a dispute arises, we encourage you to contact GitScope first and provide enough information for us to understand and review the issue.',
  points: [
    'Describe the issue and the relevant GitScope account or service area involved.',
    'Provide information that helps us investigate the concern.',
    'Allow a reasonable opportunity for the matter to be reviewed and addressed.',
  ],
  icon: MessageSquareWarning,
  accentColor: '#F97316',
};
