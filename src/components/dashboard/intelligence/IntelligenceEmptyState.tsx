import clsx from 'clsx';
import { BrainCircuit } from 'lucide-react';

import { IntelligenceEmptyStateProps } from '@/types/dashboard/intelligence/intelligence.empty.state.type';
import '../../../styles/components/dashboard/intelligence/IntelligenceEmptyState.scss';

const IntelligenceEmptyState = ({
  title,
  description,
  icon: Icon = BrainCircuit,
  className,
  style,
}: IntelligenceEmptyStateProps) => {
  return (
    <div className={clsx('intelligence-empty-state', className)} style={style}>
      <div className='intelligence-empty-state__icon' aria-hidden='true'>
        <Icon
          size={24}
          strokeWidth={1.8}
          role='img'
          aria-hidden='true'
          focusable='false'
        />
      </div>

      <div className='intelligence-empty-state__content'>
        <h3 className='intelligence-empty-state__content--title'>{title}</h3>

        <p className='intelligence-empty-state__content--description'>
          {description}
        </p>
      </div>
    </div>
  );
};

export default IntelligenceEmptyState;
