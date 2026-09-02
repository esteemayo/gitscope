import * as data from './governingLaw.data';
import { governingLawContent } from './governingLawContent.data';

import { GoverningLawProps } from '@/types/terms/governingLaw/governing.law.type';

export const governingLawData: GoverningLawProps = {
  ...governingLawContent,
  jurisdiction: data.governingLawJurisdiction,
  principles: data.governingLawPrinciples,
  disputeResolution: data.governingLawDisputeResolution,
};
