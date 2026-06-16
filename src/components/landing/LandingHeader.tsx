'use client';

import Logo from '../ui/Logo';
import GithubLoginButton from '../ui/GithubLoginButton';

import '../../styles/components/landing/LandingHeader.scss';

const LandingHeader = () => {
  return (
    <header className='landing-header'>
      <div className='landing-header__container'>
        <div className='landing-header__wrapper'>
          <Logo />
        </div>

        <div className='landing-header__actions'>
          <GithubLoginButton />
        </div>
      </div>
    </header>
  );
};

export default LandingHeader;
