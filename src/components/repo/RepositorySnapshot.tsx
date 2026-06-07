import { AlertCircle, Code2, GitFork, Star } from 'lucide-react';
import { RepositorySnapshotProps } from '@/types/repo/repo.snapshot';

import '../../styles/components/repo/RepositorySnapshot.scss';

const RepositorySnapshot = ({
  stars,
  forks,
  issues,
  language,
}: RepositorySnapshotProps) => {
  const items = [
    {
      icon: <Star size={16} />,
      label: 'Stars',
      value: stars.toLocaleString(),
    },
    {
      icon: <GitFork size={16} />,
      label: 'Forks',
      value: forks.toLocaleString(),
    },
    {
      icon: <AlertCircle size={16} />,
      label: 'Issues',
      value: issues.toLocaleString(),
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
        {items.map((item) => {
          const { icon, label, value } = item;

          return (
            <div key={label} className='repo-snapshot__item'>
              <div className='repo-snapshot__icon'>{icon}</div>

              <div className='repo-snapshot__content'>
                <span className='repo-snapshot__content--label'>{label}</span>

                <strong className='repo-snapshot__content--value'>
                  {value}
                </strong>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default RepositorySnapshot;
