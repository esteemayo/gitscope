import { BarChart3, GitBranch, Languages, UserRound } from 'lucide-react';

import { DocsFeatureCardType } from '@/types/docs/featureCard';
import { DocsFeatureItemType } from '@/types/docs/featureItem';

export const endpointAreas: DocsFeatureCardType[] = [
  {
    icon: UserRound,
    title: 'Profiles',
    description:
      'Resources related to GitHub developer profiles and profile-level analytics.',
    accentColor: '#8B5CF6',
  },
  {
    icon: GitBranch,
    title: 'Repositories',
    description:
      'Resources used to retrieve repository information and repository-level analytics.',
    accentColor: '#22C55E',
  },
  {
    icon: BarChart3,
    title: 'Contributions',
    description:
      'Resources related to GitHub contribution activity and contribution analytics.',
    accentColor: '#06B6D4',
  },
  {
    icon: Languages,
    title: 'Languages',
    description:
      'Resources used to work with programming language distribution and related analytics.',
    accentColor: '#F59E0B',
  },
];

export const choosingEndpoint: DocsFeatureItemType[] = [
  {
    title: 'Profile data',
    description:
      'Use a profile-oriented resource when your application needs information about a GitHub developer.',
    accentColor: '#8B5CF6',
  },
  {
    title: 'Repository data',
    description:
      'Use a repository-oriented resource when working with repository details or project metrics.',
    accentColor: '#22C55E',
  },
  {
    title: 'Contribution data',
    description:
      'Use a contribution-oriented resource when retrieving activity over time.',
    accentColor: '#06B6D4',
  },
  {
    title: 'Language data',
    description:
      'Use a language-oriented resource when analyzing programming language distribution.',
    accentColor: '#F59E0B',
  },
];

export const requestStructures: DocsFeatureItemType[] = [
  {
    title: '1. Resource',
    description: 'Identify the API resource that provides the data you need.',
    accentColor: '#8B5CF6',
  },
  {
    title: '2. Endpoint',
    description:
      'Send the request to the endpoint associated with that resource.',
    accentColor: '#06B6D4',
  },
  {
    title: '3. Parameters',
    description: 'Provide the parameters required by the endpoint.',
    accentColor: '#F59E0B',
  },
  {
    title: '4. Authentication',
    description:
      'Include the required authenticated context when the resource is protected.',
    accentColor: '#22C55E',
  },
  {
    title: '5. Response',
    description: 'Process the structured response returned by the API.',
    accentColor: '#14B8A6',
  },
];

export const authenticatedEndpoints: DocsFeatureItemType[] = [
  {
    title: 'Public access',
    description:
      'Endpoints intended for public data can be accessed without an authenticated session when supported.',
    accentColor: '#22C55E',
  },
  {
    title: 'Authenticated access',
    description:
      'Protected endpoints require the appropriate authenticated context.',
    accentColor: '#8B5CF6',
  },
  {
    title: 'Access validation',
    description:
      'The API validates the request context before returning protected data.',
    accentColor: '#06B6D4',
  },
];

export const endpointResponses: DocsFeatureCardType[] = [
  {
    icon: UserRound,
    title: 'Profile response',
    description:
      'Contains data associated with the requested GitHub profile and supported profile analytics.',
    accentColor: '#8B5CF6',
  },
  {
    icon: GitBranch,
    title: 'Repository response',
    description:
      'Contains information associated with the requested repository and its supported metrics.',
    accentColor: '#22C55E',
  },
  {
    icon: BarChart3,
    title: 'Analytics response',
    description:
      'Contains structured analytics data used by GitScope features.',
    accentColor: '#06B6D4',
  },
];

export const endpointPrinciples: DocsFeatureItemType[] = [
  {
    title: 'Use the appropriate resource',
    description:
      'Choose an endpoint based on the type of data your application needs.',
    accentColor: '#8B5CF6',
  },
  {
    title: 'Respect documented parameters',
    description: 'Send only the parameters supported by the selected endpoint.',
    accentColor: '#F59E0B',
  },
  {
    title: 'Handle responses explicitly',
    description:
      'Process successful and unsuccessful responses as separate application states.',
    accentColor: '#22C55E',
  },
  {
    title: 'Protect authenticated requests',
    description:
      'Keep authentication information secure and use it only where required.',
    accentColor: '#EF4444',
  },
];
