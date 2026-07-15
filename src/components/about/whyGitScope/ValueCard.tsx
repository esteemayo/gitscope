import { ValueCardProps } from '@/types/about/whyGitScope/value.card.type';
import '../../../styles/components/about/whyGitScope/ValueCard.scss';

const ValueCard = ({
  value: { icon: Icon, title, description, accentColor },
}: ValueCardProps) => {
  return (
    <article
      className='value-card'
      style={
        {
          '--accent-color': accentColor,
        } as React.CSSProperties
      }
    >
      <div className='value-card__icon'>
        <Icon size={28} strokeWidth={2} />
      </div>

      <div className='value-card__content'>
        <h3 className='value-card__content--title'>{title}</h3>

        <p className='value-card__content--description'>{description}</p>
      </div>

      <div className='value-card__footer'>
        <span />
      </div>
    </article>
  );
};

export default ValueCard;
