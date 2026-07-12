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

import HealthPreview from '@/components/about/features/previews/HealthPreview';
import AnalyticsPreview from '@/components/about/features/previews/AnalyticsPreview';

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
    preview: <AnalyticsPreview stars={12400} forks={842} />,
  },
  {
    id: 'repository-health',
    icon: <HeartPulse size={24} />,
    title: 'Repository Health',
    description:
      'Monitor repository quality using activity, maintenance, issue trends and contributor signals.',
    accentColor: '#10B981',
    preview: <HealthPreview score={95} activeIssues={12} lastCommit='2h ago' />,
  },
  {
    id: 'profile-comparison',
    icon: <GitCompareArrows size={24} />,
    title: 'Profile Comparison',
    description:
      'Compare developers side by side using repositories, stars, followers, languages and contribution metrics.',
    accentColor: '#8B5CF6',
    preview: (
      <div className='about-features__preview-compare'>
        <span />
        Preview
        <span />
      </div>
    ),
  },
  {
    id: 'contribution-timeline',
    icon: <GitGraph size={24} />,
    title: 'Contribution Timeline',
    description:
      'Visualize repository growth with commit history, milestones and activity over time.',
    accentColor: '#F59E0B',
    preview: (
      <div className='about-features__preview-timeline'>
        <span />
        Preview
        <span />
        <span />
        <span />
      </div>
    ),
  },
  {
    id: 'language-insights',
    icon: <Sparkles size={24} />,
    title: 'Language Insights',
    description:
      'Understand the technology behind every repository with language distribution, usage percentages and project composition.',
    accentColor: '#06B6D4',
    preview: (
      <div className='about-features__preview-languages'>
        <span />
        Preview
        <span />
        <span />
        <span />
      </div>
    ),
  },
  {
    id: 'interactive-charts',
    icon: <Activity size={24} />,
    title: 'Interactive Charts',
    description:
      'Navigate repository activity with responsive charts that highlight trends, growth and contribution patterns.',
    accentColor: '#F97316',
    preview: (
      <div className='about-features__preview-chart'>
        <span />
        Preview
        <span />
        <span />
        <span />
        <span />
      </div>
    ),
  },
  {
    id: 'export-reports',
    icon: <Download size={24} />,
    title: 'Export Reports',
    description:
      'Download  repository insights for presentations, documentation or sharing with your teams.',
    accentColor: '#EC4899',
    preview: (
      <div className='about-features__preview-export'>
        Preview
        <span />
      </div>
    ),
  },
  {
    id: 'shareable-profiles',
    icon: <Share2 size={24} />,
    title: 'Shareable Profiles',
    description:
      'Generate beautiful public pages to showcase repositories, achievements and developer activity.',
    accentColor: '#6366F1',
    preview: (
      <div className='about-features__preview-share'>
        <span />
        Preview
        <span />
        <span />
      </div>
    ),
  },
];
