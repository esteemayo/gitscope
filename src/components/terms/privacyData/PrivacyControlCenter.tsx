'use client';

import { ShieldCheck } from 'lucide-react';

import PrivacyControl from './PrivacyControl';
import { PrivacyControlCenterProps } from '@/types/terms/privacyData/privacy.control.center.type';

import '../../../styles/components/terms/privacyData/PrivacyControlCenter.scss';

const PrivacyControlCenter = ({ controls }: PrivacyControlCenterProps) => {
  return (
    <section
      className='privacy-control-center'
      aria-labelledby='privacy-control-center-title'
    >
      <div className='privacy-control-center__heading'>
        <span className='privacy-control-center__heading--label'>
          Protection architecture
        </span>

        <h3
          id='privacy-control-center-title'
          className='privacy-control-center__heading--title'
        >
          Privacy controls across GitScope
        </h3>
      </div>

      <div className='privacy-control-center__visual'>
        <div className='privacy-control-center__orb' aria-hidden='true'>
          <div className='privacy-control-center__orb-ring'>
            <div className='privacy-control-center__core'>
              <ShieldCheck
                size={28}
                strokeWidth={1.8}
                className='privacy-control-center__core--icon'
                role='img'
                aria-hidden='true'
                focusable='false'
              />

              <span className='privacy-control-center__core--label'>
                Protected
              </span>
            </div>
          </div>
        </div>

        <div className='privacy-control-center__controls'>
          {controls.map((control, index) => (
            <PrivacyControl key={control.id} {...control} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrivacyControlCenter;
