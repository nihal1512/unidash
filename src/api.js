// src/api.js
import axios from 'axios';

const BASE_URL = 'https://open-api.unisat.io/v1/';
const API_KEY = 'a21c294eedde0a38e6cd4aa475e6357ec4425f2b3791ad666e1621750ba68f7f';
// Replace with your actual API key

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Authorization': `Bearer ${API_KEY}`, // Format specified in the documentation
    'accept': 'application/json'
  }
});

export const fetchBRC20List = async () => {
  try {
    const response = await api.get('indexer/brc20/list'); // Replace with actual endpoint for BRC-20 list if different
    console.log('API response:', response.data.data.detail); 
    const resstatus = await api.get('indexer/brc20/status');
    console.log("status", resstatus);
    const info = await api.get('indexer/brc20/ordi/info');
    console.log("info", info);
    return response.data.data.detail;

  
  
  } catch (error) {
    console.error('Error fetching BRC-20 list:', error);
    throw error;
  }
};
