'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import { containerVariants } from '@/animations/page';
import { RightsNoticeProps } from '@/types/privacy/yourRights/rights.notice.type';

import '../../../styles/components/privacy/yourRights/RightsNotice.scss';

const RightsNotice = ({
  badge,
  title,
  description,
  icon: Icon,
  accentColor,
  className,
  style,
}: RightsNoticeProps) => {
  return (
    <motion.aside
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      className={clsx('rights-notice', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <div className='rights-notice__icon'>
        <Icon size={28} role='img' aria-hidden='true' focusable='false' />
      </div>

      <div className='rights-notice__content'>
        <span className='rights-notice__content--badge'>{badge}</span>

        <h3 className='rights-notice__content--title'>{title}</h3>

        <p className='rights-notice__content--description'>{description}</p>
      </div>
    </motion.aside>
  );
};

export default RightsNotice;
