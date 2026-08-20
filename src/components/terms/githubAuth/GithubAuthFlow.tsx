'use client';

import { motion } from 'framer-motion';
import clsx from 'clsx';
import { ArrowRight } from 'lucide-react';

import { GithubAuthFlowProps } from '@/types/terms/githubAuth/github.auth.flow.type';
import '../../../styles/components/terms/githubAuth/GithubAuthFlow.scss';

const GithubAuthFlow = ({
  title,
  description,
  steps,
  className,
  style,
}: GithubAuthFlowProps) => {
  return (
    <div className='github-auth-flow'>
      <header className='github-auth-flow__header'>
        <div className='github-auth-flow__wrapper'>
          <span className='github-auth-flow__wrapper--label'>
            Authentication flow
          </span>

          <h3 className='github-auth-flow__wrapper--title'>{title}</h3>
        </div>

        <p className='github-auth-flow__description'>{description}</p>
      </header>

      <ol className='github-auth-flow__steps'>
        {steps.map((step, index) => {
          const { id, title, description, icon: Icon, accentColor } = step;

          return (
            <motion.li
              key={id}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={clsx('github-auth-flow__step', className)}
              style={
                {
                  '--accent-color': accentColor,
                  ...style,
                } as React.CSSProperties
              }
            >
              <div className='github-auth-flow__step-marker'>
                <span>{String(index + 1).padStart(2, '0')}</span>
              </div>

              <div className='github-auth-flow__step-icon'>
                <Icon
                  size={20}
                  strokeWidth={1.8}
                  role='img'
                  aria-hidden='true'
                  focusable='false'
                />
              </div>

              <div className='github-auth-flow__step-content'>
                <h4 className='github-auth-flow__step-content--title'>
                  {title}
                </h4>

                <p className='github-auth-flow__step-content--description'>
                  {description}
                </p>
              </div>

              {index < steps.length - 1 && (
                <ArrowRight
                  size={16}
                  strokeWidth={1.8}
                  className='github-auth-flow__connector'
                  role='img'
                  aria-hidden='true'
                  focusable='false'
                />
              )}
            </motion.li>
          );
        })}
      </ol>
    </div>
  );
};

export default GithubAuthFlow;
