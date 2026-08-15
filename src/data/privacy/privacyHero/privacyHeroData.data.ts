import * as data from './privacyHero.data';
import { privacyHeroContent } from './privacyHeroContent.data';

import { PrivacyHeroProps } from '@/types/privacy/privacyHero/privacy.hero.type';

export const privacyHeroData: PrivacyHeroProps = {
  ...privacyHeroContent,
  actions: data.privacyHeroAction,
  stats: data.privacyHeroStats,
  card: data.privacyHeroCard,
};
