import React from 'react';
import { Link } from 'react-router-dom';
import RuneTypesList from '../Components/RuneTypesList';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h3 className="dashboard-heading">Check out BCR20 balance of the address</h3>
      <h5 className="dashboard-subheading">Recognize all operations including deploy, mint, and transfer</h5>
    
      <RuneTypesList />

      <div className="navigation">
        <Link to="/watchlist">Go to Watchlist</Link>
      </div>
    </div>
  );
};

export default Dashboard;
