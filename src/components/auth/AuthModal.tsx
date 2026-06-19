import { CheckCircle2, Lock } from 'lucide-react';
import { signIn } from 'next-auth/react';
import GitHubLogoIcon from '../icons/GitHubLogoIcon';

import { AuthModalProps } from '@/types/auth/auth.modal.type';
import '../../styles/components/auth/AuthModal.scss';

const AuthModal = ({
  title,
  description,
  features,
  onBack,
}: AuthModalProps) => {
  return (
    <div className='auth-modal'>
      <div className='auth-modal__container'>
        <div className='auth-modal__icon'>
          <Lock size={28} />
        </div>

        <div className='auth-modal__content'>
          <h2 className='auth-modal__content--heading'>{title}</h2>

          <p className='auth-modal__content--description'>{description}</p>
        </div>

        <div className='auth-modal__features'>
          {features?.map((feature) => (
            <div key={feature} className='auth-modal__features--item'>
              <CheckCircle2 size={18} />

              <span>{feature}</span>
            </div>
          ))}
        </div>

        <div className='auth-modal__footer'>
          <div className='auth-modal__actions'>
            <button
              type='button'
              onClick={() =>
                signIn('github', {
                  callbackUrl: window.location.href,
                })
              }
              className='auth-modal__actions--signin'
            >
              <GitHubLogoIcon />

              <span>Continue with GitHub</span>
            </button>

            {onBack && (
              <button
                type='button'
                onClick={onBack}
                className='auth-modal__actions--back'
              >
                Go Back
              </button>
            )}
          </div>

          <small className='auth-modal__footer--info'>
            Secure OAuth authentication via GitHub
          </small>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
