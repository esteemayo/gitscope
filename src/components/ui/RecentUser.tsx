'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

import XmarkIcon from '../icons/XmarkIcon';
import { RecentUserProps } from '@/types/recent.user.type';

import '../../styles/components/RecentUser.scss';

const RecentUser = ({ ref, user, onRemove, onKeyDown }: RecentUserProps) => {
  const router = useRouter();

  return (
    <motion.li
      layout
      initial={{ opacity: 0, scale: 0.9, y: 6 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{
        opacity: 0,
        scale: 0.8,
        y: -8,
        transition: {
          duration: 0.18,
        }
      }}
      transition={{
        duration: 0.2,
        ease: [0.22, 1, 0.36, 1] as const,
      }}
      className='recent-user'
    >
      <button
        ref={ref}
        key={user}
        type='button'
        onClick={() => router.push(`/${user}`)}
        onKeyDown={onKeyDown}
        className='recent-user__btn-user'
      >
        {user}
      </button>

      <button
        type='button'
        onClick={() => onRemove(user)}
        className='recent-user__btn-remove'
        aria-label={`Remove ${user}`}
      >
        <XmarkIcon />
      </button>
    </motion.li>
  );
};

export default RecentUser;
