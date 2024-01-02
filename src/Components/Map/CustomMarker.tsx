import React from 'react';
import { Marker } from 'react-leaflet';
import L from 'leaflet';

interface CustomMarkerProps {
  index: number;
  isPing: boolean;
  position: [number, number];
}

const CustomMarker: React.FC<CustomMarkerProps> = ({ index, isPing, position }) => {
  const classNames = `custom-marker marker-${index} ${isPing ? 'Ping' : ''}`;
  //@ts-ignore
  const icon = new L.divIcon({
    className: classNames,
    html: `<div>
              <img className="Image" style="width: 22px; height: 37px;" src="../Layout/marker.png" alt="Marker"/>
            </div>`,
  });

  return <Marker position={position} icon={icon} />;
};

export default CustomMarker;
