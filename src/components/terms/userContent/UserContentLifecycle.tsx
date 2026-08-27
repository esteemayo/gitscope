'use client';

import { motion } from 'framer-motion';
import { UserContentLifecycleProps } from '@/types/terms/userContent/user.content.lifecycle.type';

import '../../../styles/components/terms/userContent/UserContentLifecycle.scss';

const UserContentLifecycle = ({ steps }: UserContentLifecycleProps) => {
  return (
    <section
      className='user-content-lifecycle'
      aria-labelledby='user-content-lifecycle-title'
    >
      <div className='user-content-lifecycle__header'>
        <div className='user-content-lifecycle__heading'>
          <span className='user-content-lifecycle__heading--label'>
            Content lifecycle
          </span>

          <h3
            id='user-content-lifecycle-title'
            className='user-content-lifecycle__heading--title'
          >
            How your content moves through GitScope
          </h3>
        </div>

        <p className='user-content-lifecycle__heading--description'>
          The relationship between your content and the service follows a
          defined application flow.
        </p>
      </div>

      <div className='user-content-lifecycle__track'>
        {steps.map((step, index) => {
          const {
            id,
            eyebrow,
            title,
            description,
            icon: Icon,
            accentColor,
          } = step;

          return (
            <div className='user-content-lifecycle__node' key={id}>
              <motion.article
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className='user-content-lifecycle__step'
                style={
                  {
                    '--accent-color': accentColor,
                  } as React.CSSProperties
                }
              >
                <div className='user-content-lifecycle__top'>
                  <span className='user-content-lifecycle__number'>
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <div className='user-content-lifecycle__icon'>
                    <Icon
                      size={18}
                      strokeWidth={1.8}
                      role='img'
                      aria-hidden='true'
                      focusable='false'
                    />
                  </div>
                </div>

                <span className='user-content-lifecycle__eyebrow'>
                  {eyebrow}
                </span>

                <div className='user-content-lifecycle__content'>
                  <h4 className='user-content-lifecycle__content--title'>
                    {title}
                  </h4>

                  <p className='user-content-lifecycle__content--description'>
                    {description}
                  </p>
                </div>
              </motion.article>

              {index < steps.length - 1 && (
                <div
                  className='user-content-lifecycle__connector'
                  aria-hidden='true'
                >
                  <span />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default UserContentLifecycle;
