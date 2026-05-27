import RepoList from './RepoList';
import DashboardControls from '../DashboardControls';

import { RepoListsProps } from '@/types/repo.lists.type';
import '../../../styles/components/RepoLists.scss';

const RepoLists = ({ sort, view, repos, onSort, onView }: RepoListsProps) => {
  return (
    <section className='repo-lists'>
      <div className='repo-lists__container'>
        <DashboardControls sort={sort} onSort={onSort} onView={onView} />

        <RepoList view={view} repos={repos} />
      </div>
    </section>
  );
};

export default RepoLists;
