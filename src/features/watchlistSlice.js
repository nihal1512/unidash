import { createSlice } from '@reduxjs/toolkit';

const watchlistSlice = createSlice({
  name: 'watchlist',
  initialState: [],
  reducers: {
    addToWatchlist: (state, action) => {
      state.push(action.payload);
    },
    removeFromWatchlist: (state, action) => {
      return state.filter(item => item.tick !== action.payload);
    },
    updatePrices: (state, action) => {
      action.payload.forEach(updatedItem => {
        const index = state.findIndex(item => item.tick === updatedItem.tick);
        if (index !== -1) {
          state[index].curPrice = updatedItem.curPrice;
        }
      });
    },
    setAlertPrice: (state, action) => {
      const { tick, alertPrice } = action.payload;
      const index = state.findIndex(item => item.tick === tick);
      if (index !== -1) {
        state[index].alertPrice = alertPrice;
      }
    }
  }
});

export const { addToWatchlist, removeFromWatchlist, updatePrices, setAlertPrice } = watchlistSlice.actions;
export default watchlistSlice.reducer;
