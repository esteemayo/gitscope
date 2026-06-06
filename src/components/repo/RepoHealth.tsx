import { RepoHealthProps } from '@/types/repo/repo.health.type';
import '../../styles/components/repo/RepoHealth.scss';

const RepoHealth = ({ updatedAt, issues }: RepoHealthProps) => {
  return (
    <section className='repo-health'>
      <h2 className='repo-health__heading'>Repository health</h2>

      <ul className='repo-health__list'>
        <li className='repo-health__list--item'>
          <span className='status-dot' />
          Active
        </li>

        <li className='repo-health__list--item'>Open issues: {issues}</li>

        <li className='repo-health__list--item'>
          Last update: {new Date(updatedAt).toLocaleDateString()}
        </li>
      </ul>
    </section>
  );
};

export default RepoHealth;
