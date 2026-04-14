'use client';

import { AnimatePresence, motion } from 'framer-motion';

import RepoCard from './RepoCard';
import { RepoListProps } from '@/types/repo.list.type';

import '../../styles/components/RepoList.scss';

const RepoList = ({ view }: RepoListProps) => {
  return (
    <motion.div layout className='repo-list'>
      <AnimatePresence mode='popLayout'>
        <motion.ul
          layout
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className={`repo-list__container ${view === 'grid' ? 'grid' : 'list'}`}
        >
          {Array.from({ length: 12 }).map((_, index) => (
            <motion.li
              key={index}
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <RepoCard view={view} />
            </motion.li>
          ))}
        </motion.ul>
      </AnimatePresence>
    </motion.div>
  );
};

export default RepoList;
