import {
  SortOptionsType,
  StarOptionsType,
  TypeOptionsType,
} from '@/types/dashboard/repository';

export const SORT_OPTIONS: SortOptionsType[] = [
  {
    value: 'updated',
    label: 'Recently updated',
    description: 'Newest activity first',
  },
  {
    value: 'stars',
    label: 'Most stars',
    description: 'Highest star count first',
  },
  {
    value: 'forks',
    label: 'Most forks',
    description: 'Highest fork count first',
  },
  {
    value: 'name',
    label: 'Name',
    description: 'Alphabetical order',
  },
];

export const TYPE_OPTIONS: TypeOptionsType[] = [
  {
    value: 'all',
    label: 'All repositories',
    description: 'Every public repository',
  },
  {
    value: 'original',
    label: 'Original repositories',
    description: 'Repositories created by this developer',
  },
  {
    value: 'forks',
    label: 'Forks',
    description: 'Repositories forked from other projects',
  },
  {
    value: 'archived',
    label: 'Archived',
    description: 'Repositories marked as archived',
  },
];

export const STAR_OPTIONS: StarOptionsType[] = [
  {
    value: 'all',
    label: 'Any star count',
    description: 'No minimum or maximum',
  },
  {
    value: '0-10',
    label: '0-10 stars',
    description: 'Less than 11 stars',
  },
  {
    value: '10-50',
    label: '10-50 stars',
    description: 'Between 10 and 50 stars',
  },
  {
    value: '50-100',
    label: '50-100 stars',
    description: 'Between 50 and 100 stars',
  },
  {
    value: '100-500',
    label: '100-500 stars',
    description: 'Between 100 and 500 stars',
  },
  {
    value: '500+',
    label: '500+ stars',
    description: 'More than 500 stars',
  },
];
