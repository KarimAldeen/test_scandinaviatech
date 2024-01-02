import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, LayersControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { FullscreenControl } from 'react-leaflet-fullscreen';
import 'react-leaflet-fullscreen/styles.css';
import MarkerClusterGroup from "react-leaflet-markercluster";
import "react-leaflet-markercluster/dist/styles.min.css";
import { Button, Popover } from 'antd';
import { FaLayerGroup } from "react-icons/fa";

import { IoSettings } from "react-icons/io5";


const App = () => {
  const [CurrentMap, setCurrentMap] = useState(1)
  const markers = [
    { position: [51.505, -0.09] },
    { position: [51.5, -0.1] },
    { position: [51.49, -0.05] },
  ];

  const center = [51.505, -0.09];
  const customIcon = new L.Icon({
    iconUrl: '../Layout/marker.png',
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30],
  });

  const CurrentMapHandelClick =(CurrentMap)=>{
      setCurrentMap(CurrentMap)
  }
  const content = (
    <div className='layers-content'>
   <div> <img onClick={()=>CurrentMapHandelClick(1)} className={CurrentMap === 1 ? "ActiveImage" : ""} src="../Layout/OpenStreetMap.png" alt="" />  <h6>Open Street Map</h6> </div>
   <div> <img onClick={()=>CurrentMapHandelClick(2)} className={CurrentMap === 2 ? "ActiveImage" : ""} src="../Layout/GoogleMap.png" alt="" />  <h6>Google Map</h6> </div>
   <div> <img onClick={()=>CurrentMapHandelClick(3)} className={CurrentMap === 3 ? "ActiveImage" : ""} src="../Layout/googleSatellite.png" alt="" />  <h6>google Satellite</h6> </div>
  
    </div>
  );
  
  return (
    <div className="NewMap">
      <MapContainer center={center} zoom={13} style={{ height: '500px', width: '100%' }}>
        <LayersControl position="bottomleft" className="LayersControl">
          {/* OpenStreetMap */}
          <LayersControl.BaseLayer name="OpenStreetMap" checked={CurrentMap === 1 ? true :  false}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
          </LayersControl.BaseLayer>

          {/* Google Maps */}
          <LayersControl.BaseLayer name="Google Maps" checked={CurrentMap === 2 ? true :  false}>
            <TileLayer
              url="https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
              attribution='&copy; <a href="https://www.google.com/maps">Google Maps</a> contributors'
            />
          </LayersControl.BaseLayer>

          {/* Google Maps Satellite */}
          <LayersControl.BaseLayer name="Google Maps Satellite" checked={CurrentMap === 3 ? true :  false}>
            <TileLayer
              url="https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"
              attribution='&copy; <a href="https://www.google.com/maps">Google Maps</a> contributors'
            />
          </LayersControl.BaseLayer>

          {/* Custom Overlay with Content */}
       
        </LayersControl>
       <div className='layers-container'>
       <Popover content={content} trigger="click">
       <Button icon={<FaLayerGroup />} />
        </Popover>
       </div>
       <div className='settings-container'>
       <Popover content={content} trigger="click">
       <Button icon={<IoSettings />} />
        </Popover>
       </div>


        {/* Marker for the center */}
        <Marker position={center} icon={customIcon}>
          <Popup>
            A pretty CSS3 popup. Easily customizable. <br />
            Click the marker to visit the website.
          </Popup>
        </Marker>

        <FullscreenControl />
      </MapContainer>
    </div>
  );
};

export default App;
