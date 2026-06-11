'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import EmptyState from '@/components/ui/EmptyState';
import RepoCard from './RepoCard';
import RepoCardSkeleton from './RepoCardSkeleton';

import { RepoListProps } from '@/types/repo.list.type';
import '../../../styles/components/RepoList.scss';

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

const RepoList = ({ view, repos }: RepoListProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div layout className='repo-list'>
      <AnimatePresence mode='popLayout'>
        {!repos.length ? (
          <EmptyState
            title='No repositories found for this user.'
            description='Try another username or check availability.'
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
            {isLoading
              ? Array.from({ length: 8 }).map((_, index) => (
                  <RepoCardSkeleton key={index} view={view} />
                ))
              : repos?.map((repository) => (
                  <motion.li
                    key={repository.id}
                    layout
                    variants={variants}
                    initial='initial'
                    animate='animate'
                    exit='initial'
                  >
                    <RepoCard view={view} {...repository} />
                  </motion.li>
                ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default RepoList;
