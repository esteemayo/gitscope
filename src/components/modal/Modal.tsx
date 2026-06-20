'use client';

import { useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import XmarkIcon from '../icons/XmarkIcon';

import { useScrollLock } from '@/hooks/useScrollLock';
import { useEscapeKey } from '@/hooks/useEscapeKey';
import { useClickOutside } from '@/hooks/useClickOutside';
import { useFocusTrap } from '@/hooks/useFocusTrap';

import { ModalProps } from '@/types/modal.type';
import '../../styles/components/modal/Modal.scss';

const backdropVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.15,
    },
  },
};

const modalVariants = {
  hidden: {
    opacity: 0,
    y: 24,
    scale: 0.95,
    filter: 'blur(8px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.25,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
  exit: {
    opacity: 0,
    y: 12,
    scale: 0.97,
    filter: 'blur(6px)',
    transition: {
      duration: 0.18,
    },
  },
};

const Modal = ({
  isOpen,
  closeOnEscape = false,
  closeOnOutsideClick = false,
  showCloseButton = false,
  onClose,
  children,
}: ModalProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleClose = () => {
    if (closeOnOutsideClick) {
      onClose?.();
    }
  };

  useScrollLock(isOpen);

  useFocusTrap(containerRef, isOpen);

  useClickOutside(containerRef, isOpen, handleClose);

  useEscapeKey({
    isEnabled: closeOnEscape && isOpen,
    onEscape: onClose!,
  });

  return (
    <AnimatePresence mode='wait'>
      <motion.div
        variants={backdropVariants}
        initial='hidden'
        animate='visible'
        exit='exit'
        className={isOpen ? 'modal visible' : 'modal hidden'}
      >
        <motion.div className='modal__backdrop'>
          <div className='modal__container'>
            <motion.div
              ref={containerRef}
              variants={modalVariants}
              className='modal__wrapper'
              tabIndex={-1}
            >
              <div className='modal__body'>{children}</div>

              {showCloseButton && (
                <div className='modal__close'>
                  <button type='button' className='modal__close--btn'>
                    <XmarkIcon />
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Modal;
