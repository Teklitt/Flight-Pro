const axios = require('axios');

test('getAmadeusToken API returns an access token', async () => {
  const response = await axios.post('http://localhost:3000/api/gettoken', {}, {
    headers: { 'Content-Type': 'application/json' }
  });

  expect(response.status).toBe(200);
  expect(response.data).toHaveProperty('access_token');
});
