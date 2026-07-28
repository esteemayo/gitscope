import { LucideIcon } from 'lucide-react';
import { PrivacyHeroAction, PrivacyHeroCard, PrivacyHeroStat } from './index';

export interface PrivacyHeroProps {
  badge: string;
  title: string;
  subtitle: string;
  actions: PrivacyHeroAction[];
  stats: PrivacyHeroStat[];
  card: PrivacyHeroCard;
  illustration: LucideIcon;
}
