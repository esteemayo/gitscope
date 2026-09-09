'use client';

import { motion } from 'framer-motion';
import '../../../styles/components/about/mission/MissionHighlight.scss';

const MissionHighlight = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className='mission-hightlight'
    >
      <div className='mission-hightlight__indicator' />

      <div className='mission-hightlight__content'>
        <h3 className='mission-hightlight__content--heading'>
          More than charts.
        </h3>

        <p className='mission-hightlight__content--description'>
          GitScope transform raw GitHub repository data into meaningful insights
          that help developers understand projects, identify trends and make
          informed decisions with confidence.
        </p>
      </div>
    </motion.div>
  );
};

export default MissionHighlight;
