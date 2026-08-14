'use client';

import clsx from 'clsx';
import { CheckCircle2, ShieldCheck } from 'lucide-react';

import { PermissionCardProps } from '@/types/privacy/permissions/permission.card.type';
import '../../../styles/components/privacy/permissions/PermissionCard.scss';

const PermissionCard = ({
  title,
  description,
  whyWeNeedIt,
  icon: Icon,
  accentColor,
  status,
  grantedAccess,
  summary,
  className,
  style,
}: PermissionCardProps) => {
  const statusLabel = {
    required: 'Required',
    optional: 'Optional',
    never: 'Never Requested',
  }[status];

  return (
    <article
      className={clsx('permission-card', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <header className='permission-card__header'>
        <div className='permission-card__icon'>
          <Icon size={30} role='img' aria-hidden='true' focusable='false' />
        </div>

        <span
          className={clsx(
            'permission-card__status',
            `permission-card__status--${status}`,
          )}
        >
          <ShieldCheck
            size={18}
            role='img'
            aria-hidden='true'
            focusable='false'
          />

          {statusLabel}
        </span>
      </header>

      <div className='permission-card__body'>
        <h3 className='permission-card__body--title'>{title}</h3>

        <p className='permission-card__body--description'>{description}</p>
      </div>

      <section className='permission-card__reason'>
        <h4 className='permission-card__reason--heading'>Why we need it</h4>

        <p className='permission-card__reason--subheading'>{whyWeNeedIt}</p>
      </section>

      <section className='permission-card__access'>
        <h4 className='permission-card__access--heading'>Granted access</h4>

        <ul className='permission-card__access--list'>
          {grantedAccess.map((item) => {
            const { id, label } = item;

            return (
              <li key={id} className='permission-card__access--item'>
                <CheckCircle2
                  size={16}
                  role='img'
                  aria-hidden='true'
                  focusable='false'
                />

                <span>{label}</span>
              </li>
            );
          })}
        </ul>
      </section>

      <footer className='permission-card__footer'>
        <div className='permission-card__summary'>
          <ShieldCheck
            size={20}
            className='permission-card__summary--icon'
            role='img'
            aria-hidden='true'
            focusable='false'
          />

          <p className='permission-card__summary--text'>{summary}</p>
        </div>
      </footer>
    </article>
  );
};

export default PermissionCard;
