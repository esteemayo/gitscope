import { SecurityOverviewItemProps } from '@/types/privacy/dataStorageSecurity/security.overview.item';
import '../../../styles/components/privacy/dataStorage/SecurityOverviewItem.scss';

const SecurityOverviewItem = ({
  title,
  description,
  icon: Icon,
  accentColor,
}: SecurityOverviewItemProps) => {
  return (
    <article
      className='security-overview-item'
      style={
        {
          '--accent-color': accentColor,
        } as React.CSSProperties
      }
    >
      <div className='security-overview-item__icon'>
        <Icon size={24} role='img' aria-hidden='true' focusable='false' />
      </div>

      <div className='security-overview-item__content'>
        <h4 className='security-overview-item__content--title'>{title}</h4>

        <p className='security-overview-item__content--description'>
          {description}
        </p>
      </div>
    </article>
  );
};

export default SecurityOverviewItem;
