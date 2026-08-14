import { FooterProps } from '@/types/layout/footer/footer.type';
import { footerColumns, footerSocialLinks } from './footer.data';

export const footerData: FooterProps = {
  brandName: 'GitScope',
  description:
    'GitHub analytics for understanding repositories, activity, and developer performance.',
  columns: footerColumns,
  socialLinks: footerSocialLinks,
  copyright: `© ${new Date().getFullYear()} GitScope, Inc. All rights reserved.`,
  status: {
    label: 'All systems operational',
    href: '/status',
  },
  designedText: 'Designed with ❤ for developers',
};
