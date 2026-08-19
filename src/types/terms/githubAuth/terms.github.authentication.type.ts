import {
  GithubAuthContent,
  GithubAuthNoteData,
  GithubAuthStepData,
} from './index';

export interface TermsGithubAuthenticationProps extends GithubAuthContent {
  flowSteps: GithubAuthStepData[];
  notes: GithubAuthNoteData[];
  className?: string;
  style?: React.CSSProperties;
}
