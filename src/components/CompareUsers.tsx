'use client';

import { useState } from 'react';
import UserDashboard from './dashboard/UserDashboard';

import '../styles/components/CompareUsers.scss';

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
          <div className='compare-users__box'>
            <strong className='compare-users__box--label'>Stars:</strong>
            <span className='compare-users__box--count'>120 vs 340</span>
          </div>

          <div className='compare-users__box'>
            <strong className='compare-users__box--label'>Repositories:</strong>
            <span className='compare-users__box--count'>12 vs 28</span>
          </div>

          <div className='compare-users__box'>
            <strong className='compare-users__box--label'>Stars:</strong>
            <span className='compare-users__box--count'>80 vs 210</span>
          </div>
        </div>

        {run && (
          <div className='compare-users__grid'>
            <UserDashboard />
            <UserDashboard />
          </div>
        )}
      </div>
    </div>
  );
};

export default CompareUsers;
