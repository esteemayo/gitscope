import { GithubAuthStepData } from './index';

export interface GithubAuthFlowProps {
  title: string
  description: string
  steps: GithubAuthStepData[]
  className?: string;
  style?: React.CSSProperties;
}
