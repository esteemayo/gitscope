'use client';

import { motion } from 'framer-motion';

import RepoActions from './RepoActions';
import RepoFacts from './RepoFacts';
import RepoSnapshot from './RepoSnapshot';
import RepoStatus from './RepoStatus';

import { RepoSidebarProps } from '@/types/repo/repo.sidebar.type';
import '../../styles/components/repo/RepoSidebar.scss';

const RepoSidebar = ({
  githubUrl,
  stars,
  forks,
  issues,
  language,
  branch,
  createdAt,
  updatedAt,
  status,
}: RepoSidebarProps) => {
  return (
    <motion.aside
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.15, duration: 0.3 }}
      className='repo-sidebar'
    >
      <RepoSnapshot
        stars={stars}
        forks={forks}
        issues={issues}
        language={language}
      />

      <RepoFacts branch={branch} createdAt={createdAt} updatedAt={updatedAt} />

      <RepoStatus status={status} lastCommitDate={updatedAt} />

      <RepoActions githubUrl={githubUrl} />
    </motion.aside>
  );
};

export default RepoSidebar;
