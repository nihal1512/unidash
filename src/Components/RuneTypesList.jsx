// src/components/RuneTypesList.js
import React, { useEffect, useState } from 'react';
import { fetchRunesTypes } from '../runes';
import CircularProgress from '@mui/material/CircularProgress';
import SearchBar from './SearchBar';
import './runeTypesList.css';

const RuneTypesList = () => {
  const [runeTypes, setRuneTypes] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getRuneTypes = async () => {
      try {
        const data = await fetchRunesTypes();
        setRuneTypes(data);
        setFilteredData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getRuneTypes();
  }, []);

  const handleSearch = (filteredData) => {
    setSearchResults(filteredData);
    setFilteredData(filteredData.length > 0 ? filteredData : runeTypes);
  };

  const handleReset = () => {
    setSearchResults([]);
    setFilteredData(runeTypes);
  };

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="table-container">
      <h1>Rune Types</h1>
      <SearchBar data={runeTypes} onSearch={handleSearch} />
      
      {searchResults.length > 0 && (
        <div className="search-results">
          {searchResults.map((runeType, index) => (
            <div key={index} className="search-result-item">
              {runeType.tick}
            </div>
          ))}
          <button onClick={handleReset} className="reset-button">Reset Table</button>
        </div>
      )}

      {loading ? (
        <div className="spinner-container">
          <CircularProgress color="inherit" />
        </div>
      ) : (
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
              <th>Warning</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((runeType, index) => (
                <tr key={index}>
                  <td>{runeType.tick}</td>
                  <td>{runeType.curPrice}</td>
                  <td>{runeType.changePrice}</td>
                  <td>{runeType.btcVolume}</td>
                  <td>{runeType.amountVolume}</td>
                  <td>{runeType.holders}</td>
                  <td>{runeType.symbol}</td>
                  <td>{runeType.warning}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8">No data available</td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default RuneTypesList;
