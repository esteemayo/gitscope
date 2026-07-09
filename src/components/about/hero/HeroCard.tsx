import { HeroCardProps } from '@/types/about/hero/hero.card.type';
import '../../../styles/components/about/hero/HeroCard.scss';

const HeroCard = ({ icon: Icon, title, value, trend }: HeroCardProps) => {
  return (
    <article className='hero-card'>
      <div className='hero-card__icon'>
        <Icon size={22} />
      </div>

      <div className='hero-card__group'>
        <h4 className='hero-card__group--title'>{title}</h4>

        <strong className='hero-card__group--value'>{value}</strong>

        <small className='hero-card__group--trend'>{trend}</small>
      </div>
    </article>
  );
};

export default HeroCard;
