import { ShieldCheck } from 'lucide-react';
import { TrustBanner } from '@/types/privacy/dataStorageSecurity';

export const securityBanner: TrustBanner = {
  title: 'Your GitHub Account Always Stays in Your Control',
  description:
    'GitScope never stores your GitHub password, never requests repository write access, and only accesses the minimum information required to provide analytics and personalized experiences when you choose to sign in.',
  icon: ShieldCheck,
  accentColor: '#22C55E',
};
