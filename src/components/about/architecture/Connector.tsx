import { ConnectorProps } from '@/types/about/architecture/connector.type';
import '../../../styles/components/about/architecture/Connector.scss';

const Connector = ({ isAnimated }: ConnectorProps) => {
  return (
    <div className='connector'>
      <span className='connector__line' />

      {isAnimated && (
        <>
          <span className='connector__particle first' />

          <span className='connector__particle second' />

          <span className='connector__particle third' />
        </>
      )}

      <span className='connector__arrow' />
    </div>
  );
};

export default Connector;
