// Import fetch API for making the HTTP requests
const fetch = require('node-fetch');

// Define a generic test flight data object
const testFlightData = {
  originLocationCode: 'JFK',
  destinationLocationCode: 'LAX',
  departureDate: '2023-11-20',
  departureTime: '07:00',
  arrivalDate: '2023-11-20'
};

// The actual test case
describe('Flight Delay Prediction API Handler', () => {
  it('returns delay probabilities', async () => {
    // Start the server before the test runs
    const server = require('../path/to/your/next/server/start/file'); // This should point to your Next.js server starting script

    // Define the request options
    const requestOptions = {
      method: 'POST',
      body: JSON.stringify(testFlightData),
      headers: {
        'Content-Type': 'application/json'
      }
    };

    // Make the request to the flight delay prediction handler
    const response = await fetch('http://localhost:3000/api/flightDelayPrediction', requestOptions);

    // Expect the response to be OK
    expect(response.ok).toBeTruthy();

    // Parse the response body as JSON
    const data = await response.json();

    // Here we are checking if the 'probability' field exists in the response
    // You will need to adjust this based on the actual response structure
    expect(data).toHaveProperty('probability');

    // Stop the server after the test runs
    server.close();
  });
});
