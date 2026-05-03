import SquareIcon from '../icons/SquareIcon';
import ListBulletIcon from '../icons/ListBulletIcon';

import { DashboardControlActionsProps } from '@/types/dashboard.control.actions';
import '../../styles/components/DashboardControlActions.scss';

const DashboardControlActions = ({ view, onView }: DashboardControlActionsProps) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      e.preventDefault();
      onView(view === 'grid' ? 'list' : 'grid');
    }
  };

  return (
    <div className='dashboard-control-actions'>
      <button
        type='button'
        onClick={() => onView('grid')}
        onKeyDown={handleKeyDown}
        className={
          view === 'grid' ?
            'dashboard-control-actions__toggle-btn active' :
            'dashboard-control-actions__toggle-btn'
        }
        title='Grid'
      >
        <SquareIcon />
      </button>

      <button
        type='button'
        onClick={() => onView('list')}
        onKeyDown={handleKeyDown}
        className={
          view === 'list' ?
            'dashboard-control-actions__toggle-btn active' :
            'dashboard-control-actions__toggle-btn'
        }
        title='List'
      >
        <ListBulletIcon />
      </button>

      <button
        type='button'
        className='dashboard-control-actions__export'
      >
        Export CSV
      </button>
    </div>
  );
};

export default DashboardControlActions;
