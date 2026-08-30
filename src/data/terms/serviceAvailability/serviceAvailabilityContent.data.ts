import { Activity } from 'lucide-react';
import { ServiceAvailabilityContent } from '@/types/terms/serviceAvailability';

export const serviceAvailabilityContent: ServiceAvailabilityContent = {
  badge: '12 - Availability',
  title: 'Service Availability.',
  description:
    'GitScope is provided on an availability basis and service access may change due to maintenance, infrastructure conditions, external dependencies, or technical issues.',
  headerIcon: Activity,
  intro:
    'We aim to keep GitScope available and functioning reliably. However, uninterrupted or error-free access is not guaranteed. Features, analytics, data availability, and access to the service may be affected by maintenance, technical failures, infrastructure issues, network conditions, or dependencies outside GitScope.',
  accentColor: '#4FC08D',
};
