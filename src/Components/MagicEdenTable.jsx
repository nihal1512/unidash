import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import './runeTypesList.css';

const MagicEdenTable = () => {
  const [magicEdenData, setMagicEdenData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMagicEdenData = async () => {
      try {
        const response = await axios.get('https://api-mainnet.magiceden.dev/v2/ord/btc/runes/market/rune/info', {
          headers: {
            'accept': 'application/json'
          }
        });
        setMagicEdenData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMagicEdenData();
  }, []);

  if (loading) return <div className="spinner-container"><CircularProgress color="inherit" /></div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
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
        {magicEdenData.map((item, index) => (
          <tr key={index}>
            <td className='tick'>{item.tick}</td>
            <td>{item.curPrice}</td>
            <td>{item.changePrice}</td>
            <td>{item.btcVolume}</td>
            <td>{item.amountVolume}</td>
            <td>{item.holders}</td>
            <td><div className='symbol-image'>{item.symbol}</div></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MagicEdenTable;
