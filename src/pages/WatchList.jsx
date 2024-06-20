import React from 'react';
import { useSelector } from 'react-redux';
import './Dashboard.css';

const Watchlist = () => {
  const watchlist = useSelector((state) => state.watchlist);

  return (
    <div className="table-container">
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
