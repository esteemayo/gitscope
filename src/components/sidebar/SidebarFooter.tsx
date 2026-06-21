import SidebarCopyright from './SidebarCopyright';
import SidebarSignout from './SidebarSignout';
import SidebarThemeToggle from './SidebarThemeToggle';

import '../../styles/components/sidebar/SidebarFooter.scss';

const SidebarFooter = () => {
  return (
    <footer className='sidebar-footer'>
      <SidebarThemeToggle />
      <SidebarSignout />
      <SidebarCopyright />
    </footer>
  );
};

export default SidebarFooter;
