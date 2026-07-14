import {
  Activity,
  BarChart3,
  Download,
  GitCompareArrows,
  GitGraph,
  HeartPulse,
  Share2,
  Sparkles,
} from 'lucide-react';

import ComparePreview from '@/components/about/features/previews/ComparePreview';
import SharePreview from '@/components/about/features/previews/SharePreview';
import LanguagePreview from '@/components/about/features/previews/LanguagePreview';
import ChartsPreview from '@/components/about/features/previews/ChartsPreview';
import TimelinePreview from '@/components/about/features/previews/TimelinePreview';
import ExportPreview from '@/components/about/features/previews/ExportPreview';
import AnalyticsPreview from '@/components/about/features/previews/AnalyticsPreview';
import HealthPreview from '@/components/about/features/previews/HealthPreview';

import * as previewData from './previews';
import { AboutFeature } from '@/types/about/index';

export const aboutFeatures: AboutFeature[] = [
  {
    id: 'repository-analytics',
    icon: <BarChart3 size={26} />,
    title: 'Repository Analytics',
    description:
      'Explore repositories through rich dashboards that surface stars, forks, contribution, activity trends, releases and repository performance in one place.',
    accentColor: '#3B82F6',
    isFeatured: true,
    preview: <AnalyticsPreview {...previewData.analyticsPreviewData} />,
  },
  {
    id: 'repository-health',
    icon: <HeartPulse size={24} />,
    title: 'Repository Health',
    description:
      'Monitor repository quality using activity, maintenance, issue trends and contributor signals.',
    accentColor: '#10B981',
    preview: <HealthPreview {...previewData.repositoryHealthData} />,
  },
  {
    id: 'profile-comparison',
    icon: <GitCompareArrows size={24} />,
    title: 'Profile Comparison',
    description:
      'Compare developers side by side using repositories, stars, followers, languages and contribution metrics.',
    accentColor: '#8B5CF6',
    preview: <ComparePreview {...previewData.comparePreviewData} />,
  },
  {
    id: 'contribution-timeline',
    icon: <GitGraph size={24} />,
    title: 'Contribution Timeline',
    description:
      'Visualize repository growth with commit history, milestones and activity over time.',
    accentColor: '#F59E0B',
    preview: <TimelinePreview activities={previewData.timelineActivities} />,
  },
  {
    id: 'language-insights',
    icon: <Sparkles size={24} />,
    title: 'Language Insights',
    description:
      'Understand the technology behind every repository with language distribution, usage percentages and project composition.',
    accentColor: '#06B6D4',
    preview: <LanguagePreview languages={previewData.languagePreviewData} />,
  },
  {
    id: 'interactive-charts',
    icon: <Activity size={24} />,
    title: 'Interactive Charts',
    description:
      'Navigate repository activity with responsive charts that highlight trends, growth and contribution patterns.',
    accentColor: '#F97316',
    preview: <ChartsPreview points={previewData.chartsPreviewData} />,
  },
  {
    id: 'export-reports',
    icon: <Download size={24} />,
    title: 'Export Reports',
    description:
      'Download  repository insights for presentations, documentation or sharing with your teams.',
    accentColor: '#EC4899',
    preview: <ExportPreview {...previewData.exportPreviewData} />,
  },
  {
    id: 'shareable-profiles',
    icon: <Share2 size={24} />,
    title: 'Shareable Profiles',
    description:
      'Generate beautiful public pages to showcase repositories, achievements and developer activity.',
    accentColor: '#6366F1',
    preview: <SharePreview {...previewData.sharePreviewData} />,
  },
];
