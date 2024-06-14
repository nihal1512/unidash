// src/components/RuneTypesList.js
import React, { useEffect, useState } from 'react';
import { fetchRunesTypes } from '../runes';
import './runeTypesList.css';

const RuneTypesList = () => {
  const [runeTypes, setRuneTypes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(20);
  const [pageWindow, setPageWindow] = useState([1, 2, 3, 4, 5]);
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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;


//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = runeTypes.slice(indexOfFirstItem, indexOfLastItem);

//   const totalPages = Math.ceil(runeTypes.length / itemsPerPage);

//   const paginate = (pageNumber) => {
//     setCurrentPage(pageNumber);
//     updatePageWindow(pageNumber);
//   };

//   const updatePageWindow = (pageNumber) => {
//     if (pageNumber <= 3) {
//       setPageWindow([1, 2, 3, 4, 5]);
//     } else if (pageNumber >= totalPages - 2) {
//       setPageWindow([totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages]);
//     } else {
//       setPageWindow([pageNumber - 2, pageNumber - 1, pageNumber, pageNumber + 1, pageNumber + 2]);
//     }
//   };

//   const handleNext = () => {
//     if (currentPage < totalPages) {
//       paginate(currentPage + 1);
//     }
//   };

//   const handlePrevious = () => {
//     if (currentPage > 1) {
//       paginate(currentPage - 1);
//     }
//   };

  return (
    <div className='table-container'>
      <h1>Rune Types</h1>
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
            runeTypes.map((runeType, index) => (
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
