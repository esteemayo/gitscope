import { RepositoryView } from './index';

export interface RepositoryViewToggleProps {
  view: RepositoryView;
  onChange(view: RepositoryView): void;
  className?: string;
  style?: React.CSSProperties;
}
