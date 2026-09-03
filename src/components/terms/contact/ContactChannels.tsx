'use client';

import ContactChannelItem from './ContactChannelItem';
import { ContactChannelsProps } from '@/types/terms/contact/contact.channels.type';

import '../../../styles/components/terms/contact/ContactChannels.scss';

const ContactChannels = ({ channels }: ContactChannelsProps) => {
  return (
    <section
      className='contact-channels'
      aria-labelledby='contact-channels-title'
    >
      <div className='contact-channels__header'>
        <span className='contact-channels__header--label'>
          Direct communication
        </span>

        <h3
          id='contact-channels-title'
          className='contact-channels__header--title'
        >
          Choose the right contact channel
        </h3>
      </div>

      <div className='contact-channels__grid'>
        {channels.map((channel, index) => (
          <ContactChannelItem key={channel.id} {...channel} index={index} />
        ))}
      </div>
    </section>
  );
};

export default ContactChannels;
