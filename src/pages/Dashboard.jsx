import React from 'react';
import { Link } from 'react-router-dom';
import RuneTypesList from '../Components/RuneTypesList';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      
      <RuneTypesList />
      
    </div>
  );
};

export default Dashboard;