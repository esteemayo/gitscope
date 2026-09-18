import { KeyConceptType } from './index';

export interface ConceptCardProps extends KeyConceptType {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}
