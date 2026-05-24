'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { SearchHintProps } from '@/types/search.hint.type';

import '../../styles/components/SearchHint.scss';

const SearchHint = ({ isShow, onClose }: SearchHintProps) => {
  if (!isShow) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 8 }}
        transition={{
          duration: 0.3,
          ease: [0.22, 1, 0.36, 1] as const,
        }}
        className='search-hint'
      >
        <p className='search-hint__text'>
          Search any GitHub username to explore insights
        </p>

        <button
          type='button'
          onClick={onClose}
          className='search-hint__btn'
        >
          Got it
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

export default SearchHint;
