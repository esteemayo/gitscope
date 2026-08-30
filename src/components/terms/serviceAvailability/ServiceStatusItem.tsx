'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import { ServiceStatusItemProps } from '@/types/terms/serviceAvailability/service.status.item.type';
import '../../../styles/components/terms/serviceAvailability/ServiceStatusItem.scss';

const ServiceStatusItem = ({
  name,
  description,
  icon: Icon,
  status,
  accentColor,
  index,
  className,
  style,
}: ServiceStatusItemProps) => {
  const statusLabel = {
    operational: 'Available',
    dependent: 'External dependency',
    variable: 'Variable',
  }[status];

  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.35,
        delay: index * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={clsx('service-status-item', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <div className='service-status-item__top'>
        <div className='service-status-item__icon'>
          <Icon
            size={18}
            strokeWidth={1.8}
            role='img'
            aria-hidden='true'
            focusable='false'
          />
        </div>

        <div className='service-status-item__indicator'>
          <i
            className='service-status-item__indicator--dot'
            aria-hidden='true'
          />

          <span className='service-status-item__indicator--label'>
            {statusLabel}
          </span>
        </div>
      </div>

      <div className='service-status-item__content'>
        <h4 className='service-status-item__content--name'>{name}</h4>

        <p className='service-status-item__content--description'>
          {description}
        </p>
      </div>
    </motion.article>
  );
};

export default ServiceStatusItem;
