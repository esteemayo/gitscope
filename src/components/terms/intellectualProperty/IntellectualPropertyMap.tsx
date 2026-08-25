'use client';

import IntellectualPropertyLayer from './IntellectualPropertyLayer';
import { IntellectualPropertyMapProps } from '@/types/terms/intellectualProperty/intellectual.property.map.type';

import '../../../styles/components/terms/intellectualProperty/IntellectualPropertyMap.scss';

const IntellectualPropertyMap = ({ layers }: IntellectualPropertyMapProps) => {
  return (
    <section
      className='intellectual-property-map'
      aria-labelledby='intellectual-property-map-title'
    >
      <div className='intellectual-property-map__header'>
        <div className='intellectual-property-map__heading'>
          <span className='intellectual-property-map__heading--label'>
            Ownership map
          </span>

          <h3
            id='intellectual-property-map-title'
            className='intellectual-property-map__heading--title'
          >
            Who owns what?
          </h3>
        </div>

        <p className='intellectual-property-map__description'>
          Different materials connected to GitScope belong to different rights
          holders.
        </p>
      </div>

      <div className='intellectual-property-map__grid'>
        {layers.map((layer, index) => (
          <IntellectualPropertyLayer key={layer.id} {...layer} index={index} />
        ))}
      </div>
    </section>
  );
};

export default IntellectualPropertyMap;
