import {
  ContributionLevel,
  ContributionWeek,
} from '@/types/profile/contribution';

const randomLevel = () => Math.floor(Math.random() * 5) as ContributionLevel;

const randomCount = () => Math.floor(Math.random() * 15);

export const mockContributions: ContributionWeek[] = Array.from(
  { length: 26 },
  (_, week) => ({
    week,
    days: Array.from({ length: 7 }, (_, day) => ({
      date: `2026-W${week}-${day}`,
      count: randomCount(),
      level: randomLevel(),
    })),
  }),
);
