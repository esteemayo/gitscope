import { DocsHomeSectionContent } from './index';

export interface DocsHomeSectionProps extends DocsHomeSectionContent {
  className?: 'compact';
  style?: React.CSSProperties;
  children?: React.ReactNode;
}
