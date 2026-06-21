'use client';

import { THEMEBUTTONS } from '@/data/theme';
import { useTheme } from '@/context/ThemeContext';

import '../../styles/components/sidebar/SidebarThemeToggle.scss';

const SidebarThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className='sidebar-theme-toggle'>
      {THEMEBUTTONS.map((item) => {
        const { id, label, icons } = item;
        const { default: DefaultIcon, mobile: MobileIcon } = icons;

        const isActive = theme === id;

        return (
          <button
            key={id}
            type='button'
            onClick={() => setTheme(id)}
            className={
              isActive
                ? 'sidebar-theme-toggle__btn active'
                : 'sidebar-theme-toggle__btn'
            }
            aria-label={`${label} mode`}
          >
            {DefaultIcon && <DefaultIcon />}
            {MobileIcon && <MobileIcon />}
          </button>
        );
      })}
    </div>
  );
};

export default SidebarThemeToggle;
