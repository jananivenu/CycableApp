import React from 'react';
import { Source, Layer } from 'react-map-gl';

const Heatmap = () => {
  const dummyLocations = [
    { latitude: 47.9, longitude: 8.0, eventType: 'Bicycle accident' },
    { latitude: 47.5, longitude: 8.0, eventType: 'Dangerous location' },
    { latitude: 47.8, longitude: 8.5, eventType: 'Bicycle theft' },
    { latitude: 48.0, longitude: 7.8, eventType: 'Violations' },
    { latitude: 47.1, longitude: 9.20, eventType: 'Bicycle accident' },
    { latitude: 47.5, longitude: 8.0, eventType: 'Dangerous location' },
    { latitude: 45.9, longitude: 9.5, eventType: 'Bicycle theft' },
    { latitude: 48.8588897, longitude: 2.320041, eventType: 'Violations' },
    { latitude: 48.844037819391104, longitude: 2.264264463535315, eventType: 'Bicycle accident' },
    { latitude: 48.81831591253712, longitude: 2.368460237136847, eventType: 'Dangerous location' },
    { latitude: 48.818567591253712, longitude: 2.264265553535315, eventType: 'Bicycle theft' },
    { latitude: 48.83831591693712, longitude: 2.289164463535315, eventType: 'Violations' },
    { latitude: 48.90039963635, longitude: 2.5371829978141845, eventType: 'Bicycle accident' },
    { latitude: 48.900125567635, longitude: 2.4371829978141845, eventType: 'Dangerous location' },
    { latitude: 48.9001253363635, longitude: 2.3891829978141845, eventType: 'Bicycle theft' },
    { latitude: 48.99055553363635, longitude: 2.3371826788141845, eventType: 'Violations' },
    { latitude: 48.98214714561775, longitude: 2.3233793345604003, eventType: 'Bicycle accident' },
    { latitude: 48.96214714561775, longitude: 2.2933793345604003, eventType: 'Dangerous location' },
    { latitude: 48.997214711775, longitude: 2.2633793345604003, eventType: 'Bicycle theft' },
    { latitude: 48.667214714561775, longitude: 2.3533743345604003, eventType: 'Violations' },
    { latitude: 48.89815697447773, longitude: 2.339980033985144, eventType: 'Bicycle accident' },
    { latitude: 48.87775697447773, longitude: 2.399980033985144, eventType: 'Dangerous location' },
    { latitude: 48.86635697447773, longitude: 2.312980033985144, eventType: 'Bicycle theft' },
    { latitude: 48.9865697447773, longitude: 2.32280033985144, eventType: 'Violations' },
  ];
  console.log('Rendering Heatmap:', dummyLocations);
  return (
    <>
      {/* Heatmap Source */}
      <Source id="heatmap-source" type="geojson" data={{ type: 'FeatureCollection', features: dummyLocations }}>
        {/* Heatmap Layer */}
        <Layer
          id="heatmap-layer"
          type="heatmap"
          source="heatmap-source"
          maxZoom={9}
          paint={{
            'heatmap-weight': ['interpolate', ['linear'], ['get', 'mag'], 0, 0, 6, 1],
            'heatmap-intensity': ['interpolate', ['linear'], ['zoom'], 0, 1, 9, 3],
            'heatmap-color': [
              'interpolate',
              ['linear'],
              ['heatmap-density'],
              0,
              'rgba(33,102,172,0)',
              0.2,
              'rgb(103,169,207)',
              0.4,
              'rgb(209,229,240)',
              0.6,
              'rgb(253,219,199)',
              0.8,
              'rgb(239,138,98)',
              1,
              'rgb(178,24,43)',
            ],
            'heatmap-radius': ['interpolate', ['linear'], ['zoom'], 0, 2, 9, 20],
            'heatmap-opacity': ['interpolate', ['linear'], ['zoom'], 7, 1, 9, 0],
          }}
        />
      </Source>
    </>
  );
};

export default Heatmap;
