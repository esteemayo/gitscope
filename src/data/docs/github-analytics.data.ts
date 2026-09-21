import { AnalyticCardType } from '@/types/docs/githubAnalytics';

export const githubProfileAnalytics: AnalyticCardType[] = [
  {
    id: 'profile-information',
    title: 'Profile information',
    description: 'Basic information associated with the GitHub account.',
    accentColor: '#4F46E5',
  },
  {
    id: 'repository-count',
    title: 'Repository count',
    description:
      'The number of repositories available for the analyzed profile.',
    accentColor: '#8B5CF6',
  },
  {
    id: 'followers',
    title: 'Followers',
    description: 'The number of GitHub users following the analyzed account.',
    accentColor: '#22C55E',
  },
  {
    id: 'following',
    title: 'Following',
    description: 'The number of GitHub users followed by the analyzed account.',
    accentColor: '#F59E0B',
  },
];

export const githubContributionAnalytics: AnalyticCardType[] = [
  {
    id: 'contribution-calendar',
    title: 'Contribution calendar',
    description: 'A calendar-style representation of contribution activity.',
    accentColor: '#22C55E',
  },
  {
    id: 'activity-trends',
    title: 'Activity trends',
    description: 'A time-based view of contribution patterns.',
    accentColor: '#4F46E5',
  },
  {
    id: 'peak-activity',
    title: 'Peak activity',
    description:
      'Highlights periods with comparatively higher contribution activity.',
    accentColor: '#F59E0B',
  },
  {
    id: 'consistency',
    title: 'Consistency',
    description:
      'Provides context around how activity is distributed over time.',
    accentColor: '#8B5CF6',
  },
];

export const githubAnalyticsDashboard: AnalyticCardType[] = [
  {
    id: 'profile',
    title: 'Profile',
    description: 'Account information and high-level statistics.',
    accentColor: '#4F46E5',
  },
  {
    id: 'repositories',
    title: 'Repositories',
    description: 'Projects and repository-level metrics.',
    accentColor: '#8B5CF6',
  },
  {
    id: 'languages',
    title: 'Languages',
    description: 'Programming-language distribution across repositories.',
    accentColor: '#FA5A7A',
  },
  {
    id: 'contributions',
    title: 'Contributions',
    description: 'Activity patterns and contribution history.',
    accentColor: '#22C55E',
  },
];

export const githubInterpretationAnalytics: AnalyticCardType[] = [
  {
    id: ' multiple-signals',
    title: 'Use multiple signals',
    description:
      'Repository stars, contributions, languages, and activity describe different aspects of a GitHub profile.',
    accentColor: '#4F46E5',
  },
  {
    id: 'timeframe',
    title: 'Consider the timeframe',
    description:
      'Activity patterns can change significantly depending on the period being analyzed.',
    accentColor: '#F59E0B',
  },
  {
    id: 'context',
    title: 'Keep the context',
    description:
      'Public GitHub activity represents only the information available through GitHub and GitScope.',
    accentColor: '#8B5CF6',
  },
];
