'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import BrowserStorageRow from './BrowserStorageRow';
import { BrowserStorageOverviewProps } from '@/types/privacy/cookiesLocalStorage/browser.storage.overview.type';

import '../../../styles/components/privacy/cookiesLocalStorage/BrowserStorageOverview.scss';

const BrowserStorageOverview = ({
  badge,
  title,
  description,
  items,
  className,
  style,
}: BrowserStorageOverviewProps) => {
  return (
    <motion.section
      initial={{ opacity: 0, x: 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className={clsx('browser-storage-overview', className)}
      style={style}
    >
      <header className='browser-storage-overview__header'>
        <span className='browser-storage-overview__header--badge'>{badge}</span>

        <h3 className='browser-storage-overview__header--title'>{title}</h3>

        <p className='browser-storage-overview__header--description'>
          {description}
        </p>
      </header>

      <div className='browser-storage-overview__table'>
        {items.map((item) => (
          <BrowserStorageRow key={item.id} {...item} />
        ))}
      </div>
    </motion.section>
  );
};

export default BrowserStorageOverview;
