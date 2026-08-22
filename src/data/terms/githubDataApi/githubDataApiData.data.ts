import { githubDataContent } from './githubDataApiContent.data';
import { githubDataGroups, githubDataNotice } from './githubDataApi.data';

import { TermsGithubDataApiProps } from '@/types/terms/githubDataApi/terms.github.data.api.type';

export const githubDataApiData: TermsGithubDataApiProps = {
  ...githubDataContent,
  groups: githubDataGroups,
  notice: githubDataNotice,
};
