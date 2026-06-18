'use client';

import { useSession } from 'next-auth/react';

import UserMenu from '../auth/UserMenu';
import Logo from '../ui/Logo';
import GithubLoginButton from '../auth/GithubLoginButton';

import '../../styles/components/landing/LandingHeader.scss';

const LandingHeader = () => {
  const { status } = useSession();

  return (
    <header className='landing-header'>
      <div className='landing-header__container'>
        <div className='landing-header__wrapper'>
          <Logo />
        </div>

        <div className='landing-header__actions'>
          {status === 'authenticated' ? <UserMenu /> : <GithubLoginButton />}
        </div>
      </div>
    </header>
  );
};

export default LandingHeader;
