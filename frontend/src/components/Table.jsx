import React from 'react';
import './Table.css';
import CustomerRow from './CustomerRow';

const Table = ({ customers }) => {
  return (
    <div className="customer-table">
      <div className="table-header">
        <div className="header-cell checkbox-cell"></div>
        <div className="header-cell">Customer</div>
        <div className="header-cell">Score</div>
        <div className="header-cell">Email</div>
        <div className="header-cell">Last message sent at</div>
        <div className="header-cell">Added by</div>
      </div>
      {customers.map((customer, index) => (
        <CustomerRow key={index} customer={customer} />
      ))}
    </div>
  );
};

export default Table;
