'use client';

import clsx from 'clsx';

import { StorageNoticeProps } from '@/types/privacy/cookiesLocalStorage/storage.notice.type';
import '../../../styles/components/privacy/cookiesLocalStorage/StorageNotice.scss';

const StorageNotice = ({
  badge,
  title,
  description,
  icon: Icon,
  accentColor,
  className,
  style,
}: StorageNoticeProps) => {
  return (
    <div className='storage-notice'>
      <div className='storage-notice__'>StorageNotice</div>
    </div>
  );
};

export default StorageNotice;
