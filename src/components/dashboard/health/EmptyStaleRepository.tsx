import clsx from 'clsx';
import { Activity } from 'lucide-react';

import { EmptyStaleRepositoryProps } from '@/types/dashboard/health/empty.stale.repository.type';
import '../../../styles/components/dashboard/health/EmptyStaleRepository.scss';

const EmptyStaleRepository = ({
  title,
  description,
  icon: Icon = Activity,
  className,
  style,
}: EmptyStaleRepositoryProps) => {
  return (
    <div className={clsx('empty-stale-repository', className)} style={style}>
      <div className='empty-stale-repository__icon' aria-hidden='true'>
        <Icon
          size={20}
          strokeWidth={1.8}
          role='img'
          aria-hidden='true'
          focusable='false'
        />
      </div>

      <div className='empty-stale-repository__content'>
        <h3 className='empty-stale-repository__content--title'>{title}</h3>

        <p className='empty-stale-repository__content--description'>
          {description}
        </p>
      </div>
    </div>
  );
};

export default EmptyStaleRepository;
