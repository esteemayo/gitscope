import UserAvatar from '../ui/UserAvatar';
import { Contributor } from '@/types/repo/index';

import '../../styles/components/repo/Contributors.scss';

const Contributors = ({ contributors }: { contributors: Contributor[] }) => {
  return (
    <div className='contributors'>
      {contributors.map((user) => {
        const { id, login, avatarUrl, contributions } = user;

        return (
          <article key={id} className='contributors__card'>
            <UserAvatar
              src='/avatar-2.jpg'
              name={login}
              alt={login}
              size={44}
            />

            <div className='contributors__group'>
              <strong className='contributors__group--username'>{login}</strong>

              <span className='contributors__group--commits'>
                {contributions} commits
              </span>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Contributors;
