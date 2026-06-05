'use client';

import millify from 'millify';

import RepoMetrics from './RepoMetrics';
import RepoHero from './RepoHero';
import RepoSummary from './RepoSummary';
import RepoHealth from './RepoHealth';
import RepoSidebar from './RepoSidebar';

import CodeIcon from '../icons/CodeIcon';
import ForkIcon from '../icons/ForkIcon';
import StarIcon from '../icons/StarIcon';
import AlertIcon from '../icons/AlertIcon';

import '../../styles/components/RepoDetails.scss';

const RepoDetails = () => {
  return (
    <div className='repo-details'>
      <div className='repo-details__container'>
        <main>
          <RepoHero />
          <RepoMetrics />

          <RepoSummary />
          <RepoHealth />
        </main>

        <RepoSidebar />
      </div>

      {/* <div className='repo-details__container'>
        <header className='repo-details__header'>
          <h1 className='repo-details__heading' title='albumz-api'>
            albumz-api
          </h1>

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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat alias
          fugiat consectetur cumque voluptate tempore quis. Veniam, unde!
          Inventore nam harum, aliquam laudantium quisquam ex quod itaque
          assumenda dolor quo! || {'No description provided'}
        </p>

        <section className='repo-details__stats'>
          <div className='repo-details__stats--wrapper'>
            <StarIcon />
            <span>{millify(2000)}</span>
          </div>

          <div className='repo-details__stats--wrapper'>
            <ForkIcon />
            <span>{millify(4300)}</span>
          </div>

          <div className='repo-details__stats--wrapper'>
            <CodeIcon />
            <span>JavaScript</span>
          </div>

          <div className='repo-details__stats--wrapper'>
            <AlertIcon />
            <span>{millify(3)} Issues</span>
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
      </div> */}
    </div>
  );
};

export default RepoDetails;
