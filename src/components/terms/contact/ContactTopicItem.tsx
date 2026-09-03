'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import { ContactTopicItemProps } from '@/types/terms/contact/contact.topic.item';
import '../../../styles/components/terms/contact/ContactTopicItem.scss';

const ContactTopicItem = ({
  title,
  description,
  icon: Icon,
  accentColor,
  index,
  className,
  style,
}: ContactTopicItemProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.35,
        delay: index * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={clsx('contact-topic-item', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <div className='contact-topic-item__icon'>
        <Icon
          size={18}
          strokeWidth={1.8}
          role='img'
          aria-hidden='true'
          focusable='false'
        />
      </div>

      <div className='contact-topic-item__content'>
        <h4 className='contact-topic-item__content--title'>{title}</h4>

        <p className='contact-topic-item__content--description'>
          {description}
        </p>
      </div>
    </motion.article>
  );
};

export default ContactTopicItem;
