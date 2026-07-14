import { ActionCardProps } from '@/types/about/features/previews/action.card.type';
import '../../../../styles/components/about/features/previews/ActionCard.scss';

const ActionCard = ({
  icon: Icon,
  title,
  subtitle,
  accentColor,
  buttonLabel,
}: ActionCardProps) => {
  return (
    <div
      className='action-card'
      style={
        {
          '--accent-color': accentColor,
        } as React.CSSProperties
      }
    >
      <div className='action-card__icon'>
        <Icon size={22} />
      </div>

      <div className='action-card__content'>
        <strong className='action-card__content--title'>{title}</strong>

        <span className='action-card__content--subtitle'>{subtitle}</span>
      </div>

      <button type='button' className='action-card__btn'>
        {buttonLabel ?? 'Run'}
      </button>
    </div>
  );
};

export default ActionCard;
