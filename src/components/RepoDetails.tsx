import Code from './icons/Code';
import Fork from './icons/Fork';
import Star from './icons/Star';
import Alert from './icons/Alert';

import '../styles/components/RepoDetails.scss';

const RepoDetails = () => {
  return (
    <div className='repo-details'>
      <div className='repo-details__container'>
        <header className='repo-details__header'>
          <h1 className='repo-details__heading'>albumz-api</h1>

          <a
            href='#'
            className='repo-details__link'
            target='_blank'
            rel='noopener noreferrer'
          >
            View on GitHub
          </a>
        </header>

        <p className='repo-details__desc'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat alias fugiat consectetur
          cumque voluptate tempore quis. Veniam, unde! Inventore nam harum, aliquam laudantium
          quisquam ex quod itaque assumenda dolor quo! || {'No description provided'}
        </p>

        <section className='repo-details__stats'>
          <div className='repo-details__stats--wrapper'>
            <Star />
            <span>200</span>
          </div>

          <div className='repo-details__stats--wrapper'>
            <Fork />
            <span>43</span>
          </div>

          <div className='repo-details__stats--wrapper'>
            <Code />
            <span>JavaScript</span>
          </div>

          <div className='repo-details__stats--wrapper'>
            <Alert />
            <span>3 Issues</span>
          </div>
        </section>

        <section className='repo-details__meta'>
          <div className='repo-details__box'>
            <strong>Created:</strong>

            <time dateTime={new Date().toISOString()}>
              {new Date().toDateString()}
            </time>
          </div>

          <div className='repo-details__box'>
            <strong>Last updated:</strong>

            <time dateTime={new Date().toISOString()}>
              {new Date().toDateString()}
            </time>
          </div>

          <div className='repo-details__box'>
            <strong>Default branch:</strong>
            <span>main</span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default RepoDetails;
