import SquareIcon from '../icons/SquareIcon';
import ListBulletIcon from '../icons/ListBulletIcon';

import { DashboardControlActionsProps } from '@/types/dashboard.control.actions';
import '../../styles/components/DashboardControlActions.scss';

const DashboardControlActions = ({ view, onView, onKeyDown }: DashboardControlActionsProps) => {
  return (
    <div className='dashboard-control-actions'>
      <button
        type='button'
        onClick={() => onView('grid')}
        onKeyDown={onKeyDown}
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
        onKeyDown={onKeyDown}
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
