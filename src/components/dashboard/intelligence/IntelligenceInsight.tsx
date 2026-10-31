import clsx from 'clsx';
import { Clock3, Code2, Layers, type LucideIcon, Users2 } from 'lucide-react';

import { IntelligenceInsightProps } from '@/types/dashboard/intelligence/intelligence.insight.type';
import '../../../styles/components/dashboard/intelligence/IntelligenceInsight.scss';

type CustomCSSProperties = React.CSSProperties & {
  '--accent-color': string;
};

const ICONS: Record<'layers' | 'code' | 'users' | 'clock', LucideIcon> = {
  layers: Layers,
  code: Code2,
  users: Users2,
  clock: Clock3,
};

const IntelligenceInsight = ({
  title,
  value,
  description,
  detail,
  icon,
  accentColor,
  className,
  style,
}: IntelligenceInsightProps) => {
  const Icon = ICONS[icon];

  return (
    <article
      className={clsx('intelligence-insight', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as CustomCSSProperties
      }
    >
      <div className='intelligence-insight__header'>
        <span className='intelligence-insight__header--icon'>
          <Icon
            size={18}
            strokeWidth={1.8}
            role='img'
            aria-hidden='true'
            focusable='false'
          />
        </span>

        <h3 className='intelligence-insight__header--title'>{title}</h3>
      </div>

      <div className='intelligence-insight__content'>
        <span className='intelligence-insight__content--value'>{value}</span>

        <p className='intelligence-insight__content--description'>
          {description}
        </p>
      </div>

      <div className='intelligence-insight__footer'>
        <span
          className='intelligence-insight__footer--dot'
          aria-hidden='true'
        />

        <p className='intelligence-insight__footer--detail'>{detail}</p>
      </div>
    </article>
  );
};

export default IntelligenceInsight;
