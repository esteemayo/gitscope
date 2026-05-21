'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { removeUser } from '@/lib/storage';
import { SavedCardProps } from '@/types/saved.card.type';

import '../../styles/components/SavedCard.scss';

const variants = {
  initial: {
    opacity: 0,
    x: -100,
    y: 20,
  },
  animate: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.25,
    },
  },
};

const SavedCard = ({ name, avatar, username }: SavedCardProps) => {
  const router = useRouter();

  return (
    <motion.article
      variants={variants}
      initial='initial'
      animate='animate'
      exit='initial'
      className='saved-card'
    >
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

        <div className='saved-card__pin'>
          <button
            type='button'
            className='saved-card__pin--btn'
          >
            📌
          </button>
        </div>
      </div>
    </motion.article>
  );
};

export default SavedCard;
