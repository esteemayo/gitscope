import {
  BarChart3,
  Database,
  GitBranch,
  ShieldCheck,
  Workflow,
} from 'lucide-react';

import { DocsFeatureCardType } from '@/types/docs/featureCard';
import { DocsFeatureItemType } from '@/types/docs/featureItem';

export const apiProvides: DocsFeatureCardType[] = [
  {
    icon: BarChart3,
    title: 'Analytics data',
    description:
      'Access the data used to represent GitHub profiles, repositories, languages, and contribution activity.',
    accentColor: '#8B5CF6',
  },
  {
    icon: GitBranch,
    title: 'GitHub data',
    description:
      'Work with GitHub-related information retrieved and processed by GitScope.',
    accentColor: '#22C55E',
  },
  {
    icon: Database,
    title: 'Structured resources',
    description:
      'Interact with API resources through predictable request and response structures.',
    accentColor: '#06B6D4',
  },
  {
    icon: Workflow,
    title: 'Programmatic access',
    description:
      'Use API-based access when application code needs GitScope analytics without relying on the dashboard interface.',
    accentColor: '#F59E0B',
  },
];

export const apiAreas: DocsFeatureItemType[] = [
  {
    title: 'Authentication',
    description:
      'Understand how authenticated API access works and which requests require authentication.',
    accentColor: '#8B5CF6',
  },
  {
    title: 'Endpoints',
    description:
      'Explore the API resources available for retrieving GitScope data.',
    accentColor: '#06B6D4',
  },
  {
    title: 'Responses',
    description:
      'Learn how API responses are structured and how returned data should be interpreted.',
    accentColor: '#22C55E',
  },
  {
    title: 'Errors',
    description:
      'Understand API failures, error responses, and how to handle unsuccessful requests.',
    accentColor: '#EF4444',
  },
];

export const apiLayers: DocsFeatureItemType[] = [
  {
    title: 'GitHub',
    description: 'Source of the underlying developer and repository data.',
    accentColor: '#F97316',
  },
  {
    title: 'GitScope data layer',
    description:
      'Retrieves, processes, and prepares GitHub data for the application.',
    accentColor: '#8B5CF6',
  },
  {
    title: 'GitScope API',
    description: 'Exposes application data through documented API resources.',
    accentColor: '#06B6D4',
  },
  {
    title: 'GitScope interface',
    description:
      'Uses the available data to present analytics and insights to users.',
    accentColor: '#22C55E',
  },
];

export const apiWorks: DocsFeatureItemType[] = [
  {
    title: 'Start with authentication',
    description:
      'Understand whether the API operation you need requires an authenticated session.',
    accentColor: '#8B5CF6',
  },
  {
    title: 'Choose a resource',
    description:
      'Identify the API endpoint that corresponds to the data or operation you need.',
    accentColor: '#06B6D4',
  },
  {
    title: 'Read the response',
    description:
      'Use the documented response structure to process the returned data.',
    accentColor: '#22C55E',
  },
  {
    title: 'Handle failures',
    description:
      'Account for unsuccessful requests and use API error information when troubleshooting.',
    accentColor: '#EF4444',
  },
];

export const apiPrinciples: DocsFeatureCardType[] = [
  {
    icon: ShieldCheck,
    title: 'Controlled access',
    description:
      'API access should respect authentication and permission boundaries.',
    accentColor: '#8B5CF6',
  },
  {
    icon: Workflow,
    title: 'Consistent behavior',
    description:
      'Requests and responses should follow the documented API conventions.',
    accentColor: '#06B6D4',
  },
  {
    icon: Database,
    title: 'Structured data',
    description:
      'API resources provide structured information that applications can consume.',
    accentColor: '#22C55E',
  },
];
