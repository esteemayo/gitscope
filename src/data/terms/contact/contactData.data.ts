import * as data from './contact.data';
import { contactContent } from './contactContent.data';

import { ContactProps } from '@/types/terms/contact/contact.type';

export const contactData: ContactProps = {
  ...contactContent,
  channels: data.contactChannels,
  topics: data.contactTopics,
  expectations: data.contactExpectations,
};
