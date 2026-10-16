'use client';

import { GitFork, LucideIcon, Star, Users2 } from 'lucide-react';
import { useState } from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

import SavedHeading from './SavedHeading';

import { SavedProfile } from '@/types/saved/card';
import { formatNumber } from '@/utils/formatNumber';

import '../../styles/components/saved/SavedProfilesChart.scss';

type Metric = 'repositories' | 'followers' | 'stars';

interface MetricItem {
  label: string;
  value: Metric;
  icon: LucideIcon | React.ComponentType;
  description: string;
}

interface SavedProfilesChartProps {
  profiles: SavedProfile[];
}

const metrics: MetricItem[] = [
  {
    label: 'Repositories',
    value: 'repositories',
    icon: GitFork,
    description: 'Repository count',
  },
  {
    label: 'Followers',
    value: 'followers',
    icon: Users2,
    description: 'Follower count',
  },
  {
    label: 'Stars',
    value: 'stars',
    icon: Star,
    description: 'Total stars',
  },
];

const SavedProfilesChart = ({ profiles }: SavedProfilesChartProps) => {
  const [metric, setMetric] = useState<Metric>('repositories');

  const chartData = profiles.map((profile) => ({
    id: profile.id,
    login: profile.login,
    name: profile.name || profile.login,
    value: profile[metric],
    accentColor: profile.accentColor,
  }));

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
      <div className='saved-profiles-chart__header'>
        <SavedHeading
          title='Profile comparison'
          description='Compare metrics across your saved developers.'
          icon={MetricIcon!}
        />

        {/* <div className='saved-profiles-chart__heading'>
          <div className='saved-profiles-chart__icon' aria-hidden='true'>
            {MetricIcon && (
              <MetricIcon
                size={18}
                strokeWidth={1.8}
                role='img'
                aria-hidden='true'
                focusable='false'
              />
            )}
          </div>

          <div className='saved-profiles-chart__content'>
            <h3
              id='saved-profiles-chart-title'
              className='saved-profiles-chart__content--title'
            >
              Profile comparison
            </h3>

            <p className='saved-profiles-chart__content--description'>
              Compare metrics across your saved developers.
            </p>
          </div>
        </div> */}

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
          barCategoryGap={12}
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
            cursor={{ fill: 'var(--bg-sidebar)', opacity: 0.7 }}
            content={({ active, payload }) => {
              if (!active || !payload?.length) return null;

              const item = payload[0].payload as (typeof chartData)[number];

              return (
                <div className='saved-profiles-chart__tooltip'>
                  <div className='saved-profiles-chart__tooltip--heading'>
                    <span
                      className='saved-profiles-chart__tooltip--dot'
                      style={{ backgroundColor: item.accentColor }}
                    />

                    <span>{item.name}</span>
                  </div>

                  <span className='saved-profiles-chart__tooltip--login'>
                    {item.login}
                  </span>

                  <div className='saved-profiles-chart__tooltip--value'>
                    {formatNumber(item.value)}{' '}
                    <span>{selectedMetric?.label.toLowerCase()}</span>
                  </div>
                </div>
              );
            }}
          />

          <Bar
            dataKey='value'
            name={selectedMetric?.label}
            radius={[0, 5, 5, 0]}
            maxBarSize={22}
            isAnimationActive
            animationDuration={350}
          >
            {chartData.map((item) => (
              <Cell key={item.id} fill={item.accentColor} />
            ))}
          </Bar>

          <RechartsDevtools />
        </BarChart>
      </div>

      <p className='saved-profiles-chart__footer'>
        <span
          className='saved-profiles-chart__footer--dot'
          aria-hidden='true'
        />
        Profiles ranked by {selectedMetric?.label.toLowerCase()}, highest first.
      </p>
    </section>
  );
};

export default SavedProfilesChart;
