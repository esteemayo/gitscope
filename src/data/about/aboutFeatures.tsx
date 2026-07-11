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
import { AboutFeature } from '@/types/about/index';

export const aboutFeatures: AboutFeature[] = [
  {
    id: 'repository-analytics',
    icon: BarChart3,
    title: 'Repository Analytics',
    description:
      'Explore repositories through rich dashboards that surface stars, forks, contribution, activity trends, releases and repository performance in one place.',
    accentColor: '#3B82F6',
    isFeatured: true,
    preview: (
      <>
        <div className='about-features__preview-metrics'>
          <div className='about-features__preview-metric'>
            <small className='about-features__preview-metric--label'>
              Stars
            </small>

            <strong className='about-features__preview-metric--value'>
              12.4k
            </strong>
          </div>

          <div className='about-features__preview-metric'>
            <small className='about-features__preview-metric--label'>
              Forks
            </small>

            <strong className='about-features__preview-metric--value'>
              842
            </strong>
          </div>
        </div>

        <div className='about-features__preview-analytics'>
          <span className='about-features__preview-bar' />

          <span className='about-features__preview-bar' />

          <span className='about-features__preview-bar' />

          <span className='about-features__preview-bar' />

          <span className='about-features__preview-bar' />

          <span className='about-features__preview-bar' />
        </div>
      </>
    ),
  },
  {
    id: 'repository-health',
    icon: HeartPulse,
    title: 'Repository Health',
    description:
      'Monitor repository quality using activity, maintenance, issue trends and contributor signals.',
    accentColor: '#10B981',
    preview: (
      <div className='about-features__preview-progress'>
        <span />
      </div>
    ),
  },
  {
    id: 'profile-comparison',
    icon: GitCompareArrows,
    title: 'Profile Comparison',
    description:
      'Compare developers side by side using repositories, stars, followers, languages and contribution metrics.',
    accentColor: '#8B5CF6',
    preview: (
      <div className='about-features__preview-compare'>
        <span />

        <span />
      </div>
    ),
  },
  {
    id: 'contribution-timeline',
    icon: GitGraph,
    title: 'Contribution Timeline',
    description:
      'Visualize repository growth with commit history, milestones and activity over time.',
    accentColor: '#F59E0B',
    preview: (
      <div className='about-features__preview-timeline'>
        <span />

        <span />

        <span />

        <span />
      </div>
    ),
  },
  {
    id: 'language-insights',
    icon: Sparkles,
    title: 'Language Insights',
    description:
      'Understand the technology behind every repository with language distribution, usage percentages and project composition.',
    accentColor: '#06B6D4',
    preview: (
      <div className='about-features__preview-languages'>
        <span />

        <span />

        <span />

        <span />
      </div>
    ),
  },
  {
    id: 'interactive-charts',
    icon: Activity,
    title: 'Interactive Charts',
    description:
      'Navigate repository activity with responsive charts that highlight trends, growth and contribution patterns.',
    accentColor: '#F97316',
    preview: (
      <div className='about-features__preview-chart'>
        <span />

        <span />

        <span />

        <span />

        <span />
      </div>
    ),
  },
  {
    id: 'export-reports',
    icon: Download,
    title: 'Export Reports',
    description:
      'Download  repository insights for presentations, documentation or sharing with your teams.',
    accentColor: '#EC4899',
    preview: (
      <div className='about-features__preview-export'>
        <span />
      </div>
    ),
  },
  {
    id: 'shareable-profiles',
    icon: Share2,
    title: 'Shareable Profiles',
    description:
      'Generate beautiful public pages to showcase repositories, achievements and developer activity.',
    accentColor: '#6366F1',
    preview: (
      <div className='about-features__preview-share'>
        <span />

        <span />

        <span />
      </div>
    ),
  },
];
