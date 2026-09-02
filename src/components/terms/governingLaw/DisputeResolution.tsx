'use client';

import { motion } from 'framer-motion';
import clsx from 'clsx';
import { ArrowUpRight } from 'lucide-react';

import { DisputeResolutionProps } from '@/types/terms/governingLaw/dispute.resolution.type';
import '../../../styles/components/terms/governingLaw/DisputeResolution.scss';

const DisputeResolution = ({
  label,
  title,
  description,
  points,
  icon: Icon,
  accentColor,
  className,
  style,
}: DisputeResolutionProps) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={clsx('dispute-resolution', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
      aria-labelledby='dispute-resolution-title'
    >
      <div className='dispute-resolution__heading'>
        <div className='dispute-resolution__icon'>
          <Icon
            size={22}
            strokeWidth={1.8}
            role='img'
            aria-hidden='true'
            focusable='false'
          />
        </div>

        <div className='dispute-resolution__wrapper'>
          <span className='dispute-resolution__wrapper--label'>{label}</span>

          <h3
            id='dispute-resolution-title'
            className='dispute-resolution__wrapper--title'
          >
            {title}
          </h3>
        </div>
      </div>

      <div className='dispute-resolution__body'>
        <p className='dispute-resolution__description'>{description}</p>

        <ul className='dispute-resolution__list'>
          {points.map((point, index) => (
            <li key={point} className='dispute-resolution__item'>
              <span className='dispute-resolution__item--number'>
                {String(index + 1).padStart(2, '0')}
              </span>

              <p className='dispute-resolution__item--point'>{point}</p>

              <ArrowUpRight size={16} strokeWidth={1.8} aria-hidden='true' />
            </li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
};

export default DisputeResolution;
