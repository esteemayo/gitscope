import { ArchitectureCardProps } from '@/types/about/architecture/architecture.card.type';
import '../../../styles/components/about/architecture/ArchitectureCard.scss';

const ArchitectureCard = ({
  feature: { icon: Icon, title, description, accentColor, layer },
}: ArchitectureCardProps) => {
  return (
    <article
      className='architecture-card'
      style={
        {
          '--accent-color': accentColor,
        } as React.CSSProperties
      }
    >
      <header className='architecture-card__header'>
        <div className='architecture-card__header--icon'>
          <Icon />
        </div>
      </header>

      <div className='architecture-card__content'>
        <h3 className='architecture-card__content--title'>{title}</h3>

        <p className='architecture-card__content--description'>{description}</p>
      </div>

      <footer className='architecture-card__footer'>
        <span>{layer}</span>
      </footer>
    </article>
  );
};

export default ArchitectureCard;
