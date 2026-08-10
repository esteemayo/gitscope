'use client';

import clsx from 'clsx';
import { RetentionNoticeProps } from '@/types/privacy/dataRetention/retention.notice.type';

import '../../../styles/components/privacy/dataRetention/RetentionNotice.scss';

const RetentionNotice = ({
  badge,
  title,
  description,
  icon: Icon,
  accentColor,
  className,
  style,
}: RetentionNoticeProps) => {
  return (
    <aside
      className={clsx('retention-notice', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <div className='retention-notice__icon'>
        <Icon size={28} role='img' aria-hidden='true' focusable='false' />
      </div>

      <div className='retention-notice__content'>
        <span className='retention-notice__content--badge'>{badge}</span>

        <h3 className='retention-notice__content--title'>{title}</h3>

        <p className='retention-notice__content--description'>{description}</p>
      </div>
    </aside>
  );
};

export default RetentionNotice;
