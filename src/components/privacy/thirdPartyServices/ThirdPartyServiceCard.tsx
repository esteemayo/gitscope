'use client';

import clsx from 'clsx';

import { ThirdPartyServiceCardProps } from '@/types/privacy/thirdPartyServices/third.party.service.card.type';
import '../../../styles/components/privacy/thirdPartyServices/ThirdPartyServiceCard.scss';

const ThirdPartyServiceCard = ({
  name,
  category,
  description,
  purpose,
  dataShared,
  requirement,
  icon: Icon,
  accentColor,
  className,
  style,
}: ThirdPartyServiceCardProps) => {
  return (
    <article
      className={clsx('third-party-service-card', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <div className='third-party-service-card__top'>
        <div className='third-party-service-card__identity'>
          <div className='third-party-service-card__icon'>
            <Icon size={2430} role='img' aria-hidden='true' focusable='false' />
          </div>

          <div className='third-party-service-card__heading'>
            <h3 className='third-party-service-card__heading--name'>{name}</h3>

            <span className='third-party-service-card__heading--category'>
              {category}
            </span>
          </div>
        </div>

        <span className='third-party-service-card__requirement'>
          {requirement}
        </span>
      </div>

      <p className='third-party-service-card__description'>{description}</p>

      <div className='third-party-service-card__details'>
        <div className='third-party-service-card__detail'>
          <span className='third-party-service-card__detail--label'>
            Purpose
          </span>

          <p className='third-party-service-card__detail--value'>{purpose}</p>
        </div>

        <div className='third-party-service-card__detail'>
          <span className='third-party-service-card__detail--label'>
            Data Shared
          </span>

          <p className='third-party-service-card__detail--value'>
            {dataShared}
          </p>
        </div>
      </div>
    </article>
  );
};

export default ThirdPartyServiceCard;
