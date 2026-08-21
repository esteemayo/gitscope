'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import { AcceptableUseNoticeProps } from '@/types/terms/acceptableUse/acceptable.use.notice.type';
import '../../../styles/components/terms/acceptableUse/AcceptableUseNotice.scss';

const AcceptableUseNotice = ({
  title,
  description,
  icon: Icon,
  accentColor,
  className,
  style,
}: AcceptableUseNoticeProps) => {
  return (
    <motion.aside
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={clsx('acceptable-use-notice', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <div className='acceptable-use-notice__icon'>
        <Icon
          size={20}
          strokeWidth={1.8}
          role='img'
          aria-hidden='true'
          focusable='false'
        />
      </div>

      <div className='acceptable-use-notice__content'>
        <span className='acceptable-use-notice__content--label'>
          Enforcement
        </span>

        <h3 className='acceptable-use-notice__content--title'>{title}</h3>

        <p className='acceptable-use-notice__content--description'>
          {description}
        </p>
      </div>
    </motion.aside>
  );
};

export default AcceptableUseNotice;
