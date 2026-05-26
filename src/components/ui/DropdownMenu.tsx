'use client';

import { useRef } from 'react';

import ContextMenu from './ContextMenu';
import ContextMenuItem from './ContextMenuItem';

import { SORT_ITEMS } from '@/data';
import { SortType } from '@/types';
import { DropdownMenuProps } from '@/types/dropdown.menu.type';

import '../../styles/components/DropdownMenu.scss';

const DropdownMenu = ({ isOpen, onOpen, onSort }: DropdownMenuProps) => {
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleClose = () => {
    onOpen(false);
  };

  const handleClick = (id: SortType) => {
    onSort(id);
    handleClose();
  };

  const onKeyDown = (
    e: React.KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    let nextIndex = index;
    const lastIndex = SORT_ITEMS.length - 1;

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

    const nextItem = SORT_ITEMS[nextIndex].id;
    onSort(nextItem);
    refs.current[nextIndex]?.focus();
  };

  return (
    <ContextMenu isOpen={isOpen} onClose={handleClose}>
      {SORT_ITEMS.map(({ id, label }, index) => (
        <ContextMenuItem
          key={id}
          innerRef={(el) => {
            refs.current[index] = el;
          }}
          label={label}
          onClick={() => handleClick(id)}
          onKeyDown={(e) => onKeyDown(e, index)}
        />
      ))}
    </ContextMenu>
  );
};

export default DropdownMenu;
