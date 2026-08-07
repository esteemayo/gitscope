'use client';

import { motion } from 'framer-motion';

import PrivacySectionHeader from '../PrivacySectionHeader';
import StorageNotice from './StorageNotice';
import BrowserStorageOverview from './BrowserStorageOverview';
import StorageSummary from './StorageSummary';

import { containerVariants } from '@/animations/page';
import { CookieLocalStorageProps } from '@/types/privacy/cookiesLocalStorage/cookies.local.storage.type';

import '../../../styles/components/privacy/cookiesLocalStorage/CookiesLocalStorage.scss';

const CookiesLocalStorage = ({
  badge,
  title,
  subtitle,
  summary,
  items,
  notice,
}: CookieLocalStorageProps) => {
  return (
    <motion.section
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      className='cookies-local-storage'
      aria-labelledby='cookies-local-storage-title'
    >
      <div className='cookies-local-storage__container'>
        <PrivacySectionHeader
          id='cookies-local-storage-title'
          badge={badge}
          title={title}
          subtitle={subtitle}
          variants={containerVariants}
        />

        <div className='cookies-local-storage__body'>
          <StorageSummary {...summary} />

          <BrowserStorageOverview items={items} />
        </div>

        <StorageNotice {...notice} />
      </div>
    </motion.section>
  );
};

export default CookiesLocalStorage;
