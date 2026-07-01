import { ContributionDay } from './index';

export interface ContributionCellProps {
  day: ContributionDay;
  onHover(day: ContributionDay | null): void;
}
