import { FooterColumn, FooterSocialLink } from '.';

export interface FooterProps {
  brandName: string;
  description: string;
  columns: FooterColumn[];
  socialLinks: FooterSocialLink[];
  copyright: string;
  status?: {
    label: string;
    href: string;
  };
  designedText?: string;
  className?: string;
  style?: React.CSSProperties;
}
