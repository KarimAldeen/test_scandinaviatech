import React, { useState } from 'react';
import { MapContainer, TileLayer, LayersControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import FullscreenControl from './FullscreenControl';
import LayersPopover from './LayersPopover';
import SettingsPopover from './SettingsPopover';
import ZoomButtons from './ZoomButtons';
import MarkersComponent from './MarkersComponent';

const MapComponent: React.FC = () => {
  const [currentMap, setCurrentMap] = useState<number>(1);
  const [zoom, setZoom] = useState<number>(13);
  const [Group, setGroup] = useState<boolean>(true);
  const [Ping, setPing] = useState<boolean>(true);

  //data from api 
  const Markers: any[] = [
    { position: [51.505, -0.09] },
    { position: [51.5, -0.1] },
    { position: [51.49, -0.05] },
  ];

  // current location 
  const center: [number, number] = [51.505, -0.09];

  const currentMapHandleClick = (currentMap: number) => {
    setCurrentMap(currentMap);
  };

  const handleZoomIn = () => {
    if (zoom < 19) {
      setZoom((prevZoom) => prevZoom + 1);
    }
  };

  const handleZoomOut = () => {
    setZoom((prevZoom) => prevZoom - 1);
  };

  return (
    <div className='NewMap'>
      <MapContainer center={center} key={zoom} zoom={zoom} style={{ height: '500px', width: '100%' }}>
      <LayersControl position='bottomleft' >
          {/* OpenStreetMap */}
          <LayersControl.BaseLayer name='OpenStreetMap' checked={currentMap === 1} >
            <TileLayer
              url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
          </LayersControl.BaseLayer>

          {/* Google Maps */}
          <LayersControl.BaseLayer name='Google Maps' checked={currentMap === 2} >
            <TileLayer
              url='https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
              attribution='&copy; <a href="https://www.google.com/maps">Google Maps</a> contributors'
            />
          </LayersControl.BaseLayer>

          {/* Google Maps Satellite */}
          <LayersControl.BaseLayer name='Google Maps Satellite' checked={currentMap === 3} >
            <TileLayer
              url='https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
              attribution='&copy; <a href="https://www.google.com/maps">Google Maps</a> contributors'
            />
          </LayersControl.BaseLayer>
        </LayersControl>            
        <ZoomButtons handleZoomIn={handleZoomIn} handleZoomOut={handleZoomOut} />

        <LayersPopover currentMap={currentMap} currentMapHandleClick={currentMapHandleClick} />

        <SettingsPopover group={Group} setGroup={setGroup} ping={Ping} setPing={setPing} />

        <div className='Full-container'>
          <FullscreenControl />
        </div>

               <MarkersComponent markers={Markers} grouping={Group} ping={Ping} />

      </MapContainer>
    </div>
  );
};

export default MapComponent;
