import {
  CheckCircle2,
  Database,
  FileJson2,
  Layers3,
  ListTree,
} from 'lucide-react';

import { DocsFeatureCardType } from '@/types/docs/featureCard';
import { DocsFeatureItemType } from '@/types/docs/featureItem';

export const responseStructures: DocsFeatureCardType[] = [
  {
    icon: CheckCircle2,
    title: 'Request status',
    description: 'Indicates whether the API request completed successfully.',
    accentColor: '#22C55E',
  },
  {
    icon: Database,
    title: 'Resource data',
    description: 'Contains the data returned by the requested API resource.',
    accentColor: '#8B5CF6',
  },
  {
    icon: FileJson2,
    title: 'Structured payload',
    description: 'Provides data in a format that application code can process.',
    accentColor: '#06B6D4',
  },
  {
    icon: ListTree,
    title: 'Error information',
    description:
      'Provides context when the API cannot complete the requested operation.',
    accentColor: '#EF4444',
  },
];

export const successfulResponses: DocsFeatureItemType[] = [
  {
    title: 'Request completed',
    description: 'The API successfully processed the request.',
    accentColor: '#22C55E',
  },
  {
    title: 'Resource returned',
    description:
      'The response contains the data associated with the requested resource.',
    accentColor: '#8B5CF6',
  },
  {
    title: 'Application processing',
    description:
      'The client can parse and use the returned data according to the endpoint documentation.',
    accentColor: '#06B6D4',
  },
];

export const resourceData: DocsFeatureCardType[] = [
  {
    icon: Layers3,
    title: 'Profile data',
    description: 'Information associated with a GitHub developer profile.',
    accentColor: '#8B5CF6',
  },
  {
    icon: Database,
    title: 'Repository data',
    description:
      'Information associated with a GitHub repository and its supported metrics.',
    accentColor: '#22C55E',
  },
  {
    icon: ListTree,
    title: 'Analytics data',
    description: 'Structured information used to represent GitScope analytics.',
    accentColor: '#06B6D4',
  },
];

export const readingResponses: DocsFeatureItemType[] = [
  {
    title: '1. Check the request result',
    description:
      'Determine whether the request completed successfully before processing the payload.',
    accentColor: '#8B5CF6',
  },
  {
    title: '2. Identify the resource',
    description: 'Determine which API resource produced the response.',
    accentColor: '#06B6D4',
  },
  {
    title: '3. Read the returned data',
    description: 'Access the fields documented for the requested endpoint.',
    accentColor: '#22C55E',
  },
  {
    title: '4. Handle missing data',
    description:
      'Account for optional, unavailable, or empty values where the endpoint permits them.',
    accentColor: '#F59E0B',
  },
  {
    title: '5. Handle failures',
    description:
      'If the request failed, process the returned error information instead of the resource payload.',
    accentColor: '#EF4444',
  },
];

export const emptyData: DocsFeatureItemType[] = [
  {
    title: 'Empty collections',
    description:
      'A valid resource can contain an empty collection when no matching data is available.',
    accentColor: '#F59E0B',
  },
  {
    title: 'Optional values',
    description:
      'Some resource fields may be unavailable or empty depending on the underlying GitHub data.',
    accentColor: '#06B6D4',
  },
  {
    title: 'Limited analytics',
    description:
      'Analytics may contain fewer data points when the source data does not provide enough information.',
    accentColor: '#8B5CF6',
  },
];

export const applicationResponses: DocsFeatureCardType[] = [
  {
    icon: CheckCircle2,
    title: 'Validate',
    description:
      'Confirm that the returned data matches the structure expected by the application.',
    accentColor: '#22C55E',
  },
  {
    icon: Database,
    title: 'Normalize',
    description:
      'Transform response data into the internal format required by the application when necessary.',
    accentColor: '#8B5CF6',
  },
  {
    icon: ListTree,
    title: 'Handle states',
    description:
      'Account for loading, success, empty, and error states when consuming API data.',
    accentColor: '#06B6D4',
  },
];

export const responsePrinciples: DocsFeatureItemType[] = [
  {
    title: 'Check before processing',
    description:
      'Determine the request outcome before attempting to consume resource data.',
    accentColor: '#8B5CF6',
  },
  {
    title: 'Respect the documented structure',
    description:
      'Use endpoint documentation to determine which fields are available.',
    accentColor: '#06B6D4',
  },
  {
    title: 'Handle incomplete data',
    description: 'Design clients to tolerate empty and optional values.',
    accentColor: '#F59E0B',
  },
  {
    title: 'Separate errors from data',
    description:
      'Keep unsuccessful request handling separate from normal resource processing.',
    accentColor: '#EF4444',
  },
];
