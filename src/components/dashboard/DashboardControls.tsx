'use client';

import { useState } from 'react';

import Square from '../icons/Square';
import ListBullet from '../icons/ListBullet';

import { DashboardControlsProps } from '@/types/dashboard.control.type';
import '../../styles/components/DashboardControls.scss';

const DashboardControls = ({ sort, view, onSort, onView }: DashboardControlsProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;

    if (!target.classList.contains('dashboard-controls__dropdown-button')) {
      setIsOpen(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      e.preventDefault();
      onView(view === 'grid' ? 'list' : 'grid');
    }
  };

  return (
    <div onClick={handleClose} className='dashboard-controls'>
      <div className='dashboard-controls__container'>
        <header className='dashboard-controls__header'>
          <div className='dashboard-controls__group'>
            <h2 className='dashboard-controls__heading'>Top repos</h2>

            <div className='dashboard-controls__dropdown-wrapper'>
              <span className='dashboard-controls__label'>by</span>

              <div className='dashboard-controls__dropdown-style'>
                <button
                  type='button'
                  onClick={() => setIsOpen((prev) => !prev)}
                  className={
                    isOpen ?
                      'dashboard-controls__dropdown-button active' :
                      'dashboard-controls__dropdown-button'
                  }
                >
                  <label>{sort}</label>

                  <svg
                    role='img'
                    aria-hidden='true'
                    focusable='false'
                    width='12'
                    height='16'
                    viewBox='0 0 12 16'
                  >
                    <path fillRule='evenodd' d='M0 5l6 6 6-6H0z' />
                  </svg>
                </button>

                <ul className={
                  isOpen ?
                    'dashboard-controls__dropdown-list show' :
                    'dashboard-controls__dropdown-list hide'
                }>
                  <li className='dashboard-controls__dropdown-item'>
                    <button
                      type='button'
                      onClick={() => onSort('stars')}
                    >
                      stars
                    </button>
                  </li>

                  <li className='dashboard-controls__dropdown-item'>
                    <button
                      type='button'
                      onClick={() => onSort('forks')}
                    >
                      forks
                    </button>
                  </li>

                  <li className='dashboard-controls__dropdown-item'>
                    <button
                      type='button'
                      onClick={() => onSort('size')}
                    >
                      size
                    </button>
                  </li>

                  <li className='dashboard-controls__dropdown-item'>
                    <button
                      type='button'
                      onClick={() => onSort('updated')}
                    >
                      updated
                    </button>
                  </li>

                  <li className='dashboard-controls__dropdown-item'>
                    <button
                      type='button'
                      onClick={() => onSort('name')}
                    >
                      name
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className='dashboard-controls__toggle'>
            <button
              type='button'
              onClick={() => onView('grid')}
              onKeyDown={handleKeyDown}
              className={
                view === 'grid' ?
                  'dashboard-controls__toggle--btn active' :
                  'dashboard-controls__toggle--btn'
              }
              title='Grid'
            >
              <Square />
            </button>

            <button
              type='button'
              onClick={() => onView('list')}
              onKeyDown={handleKeyDown}
              className={
                view === 'list' ?
                  'dashboard-controls__toggle--btn active' :
                  'dashboard-controls__toggle--btn'
              }
              title='List'
            >
              <ListBullet />
            </button>
          </div>
        </header>
      </div>
    </div>
  );
};

export default DashboardControls;
