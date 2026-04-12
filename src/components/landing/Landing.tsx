'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import Input from '../ui/Input';
import Button from '../ui/Button';

import './Landing.scss';

const Landing = () => {
  const router = useRouter();

  const [username, setUsername] = useState('');

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const value = username.trim();
    if (!value) return;

    router.push(`/user?id=${value}`);
  };

  return (
    <section className='landing'>
      <div className='landing__container'>
        <div className='landing__content'>
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
        </div>
      </div>
    </section>
  );
};

export default Landing;
