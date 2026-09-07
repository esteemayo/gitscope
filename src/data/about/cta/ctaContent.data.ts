import { CTAContent } from '@/types/about/cta';

export const ctaContent: CTAContent = {
  badge: 'Ready to Explore',
  title: 'Unlock deeper GitHub insights with GitScope.',
  description:
    'Analyze repositories, compare developers, explore project health and discover meaningful GitHub analytics through a fast, modern experience.',
  primaryAction: {
    label: 'Launch GitScope',
    href: '/',
    variant: 'primary',
  },
  secondaryAction: {
    label: 'View Source',
    href: 'https://github.com/esteemayo/gitscope',
    variant: 'secondary',
  },
  accentColor: '#1572B6',
};
