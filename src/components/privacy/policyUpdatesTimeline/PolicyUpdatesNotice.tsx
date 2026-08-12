'use client';

import clsx from 'clsx';
import { PolicyUpdatesNoticeProps } from '@/types/privacy/policyUpdatesTimeline/policy.updates.notice.type';

import '../../../styles/components/privacy/policyUpdatesTimeline/PolicyUpdatesNotice.scss';

const PolicyUpdatesNotice = ({
  badge,
  title,
  description,
  icon: Icon,
  accentColor,
  className,
  style,
}: PolicyUpdatesNoticeProps) => {
  return (
    <aside
      className={clsx('policy-updates-notice', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <div className='policy-updates-notice__icon'>
        <Icon size={22} role='img' aria-hidden='true' focusable='false' />
      </div>

      <div className='policy-updates-notice__content'>
        <span className='policy-updates-notice__content--badge'>{badge}</span>

        <h3 className='policy-updates-notice__content--title'>{title}</h3>

        <p className='policy-updates-notice__content--description'>
          {description}
        </p>
      </div>
    </aside>
  );
};

export default PolicyUpdatesNotice;
