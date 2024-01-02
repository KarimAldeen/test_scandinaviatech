import React from 'react';
import MarkerClusterGroup from 'react-leaflet-cluster';
import CustomMarker from './CustomMarker';

interface MarkersComponentProps {
  markers: any[];
  grouping: boolean;
  ping: boolean;
}

const MarkersComponent: React.FC<MarkersComponentProps> = ({ markers, grouping, ping }) => {
  return (
    <div className='Markers'>
      {!grouping ? (
        markers?.map((item, index) => (
          <div key={index}>
            <CustomMarker index={index} isPing={ping} position={item?.position} />
          </div>
        ))
      ) : (
        <MarkerClusterGroup chunkedLoading>
          {markers.map((address, index) => (
            <div key={index}>
              <CustomMarker index={index} isPing={ping} position={address?.position} />
            </div>
          ))}
        </MarkerClusterGroup>
      )}
    </div>
  );
};

export default MarkersComponent;
