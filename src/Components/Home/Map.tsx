  import React, { useState } from 'react';
  import { GoogleMap, Marker } from '@react-google-maps/api';
  import { useJsApiLoader } from '../../Hooks/useJsApiLoader';

  type TPosition = { lat: number; lng: number };

  interface MapProps {initialPosition: TPosition;}

  const Map: React.FC<MapProps> = ({ initialPosition }) => {
    const [markerPosition, setMarkerPosition] = useState<TPosition>(initialPosition);
    const { isLoaded } = useJsApiLoader();
    const [groupingEnabled, setGroupingEnabled] = useState<boolean>(false);
    const [pingEnabled, setPingEnabled] = useState<boolean>(false);

    const handleMapClick = (event: google.maps.MapMouseEvent) => {
      if (event.latLng) {
        setMarkerPosition({
          lat: event?.latLng.lat(),
          lng: event?.latLng.lng(),
        });
      }
      console.log(markerPosition);
    };

    const toggleGrouping = () => {
      setGroupingEnabled((prevGroupingEnabled) => !prevGroupingEnabled);
    };

    const togglePing = () => {
      setPingEnabled((prevPingEnabled) => !prevPingEnabled);


    };
  

    return (
      <>
        <div className="settings-container">
          <button onClick={toggleGrouping}>
            {groupingEnabled ? 'Disable Grouping' : 'Enable Grouping'}
          </button>
          <button onClick={togglePing}>
            {pingEnabled ? 'Disable Ping' : 'Enable Ping'}
          </button>
         
        </div>
        {isLoaded && (
          <GoogleMap
            center={markerPosition}
            zoom={18}
            mapContainerStyle={{ width: '100%', height: '100%' }}
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
       
      </>
    );
  };

  export default Map;
