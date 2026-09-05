'use client';

import { motion } from 'framer-motion';
import { Copyright } from 'lucide-react';

import '../../../styles/components/terms/intellectualProperty/IntellectualPropertyIntro.scss';

const IntellectualPropertyIntro = ({ intro }: { intro: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className='intellectual-property-intro'
    >
      <div className='intellectual-property-intro__mark'>
        <Copyright
          size={16}
          strokeWidth={1.8}
          role='img'
          aria-hidden='true'
          focusable='false'
        />
      </div>

      <div className='intellectual-property-intro__content'>
        <span className='intellectual-property-intro__content--label'>
          Ownership framework
        </span>

        <p className='intellectual-property-intro__content--description'>
          {intro}
        </p>
      </div>
    </motion.div>
  );
};

export default IntellectualPropertyIntro;
