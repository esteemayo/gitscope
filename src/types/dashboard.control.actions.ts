import { ViewType } from './index';

export interface DashboardControlActionsProps {
  view: ViewType;
  onView: React.Dispatch<React.SetStateAction<ViewType>>;
  onKeyDown(e: React.KeyboardEvent<HTMLButtonElement>): void;
}
