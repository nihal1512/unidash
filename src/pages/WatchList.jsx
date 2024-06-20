import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AlertContainer from '../Components/AlertContainer';
import { fetchLatestPrices } from '../runes';
import { updatePrices } from '../features/watchlistSlice';
import './watchlist.css';

const Watchlist = () => {
  const watchlist = useSelector((state) => state.watchlist);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPricesInterval = setInterval(async () => {
      if (watchlist.length > 0) {
        const updatedPrices = await fetchLatestPrices(watchlist);
        dispatch(updatePrices(updatedPrices));
      }
    }, 1000);

    return () => clearInterval(fetchPricesInterval);
  }, [watchlist, dispatch]);

  const alertMessage = watchlist.length === 0 ? 'No items in the watchlist' : `You have ${watchlist.length} items in your watchlist`;

  return (
    <div className="table-container">
      <AlertContainer message={alertMessage} type={watchlist.length === 0 ? 'warning' : 'info'} />
      <h1>Watchlist</h1>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Tick</th>
            <th>Current Price</th>
            <th>Change Price</th>
            <th>BTC Volume</th>
            <th>Amount Volume</th>
            <th>Holders</th>
            <th>Symbol</th>
          </tr>
        </thead>
        <tbody>
          {watchlist.length > 0 ? (
            watchlist.map((runeType, index) => (
              <tr key={index}>
                <td>{runeType.tick}</td>
                <td>{runeType.curPrice}</td>
                <td>{runeType.changePrice}</td>
                <td>{runeType.btcVolume}</td>
                <td>{runeType.amountVolume}</td>
                <td>{runeType.holders}</td>
                <td>{runeType.symbol}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">No items in the watchlist</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Watchlist;
