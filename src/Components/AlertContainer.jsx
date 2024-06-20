import React from 'react';
import './alertContainer.css';

const AlertContainer = ({ message, type, watchlist }) => {
  const alerts = watchlist?.filter(item => item.alertPrice) || [];

  return (
    <div className={`alert-container ${type}`}>
      <p>{message}</p>
      {alerts.length > 0 && (
        <div className="alerts-container">
          <h2>Alerts</h2>
          <table className="alert-table">
            <thead>
              <tr>
                <th>Tick</th>
                <th>Current Price</th>
                <th>Alert Price</th>
                <th>Matched</th>
              </tr>
            </thead>
            <tbody>
              {alerts.map((alert, index) => {
                
                // Convert to numbers
                const currentPrice = parseFloat(alert.curPrice);
                const alertPrice = parseFloat(alert.alertPrice);

                // Check and compare prices
                const matched = currentPrice === alertPrice;

                return (
                  <tr key={index}>
                    <td>{alert.tick}</td>
                    <td>{alert.curPrice}</td>
                    <td>{alert.alertPrice}</td>
                    <td>{matched ? 'Yes' : 'No'}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AlertContainer;
