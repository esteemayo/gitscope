'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import { BrowserStorageRowProps } from '@/types/privacy/cookiesLocalStorage/browser.storage.row.type';
import '../../../styles/components/privacy/cookiesLocalStorage/BrowserStorageRow.scss';

const BrowserStorageRow = ({
  name,
  storageType,
  purpose,
  persistence,
  icon: Icon,
  accentColor,
  className,
  style,
}: BrowserStorageRowProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={clsx('browser-storage-row', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <div className='browser-storage-row__header'>
        <div className='browser-storage-row__title'>
          <div className='browser-storage-row__title--icon'>
            <Icon size={24} role='img' aria-hidden='true' focusable='false' />
          </div>

          <h4 className='browser-storage-row__title--name'>{name}</h4>
        </div>

        <span
          className='browser-storage-row__badge'
          style={
            {
              '--badge-color': storageType.accentColor,
            } as React.CSSProperties
          }
        >
          {storageType.label}
        </span>
      </div>

      <dl className='browser-storage-row__details'>
        <div className='browser-storage-row__group'>
          <dt className='browser-storage-row__group--label'>Purpose</dt>

          <dd className='browser-storage-row__group--value'>{purpose}</dd>
        </div>

        <div className='browser-storage-row__group'>
          <dt className='browser-storage-row__group--label'>Retention</dt>

          <dd className='browser-storage-row__group--value'>{persistence}</dd>
        </div>
      </dl>
    </motion.article>
  );
};

export default BrowserStorageRow;
