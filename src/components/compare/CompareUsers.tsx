'use client';

import { useEffect, useState } from 'react';

import Loader from '../ui/Loader';

import CompareOverview from './CompareOverview';
import CompareHero from './CompareHero';
import CompareTimeline from './CompareTimeline';
import CompareInsight from './CompareInsight';
import ComparisonPreview from './ComparisonPreview';
import CompareProfiles from './CompareProfiles';

import { GitHubUserPreview } from '@/types/compare';
import { REPOS, REPOS2 } from '@/data';
import { userProfileA, userProfileB } from '@/data/users';

import '../../styles/components/CompareUsers.scss';

const loadingStates = [
  'Fetching GitHub profiles...',
  'Analyzing repositories...',
  'Comparing contribution patterns...',
  'Generating insights...',
];

const CompareUsers = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [userA, setUserA] = useState('');
  const [userB, setUserB] = useState('');

  const [profileA, setProfileA] = useState<GitHubUserPreview>(userProfileA);
  const [profileB, setProfileB] = useState<GitHubUserPreview>(userProfileB);

  const [showLoader, setShowLoader] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);

  const handleSwapUsers = () => {
    setUserA((prevA) => {
      setUserB(prevA);
      return userB;
    });
  };

  const handlePreset = (userAValue: string, userBValue: string) => {
    setUserA(userAValue);
    setUserB(userBValue);
  };

  const handleReset = () => {
    setUserA('');
    setUserB('');
  };

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);

    setTimeout(() => {
      setUserA('');
      setUserB('');

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
            userA={userA}
            userB={userB}
            isLoading={isLoading}
            onChangeUserA={setUserA}
            onChangeUserB={setUserB}
            onSwap={handleSwapUsers}
            onReset={handleReset}
            onPreset={handlePreset}
            onSubmit={handleSubmit}
          />

          <ComparisonPreview userA={profileA} userB={profileB} />

          <CompareOverview />
          <CompareInsight />

          <CompareTimeline
            totalUpdatesA={200}
            totalUpdatesB={300}
            leaderName={profileA.name!}
            leaderDiff={32}
            peakMonthA='November'
            peakMonthB='February'
          />

          <CompareProfiles
            userA={profileA}
            userB={profileB}
            reposA={REPOS}
            reposB={REPOS2}
          />
        </div>
      </div>
    </>
  );
};

export default CompareUsers;
