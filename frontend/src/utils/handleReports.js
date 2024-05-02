import UserAxios from "../axios/index.jsx";

const handleDownloadReports = async () => {
    try {
      // Fetch reports from the server
      const response = await UserAxios.get('/reports/all');
      const reports = response.data;
      console.log(reports[3])
      // Convert reports to GeoJSON format
      const geoJsonData = {
        type: 'FeatureCollection',
        features: reports.map(report => ({
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [report.longitude, report.latitude] // Assuming your reports have longitude and latitude properties
          },
          properties: {
            title: report.incident_type + report.id,
            description: report.description,
            address: report.address,
            reportDate:report.custom_date,
            involvedParties: report.involved_parties,
            wasPoliceCalled: report.was_police_called,
            wasBicycleLocked:report.was_bicycle_locked

          }
        }))
      };

      // Create a Blob from the GeoJSON string
      const blob = new Blob([JSON.stringify(geoJsonData, null, 2)], { type: 'application/json' });

      // Create a temporary link element
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'reports.geojson';

      // Trigger the download
      link.click();
    } catch (error) {
      console.error('Error downloading reports:', error);
    }
  };
export default handleDownloadReports