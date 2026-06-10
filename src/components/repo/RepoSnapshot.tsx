import millify from 'millify';
import { AlertCircle, Code2, GitFork, Star } from 'lucide-react';

import RepoSnapshotItem from './RepoSnapshotItem';
import { RepoSnapshotProps } from '@/types/repo/repo.snapshot';

import '../../styles/components/repo/RepoSnapshot.scss';

const RepoSnapshot = ({
  stars,
  forks,
  issues,
  language,
}: RepoSnapshotProps) => {
  const items = [
    {
      icon: <Star size={16} />,
      label: 'Stars',
      value: millify(stars),
    },
    {
      icon: <GitFork size={16} />,
      label: 'Forks',
      value: millify(forks),
    },
    {
      icon: <AlertCircle size={16} />,
      label: 'Issues',
      value: millify(issues),
    },
    {
      icon: <Code2 size={16} />,
      label: 'Language',
      value: language ?? 'Unknown',
    },
  ];

  return (
    <section className='repo-snapshot'>
      <header className='repo-snapshot__header'>
        <h3 className='repo-snapshot__header--title'>Repository snapshot</h3>
      </header>

      <div className='repo-snapshot__list' role='list'>
        {items.map((item) => (
          <RepoSnapshotItem key={item.label} {...item} />
        ))}
      </div>
    </section>
  );
};

export default RepoSnapshot;
