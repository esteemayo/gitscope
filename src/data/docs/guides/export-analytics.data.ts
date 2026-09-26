import { CheckCircle2, ClipboardCopy, Download, FileDown, Share2 } from 'lucide-react';

import { DocsFeatureCardType } from '@/types/docs/featureCard';
import { DocsFeatureItemType } from '@/types/docs/featureItem';

export const exportAreas: DocsFeatureCardType[] = [
  {
    icon: Download,
    title: 'Export analytics',
    description:
      'Preserve supported GitScope analytics so they can be referenced outside the active application view.',
    accentColor: '#8B5CF6',
  },
  {
    icon: FileDown,
    title: 'Exported information',
    description:
      'Export content based on the analytics and data made available by the relevant GitScope feature.',
    accentColor: '#06B6D4',
  },
  {
    icon: ClipboardCopy,
    title: 'Reusable results',
    description:
      'Use exported analytics as a reference when documenting, reviewing, or sharing GitHub activity.',
    accentColor: '#22C55E',
  },
  {
    icon: Share2,
    title: 'Sharing workflow',
    description:
      "Use exported information together with GitScope's sharing capabilities when you need to communicate results.",
    accentColor: '#F97316',
  },
];

export const exportReviews: DocsFeatureItemType[] = [
  {
    title: 'Confirm the profile',
    description: 'Make sure the GitHub profile or profiles shown in the current view are the intended source.',
    accentColor: '#8B5CF6',
  },
  {
    title: 'Review the analytics',
    description: 'Check the metrics and visualizations that will form the basis of the exported result.',
    accentColor: '#06B6D4',
  },
  {
    title: 'Check the current state',
    description: 'Remember that GitHub data can change over time, so an export represents information available at the time it was generated.',
    accentColor: '#22C55E',
  }
]

export const exportWorkflow: DocsFeatureItemType[] = [
  {
    title: 'Open the analytics',
    description:
      'Start from the GitScope profile, repository, or comparison view containing the information you want to preserve.',
    accentColor: '#8B5CF6',
  },
  {
    title: 'Review the available data',
    description:
      'Check the analytics before exporting so you understand what information is represented in the result.',
    accentColor: '#06B6D4',
  },
  {
    title: 'Choose the export action',
    description:
      'Use the available export control to generate the supported output for the current analytics view.',
    accentColor: '#22C55E',
  },
  {
    title: 'Verify the result',
    description:
      'Open or inspect the exported result to confirm that the information you need is present.',
    accentColor: '#F97316',
  },
];

export const exportAnalytics: DocsFeatureCardType[] = [
  {
    icon: CheckCircle2,
    title: 'Documentation',
    description: 'Use exported analytics as supporting information in technical documentation or project records.',
    accentColor: '#8B5CF6',
  },
  {
    icon: ClipboardCopy,
    title: 'Review',
    description: 'Keep a copy of analytics for later reference when reviewing a profile or repository.',
    accentColor: '#06B6D4',
  }
]

export const exportPrivacyData: DocsFeatureItemType[] = [
  {
    title: 'Review the information',
    description: 'Understand what GitHub-related information is included before sending or storing an export.',
    accentColor: '#8B5CF6',
  },
  {
    title: 'Store exports securely',
    description: 'Keep exported files or results in locations appropriate for the information they contain.',
    accentColor: '#06B6D4',
  },
  {
    title: 'Share intentionally',
    description: 'Only share exported analytics with people or services that should receive the information.',
    accentColor: '#EF4444',
  }
]

export const exportPrinciples: DocsFeatureItemType[] = [
  {
    title: 'Export what you need',
    description:
      'Review the analytics before exporting and avoid preserving information that is not necessary for your purpose.',
    accentColor: '#8B5CF6',
  },
  {
    title: 'Check the source',
    description:
      'Keep track of which GitScope profile, repository, or comparison produced the exported result.',
    accentColor: '#06B6D4',
  },
  {
    title: 'Verify exported data',
    description:
      'Check the generated result before using it in documentation, reports, or other workflows.',
    accentColor: '#22C55E',
  },
  {
    title: 'Protect sensitive information',
    description:
      'Treat exported GitHub-related information responsibly, especially when sharing it outside your own workflow.',
    accentColor: '#EF4444',
  },
];
