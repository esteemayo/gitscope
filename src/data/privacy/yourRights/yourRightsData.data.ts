import { rightsNotice } from './rightsNotice.data';
import { userRights } from './yourRights.data';
import { yourRightsContent } from './yourRightsContent.data';

import { YourRightsProps } from '@/types/privacy/yourRights/your.rights.type';

export const yourRightsData: YourRightsProps = {
  ...yourRightsContent,
  rights: userRights,
  notice: rightsNotice,
};
