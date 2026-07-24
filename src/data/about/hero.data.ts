import { heroAnalytics } from './heroAnalytics';
import { AboutHeroProps } from '@/types/about/hero/about.hero.type';

export const heroContent: AboutHeroProps = {
  title: 'Understand GitHub Like Never Before.',
  description:
    'GitScope transforms GitHub repositories into beautiful analytics. Explore contributor activity, repository health, language usage, trends and performance through an elegant interface built for developers.',
  primaryButtonLabel: 'Explore dashboard',
  secondaryButtonLabel: 'View repository',
  primaryButtonHref: '/',
  secondaryButtonHref: 'https://github.com/esteemayo/gitscope',
  analytics: heroAnalytics,
};
