import '../../styles/components/RepoList.scss';
import RepoCard from './RepoCard';

const RepoList = () => {
  return (
    <div className='repo-list'>
      <ul className='repo-list__grid'>
        {Array.from({ length: 9 }).map((_, index) => (
          <li key={index}>
            <RepoCard />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RepoList;
