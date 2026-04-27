'use client';

import { useState } from 'react';
import '../../styles/components/ThemeToggle.scss';

const ThemeToggle = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  const handleToggle = () => {
    setTheme((prev) => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      type='button'
      onClick={handleToggle}
      className='theme-toggle'
      aria-label='Toggle theme'
    >
      <div className='theme-toggle__track'>
        <div
          className={theme === 'dark' ?
            'theme-toggle__thumb dark' :
            'theme-toggle__thumb'
          }
        />
      </div>

      <span className='theme-toggle__label'>
        {theme === 'dark' ? 'Dark' : 'Light'}
      </span>
    </button>
  );
};

export default ThemeToggle;
