import Tooltip from './Tooltip';
import { InsightCardProps } from '@/types/insight.card.type';

import '../../styles/components/InsightCard.scss';

const InsightCard = ({ icon, title, tooltip, value }: InsightCardProps) => {
  return (
    <article className='insight-card'>
      <div className='insight-card__container'>
        <span className='insight-card__icon'>{icon}</span>

        <div className='insight-card__title-group'>
          <h4 className='insight-card__title'>{title}</h4>

          {tooltip && <Tooltip text={tooltip} />}
        </div>
      </div>

      <p className='insight-card__value'>{value}</p>
    </article>
  );
};

export default InsightCard;
