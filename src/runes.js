import axios from 'axios';

// Using an alternative CORS proxy


const BASE_URL = 'https://open-api.unisat.io/v3/';
const API_KEY = 'a21c294eedde0a38e6cd4aa475e6357ec4425f2b3791ad666e1621750ba68f7f'; // Replace with your actual API key

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Authorization': `Bearer ${API_KEY}`,
    'accept': 'application/json'
  }
});



export const fetchRunesTypes = async () => {
  try {
    const response = await api.post('market/runes/auction/runes_types', {});
    console.log('Runes Types API response:', response.data.data.list);
    return response.data.data.list;
  } catch (error) {
    console.error('Error fetching Runes Types:', error.toJSON ? error.toJSON() : error);
    throw error;
  }
};

// Wrapper function to use the CORS proxy for API calls
export const fetchWithCorsProxy = async (endpoint, method = 'POST', data = {}) => {
  try {
    const encodedUrl = encodeURIComponent(BASE_URL + endpoint);
    const response = await axios({
      url: `${CORS_PROXY}${encodedUrl}`,
      method,
      data,
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'accept': 'application/json'
      }
    });
    const jsonResponse = JSON.parse(response.data.contents);
    return jsonResponse;
  } catch (error) {
    console.error(`Error fetching data from ${endpoint}:`, error.toJSON ? error.toJSON() : error);
    throw error;
  }
};
