'use client';

import { AnimatePresence, motion } from 'framer-motion';

import RepoCard from './RepoCard';
import EmptyState from '../ui/EmptyState';

import { RepoListProps } from '@/types/repo.list.type';
import '../../styles/components/RepoList.scss';

const variants = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
    },
  },
};

const RepoList = ({ view }: RepoListProps) => {
  const repos = true;

  return (
    <motion.div layout className='repo-list'>
      <AnimatePresence mode='popLayout'>
        {!repos ? (
          <EmptyState
            title='No repositories found for this user.'
            subtitle='Try another username or check availability.'
          />
        ) : (
          <motion.ul
            layout
            variants={variants}
            initial='initial'
            animate='animate'
            exit='initial'
            className={`repo-list__container ${view === 'grid' ? 'grid' : 'list'}`}
          >
            {Array.from({ length: 12 }).map((_, index) => (
              <motion.li
                key={index}
                layout
                variants={variants}
                initial='initial'
                animate='animate'
                exit='initial'
              >
                <RepoCard view={view} />
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default RepoList;
