import SunIcon from './../components/icons/SunIcon';
import MoonIcon from './../components/icons/MoonIcon';

import ComputerDesktopIcon from './../components/icons/ComputerDesktopIcon';
import DevicePhoneMobileIcon from './../components/icons/DevicePhoneMobileIcon';

import { ThemeButtonsType } from '@/types';

export const THEMEBUTTONS: ThemeButtonsType[] = [
  {
    id: 'dark',
    label: 'Dark',
    icons: {
      default: MoonIcon,
    },
  },
  {
    id: 'auto',
    label: 'System',
    icons: {
      desktop: ComputerDesktopIcon,
      mobile: DevicePhoneMobileIcon,
    },
  },
  {
    id: 'light',
    label: 'Light',
    icons: {
      default: SunIcon,
    },
  },
];
