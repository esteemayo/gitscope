'use client';

import { CheckCircle2 } from 'lucide-react';

import ServiceStatusItem from './ServiceStatusItem';
import { ServiceStatusOverviewProps } from '@/types/terms/serviceAvailability/service.status.overview.type';

import '../../../styles/components/terms/serviceAvailability/ServiceStatusOverview.scss';

const ServiceStatusOverview = ({ services }: ServiceStatusOverviewProps) => {
  return (
    <section
      className='service-status-overview'
      aria-labelledby='service-status-overview-title'
    >
      <div className='service-status-overview__top'>
        <div className='service-status-overview__heading'>
          <span className='service-status-overview__heading--label'>
            Service conditions
          </span>

          <h3
            id='service-status-overview-title'
            className='service-status-overview__heading--title'
          >
            Availability depends on multiple service layers
          </h3>
        </div>

        <div className='service-status-overview__state'>
          <div className='service-status-overview__state-icon'>
            <CheckCircle2
              size={18}
              strokeWidth={1.8}
              role='img'
              aria-hidden='true'
              focusable='false'
            />
          </div>

          <div className='service-status-overview__content'>
            <strong className='service-status-overview__content--label'>
              Service access
            </strong>

            <span className='service-status-overview__content--description'>
              Subject to conditions
            </span>
          </div>
        </div>
      </div>

      <div className='service-status-overview__services'>
        {services.map((service, index) => (
          <ServiceStatusItem key={service.id} {...service} index={index} />
        ))}
      </div>
    </section>
  );
};

export default ServiceStatusOverview;
