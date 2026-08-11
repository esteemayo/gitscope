'use client';

import clsx from 'clsx';
import { ChildrenPrivacyNoticeProps } from '@/types/privacy/childrenPrivacy/children.privacy.notice.type';

import '../../../styles/components/privacy/childrenPrivacy/ChildrenPrivacyNotice.scss';

const ChildrenPrivacyNotice = ({
  badge,
  title,
  description,
  icon: Icon,
  accentColor,
  className,
  style,
}: ChildrenPrivacyNoticeProps) => {
  return (
    <aside
      className={clsx('children-privacy-notice', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <div className='children-privacy-notice__icon'>
        <Icon size={22} role='img' aria-hidden='true' focusable='false' />
      </div>

      <div className='children-privacy-notice__content'>
        <span className='children-privacy-notice__content--badge'>{badge}</span>

        <h3 className='children-privacy-notice__content--title'>{title}</h3>

        <p className='children-privacy-notice__content--description'>
          {description}
        </p>
      </div>
    </aside>
  );
};

export default ChildrenPrivacyNotice;
