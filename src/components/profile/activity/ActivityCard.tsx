'use client';

import { useEffect, useRef, useState } from 'react';
import { animate, motion, useInView } from 'framer-motion';

import { ActivityCardProps } from '@/types/profile/activity/activity.card.type';
import '../../../styles/components/profile/activity/ActivityCard.scss';

const ActivityCard = ({
  metric: {
    icon: Icon,
    title,
    subtitle,
    value,
    trend,
    trendLabel,
    trendDirection,
  },
}: ActivityCardProps) => {
  const ref = useRef<HTMLElement | null>(null);

  const [count, setCount] = useState(0);

  const isInView = useInView(ref, {
    once: true,
    margin: '-50px',
  });

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, value ?? 0, {
      duration: 4,
      ease: 'easeInOut',
      onUpdate(prev) {
        if (typeof prev !== 'string') {
          setCount(Math.floor(prev));
        }
      },
    });

    return () => controls.cancel();
  }, [isInView, value]);

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
      className='activity-card'
    >
      <div className='activity-card__container'>
        <header className='activity-card__header'>
          <div className='activity-card__icon'>
            <Icon size={24} />
          </div>

          {trend !== undefined && (
            <div
              className={`activity-card__trend activity-card__trend--${trendDirection ?? 'neutral'}`}
            >
              <strong className='activity-card__trend--value'>
                {trendDirection === 'down' ? '▾' : '▴'} {Math.abs(trend)}%
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
          <h3 className='activity-card__content--title'>{title}</h3>

          <strong className='activity-card__content--value'>
            {typeof value !== 'string' ? count : value}
          </strong>

          <p className='activity-card__content--subtitle'>{subtitle}</p>
        </div>
      </div>
    </motion.article>
  );
};

export default ActivityCard;
