import * as data from './internationalUsers.data';
import { internationalUsersContent } from './internationalUsersContent.data';

import { InternationalUsersProps } from '@/types/privacy/internationalUsers/international.users.type';

export const internationalUsersData: InternationalUsersProps = {
  ...internationalUsersContent,
  panel: data.internationalUsersPanel,
  notice: data.internationalUsersNotice,
};
