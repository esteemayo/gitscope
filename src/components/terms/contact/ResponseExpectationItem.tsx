'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import { ResponseExpectationItemProps } from '@/types/terms/contact/response.expectation.item.type';
import '../../../styles/components/terms/contact/ResponseExpectationItem.scss';

const ResponseExpectationItem = ({
  label,
  title,
  description,
  icon: Icon,
  accentColor,
  index,
  className,
  style,
}: ResponseExpectationItemProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.35,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={clsx('response-expectation-item', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <div className='response-expectation-item__top'>
        <span className='response-expectation-item__label'>{label}</span>

        <div className='response-expectation-item__icon'>
          <Icon
            size={18}
            strokeWidth={1.8}
            role='img'
            aria-hidden='true'
            focusable='false'
          />
        </div>
      </div>

      <div className='response-expectation-item__body'>
        <h4 className='response-expectation-item__body--title'>{title}</h4>

        <p className='response-expectation-item__body--description'>
          {description}
        </p>
      </div>
    </motion.article>
  );
};

export default ResponseExpectationItem;
