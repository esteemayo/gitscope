import { ContributionTooltipProps } from '@/types/profile/contribution/contribution.tooltip.type';
import '../../../styles/components/profile/contributionHeatmap/ContributionTooltip.scss';

const ContributionTooltip = ({ day }: ContributionTooltipProps) => {
  return (
    <div className='contribution-tooltip'>
      <div className='contribution-tooltip__container'>ContributionTooltip</div>
    </div>
  );
};

export default ContributionTooltip;
