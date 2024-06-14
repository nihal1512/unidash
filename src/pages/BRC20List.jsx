// src/components/BRC20List.js
import React, { useEffect, useState } from 'react';
import { fetchBRC20List } from '../api';
import './brc20list.css';

const BRC20List = () => {
  const [brc20List, setBrc20List] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getBRC20List = async () => {
      try {
        const data = await fetchBRC20List();
        console.log('Fetched data:', data);
        setBrc20List(data); // Ensure the state is set correctly
        console.log(data);
      } catch (error) {
        setError(error);
        console.error('Detailed error:', error.response ? error.response.data : error.message);
      } finally {
        setLoading(false);
      }
    };

    getBRC20List();
  }, []);


  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>BRC-20 List</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {brc20List.length > 0 ? (
            brc20List.map((item, index) => (
              <tr key={index}>
                <td>{item}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td>No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BRC20List;
