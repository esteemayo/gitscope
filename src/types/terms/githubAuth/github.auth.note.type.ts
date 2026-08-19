import { GithubAuthNoteData } from './index';

export interface GitHubAuthNoteProps extends GithubAuthNoteData {
  index: number;
  className?: string;
  style?: React.CSSProperties;
}
