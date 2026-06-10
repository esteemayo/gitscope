'use client';

import { Copy, ExternalLink, Share2 } from 'lucide-react';
import '../../styles/components/repo/RepoActions.scss';

const RepoActions = ({ githubUrl }: { githubUrl: string }) => {
  return (
    <div className='repo-actions'>
      <h3 className='repo-actions__title'>Quick actions</h3>

      <a
        href={githubUrl}
        target='_blank'
        rel='noopener noreferrer'
        className='repo-actions__link'
      >
        <ExternalLink size={16} />
        <span>View on GitHub</span>
      </a>

      <button type='button' className='repo-actions__btn'>
        <Share2 size={16} />
        <span>Share Repository</span>
      </button>

      <button type='button' className='repo-actions__btn'>
        <Copy size={16} />
        <span>Copy URL</span>
      </button>
    </div>
  );
};

export default RepoActions;
