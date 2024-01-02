// ZoomButtons.tsx
import React from 'react';
import { ImZoomIn, ImZoomOut } from 'react-icons/im';

interface ZoomButtonsProps {
  handleZoomIn: () => void;
  handleZoomOut: () => void;
}

const ZoomButtons: React.FC<ZoomButtonsProps> = ({ handleZoomIn, handleZoomOut }) => {
  
  return (
    <div className='zoom-container'>
      <div>
        <button className='ImZoomIn' onClick={handleZoomIn}>
          <ImZoomIn />
        </button>
        <button className='ImZoomOut' onClick={handleZoomOut}>
          <ImZoomOut />
        </button>
      </div>
    </div>
  );
};

export default ZoomButtons;
