'use client';

import clsx from 'clsx';
import { ThirdPartyServicesNoticeProps } from '@/types/privacy/thirdPartyServices/third.party.services.notice.type';

import '../../../styles/components/privacy/thirdPartyServices/ThirdPartyServicesNotice.scss';

const ThirdPartyServicesNotice = ({
  badge,
  title,
  description,
  icon: Icon,
  accentColor,
  points,
  className,
  style,
}: ThirdPartyServicesNoticeProps) => {
  return (
    <aside
      className={clsx('third-party-services-notice', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <div className='third-party-services-notice__icon'>
        <Icon size={26} role='img' aria-hidden='true' focusable='false' />
      </div>

      <div className='third-party-services-notice__wrapper'>
        <div className='third-party-services-notice__content'>
          <span className='third-party-services-notice__content--badge'>
            {badge}
          </span>

          <h3 className='third-party-services-notice__content--title'>
            {title}
          </h3>

          <p className='third-party-services-notice__content--description'>
            {description}
          </p>
        </div>

        <ul className='third-party-services-notice__points'>
          {points.map((point) => (
            <li key={point} className='third-party-services-notice__item'>
              <span
                className='third-party-services-notice__item--check'
                aria-hidden='true'
              />

              <span className='third-party-services-notice__item--point'>
                {point}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default ThirdPartyServicesNotice;
