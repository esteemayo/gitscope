'use client';

import clsx from 'clsx';
import { Activity, Clock3, type LucideIcon, Scale } from 'lucide-react';

import { RepositoryHealthMetric } from '@/types/dashboard/health';
import { HealthMetricCardProps } from '@/types/dashboard/health/health.metric.card.type';

import '../../../styles/components/dashboard/health/HealthMetricCard.scss';

type CustomCSSProperties = React.CSSProperties & {
  '--accent-color': string;
};

const ICONS: Record<RepositoryHealthMetric['icon'], LucideIcon> = {
  activity: Activity,
  clock: Clock3,
  scale: Scale,
};

const HealthMetricCard = ({
  label,
  value,
  description,
  icon,
  accentColor,
  className,
  style,
}: HealthMetricCardProps) => {
  const Icon = ICONS[icon];

  return (
    <article
      className={clsx('health-metric-card', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as CustomCSSProperties
      }
    >
      <div className='health-metric-card__header'>
        <div className='health-metric-card__header--icon'>
          <Icon
            size={22}
            strokeWidth={1.8}
            role='img'
            aria-hidden='true'
            focusable='false'
          />
        </div>

        <span className='health-metric-card__header--indicator'>
          <Activity
            size={15}
            strokeWidth={1.8}
            role='img'
            aria-hidden='true'
            focusable='false'
          />
        </span>
      </div>

      <div className='health-metric-card__content'>
        <span className='health-metric-card__content--label'>{label}</span>

        <strong className='health-metric-card__content--value'>{value}</strong>

        <span className='health-metric-card__content--description'>
          {description}
        </span>
      </div>
    </article>
  );
};

export default HealthMetricCard;
