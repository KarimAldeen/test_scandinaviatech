// pages/HomePage.tsx
import React from 'react';
import Map from '../../Components/Home/Map';
import MapWithLayers from '../../Components/Home/NewMap';

const HomePage: React.FC = () => {
  const initialPosition = { lat: 33.52420995530281, lng: 36.3030410586767 };

  return (
    <div className='HomePage'>
      {/* <Map initialPosition={initialPosition} /> */}
      <MapWithLayers/>
    </div>
  );
};

export default HomePage;


