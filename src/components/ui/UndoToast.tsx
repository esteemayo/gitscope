'use client';

import { AnimatePresence, motion } from 'framer-motion';
import '../../styles/components/UndoToast.scss';

const UndoToast = ({ removedUser, onUndo }) => {
  return (
    <AnimatePresence>
      {removedUser && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          className='recent-users__toast'
          role='alert'
        >
          <span className='recent-users__toast--msg'>
            Removed {removedUser}
          </span>

          <button
            type='button'
            onClick={onUndo}
            className='recent-users__toast--undo-btn'
          >
            Undo
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default UndoToast;
