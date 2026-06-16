import RepoSidebarSkeleton from './RepoSidebarSkeleton';
import CommitsSkeleton from './CommitsSkeleton';
import ContributorsSkeleton from './ContributorsSkeleton';
import RepoHeroSkeleton from './RepoHeroSkeleton';
import RepoOverviewSkeleton from './RepoOverviewSkeleton';
import TimelineSkeleton from './TimelineSkeleton';
import LanguageChartSkeleton from './LanguageChartSkeleton';
import RepoHealthSkeleton from './RepoHealthSkeleton';

import '../../styles/components/skeletons/RepoDetailsSkeleton.scss';

const RepoDetailsSkeleton = () => {
  return (
    <section className='repo-details-skeleton'>
      <div className='repo-details-skeleton__container'>
        <div className='repo-details-skeleton__wrapper'>
          <main className='repo-details-skeleton__content'>
            <RepoHeroSkeleton />

            <RepoOverviewSkeleton />

            <RepoHealthSkeleton />

            <TimelineSkeleton />

            <LanguageChartSkeleton />

            <ContributorsSkeleton />

            <CommitsSkeleton />
          </main>

          <RepoSidebarSkeleton />
        </div>
      </div>
    </section>
  );
};

export default RepoDetailsSkeleton;
