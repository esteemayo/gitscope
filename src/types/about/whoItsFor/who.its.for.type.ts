import { Audience, AudienceContent } from './index';

export interface WhoItsForProps extends AudienceContent {
  audiences: Audience[];
  className?: string;
  style?: React.CSSProperties;
}
