'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { UndoToastProps } from '@/types/undo.toast.type';

import '../../styles/components/UndoToast.scss';

const UndoToast = ({ removedUser, onUndo }: UndoToastProps) => {
  if (!removedUser) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.2 }}
        className='undo-toast'
        role='alert'
        aria-live='polite'
      >
        <span className='undo-toast__msg'>
          Removed {removedUser}
        </span>

        <button
          type='button'
          onClick={onUndo}
          className='undo-toast__btn'
          aria-label='Undo'
        >
          Undo
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

export default UndoToast;
