import RepoList from './RepoList';
import DashboardControls from './DashboardControls';

import { RepoListsProps } from '@/types/repo.lists.type';
import '../../styles/components/RepoLists.scss';

const RepoLists = ({ sort, view, onSort, onView }: RepoListsProps) => {
  return (
    <section className='repo-lists'>
      <div className='repo-lists__container'>
        <DashboardControls
          sort={sort}
          view={view}
          onSort={onSort}
          onView={onView}
        />

        <RepoList view={view} />
      </div>
    </section>
  );
};

export default RepoLists;
