import { Copy, ExternalLink, Share2 } from 'lucide-react';

import RepositorySnapshot from './RepositorySnapshot';
import { RepoSidebarProps } from '@/types/repo/repo.sidebar.type';

import '../../styles/components/repo/RepoSidebar.scss';

const RepoSidebar = ({
  githubUrl,
  stars,
  forks,
  issues,
  language,
}: RepoSidebarProps) => {
  return (
    <aside className='repo-sidebar'>
      <RepositorySnapshot
        stars={stars}
        forks={forks}
        issues={issues}
        language={language}
      />

      <div className='repo-sidebar__actions'>
        <h4 className='repo-sidebar__actions--title'>Quick actions</h4>

        <a
          href={githubUrl}
          target='_blank'
          rel='noopener noreferrer'
          className='repo-sidebar__actions--link'
        >
          <ExternalLink size={16} />
          <span>View on GitHub</span>
        </a>

        <button type='button' className='repo-sidebar__actions--btn'>
          <Share2 size={16} />
          <span>Share Repository</span>
        </button>

        <button type='button' className='repo-sidebar__actions--btn'>
          <Copy size={16} />
          <span>Copy URL</span>
        </button>
      </div>
    </aside>
  );
};

export default RepoSidebar;
