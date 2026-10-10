'use client';

import { useRef, useState } from 'react';
import { MoreVertical, Share2, Trash2 } from 'lucide-react';

import { useEscapeKey } from '@/hooks/useEscapeKey';
import { useClickOutside } from '@/hooks/useClickOutside';

import { SavedProfileMenuProps } from '@/types/saved/card/saved.profile.menu.type';
import '../../../styles/components/saved/card/SavedProfileMenu.scss';

const SavedProfileMenu = ({
  profile,
  onShare,
  onDelete,
}: SavedProfileMenuProps) => {
  const menuRef = useRef<HTMLDivElement | null>(null);

  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleToggle = () => {
    setIsOpen((current) => !current);
  };

  const handleShare = () => {
    onShare?.(profile);
    handleClose();
  };

  const handleDelete = () => {
    onDelete?.(profile.id);
    handleClose();
  };

  useClickOutside(menuRef, isOpen, handleClose);
  useEscapeKey({ isEnabled: isOpen, onEscape: handleClose });

  return (
    <div className='saved-profile-menu'>
      <button
        type='button'
        onClick={handleToggle}
        className='saved-profile-menu__trigger'
        aria-label={`More actions for ${profile.login}`}
        aria-expanded={isOpen}
        aria-haspopup='menu'
      >
        <MoreVertical
          size={17}
          strokeWidth={1.8}
          role='img'
          aria-hidden='true'
          focusable='false'
        />
      </button>

      {isOpen && (
        <div ref={menuRef} className='saved-profile-menu__menu'>
          <button
            type='button'
            onClick={handleShare}
            className='saved-profile-menu__menu--share'
            role='menuitem'
          >
            <Share2
              size={15}
              strokeWidth={1.8}
              role='img'
              aria-hidden='true'
              focusable='false'
            />

            <span>Share</span>
          </button>

          <div
            className='saved-profile-menu__menu--separator'
            aria-hidden='true'
          />

          <button
            type='button'
            onClick={handleDelete}
            className='saved-profile-menu__menu--delete'
            role='menuitem'
          >
            <Trash2
              size={15}
              strokeWidth={1.8}
              role='img'
              aria-hidden='true'
              focusable='false'
            />

            <span>Delete</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default SavedProfileMenu;
