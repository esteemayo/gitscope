import { WhyItem } from '@/types/about/index';
import { BarChart3, Brain, Rocket, Sparkles } from 'lucide-react';

export const whyItems: WhyItem[] = [
  {
    id: 'insights',
    title: 'Repository Intelligence',
    description:
      'Understand repository quality through health metrics, trends and contribution insights instead of raw numbers alone.',
    icon: Brain,
    accentColor: '#3B82F6',
  },
  {
    id: 'analytics',
    title: 'Beautiful Analytics',
    description:
      'Interactive dashboards make repository data easier to understand and explore.',
    icon: BarChart3,
    accentColor: '#10B981',
  },
  {
    id: 'experience',
    title: 'Developer First',
    description:
      'Designed with accessibility, responsiveness and performance at every interaction.',
    icon: Sparkles,
    accentColor: '#8B5CF6',
  },
  {
    id: 'future',
    title: 'Built to Evolve',
    description:
      'GitScope continues to grow with new insights, comparisons and repository intelligence.',
    icon: Rocket,
    accentColor: '#F97316',
  },
];
