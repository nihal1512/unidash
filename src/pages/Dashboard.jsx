import React from 'react'
import Table from '../Components/Table';
import "./Dashboard.css"

const Dashboard = () => {
    return (
        <div className="dashboard">
        <h3 className="dashboard-heading">Check out BCR20 balance of the address</h3>
        <input type="text" className="address-input" placeholder="Enter address here" />
        <h5 className="dashboard-subheading">Recognize all operations including deploy, mint, and transfer</h5>
        <Table />
        </div>
      );
}

export default Dashboard
