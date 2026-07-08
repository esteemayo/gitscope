import '../../styles/components/about/MissionHighlight.scss';

const MissionHighlight = () => {
  return (
    <div className='mission-hightlight'>
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
    </div>
  );
};

export default MissionHighlight;
