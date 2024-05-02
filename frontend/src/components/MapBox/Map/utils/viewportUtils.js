const calculateViewportBounds = (viewport) => {
    const buffer = 1.0;
    return {
      south: viewport.latitude - buffer,
      north: viewport.latitude + buffer,
      west: viewport.longitude - buffer,
      east: viewport.longitude + buffer,
    };
    
  };
  
  export default calculateViewportBounds;