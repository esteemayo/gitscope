import Skeleton from 'react-loading-skeleton';
import '../../styles/components/skeletons/RepoSidebarSkeleton.scss';

const RepoSidebarSkeleton = () => {
  return (
    <aside className='repo-sidebar-skeleton'>
      {[...Array(3)].map((_, index) => (
        <section key={index} className='repo-sidebar-skeleton__section'>
          <Skeleton width='50%' height={20} />

          {[...Array(4)].map((_, row) => (
            <Skeleton key={row} height={16} />
          ))}
        </section>
      ))}
    </aside>
  );
};

export default RepoSidebarSkeleton;
