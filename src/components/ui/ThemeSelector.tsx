'use client';

import { motion } from 'framer-motion';

import { THEMEBUTTONS } from '@/data/theme';
import { useTheme } from '@/context/ThemeContext';

import '../../styles/components/ThemeSelector.scss';

const ThemeSelector = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className='theme-selector'>
      <div className='theme-selector__container'>
        {THEMEBUTTONS.map((item) => {
          const { id, label, icons } = item;

          const {
            default: DefaultIcon,
            desktop: DesktopIcon,
            mobile: MobileIcon,
          } = icons;

          return (
            <button
              key={id}
              type='button'
              onClick={() => setTheme(id)}
              className='theme-selector__btn'
              aria-label={label}
              disabled={theme === id}
              title={`${label} mode`}
            >
              {DefaultIcon && (
                <motion.span
                  animate={{
                    scale: theme === id ? 1.1 : 1,
                    opacity: theme === id ? 1 : 0.6,
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <DefaultIcon />
                </motion.span>
              )}

              {DesktopIcon && (
                <motion.span
                  animate={{
                    scale: theme === 'auto' ? 1.1 : 0.95,
                    opacity: theme === 'auto' ? 1 : 0.5,
                  }}
                  transition={{ duration: 0.2 }}
                  className='theme-selector__btn--desktop'
                >
                  <DesktopIcon />
                </motion.span>
              )}

              {MobileIcon && (
                <motion.span
                  animate={{
                    scale: theme === 'auto' ? 1.1 : 0.95,
                    opacity: theme === 'auto' ? 1 : 0.5,
                  }}
                  transition={{ duration: 0.2 }}
                  className='theme-selector__btn--mobile'
                >
                  <MobileIcon />
                </motion.span>
              )}
            </button>
          )
        })}
      </div>
    </div>
  );
};

export default ThemeSelector;
