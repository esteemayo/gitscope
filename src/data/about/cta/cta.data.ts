import {
  Accessibility,
  BarChart3,
  Clock3,
  GitCompareArrows,
  GitPullRequestDraft,
  Search,
  ShieldCheck,
  Sparkles,
  Zap,
} from 'lucide-react';

import GitHubLogoIcon from '@/components/icons/GitHubLogoIcon';
import { CTAFloatingMetricType, CTAHighlightType } from '@/types/about/cta';

export const ctaHighlights: CTAHighlightType[] = [
  {
    id: 'free',
    label: 'Free to Explore',
    icon: Sparkles,
  },
  {
    id: 'fast',
    label: 'Fast & Responsive',
    icon: Zap,
  },
  {
    id: 'accessible',
    label: 'Accessible by Design',
    icon: Accessibility,
  },
  {
    id: 'active',
    label: 'Actively Evolving',
    icon: Clock3,
  },
];

export const ctaMetrics: CTAFloatingMetricType[] = [
  {
    id: 'analytics',
    label: 'Repository Analytics',
    icon: BarChart3,
  },
  {
    id: 'compare',
    label: 'Developer Comparison',
    icon: GitCompareArrows,
  },
  {
    id: 'repositories',
    label: 'Repository Explorer',
    icon: GitHubLogoIcon,
  },
  {
    id: 'search',
    label: 'Smart Search',
    icon: Search,
  },
  {
    id: 'security',
    label: 'Privacy First',
    icon: ShieldCheck,
  },
  {
    id: 'github',
    label: 'Powered by GitHub',
    icon: GitPullRequestDraft,
  },
];
