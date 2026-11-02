import { AwardDefinition } from '@/types/dashboard/awards';

export const AWARD_DEFINITIONS: AwardDefinition[] = [
  {
    id: 'star-collector',
    name: 'Star Collector',
    description:
      'Your repositories have attracted attention from the developer community.',
    requirement: 'Earn 100 repository stars',
    icon: 'star',
    threshold: 100,
    accentColor: '#FBBF24',
  },
  {
    id: 'open-source-builder',
    name: 'Open-source Builder',
    description:
      "You've built and published a collection of original public repositories.",
    requirement: 'Create 25 public repositories',
    icon: 'code',
    threshold: 25,
    accentColor: '#818CF8',
  },
  {
    id: 'community-favorite',
    name: 'Community Favorite',
    description: 'Other developers are following your work on GitHub.',
    requirement: 'Reach 100 followers',
    icon: 'users',
    threshold: 100,
    accentColor: '#34D399',
  },
  {
    id: 'seasoned-developer',
    name: 'Seasoned Developer',
    description: "You've maintained your GitHub presence over several years.",
    requirement: 'Have a GitHub account for 5 years',
    icon: 'calendar',
    threshold: 5,
    accentColor: '#F472B6',
  },
  {
    id: 'polyglot',
    name: 'Polyglot',
    description:
      'Your public repositories demonstrates work across multiple programming languages.',
    requirement: 'Use 5 different programming languages',
    icon: 'languages',
    threshold: 5,
    accentColor: '#38BDF8',
  },
];
