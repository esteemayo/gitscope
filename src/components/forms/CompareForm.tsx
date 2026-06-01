import Spinner from '../ui/Spinner';
import { CompareFormProps } from '@/types/compare.form.type';

import '../../styles/components/CompareForm.scss';

const CompareForm = ({
  userA,
  userB,
  isLoading,
  onChangeUserA,
  onChangeUserB,
  onSubmit,
}: CompareFormProps) => {
  return (
    <form onSubmit={onSubmit} className='compare-form' noValidate>
      <input
        type='text'
        id='first_user'
        name='first_user'
        value={userA}
        placeholder='First user'
        onChange={(e) => onChangeUserA(e.target.value)}
        className='compare-form__input'
      />

      <input
        type='text'
        id='second_user'
        name='second_user'
        value={userB}
        placeholder='Second user'
        onChange={(e) => onChangeUserB(e.target.value)}
        className='compare-form__input'
      />

      <button type='submit' disabled={isLoading} className='compare-form__btn'>
        {isLoading ? <Spinner size='lg' /> : 'Compare'}
      </button>
    </form>
  );
};

export default CompareForm;
