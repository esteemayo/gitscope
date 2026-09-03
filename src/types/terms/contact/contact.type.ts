import {
  ContactChannelType,
  ContactContent,
  ContactTopicType,
  ResponseExpectationType,
} from './index';

export interface ContactProps extends ContactContent {
  channels: ContactChannelType[];
  topics: ContactTopicType[];
  expectations: ResponseExpectationType[];
  className?: string;
  style?: React.CSSProperties;
}
