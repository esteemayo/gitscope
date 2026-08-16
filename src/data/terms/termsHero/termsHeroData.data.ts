import * as data from './termsHero.data';
import { termsHeroContent } from './termsHeroContent.data';

import { TermsHeroProps } from '@/types/terms/termsHero/terms.hero.type';

export const termsHeroData: TermsHeroProps = {
  ...termsHeroContent,
  actions: data.termsHeroActions,
  trustBadges: data.termsHeroTrustBadges,
  preview: data.termsHeroPreviewData,
};
