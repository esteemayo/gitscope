'use client';

import { useRef } from 'react';
import { LoaderCircle, Trash2, X } from 'lucide-react';

import UserAvatar from '@/components/ui/UserAvatar';

import { useClickOutside } from '@/hooks/useClickOutside';
import { useOverlay } from '@/hooks/useOverlay';
import { DeleteSavedProfileModalProps } from '@/types/saved/card/delete.saved.profile.modal';

import '../../../styles/components/saved/card/DeleteSavedProfileModal.scss';

const DeleteSavedProfileModal = ({
  isOpen,
  isDeleting,
  profile,
  onClose,
  onConfirm,
}: DeleteSavedProfileModalProps) => {
  const ref = useRef<HTMLElement | null>(null);

  const getProfileName = () => {
    return profile?.name?.trim() || profile?.login;
  };

  const handleClose = () => {
    if (isDeleting) return;

    onClose();
  };

  useClickOutside(ref, isOpen, handleClose);
  useOverlay(ref, { isOpen, onClose: handleClose });

  if (!isOpen) {
    return null;
  }

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
            onClick={handleClose}
            disabled={isDeleting}
            className='delete-saved-profile-modal__close-btn'
            aria-label='Close confirmation dialog'
            aria-disabled={isDeleting}
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

          <div
            className='delete-saved-profile-modal__profile'
            style={
              {
                '--accent-color': profile?.accentColor,
              } as React.CSSProperties
            }
          >
            <UserAvatar
              src={profile?.avatarUrl as string}
              size={44}
              name={profile?.name as string}
              alt={`${getProfileName()}'s avatar`}
            />

            <div className='delete-saved-profile-modal__info'>
              <span className='delete-saved-profile-modal__info--username'>
                @{profile?.login}
              </span>

              <span className='delete-saved-profile-modal__info--name'>
                {getProfileName()}
              </span>
            </div>

            <span
              className='delete-saved-profile-modal__profile--accent'
              aria-hidden='true'
            />
          </div>

          <div className='delete-saved-profile-modal__actions'>
            <button
              type='button'
              onClick={handleClose}
              disabled={isDeleting}
              className='delete-saved-profile-modal__actions--btn-cancel'
              aria-disabled={isDeleting}
            >
              Cancel
            </button>

            <button
              type='button'
              onClick={onConfirm}
              disabled={isDeleting}
              className='delete-saved-profile-modal__actions--btn-delete'
              aria-disabled={isDeleting}
            >
              {isDeleting ? (
                <>
                  <LoaderCircle
                    size={17}
                    strokeWidth={1.8}
                    className='delete-saved-profile-modal__actions--spinner'
                    role='img'
                    aria-hidden='true'
                    focusable='false'
                  />

                  <span>Removing...</span>
                </>
              ) : (
                <>
                  <Trash2
                    size={17}
                    strokeWidth={1.8}
                    role='img'
                    aria-hidden='true'
                    focusable='false'
                  />

                  <span>Delete profile</span>
                </>
              )}
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DeleteSavedProfileModal;
