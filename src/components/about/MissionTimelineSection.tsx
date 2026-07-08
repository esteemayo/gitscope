'use client';

import { motion } from 'framer-motion';
import { MissionTimelineSectionProps } from '@/types/about/mission.timeline.section.type';

import '../../styles/components/about/MissionTimelineSection.scss';

const MissionTimelineSection = ({
  timeline,
  itemVariants,
}: MissionTimelineSectionProps) => {
  return (
    <motion.div variants={itemVariants} className='mission-timeline-section'>
      <header className='mission-timeline-section__header'>
        <span className='mission-timeline-section__header--label'>
          How GitScope Works
        </span>

        <h3 className='mission-timeline-section__header--title'>
          From GitHub repositories to meaningful insights.
        </h3>

        <p className='mission-timeline-section__header--description'>
          GitScope follows a streamlined workflow that transforms raw repository
          information into visual analytics, helping developers understand
          projects faster.
        </p>
      </header>

      <div className='mission-timeline-section__timeline'>
        {timeline.map((step, index) => {
          const { id, icon: Icon, title, description, accentColor } = step;

          return (
            <motion.div
              key={id}
              variants={itemVariants}
              className='mission-timeline-section__timeline-item'
              style={
                {
                  '--accent-color': accentColor,
                } as React.CSSProperties
              }
            >
              <div className='mission-timeline-section__node'>
                <div className='mission-timeline-section__node--icon'>
                  <Icon size={22} />
                </div>

                {index < timeline.length - 1 && (
                  <span className='mission-timeline-section__node--connector'>
                    <span className='mission-timeline-section__node--connector-pulse' />
                  </span>
                )}
              </div>

              <div className='mission-timeline-section__timeline-content'>
                <h4>{title}</h4>

                <p>{description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default MissionTimelineSection;
