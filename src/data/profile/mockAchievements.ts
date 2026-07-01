import { FlameIcon, RocketIcon, StarIcon, TrophyIcon } from 'lucide-react';
import { AchievementType } from '@/types/profile';

export const mockAchievement: AchievementType[] = [
  {
    id: 'followers',
    icon: FlameIcon,
    title: '100+ Followers',
    description: 'Reached over 100 GitHub followers.',
  },
  {
    id: 'opensource',
    icon: RocketIcon,
    title: 'Open Source Explorer',
    description: 'Published more than 50 repositories.',
  },
  {
    id: 'veteran',
    icon: TrophyIcon,
    title: 'Veteran Developer.',
    description: 'GitHub member for more than 5 years.',
  },
  {
    id: 'popular',
    icon: StarIcon,
    title: 'Popular Creator',
    description: 'Built repositories with strong community interest.',
  },
];
