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
              </tr>
            </thead>
            <tbody>
              {alerts.map((alert, index) => (
                <tr key={index}>
                  <td>{alert.tick}</td>
                  <td>{alert.curPrice}</td>
                  <td>{alert.alertPrice}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AlertContainer;
