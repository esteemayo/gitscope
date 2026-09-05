'use client';

import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

import '../../../styles/components/terms/userContent/UserContentIntro.scss';

const UserContentIntro = ({ intro }: { intro: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className='user-content-info'
    >
      <div className='user-content-info__icon'>
        <FileText
          size={20}
          strokeWidth={1.8}
          role='img'
          aria-hidden='true'
          focusable='false'
        />
      </div>

      <div className='user-content-info__content'>
        <span className='user-content-info__content--label'>Your content</span>

        <p className='user-content-info__content--description'>{intro}</p>
      </div>
    </motion.div>
  );
};

export default UserContentIntro;
