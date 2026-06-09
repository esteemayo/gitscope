import { Commit } from '@/types/repo';
import '../../styles/components/repo/CommitItem.scss';

type CommitProps = Commit;

const CommitItem = ({ sha, date, author, message }: CommitProps) => {
  return (
    <article className='commit-item'>
      <div className='commit-item__main'>
        <h3 className='commit-item__main--message'>{message}</h3>

        <div className='commit-item__meta'>
          <span className='commit-item__meta--author'>{author}</span>

          <time dateTime={date} className='commit-item__meta--date'>
            {date}
          </time>
        </div>
      </div>

      <code className='commit-item__hash'>{sha.slice(0, 7)}</code>
    </article>
  );
};

export default CommitItem;
