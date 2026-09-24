'use client';

import clsx from 'clsx';
import { ContributionItemProps } from '@/types/docs/analytics/contribution/contribution.item.type';

import '../../../../styles/components/docs/analytics/contribution/ContributionItem.scss';

const ContributionItem = ({
  label,
  description,
  accentColor,
  className,
  style,
}: ContributionItemProps) => {
  return (
    <div
      className={clsx('contribution-item', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <span className='contribution-item__marker' aria-hidden='true' />

      <div className='contribution-item__content'>
        <h3 className='contribution-item__content--label'>{label}</h3>

        <p className='contribution-item__content--description'>{description}</p>
      </div>
    </div>
  );
};

export default ContributionItem;
