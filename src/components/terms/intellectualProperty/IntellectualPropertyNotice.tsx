'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import { IntellectualPropertyNoticeProps } from '@/types/terms/intellectualProperty/intellectual.property.notice.type';
import '../../../styles/components/terms/intellectualProperty/IntellectualPropertyNotice.scss';

const IntellectualPropertyNotice = ({
  title,
  description,
  icon: Icon,
  accentColor,
  className,
  style,
}: IntellectualPropertyNoticeProps) => {
  return (
    <motion.aside
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={clsx('intellectual-property-notice', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <div className='intellectual-property-notice__icon'>
        <Icon
          size={20}
          strokeWidth={1.8}
          role='img'
          aria-hidden='true'
          focusable='false'
        />
      </div>

      <div className='intellectual-property-notice__content'>
        <span className='intellectual-property-notice__content--label'>
          Rights clarification
        </span>

        <h3 className='intellectual-property-notice__content--title'>
          {title}
        </h3>

        <p className='intellectual-property-notice__content--description'>
          {description}
        </p>
      </div>
    </motion.aside>
  );
};

export default IntellectualPropertyNotice;
