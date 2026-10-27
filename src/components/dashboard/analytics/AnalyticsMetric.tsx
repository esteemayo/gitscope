import clsx from 'clsx';
import { Activity, GitFork, Star } from 'lucide-react';

import { formatNumber } from '@/utils/formatNumber';
import { AnalyticsMetricProps } from '@/types/dashboard/analytics/analytics.metric.type';

import '../../../styles/components/dashboard/analytics/AnalyticsMetric.scss';

type CustomCSSProperties = React.CSSProperties & {
  '--accent-color': string;
};

const ICONS = {
  star: Star,
  'git-fork': GitFork,
  activity: Activity,
};

const AnalyticsMetric = ({
  label,
  value,
  description,
  icon,
  accentColor,
  className,
  style,
}: AnalyticsMetricProps) => {
  const Icon = ICONS[icon];

  return (
    <article
      className={clsx('analytics-metric', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as CustomCSSProperties
      }
    >
      <div className='analytics-metric__top'>
        <span className='analytics-metric__top--icon'>
          <Icon
            size={24}
            strokeWidth={1.8}
            role='img'
            aria-hidden='true'
            focusable='false'
          />
        </span>

        <span className='analytics-metric__top--indicator'>
          <Activity
            size={14}
            strokeWidth={1.8}
            role='img'
            aria-hidden='true'
            focusable='false'
          />
        </span>
      </div>

      <div className='analytics-metric__content'>
        <span className='analytics-metric__content--label'>{label}</span>

        <h3 className='analytics-metric__content--value'>
          {formatNumber(value)}
        </h3>

        <p className='analytics-metric__content--description'>{description}</p>
      </div>
    </article>
  );
};

export default AnalyticsMetric;
