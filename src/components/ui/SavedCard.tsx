'use client';

import { CSS } from '@dnd-kit/utilities';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useSortable } from '@dnd-kit/sortable';

import DragIcon from '../icons/DragIcon';

import { removeUser, togglePin } from '@/lib/storage';
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

const SavedCard = ({ name, avatar, username, pinned }: SavedCardProps) => {
  const router = useRouter();

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: username });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <motion.article
      ref={setNodeRef}
      style={style}
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
        scale: isDragging ? 1.04 : 1,
        rotate: isDragging ? 1.5 : 0,
      }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.2 }}
      className={
        pinned ? 'saved-card pinned' : isDragging ? 'saved-card dragging' : 'saved-card'
      }
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

        <div className='saved-card__options'>
          <span
            {...attributes}
            {...listeners}
            className='saved-card__options--drag'
            tabIndex={-1}
          >
            <DragIcon />
          </span>

          <button
            type='button'
            onClick={() => togglePin(username)}
            className='saved-card__options--btn'
          >
            {pinned ? '📌' : 'Pin'}
          </button>
        </div>
      </div>
    </motion.article>
  );
};

export default SavedCard;
