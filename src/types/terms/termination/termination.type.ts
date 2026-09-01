import {
  SurvivingObligationType,
  TerminationContent,
  TerminationEffectType,
  TerminationPathData,
} from './index';

export interface TerminationProps extends TerminationContent {
  paths: TerminationPathData[];
  effects: TerminationEffectType[];
  survivingObligations: SurvivingObligationType[];
  className?: string;
  style?: React.CSSProperties;
}
