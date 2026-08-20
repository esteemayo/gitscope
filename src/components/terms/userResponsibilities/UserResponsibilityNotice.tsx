'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import { UserResponsibilityNoticeProps } from '@/types/terms/userResponsibilities/user.responsibility.notice.type';
import '../../../styles/components/terms/userResponsibilities/UserResponsibilityNotice.scss';

const UserResponsibilityNotice = ({
  title,
  description,
  icon: Icon,
  accentColor,
  className,
  style,
}: UserResponsibilityNoticeProps) => {
  return (
    <motion.aside
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={clsx('user-responsibility-notice', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <div className='user-responsibility-notice__icon'>
        <Icon
          size={20}
          strokeWidth={1.8}
          role='img'
          aria-hidden='true'
          focusable='false'
        />
      </div>

      <div className='user-responsibility-notice__content'>
        <h3 className='user-responsibility-notice__content--title'>{title}</h3>

        <p className='user-responsibility-notice__content--description'>
          {description}
        </p>
      </div>
    </motion.aside>
  );
};

export default UserResponsibilityNotice;
