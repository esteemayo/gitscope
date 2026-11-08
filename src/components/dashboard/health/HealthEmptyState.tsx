import clsx from 'clsx';
import { AlertCircle } from 'lucide-react';

import { HealthEmptyStateProps } from '@/types/dashboard/health/health.empty.state.type';
import '../../../styles/components/dashboard/health/HealthEmptyState.scss';

type CustomCSSProperties = React.CSSProperties & {
  '--accent-color': string;
};

const HealthEmptyState = ({
  title,
  description,
  icon: Icon = AlertCircle,
  accentColor,
  className,
  style,
}: HealthEmptyStateProps) => {
  return (
    <div
      className={clsx('health-empty-state', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as CustomCSSProperties
      }
    >
      <div className='health-empty-state__icon' aria-hidden='true'>
        <Icon
          size={24}
          strokeWidth={1.8}
          role='img'
          aria-hidden='true'
          focusable='false'
        />
      </div>

      <div className='health-empty-state__content'>
        <h3 className='health-empty-state__content--title'>{title}</h3>

        <p className='health-empty-state__content--description'>
          {description}
        </p>
      </div>
    </div>
  );
};

export default HealthEmptyState;
