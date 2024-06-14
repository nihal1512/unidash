// src/pages/Dashboard.js
import React, { useState } from 'react';
import BRC20List from './BRC20List';
import RuneTypesList from '../Components/RuneTypesList';
import './Dashboard.css';

const Dashboard = () => {
  // const [selectedData, setSelectedData] = useState('brc20');

  // const handleBRC20Click = () => {
  //   setSelectedData('brc20');
  // };

  // const handleRunesClick = () => {
  //   setSelectedData('runes');
  // };

  return (
    <div className="dashboard">
      <h3 className="dashboard-heading">Check out BCR20 balance of the address</h3>
      <input type="text" className="address-input" placeholder="Enter address here" />
      <h5 className="dashboard-subheading">Recognize all operations including deploy, mint, and transfer</h5>
      {/* <div className="button-group">
        <button onClick={handleBRC20Click} className={selectedData === 'brc20' ? 'active' : ''}>BRC20</button>
        <button onClick={handleRunesClick} className={selectedData === 'runes' ? 'active' : ''}>Runes</button>
      </div>
      {selectedData === 'brc20' ? <BRC20List /> : <RuneTypesList />} */}
      <RuneTypesList/>
    </div>
  );
};

export default Dashboard;
