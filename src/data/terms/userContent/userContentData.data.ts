import * as data from './userContent.data';
import { userContentContents } from './userContentContents.data';

import { TermsUserContentProps } from '@/types/terms/userContent/terms.user.content.type';

export const userContentData: TermsUserContentProps = {
  ...userContentContents,
  lifecycle: data.userContentLifecycle,
  permissions: data.userContentPermissions,
  boundaries: data.userContentBoundaries,
  notice: data.userContentNotice
};
