import { PrivacyFAQCategory, PrivacyFAQNotice } from './index';

export interface PrivacyFAQProps {
  badge: string;
  title: string;
  subtitle: string;
  categories: PrivacyFAQCategory[];
  notice: PrivacyFAQNotice;
  className?: string;
  style?: React.CSSProperties;
}
