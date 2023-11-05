import fetch from 'node-fetch';

export default async function handler(req, res) {
  const { date, flightNumber } = req.query;

  if (!date || !flightNumber) {
    return res.status(400).json({ error: 'Missing date or flightNumber query parameters' });
  }

  const url = `https://besmart2023-9a09481decf3.herokuapp.com/flights?date=${date}&flightNumber=${flightNumber}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching flight data:', error);
    res.status(500).json({ error: 'Error fetching flight data' });
  }
}