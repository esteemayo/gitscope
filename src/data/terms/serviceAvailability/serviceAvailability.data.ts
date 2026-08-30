import {
  BarChart3,
  CircleAlert,
  CloudCog,
  Gauge,
  GitBranch,
  ShieldAlert,
  Wrench,
} from 'lucide-react';

import {
  ServiceAvailabilityConditionType,
  ServiceAvailabilityItemType,
  ServiceLimitationNoticeType,
} from '@/types/terms/serviceAvailability';

export const serviceAvailabilityServices: ServiceAvailabilityItemType[] = [
  {
    id: 'dashboard',
    name: 'Dashboard',
    description:
      'Access to GitScope analytics dashboards and supported account features.',
    icon: Gauge,
    status: 'operational',
    accentColor: '#60A5FA',
  },
  {
    id: 'analytics',
    name: 'Analytics',
    description:
      'Processing and presentation of supported repository and profile analytics.',
    icon: BarChart3,
    status: 'variable',
    accentColor: '#A78BFA',
  },
  {
    id: 'github-data',
    name: 'GitHub Data',
    description:
      'Availability of information retrieved through supported GitHub integrations.',
    icon: GitBranch,
    status: 'dependent',
    accentColor: '#34D399',
  },
];

export const serviceAvailabilityConditions: ServiceAvailabilityConditionType[] =
  [
    {
      id: 'maintenance',
      title: 'Maintenance windows',
      description:
        'GitScope may undergo planned or unplanned maintenance that temporarily affects access to parts of the application.',
      icon: Wrench,
      accentColor: '#60A5FA',
    },
    {
      id: 'external-dependencies',
      title: 'External dependencies',
      description:
        'Some functionality depends on external infrastructure and GitHub services, which may become unavailable independently of GitScope.',
      icon: CloudCog,
      accentColor: '#A78BFA',
    },
    {
      id: 'technical-interruption',
      title: 'Technical interruption',
      description:
        'Network issues, software defects, infrastructure failures, or unexpected technical conditions may interrupt service access.',
      icon: CircleAlert,
      accentColor: '#F59E0B',
    },
    {
      id: 'service-changes',
      title: 'Service changes',
      description:
        'Features may be modified, suspended, limited, replaced, or discontinued as GitScope evolves.',
      icon: ShieldAlert,
      accentColor: '#F472B6',
    },
  ];

export const serviceAvailabilityNotice: ServiceLimitationNoticeType = {
  title: 'No guaranteed uninterrupted availability',
  description:
    'GitScope does not guarantee that the service will always be available, uninterrupted, secure, timely, or free from errors. Temporary downtime or feature unavailability does not create an obligation to provide continuous service access.',
  icon: ShieldAlert,
  accentColor: '#F59E0B',
};
