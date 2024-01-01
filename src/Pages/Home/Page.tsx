import React, { useState } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const Page = () => {
  const [markerPosition, setMarkerPosition] = useState({ lat: 33.4972367, lng: 36.2429607 });
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey:"AIzaSyDZrGqtL1iBm9ZOTdfT-vW-3wpV-LO608M", 
    libraries: ['places'],
  });

  const handleMapClick = (event:any) => {
    setMarkerPosition({
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    });
  };

  return (
    <div className='HomePage'>
      {isLoaded && (
        <GoogleMap
          center={markerPosition}
          zoom={18}
          mapContainerStyle={{ width: '90%', height: '90vh', margin: 'auto' }}
          onClick={handleMapClick}
        >
          <Marker
            position={markerPosition}
            icon={{
              url: 'Layout/marker.png',
              scaledSize: new window.google.maps.Size(40, 40),
            }}
          />
        </GoogleMap>
      )}
    </div>
  );
};

export default Page;
