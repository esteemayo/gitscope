'use client';

import { ArrowRight, ShieldCheck } from 'lucide-react';

import ThirdPartyService from './ThirdPartyService';
import { ThirdPartyServiceMapProps } from '@/types/terms/thirdPartyServices/third.party.service.map.type';

import '../../../styles/components/terms/thirdPartyServices/ThirdPartyServiceMap.scss';

const ThirdPartyServiceMap = ({ services }: ThirdPartyServiceMapProps) => {
  return (
    <section
      className='third-party-service-map'
      aria-labelledby='third-party-service-map-title'
    >
      <header className='third-party-service-map__header'>
        <div className='third-party-service-map__heading'>
          <span className='third-party-service-map__heading--label'>
            Integration map
          </span>

          <h3
            id='third-party-service-map-title'
            className='third-party-service-map__heading--title'
          >
            How external services connect to GitScope
          </h3>
        </div>

        <div className='third-party-service-map__legend'>
          <span>
            <i aria-hidden='true' />
            External dependency
          </span>
        </div>
      </header>

      <div className='third-party-service-map__canvas'>
        <div className='third-party-service-map__origin'>
          <div className='third-party-service-map__icon'>
            <ShieldCheck
              size={22}
              strokeWidth={1.8}
              role='img'
              aria-hidden='true'
              focusable='false'
            />
          </div>

          <div className='third-party-service-map__content'>
            <strong className='third-party-service-map__content--label'>
              GitScope
            </strong>

            <span className='third-party-service-map__content--description'>
              Analytics platform
            </span>
          </div>
        </div>

        <div className='third-party-service-map__connector' aria-hidden='true'>
          <span />

          <ArrowRight
            size={16}
            strokeWidth={1.8}
            role='img'
            aria-hidden='true'
            focusable='false'
          />
        </div>

        <div className='third-party-service-map__services'>
          {services.map((service, index) => (
            <ThirdPartyService key={service.id} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThirdPartyServiceMap;
