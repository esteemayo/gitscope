import { RepositoryInsightCardType } from './index';

export interface RepositoryInsightCardProps extends RepositoryInsightCardType {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}
