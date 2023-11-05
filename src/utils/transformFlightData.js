function toISO8601Duration(hours, minutes) {
    let duration = 'PT';
    if (hours > 0) {
      duration += `${hours}H`;
    }
    if (minutes > 0) {
      duration += `${minutes}M`;
    }
    if (duration === 'PT') {
      duration += '0M';
    }
    return duration;
  }
  
  
function transformFlightData(flightData) {
return flightData.map(flight => {
    const {
    flightNumber,
    origin,
    destination,
    departureTime,
    arrivalTime,
    aircraft,
    duration,
    } = flight;

    // Extract and format dates and times
    const departureDateTime = new Date(departureTime);
    const arrivalDateTime = new Date(arrivalTime);
    const departureDate = departureDateTime.toISOString().split('T')[0]; // yyyy-mm-dd
    const arrivalDate = arrivalDateTime.toISOString().split('T')[0]; // yyyy-mm-dd

    // Use the toISO8601Duration function provided earlier for formatting duration
    const isoDuration = toISO8601Duration(duration.hours, duration.minutes);

    // Format the data as required by the Amadeus API
    const formattedFlightData = {
    flightNumber,
    orginLocationCode: origin.code,
    destinationLocationCode: destination.code,
    departureDate,
    departureTime: departureDateTime.toISOString(),
    arrivalDate,
    arrivalTime: arrivalDateTime.toISOString(),
    aircraftCode: aircraft.model,
    duration: isoDuration
    };

    return formattedFlightData;
});
}
  
module.exports = {
    transformFlightData
};
  