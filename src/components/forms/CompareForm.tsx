import Spinner from '../ui/Spinner';
import SwapIcon from '../icons/SwapIcon';

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
      <div className='compare-form__field'>
        <CompareUserInput
          name='User A'
          label='User A'
          value={userA}
          placeholder='e.g. torvalds'
          profile={{
            name: 'Emmanuel Adebayo',
            login: 'esteemayo',
            avatar_url: '/avatar-2.jpg',
            location: 'Nigeria',
            company: 'SwiftPay Nigeria',
            html_url: 'https://github.com/esteemayo',
          }}
          onClear={() => onChangeUserA('')}
          onChange={onChangeUserA}
        />

        <button
          type='button'
          onClick={onSwap}
          className='compare-form__field--swap'
          aria-label='Swap users'
        >
          <SwapIcon />
        </button>

        <CompareUserInput
          name='User B'
          label='User B'
          value={userB}
          placeholder='e.g. gaearon'
          profile={{
            name: 'Brittany Chiang',
            login: 'brittany',
            location: 'United States of America',
            company: 'Apple',
            html_url: 'https://github.com/brittany',
          }}
          onClear={() => onChangeUserB('')}
          onChange={onChangeUserB}
        />
      </div>

      <PopularComparisons onSelect={onPreset} />

      <div className='compare-form__actions'>
        <button
          type='button'
          onClick={onReset}
          className='compare-form__actions--reset'
        >
          Reset
        </button>

        <button
          type='submit'
          disabled={isLoading}
          aria-disabled={isLoading}
          className='compare-form__actions--submit'
        >
          {isLoading ? (
            <>
              <Spinner />
              Comparing profiles...
            </>
          ) : (
            'Compare developers'
          )}
        </button>
      </div>
    </form>
  );
};

export default CompareForm;
