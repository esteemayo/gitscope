import * as data from './termination.data';
import { terminationContent } from './terminationContent.data';

import { TerminationProps } from '@/types/terms/termination/termination.type';

export const terminationData: TerminationProps = {
  ...terminationContent,
  paths: data.terminationPaths,
  effects: data.terminationEffects,
  survivingObligations: data.terminationSurvivingObligations,
};
