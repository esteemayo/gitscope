import { RetentionCategory, RetentionNoticeData, RetentionStat } from './index';

export interface DataRetentionProps {
  badge: string;
  title: string;
  subtitle: string;
  stats: RetentionStat[];
  categories: RetentionCategory[];
  notice: RetentionNoticeData;
  className?: string;
  style?: React.CSSProperties;
}
