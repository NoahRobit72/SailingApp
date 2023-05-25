function calculateDistance(lat1, lon1, lat2, lon2) {
    const earthRadius = 20903520; // Earth's radius in feet
  
    // Convert degrees to radians
    const toRadians = (degrees) => (degrees * Math.PI) / 180;
  
    // Calculate the differences in latitude and longitude
    const dLat = toRadians(lat2 - lat1);
    const dLon = toRadians(lon2 - lon1);
  
    // Apply the Haversine formula
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRadians(lat1)) *
        Math.cos(toRadians(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = earthRadius * c;
  
    return distance;
}

  
//   // Example usage
//   const lat1 = 42.3512148;
//   const lon1 = -71.1145613;
//   const lat2 = 42.3512816;
//   const lon2 = -71.1145939;
  
//   const distance = calculateDistance(lat1, lon1, lat2, lon2);
//   console.log('Distance:', distance.toFixed(2), 'feet');
  