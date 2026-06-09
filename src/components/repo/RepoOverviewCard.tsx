import { RepoOverviewItem } from '@/types/repo';
import '../../styles/components/repo/RepoOverviewCard.scss';

type RepoOverviewCardProps = RepoOverviewItem;

const RepoOverviewCard = ({
  id,
  icon: Icon,
  label,
  value,
}: RepoOverviewCardProps) => {
  return (
    <article key={id} className='repo-overview-card'>
      <div className='repo-overview-card__icon'>
        <Icon size={18} />
      </div>

      <div className='repo-overview-card__content'>
        <span className='repo-overview-card__content--label'>{label}</span>
        <strong className='repo-overview-card__content--value'>{value}</strong>
      </div>
    </article>
  );
};

export default RepoOverviewCard;
