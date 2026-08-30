'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import { ServiceAvailabilityConditionProps } from '@/types/terms/serviceAvailability/service.availability.condition.type';
import '../../../styles/components/terms/serviceAvailability/ServiceAvailabilityCondition.scss';

const ServiceAvailabilityCondition = ({
  title,
  description,
  icon: Icon,
  accentColor,
  index,
  className,
  style,
}: ServiceAvailabilityConditionProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, x: index % 2 === 0 ? -12 : 12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.35,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={clsx('service-availability-condition', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <div className='service-availability-condition__marker'>
        <div className='service-availability-condition__icon'>
          <Icon
            size={16}
            strokeWidth={1.8}
            role='img'
            aria-hidden='true'
            focusable='false'
          />
        </div>
      </div>

      <div className='service-availability-condition__content'>
        <span className='service-availability-condition__content--number'>
          {String(index + 1).padStart(2, '0')}
        </span>

        <h4 className='service-availability-condition__content--title'>
          {title}
        </h4>

        <p className='service-availability-condition__content--description'>
          {description}
        </p>
      </div>
    </motion.article>
  );
};

export default ServiceAvailabilityCondition;
