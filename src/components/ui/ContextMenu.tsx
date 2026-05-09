'use client';

import { useEffect, useRef } from 'react';
import { ContextMenuProps } from '@/types/context.menu.type';

import '../../styles/components/ContextMenu.scss';

const ContextMenu = ({ isOpen, onClose, children }: ContextMenuProps) => {
  const menuRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

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
