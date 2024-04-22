import React from 'react';
import { Marker } from 'react-map-gl';
import PropTypes from 'prop-types';
import { clusterMarkerStyle } from './clusterMarkerStyle';

const ClusterMarker = ({ locations, handleMarkerClick }) => {
  // Your clustering logic here
  const clusters = []; // Your clustered locations array

  return clusters.map((cluster, index) => (
    <Marker
      key={`cluster-${index}`}
      longitude={cluster.longitude}
      latitude={cluster.latitude}
    >
      <div
        style={clusterMarkerStyle}
        onClick={() => handleMarkerClick(cluster)}
      >
        {cluster.point_count}
      </div>
    </Marker>
  ));
};

ClusterMarker.propTypes = {
  locations: PropTypes.array.isRequired,
  handleMarkerClick: PropTypes.func.isRequired,
};

export default ClusterMarker;
