import clsx from 'clsx';
import { Clock3, Code2, Layers, type LucideIcon, Users2 } from 'lucide-react';

import '../../../styles/components/dashboard/intelligence/IntelligenceCard.scss';

type CustomCSSProperties = React.CSSProperties & {
  '--accent-color': string;
};

interface IntelligenceCardProps {
  className?: string;
  style?: React.CSSProperties;
}

const ICONS: Record<'layers' | 'code' | 'users' | 'clock', LucideIcon> = {
  layers: Layers,
  code: Code2,
  users: Users2,
  clock: Clock3,
};

const IntelligenceCard = ({ className, style }: IntelligenceCardProps) => {
  return (
    <article
      className={clsx('intelligence-card', className)}
      style={
        {
          '--accent-color': '',
          ...style,
        } as CustomCSSProperties
      }
    >
      <div className='intelligence-card__header'>
        <span className='intelligence-card__header--icon'>
          Icon
          {/* <Icon strokeWidth={1.8} role='img' aria-hidden='true' focusable='false'/> */}
        </span>

        <h3 className='intelligence-card__header--title'>title</h3>
      </div>

      <div className='intelligence-card__content'>
        <span className='intelligence-card__content--value'>value</span>

        <p className='intelligence-card__content--description'>description</p>
      </div>

      <div className='intelligence-card__footer'>
        <span className='intelligence-card__footer--dot' aria-hidden='true' />

        <p className='intelligence-card__footer--detail'>detail</p>
      </div>
    </article>
  );
};

export default IntelligenceCard;
