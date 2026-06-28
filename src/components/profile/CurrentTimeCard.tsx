'use client';

import { ClockIcon, GlobeIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';

import { getTimezone } from '@/utils/profile/getTimezone';
import { fadeUpVariants } from '@/animations/fade';
import { CurrentTimeCardProps } from '@/types/profile/current.time.card.type';

import '../../styles/components/profile/CurrentTimeCard.scss';

const CurrentTimeCard = ({ location }: CurrentTimeCardProps) => {
  const [time, setTime] = useState('');

  const timezone = useMemo(() => getTimezone(location), [location]);

  const formattedWeekDay = useMemo(() => {
    return new Intl.DateTimeFormat('en-US', {
      weekday: 'long',
      timeZone: timezone,
    }).format(new Date());
  }, [timezone]);

  const formattedDate = useMemo(() => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      year: '2-digit',
      timeZone: timezone,
    }).format(new Date());
  }, [timezone]);

  useEffect(() => {
    const updateTime = () => {
      const formatted = new Intl.DateTimeFormat('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true,
        timeZone: timezone,
      }).format(new Date());

      setTime(formatted);
    };

    updateTime();

    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [timezone]);

  return (
    <motion.aside
      variants={fadeUpVariants}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -4 }}
      className='current-time-card'
      aria-labelledby='current-time-title'
    >
      <div className='current-time-card__container'>
        <header className='current-time-card__header'>
          <div className='current-time-card__icon' aria-hidden='true'>
            <ClockIcon size={20} />
          </div>

          <div className='current-time-card__content'>
            <h2 id='current-time-title' className='current-time-card__title'>
              Local time
            </h2>

            <p className='current-time-card__description'>Current timezone</p>
          </div>
        </header>

        <div className='current-time-card__body'>
          <strong className='current-time-card__time'>{time}</strong>

          <div className='current-time-card__timezone'>
            <GlobeIcon size={16} />

            <span className='current-time-card__timezone--value'>
              {timezone}
            </span>
          </div>
        </div>

        <footer className='current-time-card__footer'>
          <time
            dateTime={formattedWeekDay}
            className='current-time-card__footer--week'
          >
            {formattedWeekDay}
          </time>

          <time
            dateTime={formattedDate}
            className='current-time-card__footer--date'
          >
            {formattedDate}
          </time>
        </footer>
      </div>
    </motion.aside>
  );
};

export default CurrentTimeCard;
