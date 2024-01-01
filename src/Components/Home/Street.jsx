import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup  } from 'react-leaflet'
const Street = () => {
  const [osmPosition] = useState({ lat: 33.4972367, lng: 36.2429607 });

  return (
    <div className='Street'>
<MapContainer center={osmPosition} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={osmPosition}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
    </div>
  );
};

export default Street;
