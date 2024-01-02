import React, { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';

interface ProviderContainerProps {
  children: ReactNode;
}

const ProviderContainer: React.FC<ProviderContainerProps> = ({ children }) => {
  return (
    <BrowserRouter basename='/'>
      {children}
    </BrowserRouter>
  );
};

export default ProviderContainer;
