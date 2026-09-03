'use client';

import { motion } from 'framer-motion';
import '../../../styles/components/terms/contact/ContactIntro.scss';

const ContactIntro = ({ intro }: { intro: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className='contact-intro'
    >
      <span className='contact-intro__label'>We&rsquo;re here to help</span>

      <p className='contact-intro__paragraph'>{intro}</p>
    </motion.div>
  );
};

export default ContactIntro;
