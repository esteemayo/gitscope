import { TrustBannerProps } from '@/types/privacy/dataStorageSecurity/trust.banner.type';
import '../../../styles/components/privacy/dataStorage/TrustBanner.scss';

const TrustBanner = ({
  title,
  description,
  icon: Icon,
  accentColor,
}: TrustBannerProps) => {
  return (
    <div className='trust-banner'>
      <div className='trust-banner__'>TrustBanner</div>
    </div>
  );
};

export default TrustBanner;
