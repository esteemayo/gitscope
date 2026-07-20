import { BriefcaseBusiness, Code2, GitBranchPlus, Users2 } from 'lucide-react';
import { Audience } from '@/types/about';

export const audiences: Audience[] = [
  {
    id: 'developers',
    title: 'Developers',
    description:
      'Track repository activity, understand project health and improve your GitHub presence.',
    icon: Code2,
    benefits: ['Repository analytics', 'Health insights', 'Activity timeline'],
    useCase: 'Personal Projects',
    accentColor: '#3B82F6',
  },
  {
    id: 'opensource',
    title: 'Open Source Maintainers',
    description:
      'Monitor community contributions and repository growth from one dashboard.',
    icon: GitBranchPlus,
    benefits: [
      'Contribution tracking',
      'Repository insights',
      'Growth monitoring',
    ],
    useCase: 'Community Projects',
    accentColor: '#10B981',
  },
  {
    id: 'recruiters',
    title: 'Recruiters',
    description:
      'Review public GutHub activity with meaningful metrics instead of raw repository lists.',
    icon: BriefcaseBusiness,
    benefits: [
      'Developer comparison',
      'Profile anaytics',
      'Repository overview',
    ],
    useCase: 'Technical Evaluation',
    accentColor: '#F59E0B',
  },
  {
    id: 'teams',
    title: 'Engineering Teams',
    description:
      'Understand collaboration patterns and repository performance across projects.',
    icon: Users2,
    benefits: ['Team analytics', 'Repository health', 'Development trends'],
    useCase: 'Team Collaboration',
    accentColor: '#8B5CF6',
  },
];
