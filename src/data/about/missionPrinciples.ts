import { ScanSearch, ShieldCheck, Zap } from 'lucide-react';
import { MissionPrinciple } from '@/types/about';

export const missionPrinciples: MissionPrinciple[] = [
  {
    id: 'clarity',
    icon: ScanSearch,
    title: 'Clarity',
    description:
      'Complex GitHub repositories are transformed into intuitive visual analytics that are easy to explore and understand.',
  },
  {
    id: 'performance',
    icon: Zap,
    title: 'Performance',
    description:
      'Every interaction is designed to feel responsive, from repository search to analytics rendering.',
  },
  {
    id: 'privacy',
    icon: ShieldCheck,
    title: 'Privacy First',
    description:
      'GitScope only analyzes publicly available GitHub information. Your credentials and private repositories remain private.',
  },
];
