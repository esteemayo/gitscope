'use client';

import { ArrowLeftRight, ArrowRight, Info } from 'lucide-react';

import Spinner from '../ui/Spinner';

import CompareUserInput from '../compare/CompareUserInput';
import PopularComparisons from '../compare/PopularComparisons';

import { CompareFormProps } from '@/types/compare/compare.form.type';
import '../../styles/components/CompareForm.scss';

const CompareForm = ({
  userA,
  userB,
  isLoading,
  onChangeUserA,
  onChangeUserB,
  onSwap,
  onReset,
  onPreset,
  onSubmit,
}: CompareFormProps) => {
  return (
    <form onSubmit={onSubmit} className='compare-form' noValidate>
      <div className='compare-form__users'>
        <CompareUserInput
          name='User A'
          label='Developer A'
          value={userA}
          placeholder='e.g. torvalds'
          profile={{
            name: 'The Octocat',
            login: 'octocat',
            avatar_url: 'https://github.com/octocat.png',
            location: 'San Francisco',
            company: 'SwiftPay',
            html_url: 'https://github.com/esteemayo',
            followers: 1200,
            following: 180,
            public_repos: 3000,
            created_at: '2011-01-25T18:44:36Z',
          }}
          onClear={() => onChangeUserA('')}
          onChange={onChangeUserA}
        />

        <button
          type='button'
          onClick={onSwap}
          className='compare-form__users--swap'
          aria-label='Swap developers'
          title='Swap developers'
        >
          <ArrowLeftRight
            size={20}
            strokeWidth={1.8}
            role='img'
            aria-hidden='true'
            focusable='false'
          />
        </button>

        <CompareUserInput
          name='User B'
          label='Developer B'
          value={userB}
          placeholder='e.g. gaearon'
          profile={{
            name: 'Brittany Chiang',
            login: 'brittany',
            location: 'United States of America',
            company: 'Apple Inc.',
            html_url: 'https://github.com/brittany',
            followers: 5000,
            following: 400,
            public_repos: 2000,
            created_at: '2010-05-29T15:34:58Z',
          }}
          onClear={() => onChangeUserB('')}
          onChange={onChangeUserB}
        />
      </div>

      <PopularComparisons onSelect={onPreset} />

      <div className='compare-form__footer'>
        <div className='compare-form__footer-guide'>
          <div className='compare-form__footer-guide--icon'>
            <Info
              size={18}
              strokeWidth={1.8}
              role='img'
              aria-hidden='true'
              focusable='false'
            />
          </div>

          <div className='compare-form__footer-guide-content'>
            <span className='compare-form__footer-guide-title'>
              Ready to compare?
            </span>

            <p className='compare-form__footer-guide-description'>
              Enter two GitHub usernames to see how they stack up.
            </p>
          </div>
        </div>

        <div className='compare-form__footer-actions'>
          <button
            type='button'
            onClick={onReset}
            className='compare-form__footer-actions--reset'
          >
            Reset
          </button>

          <button
            type='submit'
            disabled={isLoading}
            aria-disabled={isLoading}
            className='compare-form__footer-actions--submit'
          >
            {isLoading ? (
              <>
                <Spinner />

                <span>Comparing profiles...</span>
              </>
            ) : (
              <>
                <span>Compare developers</span>

                <ArrowRight
                  size={18}
                  strokeWidth={1.8}
                  role='img'
                  aria-hidden='true'
                  focusable='false'
                />
              </>
            )}
          </button>
        </div>
      </div>
    </form>
  );
};

export default CompareForm;
