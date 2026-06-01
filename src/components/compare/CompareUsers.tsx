'use client';

import { useEffect, useState } from 'react';

import Loader from '../ui/Loader';

import CompareOverview from './CompareOverview';
import CompareHero from './CompareHero';
import CompareTimeline from './CompareTimeline';
import CompareInsight from './CompareInsight';
import CompareProfiles from './CompareProfiles';

import '../../styles/components/CompareUsers.scss';

const loadingStates = [
  'Fetching GitHub profiles...',
  'Analyzing repositories...',
  'Comparing contribution patterns...',
  'Generating insights...',
];

const CompareUsers = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [firstUser, setFirstUser] = useState('');
  const [secondUser, setSecondUser] = useState('');

  const [showLoader, setShowLoader] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

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
          <CompareHero
            userA={firstUser}
            userB={secondUser}
            isLoading={isLoading}
            onChangeUserA={setFirstUser}
            onChangeUserB={setSecondUser}
            onSubmit={handleSubmit}
          />

          <CompareOverview />
          <CompareInsight />
          <CompareTimeline />
          <CompareProfiles />
        </div>
      </div>
    </>
  );
};

export default CompareUsers;
