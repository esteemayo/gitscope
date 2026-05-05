'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

import Input from '../ui/Input';
import Logo from '../ui/Logo';
import Button from '../ui/Button';

import XCircleIcon from '../icons/XCircleIcon';
import { getFromStorage, hintKey, recentKey, setToStorage } from '@/utils/index';

import './Landing.scss';

const placeholders = [
  'Enter GitHub username...',
  'Try "esteemayo"',
  'Try "torvalds"',
  'Try "gaearon"',
];

const Landing = () => {
  const router = useRouter();

  const inputRef = useRef<HTMLInputElement | null>(null);

  const [username, setUsername] = useState('');
  const [index, setIndex] = useState(0);
  const [placeholder, setPlaceholder] = useState('');
  const [subIndex, setSubIndex] = useState(0);
  const [recentUsers, setRecentUsers] = useState<string[]>([]);
  const [showHint, setShowHint] = useState(false);

  const handleClear = () => {
    setUsername('');
    inputRef.current?.focus();
  };

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const value = username.trim();
    if (!value) return;

    const updated = [
      username,
      ...recentUsers.filter((user) => user !== username),
    ].slice(0, 5);

    setToStorage(recentKey, updated);
    router.push(`/${value}`);
  };

  useEffect(() => {
    const storedItems = getFromStorage(recentKey) || [];

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
    const seen = getFromStorage(hintKey);

    if (!seen) {
      const frame = requestAnimationFrame(() => {
        setShowHint(true);
      });

      setToStorage(hintKey, 'true');

      return () => cancelAnimationFrame(frame);
    }
  }, []);

  useEffect(() => {
    if (showHint) {
      const timer = setTimeout(() => setShowHint(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [showHint]);

  return (
    <section className='landing'>
      <div className='landing__container'>
        <div className='landing__content'>
          <div className='landing__wrapper'>
            <Logo />
          </div>

          <p className='landing__badge'>GitHub analytics platform</p>

          <h1 className='landing__title'>
            Visualize developer insights beyond the code.
          </h1>

          <p className='landing__subtitle'>
            Analyze GitHub profiles, repositories, language usage, and developer metrics through a modern analytics dashboard.
          </p>

          <form
            onSubmit={handleSubmit}
            className='landing__form'
            noValidate
          >
            <Input
              ref={inputRef}
              type='text'
              id='username'
              name='username'
              value={username}
              placeholder={placeholder}
              onChange={(e) => setUsername(e.target.value)}
              autoFocus={true}
            />

            {username.length > 0 && (
              <motion.button
                initial={{ y: 8, opacity: 0 }}
                animate={{ y: -8, opacity: 1 }}
                exit={{ y: 8, opacity: 0 }}
                transition={{ duration: 0.2 }}
                type='button'
                onClick={handleClear}
                className='landing__form--icon'
              >
                <XCircleIcon />
              </motion.button>
            )}

            <Button type='submit'>Analyze profile</Button>
          </form>

          {showHint && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className='landing__hint'
            >
              <p className='landing__hint--text'>
                Search any GitHub username to explore insights
              </p>

              <button
                type='button'
                onClick={() => setShowHint(false)}
                className='landing__hint--btn'
              >
                Got it
              </button>
            </motion.div>
          )}

          {recentUsers.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className='landing__recent'
            >
              <span className='landing__recent--label'>Recent:</span>

              {recentUsers.map((user) => (
                <button
                  key={user}
                  type='button'
                  onClick={() => router.push(`/${user}`)}
                  className='landing__recent--btn'
                >
                  {user}
                </button>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Landing;
