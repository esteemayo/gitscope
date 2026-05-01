'use client';

import { useEffect, useRef, useState } from 'react';

import DashboardControlActions from './DashboardControlActions';

import { sortItems } from '@/data';
import { DashboardControlsProps } from '@/types/dashboard.control.type';

import '../../styles/components/DashboardControls.scss';

const DashboardControls = ({ sort, view, onSort, onView }: DashboardControlsProps) => {
  const menuRef = useRef<HTMLUListElement | null>(null);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  const [isOpen, setIsOpen] = useState(false);

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

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className='dashboard-controls'>
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

                <ul
                  ref={menuRef}
                  className={
                    isOpen ?
                      'dashboard-controls__dropdown-list show' :
                      'dashboard-controls__dropdown-list hide'
                  }
                >
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

          <DashboardControlActions
            view={view}
            onView={onView}
            onKeyDown={handleKeyDown}
          />
        </header>
      </div>
    </div>
  );
};

export default DashboardControls;
