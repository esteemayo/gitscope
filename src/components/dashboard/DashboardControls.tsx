'use client';

import { useState } from 'react';

import DropdownButton from '../ui/DropdownButton';
import DropdownMenu from '../ui/DropdownMenu';
import DashboardControlActions from './DashboardControlActions';

import { DashboardControlsProps } from '@/types/dashboard.control.type';
import '../../styles/components/DashboardControls.scss';

const DashboardControls = ({
  sort,
  onSort,
  onView,
}: DashboardControlsProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className='dashboard-controls'>
      <div className='dashboard-controls__container'>
        <header className='dashboard-controls__header'>
          <div className='dashboard-controls__group'>
            <h2 className='dashboard-controls__heading'>Top repos</h2>

            <div className='dashboard-controls__dropdown-wrapper'>
              <span className='dashboard-controls__label'>by</span>

              <div className='dashboard-controls__dropdown-style'>
                <DropdownButton
                  isOpen={isOpen}
                  label={sort}
                  onToggle={handleToggle}
                />

                <DropdownMenu
                  isOpen={isOpen}
                  onOpen={setIsOpen}
                  onSort={onSort}
                />
              </div>
            </div>
          </div>

          <DashboardControlActions onView={onView} />
        </header>
      </div>
    </div>
  );
};

export default DashboardControls;
