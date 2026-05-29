'use client';

import { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import Spinner from './Spinner';

import { usePreventTab } from '@/hooks/usePreventTab';
import { LoaderProps } from '@/types/loader.type';
import { useScrollLock } from '@/hooks/useScrollLock';

import '../../styles/components/Loader.scss';

const Loader = ({
  isVisible,
  text = 'Loading...',
  variant = 'fullscreen',
}: LoaderProps) => {
  const loaderRef = useRef<HTMLDivElement | null>(null);

  useScrollLock(isVisible && variant === 'fullscreen');
  usePreventTab(isVisible && variant === 'fullscreen');

  useEffect(() => {
    if (isVisible) {
      loaderRef.current?.focus();
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={`loader loader--${variant}`}
        role='alert'
        aria-live='polite'
        aria-busy='true'
      >
        <motion.div
          ref={loaderRef}
          initial={{ scale: 0.96, opacity: 0, y: 8 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.96, opacity: 0, y: 8 }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20,
          }}
          className='loader__content'
          tabIndex={-1}
          role='alertdialog'
          aria-modal='true'
        >
          <Spinner size='lg' />

          <AnimatePresence mode='wait'>
            <motion.p
              key={text}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25 }}
              className='loader__content--text'
            >
              {text}
            </motion.p>
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Loader;
