import EmptyState from '../ui/EmptyState';
import RepoOverviewCard from './RepoOverviewCard';

import { RepoOverviewItem } from '@/types/repo';
import '../../styles/components/repo/RepoOverview.scss';

interface RepoOverviewProps {
  items: RepoOverviewItem[];
}

const RepoOverview = ({ items }: RepoOverviewProps) => {
  if (!items.length) {
    return (
      <EmptyState
        title='Repository Data Unavailable'
        description='Key repository statistics and metadata could not be loaded at the moment.'
      />
    );
  }

  return (
    <section className='repo-overview'>
      {items.map((item) => (
        <RepoOverviewCard key={item.id} {...item} />
      ))}
    </section>
  );
};

export default RepoOverview;
