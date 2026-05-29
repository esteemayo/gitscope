'use client';

import { useEffect, useState } from 'react';

import CompareStat from '../ui/CompareStat';
import Loader from '../ui/Loader';
import UserDashboard from '../dashboard/UserDashboard';

import CompareForm from '../forms/CompareForm';
import CompareInsight from './CompareInsight';
import CompareTimeline from './CompareTimeline';

import '../../styles/components/CompareUsers.scss';

const loadingStates = [
  'Fetching GitHub profiles...',
  'Analyzing repositories...',
  'Comparing contribution patterns...',
  'Generating insights...',
];

const CompareUsers = () => {
  const [run, setRun] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [firstUser, setFirstUser] = useState('');
  const [secondUser, setSecondUser] = useState('');

  const [showLoader, setShowLoader] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    setRun(true);
    setIsLoading(true);

    setTimeout(() => {
      setFirstUser('');
      setSecondUser('');

      setMessageIndex(0);
      setIsLoading(false);
    }, 5000);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isLoading) {
      timer = setTimeout(() => {
        setShowLoader(true);
      }, 250);
    } else {
      timer = setTimeout(() => {
        setShowLoader(false);
      }, 0);
    }

    return () => clearTimeout(timer);
  }, [isLoading]);

  useEffect(() => {
    if (!showLoader) return;

    const interval = setInterval(() => {
      setMessageIndex((prev) => {
        return (prev + 1) % loadingStates.length;
      });
    }, 1800);

    return () => clearInterval(interval);
  }, [showLoader]);

  return (
    <>
      <Loader
        isVisible={showLoader}
        text={loadingStates[messageIndex]}
        variant='fullscreen'
      />

      <div className='compare-users'>
        <div className='compare-users__container'>
          <header className='compare-users__intro'>
            <h2 className='compare-users__intro--title'>
              Compare GitHub Profiles
            </h2>

            <p className='compare-users__intro--description'>
              Analyze repositories, stars and activity between two users
            </p>
          </header>

          <CompareForm
            firstUser={firstUser}
            secondUser={secondUser}
            isLoading={isLoading}
            onChangeFirst={setFirstUser}
            onChangeSecond={setSecondUser}
            onSubmit={handleSubmit}
          />

          <div className='compare-users__summary'>
            <CompareStat label='Stars' valueA={120} valueB={80} />
            <CompareStat label='Repositories' valueA={50} valueB={70} />
            <CompareStat label='Forks' valueA={30} valueB={20} />
            <CompareStat label='Followers' valueA={80} valueB={210} />
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
    </>
  );
};

export default CompareUsers;
