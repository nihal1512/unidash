// src/components/TableRow.js
import React from 'react';
import './TableRow.css';

const TableRow = ({ data }) => {
  return (
    <tr className="table-row">
      <td>{data}</td> {/* Display the name in the first column */}
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  );
};

export default TableRow;
