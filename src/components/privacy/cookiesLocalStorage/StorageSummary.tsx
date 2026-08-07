'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import StorageTechnologyCard from './StorageTechnologyCard';
import { StorageSummaryProps } from '@/types/privacy/cookiesLocalStorage/storage.summary';

import '../../../styles/components/privacy/cookiesLocalStorage/StorageSummary.scss';

const StorageSummary = ({
  badge,
  title,
  description,
  technologies,
  commitmentsTitle,
  commitments,
  className,
  style,
}: StorageSummaryProps) => {
  return (
    <motion.aside
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className={clsx('storage-summary', className)}
      style={style}
    >
      <header className='storage-summary__header'>
        <span className='storage-summary__header--badge'>{badge}</span>

        <h3 className='storage-summary__header--title'>{title}</h3>

        <p className='storage-summary__header--description'>{description}</p>
      </header>

      <ul className='storage-summary__technologies'>
        {technologies.map((technology) => (
          <li key={technology.id}>
            <StorageTechnologyCard {...technology} />
          </li>
        ))}
      </ul>

      <footer className='storage-summary__commitments'>
        <h4 className='storage-summary__commitments--title'>
          {commitmentsTitle}
        </h4>

        <ul className='storage-summary__item'>
          {commitments.map((item) => {
            const { id, title, icon: Icon, accentColor } = item;

            return (
              <li
                key={id}
                className='storage-summary__item'
                style={
                  {
                    '--accent-color': accentColor,
                  } as React.CSSProperties
                }
              >
                <Icon
                  size={18}
                  className='storage-summary__item--icon'
                  role='img'
                  aria-hidden='true'
                  focusable='false'
                />

                <span className='storage-summary__item--title'>{title}</span>
              </li>
            );
          })}
        </ul>
      </footer>
    </motion.aside>
  );
};

export default StorageSummary;
