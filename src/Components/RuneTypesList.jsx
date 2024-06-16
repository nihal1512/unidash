import React, { useEffect, useState, } from 'react';
import { fetchRunesTypes } from '../runes';
import CircularProgress from '@mui/material/CircularProgress';
import './runeTypesList.css';

const RuneTypesList = () => {
  const [runeTypes, setRuneTypes] = useState([]);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [itemsPerPage] = useState(20);
  // const [pageWindow, setPageWindow] = useState([1, 2, 3, 4, 5]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getRuneTypes = async () => {
      try {
        const data = await fetchRunesTypes();
        setRuneTypes(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getRuneTypes();
  }, []);

  const filteredRuneTypes = runeTypes.filter(item => item.curPrice >=1 );


  if (error) return <div>Error: {error.message}</div>;


  return (
    <div className='table-container'>
      <h1>Rune Types</h1>
      {loading ? (
          <div className="spinner-container">
            <CircularProgress color="inherit" />
          </div>
        ) : (
      <table className="styled-table">
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
          {runeTypes.length > 0 ? (
            filteredRuneTypes.map((runeType, index) => (
              <tr key={index}>
                <td colSpan={2}>{runeType.tick}</td>
                <td>{runeType.curPrice}</td>
                <td colSpan={2}>{runeType.changePrice}</td>
                <td>{runeType.btcVolume}</td>
                <td>{runeType.amountVolume}</td>
                <td>{runeType.holders}</td>
                <td className="symbol">{runeType.symbol}</td>
                <td className="warning">{runeType.warning}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td>No data available</td>
            </tr>
          )}
        </tbody>
      </table>
        )}
       {/* <div className="pagination">
        <button onClick={handlePrevious} disabled={currentPage === 1}>
          &lt;
        </button>
        {pageWindow.map((pageNumber) => (
          <button 
            key={pageNumber} 
            onClick={() => paginate(pageNumber)} 
            className={currentPage === pageNumber ? 'active' : ''}
          >
            {pageNumber}
          </button>
        ))}
        <button onClick={handleNext} disabled={currentPage === totalPages}>
          &gt;
        </button>
      </div> */}

    </div>
  );
};

export default RuneTypesList;
