'use client';

import clsx from 'clsx';
import { PrivacyFAQNoticeProps } from '@/types/privacy/privacyPolicy/privacy.faq.notice.type';

import '../../../styles/components/privacy/privacyFAQ/PrivacyFAQNotice.scss';

const PrivacyFAQNotice = ({
  badge,
  title,
  description,
  icon: Icon,
  accentColor,
  className,
  style,
}: PrivacyFAQNoticeProps) => {
  return (
    <aside
      className={clsx('privacy-faq-notice', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <div className='privacy-faq-notice__icon' aria-hidden='true'>
        <Icon size={22} role='img' aria-hidden='true' focusable='false' />
      </div>

      <div className='privacy-faq-notice__content'>
        <span className='privacy-faq-notice__content--badge'>{badge}</span>

        <h3 className='privacy-faq-notice__content--title'>{title}</h3>

        <p className='privacy-faq-notice__content--description'>
          {description}
        </p>
      </div>
    </aside>
  );
};

export default PrivacyFAQNotice;
