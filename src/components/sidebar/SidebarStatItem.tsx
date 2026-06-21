import { SidebarStatItemProps } from '@/types/sidebar.stat.item.type';
import '../../styles/components/sidebar/SidebarStatItem.scss';

const SidebarStatItem = ({ label, value }: SidebarStatItemProps) => {
  return (
    <article className='sidebar-stat-item'>
      <span className='sidebar-stat-item__label'>{label}</span>

      {typeof value === 'string' ? (
        <time dateTime={value} className='sidebar-stat-item__value'>
          {value}
        </time>
      ) : (
        <strong className='sidebar-stat-item__value'>{value}</strong>
      )}
    </article>
  );
};

export default SidebarStatItem;
