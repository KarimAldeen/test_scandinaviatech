import React from 'react';
import { Button, Popover } from 'antd';
import { FaLayerGroup } from 'react-icons/fa';
import { MapTypeEnum } from '../../enums/MapTypeEnum';

interface LayersPopoverProps {
  currentMap: number;
  currentMapHandleClick: (currentMap: number) => void;
}


const LayersPopover: React.FC<LayersPopoverProps> = ({ currentMap, currentMapHandleClick }) => {

    const content = (
        <div className='layers-content'>
          <div>
            <img onClick={() => currentMapHandleClick(MapTypeEnum.OPEN_STREET_MAP)} className={currentMap === 1 ? 'ActiveImage' : ''} src='../Layout/OpenStreetMap.png' alt='' />
            <h6>Open Street Map</h6>
          </div>
          <div>
            <img onClick={() => currentMapHandleClick(MapTypeEnum.GOOGLE_MAPE)} className={currentMap === 2 ? 'ActiveImage' : ''} src='../Layout/GoogleMap.png' alt='' />
            <h6>Google Map</h6>
          </div>
          <div>
            <img onClick={() => currentMapHandleClick(MapTypeEnum.GOOGLE_SATILITE)} className={currentMap === 3 ? 'ActiveImage' : ''} src='../Layout/googleSatellite.png' alt='' />
            <h6>Google Satellite</h6>
          </div>
        </div>
      );  
  return (
    <div className='layers-container'>
      <Popover content={content} trigger='click'>
        <Button shape='circle' icon={<FaLayerGroup />} />
      </Popover>
    </div>
  );
};

export default LayersPopover;
