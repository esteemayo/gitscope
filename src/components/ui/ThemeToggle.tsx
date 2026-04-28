'use client';

import { motion } from 'framer-motion';

import MoonIcon from '../icons/MoonIcon';
import SunIcon from '../icons/SunIcon';
import ComputerDesktopIcon from '../icons/ComputerDesktopIcon';

import { useTheme } from '@/context/ThemeContext';
import '../../styles/components/ThemeToggle.scss';

const ThemeToggle = () => {
  const { theme, resolvedTheme, setTheme } = useTheme();

  const isDark = resolvedTheme === 'dark';

  return (
    <div className='theme'>
      <button
        type='button'
        onClick={() => setTheme(isDark ? 'light' : 'dark')}
        className='theme__toggle'
        aria-label='Toggle theme'
      >
        <div className='theme__toggle--track'>
          <motion.div
            animate={{ x: isDark ? 20 : 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className={isDark ?
              'theme__toggle--thumb dark' :
              'theme__toggle--thumb'
            }
          >
            {isDark ? <MoonIcon /> : <SunIcon />}
          </motion.div>
        </div>
      </button>

      <button
        type='button'
        onClick={() => setTheme('auto')}
        className={theme === 'auto' ? 'theme__auto active' : 'theme__auto'}
        aria-label='System theme'
      >
        <ComputerDesktopIcon />
      </button>
    </div>
  );
};

export default ThemeToggle;
