'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import { UserContentNoticeProps } from '@/types/terms/userContent/user.content.notice.type';
import '../../../styles/components/terms/userContent/UserContentNotice.scss';

const UserContentNotice = ({
  title,
  description,
  icon: Icon,
  accentColor,
  className,
  style,
}: UserContentNoticeProps) => {
  return (
    <motion.aside
      aria-label='User content notice'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={clsx('user-content-notice', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <div className='user-content-notice__icon'>
        <Icon size={20} strokeWidth={1.8} aria-hidden='true' />
      </div>

      <div className='user-content-notice__content'>
        <span className='user-content-notice__content--label'>Important</span>

        <h3 className='user-content-notice__content--title'>{title}</h3>

        <p className='user-content-notice__content--description'>
          {description}
        </p>
      </div>
    </motion.aside>
  );
};

export default UserContentNotice;
