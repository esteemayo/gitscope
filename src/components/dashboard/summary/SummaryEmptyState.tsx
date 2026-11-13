import clsx from 'clsx';
import { Activity } from 'lucide-react';

import { SummaryEmptyStateProps } from '@/types/dashboard/summary/summary.empty.state,type';
import '../../../styles/components/dashboard/summary/SummaryEmptyState.scss';

const SummaryEmptyState = ({
  label,
  icon: Icon = Activity,
  className,
  style,
}: SummaryEmptyStateProps) => {
  return (
    <div className={clsx('summary-empty-state', className)} style={style}>
      <Icon
        size={20}
        strokeWidth={1.8}
        className='summary-empty-state__icon'
        role='img'
        aria-hidden='true'
        focusable='false'
      />

      <p className='summary-empty-state__label'>{label}</p>
    </div>
  );
};

export default SummaryEmptyState;
