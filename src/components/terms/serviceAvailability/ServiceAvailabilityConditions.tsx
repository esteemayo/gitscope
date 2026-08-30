'use client';

import ServiceAvailabilityCondition from './ServiceAvailabilityCondition';
import { ServiceAvailabilityConditionsProps } from '@/types/terms/serviceAvailability/service.availability.conditions.type';

import '../../../styles/components/terms/serviceAvailability/ServiceAvailabilityConditions.scss';

const ServiceAvailabilityConditions = ({
  conditions,
}: ServiceAvailabilityConditionsProps) => {
  return (
    <section
      className='service-availability-conditions'
      aria-labelledby='service-availability-conditions-title'
    >
      <header className='service-availability-conditions__header'>
        <span className='service-availability-conditions__header--label'>
          Availability factors
        </span>

        <h3
          id='service-availability-conditions-title'
          className='service-availability-conditions__header--title'
        >
          Conditions that may affect access
        </h3>
      </header>

      <div className='service-availability-conditions__track'>
        <div
          className='service-availability-conditions__line'
          aria-hidden='true'
        />

        {conditions.map((condition, index) => (
          <ServiceAvailabilityCondition
            key={condition.id}
            {...condition}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default ServiceAvailabilityConditions;
