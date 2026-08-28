'use client';

import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

import '../../../styles/components/terms/privacyData/PrivacyStatement.scss';

const PrivacyStatement = ({ intro }: { intro: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className='privacy-statement'
    >
      <div className='privacy-statement__visual'>
        <div className='privacy-statement__pulse'>
          <ShieldCheck
            size={22}
            strokeWidth={1.8}
            role='img'
            aria-hidden='true'
            focusable='false'
          />
        </div>
      </div>

      <div className='privacy-statement__content'>
        <span className='privacy-statement__content--label'>
          Privacy by design
        </span>

        <p className='privacy-statement__content--description'>{intro}</p>
      </div>
    </motion.div>
  );
};

export default PrivacyStatement;
