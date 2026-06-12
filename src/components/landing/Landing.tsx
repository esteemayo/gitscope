'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

import Logo from '../ui/Logo';
import RecentUsers from '../ui/RecentUsers';

import SearchHint from '../ui/SearchHint';
import GitHubSearchForm from '../forms/GitHubSearchForm';

import {
  getFromStorage,
  HINT_KEY,
  RECENT_KEY,
  setToStorage,
} from '@/utils/index';

import './Landing.scss';

const placeholders = [
  'Enter GitHub username...',
  'Try "esteemayo"',
  'Try "torvalds"',
  'Try "gaearon"',
];

const containerVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.5,
    },
  },
};

const itemVariants = {
  initial: {
    opacity: 0,
    y: 24,
    filter: 'blur(6px)',
  },
  animate: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const Landing = () => {
  const router = useRouter();

  const recentRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const removeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const [username, setUsername] = useState('');
  const [index, setIndex] = useState(0);
  const [placeholder, setPlaceholder] = useState('');
  const [subIndex, setSubIndex] = useState(0);
  const [activeRecentIndex, setActiveRecentIndex] = useState(-1);
  const [recentUsers, setRecentUsers] = useState<string[]>([]);
  const [removedUser, setRemovedUser] = useState<string | null>(null);

  const [showHint, setShowHint] = useState(() => {
    if (typeof window === 'undefined') {
      return false;
    }

    const seen = getFromStorage(HINT_KEY);
    return !seen;
  });

  const handleClear = () => {
    setUsername('');
    inputRef.current?.focus();
  };

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const value = username.trim();
    if (!value) return;

    const updated = [
      value,
      ...recentUsers.filter((user) => user !== value),
    ].slice(0, 5);

    setToStorage(RECENT_KEY, updated);
    router.push(`/${value}`);
  };

  const handleClearRecent = () => {
    setRecentUsers([]);
    setToStorage(RECENT_KEY, []);
  };

  const handleRemoveUser = (targetUser: string) => {
    const updatedUsers = recentUsers.filter((user) => user !== targetUser);

    setRemovedUser(targetUser);
    setRecentUsers(updatedUsers);

    if (removeTimeoutRef.current) {
      clearTimeout(removeTimeoutRef.current);
    }

    removeTimeoutRef.current = setTimeout(() => {
      setToStorage(RECENT_KEY, updatedUsers);
      setRemovedUser(null);
    }, 4000);
  };

  const handleUndoRemove = () => {
    if (!removedUser) return;

    const updatedUsers = [removedUser, ...recentUsers];

    setRecentUsers(updatedUsers);
    setToStorage(RECENT_KEY, updatedUsers);

    setRemovedUser(null);

    if (removeTimeoutRef.current) {
      clearTimeout(removeTimeoutRef.current);
    }
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown' && recentUsers.length > 0) {
      e.preventDefault();
      setActiveRecentIndex(0);
    }
  };

  const handleRecentKeyDown = (
    e: React.KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    if (!recentUsers.length) return;

    switch (e.key) {
      case 'ArrowRight':
        e.preventDefault();

        const next = index === recentUsers.length - 1 ? 0 : index + 1;
        setActiveRecentIndex(next);
        break;

      case 'ArrowLeft':
        e.preventDefault();

        const prev = index === 0 ? recentUsers.length - 1 : index - 1;
        setActiveRecentIndex(prev);
        break;

      case 'Escape':
        setActiveRecentIndex(-1);
        inputRef.current?.focus();
        break;

      case 'Enter':
        router.push(`/${recentUsers[index]}`);
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    const storedItems = getFromStorage(RECENT_KEY) || [];

    const raf = requestAnimationFrame(() => {
      setRecentUsers(storedItems);
    });

    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    if (subIndex < placeholders[index].length) {
      const timeout = setTimeout(() => {
        setPlaceholder((prev) => prev + placeholders[index][subIndex]);
        setSubIndex(subIndex + 1);
      }, 40);

      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      setPlaceholder('');
      setSubIndex(0);
      setIndex((prev) => (prev + 1) % placeholders.length);
    }, 1500);

    return () => clearTimeout(timeout);
  }, [index, subIndex]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (activeRecentIndex >= 0) {
      recentRefs.current[activeRecentIndex]?.focus();
    }
  }, [activeRecentIndex]);

  useEffect(() => {
    if (showHint) {
      setToStorage(HINT_KEY, 'true');
    }
  }, [showHint]);

  useEffect(() => {
    if (showHint) {
      const timer = setTimeout(() => setShowHint(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [showHint]);

  return (
    <section className='landing'>
      <motion.div
        variants={containerVariants}
        initial='initial'
        animate='animate'
        className='landing__container'
      >
        <div className='landing__content'>
          <motion.div variants={itemVariants} className='landing__wrapper'>
            <Logo />
          </motion.div>

          <motion.p variants={itemVariants} className='landing__badge'>
            GitHub analytics platform
          </motion.p>

          <motion.h1 variants={itemVariants} className='landing__title'>
            Visualize developer insights beyond the code.
          </motion.h1>

          <motion.p variants={itemVariants} className='landing__subtitle'>
            Analyze GitHub profiles, repositories, language usage, and developer
            metrics through a modern analytics dashboard.
          </motion.p>

          <motion.div variants={itemVariants} className='landing__form'>
            <GitHubSearchForm
              ref={inputRef}
              value={username}
              placeholder={placeholder}
              onChange={setUsername}
              onClear={handleClear}
              onSubmit={handleSubmit}
              onKeyDown={handleInputKeyDown}
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <SearchHint isShow={showHint} onClose={() => setShowHint(false)} />
          </motion.div>

          <motion.div variants={itemVariants}>
            <RecentUsers
              ref={recentRefs}
              recentUsers={recentUsers}
              removedUser={removedUser}
              onKeyDown={handleRecentKeyDown}
              onClearAll={handleClearRecent}
              onRemoveUser={handleRemoveUser}
              onUndoRemove={handleUndoRemove}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Landing;
