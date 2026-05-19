'use client';

import { useEffect, useRef } from 'react';

import { useEscapeKey } from '@/hooks/useEscapeKey';
import { ContextMenuProps } from '@/types/context.menu.type';

import '../../styles/components/ContextMenu.scss';

const ContextMenu = ({ isOpen, onClose, children }: ContextMenuProps) => {
  const menuRef = useRef<HTMLUListElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  useEscapeKey({ isEnabled: isOpen, onEscape: onClose });

  useEffect(() => {
    if (isOpen) {
      triggerRef.current = document.activeElement as HTMLButtonElement;
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      triggerRef.current?.focus();
    }
  }, [isOpen]);

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
