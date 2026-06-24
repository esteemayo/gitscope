'use client';

import { ClockIcon, GlobeIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';

import { getTimezone } from '@/utils/profile/getTimezone';
import '../../styles/components/profile/CurrentTimeCard.scss';

interface CurrentTimeCardProps {
  location?: string | null;
}

const CurrentTimeCard = ({ location }: CurrentTimeCardProps) => {
  const [time, setTime] = useState('');

  const timezone = useMemo(() => getTimezone(location), [location]);

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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className='current-time-card'
      aria-labelledby='current-time-title'
    >
      <div className='current-time-card__container'>
        <div className='current-time-card__header'>
          <div className='current-time-card__icon' aria-hidden='true'>
            <ClockIcon size={20} />
          </div>

          <div className='current-time-card__content'>
            <h2 id='current-time-title' className='current-time-card__title'>
              Current time
            </h2>

            <p className='current-time-card__description'>Live timezone</p>
          </div>
        </div>

        <div className='current-time-card__body'>
          <strong className='current-time-card__time'>{time}</strong>

          <div className='current-time-card__timezone'>
            <GlobeIcon size={16} />

            <span className='current-time-card__timezone--value'>
              {timezone}
            </span>
          </div>
        </div>
      </div>
    </motion.aside>
  );
};

export default CurrentTimeCard;
