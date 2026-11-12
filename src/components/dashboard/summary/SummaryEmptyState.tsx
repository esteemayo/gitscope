import clsx from 'clsx';
import { Activity, LucideIcon } from 'lucide-react';

import '../../../styles/components/dashboard/summary/SummaryEmptyState.scss';

interface SummaryEmptyStateProps {
  label: string;
  icon?: LucideIcon | React.ComponentType;
  className?: string;
  style?: React.CSSProperties;
}

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
