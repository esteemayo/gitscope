'use client';

import { motion } from 'framer-motion';

import Counter from '@/components/ui/Counter';
import { ActivityCardProps } from '@/types/profile/activity/activity.card.type';

import '../../../styles/components/profile/activity/ActivityCard.scss';

const ActivityCard = ({
  metric: {
    id,
    icon: Icon,
    title,
    subtitle,
    value,
    trend,
    trendLabel,
    trendDirection = 'neutral',
  },
}: ActivityCardProps) => {
  const isNumber = typeof value === 'number';

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
      className='activity-card'
      aria-labelledby={`${id}-title`}
      aria-describedby={`${id}-description`}
    >
      <div className='activity-card__container'>
        <header className='activity-card__header'>
          <div className='activity-card__heading'>
            <div className='activity-card__heading--icon'>
              <Icon size={20} />
            </div>

            <h3 id={`${id}-title`} className='activity-card__heading--title'>
              {title}
            </h3>
          </div>

          {trend !== undefined && (
            <div
              className={`activity-card__trend activity-card__trend--${trendDirection ?? 'neutral'}`}
            >
              <strong className='activity-card__trend--value'>
                {trendDirection === 'down'
                  ? '▾'
                  : trendDirection === 'up'
                    ? '▴'
                    : '•'}{' '}
                {Math.abs(trend)}%
              </strong>

              {trendLabel && (
                <span className='activity-card__trend--label'>
                  {trendLabel}
                </span>
              )}
            </div>
          )}
        </header>

        <div className='activity-card__content'>
          <strong className='activity-card__content--value'>
            {isNumber ? <Counter value={value} duration={4} /> : value}
          </strong>

          {subtitle && (
            <p
              id={`${id}-description`}
              className='activity-card__content--subtitle'
            >
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default ActivityCard;
