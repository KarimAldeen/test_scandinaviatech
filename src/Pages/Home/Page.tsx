// pages/HomePage.tsx
import React from 'react';
import Map from '../../Components/Home/Map';

const HomePage: React.FC = () => {
  const initialPosition = { lat: 33.4972367, lng: 36.2429607 };

  return (
    <div className='HomePage'>
      <Map initialPosition={initialPosition} />
    </div>
  );
};

export default HomePage;
