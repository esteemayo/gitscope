import GitHubIcon from '../icons/GitHubIcon';
import '../../styles/components/Corner.scss';

const Corner = () => {
  return (
    <div className='corner'>
      <div className='corner__container'>
        <a
          href='https://github.com/esteemayo/gitscope'
          className='corner__container--link'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='View source on GitHub'
        >
          <GitHubIcon />
        </a>
      </div>
    </div>
  );
};

export default Corner;
