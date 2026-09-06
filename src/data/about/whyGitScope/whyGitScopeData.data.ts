import { comparisonData, whyItems } from './whyGitScope.data';
import { whyGitScopeContent } from './whyGitScopeContent.data';

import { WhyGitScopeProps } from '@/types/about/whyGitScope/why.gitscope.type';

export const whyGitScopeData: WhyGitScopeProps = {
  ...whyGitScopeContent,
  values: whyItems,
  comparison: comparisonData,
};
