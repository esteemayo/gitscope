import { HeroCardItem, HeroStat } from './index';

export interface AboutHeroProps {
  badge?: string;
  title: string;
  description: string;
  primaryButtonLabel: string;
  secondaryButtonLabel: string;
  primaryButtonHref: string;
  secondaryButtonHref: string;
  stats: HeroStat[];
  analytics: HeroCardItem[];
}
