'use client';

import { Check } from 'lucide-react';
import clsx from 'clsx';
import { motion } from 'framer-motion';

import { PolicyUpdateItemProps } from '@/types/privacy/policyUpdatesTimeline/policy.update.item.type';
import '../../../styles/components/privacy/policyUpdatesTimeline/PolicyUpdateItem.scss';

const PolicyUpdateItem = ({
  version,
  date,
  title,
  description,
  changes,
  icon: Icon,
  accentColor,
  isCurrent = false,
  className,
  style,
}: PolicyUpdateItemProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className={clsx('policy-update-item', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <div className='policy-update-item__node' aria-hidden='true'>
        <Icon size={19} role='img' aria-hidden='true' focusable='false' />
      </div>

      <div className='policy-update-item__content'>
        <div className='policy-update-item__meta'>
          <span className='policy-update-item__meta--version'>
            Version {version}
          </span>

          <time dateTime={date} className='policy-update-item__meta--date'>
            {date}
          </time>

          {isCurrent && (
            <span className='policy-update-item__meta--current'>Current</span>
          )}
        </div>

        <div className='policy-update-item__card'>
          <div className='policy-update-item__card-header'>
            <div className='policy-update-item__title-group'>
              <h3 className='policy-update-item__title'>{title}</h3>

              <p className='policy-update-item__description'>{description}</p>
            </div>
          </div>

          {changes.length > 0 && (
            <ul
              className='policy-update-item__changes'
              aria-label={`Changes in version ${version}`}
            >
              {changes.map((change) => (
                <li key={change} className='policy-update-item__change'>
                  <span className='policy-update-item__change--icon'>
                    <Check
                      size={11}
                      role='img'
                      aria-hidden='true'
                      focusable='false'
                    />
                  </span>

                  <span className='policy-update-item__change--value'>
                    {change}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default PolicyUpdateItem;
