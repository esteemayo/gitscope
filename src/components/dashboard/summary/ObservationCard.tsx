'use client';

import clsx from 'clsx';
import {
  AlertCircle,
  CheckCircle2,
  Code2,
  Layers3,
  type LucideIcon,
} from 'lucide-react';

import { SummaryObservation } from '@/types/dashboard/summary';
import { ObservationCardProps } from '@/types/dashboard/summary/observation.card.type';

import '../../../styles/components/dashboard/summary/ObservationCard.scss';

const OBSERVATION_ICONS: Record<SummaryObservation['type'], LucideIcon> = {
  positive: CheckCircle2,
  technology: Code2,
  attention: AlertCircle,
  neutral: Layers3,
};

const ObservationCard = ({
  title,
  description,
  type,
  className,
  style,
}: ObservationCardProps) => {
  const Icon = OBSERVATION_ICONS[type];

  return (
    <article
      className={clsx('observation-card', className)}
      style={style}
      data-type={type}
    >
      <div className='observation-card__icon' aria-hidden='true'>
        <Icon
          size={19}
          strokeWidth={1.8}
          role='img'
          aria-hidden='true'
          focusable='false'
        />
      </div>

      <div className='observation-card__content'>
        <h4 className='observation-card__content--title'>{title}</h4>

        <p className='observation-card__content--description'>{description}</p>
      </div>
    </article>
  );
};

export default ObservationCard;
