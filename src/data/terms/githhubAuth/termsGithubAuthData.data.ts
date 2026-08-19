import * as data from './termsGithubAuth.data';
import { termsGitHubAuthenticationContent } from './termsGithubAuthContent.data';

import { TermsGithubAuthenticationProps } from '@/types/terms/githubAuth/terms.github.authentication.type';

export const termsGitHubAuthenticationData: TermsGithubAuthenticationProps = {
  ...termsGitHubAuthenticationContent,
  flowSteps: data.termsGitHubAuthenticationSteps,
  notes: data.termsGitHubAuthenticationNotes,
};
