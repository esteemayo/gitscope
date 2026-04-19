'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import Input from '../ui/Input';
import Logo from '../ui/Logo';
import Button from '../ui/Button';

import { getFromStorage, recentKey, setToStorage } from '@/utils/index';
import './Landing.scss';

const Landing = () => {
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [recentUsers, setRecentUsers] = useState([]);

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const value = username.trim();
    if (!value) return;

    const updated = [
      username,
      ...recentUsers.filter((user) => user !== username),
    ].slice(0, 5);

    setToStorage(recentKey, updated);
    router.push(`/user?id=${value}`);
  };

  useEffect(() => {
    const storedItems = getFromStorage(recentKey) || [];

    const raf = requestAnimationFrame(() => {
      setRecentUsers(storedItems);
    });

    return () => cancelAnimationFrame(raf);
  }, []);

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
            tabIndex={0}
            noValidate
          >
            <Input
              type='text'
              id='username'
              name='username'
              value={username}
              placeholder='Enter GitHub username...'
              onChange={(e) => setUsername(e.target.value)}
              autoFocus={true}
            />

            <Button type='submit' tabIndex={-1}>Analyze profile</Button>
          </form>

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
                  onClick={() => router.push(`/user?id=${user}`)}
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
