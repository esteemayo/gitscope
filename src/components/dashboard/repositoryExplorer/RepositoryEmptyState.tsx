import clsx from 'clsx';
import { Search } from 'lucide-react';

import { RepositoryEmptyStateProps } from '@/types/dashboard/repository/repository.empty.state.type';
import '../../../styles/components/dashboard/repositoryExplorer/RepositoryEmptyState.scss';

const RepositoryEmptyState = ({
  title,
  description,
  icon: Icon = Search,
  btnLabel,
  onReset,
  className,
  style,
}: RepositoryEmptyStateProps) => {
  return (
    <div className={clsx('repository-empty-state', className)} style={style}>
      <div className='repository-empty-state__icon'>
        <Icon
          size={22}
          strokeWidth={1.8}
          role='img'
          aria-hidden='true'
          focusable='true'
        />
      </div>

      <div className='repository-empty-state__content'>
        <h3 className='repository-empty-state__content--title'>{title}</h3>

        <p className='repository-empty-state__content--description'>
          {description}
        </p>
      </div>

      <button
        type='button'
        onClick={onReset}
        className='repository-empty-state__btn-reset'
      >
        {btnLabel}
      </button>
    </div>
  );
};

export default RepositoryEmptyState;
