import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, LayersControl, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Button, Popover, Switch } from 'antd';
import { FaLayerGroup } from 'react-icons/fa';
import { IoSettings } from 'react-icons/io5';
import { ImZoomIn, ImZoomOut } from 'react-icons/im';
import { MdFullscreen, MdFullscreenExit } from 'react-icons/md';
import MarkerClusterGroup from 'react-leaflet-cluster'


const FullscreenControl = () => {
  const map = useMap();

  const handleFullscreenToggle = () => {
    const container = map.getContainer();

    if (container.requestFullscreen) {
      container.requestFullscreen();
    } else if (container.mozRequestFullScreen) {
      container.mozRequestFullScreen();
    } else if (container.webkitRequestFullscreen) {
      container.webkitRequestFullscreen();
    } else if (container.msRequestFullscreen) {
      container.msRequestFullscreen();
    }
  };

  return (
    <Button shape='circle' icon={<MdFullscreen />} onClick={handleFullscreenToggle} />
  );
};

const App = () => {
  const [currentMap, setCurrentMap] = useState(1);
  const [zoom, setZoom] = useState(13);
  const Markares = [
    { position: [51.505, -0.09] },
    { position: [51.5, -0.1] },
    { position: [51.49, -0.05] },
  ];
  const center = [51.505, -0.09];
  const customIcon = new L.Icon({
    iconUrl: '../Layout/marker.png',
    iconSize: [15,30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30],
  });

  const currentMapHandleClick = (currentMap) => {
    setCurrentMap(currentMap);
  };

  const handleZoomIn = () => {
    setZoom((prevZoom) => prevZoom + 1);
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
  const [Group, setGroup] = useState(false)

  const onChangeGrouping = (checked) => {
    console.log(`switch to ${checked}`);
    setGroup(!Group)

  }
  const onChangePing = (checked) => {
    console.log(`switch to ${checked}`);
    setGroup(!Group)

  }
  const Settingcontent = (
    <div className='setting-content'>

      <div>
        <Switch onChange={onChangeGrouping} />
        <h6>
          Markers Grouping</h6>
      </div>
      <div>
        <Switch onChange={onChangePing} />
        <h6>
          Markers Ping Angle</h6>
      </div>

    </div>
  );

  return (
    <div className='NewMap'>
      <MapContainer center={center} key={zoom} zoom={zoom} style={{ height: '500px', width: '100%' }}>
        <LayersControl position='bottomleft' className='LayersControl'>
          {/* OpenStreetMap */}
          <LayersControl.BaseLayer name='OpenStreetMap' checked={currentMap === 1} onChange={() => currentMapHandleClick(1)}>
            <TileLayer
              url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
          </LayersControl.BaseLayer>

          {/* Google Maps */}
          <LayersControl.BaseLayer name='Google Maps' checked={currentMap === 2} onChange={() => currentMapHandleClick(2)}>
            <TileLayer
              url='https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
              attribution='&copy; <a href="https://www.google.com/maps">Google Maps</a> contributors'
            />
          </LayersControl.BaseLayer>

          {/* Google Maps Satellite */}
          <LayersControl.BaseLayer name='Google Maps Satellite' checked={currentMap === 3} onChange={() => currentMapHandleClick(3)}>
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
        {
          !Group  ? (
            Markares?.map((item, index) => {
              return(
                <Marker position={item?.position} icon={customIcon}>
                  <Popup>Hello</Popup>
                </Marker>
              )
            })
          ) :(
            <MarkerClusterGroup
            chunkedLoading
          >
            {(Markares).map((address, index) => (
              <Marker
                key={index}
                position={address?.position}
                title={index}
                icon={customIcon}
              ></Marker>
            ))}
          </MarkerClusterGroup>
          )
        }
      


      </MapContainer>
    </div>
  );
};

export default App;
