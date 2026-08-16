import { TermsHeroAction, TermsHeroBadge, TermsHeroPreviewData } from './index';

export interface TermsHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  actions: TermsHeroAction[];
  trustBadges: TermsHeroBadge[];
  preview: TermsHeroPreviewData;
}
