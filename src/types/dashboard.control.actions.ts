import { ViewType } from './index';

export interface DashboardControlActionsProps {
  onView: React.Dispatch<React.SetStateAction<ViewType>>;
}
