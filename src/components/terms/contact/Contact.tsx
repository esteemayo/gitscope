'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import ContactChannels from './ContactChannels';
import ContactIntro from './ContactIntro';
import TermsSectionHeader from '../TermsSectionHeader';
import ContactTopics from './ContactTopics';
import ResponseExpectations from './ResponseExpectations';

import { containerVariants } from '@/animations/page';
import { ContactProps } from '@/types/terms/contact/contact.type';

import '../../../styles/components/terms/contact/Contact.scss';

const Contact = ({
  badge,
  title,
  description,
  headerIcon,
  intro,
  channels,
  topics,
  expectations,
  accentColor,
  className,
  style,
}: ContactProps) => {
  return (
    <motion.section
      id='contact'
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      className={clsx('contact', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
      aria-labelledby='contact-title'
    >
      <div className='contact__container'>
        <TermsSectionHeader
          id='contact-title'
          badge={badge}
          title={title}
          description={description}
          icon={headerIcon}
          variants={containerVariants}
        />

        <div className='contact__body'>
          <ContactIntro intro={intro} />

          <ContactChannels channels={channels} />

          <ContactTopics topics={topics} />

          <ResponseExpectations expectations={expectations} />
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
