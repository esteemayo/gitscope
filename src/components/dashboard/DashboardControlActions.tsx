'use client';

import { useEffect, useRef, useState } from 'react';

import ListBulletIcon from '../icons/ListBulletIcon';
import SquareIcon from '../icons/SquareIcon';
import ArrowDownTrayIcon from '../icons/ArrowDownTrayIcon';

import DropdownButton from '../ui/DropdownButton';
import ContextMenu from '../ui/ContextMenu';
import ContextMenuItem from '../ui/ContextMenuItem';

import { DashboardControlActionsProps } from '@/types/dashboard.control.actions';
import '../../styles/components/DashboardControlActions.scss';

const DashboardControlActions = ({ onView }: DashboardControlActionsProps) => {
  const firstItemRef = useRef<HTMLButtonElement | null>(null);

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => {
      const next = !prev;

      if (!prev) {
        setTimeout(() => {
          firstItemRef.current?.focus();
        }, 100);
      }

      return next;
    });
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleToggleGrid = () => {
    onView('grid');
    handleClose();
  };

  const handleToggleList = () => {
    onView('list');
    handleClose();
  };

  const handleExportCSV = () => {
    console.log('repos exported!');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    switch (e.key) {
      case 'ArrowDown':
      case 'ArrowUp':
        e.preventDefault();
        onView((prev) => (prev === 'grid' ? 'list' : 'grid'));
        return;

      case 'e': // 'e' / 'E' ---> export
      case 'E':
        e.preventDefault();
        handleExportCSV();
        return;

      case 'Enter':
      case '':
        e.preventDefault();
        handleToggle();
        return;

      default:
        return;
    }
  };

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        firstItemRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  return (
    <div className='dashboard-control-actions'>
      <div className='dashboard-control-actions__container'>
        <DropdownButton
          isOpen={isOpen}
          label='Actions'
          onToggle={handleToggle}
        />

        <ContextMenu isOpen={isOpen} onClose={handleClose}>
          <ContextMenuItem
            innerRef={firstItemRef}
            label='Grid'
            icon={<SquareIcon />}
            onClick={handleToggleGrid}
            onKeyDown={handleKeyDown}
          />

          <ContextMenuItem
            label='List'
            icon={<ListBulletIcon />}
            onClick={handleToggleList}
            onKeyDown={handleKeyDown}
          />

          <ContextMenuItem
            label='Export CSV (E)'
            icon={<ArrowDownTrayIcon />}
            onClick={handleExportCSV}
            onKeyDown={handleKeyDown}
          />
        </ContextMenu>
      </div>
    </div>
  );
};

export default DashboardControlActions;
