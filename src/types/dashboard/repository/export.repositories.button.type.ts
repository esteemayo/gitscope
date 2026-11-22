import { GitHubRepository } from '../index';

export interface ExportRepositoriesButtonProps {
  repositories: GitHubRepository[];
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}
