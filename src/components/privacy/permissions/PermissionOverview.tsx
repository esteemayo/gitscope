'use client';

import { motion } from 'framer-motion';
import { PermissionOverviewProps } from '@/types/privacy/permissions/permission.overview.type';

import '../../../styles/components/privacy/permissions/PermissionOverview.scss';

const PermissionOverview = ({ items }: PermissionOverviewProps) => {
  return (
    <motion.aside
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: true }}
      className='permission-overview'
    >
      <header className='permission-overview__header'>
        <span className='permission-overview__header--badge'>
          OAuth Security
        </span>

        <h3 className='permission-overview__header--title'>
          Built around minimum permissions
        </h3>

        <p className='permission-overview__header--subtitle'>
          GitScope only requests the permission necessary to deliver analytics
          while keeping your GitHub account under your complete control.
        </p>
      </header>

      <div className='permission-overview__list'>
        {items.map((item) => {
          const { id, title, description, icon: Icon, accentColor } = item;

          return (
            <article
              key={id}
              className='permission-overview__item'
              style={
                {
                  '--accent-color': accentColor,
                } as React.CSSProperties
              }
            >
              <div className='permission-overview__icon'>
                <Icon
                  size={24}
                  role='img'
                  aria-hidden='true'
                  focusable='false'
                />
              </div>

              <div className='permission-overview__content'>
                <h4 className='permission-overview__content--title'>{title}</h4>

                <p className='permission-overview__content--description'>
                  {description}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </motion.aside>
  );
};

export default PermissionOverview;
