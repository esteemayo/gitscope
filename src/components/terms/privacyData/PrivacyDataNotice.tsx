'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import { PrivacyDataNoticeProps } from '@/types/terms/privacyData/privacy.data.notice.type';
import '../../../styles/components/terms/privacyData/PrivacyDataNotice.scss';

const PrivacyDataNotice = ({
  title,
  description,
  icon: Icon,
  accentColor,
  className,
  style,
}: PrivacyDataNoticeProps) => {
  return (
    <motion.aside
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={clsx('privacy-data-notice', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
      aria-label='Privacy notice'
    >
      <div className='privacy-data-notice__icon'>
        <Icon
          size={20}
          strokeWidth={1.8}
          role='img'
          aria-hidden='true'
          focusable='false'
        />
      </div>

      <div className='privacy-data-notice__content'>
        <span className='privacy-data-notice__content--label'>
          Policy reference
        </span>

        <h3 className='privacy-data-notice__content--title'>{title}</h3>

        <p className='privacy-data-notice__content--description'>
          {description}
        </p>
      </div>
    </motion.aside>
  );
};

export default PrivacyDataNotice;
