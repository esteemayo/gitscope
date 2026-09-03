'use client';

import ContactTopicItem from './ContactTopicItem';
import { ContactTopicsProps } from '@/types/terms/contact/contact.topics.type';

import '../../../styles/components/terms/contact/ContactTopics.scss';

const ContactTopics = ({ topics }: ContactTopicsProps) => {
  return (
    <section className='contact-topics' aria-labelledby='contact-topics-title'>
      <header className='contact-topics__header'>
        <span className='contact-topics__header--label'>Before you write</span>

        <h3 id='contact-topics-title' className='contact-topics__header--title'>
          What do you need help with?
        </h3>

        <p className='contact-topics__header--paragraph'>
          Select the context that best describes your enquiry so your request
          reaches the appropriate area of GitScope.
        </p>
      </header>

      <div className='contact-topics__list'>
        {topics.map((topic, index) => (
          <ContactTopicItem key={topic.id} {...topic} index={index} />
        ))}
      </div>
    </section>
  );
};

export default ContactTopics;
