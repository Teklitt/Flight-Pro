// /pages/api/getAmadeusToken.js

import axios from 'axios';

const AMADEUS_CLIENT_ID = process.env.AMADEUS_CLIENT_ID; 
const AMADEUS_CLIENT_SECRET = process.env.AMADEUS_CLIENT_SECRET; 

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const response = await axios.post(
        'https://test.api.amadeus.com/v1/security/oauth2/token',
        new URLSearchParams({
          'grant_type': 'client_credentials',
          'client_id': AMADEUS_CLIENT_ID,
          'client_secret': AMADEUS_CLIENT_SECRET,
        }),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );

      // Send back the access token
      res.status(200).json({ access_token: response.data.access_token });
    } catch (error) {
      console.error('Error fetching Amadeus access token:', error);
      res.status(error.response?.status || 500).json({ message: 'Error fetching access token' });
    }
  } else {
    // Handle any other HTTP method
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
