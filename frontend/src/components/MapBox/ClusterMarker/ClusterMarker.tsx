import * as React from 'react';
import { useRef } from 'react';
import { Map, Source, Layer } from 'react-map-gl';
import { clusterLayer, clusterCountLayer, unclusteredPointLayer } from './layers';
import type { MapRef } from 'react-map-gl';


const MAPBOX_TOKEN = 'pk.eyJ1IjoibWloYWVscyIsImEiOiJjbHYxb3E2Z3UwMjBzMmtwZnNncTdtOHE4In0.l_O-fNcndV_e2YXxqna6zg';

export default function ClusterMarker() {
  const mapRef = useRef<MapRef>(null);

  const onClick = event => {
    const feature = event.features[0];
    const [longitude, latitude] = feature.geometry.coordinates;

    mapRef.current.easeTo({
      center: [longitude, latitude],
      zoom: mapRef.current.getZoom(),
      duration: 500
    });
  };

  return (
    <>
      <Map
        initialViewState={{
          latitude: 40.67,
          longitude: -103.59,
          zoom: 3
        }}
        mapStyle="mapbox://styles/mapbox/dark-v9"
        mapboxAccessToken={MAPBOX_TOKEN}
        interactiveLayerIds={[clusterLayer.id]}
        onClick={onClick}
        ref={mapRef}
      >
        <Source
          id="dummy-locations"
          type="geojson"
          data={{
            type: 'FeatureCollection',
            features: dummyLocations.map((location, index) => ({
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: [location.longitude, location.latitude]
              },
              properties: {
                eventType: location.eventType
              }
            }))
          }}
          cluster={true}
          clusterMaxZoom={14}
          clusterRadius={50}
        >
          <Layer {...clusterLayer} />
          <Layer {...clusterCountLayer} />
          <Layer {...unclusteredPointLayer} />
        </Source>
      </Map>
      
    </>
  );
}

