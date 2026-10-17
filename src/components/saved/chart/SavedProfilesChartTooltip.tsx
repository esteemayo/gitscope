'use client';

import { SavedProfilesChartTooltipProps } from '@/types/saved/chart/saved.profiles.chart.tooltip.type';
import '../../../styles/components/saved/chart/SavedProfilesChartTooltip.scss';

const SavedProfilesChartTooltip = ({
  active,
  payload,
  metricLabel,
  formatNumber,
}: SavedProfilesChartTooltipProps) => {
  if (!active || !payload?.length) {
    return null;
  }

  const profile = payload[0].payload;

  return (
    <div className='saved-profiles-chart-tooltip'>
      <div className='saved-profiles-chart-tooltip__heading'>
        <span
          className='saved-profiles-chart-tooltip__heading--dot'
          style={
            {
              '--accent-color': profile.accentColor,
            } as React.CSSProperties
          }
        />

        <span className='saved-profiles-chart-tooltip__heading--name'>
          {profile.name}
        </span>
      </div>

      <span className='saved-profiles-chart-tooltip__username'>
        @{profile.login}
      </span>

      <div className='saved-profiles-chart-tooltip__value'>
        {formatNumber(profile.value)} <span>{metricLabel?.toLowerCase()}</span>
      </div>
    </div>
  );
};

export default SavedProfilesChartTooltip;
