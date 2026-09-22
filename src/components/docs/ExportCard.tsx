'use client';

import clsx from 'clsx';

import '../../styles/components/docs/ExportCard.scss';

interface ExportCardProps {
  title: string;
  description: string;
  accentColor: string;
  items: string[];
  className?: string;
  style?: React.CSSProperties;
}

const ExportCard = ({
  title,
  description,
  accentColor,
  items,
  className,
  style,
}: ExportCardProps) => {
  return (
    <article
      className={clsx('export-card', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <span className='export-card__indicator' aria-hidden='true' />

      <div className='export-card__content'>
        <h3 className='export-card__content--title'>{title}</h3>

        <p className='export-card__content--description'>{description}</p>

        <ul>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExportCard;
