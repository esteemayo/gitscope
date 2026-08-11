'use client';

import clsx from 'clsx';
import { Check } from 'lucide-react';

import { InternationalUsersPanelProps } from '@/types/privacy/internationalUsers/international.users.panel.type';
import '../../../styles/components/privacy/internationalUsers/InternationalUsersPanel.scss';

const InternationalUsersPanel = ({
  status,
  title,
  description,
  icon: Icon,
  accentColor,
  points,
  className,
  style,
}: InternationalUsersPanelProps) => {
  return (
    <article
      className={clsx('international-users-panel', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <header className='international-users-panel__header'>
        <div className='international-users-panel__icon'>
          <Icon size={26} role='img' aria-hidden='true' focusable='false' />
        </div>

        <div className='international-users-panel__status'>
          <span className='international-users-panel__status--dot' />

          <span className='international-users-panel__status--value'>
            {status}
          </span>
        </div>
      </header>

      <div className='international-users-panel__body'>
        <h3 className='international-users-panel__body--title'>{title}</h3>

        <p className='international-users-panel__body--description'>
          {description}
        </p>
      </div>

      <div className='international-users-panel__points'>
        {points.map((point) => {
          const { id, title, description, icon: Icon } = point;

          return (
            <article key={id} className='international-users-panel__point'>
              <div className='international-users-panel__point-icon'>
                <Icon
                  size={18}
                  role='img'
                  aria-hidden='true'
                  focusable='false'
                />
              </div>

              <div className='international-users-panel__point-content'>
                <h4 className='international-users-panel__point-title'>
                  {title}
                </h4>

                <p className='international-users-panel__point-description'>
                  {description}
                </p>
              </div>
            </article>
          );
        })}
      </div>

      <footer className='international-users-panel__footer'>
        <Check
          size={16}
          role='img'
          aria-hidden='true'
          focusable='false'
          className='international-users-panel__footer--check'
        />

        <span className='international-users-panel__footer--text'>
          Designed for a global developer audience
        </span>
      </footer>
    </article>
  );
};

export default InternationalUsersPanel;
