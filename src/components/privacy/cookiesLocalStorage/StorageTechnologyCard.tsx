'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import { StorageTechnologyCardProps } from '@/types/privacy/cookiesLocalStorage/storage.technology.card.type';
import '../../../styles/components/privacy/cookiesLocalStorage/StorageTechnologyCard.scss';

const StorageTechnologyCard = ({
  title,
  description,
  icon: Icon,
  accentColor,
  status,
  className,
  style,
}: StorageTechnologyCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
      className={clsx('storage-technology-card', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <div className='storage-technology-card__icon'>
        <Icon size={22} role='img' aria-hidden='true' focusable='false' />
      </div>

      <div className='storage-technology-card__heading'>
        <h4 className='storage-technology-card__heading--title'>{title}</h4>

        <span
          className='storage-technology-card__heading--status'
          style={
            {
              '--status-color': status.accentColor,
            } as React.CSSProperties
          }
        >
          {status.label}
        </span>
      </div>

      <p className='storage-technology-card__description'>{description}</p>
    </motion.article>
  );
};

export default StorageTechnologyCard;
