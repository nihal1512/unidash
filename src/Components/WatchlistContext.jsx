import React, { createContext, useState, useContext } from 'react';

const WatchlistContext = createContext();

export const WatchlistProvider = ({ children }) => {
  const [watchlist, setWatchlist] = useState([]);

  const addToWatchlist = (item) => {
    setWatchlist((prevList) => [...prevList, item]);
  };

  const removeFromWatchlist = (tick) => {
    setWatchlist((prevList) => prevList.filter((item) => item.tick !== tick));
  };

  return (
    <WatchlistContext.Provider value={{ watchlist, addToWatchlist, removeFromWatchlist }}>
      {children}
    </WatchlistContext.Provider>
  );
};

export const useWatchlist = () => useContext(WatchlistContext);
