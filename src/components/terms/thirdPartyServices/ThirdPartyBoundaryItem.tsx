'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import { ThirdPartyBoundaryItemProps } from '@/types/terms/thirdPartyServices/third.party.boundary.item.type';
import '../../../styles/components/terms/thirdPartyServices/ThirdPartyBoundaryItem.scss';

const ThirdPartyBoundaryItem = ({
  title,
  description,
  icon: Icon,
  accentColor,
  index,
  className,
  style,
}: ThirdPartyBoundaryItemProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, x: index % 2 === 0 ? -10 : 10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.35,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={clsx('third-party-boundary-item', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <div className='third-party-boundary-item__icon'>
        <Icon
          size={18}
          strokeWidth={1.8}
          role='img'
          aria-hidden='true'
          focusable='false'
        />
      </div>

      <div className='third-party-boundary-item__content'>
        <h4 className='third-party-boundary-item__content--title'>{title}</h4>

        <p className='third-party-boundary-item__content--description'>
          {description}
        </p>
      </div>
    </motion.article>
  );
};

export default ThirdPartyBoundaryItem;
