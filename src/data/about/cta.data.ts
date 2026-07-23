import {
  Accessibility,
  BarChart3,
  Clock3,
  FolderGit2,
  GitCompareArrows,
  GitPullRequestDraft,
  Search,
  ShieldCheck,
  Sparkles,
  Zap,
} from 'lucide-react';
import { CallToActionProps } from '@/types/about/call.to.action.type';

export const ctaContent: CallToActionProps = {
  badge: 'Ready to Explore',
  title: 'Unlock deeper GitHub insights with GitScope.',
  description:
    'Analyze repositories, compare developers, explore project health and discover meaningful GitHub analytics through a fast, modern experience.',
  primaryAction: {
    label: 'Launch GitScope',
    href: '/',
    variant: 'primary',
  },
  secondaryAction: {
    label: 'View Source',
    href: 'https://github.com/esteemayo/gitscope',
    variant: 'secondary',
  },
  highlights: [
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
  ],
  metrics: [
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
      icon: FolderGit2,
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
  ],
};
