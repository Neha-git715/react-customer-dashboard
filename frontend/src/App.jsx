import React, { useEffect, useState, useRef, useCallback } from "react";
import { generateCustomers } from "./utils/generateData";
import CustomerRow from "./components/CustomerRow";
import "./App.css";

const BATCH_SIZE = 20;


function App() {
  const [customers, setCustomers] = useState([]);
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);
  const [searchTerm, setSearchTerm] = useState("");
  const allCustomers = useRef(generateCustomers(1000));
  const observer = useRef();

  const lastRowRef = useCallback((node) => {
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setVisibleCount((prev) => prev + BATCH_SIZE);
      }
    });

    if (node) observer.current.observe(node);
  }, []);

  useEffect(() => {
    const filtered = allCustomers.current.filter((c) =>
      c.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCustomers(filtered.slice(0, visibleCount));
  }, [searchTerm, visibleCount]);

  return (
    <div className="app-container">
      <header className="app-header">
        <img src="/assets/Doubletick Logo.png" alt="Logo" className="logo" />
        <h1 className="title">
          All Customers <span className="count">{allCustomers.current.length}</span>
        </h1>
        <div className="actions">
          <input
            type="search"
            className="search-input"
            placeholder="Search Customers"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-label="Search Customers"
          />
          <button className="filter-btn">Add Filters</button>
        </div>
      </header>

      <section className="customer-table">
        <div className="table-header">
          <div className="header-checkbox"></div>
          <div className="header-cell customer-column">Customer</div>
          <div className="header-cell score-column">Score</div>
          <div className="header-cell email-column">Email</div>
          <div className="header-cell last-message-column">Last message sent at</div>
          <div className="header-cell added-by-column">Added by</div>
        </div>

        <div className="table-body">
          {customers.map((customer, index) => {
            if (index === customers.length - 1) {
              return (
                <div ref={lastRowRef} key={customer.id}>
                  <CustomerRow customer={customer} />
                </div>
              );
            }
            return <CustomerRow key={customer.id} customer={customer} />;
          })}
        </div>
      </section>
    </div>
  );
}

export default App;
