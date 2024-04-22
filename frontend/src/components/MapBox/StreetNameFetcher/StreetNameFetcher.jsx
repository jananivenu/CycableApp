import React, { useState } from 'react';

const StreetNameFetcher = ({ latitude, longitude, accessToken }) => {
  const [streetName, setStreetName] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchStreetName = () => {
    setIsLoading(true);
    setError(null);

    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=${accessToken}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        const features = data.features;
        if (features.length > 0) {
          const streetName = features[0].text;
          setStreetName(streetName);
        } else {
          setStreetName(null);
        }
        setIsLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setIsLoading(false);
      });
  };

  return (
    <div>
      <button onClick={fetchStreetName}>Get Street Name</button>
      {isLoading && <p>Loading...</p>}
      {streetName && <p>Street Name: {streetName}</p>}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default StreetNameFetcher;
