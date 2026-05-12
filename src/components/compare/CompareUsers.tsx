'use client';

import { useState } from 'react';

import CompareStat from '../ui/CompareStat';
import UserDashboard from '../dashboard/UserDashboard';

import CompareInsight from './CompareInsight';
import CompareForm from '../forms/CompareForm';
import CompareTimeline from './CompareTimeline';

import '../../styles/components/CompareUsers.scss';

const CompareUsers = () => {
  const [firstUser, setFirstUser] = useState('');
  const [run, setRun] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [secondUser, setSecondUser] = useState('');

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    setRun(true);
    setIsLoading(true);

    setTimeout(() => {
      setFirstUser('');
      setSecondUser('');
      setIsLoading(false);
    }, 5000);
  };

  return (
    <div className='compare-users'>
      <div className='compare-users__container'>
        <CompareForm
          firstUser={firstUser}
          secondUser={secondUser}
          isLoading={isLoading}
          onChangeFirst={setFirstUser}
          onChangeSecond={setSecondUser}
          onSubmit={handleSubmit}
        />

        <div className='compare-users__summary'>
          <CompareStat label='Stars' value='120 vs 340' />
          <CompareStat label='Repositories' value='12 vs 28' />
          <CompareStat label='Followers' value='80 vs 210' />
        </div>

        <div className='compare-users__box'>
          <CompareInsight />

          <CompareTimeline />
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
