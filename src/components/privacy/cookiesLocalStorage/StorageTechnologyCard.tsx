'use client';

import clsx from 'clsx';

import { StorageTechnologyCardProps } from '@/types/privacy/cookiesLocalStorage/storage.technology.card.type';

const StorageTechnologyCard = ({
  title,
  description,
  icon: Icon,
  className,
  style,
}: StorageTechnologyCardProps) => {
  return (
    <article className='storage-technology-card'>
      <div className='storage-technology-card__'>StorageTechnologyCard</div>
    </article>
  );
};

export default StorageTechnologyCard;
