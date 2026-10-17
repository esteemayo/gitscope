'use client';

import { GitFork, type LucideIcon, Star, Users2 } from 'lucide-react';
import { useMemo, useState } from 'react';
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

import SavedHeading from '../SavedHeading';
import SavedProfilesChartTooltip from './SavedProfilesChartTooltip';

import { formatNumber } from '@/utils/formatNumber';
import { SavedProfile } from '@/types/saved/card';
import { MAX_CHART_PROFILES } from '@/constants/savedProfiles';

import '../../../styles/components/saved/chart/SavedProfilesChart.scss';

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
          margin={{ top: 4, right: 24, bottom: 4, left: 8 }}
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
