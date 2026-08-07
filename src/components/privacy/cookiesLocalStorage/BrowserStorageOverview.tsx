import { BrowserStorageOverviewProps } from '@/types/privacy/cookiesLocalStorage/browser.storage.overview.type';
import '../../../styles/components/privacy/cookiesLocalStorage/BrowserStorageOverview.scss';

const BrowserStorageOverview = ({ items }: BrowserStorageOverviewProps) => {
  return (
    <div className='browser-storage-overview'>
      <div className='browser-storage-overview__'>BrowserStorageOverview</div>
    </div>
  );
};

export default BrowserStorageOverview;
