'use client';

import { useState } from 'react';

import ContributionLegend from './ContributionLegend';
import ProfileHeading from '../ProfileHeading';
import ContributionTooltip from './ContributionTooltip';
import ContributionCell from './ContributionCell';

import { ContributionDay } from '@/types/profile/contribution';
import { ContributionHeatmapProps } from '@/types/profile/contribution/contribution.heatmap.type';

import '../../../styles/components/profile/contributionHeatmap/ContributionHeatmap.scss';

const ContributionHeatmap = ({
  weeks,
  totalContributions,
}: ContributionHeatmapProps) => {
  const [hoveredDay, setHoveredDay] = useState<ContributionDay | null>(null);

  return (
    <div className='contribution-heatmap'>
      <div className='contribution-heatmap__container'>
        <header className='contribution-heatmap__header'>
          <div className='contribution-heatmap__group'>
            <ProfileHeading
              id='contribution-heatmap-title'
              title='Contribution Activity'
              description='You coding activity over the last year'
            />
          </div>

          <strong className='contribution-heatmap__count'>
            {totalContributions.toLocaleString()} contributions
          </strong>
        </header>

        <div className='contribution-heatmap__calendar'>
          {weeks?.map((week) => (
            <div key={week.week}>
              {week.days.map((day) => (
                <ContributionCell
                  key={day.date}
                  day={day}
                  onHover={setHoveredDay}
                />
              ))}
            </div>
          ))}
        </div>

        <ContributionLegend />

        <ContributionTooltip day={hoveredDay} />
      </div>
    </div>
  );
};

export default ContributionHeatmap;
