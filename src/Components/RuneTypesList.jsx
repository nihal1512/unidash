import React, { useEffect, useState, useRef } from 'react';
import { fetchRunesTypes } from '../runes';
import CircularProgress from '@mui/material/CircularProgress';
import SearchBar from './SearchBar';
import { useDispatch } from 'react-redux';
import { addToWatchlist, removeFromWatchlist } from '../features/watchlistSlice';
import './runeTypesList.css';

const RuneTypesList = () => {
  const dispatch = useDispatch();
  const [runeTypes, setRuneTypes] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedTable, setSelectedTable] = useState('unisat');
  const tableRefs = useRef({});

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

  const scrollToTick = (tick) => {
    const element = tableRefs.current[tick];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleCheckboxChange = (runeType) => (event) => {
    if (event.target.checked) {
      dispatch(addToWatchlist(runeType));
    } else {
      dispatch(removeFromWatchlist(runeType.tick));
    }
  };

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="table-container">
      <h1>Rune Types</h1>
      <div className="table-toggle">
        <button 
          onClick={() => setSelectedTable('unisat')} 
          className={selectedTable === 'unisat' ? 'active' : ''}>UniSat List
        </button>
        <button 
          onClick={() => setSelectedTable('magiceden')} 
          className={selectedTable === 'magiceden' ? 'active' : ''}>MagicEden
        </button>
      </div>

      <SearchBar data={runeTypes} onSearch={handleSearch} />
      
      {searchResults.length > 0 && (
        <div className="search-results">
          {searchResults.map((runeType, index) => (
            <div
              key={index}
              className="search-result-item"
              onClick={() => scrollToTick(runeType.tick)}
            >
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
              <th>Watch List</th>
            </tr>
          </thead>
          <tbody>
            {selectedTable === 'unisat' && filteredData.length > 0 ? (
              filteredData.map((runeType, index) => (
                <tr key={index} ref={(el) => (tableRefs.current[runeType.tick] = el)}>
                  <td>{runeType.tick}</td>
                  <td>{runeType.curPrice}</td>
                  <td>{runeType.changePrice}</td>
                  <td>{runeType.btcVolume}</td>
                  <td>{runeType.amountVolume}</td>
                  <td>{runeType.holders}</td>
                  <td>{runeType.symbol}</td>
                  <td>
                    <input
                      type="checkbox"
                      onChange={handleCheckboxChange(runeType)}
                    />
                  </td>
                </tr>
              ))
            ) : (
              selectedTable === 'magiceden' ? (
                <tr>
                  <td colSpan="8">MagicEden table content will be here</td>
                </tr>
              ) : (
                <tr>
                  <td colSpan="8">No data available</td>
                </tr>
              )
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default RuneTypesList;
