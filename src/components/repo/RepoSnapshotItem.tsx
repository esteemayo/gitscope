import { RepoSnapshotItemProps } from '@/types/repo/repo.snapshot.item.type';
import '../../styles/components/repo/RepoSnapshotItem.scss';

const RepoSnapshotItem = ({ icon, label, value }: RepoSnapshotItemProps) => {
  return (
    <article className='repo-snapshot-item'>
      <div className='repo-snapshot-item__icon'>{icon}</div>

      <div className='repo-snapshot-item__content'>
        <span className='repo-snapshot-item__content--label'>{label}</span>

        <strong className='repo-snapshot-item__content--value'>{value}</strong>
      </div>
    </article>
  );
};

export default RepoSnapshotItem;
