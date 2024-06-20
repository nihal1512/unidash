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
    }
  }
});

export const { addToWatchlist, removeFromWatchlist, updatePrices } = watchlistSlice.actions;
export default watchlistSlice.reducer;
