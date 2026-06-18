import { CheckCircle2, Lock } from 'lucide-react';
import GitHubLogoIcon from '../icons/GitHubLogoIcon';

import '../../styles/components/auth/AuthModal.scss';

const features = [
  'Repository activity trends',
  'Contributor insights',
  'Language breakdown',
  'Compare developer profiles',
];

const AuthModal = () => {
  return (
    <div className='auth-modal'>
      <div className='auth-modal__container'>
        <div className='auth-modal__icon'>
          <Lock size={28} />
        </div>

        <div className='auth-modal__content'>
          <h2 className='auth-modal__content--heading'>
            Unlock Repository Analytics
          </h2>

          <p className='auth-modal__content--description'>
            Sign in with GitHub to view commits, contributors and activity
            trends.
          </p>
        </div>

        <div className='auth-modal__features'>
          {features.map((feature) => (
            <div key={feature} className='auth-modal__features--item'>
              <CheckCircle2 size={18} />

              <span>{feature}</span>
            </div>
          ))}
        </div>

        <div className='auth-modal__footer'>
          <button type='button' className='auth-modal__footer--btn'>
            <GitHubLogoIcon />

            <span>Continue with GitHub</span>
          </button>

          <small className='auth-modal__footer--info'>
            Secure OAuth authentication via GitHub
          </small>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
