import RepoOverviewCard from './RepoOverviewCard';
import { RepoOverviewItem } from '@/types/repo';

import '../../styles/components/repo/RepoOverview.scss';

interface RepoOverviewProps {
  items: RepoOverviewItem[];
}

const RepoOverview = ({ items }: RepoOverviewProps) => {
  return (
    <section className='repo-overview'>
      {items.map((item) => (
        <RepoOverviewCard key={item.id} {...item} />
      ))}
    </section>
  );
};

export default RepoOverview;
