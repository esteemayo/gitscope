'use client';

import { motion, Variants } from 'framer-motion';
import '../../../styles/components/about/mission/MissionHighlight.scss';

const MissionHighlight = ({ variants }: { variants: Variants }) => {
  return (
    <motion.div variants={variants} className='mission-hightlight'>
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
