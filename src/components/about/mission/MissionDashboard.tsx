'use client';

import { motion } from 'framer-motion';

import MissionChartCard from './MissionChartCard';
import MissionMetrics from './MissionMetrics';
import MissionHealthCard from './MissionHealthCard';

import { MissionDashboardProps } from '@/types/about/mission/mission.dashboard.type';
import '../../../styles/components/about/mission/MissionDashboard.scss';

const MissionDashboard = ({
  metrics,
  healthProgress,
}: MissionDashboardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      }}
      className='mission-dashboard'
    >
      <div className='mission-dashboard__header'>
        <div className='mission-dashboard__window-controls'>
          {[...Array(3)].map((_, index) => (
            <span key={index} />
          ))}
        </div>

        <div className='mission-dashboard__title'>GitScope Analytics</div>

        <div className='mission-dashboard__status'>Live</div>
      </div>

      <div className='mission-dashboard__body'>
        <MissionChartCard />

        <MissionMetrics metrics={metrics} />

        <MissionHealthCard healthProgress={healthProgress} />
      </div>
    </motion.div>
  );
};

export default MissionDashboard;
