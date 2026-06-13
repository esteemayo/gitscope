import BarsIcon from '../icons/BarsIcon';
import '../../styles/components/MenuButton.scss';

const MenuButton = ({ onClick }: { onClick(): void }) => {
  return (
    <button
      type='button'
      onClick={onClick}
      className='menu-button'
      aria-label='Open sidebar'
    >
      <BarsIcon />
    </button>
  );
};

export default MenuButton;
