'use client';

import { AnimatePresence, motion } from 'framer-motion';

import UndoToast from './UndoToast';
import RecentUser from './RecentUser';

import { RecentUsersProps } from '@/types/recent.users.type';
import '../../styles/components/RecentUsers.scss';

const RecentUsers = ({
  ref,
  recentUsers,
  removedUser,
  onKeyDown,
  onClearAll,
  onRemoveUser,
  onUndoRemove,
}: RecentUsersProps) => {
  if (!recentUsers.length && !removedUser) return null;

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
        <AnimatePresence mode='popLayout'>
          {recentUsers.map((user, index) => (
            <RecentUser
              key={user}
              ref={(el) => { ref.current[index] = el }}
              user={user}
              onRemove={onRemoveUser}
              onKeyDown={(e) => onKeyDown(e, index)}
            />
          ))}
        </AnimatePresence>
      </ul>

      <UndoToast
        removedUser={removedUser}
        onUndo={onUndoRemove}
      />
    </motion.div>
  );
};

export default RecentUsers;
