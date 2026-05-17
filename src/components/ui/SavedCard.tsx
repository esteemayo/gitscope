'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { removeUser } from '@/lib/storage';
import { SavedCardProps } from '@/types/saved.card.type';

import '../../styles/components/SavedCard.scss';

const SavedCard = ({ name, avatar, username }: SavedCardProps) => {
  const router = useRouter();

  return (
    <article className='saved-card'>
      <div className='saved-card__container'>
        <div className='saved-card__box'>
          <Image
            src={avatar}
            width={72}
            height={72}
            alt='avatar'
            className='saved-card__box--avatar'
          />
        </div>

        <div className='saved-card__wrapper'>
          <h3 className='saved-card__wrapper--name'>{name}</h3>
          <p className='saved-card__wrapper--username'>@{username}</p>
        </div>

        <div className='saved-card__actions'>
          <button
            type='button'
            onClick={() => router.push(`/${username}`)}
            className='saved-card__actions--view'
          >
            View
          </button>

          <button
            type='button'
            onClick={() => removeUser(username)}
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
