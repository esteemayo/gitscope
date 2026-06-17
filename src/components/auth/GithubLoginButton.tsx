'use client';

import GitHubLogoIcon from '../icons/GitHubLogoIcon';
import '../../styles/components/auth/GithubLoginButton.scss';

const GithubLoginButton = () => {
  return (
    <button type='button' className='github-login-button'>
      <GitHubLogoIcon />

      <span>Sign in</span>
    </button>
  );
};

export default GithubLoginButton;
