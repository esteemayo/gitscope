'use client';

import { lazy, Suspense, useState } from 'react';
import UserDashboard from './dashboard/UserDashboard';

import '../styles/components/CompareUsers.scss';

const CompareTimeline = lazy(() => import('@/charts/CompareTimeline'));

const CompareUsers = () => {
  const [firstUser, setFirstUser] = useState('');
  const [run, setRun] = useState(false);
  const [secondUser, setSecondUser] = useState('');

  const handleClick = () => {
    setRun(true);

    setFirstUser('');
    setSecondUser('');
  };

  return (
    <div className='compare-users'>
      <div className='compare-users__container'>
        <div className='compare-users__wrapper'>
          <input
            type='text'
            id='first_user'
            name='first_user'
            value={firstUser}
            placeholder='First user'
            onChange={(e) => setFirstUser(e.target.value)}
          />

          <input
            type='text'
            id='second_user'
            name='second_user'
            value={secondUser}
            placeholder='Second user'
            onChange={(e) => setSecondUser(e.target.value)}
          />

          <button type='button' onClick={handleClick}>Compare</button>
        </div>

        <div className='compare-users__summary'>
          <div className='compare-users__card win'>
            <p className='compare-users__card--label'>Stars</p>
            <strong className='compare-users__card--count'>120 vs 340</strong>
          </div>

          <div className='compare-users__card'>
            <p className='compare-users__card--label'>Repositories</p>
            <strong className='compare-users__card--count'>12 vs 28</strong>
          </div>

          <div className='compare-users__card'>
            <p className='compare-users__card--label'>Followers</p>
            <strong className='compare-users__card--count'>80 vs 210</strong>
          </div>
        </div>

        <div className='compare-users__box'>
          <section className='compare-users__insights'>
            <p className='compare-users__insights--text'>
              User A leads by {' '}
              <strong>getPercentDiff(stats1.stars, stats2.stars)</strong> stars
            </p>

            <p className='compare-users__insights--text'>
              Consistency {' '}
              <strong>consistencyA% vs consistencyB%</strong>
            </p>

            <p className='compare-users__insights--text'>
              Peak Activity {' '}
              <strong>mostA?.date</strong> vs <strong>mostB?.date</strong>
            </p>
          </section>

          <section className='compare-users__timeline'>
            <h3 className='compare-users__timeline--heading'>
              Activity over time
            </h3>

            <p className='compare-users__timeline--desc'>
              Repository updates across months
            </p>

            <Suspense fallback='loading...'>
              <CompareTimeline />
            </Suspense>
          </section>
        </div>

        {run && (
          <section className='compare-users__grid'>
            <UserDashboard />
            <UserDashboard />
          </section>
        )}
      </div>
    </div>
  );
};

export default CompareUsers;
