import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AlertContainer from '../Components/AlertContainer';
import { fetchLatestPrices } from '../runes';
import { updatePrices, setAlertPrice } from '../features/watchlistSlice';
import './watchlist.css';

const Watchlist = () => {
  const watchlist = useSelector((state) => state.watchlist);
  const dispatch = useDispatch();
  const [alertInputs, setAlertInputs] = useState({});

  useEffect(() => {
    let isMounted = true;
    const fetchPrices = async () => {
      if (watchlist.length > 0) {
        const updatedPrices = await fetchLatestPrices(watchlist);
        if (isMounted) {
          dispatch(updatePrices(updatedPrices));
        }
      }
    };

    fetchPrices();

    const fetchPricesInterval = setInterval(fetchPrices, 10000);

    return () => {
      isMounted = false;
      clearInterval(fetchPricesInterval);
    };
  }, [watchlist, dispatch]);

  const handleAlertInputChange = (tick, value) => {
    setAlertInputs({
      ...alertInputs,
      [tick]: value
    });
  };

  const handleAlertPriceSelect = (tick) => {
    if (alertInputs[tick]) {
      dispatch(setAlertPrice({ tick, alertPrice: alertInputs[tick] }));
    }
  };

  const alertMessage = watchlist.length === 0 ? 'No items in the watchlist' : `You have ${watchlist.length} items in your watchlist`;

  return (
    <div className="table-container">
      <AlertContainer message={alertMessage} type={watchlist.length === 0 ? 'warning' : 'info'} />
      <h1>Watchlist</h1>
      <div className="table-wrapper">
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
              <th>Alert Price</th>
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
                  <td><img src={runeType.symbol} alt="symbol" className="symbol-image" /></td>
                  <td>
                    <div className="alert-price-container">
                      <input
                        type="number"
                        value={alertInputs[runeType.tick] || ''}
                        onChange={(e) => handleAlertInputChange(runeType.tick, e.target.value)}        
                        className="alert-input"
                      />
                      <button onClick={() => handleAlertPriceSelect(runeType.tick)} className="alert-button">Set</button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8">No items in the watchlist</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Watchlist;
