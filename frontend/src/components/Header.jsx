import React, { useState } from "react";
import DoubletickLogo from "/assets/Doubletick Logo.png";
import FilterIcon from "/assets/test_Filter.svg";
import "./Header.css";

const Header = ({ searchTerm, setSearchTerm }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="header-bar">
      <div className="header-left">
        <img src={DoubletickLogo} alt="Logo" className="logo" />
        <span className="title">All Customers</span>
        <span className="count-badge">1230</span>
      </div>

      <div className="header-right">
        <input
          type="text"
          className="search-input"
          placeholder="Search Customers"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="filters-wrap">
          <button className="filters-btn" onClick={() => setOpen(!open)}>
            <img src={FilterIcon} alt="Filter" className="filter-icon" />
            Add Filters
          </button>
          {open && (
            <div className="filters-dropdown">
              <div className="filter-item">Filter 1</div>
              <div className="filter-item">Filter 2</div>
              <div className="filter-item">Filter 3</div>
              <div className="filter-item">Filter 4</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;