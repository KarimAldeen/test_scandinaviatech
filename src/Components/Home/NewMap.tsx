import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, LayersControl, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Button, Popover, Switch } from 'antd';
import { FaLayerGroup } from 'react-icons/fa';
import { IoSettings } from 'react-icons/io5';
import { ImZoomIn, ImZoomOut } from 'react-icons/im';
import { MdFullscreen } from 'react-icons/md';
import MarkerClusterGroup from 'react-leaflet-cluster';

interface MarkersProps {
  position: [number, number];
}

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

const App: React.FC = () => {
  const [currentMap, setCurrentMap] = useState<number>(1);
  const [zoom, setZoom] = useState<number>(13);

  const Markares: MarkersProps[] = [
    { position: [51.505, -0.09] },
    { position: [51.5, -0.1] },
    { position: [51.49, -0.05] },
  ];

  const center: [number, number] = [51.505, -0.09];

  const customIcon = (index: number, isPing: boolean) => {
    const classNames = `custom-marker marker-${index} ${isPing ? 'Ping' : ''}`;
    //@ts-ignore
    return new L.divIcon({
      className: classNames,
      html: `<div>
              <img className="Image" style="width: 22px; height: 37px;" src="../Layout/marker.png" alt="Marker"/>
            </div>`,
    });
  };

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

  const content = (
    <div className='layers-content'>
      <div>
        <img onClick={() => currentMapHandleClick(1)} className={currentMap === 1 ? 'ActiveImage' : ''} src='../Layout/OpenStreetMap.png' alt='' />
        <h6>Open Street Map</h6>
      </div>
      <div>
        <img onClick={() => currentMapHandleClick(2)} className={currentMap === 2 ? 'ActiveImage' : ''} src='../Layout/GoogleMap.png' alt='' />
        <h6>Google Map</h6>
      </div>
      <div>
        <img onClick={() => currentMapHandleClick(3)} className={currentMap === 3 ? 'ActiveImage' : ''} src='../Layout/googleSatellite.png' alt='' />
        <h6>Google Satellite</h6>
      </div>
    </div>
  );

  const [Group, setGroup] = useState<boolean>(false);
  const [Ping, setPing] = useState<boolean>(false);

  const onChangeGrouping = (checked: boolean) => {
    console.log(`switch to ${checked}`);
    setGroup(!Group);
  };

  const onChangePing = (checked: boolean) => {
    console.log(`switch to ${checked}`);
    setPing(!Ping);
  };

  const Settingcontent = (
    <div className='setting-content'>
      <div>
        <Switch onChange={onChangeGrouping} />
        <h6>Markers Grouping</h6>
      </div>
      <div>
        <Switch onChange={onChangePing} />
        <h6>Markers Ping Angle</h6>
      </div>
    </div>
  );

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

        <div className='layers-container'>
          <Popover content={content} trigger='click'>
            <Button shape='circle' icon={<FaLayerGroup />} />
          </Popover>
        </div>

        <div className='settings-container'>
          <Popover content={Settingcontent} trigger='click'>
            <Button shape='circle' icon={<IoSettings />} />
          </Popover>
        </div>

        <div className='Full-container'>
          <FullscreenControl />
        </div>
        <div className='Markers'>
          {!Group ? (
            Markares?.map((item, index) => (
              <div key={index}>
                <Marker  position={item?.position} icon={customIcon(index, Ping)}>
                  {/* Marker content */}
                </Marker>
              </div>
            ))
          ) : (
            <MarkerClusterGroup chunkedLoading>
              {Markares.map((address, index) => (
                <div key={index}>
                  <Marker key={index} position={address?.position} icon={customIcon(index,Ping)}>
                  </Marker>
                </div>
              ))}
            </MarkerClusterGroup>
          )}
        </div>
      </MapContainer>
    </div>
  );
};

export default App;
