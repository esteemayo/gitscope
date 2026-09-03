'use client';

import { motion } from 'framer-motion';
import clsx from 'clsx';
import { ArrowUpRight } from 'lucide-react';

import { ContactChannelItemProps } from '@/types/terms/contact/contact.channel.item.type';
import '../../../styles/components/terms/contact/ContactChannelItem.scss';

const ContactChannelItem = ({
  label,
  value,
  description,
  href,
  icon: Icon,
  accentColor,
  index,
  className,
  style,
}: ContactChannelItemProps) => {
  return (
    <motion.a
      href={href}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.35,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={clsx('contact-channel-item', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <div className='contact-channel-item__top'>
        <div className='contact-channel-item__icon'>
          <Icon
            size={20}
            strokeWidth={1.8}
            role='img'
            aria-hidden='true'
            focusable='false'
          />
        </div>

        <ArrowUpRight
          size={16}
          strokeWidth={1.8}
          role='img'
          aria-hidden='true'
          focusable='false'
        />
      </div>

      <div className='contact-channel-item__content'>
        <span className='contact-channel-item__content--label'>{label}</span>

        <strong className='contact-channel-item__content--value'>
          {value}
        </strong>

        <p className='contact-channel-item__content--description'>
          {description}
        </p>
      </div>
    </motion.a>
  );
};

export default ContactChannelItem;
