import React from 'react';
import { Link } from 'react-router-dom';
import RuneTypesList from '../Components/RuneTypesList';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      
      <RuneTypesList />
      <div className="navigation">
        <Link to="/watchlist" className='watchlist-link'>Go to Watchlist</Link>
      </div>
    </div>
  );
};

export default Dashboard;