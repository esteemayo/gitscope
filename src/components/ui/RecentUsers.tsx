'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

import XmarkIcon from '../icons/XmarkIcon';
import { RecentUsersProps } from '@/types/recent.users.type';

import '../../styles/components/RecentUsers.scss';

const RecentUsers = ({
  ref,
  recentUsers,
  onKeyDown,
  onClearAll,
  onRemoveUser,
}: RecentUsersProps) => {
  const router = useRouter();

  if (!recentUsers.length) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className='recent-users'
    >
      <div className='recent-users__header'>
        <span className='recent-users__header--label'>Recent</span>

        {recentUsers.length >= 2 && (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            type='button'
            onClick={onClearAll}
            className='recent-users__header--clear'
          >
            Clear all
          </motion.button>
        )}
      </div>

      <ul className='recent-users__list'>
        {recentUsers.map((user, index) => (
          <li key={user} className='recent-users__item'>
            <button
              ref={(el) => { ref.current[index] = el }}
              key={user}
              type='button'
              onClick={() => router.push(`/${user}`)}
              onKeyDown={(e) => onKeyDown(e, index)}
              className='recent-users__item--btn-user'
            >
              {user}
            </button>

            <button
              type='button'
              onClick={() => onRemoveUser(user)}
              className='recent-users__item--btn-remove'
              aria-label={`Remove ${user}`}
            >
              <XmarkIcon />
            </button>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default RecentUsers;
