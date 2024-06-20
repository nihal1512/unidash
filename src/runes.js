import axios from 'axios';

const BASE_URL = 'https://open-api.unisat.io/v3/';
const API_KEY = 'ee0d320e94067ae6c599260c368111cc89b21fb885eb470f9971c9850d671e7d'; 

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


export const fetchLatestPrices = async (watchlist) => {
  try {
    const updatedPrices = await Promise.all(watchlist.map(async (item) => {
      const response = await api.post('market/runes/auction/runes_types', { tick: item.tick });
      const updatedItem = response.data.data.list.find(rune => rune.tick === item.tick);
      return {
        ...item,
        curPrice: updatedItem.curPrice,
      };
    }));
    return updatedPrices;
  } catch (error) {
    console.error('Error fetching latest prices:', error.toJSON ? error.toJSON() : error);
    throw error;
  }
};