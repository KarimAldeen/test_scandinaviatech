
import { useJsApiLoader as useReactGoogleMapsLoader } from '@react-google-maps/api';

const LIBRARIES : any = ['places']; 

export const useJsApiLoader = () => {
  const { isLoaded, loadError } = useReactGoogleMapsLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY || "AIzaSyDZrGqtL1iBm9ZOTdfT-vW-3wpV-LO608M" as string,
    libraries: LIBRARIES,
  });

  return { isLoaded, loadError };
};


