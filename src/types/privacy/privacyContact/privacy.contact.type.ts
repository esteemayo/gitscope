import { PrivacyContactCardData, PrivacyContactNoticeData } from './index';

export interface PrivacyContactProps {
  badge: string;
  title: string;
  subtitle: string;
  cards: PrivacyContactCardData[];
  notice: PrivacyContactNoticeData;
  className?: string;
  style?: React.CSSProperties;
}
