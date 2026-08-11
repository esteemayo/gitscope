'use client';

import clsx from 'clsx';
import { InternationalUsersNoticeProps } from '@/types/privacy/internationalUsers/international.users.notice.type';

import '../../../styles/components/privacy/internationalUsers/InternationalUsersNotice.scss';

const InternationalUsersNotice = ({
  badge,
  title,
  description,
  icon: Icon,
  accentColor,
  className,
  style,
}: InternationalUsersNoticeProps) => {
  return (
    <aside
      className={clsx('international-users-notice', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <div className='international-users-notice__icon'>
        <Icon size={22} role='img' aria-hidden='true' focusable='false' />
      </div>

      <div className='international-users-notice__content'>
        <span className='international-users-notice__content--badge'>
          {badge}
        </span>

        <h3 className='international-users-notice__content--title'>{title}</h3>

        <p className='international-users-notice__content--description'>
          {description}
        </p>
      </div>
    </aside>
  );
};

export default InternationalUsersNotice;
