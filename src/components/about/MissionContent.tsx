'use client';

import { motion } from 'framer-motion';
import { MissionContentProps } from '@/types/about/mission.content.type';

import '../../styles/components/about/MissionContent.scss';

const MissionContent = ({
  badge,
  title,
  description,
  principles,
  timeline,
  itemVariants,
}: MissionContentProps) => {
  return (
    <motion.div variants={itemVariants} className='mission-content'>
      <span className='mission-content__badge'>{badge}</span>

      <h2 id='mission-content-title' className='mission-content__title'>
        {title}
      </h2>

      <p className='mission-content__description'>{description}</p>

      <div className='mission-content__highlight'>
        <div className='mission-content__highlight-indicator' />

        <div>
          <h3>More than charts.</h3>

          <p>
            GitScope transform raw GitHub repository data into meaningful
            insights that help developers understand projects, identify trends
            and make informed decisions with confidence.
          </p>
        </div>
      </div>

      <div className='mission-content__principles'>
        {principles.map((principle) => {
          const { id, icon: Icon, title, description, accentColor } = principle;

          return (
            <motion.article
              key={id}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              transition={{
                duration: 0.25,
                ease: [0.645, 0.045, 0.355, 1] as const,
              }}
              className='mission-content__principle-card'
              style={
                {
                  '--accent-color': accentColor,
                } as React.CSSProperties
              }
            >
              <div className='mission-content__principle-icon'>
                <Icon size={24} />
              </div>

              <div className='mission-content__principle-content'>
                <h3>{title}</h3>

                <p>{description}</p>
              </div>
            </motion.article>
          );
        })}
      </div>

      <motion.div
        variants={itemVariants}
        className='mission-content__timeline-section'
      >
        <div className='mission-content__timeline-header'>
          <span>How GitScope Works</span>

          <h3>From GitHub repositories to meaningful insights.</h3>

          <p>
            GitScope follows a streamlined workflow that transforms raw
            repository information into visual analytics, helping developers
            understand projects faster.
          </p>
        </div>

        <div className='mission-content__timeline'>
          {timeline.map((step, index) => {
            const { id, icon: Icon, title, description, accentColor } = step;

            return (
              <motion.div
                key={id}
                variants={itemVariants}
                className='mission-content__timeline-item'
                style={
                  {
                    '--accent-color': accentColor,
                  } as React.CSSProperties
                }
              >
                <div className='mission-content__node'>
                  <div className='mission-content__node--icon'>
                    <Icon size={22} />
                  </div>

                  {index < timeline.length - 1 && (
                    <span className='mission-content__node--connector'>
                      <span className='mission-content__node--connector-pulse' />
                    </span>
                  )}
                </div>

                <div className='mission-content__timeline-content'>
                  <h4>{title}</h4>

                  <p>{description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MissionContent;
