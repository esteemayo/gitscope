import { Commit } from '@/types/repo/index';
import '../../styles/components/repo/Commits.scss';

const Commits = ({ commits }: { commits: Commit[] }) => {
  return (
    <div className='commits'>
      <div className='commits__list'>
        {commits.map((commit) => {
          const { sha, date, author, message } = commit;

          return (
            <article key={sha} className='commits__item'>
              <div className='commits__hash'>{sha.slice(0, 7)}</div>

              <div className='commits__content'>
                <h3 className='commits__content--message'>{message}</h3>

                <span className='commits__content--author'>{author}</span>
              </div>

              <time dateTime={date} className='commits__date'>
                {date}
              </time>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Commits;
