'use client';

import clsx from 'clsx';
import { TrustBannerProps } from '@/types/privacy/dataStorageSecurity/trust.banner.type';

import '../../../styles/components/privacy/dataStorage/TrustBanner.scss';

const TrustBanner = ({
  badge,
  title,
  description,
  icon: Icon,
  accentColor,
  highlights,
  className,
  style,
}: TrustBannerProps) => {
  return (
    <div
      className={clsx('trust-banner', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <div className='trust-banner__content'>
        <span className='trust-banner__badge'>{badge}</span>

        <div className='trust-banner__heading'>
          <div className='trust-banner__icon'>
            <Icon size={36} role='img' aria-hidden='true' focusable='false' />
          </div>

          <div className='trust-banner__body'>
            <h3 className='trust-banner__body--title'>{title}</h3>

            <p className='trust-banner__body--description'>{description}</p>
          </div>
        </div>
      </div>

      <div className='trust-banner__highlights'>
        {highlights.map((highlight) => {
          const { id, title, description, icon: Icon, accentColor } = highlight;

          return (
            <article
              key={id}
              className='trust-banner__panel'
              style={
                {
                  '--highlight-color': accentColor,
                } as React.CSSProperties
              }
            >
              <div className='trust-banner__panel-icon'>
                <Icon
                  size={22}
                  role='img'
                  aria-hidden='true'
                  focusable='false'
                />
              </div>

              <div className='trust-banner__panel-wrapper'>
                <h4 className='trust-banner__panel-heading'>{title}</h4>

                <p className='trust-banner__panel-description'>{description}</p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default TrustBanner;
