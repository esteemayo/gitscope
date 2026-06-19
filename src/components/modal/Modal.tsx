'use client';

import { useRef } from 'react';

import XmarkIcon from '../icons/XmarkIcon';

import { useScrollLock } from '@/hooks/useScrollLock';
import { useEscapeKey } from '@/hooks/useEscapeKey';
import { useClickOutside } from '@/hooks/useClickOutside';
import { useFocusTrap } from '@/hooks/useFocusTrap';

import { ModalProps } from '@/types/modal.type';
import '../../styles/components/modal/Modal.scss';

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
    isEnabled: closeOnEscape ? isOpen : false,
    onEscape: onClose!,
  });

  return (
    <div className={isOpen ? 'modal visible' : 'modal hidden'}>
      <div className='modal__backdrop'>
        <div className='modal__container'>
          <div ref={containerRef} className='modal__wrapper' tabIndex={0}>
            <div className='modal__body'>{children}</div>

            {showCloseButton && (
              <div className='modal__close'>
                <button type='button' className='modal__close--btn'>
                  <XmarkIcon />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
