'use client';

import clsx from 'clsx';
import { PrivacyContactNoticeProps } from '@/types/privacy/privacyContact/privacy.contact.notice.type';

import '../../../styles/components/privacy/privacyContact/PrivacyContactNotice.scss';

const PrivacyContactNotice = ({
  badge,
  title,
  description,
  icon: Icon,
  accentColor,
  className,
  style,
}: PrivacyContactNoticeProps) => {
  return (
    <aside
      className={clsx('privacy-contact-notice', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <div className='privacy-contact-notice__icon' aria-hidden='true'>
        <Icon size={22} role='img' aria-hidden='true' focusable='false' />
      </div>

      <div className='privacy-contact-notice__content'>
        <span className='privacy-contact-notice__content--badge'>{badge}</span>

        <h3 className='privacy-contact-notice__content--title'>{title}</h3>

        <p className='privacy-contact-notice__content--description'>
          {description}
        </p>
      </div>
    </aside>
  );
};

export default PrivacyContactNotice;
