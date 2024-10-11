const fetch = require('node-fetch');

// Replace with your Adalo collection API endpoint and API key
const ADALO_API_URL = 'https://api.adalo.com/v0/apps/c05cad5f-b429-4178-901f-2de8e69be452/collections/t_9tg6j0pzv0zulanzaxzm2w0qh';
const ADALO_API_KEY = 'your_adalo_api_key';

async function fetchData() {
  const response = await fetch(ADALO_API_URL, {
    headers: {
      Authorization: `Bearer ${ADALO_API_KEY}`
    }
  });
  const data = await response.json();
  return data;
}

fetchData().then(data => console.log(data));
