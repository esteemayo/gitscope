import clsx from 'clsx';
import {
  CalendarDays,
  Check,
  Code2,
  Languages,
  LockKeyhole,
  LucideIcon,
  Star,
  Users2,
} from 'lucide-react';

import { DeveloperAward } from '@/types/dashboard/awards';
import { AwardCardProps } from '@/types/dashboard/awards/award.card.type';

import '../../../styles/components/dashboard/awards/AwardCard.scss';

type CustomCSSProperties = React.CSSProperties & {
  '--accent-color': string;
};

const AWARD_ICONS: Record<DeveloperAward['icon'], LucideIcon> = {
  star: Star,
  code: Code2,
  users: Users2,
  calendar: CalendarDays,
  languages: Languages,
};

const AwardCard = ({
  name,
  description,
  requirement,
  icon,
  accentColor,
  progress,
  progressLabel,
  status,
  className,
  style,
}: AwardCardProps) => {
  const Icon = AWARD_ICONS[icon];

  const isEarned = status === 'earned';
  const isUnavailable = status === 'unavailable';

  return (
    <article
      className={clsx('award-card', {
        'award-card earned': isEarned,
        'award-card unavailable': isUnavailable,
        className,
      })}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as CustomCSSProperties
      }
    >
      <div className='award-card__header'>
        <div className='award-card__icon'>
          <Icon
            size={24}
            strokeWidth={1.8}
            role='img'
            aria-hidden='true'
            focusable='false'
          />
        </div>

        <span
          className={clsx('award-card__status', {
            'award-card__status--earned': isEarned,
            'award-card__status--unavailable': isUnavailable,
            'award-card__status--locked': !isEarned && !isUnavailable,
          })}
        >
          {isEarned ? (
            <>
              <Check
                size={12}
                strokeWidth={1.8}
                role='img'
                aria-hidden='true'
                focusable='false'
              />
              Earned
            </>
          ) : isUnavailable ? (
            'Unavailable'
          ) : (
            <>
              <LockKeyhole
                size={12}
                strokeWidth={1.8}
                role='img'
                aria-hidden='true'
                focusable='false'
              />
              Locked
            </>
          )}
        </span>
      </div>

      <div className='award-card__content'>
        <h3 className='award-card__content--name'>{name}</h3>

        <p className='award-card__content--description'>{description}</p>
      </div>

      <div className='award-card__progress-section'>
        <div className='award-card__progress-info'>
          <span>{requirement}</span>

          <span>
            {isEarned
              ? 'Completed'
              : isUnavailable
                ? 'Data needed'
                : `${progress}%`}
          </span>
        </div>

        <div
          className='award-card__progress-track'
          role='progressbar'
          aria-label={`${name} progress`}
          aria-valuenow={isUnavailable ? 0 : progress}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <span
            className='award-card__progress-bar'
            style={{
              width: `${isUnavailable ? 0 : progress}%`,
            }}
            aria-hidden='true'
          />
        </div>

        <span className='award-card__progress-label'>{progressLabel}</span>
      </div>
    </article>
  );
};

export default AwardCard;
