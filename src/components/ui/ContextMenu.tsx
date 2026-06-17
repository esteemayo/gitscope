'use client';

import { useRef } from 'react';

import { useEscapeKey } from '@/hooks/useEscapeKey';
import { useClickOutside } from '@/hooks/useClickOutside';

import { ContextMenuProps } from '@/types/context.menu.type';
import '../../styles/components/ContextMenu.scss';

const ContextMenu = ({ isOpen, onClose, children }: ContextMenuProps) => {
  const menuRef = useRef<HTMLUListElement | null>(null);

  useClickOutside(menuRef, isOpen, onClose);
  useEscapeKey({ isEnabled: isOpen, onEscape: onClose });

  return (
    <ul
      ref={menuRef}
      className={isOpen ? 'context-menu show' : 'context-menu hide'}
      role='menu'
    >
      {children}
    </ul>
  );
};

export default ContextMenu;
