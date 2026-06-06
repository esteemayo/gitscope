import '../../styles/components/repo/RepoSidebar.scss';

const RepoSidebar = ({ githubUrl }: { githubUrl: string }) => {
  return (
    <aside className='repo-sidebar'>
      <a
        href={githubUrl}
        target='_blank'
        rel='noopener noreferrer'
        className='repo-sidebar__link'
      >
        View on GitHub
      </a>

      <button type='button' className='repo-sidebar__btn'>
        Share
      </button>

      <button type='button' className='repo-sidebar__btn'>
        Copy URL
      </button>
    </aside>
  );
};

export default RepoSidebar;
