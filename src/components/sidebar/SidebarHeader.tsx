import Logo from '../ui/Logo';
import XmarkIcon from '../icons/XmarkIcon';

import '../../styles/components/sidebar/SidebarHeader.scss';

const SidebarHeader = ({ onClose }: { onClose(): void }) => {
  return (
    <header className='sidebar-header'>
      <div className='sidebar-header__branding'>
        <Logo onClick={onClose} />

        <div className='sidebar-header__text'>
          <h2 className='sidebar-header__text--heading'>GitScope</h2>
          <p className='sidebar-header__text--desc'>Developer analytics</p>
        </div>
      </div>

      <button
        type='button'
        onClick={onClose}
        className='sidebar-header__close'
        aria-label='Close sidebar'
      >
        <XmarkIcon />
      </button>
    </header>
  );
};

export default SidebarHeader;
