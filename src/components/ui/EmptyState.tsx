import { EmptyStateProps } from '@/types/empty.state.type';
import '../../styles/components/EmptyState.scss';

const EmptyState = ({ title, subtitle }: EmptyStateProps) => {
  return (
    <div className='empty-state' role='alert' aria-live='polite'>
      <h3 className='empty-state__title'>{title}</h3>

      <span className='empty-state__desc'>{subtitle}</span>
    </div>
  );
};

export default EmptyState;
