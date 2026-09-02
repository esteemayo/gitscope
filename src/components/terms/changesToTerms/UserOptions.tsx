'use client';

import UserOption from './UserOption';
import { UserOptionsProps } from '@/types/terms/changesToTerms/user.options.type';

import '../../../styles/components/terms/changesToTerms/UserOptions.scss';

const UserOptions = ({ options }: UserOptionsProps) => {
  return (
    <section className='user-options' aria-labelledby='user-options-title'>
      <header className='user-options__header'>
        <span className='user-options__header--label'>Your choice</span>

        <h3 id='user-options-title' className='user-options__header--title'>
          What happens after an update?
        </h3>
      </header>

      <div className='user-options__grid'>
        {options.map((option, index) => (
          <UserOption key={option.id} {...option} index={index} />
        ))}
      </div>
    </section>
  );
};

export default UserOptions;
