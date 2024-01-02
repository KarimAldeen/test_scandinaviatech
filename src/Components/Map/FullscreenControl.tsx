import React from 'react';
import { Button } from 'antd';
import { MdFullscreen } from 'react-icons/md';
import { useMap } from 'react-leaflet';

const FullscreenControl: React.FC = () => {
  const map = useMap();

  const handleFullscreenToggle = () => {
    const container = map.getContainer() as HTMLElement;
    const doc = window.document as Document;
  
    if (
      !doc.fullscreenElement &&
      !(doc as any).mozFullScreenElement &&
      !(doc as any).webkitFullscreenElement &&
      !(doc as any).msFullscreenElement
    ) {
      if (container.requestFullscreen) {
        container.requestFullscreen();
      } else if ((container as any).mozRequestFullScreen) {
        (container as any).mozRequestFullScreen();
      } else if ((container as any).webkitRequestFullscreen) {
        (container as any).webkitRequestFullscreen();
      } else if ((container as any).msRequestFullscreen) {
        (container as any).msRequestFullscreen();
      }
    } else {
      if (doc.exitFullscreen) {
        doc.exitFullscreen();
      } else if ((doc as any).mozCancelFullScreen) {
        (doc as any).mozCancelFullScreen();
      } else if ((doc as any).webkitExitFullscreen) {
        (doc as any).webkitExitFullscreen();
      } else if ((doc as any).msExitFullscreen) {
        (doc as any).msExitFullscreen();
      }
    }
  };

  return (
    <Button shape='circle' icon={<MdFullscreen />} onClick={handleFullscreenToggle} />
  );
};

export default FullscreenControl;
