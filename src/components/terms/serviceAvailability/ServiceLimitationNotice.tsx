'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import { ServiceLimitationNoticeProps } from '@/types/terms/serviceAvailability/service.limitation.notice.type';
import '../../../styles/components/terms/serviceAvailability/ServiceLimitationNotice.scss';

const ServiceLimitationNotice = ({
  title,
  description,
  icon: Icon,
  accentColor,
  className,
  style,
}: ServiceLimitationNoticeProps) => {
  return (
    <motion.aside
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={clsx('service-limitation-notice', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <div className='service-limitation-notice__symbol'>
        <Icon
          size={22}
          strokeWidth={1.8}
          role='img'
          aria-hidden='true'
          focusable='false'
        />
      </div>

      <div className='service-limitation-notice__content'>
        <span className='service-limitation-notice__content--label'>
          Availability limitation
        </span>

        <h3 className='service-limitation-notice__content--title'>{title}</h3>

        <p className='service-limitation-notice__content--description'>
          {description}
        </p>
      </div>
    </motion.aside>
  );
};

export default ServiceLimitationNotice;
