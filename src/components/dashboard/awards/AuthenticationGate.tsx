'use client';

import { ArrowRight, LockKeyhole } from 'lucide-react';

import { AuthenticationGateProps } from '@/types/dashboard/awards/authentication.gate.type';
import '../../../styles/components/dashboard/awards/AuthenticationGate.scss';

const AuthenticationGate = ({ onSignIn }: AuthenticationGateProps) => {
  return (
    <div className='authentication-gate'>
      <div className='authentication-gate__icon'>
        <LockKeyhole
          size={24}
          strokeWidth={1.8}
          role='img'
          aria-hidden='true'
          focusable='false'
        />
      </div>

      <div className='authentication-gate__content'>
        <h3 className='authentication-gate__content--title'>
          Your developer achievements await
        </h3>

        <p className='authentication-gate__content--description'>
          Sign in with GitHub to view your earned awards, track your milestones,
          and see which achievements you&apos;re working towards.
        </p>

        {onSignIn && (
          <button
            type='button'
            onClick={onSignIn}
            className='authentication-gate__btn-signin'
          >
            <span>Sign in with GitHub</span>

            <ArrowRight
              size={16}
              strokeWidth={1.8}
              role='img'
              aria-hidden='true'
              focusable='false'
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default AuthenticationGate;
