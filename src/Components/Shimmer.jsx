// Shimmer.js

import React from 'react';
import './Shimmer.css'; // Assuming you save the CSS as Shimmer.css

const Shimmer = () => {
  // Number of shimmer rows to show
  const shimmerRows = Array.from({ length: 10 }).map((_, index) => index + 1);

  return (
    <div className="shimmer-container">
      <table className="shimmer-table">
        <thead>
          <tr>
          <th colSpan={2}>Tick</th>
            <th>Current Price</th>
            <th colSpan={2}>Change Price</th>
            <th>BTC Volume</th>
            <th>Amount Volume</th>
            <th>Holders</th>
            <th>Symbol</th>
            <th>Warning</th>
          </tr>
        </thead>
        <tbody>
          {shimmerRows.map((row) => (
            <tr key={row}>
              <td className="shimmer-cell"></td>
              <td className="shimmer-cell"></td>
              <td className="shimmer-cell"></td>
              <td className="shimmer-cell"></td>
              <td className="shimmer-cell"></td>
              <td className="shimmer-cell"></td>
              <td className="shimmer-cell"></td>
             
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Shimmer;
