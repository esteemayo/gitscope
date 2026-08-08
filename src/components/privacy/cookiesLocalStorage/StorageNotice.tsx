'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import { StorageNoticeProps } from '@/types/privacy/cookiesLocalStorage/storage.notice.type';
import '../../../styles/components/privacy/cookiesLocalStorage/StorageNotice.scss';

const StorageNotice = ({
  badge,
  title,
  description,
  icon: Icon,
  accentColor,
  controlOptions,
  className,
  style,
}: StorageNoticeProps) => {
  return (
    <motion.aside
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={clsx('storage-notice', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <header className='storage-notice__header'>
        <span className='storage-notice__badge'>{badge}</span>

        <div className='storage-notice__icon'>
          <Icon size={34} role='img' aria-hidden='true' focusable='false' />
        </div>

        <h3 className='storage-notice__title'>{title}</h3>

        <p className='storage-notice__description'>{description}</p>
      </header>

      <div className='storage-notice__controls'>
        {controlOptions.map((control) => {
          const { id, title, description, icon: Icon, accentColor } = control;

          return (
            <article
              key={id}
              className='storage-notice__control'
              style={
                {
                  '--control-color': accentColor,
                } as React.CSSProperties
              }
            >
              <div className='storage-notice__control--icon'>
                <Icon
                  size={22}
                  role='img'
                  aria-hidden='true'
                  focusable='false'
                />
              </div>

              <div className='storage-notice__control-content'>
                <h4 className='storage-notice__control-content--title'>
                  {title}
                </h4>

                <p className='storage-notice__control-content--description'>
                  {description}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </motion.aside>
  );
};

export default StorageNotice;
