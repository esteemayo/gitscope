import { CheckCircle2, Clock3, Rocket, Sparkles } from 'lucide-react';
import { RoadmapPhase } from '@/types/about';

export const roadmapPhases: RoadmapPhase[] = [
  {
    id: 'foundation',
    title: 'Foundation',
    description: 'Core GitHub analytics experience and repository exploration.',
    icon: CheckCircle2,
    accentColor: '#10B981',
    status: {
      label: 'Completed',
      progress: 100,
    },
    items: [
      'GitHub authentication',
      'Repository analytics',
      'User comparison',
      'Repository insights',
      'Repository dashboard',
    ],
  },
  {
    id: 'experience',
    title: 'Developer Experience',
    description: 'Enhancing usability and deeper analytics across GitScope.',
    icon: Clock3,
    accentColor: '#F59E0B',
    status: {
      label: 'In Progress',
      progress: 65,
    },
    items: [
      'Advanced filtering',
      'Repository activity timeline',
      'Profile achievements',
      'Performance improvements',
      'Accessibility enhancements',
    ],
  },
  {
    id: 'future',
    title: 'Future Vision',
    description: 'Powerful collaboration and AI-assisted repository insights.',
    icon: Rocket,
    accentColor: '#3B82F6',
    status: {
      label: 'Planned',
      progress: 20,
    },
    items: [
      'AI repository summaries',
      'Organization dashboards',
      'Saved workspaces',
      'Team analytics',
      'API access',
    ],
  },
  {
    id: 'innovation',
    title: 'Innovation',
    description:
      'Long-term ideas that expand GitScope beyond repository analytics.',
    icon: Sparkles,
    accentColor: '#8B5CF6',
    status: {
      label: 'Planned',
      progress: 20,
    },
    items: [
      'Developer portfolio scoring',
      'Contribution forecasting',
      'Custom reporting',
      'Productivity trends',
      'Community insights',
    ],
  },
];
