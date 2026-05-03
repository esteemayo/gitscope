'use client';

import { useState } from 'react';

import DropdownMenu from '../ui/DropdownMenu';
import MenuButton from '../ui/MenuButton';
import DashboardControlActions from './DashboardControlActions';

import { DashboardControlsProps } from '@/types/dashboard.control.type';
import '../../styles/components/DashboardControls.scss';

const DashboardControls = ({ sort, view, onSort, onView }: DashboardControlsProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='dashboard-controls'>
      <div className='dashboard-controls__container'>
        <header className='dashboard-controls__header'>
          <div className='dashboard-controls__group'>
            <h2 className='dashboard-controls__heading'>Top repos</h2>

            <div className='dashboard-controls__dropdown-wrapper'>
              <span className='dashboard-controls__label'>by</span>

              <div className='dashboard-controls__dropdown-style'>
                <MenuButton
                  isOpen={isOpen}
                  sort={sort}
                  onOpen={setIsOpen}
                />

                <DropdownMenu
                  isOpen={isOpen}
                  onOpen={setIsOpen}
                  onSort={onSort}
                />
              </div>
            </div>
          </div>

          <DashboardControlActions view={view} onView={onView} />
        </header>
      </div>
    </div>
  );
};

export default DashboardControls;
