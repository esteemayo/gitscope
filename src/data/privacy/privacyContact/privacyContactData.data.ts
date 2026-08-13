import * as data from './privacyContact.data';
import { privacyContactContent } from './privacyContactContent.data';

import { PrivacyContactProps } from '@/types/privacy/privacyContact/privacy.contact.type';

export const privacyContactData: PrivacyContactProps = {
  ...privacyContactContent,
  cards: data.privacyContactCards,
  notice: data.privacyContactNotice,
};
