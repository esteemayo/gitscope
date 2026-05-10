'use client';

import { useState } from 'react';

import ArrowDownIcon from '../icons/ArrowDownIcon';
import SquareIcon from '../icons/SquareIcon';
import ListBulletIcon from '../icons/ListBulletIcon';

import ContextMenu from '../ui/ContextMenu';
import ContextMenuItem from '../ui/ContextMenuItem';

import { DashboardControlActionsProps } from '@/types/dashboard.control.actions';
import '../../styles/components/DashboardControlActions.scss';

const DashboardControlActions = ({ view, onView }: DashboardControlActionsProps) => {
  const [isOpen, setIsOpen] = useState(false);

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
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      onView(view === 'grid' ? 'list' : 'grid');
    }
  };

  return (
    <div className='dashboard-control-actions'>
      <div className='dashboard-control-actions__container'>
        <button
          type='button'
          className={
            isOpen ?
              'dashboard-control-actions__toggle-btn active' :
              'dashboard-control-actions__toggle-btn'
          }
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <label>Options</label>
          <ArrowDownIcon />
        </button>

        <ContextMenu isOpen={isOpen} onClose={handleClose}>
          <ContextMenuItem
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
            label='Export CSV'
            icon={<ListBulletIcon />}
            onClick={handleExportCSV}
          />
        </ContextMenu>
      </div>
    </div>
  );
};

export default DashboardControlActions;
