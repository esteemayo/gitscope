import { RepoHealthProps } from '@/types/repo/repo.health.type';
import '../../styles/components/repo/RepoHealth.scss';

const RepoHealth = ({ updatedAt, issues }: RepoHealthProps) => {
  return (
    <section className='repo-health'>
      <ul className='repo-health__list'>
        <li className='repo-health__item'>
          <span className='repo-health__item--label'>Status</span>

          <strong className='repo-health__item--value'>
            <span className='status-dot' />
            Active
          </strong>
        </li>

        <li className='repo-health__item'>
          <span className='repo-health__item--label'>Open issues</span>{' '}
          <strong className='repo-health__item--value'>{issues}</strong>
        </li>

        <li className='repo-health__item'>
          <span className='repo-health__item--label'>Last update</span>{' '}
          <strong className='repo-health__item--value'>
            {new Date(updatedAt).toLocaleDateString()}
          </strong>
        </li>
      </ul>
    </section>
  );
};

export default RepoHealth;
