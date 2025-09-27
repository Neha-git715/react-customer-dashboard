import React from "react";
import { FaUser } from "react-icons/fa";
import "./CustomerRow.css";

const CustomerRow = ({ customer }) => {
  const { name, phone, email, score, lastMessageAt, addedBy, avatar } = customer;
  const formattedDate = new Date(lastMessageAt).toLocaleString();
  const avatarSrc = avatar ? `/assets/${avatar}` : "/assets/Doubletick Logo.png"; // Fallback to logo if no avatar

  return (
    <div className="customer-row">
      <div className="customer-checkbox">
        <input type="checkbox" aria-label={`Select customer ${name}`} />
      </div>

      <div className="customer-info">
        {avatarSrc && (
          <img
            src={avatarSrc}
            alt={`${name}'s avatar`}
            className="avatar"
            onError={(e) => (e.target.src = "/assets/Doubletick Logo.png")} // Fallback to logo on error
          />
        )}
        {!avatarSrc && <FaUser className="avatar-icon" />}
        <div className="customer-name-phone">
          <div className="name">{name}</div>
          <div className="phone">{phone}</div>
        </div>
      </div>

      <div className="customer-score">{score ?? "-"}</div>
      <div className="customer-email">{email ?? "-"}</div>
      <div className="customer-last-message">{formattedDate}</div>

      <div className="customer-added-by">
        <FaUser className="added-icon" />
        <span>{addedBy}</span>
      </div>
    </div>
  );
};

export default CustomerRow;