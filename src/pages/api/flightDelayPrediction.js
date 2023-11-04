// /pages/api/flightDelayPrediction.js

import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const {
      access_token,
      originLocationCode,
      destinationLocationCode,
      departureDate,
      departureTime,
      arrivalDate,
      arrivalTime,
      aircraftCode,
      carrierCode,
      flightNumber,
      duration
    } = req.body;

    try {
      const response = await axios.get(
        'https://test.api.amadeus.com/v1/travel/predictions/flight-delay',
        {
          headers: {
            'Authorization': `Bearer ${access_token}`,
          },
          params: {
            originLocationCode,
            destinationLocationCode,
            departureDate,
            departureTime,
            arrivalDate,
            arrivalTime,
            aircraftCode,
            carrierCode,
            flightNumber,
            duration,
          },
        }
      );

      // Send back the response data
      res.status(200).json(response.data);
    } catch (error) {
      console.error('Error fetching flight delay prediction:', error);
      res.status(error.response?.status || 500).json({ message: 'Error fetching flight delay prediction' });
    }
  } else {
    // Handle any other HTTP method
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
