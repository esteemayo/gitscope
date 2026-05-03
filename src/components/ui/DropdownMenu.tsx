'use client';

import { useEffect, useRef } from 'react';

import DropdownMenuItem from './DropdownMenuItem';

import { sortItems } from '@/data';
import { DropdownMenuProps } from '@/types/dropdown.menu.type';

import '../../styles/components/DropdownMenu.scss';

const DropdownMenu = ({ isOpen, onOpen, onSort }: DropdownMenuProps) => {
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const menuRef = useRef<HTMLUListElement | null>(null);

  const onKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    let nextIndex = index;
    const lastIndex = sortItems.length - 1;

    if (e.key === 'ArrowDown') {
      nextIndex = index === lastIndex ? 0 : index + 1;
    }

    if (e.key === 'ArrowUp') {
      nextIndex = index === 0 ? lastIndex : index - 1;
    }

    if (e.key === 'Home') {
      nextIndex = 0;
    }

    if (e.key === 'End') {
      nextIndex = lastIndex;
    }

    e.preventDefault();

    const nextItem = sortItems[nextIndex].id;
    onSort(nextItem);
    refs.current[nextIndex]?.focus();
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        onOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onOpen]);

  return (
    <ul
      ref={menuRef}
      className={isOpen ? 'dropdown-menu show' : 'dropdown-menu hide'}
    >
      {sortItems.map(({ id, label }, index) => (
        <DropdownMenuItem
          key={id}
          id={id}
          ref={(el) => { refs.current[index] = el }}
          label={label}
          index={index}
          onSort={onSort}
          onKeyDown={onKeyDown}
        />
      ))}
    </ul>
  );
};

export default DropdownMenu;
