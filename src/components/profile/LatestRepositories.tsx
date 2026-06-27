'use client';

import { motion } from 'framer-motion';
import { ArrowDownIcon, ArrowUpIcon } from 'lucide-react';

import EmptyState from '../ui/EmptyState';

import ProfileHeading from './ProfileHeading';
import RepositoryCard from './RepositoryCard';

import { usePaginationSlice } from '@/hooks/usePaginationSlice';
import { LatestRepositoriesProps } from '@/types/profile/latest.prepositories.type';

import '../../styles/components/profile/LatestRepositories.scss';

const containerVariant = {
  animate: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemsVariant = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

const LatestRepositories = ({ repositories }: LatestRepositoriesProps) => {
  const { canExpand, isExpanded, showLess, showMore, visibleItems } =
    usePaginationSlice(repositories, {
      step: 6,
      initialCount: 6,
    });

  return (
    <section
      className='latest-repositories'
      aria-labelledby='latest-repos-title'
    >
      <div className='latest-repositories__container'>
        <ProfileHeading
          id='latest-repos-title'
          title='Latest repositories'
          description='Recently updated projects'
        />

        {(repositories ?? []).length === 0 ? (
          <EmptyState
            title='No repositories found.'
            description="You've not created any repository."
          />
        ) : (
          <motion.ul
            layout
            variants={containerVariant}
            initial='initial'
            animate='animate'
            className='latest-repositories__grid'
          >
            {visibleItems.map((repository) => (
              <motion.li
                key={repository.id}
                layout
                variants={itemsVariant}
                transition={{ duration: 0.35 }}
                className='latest-repositories__grid--item'
              >
                <RepositoryCard repository={repository} />
              </motion.li>
            ))}
          </motion.ul>
        )}

        {canExpand && (
          <div className='latest-repositories__action'>
            {!isExpanded ? (
              <button
                type='button'
                onClick={showMore}
                className='latest-repositories__action--btn'
                aria-expanded={isExpanded}
              >
                <span>Show more</span>

                <ArrowDownIcon size={16} />
              </button>
            ) : (
              <button
                type='button'
                onClick={showLess}
                className='latest-repositories__action--btn'
                aria-expanded={isExpanded}
              >
                <span>Show less</span>

                <ArrowUpIcon size={16} />
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default LatestRepositories;
