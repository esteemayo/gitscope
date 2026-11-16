import clsx from 'clsx';
import { RepositoryFooterProps } from '@/types/dashboard/repository/repository.footer.type';

import '../../../styles/components/dashboard/repositoryExplorer/RepositoryFooter.scss';

const RepositoryFooter = ({
  repositories,
  className,
  style,
}: RepositoryFooterProps) => {
  return (
    <footer className={clsx('repository-footer', className)} style={style}>
      <span className='repository-footer__text'>
        {repositories.length > 0
          ? 'End of repository preview'
          : 'No results to display'}
      </span>

      <span className='repository-footer__indicator'>Public data</span>
    </footer>
  );
};

export default RepositoryFooter;
