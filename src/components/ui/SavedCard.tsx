'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import '../../styles/components/SavedCard.scss';

const SavedCard = () => {
  const router = useRouter();

  return (
    <article className='saved-card'>
      <div className='saved-card__container'>
        <div className='saved-card__box'>
          <Image
            src='/avatar-2.jpg'
            width={72}
            height={72}
            alt='avatar'
            className='saved-card__box--avatar'
          />
        </div>

        <div className='saved-card__wrapper'>
          <h3 className='saved-card__wrapper--name'>Emmanuel Adebayo</h3>
          <p className='saved-card__wrapper--username'>@esteemayo</p>
        </div>

        <div className='saved-card__actions'>
          <button
            type='button'
            onClick={() => router.push(`/esteemayo`)}
            className='saved-card__actions--view'
          >
            View
          </button>

          <button
            type='button'
            className='saved-card__actions--remove'
          >
            Remove
          </button>
        </div>
      </div>
    </article>
  );
};

export default SavedCard;
