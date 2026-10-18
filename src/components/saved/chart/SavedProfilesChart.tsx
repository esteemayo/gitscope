'use client';

import { RechartsDevtools } from '@recharts/devtools';
import { useMemo, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';

import SavedHeading from '../SavedHeading';
import SavedProfilesChartTooltip from './SavedProfilesChartTooltip';

import { metrics } from '@/data/saved/chart-metrics.data';
import { formatNumber } from '@/utils/formatNumber';
import { MAX_CHART_PROFILES } from '@/constants/savedProfiles';

import { Metric } from '@/types/saved/chart';
import { SavedProfilesChartProps } from '@/types/saved/chart/saved.profiles.chart.type';

import '../../../styles/components/saved/chart/SavedProfilesChart.scss';

const SavedProfilesChart = ({ profiles }: SavedProfilesChartProps) => {
  const [metric, setMetric] = useState<Metric>('repositories');

  const chartData = useMemo(() => {
    return profiles
      .map((profile) => ({
        id: profile.id,
        login: profile.login,
        name: profile.name || profile.login,
        value: profile[metric],
        accentColor: profile.accentColor,
      }))
      .sort((a, b) => b.value - a.value)
      .slice(0, MAX_CHART_PROFILES);
  }, [metric, profiles]);

  const selectedMetric = metrics.find((item) => item.value === metric);

  const MetricIcon = selectedMetric?.icon;

  if ((profiles ?? []).length === 0) {
    return null;
  }

  return (
    <section
      className='saved-profiles-chart'
      aria-labelledby='saved-profiles-chart-title'
    >
      <header className='saved-profiles-chart__header'>
        <SavedHeading
          title='Profile comparison'
          description='Compare metrics across your saved developers.'
          icon={MetricIcon!}
        />
      </header>

      <div className='saved-profiles-chart__card'>
        <div className='saved-profiles-chart__controls'>
          <div
            className='saved-profiles-chart__metric-selector'
            role='group'
            aria-label='Choose comparison metric'
          >
            {metrics.map((item) => {
              const { label, value, icon: Icon } = item;
              const isActive = metric === value;

              return (
                <button
                  key={value}
                  type='button'
                  onClick={() => setMetric(value)}
                  className='saved-profiles-chart__metric-btn'
                  data-active={isActive}
                  aria-pressed={isActive}
                >
                  <Icon
                    size={15}
                    strokeWidth={1.8}
                    role='img'
                    aria-hidden='true'
                    focusable='false'
                  />

                  <span>{label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className='saved-profiles-chart__meta'>
          <span className='saved-profiles-chart__meta--description'>
            {selectedMetric?.description}
          </span>

          <span className='saved-profiles-chart__meta--count'>
            {profiles.length} saved profiles
          </span>
        </div>

        <div
          className='saved-profiles-chart__chart'
          style={{
            height: `${Math.max(220, chartData.length * 42)}px`,
          }}
          role='img'
          aria-label={`${selectedMetric?.label} comparison for saved GitHub profiles, ordered from highest to lowest`}
        >
          <BarChart
            style={{
              width: '100%',
              height: '100%',
            }}
            responsive
            data={chartData}
            layout='vertical'
            margin={{ top: 4, right: 24, bottom: 4, left: 4 }}
            barCategoryGap={15}
            tabIndex={-1}
          >
            <CartesianGrid
              horizontal={false}
              stroke='var(--border)'
              strokeDasharray='3 5'
            />

            <XAxis
              type='number'
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'var(--text-muted)', fontSize: 11 }}
              tickFormatter={formatNumber}
              tickMargin={10}
              allowDecimals={false}
            />

            <YAxis
              type='category'
              dataKey='login'
              axisLine={false}
              tickLine={false}
              width={96}
              tick={{ fill: 'var(--text)', fontSize: 12 }}
              tickMargin={10}
            />

            <Tooltip
              cursor={{
                fill: 'color-mix(in srgb, var(--border) 30%, transparent)',
                opacity: 0.7,
              }}
              content={(props) => (
                <SavedProfilesChartTooltip
                  active={props.active}
                  payload={
                    props.payload as unknown as
                      | Array<{
                          payload: {
                            name: string;
                            login: string;
                            value: number;
                            accentColor: string;
                          };
                        }>
                      | undefined
                  }
                  metricLabel={selectedMetric?.label}
                  formatNumber={formatNumber}
                />
              )}
            />

            <Bar
              dataKey='value'
              name={selectedMetric?.label}
              radius={[0, 6, 6, 0]}
              maxBarSize={22}
              isAnimationActive
              animationDuration={350}
              shape={(props) => {
                const { x, y, width, height, index } = props;
                const profile = chartData[index];

                return (
                  <rect
                    x={x}
                    y={y}
                    width={width}
                    height={height}
                    rx={6}
                    ry={6}
                    fill={profile?.accentColor ?? '--color-purple-500'}
                  />
                );
              }}
            />

            <RechartsDevtools />
          </BarChart>
        </div>

        <footer className='saved-profiles-chart__footer'>
          <span
            className='saved-profiles-chart__footer--dot'
            aria-hidden='true'
          />

          <p className='saved-profiles-chart__footer--text'>
            Profiles ranked by {selectedMetric?.label.toLowerCase()}, highest
            first.
          </p>
        </footer>
      </div>
    </section>
  );
};

export default SavedProfilesChart;
