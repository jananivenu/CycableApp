const createHeatmapData = (reports) => {
    return {
      type: 'FeatureCollection',
      features: reports.map((report) => ({
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [report.longitude, report.latitude],
        },
        properties: {
          incident_type: report.incident_type,
        },
      })),
    };
  };
  
  export default createHeatmapData;