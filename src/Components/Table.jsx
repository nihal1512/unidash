// src/components/Table.js
import React, { useEffect, useState } from 'react';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import { fetchBRC20List } from '../api'; // Import the API function
import './Table.css';

const Table = () => {
  const [brc20List, setBrc20List] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getBRC20List = async () => {
      try {
        const data = await fetchBRC20List();
        setBrc20List(data); // Ensure the state is set correctly
      } catch (error) {
        setError(error);
        console.error('Error fetching BRC-20 list:', error);
      } finally {
        setLoading(false);
      }
    };

    getBRC20List();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="table-container">
      <table className="styled-table">
        <TableHeader />
        <tbody>
          {brc20List.length > 0 ? (
            brc20List.map((item, index) => (
              <TableRow key={index} data={item} />
            ))
          ) : (
            <tr>
              <td colSpan="5">No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
