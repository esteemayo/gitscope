import Link from 'next/link';
import '../../styles/components/sidebar/SidebarNavItem.scss';

interface SidebarNavItemProps {
  icon(): React.JSX.Element;
  url: string;
  label: string;
  isActive: boolean;
}

const SidebarNavItem = ({
  url,
  icon: Icon,
  label,
  isActive,
}: SidebarNavItemProps) => {
  return (
    <Link
      href={url}
      className={isActive ? 'sidebar-nav-item active' : 'sidebar-nav-item'}
    >
      <span className='sidebar-nav-item__icon'>
        <Icon />
      </span>

      <span className='sidebar-nav-item__label'>{label}</span>
    </Link>
  );
};

export default SidebarNavItem;
