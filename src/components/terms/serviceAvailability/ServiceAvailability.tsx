'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import ServiceLimitationNotice from './ServiceLimitationNotice';
import TermsSectionHeader from '../TermsSectionHeader';
import ServiceAvailabilityIntro from './ServiceAvailabilityIntro';
import ServiceStatusOverview from './ServiceStatusOverview';
import ServiceAvailabilityConditions from './ServiceAvailabilityConditions';

import { containerVariants } from '@/animations/page';
import { ServiceAvailabilityProps } from '@/types/terms/serviceAvailability/service.availability.type';

import '../../../styles/components/terms/serviceAvailability/ServiceAvailability.scss';

const ServiceAvailability = ({
  badge,
  title,
  description,
  headerIcon,
  intro,
  services,
  conditions,
  notice,
  accentColor,
  className,
  style,
}: ServiceAvailabilityProps) => {
  return (
    <motion.section
      id='service-availability'
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      className={clsx('service-availability', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
      aria-labelledby='service-availability-title'
    >
      <div className='service-availability__container'>
        <TermsSectionHeader
          id='service-availability-title'
          badge={badge}
          title={title}
          description={description}
          icon={headerIcon}
          variants={containerVariants}
        />

        <div className='service-availability__body'>
          <ServiceAvailabilityIntro intro={intro} />

          <ServiceStatusOverview services={services} />

          <ServiceAvailabilityConditions conditions={conditions} />

          <ServiceLimitationNotice {...notice} />
        </div>
      </div>
    </motion.section>
  );
};

export default ServiceAvailability;
