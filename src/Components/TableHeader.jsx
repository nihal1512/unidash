// src/components/TableHeader.js
import React from 'react';
import './TableHeader.css';

const TableHeader = () => {
  return (
    <thead className="table-header">
      <tr>
        <th>Name</th>
        <th>Deploy Time</th>
        <th>Progress</th>
        <th>Holders</th>
        <th>Transactions</th>
      </tr>
    </thead>
  );
};

export default TableHeader;
