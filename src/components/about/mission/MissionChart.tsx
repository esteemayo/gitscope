import '../../../styles/components/about/mission/MissionChart.scss';

const MissionChart = () => {
  return (
    <div className='mission-chart'>
      {[...Array(8)].map((_, index) => (
        <span key={index} className='mission-chart__bar' />
      ))}
    </div>
  );
};

export default MissionChart;
