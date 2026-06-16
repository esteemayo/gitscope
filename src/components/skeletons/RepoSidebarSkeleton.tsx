import RepoActionsSkeleton from './RepoActionsSkeleton';
import RepoFactsSkeleton from './RepoFactsSkeleton';
import RepoSnapshotSkeleton from './RepoSnapshotSkeleton';
import RepoStatusSkeleton from './RepoStatusSkeleton';

import '../../styles/components/skeletons/RepoSidebarSkeleton.scss';

const RepoSidebarSkeleton = () => {
  return (
    <aside className='repo-sidebar-skeleton'>
      <RepoSnapshotSkeleton />

      <RepoFactsSkeleton />

      <RepoStatusSkeleton />

      <RepoActionsSkeleton />
    </aside>
  );
};

export default RepoSidebarSkeleton;
