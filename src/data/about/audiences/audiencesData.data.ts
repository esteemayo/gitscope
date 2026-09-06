import { audiences } from './audiences.data';
import { audiencesContent } from './audiencesContent.data';

import { WhoItsForProps } from '@/types/about/whoItsFor/who.its.for.type';

export const audiencesData: WhoItsForProps = {
  ...audiencesContent,
  audiences,
};
