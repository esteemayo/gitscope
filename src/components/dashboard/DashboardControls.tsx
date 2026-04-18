'use client';

import { useRef, useState } from 'react';

import Square from '../icons/Square';
import ListBullet from '../icons/ListBullet';

import { sortItems } from '@/data';
import { DashboardControlsProps } from '@/types/dashboard.control.type';

import '../../styles/components/DashboardControls.scss';

const DashboardControls = ({ sort, view, onSort, onView }: DashboardControlsProps) => {
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  const [isOpen, setIsOpen] = useState(false);

  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;

    if (!target.classList.contains('dashboard-controls__dropdown-button')) {
      setIsOpen(false);
    }
  };

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
                  {sortItems.map(({ id, label }, index) => (
                    <li key={id} className='dashboard-controls__dropdown-item'>
                      <button
                        ref={(el) => {
                          refs.current[index] = el;
                        }}
                        type='button'
                        onClick={() => onSort(id)}
                        onKeyDown={(e) => onKeyDown(e, index)}
                      >
                        {label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className='dashboard-controls__actions'>
            <button
              type='button'
              onClick={() => onView('grid')}
              onKeyDown={handleKeyDown}
              className={
                view === 'grid' ?
                  'dashboard-controls__toggle-btn active' :
                  'dashboard-controls__toggle-btn'
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
                  'dashboard-controls__toggle-btn active' :
                  'dashboard-controls__toggle-btn'
              }
              title='List'
            >
              <ListBullet />
            </button>

            <button type='button' className='dashboard-controls__export'>Export CSV</button>
          </div>
        </header>
      </div>
    </div>
  );
};

export default DashboardControls;
