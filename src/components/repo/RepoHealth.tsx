import { RepoHealthProps } from '@/types/repo/repo.health.type';
import '../../styles/components/repo/RepoHealth.scss';

const RepoHealth = ({
  status,
  archived,
  updatedAt,
  issues,
}: RepoHealthProps) => {
  return (
    <section className='repo-health'>
      <ul className='repo-health__list'>
        <li className='repo-health__item'>
          <span className='repo-health__item--label'>Status</span>

          <strong
            className={`repo-health__item--value ${status.toLowerCase()}`}
          >
            {status}
          </strong>
        </li>

        <li className='repo-health__item'>
          <span className='repo-health__item--label'>Archived</span>

          <strong className='repo-health__item--value'>
            {archived ? 'Yes' : 'No'}
          </strong>
        </li>

        <li className='repo-health__item'>
          <span className='repo-health__item--label'>Open issues</span>

          <strong className='repo-health__item--value'>{issues}</strong>
        </li>

        <li className='repo-health__item'>
          <span className='repo-health__item--label'>Last updated</span>

          <strong className='repo-health__item--value'>
            {new Date(updatedAt).toLocaleDateString()}
          </strong>
        </li>
      </ul>
    </section>
  );
};

export default RepoHealth;
