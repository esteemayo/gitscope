'use client';

import { motion } from 'framer-motion';
import '../../styles/components/OfflineBanner.scss';

const variants = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.2,
    },
  },
};

const OfflineBanner = ({ text }: { text?: string }) => {
  return (
    <motion.div
      variants={variants}
      initial='initial'
      animate='animate'
      exit='initial'
      className='offline-banner'
    >
      <div className='offline-banner__container'>
        <span className='offline-banner__container--text'>
          {text ?? 'You are offline. Reconnecting...'}
        </span>
      </div>
    </motion.div>
  );
};

export default OfflineBanner;
