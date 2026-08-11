'use client';

import clsx from 'clsx';
import { Check } from 'lucide-react';

import { ChildrenPrivacyPanelProps } from '@/types/privacy/childrenPrivacy/children.privacy.panel.type';
import '../../../styles/components/privacy/childrenPrivacy/ChildrenPrivacyPanel.scss';

const ChildrenPrivacyPanel = ({
  status,
  title,
  description,
  icon: Icon,
  accentColor,
  points,
  className,
  style,
}: ChildrenPrivacyPanelProps) => {
  return (
    <article
      className={clsx('children-privacy-panel', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <header className='children-privacy-panel__header'>
        <div className='children-privacy-panel__icon'>
          <Icon size={26} role='img' aria-hidden='true' focusable='false' />
        </div>

        <div className='children-privacy-panel__status'>
          <span
            className='children-privacy-panel__status--dot'
            aria-hidden='true'
          />

          <span className='children-privacy-panel__status--value'>
            {status}
          </span>
        </div>
      </header>

      <div className='children-privacy-panel__body'>
        <h3 className='children-privacy-panel__body--title'>{title}</h3>

        <p className='children-privacy-panel__body--description'>
          {description}
        </p>
      </div>

      <div className='children-privacy-panel__points'>
        {points.map((point) => {
          const { id, title, description, icon: Icon } = point;

          return (
            <div key={id} className='children-privacy-panel__point'>
              <div className='children-privacy-panel__point-icon'>
                <Icon
                  size={18}
                  role='img'
                  aria-hidden='true'
                  focusable='false'
                />
              </div>

              <div className='children-privacy-panel__point-content'>
                <h4 className='children-privacy-panel__point-title'>{title}</h4>

                <p className='children-privacy-panel__point-description'>
                  {description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <footer className='children-privacy-panel__footer'>
        <Check
          size={16}
          className='children-privacy-panel__footer--check'
          role='img'
          aria-hidden='true'
          focusable='false'
        />

        <span className='children-privacy-panel__footer--label'>
          Privacy-conscious by design
        </span>
      </footer>
    </article>
  );
};

export default ChildrenPrivacyPanel;
