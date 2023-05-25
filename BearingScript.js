function calculateBearing(lat1, lon1, lat2, lon2) {
    const toRadians = (degrees) => (degrees * Math.PI) / 180;
    const toDegrees = (radians) => (radians * 180) / Math.PI;
  
    const φ1 = toRadians(lat1);
    const φ2 = toRadians(lat2);
    const Δλ = toRadians(lon2 - lon1);
  
    const y = Math.sin(Δλ) * Math.cos(φ2);
    const x =
      Math.cos(φ1) * Math.sin(φ2) -
      Math.sin(φ1) * Math.cos(φ2) * Math.cos(Δλ);
    let bearing = Math.atan2(y, x);
  
    // Convert bearing from radians to degrees
    bearing = toDegrees(bearing);
  
    // Normalize bearing to a value between 0 and 360 degrees
    bearing = (bearing + 360) % 360;
  
    return bearing;
}


  
//   // Example usage
//   const lat1 = 42.3512148;
//   const lon1 = -71.1145613;
//   const lat2 = 42.3512816;
//   const lon2 = -71.1145939;
  
//   const bearing = calculateBearing(lat1, lon1, lat2, lon2);
//   console.log('Bearing:', bearing.toFixed(2), 'degrees');
  