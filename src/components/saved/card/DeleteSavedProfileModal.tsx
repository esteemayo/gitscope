'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { Trash2, X } from 'lucide-react';

import { useFocusTrap } from '@/hooks/useFocusTrap';
import { useScrollLock } from '@/hooks/useScrollLock';

import '../../../styles/components/saved/card/DeleteSavedProfileModal.scss';

const DeleteSavedProfileModal = () => {
  const isOpen = true;
  const ref = useRef<HTMLElement | null>(null);

  useScrollLock(isOpen);
  useFocusTrap(ref, isOpen);

  return (
    <div className='delete-saved-profile-modal'>
      <div className='delete-saved-profile-modal__backdrop'>
        <section
          ref={ref}
          id='delete-saved-profile-dialog'
          className='delete-saved-profile-modal__inner'
          role='alertdialog'
          aria-labelledby='delete-saved-profile-modal-title'
          aria-describedby='delete-saved-profile-modal-description'
        >
          <button
            type='button'
            className='delete-saved-profile-modal__close-btn'
            aria-label='Close confirmation dialog'
          >
            <X
              size={19}
              strokeWidth={1.8}
              role='img'
              aria-hidden='true'
              focusable='false'
            />
          </button>

          <div className='delete-saved-profile-modal__icon'>
            <Trash2
              size={23}
              strokeWidth={1.8}
              role='img'
              aria-hidden='true'
              focusable='false'
            />
          </div>

          <div className='delete-saved-profile-modal__content'>
            <h2
              id='delete-saved-profile-modal-title'
              className='delete-saved-profile-modal__content--title'
            >
              Delete saved profile?
            </h2>

            <p
              id='delete-saved-profile-modal-description'
              className='delete-saved-profile-modal__content--description'
            >
              This will remove this profile from your saved collection. You can
              still find it in Recently Viewed if it is there.
            </p>
          </div>

          <div className='delete-saved-profile-modal__profile'>
            <div className='delete-saved-profile-modal__wrapper'>
              <Image
                src='/avatar-2.jpg'
                width={44}
                height={44}
                alt='avatar'
                unoptimized
                className='delete-saved-profile-modal__wrapper--avatar'
              />
            </div>

            <div className='delete-saved-profile-modal__info'>
              <span className='delete-saved-profile-modal__info--username'>
                @esteemayo
              </span>

              <span className='delete-saved-profile-modal__info--name'>
                Emmanuel Adebayo
              </span>
            </div>

            <span
              className='delete-saved-profile-modal__accent'
              aria-hidden='true'
            />
          </div>

          <div className='delete-saved-profile-modal__actions'>
            <button
              type='button'
              className='delete-saved-profile-modal__actions--btn-cancel'
            >
              Cancel
            </button>

            <button
              type='button'
              className='delete-saved-profile-modal__actions--btn-delete'
            >
              Delete profile
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DeleteSavedProfileModal;
