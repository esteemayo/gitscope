import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

import { UserNotFoundProps } from '@/types/ui/user.not.found.type';
import '../../styles/components/ui/UserNotFound.scss';

const UserNotFound = ({ username }: UserNotFoundProps) => {
  return (
    <section
      className='user-not-found'
      role='status'
      aria-labelledby='user-not-found-title'
    >
      <div className='user-not-found__container'>
        <div className='user-not-found__illustration' aria-hidden='true'>
          <svg
            viewBox='0 0 240 190'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <rect
              x='48'
              y='24'
              width='144'
              height='126'
              rx='18'
              className='user-not-found__illustration--card'
            />

            <circle
              cx='120'
              cy='69'
              r='23'
              className='user-not-found__illustration--avatar'
            />

            <path
              d='M82 132C86 108 101 96 120 96C139 96 154 108 158 132'
              className='user-not-found__illustration--person'
              strokeWidth='8'
              strokeLinecap='round'
            />

            <circle
              cx='158'
              cy='113'
              r='29'
              className='user-not-found__illustration--glass'
              strokeWidth='8'
            />

            <path
              d='M179 134L198 153'
              className='user-not-found__illustration--glass'
              strokeWidth='9'
              strokeLinecap='round'
            />

            <path
              d='M30 54L34 64L44 68L34 72L30 82L26 72L16 68L26 64L30 54Z'
              className='user-not-found__illustration--spark'
            />

            <path
              d='M204 36L207 43L214 46L207 49L204 56L201 49L194 46L201 43L204 36Z'
              className='user-not-found__illustration--spark'
            />

            <circle
              cx='45'
              cy='120'
              r='5'
              className='user-not-found__illustration--dot'
            />
            <circle
              cx='205'
              cy='91'
              r='4'
              className='user-not-found__illustration--dot'
            />
          </svg>
        </div>

        <div className='user-not-found__content'>
          <span className='user-not-found__content--eyebrow'>
            User not found
          </span>

          <h2
            className='user-not-found__content--title'
            id='user-not-found-title'
          >
            We couldn&apos;t find that GitHub user
          </h2>

          <p className='user-not-found__content--message'>
            GitHub returned no account matching
          </p>

          <span className='user-not-found__content--username'>@{username}</span>

          <p className='user-not-found__content--hint'>
            Head back to the home page to enter another GitHub username and
            continue exploring.
          </p>

          <Link href='/' className='user-not-found__content--back'>
            <ArrowLeft
              size={16}
              strokeWidth={1.8}
              role='img'
              aria-hidden='true'
              focusable='false'
            />

            <span>Back to home</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UserNotFound;
